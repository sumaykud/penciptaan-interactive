import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, points, GlowRing } from '../core/materials.js';
import { smooth, lerp, rng, range, easeInOut, easeIn, bell } from '../core/util.js';
import { buildHumanGeometry, humanMeshes } from '../core/human.js';
import { VerseOrbs, projectOrb } from '../core/verses.js';
import { PERICHORESIS_VERSES } from '../data.js';

/* STORY 3 · Tritunggal Mahakudus / Perichoresis — tiga cincin cahaya bergerak teratur
             & saling overlapping; hover / tap titik cahaya → ayat firman (P 0..1)
   STORY 4 · Creatio ex Nihilo — semua cahaya berkumpul, samar-samar muncul
             manusia ilahi bercahaya transparan + salib yang tersorot (P 1..2) */
const AX = V(), Q1 = new THREE.Quaternion(), Q2 = new THREE.Quaternion();

export class ActTrinitas extends Act {
  constructor(ctx) {
    super(ctx, { start: 2, end: 3 });
    this.root = new THREE.Group();
    this.group.add(this.root);

    this.mainGlow = glow({ color: [1.0, 0.55, 0.22], scale: [5.2, 5.2], falloff: 3.4, core: 14, coreAmt: 0.75, intensity: 0.3 });
    this.flare = glow({ color: [1.0, 0.7, 0.4], scale: [9, 0.12], falloff: 1.6, coreAmt: 0, intensity: 0 });
    this.group.add(this.mainGlow, this.flare);

    const cols = [[1, 0.82, 0.55], [1, 0.76, 0.5], [1, 0.86, 0.62]];
    this.rings = cols.map((c) => new GlowRing({ R: 1.0, tube: 0.011, color: c, intensity: 2.0, haloWidth: 0.06, fill: 0.08, haloIntensity: 0.26 }));
    this.holders = this.rings.map((rg) => { const h = new THREE.Group(); h.add(rg); this.root.add(h); return h; });
    this.ringGlows = cols.map(() => { const g = glow({ color: [1, 0.7, 0.4], scale: [2.6, 2.6], falloff: 3.0, coreAmt: 0.2, core: 6, intensity: 0.15 }); this.group.add(g); return g; });

    // orb bokeh — tiap titik menyimpan satu ayat (Story 3); titik ditambah kalau ayatnya lebih banyak
    const r = rng(23);
    const N = Math.max(16, PERICHORESIS_VERSES.length);
    this.bokeh = [];
    this.bokehPts = points(N, (i) => {
      const a = (i / N) * Math.PI * 2 + r();
      const rad = 1.9 + r() * 1.3;
      const b = {
        base: V(Math.cos(a) * rad * 1.35, Math.sin(a) * rad * 0.95, -1.5 + r() * 2.6), seed: r() * 9,
        size: 0.16 + r() * 0.22, hover: 0, world: V(), screen: { x: 0, y: 0, r: 0, vis: 0 },
      };
      this.bokeh.push(b);
      return { p: [0, 0, 0], c: [0.9, 0.92, 0.55], s: b.size, a: 0.8 };
    }, { soft: 0.92, twinkle: 0.12, maxSize: 300 });
    this.group.add(this.bokehPts);
    this.verses = new VerseOrbs(ctx, PERICHORESIS_VERSES, N);

    // salib (kayu, disinari cahaya pusat — lampu 3D sungguhan)
    this.crossGroup = new THREE.Group();
    const wood = woodTexture();
    this.crossMat = new THREE.MeshStandardMaterial({ map: wood, color: 0x8a6040, roughness: 0.62, metalness: 0.0, transparent: true, opacity: 0 });
    const v = new THREE.Mesh(new THREE.BoxGeometry(0.17, 3.6, 0.13), this.crossMat);
    v.position.set(0, -0.35, 0);
    const h = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.17, 0.13), this.crossMat);
    h.position.set(0, 0.17, 0.0);
    this.crossGroup.add(v, h);
    this.crossGroup.position.z = -0.42;
    this.group.add(this.crossGroup);
    this.keyLight = new THREE.PointLight(0xffc68a, 0, 7, 1.6);
    this.keyLight.position.set(0, 0.12, 0.05);
    this.rimLight = new THREE.SpotLight(0xffe0b0, 0, 9, 0.5, 0.8, 1.2);
    this.rimLight.position.set(0, 4, 1.2);
    this.rimLight.target = this.crossGroup;
    this.group.add(this.keyLight, this.rimLight);

    this.human = null;
    this.humanGroup = new THREE.Group();
    this.humanGroup.scale.setScalar(1.06);
    this.humanGroup.position.set(0, -0.43, 0);
    this.group.add(this.humanGroup);
  }

  // dipanggil setelah frame pertama tampil (komputasi marching cubes ±150ms)
  buildHuman() {
    const geo = buildHumanGeometry(this.ctx.mobile ? 80 : 104);
    const { pre, glowMesh, mat } = humanMeshes(geo);
    this.humanGroup.add(pre, glowMesh);
    this.human = { pre, glowMesh, mat };
  }

  ringState(P, t) {
    const s = easeInOut(range(0.02, 0.38, P));     // pemisahan 1 → 3 cincin
    const q = easeInOut(range(1.0, 1.32, P));      // berkumpul
    const z = easeIn(range(1.84, 2.0, P));          // runtuh menjadi satu titik cahaya
    const phi = t * 0.16 + P * 1.5;
    return { s, q, z, phi };
  }

  update(P, w, t) {
    const hold = creatioHold(P);
    P = remapCreatio(P);
    const { s, q, z, phi } = this.ringState(P, t);
    // detak jantung cahaya selama diagram tampil (acak: kadang lembut, kadang meledak)
    const hb = heartbeat(t), beat = hb.v * hold, burst = hb.burst * hold;
    this.root.rotation.set(lerp(0.32, 0.08, s) * (1 - q), Math.sin(t * 0.2) * 0.18 * s * (1 - q), 0);

    this.holders.forEach((h, k) => {
      const th = Math.PI / 2 + (k * Math.PI * 2) / 3 + phi;
      const cx = Math.cos(th), cy = Math.sin(th);
      // fase 1: pusat cincin berputar membentuk segitiga, tiap cincin miring di sumbu radial
      const sep = s * 0.43;
      const p1 = V(cx * sep, cy * sep, 0);
      AX.set(cx, cy, 0).normalize();
      Q1.setFromAxisAngle(AX, s * (0.26 + 0.16 * Math.sin(t * 0.45 + k * 2.094)));
      // fase 2: hampir konsentris, miring seperti armillary sphere
      const a2 = (k * Math.PI) / 3 + t * 0.12;
      AX.set(Math.cos(a2), Math.sin(a2), 0);
      Q2.setFromAxisAngle(AX, 0.5 + 0.12 * Math.sin(t * 0.3 + k));
      const p2 = V(cx * 0.05, cy * 0.05, 0);
      h.position.copy(p1.lerp(p2, q));
      h.quaternion.copy(Q1).slerp(Q2, q);
      const sc = (1 + 0.3 * q) * (1 - 0.94 * z);
      h.scale.setScalar(sc);
      const rg = this.rings[k];
      const fadeIn = k === 0 ? 1 : smooth(0.0, 0.12, s + q);
      rg.opacity = w * fadeIn;
      rg.draw = 1;
      rg.intensity = 2.0 + 0.3 * Math.sin(t * 1.6 + k) + 2.0 * z + 1.6 * beat;
      rg.haloIntensity = 0.3 * (1 - 0.4 * q);
      const gl = this.ringGlows[k];
      gl.position.copy(h.position).applyEuler(this.root.rotation);
      gl.material.uniforms.uIntensity.value = 0.16 * s * (1 - q);
      gl.material.uniforms.uOpacity.value = w;
    });

    // cahaya pusat: berkumpul → menyala
    const mg = this.mainGlow.material.uniforms;
    const gather = bell(1.0, 1.55, P);
    mg.uIntensity.value = (0.2 + 0.05 * s + 0.4 * gather - 0.1 * smooth(1.35, 1.6, P) + 1.0 * z) * (1 + 0.06 * Math.sin(t * 2) * (1 - hold)) + 0.42 * beat;
    mg.uScale.value.setScalar(lerp(5.6, 7, gather) * (1 - 0.6 * z) * (1 + 0.14 * beat));
    mg.uOpacity.value = w;
    const fl = this.flare.material.uniforms;
    fl.uIntensity.value = 0.6 * gather + 1.2 * z + 0.5 * beat + 1.6 * burst;
    fl.uOpacity.value = w;

    // bokeh tertarik ke pusat ("semua cahaya berkumpul")
    const pos = this.bokehPts.geometry.attributes.position.array;
    const size = this.bokehPts.geometry.attributes.aSize.array;
    const al = this.bokehPts.geometry.attributes.aAlpha.array;
    const pull = easeIn(range(1.0, 1.38, P));
    const bokehVis = smooth(0.0, 0.25, P) * (1 - smooth(1.25, 1.4, P)) * (1 - hold);
    const cam = this.ctx.camera;
    this.bokeh.forEach((b, i) => {
      const dx = Math.sin(t * 0.3 + b.seed) * 0.15, dy = Math.cos(t * 0.25 + b.seed) * 0.12;
      b.world.set((b.base.x + dx) * (1 - pull), (b.base.y + dy) * (1 - pull), b.base.z * (1 - pull));
      pos[i * 3] = b.world.x; pos[i * 3 + 1] = b.world.y; pos[i * 3 + 2] = b.world.z;
      b.hover += ((this.verses.isActive(i) ? 1 : 0) - b.hover) * 0.15;
      size[i] = b.size * (1 + b.hover * 0.45);
      al[i] = 0.8 * (1 + b.hover * 0.6);
      projectOrb(b, b.world, size[i], this.group, cam, this.ctx, bokehVis);
    });
    this.bokehPts.geometry.attributes.position.needsUpdate = true;
    this.bokehPts.geometry.attributes.aSize.needsUpdate = true;
    this.bokehPts.geometry.attributes.aAlpha.needsUpdate = true;
    this.bokehPts.material.uniforms.uOpacity.value = w * bokehVis;
    this.verses.setInteractive(w > 0.6 && P > 0.3 && P < 0.95);
    this.verses.sync(this.bokeh);

    // manusia ilahi + salib
    const reveal = range(1.3, 1.78, P);
    const hv = smooth(1.26, 1.36, P) * (1 - smooth(1.86, 1.98, P));
    if (this.human) {
      this.human.mat.uniforms.uReveal.value = reveal;
      this.human.mat.uniforms.uOpacity.value = w * hv;
      this.human.mat.uniforms.uIntensity.value = 1.25 + 0.12 * Math.sin(t * 1.3);
      const vis = w * hv > 0.002;
      this.human.pre.visible = this.human.glowMesh.visible = vis;
      this.humanGroup.rotation.y = Math.sin(t * 0.25) * 0.08;
    }
    const cross = smooth(1.34, 1.72, P) * (1 - smooth(1.84, 1.96, P));
    this.crossMat.opacity = w * cross;
    this.crossGroup.visible = w * cross > 0.002;
    this.keyLight.intensity = 9 * cross * w * (1 + 0.05 * Math.sin(t * 2.1));
    this.rimLight.intensity = 12 * cross * w;
  }

  onPointer(e) { this.verses.onPointer(e, this.bokeh); }

  pose(P) {
    P = remapCreatio(P);
    const k = range(0.22, 1.0, P);
    const a = Math.sin(k * Math.PI) * 0.42;
    const e = Math.sin(k * Math.PI) * 0.22;
    const d = 6.7;
    const p1 = V(Math.sin(a) * d, Math.sin(e) * d * 0.5, Math.cos(a) * d);
    const p2 = V(0, 0.08, lerp(6.6, 5.9, smooth(1.3, 1.9, P)));
    const b = smooth(0.96, 1.18, P);
    return this.fit({ pos: p1.lerp(p2, b), look: V(0, 0.04 * b, 0), fov: 40 });
  }

  post(P, t) {
    const hold = creatioHold(P);
    P = remapCreatio(P);
    const z = range(1.84, 2.0, P);
    const hb = heartbeat(t);
    return {
      bloom: 0.7 - 0.1 * smooth(1.25, 1.5, P) + 0.3 * hb.v * hold,
      rays: 0.12 + 0.16 * smooth(1.25, 1.5, P),
      light: V(0, 0.02, 0),
      flash: 0.35 * z * z + 0.14 * hb.burst * hold,
      vignette: 0.85,
    };
  }
}

