import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, points, streaks } from '../core/materials.js';
import { smooth, rng, range, easeInOut } from '../core/util.js';

/* STORY 7 · Cahaya menyebar (referensi video) — garis cahaya vertikal menjadi
   batas: kiri = dunia tak kasat mata (arus garis emas), kanan = kosmos (bintang dingin).
   Kamera menembus arus cahaya lalu mundur hingga garis batas di tengah layar. */
const KEY_T = [0, 0.16, 0.32, 0.44, 0.56, 1.0];
const KEY_POS = [V(5.2, 0.35, 9.6), V(1.6, 0.2, 5.2), V(-2.6, 0.45, 2.4), V(-1.2, 0.2, 6.2), V(0, 0, 10.2), V(0, 0, 11.6)];
const KEY_LOOK = [V(-2.2, 0, 0), V(-4.5, 0, -1), V(-12, 0.1, -3.5), V(-2.5, 0, -1), V(0, 0, 0), V(0, 0, 0)];
const curvePos = new THREE.CatmullRomCurve3(KEY_POS, false, 'centripetal');
const curveLook = new THREE.CatmullRomCurve3(KEY_LOOK, false, 'centripetal');

function keyU(P) {
  const p = Math.min(Math.max(P, 0), 1);
  for (let i = 0; i < KEY_T.length - 1; i++) {
    if (p <= KEY_T[i + 1]) {
      const f = easeInOut((p - KEY_T[i]) / (KEY_T[i + 1] - KEY_T[i]));
      return (i + f) / (KEY_T.length - 1);
    }
  }
  return 1;
}

export class ActMenyebar extends Act {
  constructor(ctx) {
    super(ctx, { start: 6, end: 6 });
    const r = rng(77);
    const m = ctx.mobile ? 0.5 : 1;

    this.seamCore = glow({ color: [1.0, 0.85, 0.6], scale: [0.045, 40], falloff: 1.0, coreAmt: 0, intensity: 2.2 });
    this.seamSoft = glow({ color: [1.0, 0.55, 0.22], scale: [1.4, 40], falloff: 3.0, coreAmt: 0, intensity: 0.35 });
    this.seamWide = glow({ color: [1.0, 0.45, 0.15], scale: [7, 40], falloff: 4.0, coreAmt: 0, intensity: 0.1 });
    this.sun = glow({ color: [1.0, 0.7, 0.4], scale: [2.6, 2.6], falloff: 3.4, core: 30, coreAmt: 1.0, intensity: 0.8 });
    this.sunFlare = glow({ color: [1.0, 0.65, 0.35], scale: [6, 0.1], falloff: 1.6, coreAmt: 0, intensity: 0.6 });

    this.flow = streaks(Math.round(6500 * m), () => {
      const k = 0.5 + Math.pow(r(), 2) * 1.5;
      const hot = r();
      return {
        start: [-0.05 - r() * 0.6, (r() - 0.5) * 10, (r() - 0.5) * 16],
        dir: [-1, (r() - 0.5) * 0.05, (r() - 0.5) * 0.1],
        color: [1.0 * k, (0.5 + hot * 0.35) * k, (0.18 + hot * 0.3) * k],
        speed: 0.25 + r() * 0.9, len: 0.3 + Math.pow(r(), 2) * 3.2, width: 0.007 + r() * 0.026,
      };
    }, 0, { travel: 28, intensity: 1 });

    // debu emas
    this.dust = points(Math.round(2500 * m), () => ({
      p: [-r() * 26, (r() - 0.5) * 12, (r() - 0.5) * 18],
      c: [1.0, 0.7, 0.35], s: 0.01 + r() * 0.03, a: 0.3 + r() * 0.7,
    }), { twinkle: 0.6 });

    // kosmos (kanan)
    this.stars = points(Math.round(2200 * m), () => {
      const t = r();
      return {
        p: [0.6 + Math.pow(r(), 0.7) * 34, (r() - 0.5) * 22, -30 + r() * 36],
        c: t < 0.6 ? [0.75, 0.85, 1.0] : t < 0.85 ? [1, 1, 1] : [1.0, 0.85, 0.7],
        s: 0.02 + Math.pow(r(), 3) * 0.09, a: 0.4 + r() * 0.6,
      };
    }, { twinkle: 0.5 });
    this.nebula = [V(9, 3, -12), V(14, -4, -18), V(6, -2, -6)].map((p, i) => {
      const n = glow({ color: [[0.3, 0.45, 1.0], [0.55, 0.35, 0.9], [0.25, 0.6, 0.85]][i], scale: [10, 7], falloff: 2.2, coreAmt: 0, intensity: 0.12 });
      n.position.copy(p);
      return n;
    });

    this.group.add(this.seamWide, this.seamSoft, ...this.nebula, this.stars, this.dust, this.flow, this.seamCore, this.sunFlare, this.sun);
  }

  update(P, w, t) {
    const u = (m) => m.material.uniforms;
    const thin = 1 - 0.55 * smooth(0.72, 1.0, P);
    u(this.flow).uFlow.value = t * 0.07 + P * 0.8;
    u(this.flow).uOpacity.value = w * thin;
    u(this.flow).uIntensity.value = 1.0 + 0.4 * Math.sin(t * 0.8);
    const dp = this.dust.geometry.attributes.position.array;
    for (let i = 0; i < dp.length; i += 3) {
      dp[i] -= 0.012 + (i % 5) * 0.004;
      if (dp[i] < -26) dp[i] = 0;
    }
    this.dust.geometry.attributes.position.needsUpdate = true;
    u(this.dust).uOpacity.value = w;
    u(this.stars).uOpacity.value = w * (0.55 + 0.45 * smooth(0.45, 0.9, P));
    this.nebula.forEach((n) => (u(n).uOpacity.value = w * (0.5 + 0.5 * smooth(0.5, 0.9, P))));
    const pulse = 1 + 0.08 * Math.sin(t * 2.3) + 0.04 * Math.sin(t * 7.1);
    [this.seamCore, this.seamSoft, this.seamWide, this.sun, this.sunFlare].forEach((m) => (u(m).uOpacity.value = w * pulse));
    u(this.sun).uIntensity.value = 0.7 + 0.25 * smooth(0.4, 0.6, P);
  }

  pose(P) {
    const k = keyU(P);
    return { pos: curvePos.getPoint(k), look: curveLook.getPoint(k), fov: 42 };
  }

  post(P) {
    return { bloom: 0.8, rays: 0.25 + 0.1 * smooth(0.4, 0.6, P), light: V(0, 0, 0), vignette: 0.9, ca: 0.002 };
  }
}
