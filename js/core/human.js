import * as THREE from 'three';
import { MarchingCubes } from 'three/addons/objects/MarchingCubes.js';
import { SNOISE } from './glsl.js';
import { SHARED } from './materials.js';

/* Figur manusia ilahi — dibentuk dari signed-distance-field (kapsul & elipsoid
   yang di-"smooth union") lalu di-polygonize dengan marching cubes, sehingga
   tubuhnya mulus organik tanpa model 3D eksternal. Pose: tangan terentang. */

function capsule(px, py, pz, ax, ay, az, bx, by, bz, ra, rb) {
  const pax = px - ax, pay = py - ay, paz = pz - az;
  const bax = bx - ax, bay = by - ay, baz = bz - az;
  let h = (pax * bax + pay * bay + paz * baz) / (bax * bax + bay * bay + baz * baz);
  h = h < 0 ? 0 : h > 1 ? 1 : h;
  const dx = pax - bax * h, dy = pay - bay * h, dz = paz - baz * h;
  return Math.sqrt(dx * dx + dy * dy + dz * dz) - (ra + (rb - ra) * h);
}
function ellipsoid(px, py, pz, cx, cy, cz, rx, ry, rz) {
  const x = (px - cx) / rx, y = (py - cy) / ry, z = (pz - cz) / rz;
  const k0 = Math.sqrt(x * x + y * y + z * z);
  const x2 = x / rx, y2 = y / ry, z2 = z / rz;
  const k1 = Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2);
  return k1 > 1e-6 ? (k0 * (k0 - 1)) / k1 : -Math.min(rx, ry, rz);
}
function smin(a, b, k) {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
}

function sdHuman(x, y, z) {
  const ax = Math.abs(x); // simetri kiri-kanan
  // kepala & leher
  let d = ellipsoid(x, y, z, 0, 0.765, 0.0, 0.07, 0.093, 0.083);
  d = smin(d, capsule(x, y, z, 0, 0.6, 0, 0, 0.69, 0.006, 0.036, 0.033), 0.03);
  // badan
  let torso = ellipsoid(x, y, z, 0, 0.445, 0.0, 0.15, 0.15, 0.088);
  torso = smin(torso, capsule(ax, y, z, 0.0, 0.55, 0, 0.16, 0.548, 0, 0.055, 0.052), 0.05);
  torso = smin(torso, ellipsoid(x, y, z, 0, 0.26, 0.004, 0.118, 0.14, 0.078), 0.06);
  torso = smin(torso, ellipsoid(x, y, z, 0, 0.085, 0, 0.135, 0.092, 0.084), 0.06);
  d = smin(d, torso, 0.045);
  // lengan terentang
  let arm = capsule(ax, y, z, 0.17, 0.548, 0, 0.45, 0.556, 0, 0.046, 0.036);
  arm = smin(arm, capsule(ax, y, z, 0.45, 0.556, 0, 0.70, 0.562, 0.004, 0.035, 0.027), 0.025);
  arm = smin(arm, ellipsoid(ax, y, z, 0.765, 0.562, 0.004, 0.058, 0.032, 0.024), 0.02);
  d = smin(d, arm, 0.04);
  // kaki
  let leg = capsule(ax, y, z, 0.072, 0.04, 0, 0.064, -0.4, 0.01, 0.068, 0.047);
  leg = smin(leg, capsule(ax, y, z, 0.064, -0.4, 0.01, 0.05, -0.82, -0.004, 0.045, 0.03), 0.03);
  leg = smin(leg, ellipsoid(ax, y, z, 0.05, -0.862, 0.03, 0.032, 0.028, 0.062), 0.025);
  d = smin(d, leg, 0.05);
  return d;
}

export function buildHumanGeometry(res = 96) {
  const mc = new MarchingCubes(res, new THREE.MeshBasicMaterial(), false, false, 160000);
  mc.isolation = 80;
  const f = mc.field;
  const half = res / 2;
  for (let k = 0; k < res; k++) {
    const z = (k - half) / half;
    for (let j = 0; j < res; j++) {
      const y = (j - half) / half;
      for (let i = 0; i < res; i++) {
        const x = (i - half) / half;
        let d;
        // bounding box kasar supaya cepat
        if (Math.abs(z) > 0.2 || y > 0.9 || y < -0.92 || Math.abs(x) > 0.86 || (Math.abs(x) > 0.24 && (y < 0.47 || y > 0.64))) d = 0.2;
        else d = sdHuman(x, y, z);
        f[i + j * res + k * res * res] = 80 - d * 1200;
      }
    }
  }
  mc.update();
  const n = mc.count;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(mc.positionArray.slice(0, n * 3), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(mc.normalArray.slice(0, n * 3), 3));
  g.computeBoundingSphere();
  mc.geometry.dispose();
  return g;
}

const HUMAN_VS = /* glsl */ `
varying vec3 vN; varying vec3 vV; varying vec3 vPos;
void main(){
  vPos = position;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
const HUMAN_FS = /* glsl */ `
${SNOISE}
uniform float uTime, uReveal, uIntensity, uOpacity;
varying vec3 vN; varying vec3 vV; varying vec3 vPos;
void main(){
  float fr = 1.0 - abs(dot(normalize(vN), normalize(vV)));
  fr = pow(fr, 2.0);
  // dissolve: muncul dari dada keluar
  float n = snoise(vPos * 7.0 + vec3(0.0, -uTime * 0.35, 0.0)) * 0.5 + 0.5;
  float dist = length((vPos - vec3(0.0, 0.42, 0.0)) * vec3(1.0, 1.0, 1.0));
  float th = uReveal * 1.45;
  float k = dist + n * 0.28;
  float m = 1.0 - smoothstep(th - 0.22, th, k);
  float edge = exp(-pow((k - th + 0.04) * 18.0, 2.0)) * (1.0 - step(0.995, uReveal));
  // aliran energi di dalam tubuh
  float flow = pow(snoise(vec3(vPos.x * 9.0, vPos.y * 3.0 - uTime * 0.7, vPos.z * 9.0)) * 0.5 + 0.5, 5.0);
  vec3 gold = vec3(1.0, 0.76, 0.46), white = vec3(1.0, 0.97, 0.92), rose = vec3(1.0, 0.42, 0.62);
  vec3 col = mix(gold, white, fr);
  float knee = exp(-pow((vPos.y + 0.4) * 9.0, 2.0)) + exp(-pow((vPos.y + 0.86) * 12.0, 2.0)) * 0.6;
  col = mix(col, rose, knee * 0.55 * (1.0 - fr * 0.5));
  float a = fr * 1.15 + 0.07 + flow * 0.3 + knee * 0.25;
  vec3 outc = col * a * m + vec3(1.0, 0.88, 0.66) * edge * 2.5;
  gl_FragColor = vec4(outc * uIntensity * uOpacity, 1.0);
}`;

export function humanMeshes(geometry) {
  const pre = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ colorWrite: false }));
  pre.renderOrder = -1;
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: SHARED.uTime, uReveal: { value: 0 }, uIntensity: { value: 1.6 }, uOpacity: { value: 0 } },
    vertexShader: HUMAN_VS,
    fragmentShader: HUMAN_FS,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const glowMesh = new THREE.Mesh(geometry, mat);
  glowMesh.renderOrder = 9;
  return { pre, glowMesh, mat };
}
