import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, rays, streaks } from '../core/materials.js';
import { smooth, lerp, rng, range, bell, easeOut } from '../core/util.js';

/* STORY 5 · Cahaya berkumpul (P 0..1) — garis cahaya berwarna tersedot ke satu bintang,
                                          flare anamorfik + sinar halus radial.
   STORY 6 · Cahaya meledak (P 1..2) — kilat putih, ledakan sinar pelangi, gelombang kejut. */
const HUES = [
  [0.35, 1.0, 0.55], [0.3, 0.9, 1.0], [0.35, 0.55, 1.0], [0.7, 0.45, 1.0], [0.45, 1.0, 0.75], [1.0, 0.62, 0.32],
];

function hsv(h, s, v) {
  const f = (n, k = (n + h * 6) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)];
}

export class ActCahaya extends Act {
  constructor(ctx) {
    super(ctx, { start: 4, end: 5 });
    const g = this.group;
    const r = rng(41);
    const m = ctx.mobile ? 0.55 : 1;

    this.fine = rays({ scale: [10, 10], count: 240, sharp: 8, length: 0.5, color: [0.95, 0.55, 0.28], intensity: 0.5, edge: 0.45 });
    this.rainbow = rays({ scale: [18, 18], count: 180, sharp: 2.6, length: 0.4, rainbow: 1, intensity: 0, edge: 0.4 });
    this.core = glow({ color: [1.0, 0.8, 0.55], scale: [3, 3], falloff: 3.2, core: 30, coreAmt: 1.2, intensity: 1 });
    this.halo = glow({ color: [1.0, 0.62, 0.32], scale: [7, 7], falloff: 2.8, coreAmt: 0, intensity: 0.4 });
    this.flareH = glow({ color: [1.0, 0.68, 0.38], scale: [10, 0.13], falloff: 1.5, coreAmt: 0, intensity: 1.0 });
    this.flareH2 = glow({ color: [1.0, 0.8, 0.6], scale: [4.5, 0.45], falloff: 2.0, coreAmt: 0, intensity: 0.5 });
    this.flareV = glow({ color: [1.0, 0.85, 0.65], scale: [0.07, 2.4], falloff: 1.6, coreAmt: 0, intensity: 0.5 });
    this.shock = glow({ color: [1.0, 0.92, 0.8], scale: [2, 2], falloff: 40, ring: 0.035, coreAmt: 0, intensity: 0 });
    this.shock2 = glow({ color: [0.75, 0.85, 1.0], scale: [2, 2], falloff: 40, ring: 0.02, coreAmt: 0, intensity: 0 });

    this.inward = streaks(Math.round(2400 * m), () => {
      const a = r() * Math.PI * 2, rho = 2.6 + r() * 10;
      const c = HUES[Math.floor(Math.pow(r(), 1.4) * HUES.length)];
      const k = 0.45 + r() * 0.8;
      return {
        start: [Math.cos(a) * rho, Math.sin(a) * rho * 0.8, -10 + r() * 13],
        color: [c[0] * k, c[1] * k, c[2] * k],
        speed: 0.6 + r() * 0.9, len: 0.35 + r() * 1.2, width: 0.01 + r() * 0.03,
      };
    }, 1, { intensity: 1 });

    this.burst = streaks(Math.round(1500 * m), () => {
      const a = r() * Math.PI * 2;
      const zc = (r() - 0.65) * 0.5;
      const d = V(Math.cos(a), Math.sin(a), zc).normalize();
      const c = hsv(r(), 0.75 + r() * 0.25, 1);
      const k = 0.6 + r() * 0.9;
      return {
        start: [0, 0, 0], dir: [d.x, d.y, d.z],
        color: [c[0] * k, c[1] * k, c[2] * k],
        speed: 3 + Math.pow(r(), 0.6) * 20, len: 0.5 + r() * 1.4, width: 0.006 + r() * 0.022,
        phase: r() * 1.4,
      };
    }, 2, { intensity: 1.2 });

    g.add(this.halo, this.fine, this.rainbow, this.inward, this.burst, this.flareH2, this.flareH, this.flareV, this.shock, this.shock2, this.core);
    this.shakeV = V();
  }

