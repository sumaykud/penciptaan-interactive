import * as THREE from 'three';
import { HSV } from './glsl.js';
import { SHARED } from './materials.js';
import { rng } from './util.js';
import { BOOKS, BOOK_GROUPS, THEMES, DECORATIVE_ARCS } from '../data.js';

/* Diagram busur referensi silang 3D.
   Sumbu = 66 kitab (panjang ∝ jumlah pasal). Setiap busur menghubungkan dua ayat.
   - Busur data (dari THEMES) = tabung bercahaya dengan pulse yang mengalir.
   - Busur dekoratif = garis tipis dengan pulse; uFan menyebarkannya jadi kubah 3D. */

const AXIS = 6; // panjang sumbu (satuan dunia), dari x=-3 (Kejadian) sampai x=+3 (Wahyu)
const GROUP_GAP = 6; // celah antar kelompok (dalam "pasal")

export function buildLayout() {
  const groupIndex = Object.fromEntries(BOOK_GROUPS.map((g, i) => [g.id, i]));
  let cursor = 0, prevGroup = null;
  const books = BOOKS.map(([name, abbr, ch, group], i) => {
    if (prevGroup !== null && prevGroup !== group) cursor += GROUP_GAP;
    prevGroup = group;
    const b = { i, name, abbr, ch, group, gi: groupIndex[group], start: cursor, end: cursor + ch };
    cursor += ch;
    return b;
  });
  const total = cursor;
  const toX = (c) => (c / total - 0.5) * AXIS;
  books.forEach((b) => { b.x0 = toX(b.start); b.x1 = toX(b.end); b.xc = (b.x0 + b.x1) / 2; });
  const byAbbr = Object.fromEntries(books.map((b) => [b.abbr.toLowerCase(), b]));
  const groups = BOOK_GROUPS.map((g, gi) => {
    const bs = books.filter((b) => b.gi === gi);
    return { ...g, gi, x0: bs[0].x0, x1: bs[bs.length - 1].x1, xc: (bs[0].x0 + bs[bs.length - 1].x1) / 2 };
  });
  function locate(ref) {
    const m = String(ref).trim().match(/^(\d?\s*[A-Za-z]+)\s*(\d+)(?::.*)?$/);
    if (!m) return null;
    const b = byAbbr[m[1].replace(/\s+/g, '').toLowerCase()];
    if (!b) return null;
    const ch = Math.min(Math.max(parseInt(m[2], 10), 1), b.ch);
    return { book: b, x: toX(b.start + ch - 0.5) };
  }
  return { books, groups, total, toX, locate };
}

const LINE_VS = /* glsl */ `
${HSV}
attribute vec4 aArc;  // pusat, jari-jari, sudut kubah, seed
attribute float aT;   // 0..1 sepanjang busur
uniform float uFan, uDraw, uHeight;
uniform vec2 uHover;
varying float vT; varying float vSeed; varying vec3 vCol; varying float vHover; varying float vVis;
void main(){
  float c = aArc.x, r = aArc.y, phi = aArc.z * uFan, seed = aArc.w;
  float ang = 3.14159265 * (1.0 - aT);
  float x = c + r * cos(ang);
  float h = r * sin(ang) * uHeight;
  vec3 p = vec3(x, h * cos(phi), h * sin(phi));
  float delay = (c + 3.0) / 6.0 * 0.55;
  float d = clamp((uDraw - delay) * 2.4, 0.0, 1.0);
  vVis = 1.0 - step(d, aT);
  vT = aT; vSeed = seed;
  vCol = hsv2rgb(vec3(fract(0.86 - (c + 3.0) / 6.0 * 0.62), 0.6, 1.0));
  float e1 = c - r, e2 = c + r;
  vHover = max(step(uHover.x, e1) * step(e1, uHover.y), step(uHover.x, e2) * step(e2, uHover.y));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}`;
