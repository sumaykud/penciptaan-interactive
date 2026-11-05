import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, points, GlowRing } from '../core/materials.js';
import { smooth, lerp, rng, range, easeInOut, easeIn, bell } from '../core/util.js';
import { buildHumanGeometry, humanMeshes } from '../core/human.js';

/* STORY 3 · tiga cincin cahaya bergerak teratur & saling overlapping (P 0..1)
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

    // orb bokeh
    const r = rng(23);
    const N = 16;
    this.bokeh = [];
    this.bokehPts = points(N, (i) => {
      const a = (i / N) * Math.PI * 2 + r();
      const rad = 1.9 + r() * 1.3;
      const b = { base: V(Math.cos(a) * rad * 1.35, Math.sin(a) * rad * 0.95, -1.5 + r() * 2.6), seed: r() * 9 };
      this.bokeh.push(b);
      return { p: [0, 0, 0], c: [0.9, 0.92, 0.55], s: 0.16 + r() * 0.22, a: 0.8 };
    }, { soft: 0.92, twinkle: 0.12, maxSize: 300 });
    this.group.add(this.bokehPts);

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
    const { s, q, z, phi } = this.ringState(P, t);
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
      rg.intensity = 2.0 + 0.3 * Math.sin(t * 1.6 + k) + 2.0 * z;
      rg.haloIntensity = 0.3 * (1 - 0.4 * q);
      const gl = this.ringGlows[k];
      gl.position.copy(h.position).applyEuler(this.root.rotation);
      gl.material.uniforms.uIntensity.value = 0.16 * s * (1 - q);
      gl.material.uniforms.uOpacity.value = w;
    });

    // cahaya pusat: berkumpul → menyala
    const mg = this.mainGlow.material.uniforms;
    const gather = bell(1.0, 1.55, P);
    mg.uIntensity.value = (0.2 + 0.05 * s + 0.4 * gather - 0.1 * smooth(1.35, 1.6, P) + 1.0 * z) * (1 + 0.06 * Math.sin(t * 2));
    mg.uScale.value.setScalar(lerp(5.6, 7, gather) * (1 - 0.6 * z));
    mg.uOpacity.value = w;
    const fl = this.flare.material.uniforms;
    fl.uIntensity.value = 0.6 * gather + 1.2 * z;
    fl.uOpacity.value = w;

    // bokeh tertarik ke pusat ("semua cahaya berkumpul")
    const pos = this.bokehPts.geometry.attributes.position.array;
    const pull = easeIn(range(1.0, 1.38, P));
    this.bokeh.forEach((b, i) => {
      const dx = Math.sin(t * 0.3 + b.seed) * 0.15, dy = Math.cos(t * 0.25 + b.seed) * 0.12;
      pos[i * 3] = (b.base.x + dx) * (1 - pull);
      pos[i * 3 + 1] = (b.base.y + dy) * (1 - pull);
      pos[i * 3 + 2] = b.base.z * (1 - pull);
    });
    this.bokehPts.geometry.attributes.position.needsUpdate = true;
    this.bokehPts.material.uniforms.uOpacity.value = w * smooth(0.0, 0.25, P) * (1 - smooth(1.25, 1.4, P));

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

  pose(P) {
    const k = range(0.22, 1.0, P);
    const a = Math.sin(k * Math.PI) * 0.42;
    const e = Math.sin(k * Math.PI) * 0.22;
    const d = 6.7;
    const p1 = V(Math.sin(a) * d, Math.sin(e) * d * 0.5, Math.cos(a) * d);
    const p2 = V(0, 0.08, lerp(6.6, 5.9, smooth(1.3, 1.9, P)));
    const b = smooth(0.96, 1.18, P);
    return { pos: p1.lerp(p2, b), look: V(0, 0.04 * b, 0), fov: 40 };
  }

  post(P) {
    const z = range(1.84, 2.0, P);
    return {
      bloom: 0.7 - 0.1 * smooth(1.25, 1.5, P),
      rays: 0.12 + 0.16 * smooth(1.25, 1.5, P),
      light: V(0, 0.02, 0),
      flash: 0.35 * z * z,
      vignette: 0.85,
    };
  }
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