  update(P, w, t) {
    const gather = range(0, 1, P);
    const e = range(1.0, 1.6, P); // progress ledakan
    const boom = bell(0.98, 1.6, P);
    const end = smooth(1.82, 2.0, P);
    const u = (m) => m.material.uniforms;

    // berkumpul
    u(this.inward).uFlow.value = t * 0.11 + P * 1.4;
    u(this.inward).uOpacity.value = w * smooth(0.0, 0.12, P) * (1 - smooth(0.95, 1.04, P));
    u(this.inward).uIntensity.value = 0.45 + 0.45 * gather;
    u(this.fine).uIntensity.value = (0.12 + 0.25 * gather) * (1 - e);
    u(this.fine).uLength.value = 0.35 + 0.35 * gather;
    u(this.fine).uSpin.value = t * 0.004;

    // inti bintang
    const coreAmt = 0.45 + 0.75 * easeOut(gather) + 0.3 * boom;
    u(this.core).uIntensity.value = coreAmt * (1 + 0.05 * Math.sin(t * 7)) * (1 - end * 0.7);
    u(this.core).uScale.value.setScalar(2.0 + 1.2 * gather + 2 * boom);
    u(this.halo).uIntensity.value = 0.12 + 0.18 * gather + 0.12 * boom;
    u(this.halo).uScale.value.setScalar(6 + 3 * gather + 5 * boom);
    u(this.flareH).uIntensity.value = (0.45 + 0.75 * gather) * (1 - e * 0.7);
    u(this.flareH).uScale.value.set(8 + 6 * gather + 10 * boom, 0.12 + 0.05 * gather);
    u(this.flareH2).uIntensity.value = 0.15 + 0.25 * gather;
    u(this.flareV).uIntensity.value = 0.15 + 0.3 * gather;

    // ledakan
    u(this.burst).uProgress.value = e * 1.05;
    u(this.burst).uOpacity.value = w * smooth(0.99, 1.02, P) * (1 - end);
    u(this.burst).uLenMul.value = 1 + 0.8 * boom;
    u(this.rainbow).uIntensity.value = 0.55 * boom * (1 - end);
    u(this.rainbow).uLength.value = 0.15 + 1.3 * easeOut(e);
    u(this.rainbow).uCoreAmt.value = 0.35 * boom;
    u(this.rainbow).uSpin.value = e * 0.02;
    const sh = range(1.0, 1.45, P);
    u(this.shock).uScale.value.setScalar(1 + sh * 22);
    u(this.shock).uIntensity.value = 0.6 * (1 - sh) * (sh > 0 ? 1 : 0);
    const sh2 = range(1.08, 1.6, P);
    u(this.shock2).uScale.value.setScalar(1 + sh2 * 26);
    u(this.shock2).uIntensity.value = 0.4 * (1 - sh2) * (sh2 > 0 ? 1 : 0);

    [this.fine, this.rainbow, this.core, this.halo, this.flareH, this.flareH2, this.flareV, this.shock, this.shock2]
      .forEach((m) => (u(m).uOpacity.value = w * (1 - end * 0.85)));

    // getaran kamera
    const amp = this.ctx.reduced ? 0 : 0.07 * bell(1.0, 1.4, P);
    this.shakeV.set(Math.sin(t * 47) * amp, Math.cos(t * 39) * amp, 0);
  }

  pose(P) {
    const z = lerp(7.6, 6.0, smooth(0, 1, P)) + 0.8 * smooth(1.0, 1.5, P);
    const pos = V(0, 0, z).add(this.shakeV);
    return this.fit({ pos, look: V(0, 0, 0).add(this.shakeV.clone().multiplyScalar(0.5)), fov: 40 + 6 * bell(1.0, 1.5, P) }, 0.8);
  }

  post(P) {
    const boom = bell(0.98, 1.5, P);
    const flash = bell(0.985, 1.16, P);
    return {
      bloom: 0.8 + 0.1 * boom,
      rays: (0.22 + 0.2 * range(0, 1, P)) * (1 - smooth(0.97, 1.03, P)),
      light: V(0, 0, 0),
      ca: 0.016 * boom,
      flash: (this.ctx.reduced ? 0.2 : 0.7) * flash * flash,
      vignette: 0.85,
    };
  }
}
