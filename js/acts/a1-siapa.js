import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, rays, points } from '../core/materials.js';
import { smooth, lerp, rng, range } from '../core/util.js';

/* STORY 1 · Siapa Allah — cahaya "pulse" dari bawah horizon + debu bercahaya.
   Scroll: cahaya membesar, berdenyut, lalu naik ke tengah (menjadi inti Perichoresis). */
export class ActSiapa extends Act {
  constructor(ctx) {
    super(ctx, { start: 0, end: 0 });
    this.light = new THREE.Group();
    this.group.add(this.light);

    this.halo = glow({ color: [1.0, 0.6, 0.26], scale: [12, 5.4], falloff: 2.1, coreAmt: 0, intensity: 0.3 });
    this.horizon = glow({ color: [1.0, 0.8, 0.5], scale: [7.5, 1.1], falloff: 2.2, core: 5, coreAmt: 0.15, intensity: 0.5 });
    this.core = glow({ color: [1.0, 0.85, 0.6], scale: [2.4, 1.3], falloff: 3, core: 14, coreAmt: 0.8, intensity: 0.6 });
    this.wave = glow({ color: [1.0, 0.85, 0.55], scale: [6, 3], falloff: 30, ring: 0.05, coreAmt: 0, intensity: 0.6 });
    this.wave2 = glow({ color: [1.0, 0.85, 0.55], scale: [6, 3], falloff: 30, ring: 0.05, coreAmt: 0, intensity: 0.6 });
    this.fan = rays({ scale: [15, 9], center: [0.5, 0.0], aspect: [1.666, 1], count: 72, sharp: 5, length: 0.85, color: [1, 0.78, 0.48], intensity: 0.3, edge: 0.55 });
    this.fan.position.y = 4.5;
    this.light.add(this.halo, this.fan, this.horizon, this.wave, this.wave2, this.core);

    // debu cahaya melayang
    const r = rng(11);
    const N = ctx.mobile ? 600 : 1300;
    this.dust = points(N, () => ({
      p: [(r() - 0.5) * 14, (r() - 0.5) * 7, -4 + r() * 6],
      c: [1.0, 0.86, 0.6],
      s: 0.008 + r() * 0.022,
      a: 0.2 + r() * 0.6,
    }), { twinkle: 0.45 });
    this.dustBase = this.dust.geometry.attributes.position.array.slice();
    this.dustAlpha0 = this.dust.geometry.attributes.aAlpha.array.slice();
    this.group.add(this.dust);
    this.lightPos = V(0, -2.7, -1);
  }

  update(P, w, t) {
    const p = Math.max(P, 0);
    const rise = smooth(0.78, 1.04, p);
    const amt = 0.75 + 0.45 * smooth(0.35, 0.72, p) + 0.5 * rise;
    const pulse = 1 + 0.18 * Math.sin(t * 2.1) + 0.06 * Math.sin(t * 5.3);
    this.lightPos.set(0, lerp(-2.7, -0.25, rise), -1);
    this.light.position.copy(this.lightPos);

    this.halo.material.uniforms.uIntensity.value = 0.3 * amt * pulse * (1 - 0.35 * rise);
    this.halo.material.uniforms.uScale.value.set(13 + 3 * rise, lerp(6.5, 9, rise));
    this.horizon.material.uniforms.uIntensity.value = 0.5 * amt * pulse * (1 - rise * 0.7);
    this.core.material.uniforms.uIntensity.value = (0.55 + 0.9 * rise) * pulse;
    this.core.material.uniforms.uScale.value.set(lerp(2.6, 3.6, rise), lerp(1.6, 3.6, rise));
    this.fan.material.uniforms.uIntensity.value = (0.12 + 0.2 * smooth(0.3, 0.8, p)) * (1 - rise);
    this.fan.material.uniforms.uSpin.value = Math.sin(t * 0.1) * 0.01;

    // gelombang "pulse" yang memancar dari sumber cahaya
    [this.wave, this.wave2].forEach((wv, i) => {
      const ph = (t / 2.8 + i * 0.5) % 1;
      wv.material.uniforms.uScale.value.set(1.5 + ph * 11, (1.5 + ph * 11) * lerp(0.42, 1, rise));
      wv.material.uniforms.uIntensity.value = 0.32 * Math.pow(1 - ph, 2) * amt;
    });

    [this.halo, this.horizon, this.core, this.fan, this.wave, this.wave2].forEach((m) => (m.material.uniforms.uOpacity.value = w));

    // debu naik perlahan & lebih terang di dekat cahaya
    const pos = this.dust.geometry.attributes.position.array;
    const al = this.dust.geometry.attributes.aAlpha.array;
    const ly = this.lightPos.y;
    for (let i = 0; i < pos.length / 3; i++) {
      const bx = this.dustBase[i * 3], by = this.dustBase[i * 3 + 1], bz = this.dustBase[i * 3 + 2];
      const y = ((by + t * (0.05 + (i % 7) * 0.012) + 3.5) % 7) - 3.5;
      const x = bx + Math.sin(t * 0.3 + i) * 0.08;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = bz;
      const dx = x / 5, dy = (y - ly) / 2.4;
      al[i] = this.dustAlpha0[i] * (0.18 + 1.6 * Math.exp(-(dx * dx + dy * dy)) * amt);
    }
    this.dust.geometry.attributes.position.needsUpdate = true;
    this.dust.geometry.attributes.aAlpha.needsUpdate = true;
    this.dust.material.uniforms.uOpacity.value = w;
  }

  pose(P) {
    const p = Math.max(P, 0);
    return {
      pos: V(0, 0.15 - 0.3 * p, 7),
      look: V(0, -0.1 - 0.2 * p, 0),
      fov: 40,
    };
  }

  post(P) {
    const p = Math.max(P, 0);
    return { bloom: 0.8 + 0.25 * p, rays: 0.22 + 0.25 * range(0.3, 1, p), light: this.lightPos, vignette: 0.85, threshold: 0.2 };
  }
}
