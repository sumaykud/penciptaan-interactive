import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, points, GlowRing } from '../core/materials.js';
import { smooth, lerp, rng, range, easeOut, easeInOut } from '../core/util.js';
import { VerseOrbs, projectOrb } from '../core/verses.js';
import { ESA_VERSES } from '../data.js';

const MIN_ORBS = 18;

/* STORY 2 · Allah itu Satu / Esa — cincin cahaya tergambar oleh scroll,
   partikel cahaya keluar dari pusat; hover / tap partikel → ayat firman. */
export class ActPerichoresis extends Act {
  constructor(ctx) {
    super(ctx, { start: 1, end: 1 });
    this.center = glow({ color: [1.0, 0.55, 0.22], scale: [5.0, 5.0], falloff: 3.4, core: 14, coreAmt: 0.75, intensity: 0.6 });
    this.group.add(this.center);
    this.tilt = new THREE.Group();
    this.ring = new GlowRing({ R: 1.08, tube: 0.012, intensity: 2.2, haloWidth: 0.06, fill: 0.12, haloIntensity: 0.28, color: [1, 0.82, 0.55] });
    this.tilt.add(this.ring);
    this.group.add(this.tilt);

    const r = rng(5);
    const N = Math.max(MIN_ORBS, ESA_VERSES.length);
    this.verses = new VerseOrbs(ctx, ESA_VERSES, N);
    this.orbs = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + (r() - 0.5) * 0.35;
      const rad = 1.5 + r() * 1.25;
      this.orbs.push({
        base: V(Math.cos(a) * rad * 1.45, Math.sin(a) * rad * 0.92, -1.2 + r() * 2.2),
        size: 0.1 + r() * 0.1,
        seed: r() * 10,
        hover: 0,
        world: V(),
        screen: { x: 0, y: 0, r: 0, vis: 0 },
      });
    }
    this.orbPts = points(N, (i) => ({ p: [0, 0, 0], c: [1.0, 1.0, 0.66], s: this.orbs[i].size, a: 1 }), { soft: 0.55, twinkle: 0.08, maxSize: 260 });
    this.group.add(this.orbPts);
    this.tmp = V();
  }

  update(P, w, t) {
    const p = P;
    const draw = easeInOut(range(0.03, 0.4, p));
    this.ring.draw = Math.max(draw, 0.0001);
    this.ring.opacity = w * smooth(0.0, 0.05, p + 0.05);
    this.ring.intensity = 2.2 + Math.sin(t * 1.7) * 0.25;
    this.tilt.rotation.set(0.32 + Math.sin(t * 0.3) * 0.05, Math.sin(t * 0.23) * 0.14, t * 0.04);
    const c = this.center.material.uniforms;
    c.uIntensity.value = (0.16 + 0.24 * smooth(0.05, 0.45, p)) * (1 + 0.08 * Math.sin(t * 1.9));
    c.uOpacity.value = w;

    // partikel: keluar dari pusat lalu melayang
    const pos = this.orbPts.geometry.attributes.position.array;
    const size = this.orbPts.geometry.attributes.aSize.array;
    const al = this.orbPts.geometry.attributes.aAlpha.array;
    const cam = this.ctx.camera;
    this.orbs.forEach((o, i) => {
      const s = easeOut(range(0.22 + i * 0.012, 0.58 + i * 0.012, p));
      const drift = this.tmp.set(Math.sin(t * 0.4 + o.seed) * 0.12, Math.cos(t * 0.33 + o.seed * 1.3) * 0.1, Math.sin(t * 0.27 + o.seed) * 0.1);
      o.world.copy(o.base).multiplyScalar(s).add(drift.multiplyScalar(s));
      pos[i * 3] = o.world.x; pos[i * 3 + 1] = o.world.y; pos[i * 3 + 2] = o.world.z;
      const target = this.verses.isActive(i) ? 1 : 0;
      o.hover += (target - o.hover) * 0.15;
      size[i] = o.size * (1 + o.hover * 0.55);
      al[i] = s * (0.85 + o.hover * 0.6);
      // posisi layar untuk deteksi hover
      projectOrb(o, o.world, size[i], this.group, cam, this.ctx, s);
    });
    this.orbPts.geometry.attributes.position.needsUpdate = true;
    this.orbPts.geometry.attributes.aSize.needsUpdate = true;
    this.orbPts.geometry.attributes.aAlpha.needsUpdate = true;
    this.orbPts.material.uniforms.uOpacity.value = w;

    this.verses.setInteractive(w > 0.6 && p > 0.5 && p < 0.97);
    this.verses.sync(this.orbs);
  }

  onPointer(e) { this.verses.onPointer(e, this.orbs); }

  pose(P) {
    const p = P;
    return this.fit({ pos: V(0, 0.05, lerp(7.4, 6.4, smooth(0, 1, p))), look: V(0, 0, 0), fov: 40 });
  }

  post(P) {
    return { bloom: 0.7, rays: 0.12, light: V(0, 0, 0), vignette: 0.9 };
  }
}