/* Story 4 diperpanjang untuk diagram "Overflow of Love" (lihat ui.buildStory4):
   lokal 0..0.29  → animasi asli 0..0.25 (cahaya berkumpul, jadi "matahari")
   lokal 0.29..0.76 → ditahan di 0.25 selama diagram tampil
   lokal 0.76..1  → animasi asli 0.25..1 (manusia ilahi, salib, runtuh jadi titik) */
export const CREATIO_HOLD = [0.29, 0.76];
/* Detak jantung: "lub-dub" tiap ±1,2 dtk. Kekuatan tiap detak acak (deterministik per detak):
   sebagian besar lembut, sesekali meledak terang dengan ekor cahaya yang lebih panjang. */
const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const gauss = (x, m, w) => Math.exp(-(((x - m) / w) ** 2));
function heartbeat(t) {
  const T = 1.2, n = Math.floor(t / T), ph = t - n * T;
  const big = hash(n) > 0.8;                        // ±1 dari 5 detak meledak
  const amp = big ? 1 : 0.16 + 0.34 * hash(n + 41);  // detak lain: halus, kekuatan bervariasi
  const shape = gauss(ph, 0.06, 0.05) + 0.55 * gauss(ph, 0.3, 0.06);
  const tail = big ? 0.6 * Math.exp(-Math.max(0, ph - 0.06) * 3.2) * smooth(0.0, 0.06, ph) : 0;
  return { v: amp * shape + tail, burst: big ? gauss(ph, 0.07, 0.07) + tail * 0.8 : 0 };
}

// 0..1: seberapa penuh diagram tampil (bokeh disembunyikan supaya bersih)
function creatioHold(P) {
  const l = P - 1, [h0, h1] = CREATIO_HOLD;
  return smooth(h0 - 0.01, h0 + 0.03, l) * (1 - smooth(h1 - 0.04, h1, l));
}
function remapCreatio(P) {
  if (P <= 1) return P;
  const l = Math.min(1, P - 1), [h0, h1] = CREATIO_HOLD, o = 0.25;
  if (l < h0) return 1 + (l / h0) * o;
  if (l < h1) return 1 + o;
  return 1 + o + ((l - h1) / (1 - h1)) * (1 - o);
}

function woodTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#5a3a24';
  g.fillRect(0, 0, 128, 512);
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * 128;
    g.strokeStyle = `rgba(${30 + Math.random() * 30},${18 + Math.random() * 14},${8},${0.25 + Math.random() * 0.35})`;
    g.lineWidth = 0.6 + Math.random() * 2.2;
    g.beginPath();
    g.moveTo(x, 0);
    for (let y = 0; y <= 512; y += 32) g.lineTo(x + Math.sin(y * 0.02 + i) * 2.5, y);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
