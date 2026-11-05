import * as THREE from 'three';
import { Act, V } from './act.js';
import { points, SHARED } from '../core/materials.js';
import { ArcDiagram } from '../core/arcs.js';
import { smooth, lerp, rng, range, easeInOut } from '../core/util.js';

/* STORY 9 · Bumi — planet dengan cahaya matahari dramatis dari atas; scroll memunculkan
               grafik timeline interconnected di bawahnya (P 0..1).
   STORY 10 · Diagram busur berputar 3D menjadi vertikal; tema Penciptaan / Keselamatan /
               Gereja / Penghakiman, pulse line, hover ayat (P 1..2). */

const EARTH_VS = /* glsl */ `
varying vec2 vUv; varying vec3 vNw; varying vec3 vPw;
void main(){
  vUv = uv;
  vNw = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPw = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;
const EARTH_FS = /* glsl */ `
uniform sampler2D uDay, uNight, uClouds, uSpec;
uniform vec3 uSun; uniform float uCloudShift, uOpacity, uReady;
varying vec2 vUv; varying vec3 vNw; varying vec3 vPw;
void main(){
  vec3 N = normalize(vNw);
  vec3 Vd = normalize(cameraPosition - vPw);
  vec3 L = normalize(uSun);
  float ndl = dot(N, L);
  vec3 day = texture2D(uDay, vUv).rgb;
  vec3 night = texture2D(uNight, vUv).rgb;
  float cl = texture2D(uClouds, vUv + vec2(uCloudShift, 0.0)).r;
  float clSh = texture2D(uClouds, vUv + vec2(uCloudShift - 0.0025, 0.0015)).r;
  float spec = texture2D(uSpec, vUv).r;
  float lit = max(ndl, 0.0);
  vec3 col = day * (1.0 - clSh * 0.45) * lit * 1.15;
  col = mix(col, vec3(1.0, 0.98, 0.96) * pow(lit, 0.9) * 0.95, cl * 0.9);
  vec3 H = normalize(L + Vd);
  col += vec3(1.0, 0.88, 0.7) * pow(max(dot(N, H), 0.0), 220.0) * spec * (1.0 - cl) * 0.35 * step(0.0, ndl);
  float nightMask = 1.0 - smoothstep(-0.25, 0.08, ndl);
  col += max(night - 0.06, 0.0) * vec3(1.0, 0.72, 0.42) * nightMask * 1.8 * (1.0 - cl * 0.8);
  float fr = pow(1.0 - max(dot(N, Vd), 0.0), 3.0);
  col += vec3(0.32, 0.58, 1.0) * fr * smoothstep(-0.35, 0.5, ndl) * 0.7;
  gl_FragColor = vec4(col * uOpacity * uReady, 1.0);
}`;
const ATM_VS = /* glsl */ `
varying vec3 vPw;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vPw = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`;
const ATM_FS = /* glsl */ `
uniform vec3 uCenter, uSun; uniform float uR, uShell, uOpacity;
varying vec3 vPw;
void main(){
  vec3 ro = cameraPosition; vec3 rd = normalize(vPw - cameraPosition);
  float tca = dot(uCenter - ro, rd);
  vec3 pc = ro + rd * tca;
  float b = length(pc - uCenter);
  float h = (b - uR) / (uShell - uR);
  if (h < 0.0) discard;
  float g = exp(-h * 5.0) * (1.0 - smoothstep(0.75, 1.0, h));
  vec3 side = normalize(pc - uCenter);
  float sun = smoothstep(-0.35, 0.65, dot(side, normalize(uSun)));
  vec3 col = mix(vec3(0.25, 0.5, 1.0), vec3(0.6, 0.82, 1.0), sun);
  gl_FragColor = vec4(col * g * (0.06 + 0.7 * sun) * uOpacity, 1.0);
}`;

const R_EARTH = 2.0;
// rotasi 180° di sumbu (1,-1,0): horizontal (Kejadian kiri, busur ke atas) → vertikal (Kejadian atas, busur ke kiri)
const FLIP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, -1, 0).normalize(), Math.PI);
const ID = new THREE.Quaternion();
const YAW = new THREE.Quaternion();
const UPY = new THREE.Vector3(0, 1, 0);

export class ActBumi extends Act {
  constructor(ctx) {
    super(ctx, { start: 8, end: 9 });
    const r = rng(8);

    // bintang latar
    this.stars = points(ctx.mobile ? 900 : 1800, () => {
      const u = r() * 2 - 1, th = r() * Math.PI * 2, s = Math.sqrt(1 - u * u), d = 60 + r() * 40;
      const t = r();
      return { p: [s * Math.cos(th) * d, u * d, s * Math.sin(th) * d - 20], c: t < 0.7 ? [0.85, 0.9, 1] : [1, 0.9, 0.8], s: 0.08 + Math.pow(r(), 4) * 0.35, a: 0.3 + r() * 0.6 };
    }, { twinkle: 0.4 });
    this.group.add(this.stars);

    // bumi
    this.sun = new THREE.Vector3(0.35, 1.0, 0.25).normalize();
    this.earthGroup = new THREE.Group();
    this.group.add(this.earthGroup);
    this.earthTilt = new THREE.Group();
    this.earthTilt.rotation.z = 0.41;
    this.earthGroup.add(this.earthTilt);
    this.earthMat = new THREE.ShaderMaterial({
      uniforms: {
        uDay: { value: null }, uNight: { value: null }, uClouds: { value: null }, uSpec: { value: null },
        uSun: { value: this.sun }, uCloudShift: { value: 0 }, uOpacity: { value: 1 }, uReady: { value: 0 },
      },
      vertexShader: EARTH_VS, fragmentShader: EARTH_FS,
    });
    this.earth = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH, 128, 96), this.earthMat);
    this.earthTilt.add(this.earth);
    this.atmMat = new THREE.ShaderMaterial({
      uniforms: { uCenter: { value: new THREE.Vector3() }, uSun: { value: this.sun }, uR: { value: R_EARTH }, uShell: { value: R_EARTH * 1.16 }, uOpacity: { value: 1 } },
      vertexShader: ATM_VS, fragmentShader: ATM_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide,
    });
    this.atm = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH * 1.16, 96, 64), this.atmMat);
    this.earthGroup.add(this.atm);
    this.loadTextures();

    // diagram busur
    this.arcs = new ArcDiagram(ctx);
    this.group.add(this.arcs.root);
    this.dragYaw = 0; this.dragTarget = 0;
    this.theme = -1;
    this.tmp = V();
    this.labelEls = []; this.groupEls = [];
  }

  loadTextures() {
    const L = new THREE.TextureLoader();
    const u = this.earthMat.uniforms;
    const load = (url, key, srgb) => new Promise((res) => L.load(url, (t) => {
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.anisotropy = 4;
      u[key].value = t; res();
    }, undefined, () => res()));
    Promise.all([
      load('assets/earth/day.jpg', 'uDay', true), load('assets/earth/night.jpg', 'uNight', true),
      load('assets/earth/clouds.jpg', 'uClouds', false), load('assets/earth/spec.jpg', 'uSpec', false),
    ]).then(() => { if (u.uDay.value && u.uClouds.value && u.uNight.value && u.uSpec.value) window.gsap.to(u.uReady, { value: 1, duration: 1.2 }); });
  }

  bindDom({ labels, groups, leaders, onTheme }) {
    this.labelEls = labels; this.groupEls = groups; this.leaders = leaders; this.onTheme = onTheme;
  }

  layout2() {
    const W = this.ctx.size.w, H = this.ctx.size.h;
    const portrait = W / H < 0.9;
    return portrait
      ? { pos: V(0.55, 0.95, 0), scale: 0.78, cam: V(0.0, -0.55, 12.4), look: V(0.0, -0.55, 0) }
      : { pos: V(0.9, 0, 0), scale: 1, cam: V(1.85, 0, 10.8), look: V(1.85, 0, 0) };
  }

  update(P, w, t) {
    const q = easeInOut(range(0.88, 1.24, P)); // transisi story 9 → 10
    // ---- bumi
    const e = this.earthMat.uniforms;
    e.uCloudShift.value = t * 0.0015;
    this.earth.rotation.y = t * 0.02 + P * 0.9;
    this.earthGroup.position.set(0, 7.5 * q * q, -2 * q);
    const earthVis = w * (1 - smooth(0.2, 0.85, q));
    e.uOpacity.value = earthVis;
    this.atmMat.uniforms.uOpacity.value = earthVis;
    this.atmMat.uniforms.uCenter.value.copy(this.earthGroup.position);
    this.earthGroup.visible = earthVis > 0.002;
    this.stars.material.uniforms.uOpacity.value = w * (1 - 0.5 * q);

    // ---- diagram
    const L2 = this.layout2();
    const pos1 = V(0, -3.0, 1.4), s1 = 0.36;
    const root = this.arcs.root;
    root.position.copy(pos1).lerp(L2.pos, q);
    root.scale.setScalar(lerp(s1, L2.scale, q));
    const s10 = range(1.24, 2.0, P);
    if (this.dragging) this.dragTarget = Math.max(-1.1, Math.min(1.1, this.dragTarget));
    else this.dragTarget *= 0.985;
    this.dragYaw += (this.dragTarget - this.dragYaw) * 0.08;
    const sway = (Math.sin(t * 0.22) * 0.22 + this.dragYaw) * smooth(1.15, 1.35, P);
    YAW.setFromAxisAngle(UPY, sway);
    root.quaternion.copy(ID).slerp(FLIP, q).premultiply(YAW);
    const lm = this.arcs.lineMat.uniforms;
    lm.uDraw.value = smooth(0.4, 0.82, P) * 1.6;
    lm.uRainbow.value = 1 - smooth(0.95, 1.2, P);
    lm.uFan.value = smooth(1.08, 1.32, P);
    lm.uBase.value = lerp(0.07, 0.03, q) * Math.min(1, Math.sqrt(this.ctx.size.w / 1280) * 1.05);
    this.arcs.opacity = w * smooth(0.38, 0.5, P);
    this.arcs.root.visible = w * smooth(0.38, 0.5, P) > 0.002;

    // tema mengikuti scroll di story 10
    if (P > 1.18) {
      const th = Math.min(3, Math.floor(range(0.1, 0.92, s10) * 4));
      if (th !== this.theme) { this.theme = th; this.arcs.setTheme(th); this.onTheme && this.onTheme(th); }
    }
    this.interactive = w > 0.6 && P > 1.22;
    this.syncLabels(P, w, q);
  }

  // label kitab: kolom rata di kanan sumbu + garis penunjuk ke posisi sebenarnya
  syncLabels(P, w, q) {
    const cam = this.ctx.camera, W = this.ctx.size.w, H = this.ctx.size.h;
    const inner = this.arcs.inner;
    inner.updateMatrixWorld();
    const mw = inner.matrixWorld;
    const proj = (x, y = 0) => { this.tmp.set(x, y, 0).applyMatrix4(mw).project(cam); return [(this.tmp.x * 0.5 + 0.5) * W, (-this.tmp.y * 0.5 + 0.5) * H]; };

    // label kelompok (story 9, horizontal, teks vertikal di bawah sumbu)
    const showGroups = w > 0.5 && P > 0.6 && q < 0.15;
    this.arcs.layout.groups.forEach((g, i) => {
      const el = this.groupEls[i]; if (!el) return;
      const [x, y] = proj(g.xc, -0.12);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(90deg)`;
      el.classList.toggle('on', showGroups);
    });

    // label kitab (story 10)
    const show = w > 0.6 && q > 0.97;
    const books = this.arcs.layout.books;
    if (!show) {
      if (this.labelsShown) { this.labelEls.forEach((el) => el.classList.remove('on')); this.leaders.setAttribute('d', ''); this.labelsShown = false; }
      return;
    }
    this.labelsShown = true;
    const [ax0, ay0] = proj(books[0].x0, -0.06);
    const [ax1, ay1] = proj(books[books.length - 1].x1, -0.06);
    const span = Math.abs(ay1 - ay0);
    const step = span / books.length;
    const every = Math.max(1, Math.ceil(11.5 / step));
    const colX = Math.max(ax0, ax1) + 44;
    let d = '';
    books.forEach((b, i) => {
      const el = this.labelEls[i];
      const [bx, by] = proj(b.xc, -0.06);
      const ly = ay0 + (i + 0.5) * step;
      el.style.transform = `translate3d(${colX.toFixed(1)}px, ${ly.toFixed(1)}px, 0)`;
      const visible = i % every === 0;
      el.classList.toggle('on', visible);
      if (visible) d += `M${(bx + 8).toFixed(1)} ${by.toFixed(1)}L${(colX - 14).toFixed(1)} ${by.toFixed(1)}L${(colX - 4).toFixed(1)} ${ly.toFixed(1)}`;
    });
    this.leaders.setAttribute('d', d);
  }

  onPointer(e) {
    if (!this.interactive) { this.dragging = false; return; }
    if (e.type === 'down') { this.dragging = true; this.dragX = e.x; this.dragStart = this.dragTarget; }
    if (e.type === 'up') this.dragging = false;
    if (e.type === 'move' && this.dragging && e.pointerType !== 'touch') this.dragTarget = this.dragStart + (e.x - this.dragX) * 0.004;
    if (e.type === 'move' || e.type === 'tap') {
      const it = this.arcs.pick(e.x, e.y, this.ctx.camera, this.ctx.size.w, this.ctx.size.h);
      this.arcs.setHoverItem(it);
      this.ctx.showArcTip(it, e.x, e.y);
      this.ctx.setCursor(!!it, this.dragging);
    }
  }

  pose(P) {
    const q = easeInOut(range(0.88, 1.24, P));
    const k = smooth(0.06, 0.62, P);
    const portrait = this.ctx.size.w / this.ctx.size.h < 0.9;
    const pos1 = V(0, lerp(-0.1, -0.85, k), lerp(portrait ? 10.5 : 7.2, portrait ? 13.5 : 9.8, k));
    const look1 = V(0, lerp(0.35, -0.85, k), 0);
    const L2 = this.layout2();
    return { pos: pos1.lerp(L2.cam, q), look: look1.lerp(L2.look, q), fov: 40 };
  }

  post(P) {
    const q = range(0.88, 1.24, P);
    const flashIn = 1 - smooth(0.0, 0.08, P);
    return {
      bloom: lerp(0.7, 0.75, q),
      rays: 0,
      light: V(0, 2.5, -1),
      flash: 0.55 * flashIn * flashIn,
      flashColor: [0.75, 0.88, 1.0],
      vignette: 0.9,
      threshold: 0.45,
    };
  }
}