const LINE_FS = /* glsl */ `
uniform float uTime, uOpacity, uRainbow, uPulse, uBase, uWave;
varying float vT; varying float vSeed; varying vec3 vCol; varying float vHover; varying float vVis;
void main(){
  if (vVis < 0.5) discard;
  float ph = fract(uTime * (0.06 + vSeed * 0.08) + vSeed * 7.0);
  float pulse = exp(-pow((vT - ph) * 22.0, 2.0)) * uPulse * step(0.55, fract(vSeed * 13.0));
  vec3 base = mix(vec3(1.0), vCol, uRainbow);
  float a = uBase + pulse * 1.1 + vHover * 0.45 + uWave * 0.12;
  vec3 col = base * a + vec3(1.0, 0.82, 0.5) * pulse * 0.9;
  gl_FragColor = vec4(col * uOpacity, 1.0);
}`;
const TUBE_VS = /* glsl */ `
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const TUBE_FS = /* glsl */ `
uniform float uOn, uTime, uSeed, uHover, uDraw, uOpacity;
uniform vec3 uColor;
varying vec2 vUv;
void main(){
  if (vUv.x > uDraw) discard;
  float ph = fract(uTime * 0.22 + uSeed);
  float pulse = exp(-pow((vUv.x - ph) * 12.0, 2.0)) + exp(-pow((vUv.x - fract(ph + 0.5)) * 16.0, 2.0)) * 0.5;
  float head = exp(-pow((vUv.x - uDraw) * 26.0, 2.0)) * (1.0 - step(0.999, uDraw));
  vec3 col = uColor * (0.75 + uHover * 1.6) + vec3(1.0, 0.88, 0.62) * (pulse * 2.6 + head * 3.5);
  gl_FragColor = vec4(col * uOn * uOpacity, 1.0);
}`;

export class ArcDiagram {
  constructor(ctx) {
    this.ctx = ctx;
    this.layout = buildLayout();
    this.root = new THREE.Group();
    this.inner = new THREE.Group();
    this.root.add(this.inner);
    const { books, groups } = this.layout;

    // batang warna kitab
    const bar = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ transparent: true }), books.length);
    const m = new THREE.Matrix4(), col = new THREE.Color();
    books.forEach((b, i) => {
      const len = Math.max(b.x1 - b.x0 - 0.006, 0.004);
      m.makeScale(len, 0.075, 0.03).setPosition(b.xc, -0.045, 0);
      bar.setMatrixAt(i, m);
      col.set(BOOK_GROUPS[b.gi].color).multiplyScalar(1.1);
      bar.setColorAt(i, col);
    });
    bar.frustumCulled = false;
    this.bar = bar;
    this.inner.add(bar);

    // busur dekoratif + garis
    const r = rng(2024);
    const SEG = 40;
    const N = DECORATIVE_ARCS;
    const arcs = [];
    for (let i = 0; i < N; i++) {
      const a = r() * 6 - 3;
      const k = r();
      const span = k < 0.55 ? r() * 0.9 : k < 0.85 ? 0.9 + r() * 1.8 : 2.7 + r() * 3.2;
      let b = a + (r() < 0.5 ? -1 : 1) * span;
      if (b < -3 || b > 3) b = a - (b - a);
      b = Math.min(Math.max(b, -3), 3);
      if (Math.abs(b - a) < 0.02) continue;
      arcs.push([(a + b) / 2, Math.abs(b - a) / 2, (r() - 0.5) * 0.9, r()]);
    }
    const arcAttr = new Float32Array(arcs.length * SEG * 2 * 4);
    const tAttr = new Float32Array(arcs.length * SEG * 2);
    const posAttr = new Float32Array(arcs.length * SEG * 2 * 3);
    let o = 0;
    arcs.forEach((A) => {
      for (let s = 0; s < SEG; s++) {
        for (const t of [s / SEG, (s + 1) / SEG]) {
          arcAttr.set(A, o * 4); tAttr[o] = t; o++;
        }
      }
    });
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.BufferAttribute(posAttr, 3));
    lg.setAttribute('aArc', new THREE.BufferAttribute(arcAttr, 4));
    lg.setAttribute('aT', new THREE.BufferAttribute(tAttr, 1));
    this.lineMat = new THREE.ShaderMaterial({
      uniforms: {
        uFan: { value: 0 }, uDraw: { value: 1 }, uHeight: { value: 1 }, uHover: { value: new THREE.Vector2(99, 99) },
        uTime: SHARED.uTime, uOpacity: { value: 1 }, uRainbow: { value: 1 }, uPulse: { value: 1 }, uBase: { value: 0.13 }, uWave: { value: 0 },
      },
      vertexShader: LINE_VS, fragmentShader: LINE_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.lines = new THREE.LineSegments(lg, this.lineMat);
    this.lines.frustumCulled = false;
    this.inner.add(this.lines);

    // busur data per tema (tabung)
    this.themes = THEMES.map((th, ti) => {
      const g = new THREE.Group();
      const items = [];
      th.refs.forEach((ref, k) => {
        const A = this.layout.locate(ref.from), B = this.layout.locate(ref.to);
        if (!A || !B) { console.warn('[referensi tidak dikenali]', ref); return; }
        const x1 = Math.min(A.x, B.x), x2 = Math.max(A.x, B.x);
        const c = (x1 + x2) / 2, rad = Math.max((x2 - x1) / 2, 0.02);
        const pts = [];
        for (let s = 0; s <= 48; s++) {
          const ang = Math.PI * (1 - s / 48);
          pts.push(new THREE.Vector3(c + rad * Math.cos(ang), rad * Math.sin(ang), 0.012));
        }
        // arah pulse mengikuti from → to
        if (A.x > B.x) pts.reverse();
        const geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 96, 0.011, 6, false);
        const color = new THREE.Color(BOOK_GROUPS[A.book.gi].color).lerp(new THREE.Color(1, 1, 1), 0.35).multiplyScalar(1.25);
        const mat = new THREE.ShaderMaterial({
          uniforms: {
            uOn: { value: 0 }, uTime: SHARED.uTime, uSeed: { value: k * 0.137 }, uHover: { value: 0 }, uDraw: { value: 0 },
            uOpacity: { value: 1 }, uColor: { value: color },
          },
          vertexShader: TUBE_VS, fragmentShader: TUBE_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.frustumCulled = false;
        mesh.renderOrder = 9;
        g.add(mesh);
        items.push({ ref, A, B, mesh, mat, samples: pts.filter((_, i) => i % 3 === 0) });
      });
      g.visible = false;
      this.inner.add(g);
      return { ...th, group: g, items, index: ti };
    });

    // titik ujung busur aktif
    this.nodeGeo = new THREE.BufferGeometry();
    this.nodeGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(64 * 3), 3));
    this.nodes = new THREE.Points(this.nodeGeo, new THREE.PointsMaterial({ size: 0.07, color: new THREE.Color(2.2, 1.9, 1.4), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, map: dotTexture() }));
    this.nodes.frustumCulled = false;
    this.inner.add(this.nodes);

    this.active = -1;
    this.hoverItem = null;
    this.tmp = new THREE.Vector3();
  }

  setTheme(i) {
    if (i === this.active) return;
    const prev = this.themes[this.active];
    if (prev) prev.items.forEach((it) => window.gsap.to(it.mat.uniforms.uOn, { value: 0, duration: 0.45, onComplete: () => { if (this.active !== prev.index) prev.group.visible = false; } }));
    this.active = i;
    const th = this.themes[i];
    th.group.visible = true;
    th.items.forEach((it, k) => {
      it.mat.uniforms.uDraw.value = 0;
      window.gsap.to(it.mat.uniforms.uOn, { value: 1, duration: 0.5, delay: 0.05 * k });
      window.gsap.to(it.mat.uniforms.uDraw, { value: 1, duration: 1.4, ease: 'power2.inOut', delay: 0.06 * k });
    });
    window.gsap.fromTo(this.lineMat.uniforms.uWave, { value: 1 }, { value: 0, duration: 1.2, ease: 'power2.out' });
    const arr = this.nodeGeo.attributes.position.array;
    arr.fill(0);
    let n = 0;
    th.items.forEach((it) => { if (n < 64) arr.set([it.A.x, 0, 0.02], n++ * 3); if (n < 64) arr.set([it.B.x, 0, 0.02], n++ * 3); });
    this.nodeGeo.setDrawRange(0, n);
    this.nodeGeo.attributes.position.needsUpdate = true;
  }

  setHoverBook(b) {
    const u = this.lineMat.uniforms.uHover.value;
    if (!b) { u.set(99, 99); } else { u.set(b.x0 - 0.002, b.x1 + 0.002); }
    this.themes.forEach((th) => th.items.forEach((it) => {
      const hit = b && (it.A.book === b || it.B.book === b);
      window.gsap.to(it.mat.uniforms.uHover, { value: hit ? 1 : 0, duration: 0.25 });
    }));
  }

  setHoverItem(it) {
    if (this.hoverItem === it) return;
    if (this.hoverItem) window.gsap.to(this.hoverItem.mat.uniforms.uHover, { value: 0, duration: 0.25 });
    this.hoverItem = it;
    if (it) window.gsap.to(it.mat.uniforms.uHover, { value: 1, duration: 0.2 });
  }

  // cari busur data terdekat dengan pointer (ruang layar)
  pick(x, y, cam, W, H) {
    const th = this.themes[this.active];
    if (!th) return null;
    let best = null, bd = 14;
    this.inner.updateMatrixWorld();
    const mw = this.inner.matrixWorld;
    th.items.forEach((it) => {
      for (const p of it.samples) {
        this.tmp.copy(p).applyMatrix4(mw).project(cam);
        const sx = (this.tmp.x * 0.5 + 0.5) * W, sy = (-this.tmp.y * 0.5 + 0.5) * H;
        const d = Math.hypot(sx - x, sy - y);
        if (d < bd) { bd = d; best = it; }
      }
    });
    return best;
  }

  set opacity(v) {
    this.lineMat.uniforms.uOpacity.value = v;
    this.bar.material.opacity = v;
    this.themes.forEach((th) => th.items.forEach((it) => (it.mat.uniforms.uOpacity.value = v)));
    this.nodes.material.opacity = v;
  }
}

function dotTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,230,190,0.6)');
  grd.addColorStop(1, 'rgba(255,200,150,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
