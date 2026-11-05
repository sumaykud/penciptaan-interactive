import * as THREE from 'three';
import { SNOISE, HSV, HASH, BILLBOARD_VS, PLANE_VS } from './glsl.js';

// Uniform global yang dibagi semua material (diupdate saat resize / setiap frame)
export const SHARED = {
  uTime: { value: 0 },
  uPR: { value: 1 },        // pixel ratio
  uPxScale: { value: 500 }, // tinggi viewport / (2*tan(fov/2)) → konversi ukuran dunia ke piksel
};

const ADD = { transparent: true, depthWrite: false, blending: THREE.AdditiveBlending };

/* ------------------------------------------------------------------ */
/* Glow billboard — halo cahaya lembut + inti panas                    */
/* ------------------------------------------------------------------ */
const GLOW_FS = /* glsl */ `
uniform vec3 uColor; uniform float uIntensity, uFalloff, uCore, uCoreAmt, uOpacity, uRing;
varying vec2 vUv;
void main(){
  vec2 q = (vUv - 0.5) * 2.0;
  float d = length(q);
  float halo = pow(max(1.0 - d, 0.0), uFalloff);
  float core = exp(-d*d*uCore) * uCoreAmt;
  // uRing > 0 → cincin (dipakai untuk gelombang pulse)
  float ring = uRing > 0.0 ? exp(-pow((d-0.8)/uRing,2.0)) * (1.0-smoothstep(0.9,1.0,d)) : 0.0;
  vec3 col = uColor * (halo + ring) + vec3(1.0, 0.96, 0.9) * core;
  gl_FragColor = vec4(col * uIntensity * uOpacity, 1.0);
}`;

export function glowMaterial(o = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color().setRGB(...(o.color || [1, 0.85, 0.6])) },
      uIntensity: { value: o.intensity ?? 1 },
      uFalloff: { value: o.falloff ?? 2.2 },
      uCore: { value: o.core ?? 40 },
      uCoreAmt: { value: o.coreAmt ?? 0.8 },
      uScale: { value: new THREE.Vector2(...(o.scale || [1, 1])) },
      uRot: { value: 0 },
      uOpacity: { value: 1 },
      uRing: { value: o.ring ?? 0 },
    },
    vertexShader: BILLBOARD_VS,
    fragmentShader: GLOW_FS,
    ...ADD,
    depthTest: o.depthTest ?? false,
  });
  return m;
}

const QUAD = new THREE.PlaneGeometry(1, 1);
export function glow(o = {}) {
  const mesh = new THREE.Mesh(QUAD, glowMaterial(o));
  mesh.frustumCulled = false;
  mesh.renderOrder = o.renderOrder ?? 5;
  return mesh;
}

/* ------------------------------------------------------------------ */
/* Sinar radial (god-ray fan / ledakan pelangi)                        */
/* ------------------------------------------------------------------ */
const RAYS_FS = /* glsl */ `
${HASH}
${HSV}
uniform float uTime, uIntensity, uOpacity, uCount, uSharp, uLength, uRainbow, uSpin, uCoreAmt, uEdge;
uniform vec2 uCenter, uAspect; uniform vec3 uColor;
varying vec2 vUv;
void main(){
  vec2 q = (vUv - uCenter) * uAspect * 2.0;
  float r = length(q);
  float a = atan(q.y, q.x) / 6.2831853 + 0.5 + uSpin;
  float x = a * uCount;
  float n = pnoise1(x, uCount) * 0.62 + pnoise1(x * 2.0 + 7.0, uCount * 2.0) * 0.38;
  float rays = pow(n, uSharp);
  float len = uLength * (0.3 + 0.7 * pnoise1(a * uCount * 0.25 + 3.0, uCount * 0.25));
  float fall = exp(-r / max(len, 1e-3) * 2.2);
  vec3 col = mix(uColor, hsv2rgb(vec3(fract(a * 3.0 + uTime * 0.03), 0.85, 1.0)), uRainbow);
  float core = exp(-r * r * 30.0) * uCoreAmt;
  vec2 e = abs(vUv - 0.5) * 2.0;
  float edge = 1.0 - smoothstep(uEdge, 1.0, max(e.x, e.y));
  gl_FragColor = vec4((col * rays * fall + vec3(1.0, 0.95, 0.88) * core) * uIntensity * uOpacity * edge, 1.0);
}`;

