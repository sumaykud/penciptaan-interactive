import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, rays, points, GlowRing, SHARED } from '../core/materials.js';
import { SNOISE } from '../core/glsl.js';
import { smooth, lerp, rng, range, easeInOut, easeIn, easeOut } from '../core/util.js';
import { UNIVERSE_TIMELINE } from '../data.js';

/* STORY 8 · Big Bang & dunia dibuat — "terompet" ruang-waktu tumbuh dari titik Big Bang:
   afterglow (CMB) → zaman gelap → bintang pertama → lubang hitam → reionisasi →
   galaksi modern → sekarang. Label timeline menempel di sumbu 3D. Di akhir kamera
   menukik ke satu titik biru → Bumi. */
const LEN = 9, X0 = -4.5;
export const xOf = (u) => X0 + LEN * u;
export const rOf = (u) => 0.06 + 1.0 * (1 - Math.exp(-u / 0.028)) + 0.5 * u + 0.6 * u * u * u;
const AXIS_Y = -2.55, AXIS_Z = 1.0;

const HORN_VS = /* glsl */ `
attribute float aU;
varying float vU; varying vec3 vN; varying vec3 vV; varying vec3 vP;
void main(){
  vU = aU; vP = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
const HORN_FS = /* glsl */ `
${SNOISE}
uniform float uGrow, uOpacity, uTime;
varying float vU; varying vec3 vN; varying vec3 vV; varying vec3 vP;
void main(){
  if (vU > uGrow) discard;
  float fr = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.0);
  vec3 deep = vec3(0.06, 0.1, 0.42), violet = vec3(0.36, 0.16, 0.62);
  vec3 col = mix(deep, violet, smoothstep(0.25, 1.0, vU)) * (0.25 + 0.9 * fr);
  float n = snoise(vP * 2.6) * 0.5 + 0.5;
  float nn = snoise(vP * 8.0 + 3.0) * 0.5 + 0.5;
  float cmb = 1.0 - smoothstep(0.03, 0.075, vU);
  vec3 cmbCol = mix(vec3(0.08, 0.32, 0.85), vec3(0.18, 0.78, 0.62), smoothstep(0.3, 0.55, n));
  cmbCol = mix(cmbCol, vec3(0.95, 0.85, 0.3), smoothstep(0.6, 0.8, n * 0.6 + nn * 0.4));
  col = mix(col, cmbCol * (0.45 + 0.9 * nn), cmb);
  col += vec3(0.08, 0.12, 0.3) * smoothstep(0.55, 0.9, nn) * (1.0 - cmb) * 0.6;
  float front = exp(-pow((uGrow - vU) * 45.0, 2.0)) * step(vU, uGrow);
  col += vec3(0.55, 0.8, 1.0) * front * 0.5;
  gl_FragColor = vec4(col * uOpacity * (0.26 + 0.24 * cmb), 1.0);
}`;
const WIRE_VS = /* glsl */ `
attribute float aU; varying float vU;
void main(){ vU = aU; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const WIRE_FS = /* glsl */ `
uniform float uGrow, uOpacity; uniform vec3 uColor; uniform float uBase;
varying float vU;
void main(){
  if (vU > uGrow) discard;
  float front = exp(-pow((uGrow - vU) * 34.0, 2.0));
  vec3 col = uColor * (uBase + 0.18 * vU) + vec3(0.75, 0.9, 1.0) * front * 0.9;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}`;
const STAR_VS = /* glsl */ `
attribute float aSize; attribute vec3 aColor; attribute float aAlpha; attribute float aSeed; attribute float aU; attribute float aRot;
uniform float uPR, uPxScale, uTime, uOpacity, uGrow, uMaxSize;
varying vec3 vColor; varying float vAlpha; varying float vRot;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float on = smoothstep(aU, aU + 0.02, uGrow);
  float tw = 1.0 + 0.35 * sin(uTime * (0.6 + aSeed * 2.0) + aSeed * 40.0);
  gl_PointSize = min(aSize * uPR * uPxScale / max(-mv.z, 0.05) * on, uMaxSize * uPR);
  vColor = aColor; vAlpha = aAlpha * uOpacity * on * tw; vRot = aRot;
}`;
const STAR_FS = /* glsl */ `
uniform sampler2D uMap; uniform float uUseMap;
varying vec3 vColor; varying float vAlpha; varying float vRot;
void main(){
  vec2 q = gl_PointCoord - 0.5;
  if (uUseMap > 0.5) {
    float c = cos(vRot), s = sin(vRot);
    vec2 r = vec2(c * q.x - s * q.y, s * q.x + c * q.y) + 0.5;
    vec4 t = texture2D(uMap, r);
    gl_FragColor = vec4(t.rgb * vColor * t.a * vAlpha, 1.0);
  } else {
    float d = dot(q, q) * 4.0;
    if (d > 1.0) discard;
    float a = exp(-d * 7.0);
    gl_FragColor = vec4(vColor * a * vAlpha, 1.0);
  }
}`;

export class ActBigBang extends Act {
  constructor(ctx) {
    super(ctx, { start: 7, end: 7 });
    this.horn = new THREE.Group();
    this.horn.rotation.set(0.06, -0.36, 0.07);
    this.horn.position.set(0, 0.25, 0);
    this.group.add(this.horn);
    const r = rng(1234);
    const m = ctx.mobile ? 0.55 : 1;
    this.mats = [];

    // permukaan
    const NU = 200, NV = 72;
    const pos = [], nor = [], au = [], idx = [];
    for (let i = 0; i <= NU; i++) {
      const u = i / NU, x = xOf(u), rad = rOf(u);
      const dr = (rOf(Math.min(u + 0.002, 1)) - rOf(Math.max(u - 0.002, 0))) / (LEN * 0.004);
      for (let j = 0; j <= NV; j++) {
        const v = (j / NV) * Math.PI * 2;
        pos.push(x, rad * Math.cos(v), rad * Math.sin(v));
        const n = V(-dr, Math.cos(v), Math.sin(v)).normalize();
        nor.push(n.x, n.y, n.z);
        au.push(u);
      }
    }
    for (let i = 0; i < NU; i++) for (let j = 0; j < NV; j++) {
      const a = i * (NV + 1) + j, b = a + NV + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    sg.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    sg.setAttribute('aU', new THREE.Float32BufferAttribute(au, 1));
    sg.setIndex(idx);
    this.surfMat = new THREE.ShaderMaterial({
      uniforms: { uGrow: { value: 0 }, uOpacity: { value: 1 }, uTime: SHARED.uTime },
      vertexShader: HORN_VS, fragmentShader: HORN_FS,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    const surf = new THREE.Mesh(sg, this.surfMat);
    surf.frustumCulled = false;
    this.horn.add(surf);

    // grid kawat (garis bujur + cincin)
    const wp = [], wu = [];
    const LON = 44;
    for (let j = 0; j < LON; j++) {
      const v = (j / LON) * Math.PI * 2;
      for (let i = 0; i < NU; i++) {
        const u0 = i / NU, u1 = (i + 1) / NU;
        wp.push(xOf(u0), rOf(u0) * Math.cos(v), rOf(u0) * Math.sin(v), xOf(u1), rOf(u1) * Math.cos(v), rOf(u1) * Math.sin(v));
        wu.push(u0, u1);
      }
    }
    for (let k = 1; k <= 70; k++) {
      const u = Math.pow(k / 70, 1.15);
      for (let j = 0; j < NV; j++) {
        const v0 = (j / NV) * Math.PI * 2, v1 = ((j + 1) / NV) * Math.PI * 2;
        wp.push(xOf(u), rOf(u) * Math.cos(v0), rOf(u) * Math.sin(v0), xOf(u), rOf(u) * Math.cos(v1), rOf(u) * Math.sin(v1));
        wu.push(u, u);
      }
    }
    const wg = new THREE.BufferGeometry();
    wg.setAttribute('position', new THREE.Float32BufferAttribute(wp, 3));
    wg.setAttribute('aU', new THREE.Float32BufferAttribute(wu, 1));
    this.wireMat = new THREE.ShaderMaterial({
      uniforms: { uGrow: { value: 0 }, uOpacity: { value: 1 }, uColor: { value: new THREE.Color(0.3, 0.55, 1.0) }, uBase: { value: 0.16 } },
      vertexShader: WIRE_VS, fragmentShader: WIRE_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const wire = new THREE.LineSegments(wg, this.wireMat);
    wire.frustumCulled = false;
    this.horn.add(wire);

    // sumbu timeline + tick
    const ap = [], au2 = [];
    const AS = 200;
    for (let i = 0; i < AS; i++) {
      const u0 = i / AS, u1 = (i + 1) / AS;
      ap.push(xOf(u0), AXIS_Y, AXIS_Z, xOf(u1), AXIS_Y, AXIS_Z); au2.push(u0, u1);
    }
    UNIVERSE_TIMELINE.forEach((it) => { ap.push(xOf(it.x), AXIS_Y - 0.08, AXIS_Z, xOf(it.x), AXIS_Y + 0.22, AXIS_Z); au2.push(it.x, it.x); });
    const ag = new THREE.BufferGeometry();
    ag.setAttribute('position', new THREE.Float32BufferAttribute(ap, 3));
    ag.setAttribute('aU', new THREE.Float32BufferAttribute(au2, 1));
    this.axisMat = this.wireMat.clone();
    this.axisMat.uniforms.uColor.value = new THREE.Color(1, 1, 1);
    this.axisMat.uniforms.uBase.value = 0.75;
    const axis = new THREE.LineSegments(ag, this.axisMat);
    axis.frustumCulled = false;
    this.horn.add(axis);

    // bintang & materi di dalam ruang-waktu
    const NS = Math.round(10000 * m);
    const sp = [], ss = [], sc = [], sa = [], sd = [], su = [], sr = [];
    for (let i = 0; i < NS; i++) {
      let u;
      const pick = r();
      if (pick < 0.05) u = 0.075 + r() * 0.11;            // zaman gelap: sangat jarang
      else if (pick < 0.16) u = 0.18 + r() * 0.12;        // bintang pertama
      else u = 0.28 + Math.pow(r(), 0.8) * 0.72;          // galaksi
      const rad = rOf(u) * Math.sqrt(r()) * 0.93, v = r() * Math.PI * 2;
      sp.push(xOf(u), rad * Math.cos(v), rad * Math.sin(v));
      let c, s, a;
      if (u < 0.18) { c = [1.0, 0.45, 0.3]; s = 0.012; a = 0.35; }
      else if (u < 0.3) { c = [0.75, 0.85, 1.0]; s = 0.022 + r() * 0.04; a = 1.0; }
      else {
        const t = r();
        c = t < 0.45 ? [1, 1, 1] : t < 0.7 ? [0.7, 0.82, 1.0] : t < 0.88 ? [1.0, 0.85, 0.6] : [1.0, 0.55, 0.85];
        s = 0.01 + Math.pow(r(), 3) * 0.05; a = 0.5 + r() * 0.5;
      }
      ss.push(s); sc.push(...c); sa.push(a); sd.push(r()); su.push(u); sr.push(0);
    }
    this.stars = this.makePts(sp, ss, sc, sa, sd, su, sr, null);
    this.horn.add(this.stars);

    // sprite galaksi spiral
    const NG = Math.round(110 * m);
    const gp = [], gs = [], gc = [], ga = [], gd = [], gu = [], gr = [];
    for (let i = 0; i < NG; i++) {
      const u = 0.36 + Math.pow(r(), 0.7) * 0.64;
      const rad = rOf(u) * Math.sqrt(r()) * 0.88, v = r() * Math.PI * 2;
      gp.push(xOf(u), rad * Math.cos(v), rad * Math.sin(v));
      gs.push(0.07 + r() * 0.16 * (0.5 + u)); const t = r();
      gc.push(...(t < 0.5 ? [1.6, 1.5, 1.7] : t < 0.8 ? [1.2, 1.4, 2.0] : [2.0, 1.4, 1.1]));
      ga.push(0.7 + r() * 0.3); gd.push(r()); gu.push(u); gr.push(r() * Math.PI * 2);
    }
    this.galaxies = this.makePts(gp, gs, gc, ga, gd, gu, gr, galaxyTexture());
    this.horn.add(this.galaxies);

    // cakram akresi lubang hitam
    this.disks = [];
    for (let i = 0; i < 6; i++) {
      const u = 0.29 + r() * 0.06;
      const d = glow({ color: [1.0, 0.6, 0.3], scale: [0.12, 0.04 + r() * 0.03], falloff: 30, ring: 0.12, coreAmt: 0, intensity: 0.9 });
      const rad = rOf(u) * 0.6 * Math.sqrt(r()), v = r() * Math.PI * 2;
      d.position.set(xOf(u), rad * Math.cos(v), rad * Math.sin(v));
      d.material.uniforms.uRot.value = r() * Math.PI;
      d.userData.u = u;
      this.disks.push(d); this.horn.add(d);
    }

    // titik Big Bang
    this.bbPos = V(X0, 0, 0);
    this.bbCore = glow({ color: [1, 0.9, 0.75], scale: [1.4, 1.4], falloff: 3.4, core: 40, coreAmt: 1.2, intensity: 0.9 });
    this.bbFlare = glow({ color: [1, 0.88, 0.7], scale: [4.0, 0.07], falloff: 1.6, coreAmt: 0, intensity: 0.7 });
    this.bbRays = rays({ scale: [3.2, 3.2], count: 48, sharp: 6, length: 0.35, color: [1, 0.92, 0.8], intensity: 0.9 });
    [this.bbRays, this.bbFlare, this.bbCore].forEach((o) => { o.position.copy(this.bbPos); this.horn.add(o); });

    // muka gelombang waktu
    this.front = new GlowRing({ R: 1, tube: 0.006, color: [0.6, 0.85, 1.0], intensity: 0.9, haloWidth: 0.05, fill: 0.03, haloIntensity: 0.14 });
    this.front.rotation.y = Math.PI / 2;
    this.horn.add(this.front);

    // "rumah": titik biru tujuan → Bumi
    this.homeLocal = V(xOf(0.88), 0.62, 0.7);
    this.home = glow({ color: [0.55, 0.75, 1.0], scale: [0.25, 0.25], falloff: 3, core: 40, coreAmt: 1.2, intensity: 0 });
    this.home.position.copy(this.homeLocal);
    this.horn.add(this.home);

    // Geser seluruh adegan supaya titik Big Bang tepat di posisi cahaya Story 7 (titik asal dunia).
    // Saat peralihan Story 7 → 8 hanya ada SATU cahaya: cahaya kanan Story 7 meredup menjadi
    // titik Big Bang di tempat yang sama, dan kamera menukik ke dalamnya.
    this.horn.updateMatrix();
    this.group.position.copy(this.bbPos.clone().applyMatrix4(this.horn.matrix)).negate();
    this.group.updateMatrixWorld(true);

    // label DOM
    this.labels = [];
    this.tmp = V();
  }

  makePts(p, s, c, a, d, u, rot, map) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3));
    g.setAttribute('aSize', new THREE.Float32BufferAttribute(s, 1));
    g.setAttribute('aColor', new THREE.Float32BufferAttribute(c, 3));
    g.setAttribute('aAlpha', new THREE.Float32BufferAttribute(a, 1));
    g.setAttribute('aSeed', new THREE.Float32BufferAttribute(d, 1));
    g.setAttribute('aU', new THREE.Float32BufferAttribute(u, 1));
    g.setAttribute('aRot', new THREE.Float32BufferAttribute(rot, 1));
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uPR: SHARED.uPR, uPxScale: SHARED.uPxScale, uTime: SHARED.uTime, uOpacity: { value: 1 }, uGrow: { value: 0 },
        uMaxSize: { value: 120 }, uMap: { value: map }, uUseMap: { value: map ? 1 : 0 },
      },
      vertexShader: STAR_VS, fragmentShader: STAR_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.mats.push(mat);
    const pts = new THREE.Points(g, mat);
    pts.frustumCulled = false;
    return pts;
  }

  bindLabels(els) { this.labels = els; }

  grow(P) { return easeInOut(range(0.03, 0.66, P)) * 1.005; }

  update(P, w, t) {
    const g = this.grow(P);
    this.surfMat.uniforms.uGrow.value = g;
    this.surfMat.uniforms.uOpacity.value = w;
    this.wireMat.uniforms.uGrow.value = g;
    this.wireMat.uniforms.uOpacity.value = w;
    this.axisMat.uniforms.uGrow.value = g;
    this.axisMat.uniforms.uOpacity.value = w * smooth(0.04, 0.12, P);
    this.mats.forEach((m) => { m.uniforms.uGrow.value = g; m.uniforms.uOpacity.value = w; });
    this.disks.forEach((d) => (d.material.uniforms.uOpacity.value = w * smooth(d.userData.u, d.userData.u + 0.03, g)));

    const bb = 1 - 0.55 * smooth(0.1, 0.5, P);
    const pulse = 1 + 0.08 * Math.sin(t * 3.1);
    this.bbCore.material.uniforms.uIntensity.value = 0.9 * bb * pulse;
    this.bbFlare.material.uniforms.uIntensity.value = 0.7 * bb * pulse;
    this.bbRays.material.uniforms.uIntensity.value = 0.45 * bb;
    this.bbRays.material.uniforms.uSpin.value = t * 0.01;
    [this.bbCore, this.bbFlare, this.bbRays].forEach((o) => (o.material.uniforms.uOpacity.value = w));

    const fu = Math.min(g, 1);
    this.front.position.x = xOf(fu);
    this.front.scale.setScalar(rOf(fu) * 1.01);
    this.front.opacity = w * smooth(0.02, 0.06, g) * (1 - smooth(0.98, 1.0, g));

    const dive = range(0.8, 1.0, P);
    this.home.material.uniforms.uIntensity.value = 1.3 * smooth(0.72, 0.86, P) * (1 + 0.15 * Math.sin(t * 4));
    this.home.material.uniforms.uScale.value.setScalar(0.25 + 1.6 * easeIn(dive));
    this.home.material.uniforms.uOpacity.value = w;

    // label timeline menempel di sumbu 3D
    const cam = this.ctx.camera;
    const W = this.ctx.size.w, H = this.ctx.size.h;
    const on = w > 0.55 && P < 0.86;
    this.horn.updateMatrixWorld();
    this.labels.forEach((el) => {
      const it = el._item;
      if (it.kind === 'bigbang') this.tmp.copy(this.bbPos);
      else this.tmp.set(xOf(it.x), AXIS_Y + 0.22, AXIS_Z);
      this.tmp.applyMatrix4(this.horn.matrixWorld).project(cam);
      let x = (this.tmp.x * 0.5 + 0.5) * W;
      const y = (-this.tmp.y * 0.5 + 0.5) * H;
      if (it.kind === 'axis-start') x = Math.max(x, 14); // jangan terpotong tepi kiri layar (HP)
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      const visible = on && this.tmp.z < 1 && g >= it.x - 0.002 && (it.kind === 'bigbang' ? P < 0.5 : P > 0.14);
      el.classList.toggle('on', visible);
    });
  }

  pose(P) {
    this.horn.updateMatrixWorld();
    const g = this.grow(P);
    const bb = this.bbPos.clone().applyMatrix4(this.horn.matrixWorld);
    const front = V(xOf(Math.min(g, 1)), 0, 0).applyMatrix4(this.horn.matrixWorld);
    const center = V(0.2, 0, 0).applyMatrix4(this.horn.matrixWorld);
    const home = this.homeLocal.clone().applyMatrix4(this.horn.matrixWorld);
    const dir = V(0.12, 0.2, 1).normalize();
    const portrait = this.ctx.size.w < this.ctx.size.h;

    // 1) dekat Big Bang → 2) mengikuti muka gelombang → 3) gambaran utuh → 4) menukik ke "rumah"
    const k1 = easeOut(range(0.0, 0.62, P));
    const look1 = bb.clone().lerp(front, 0.55).lerp(center, smooth(0.45, 0.66, P));
    const dist1 = lerp(2.3, portrait ? 21 : 12.4, k1);
    const pos1 = look1.clone().addScaledVector(dir, dist1);
    const k3 = easeIn(range(0.8, 1.0, P));
    const look = look1.clone().lerp(home, smooth(0.78, 0.92, P));
    const pos = pos1.clone().lerp(home.clone().addScaledVector(dir, 0.22), k3);
    return { pos, look, fov: 40 };
  }

  post(P) {
    const flash = smooth(0.95, 1.0, P);
    const homeW = this.homeLocal.clone().applyMatrix4(this.horn.matrixWorld);
    const bbW = this.bbPos.clone().applyMatrix4(this.horn.matrixWorld);
    return {
      bloom: 0.75,
      rays: 0.2,
      light: P < 0.75 ? bbW : homeW,
      flash: 0.7 * flash * flash,
      flashColor: [0.75, 0.88, 1.0],
      vignette: 0.85,
    };
  }
}

function galaxyTexture() {
  const S = 128, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const r = rng(99);
  g.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 2600; i++) {
    const arm = i % 2;
    const t = Math.pow(r(), 0.75);
    const ang = t * 7.2 + arm * Math.PI + (r() - 0.5) * 0.55;
    const rad = t * S * 0.44;
    const x = S / 2 + Math.cos(ang) * rad, y = S / 2 + Math.sin(ang) * rad * 0.62;
    const a = (1 - t) * 0.22 + 0.05;
    g.fillStyle = `rgba(${200 + r() * 55},${200 + r() * 55},255,${a})`;
    g.fillRect(x, y, 1.2, 1.2);
  }
  const grd = g.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S * 0.18);
  grd.addColorStop(0, 'rgba(255,240,210,0.95)');
  grd.addColorStop(1, 'rgba(255,220,170,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, S, S);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