export function rays(o = {}) {
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uTime: SHARED.uTime,
      uIntensity: { value: o.intensity ?? 1 },
      uOpacity: { value: 1 },
      uCount: { value: o.count ?? 96 },
      uSharp: { value: o.sharp ?? 4 },
      uLength: { value: o.length ?? 0.6 },
      uRainbow: { value: o.rainbow ?? 0 },
      uSpin: { value: 0 },
      uCoreAmt: { value: o.coreAmt ?? 0 },
      uEdge: { value: o.edge ?? 0.7 },
      uCenter: { value: new THREE.Vector2(...(o.center || [0.5, 0.5])) },
      uAspect: { value: new THREE.Vector2(...(o.aspect || [1, 1])) },
      uColor: { value: new THREE.Color().setRGB(...(o.color || [1, 0.75, 0.45])) },
      uScale: { value: new THREE.Vector2(...(o.scale || [4, 4])) },
      uRot: { value: 0 },
    },
    vertexShader: o.billboard === false ? PLANE_VS : BILLBOARD_VS,
    fragmentShader: RAYS_FS,
    ...ADD,
    depthTest: false,
  });
  const geo = o.billboard === false ? new THREE.PlaneGeometry(...(o.scale || [4, 4])) : QUAD;
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = o.renderOrder ?? 4;
  return mesh;
}

/* ------------------------------------------------------------------ */
/* Cincin cahaya (torus neon + halo di bidang cincin)                  */
/* ------------------------------------------------------------------ */
const RING_VS = /* glsl */ `
varying float vAng; varying vec3 vN; varying vec3 vV;
void main(){
  vAng = atan(position.y, position.x);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
const RING_FS = /* glsl */ `
uniform vec3 uColor; uniform float uIntensity, uDraw, uStart, uOpacity, uTime;
varying float vAng; varying vec3 vN; varying vec3 vV;
void main(){
  float a = fract(vAng / 6.2831853 + 1.0 - uStart);
  if (a > uDraw) discard;
  float head = smoothstep(uDraw - 0.05, uDraw, a) * step(uDraw, 0.995);
  float f = pow(max(dot(normalize(vN), normalize(vV)), 0.0), 1.2);
  vec3 col = uColor * (0.45 + 0.9 * f) + vec3(1.0, 0.95, 0.85) * head * 3.0;
  col *= 0.9 + 0.1 * sin(a * 62.83 - uTime * 3.0);
  gl_FragColor = vec4(col * uIntensity * uOpacity, 1.0);
}`;
const RINGHALO_FS = /* glsl */ `
uniform vec3 uColor; uniform float uR, uWidth, uFill, uIntensity, uOpacity, uDraw, uStart, uSize;
varying vec2 vUv;
void main(){
  vec2 p = (vUv - 0.5) * uSize;
  float r = length(p);
  float d = r - uR;
  float ring = exp(-d * d / (uWidth * uWidth));
  float fill = exp(-r * r / (uR * uR * 0.45)) * uFill;
  float a = fract(atan(p.y, p.x) / 6.2831853 + 1.0 - uStart);
  float drawMask = uDraw >= 0.999 ? 1.0 : 1.0 - smoothstep(uDraw - 0.03, uDraw + 0.001, a);
  vec3 col = uColor * (ring * drawMask + fill * min(uDraw * 1.5, 1.0));
  gl_FragColor = vec4(col * uIntensity * uOpacity, 1.0);
}`;

export class GlowRing extends THREE.Group {
  constructor({ R = 1, tube = 0.011, color = [1, 0.86, 0.62], intensity = 2.6, haloWidth = 0.09, fill = 0.35, haloIntensity = 0.55 } = {}) {
    super();
    this.R = R;
    this.ringMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color().setRGB(...color) },
        uIntensity: { value: intensity }, uDraw: { value: 1 }, uStart: { value: 0.25 },
        uOpacity: { value: 1 }, uTime: SHARED.uTime,
      },
      vertexShader: RING_VS, fragmentShader: RING_FS, ...ADD, depthTest: true,
    });
    this.torus = new THREE.Mesh(new THREE.TorusGeometry(R, tube, 16, 360), this.ringMat);
    this.torus.renderOrder = 6;
    const size = R * 2.9;
    this.haloMat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color().setRGB(...color) },
        uR: { value: R }, uWidth: { value: haloWidth }, uFill: { value: fill },
        uIntensity: { value: haloIntensity }, uOpacity: { value: 1 }, uDraw: { value: 1 },
        uStart: { value: 0.25 }, uSize: { value: size },
      },
      vertexShader: PLANE_VS, fragmentShader: RINGHALO_FS, ...ADD, depthTest: false, side: THREE.DoubleSide,
    });
    this.halo = new THREE.Mesh(new THREE.PlaneGeometry(size, size), this.haloMat);
    this.halo.renderOrder = 3;
    this.add(this.halo, this.torus);
    this.torus.frustumCulled = this.halo.frustumCulled = false;
  }
  set opacity(v) { this.ringMat.uniforms.uOpacity.value = v; this.haloMat.uniforms.uOpacity.value = v; }
  set draw(v) { this.ringMat.uniforms.uDraw.value = v; this.haloMat.uniforms.uDraw.value = v; }
  set intensity(v) { this.ringMat.uniforms.uIntensity.value = v; }
  set haloIntensity(v) { this.haloMat.uniforms.uIntensity.value = v; }
}

/* ------------------------------------------------------------------ */
/* Partikel titik (debu, orb, bintang, bokeh)                          */
/* ------------------------------------------------------------------ */
const POINTS_VS = /* glsl */ `
attribute float aSize; attribute vec3 aColor; attribute float aAlpha; attribute float aSeed;
uniform float uPR, uPxScale, uTime, uOpacity, uTwinkle, uMaxSize, uSizeMul;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float tw = 1.0 + uTwinkle * sin(uTime * (0.7 + aSeed * 2.3) + aSeed * 31.0);
  gl_PointSize = min(aSize * uSizeMul * uPR * uPxScale / max(-mv.z, 0.05), uMaxSize * uPR);
  vColor = aColor; vAlpha = aAlpha * uOpacity * max(tw, 0.0);
}`;
const POINTS_FS = /* glsl */ `
uniform float uSoft;
varying vec3 vColor; varying float vAlpha;
void main(){
  vec2 q = gl_PointCoord * 2.0 - 1.0; float d = dot(q, q);
  if (d > 1.0) discard;
  float core = exp(-d * 7.0);
  float disc = (1.0 - smoothstep(0.6, 1.0, d)) * (0.75 + 0.25 * d);
  float a = mix(core, disc * 0.5 + core * 0.5, uSoft);
  gl_FragColor = vec4(vColor * a * vAlpha, 1.0);
}`;

export function points(count, fill, o = {}) {
  const pos = new Float32Array(count * 3), size = new Float32Array(count), col = new Float32Array(count * 3),
    alpha = new Float32Array(count), seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const r = fill(i);
    pos.set(r.p, i * 3); col.set(r.c || [1, 1, 1], i * 3);
    size[i] = r.s ?? 0.03; alpha[i] = r.a ?? 1; seed[i] = r.seed ?? Math.random();
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3));
  g.setAttribute('aAlpha', new THREE.BufferAttribute(alpha, 1));
  g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uPR: SHARED.uPR, uPxScale: SHARED.uPxScale, uTime: SHARED.uTime,
      uOpacity: { value: 1 }, uTwinkle: { value: o.twinkle ?? 0.3 }, uMaxSize: { value: o.maxSize ?? 160 },
      uSoft: { value: o.soft ?? 0 }, uSizeMul: { value: 1 },
    },
    vertexShader: o.vertexShader || POINTS_VS, fragmentShader: o.fragmentShader || POINTS_FS, ...ADD,
    depthTest: o.depthTest ?? false,
  });
  if (o.uniforms) Object.assign(mat.uniforms, o.uniforms);
  const p = new THREE.Points(g, mat);
  p.frustumCulled = false;
  p.renderOrder = o.renderOrder ?? 7;
  return p;
}

/* ------------------------------------------------------------------ */
/* Garis cahaya (streak) — instanced ribbon menghadap kamera           */
/* MODE 0: melintas sepanjang arah (loop)                              */
/* MODE 1: berkumpul ke pusat (loop)                                   */
/* MODE 2: meledak keluar dari pusat (digerakkan progress)             */
/* ------------------------------------------------------------------ */
const STREAK_VS = /* glsl */ `
attribute vec3 aStart; attribute vec3 aDir; attribute float aSpeed; attribute float aLen;
attribute float aWidth; attribute vec3 aColor; attribute float aPhase;
uniform float uTime, uProgress, uTravel, uLenMul, uWidthMul, uFlow, uPxScale, uPR, uMinPx;
varying vec2 vUv; varying vec3 vColor; varying float vFade;
void main(){
  vec3 c; vec3 d = normalize(aDir); float fade = 1.0; float len = aLen * uLenMul;
  #if MODE == 0
    float f = fract(aPhase + uFlow * aSpeed);
    c = aStart + d * f * uTravel;
    fade = smoothstep(0.0, 0.08, f) * (1.0 - smoothstep(0.7, 1.0, f));
  #elif MODE == 1
    float f = fract(aPhase + uFlow * aSpeed);
    f = f * f;
    c = aStart * (1.0 - f);
    d = -normalize(aStart);
    fade = smoothstep(0.0, 0.2, f) * (1.0 - smoothstep(0.82, 1.0, f));
    len *= (0.4 + 1.6 * f);
  #else
    float dist = max(uProgress * aSpeed - aPhase, 0.0);
    c = d * dist;
    fade = step(0.0001, dist) * smoothstep(0.0, 0.25, dist);
    len *= clamp(0.25 + dist * 0.35, 0.0, 3.0);
  #endif
  vec4 cv = modelViewMatrix * vec4(c, 1.0);
  vUv = vec2(position.x + 0.5, position.y + 0.5);
  vColor = aColor;
  if (-cv.z < 0.2) { vFade = 0.0; gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; } // terlalu dekat kamera
  fade *= smoothstep(0.8, 2.6, -cv.z);
  vec3 dv = normalize(mat3(modelViewMatrix) * d);
  // Garis dibentuk di ruang layar: kepala & ekor diproyeksikan dulu, lalu quad dilebarkan
  // tegak lurus arah garis DI LAYAR. Stabil walau garis mengarah lurus ke kamera
  // (versi lama memakai cross(arah, pandangan) yang ≈ 0 di kasus itu → garis berputar/berkedip).
  vec3 tailV = cv.xyz - dv * len;
  tailV.z = min(tailV.z, -0.2);
  vec4 hc = projectionMatrix * cv;
  vec4 tc = projectionMatrix * vec4(tailV, 1.0);
  vec2 pxPerNdc = vec2(uPxScale / projectionMatrix[0][0], uPxScale / projectionMatrix[1][1]);
  vec2 sd = (hc.xy / hc.w - tc.xy / tc.w) * pxPerNdc;
  float sl = length(sd);
  vec2 nrm = sl > 1e-4 ? vec2(-sd.y, sd.x) / sl : vec2(0.0, 1.0);
  float along = vUv.x;
  vec4 pc = mix(tc, hc, along);
  // lebar asli (px CSS); garis yang lebih tipis dari uMinPx piksel layar digambar selebar uMinPx
  // tapi diredupkan sebanding → energi sama, tanpa kedip/aliasing (renderer tanpa antialias).
  float wpx = aWidth * uWidthMul * uPxScale / max(pc.w, 0.2);
  float wDraw = max(wpx, uMinPx / uPR);
  pc.xy += nrm * (position.y * wDraw) / pxPerNdc * pc.w;
  gl_Position = pc;
  // garis yang di layar hampir jadi titik (mengarah ke kamera) dipudarkan, bukan digambar kasar
  vFade = fade * (wpx / wDraw) * smoothstep(0.5, 4.0, sl);
}`;
const STREAK_FS = /* glsl */ `
uniform float uIntensity, uOpacity;
varying vec2 vUv; varying vec3 vColor; varying float vFade;
void main(){
  float across = 1.0 - pow(abs(vUv.y - 0.5) * 2.0, 2.0);
  float along = pow(vUv.x, 1.6) * (1.0 - smoothstep(0.94, 1.0, vUv.x)) + smoothstep(0.9, 1.0, vUv.x) * (1.0 - smoothstep(0.985, 1.0, vUv.x)) * 0.6;
  float a = across * along * vFade;
  gl_FragColor = vec4(vColor * a * uIntensity * uOpacity, 1.0);
}`;

export function streaks(count, fill, mode = 0, o = {}) {
  const base = new THREE.PlaneGeometry(1, 1);
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index;
  g.setAttribute('position', base.getAttribute('position'));
  const A = (n) => new Float32Array(count * n);
  const start = A(3), dir = A(3), speed = A(1), len = A(1), width = A(1), col = A(3), phase = A(1);
  for (let i = 0; i < count; i++) {
    const r = fill(i);
    start.set(r.start, i * 3); dir.set(r.dir || [1, 0, 0], i * 3); col.set(r.color, i * 3);
    speed[i] = r.speed; len[i] = r.len; width[i] = r.width; phase[i] = r.phase ?? Math.random();
  }
  g.setAttribute('aStart', new THREE.InstancedBufferAttribute(start, 3));
  g.setAttribute('aDir', new THREE.InstancedBufferAttribute(dir, 3));
  g.setAttribute('aSpeed', new THREE.InstancedBufferAttribute(speed, 1));
  g.setAttribute('aLen', new THREE.InstancedBufferAttribute(len, 1));
  g.setAttribute('aWidth', new THREE.InstancedBufferAttribute(width, 1));
  g.setAttribute('aColor', new THREE.InstancedBufferAttribute(col, 3));
  g.setAttribute('aPhase', new THREE.InstancedBufferAttribute(phase, 1));
  g.instanceCount = count;
  const mat = new THREE.ShaderMaterial({
    defines: { MODE: mode },
    uniforms: {
      uTime: SHARED.uTime, uProgress: { value: 0 }, uTravel: { value: o.travel ?? 10 },
      uLenMul: { value: 1 }, uWidthMul: { value: 1 }, uIntensity: { value: o.intensity ?? 1 },
      uOpacity: { value: 1 }, uFlow: { value: 0 },
      uPxScale: SHARED.uPxScale, uPR: SHARED.uPR, uMinPx: { value: o.minPx ?? 1.5 },
    },
    vertexShader: STREAK_VS, fragmentShader: STREAK_FS, ...ADD, depthTest: false, side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(g, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = o.renderOrder ?? 8;
  return mesh;
}
