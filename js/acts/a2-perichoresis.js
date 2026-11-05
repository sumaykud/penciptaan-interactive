import * as THREE from 'three';
import { Act, V } from './act.js';
import { glow, points, GlowRing, SHARED } from '../core/materials.js';
import { smooth, lerp, rng, range, easeOut, easeInOut } from '../core/util.js';
import { PERICHORESIS_VERSES } from '../data.js';

/* STORY 2 · Perichoresis — cincin cahaya tergambar oleh scroll,
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
    const N = 18;
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
    this.hovered = -1;
    this.pinned = -1;
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
      const target = i === this.hovered || i === this.pinned ? 1 : 0;
      o.hover += (target - o.hover) * 0.15;
      size[i] = o.size * (1 + o.hover * 0.55);
      al[i] = s * (0.85 + o.hover * 0.6);
      // posisi layar untuk deteksi hover
      const v = o.world.clone().applyMatrix4(this.group.matrixWorld).project(cam);
      const depth = cam.position.distanceTo(o.world);
      o.screen.x = (v.x * 0.5 + 0.5) * this.ctx.size.w;
      o.screen.y = (-v.y * 0.5 + 0.5) * this.ctx.size.h;
      o.screen.r = (size[i] * SHARED.uPxScale.value / depth) * 0.5;
      o.screen.vis = s;
    });
    this.orbPts.geometry.attributes.position.needsUpdate = true;
    this.orbPts.geometry.attributes.aSize.needsUpdate = true;
    this.orbPts.geometry.attributes.aAlpha.needsUpdate = true;
    this.orbPts.material.uniforms.uOpacity.value = w;

    this.interactive = w > 0.6 && p > 0.5 && p < 0.97;
    if (!this.interactive && (this.hovered !== -1 || this.pinned !== -1)) { this.hovered = this.pinned = -1; }
    this.syncTip();
  }

  pick(x, y) {
    let best = -1, bd = 1e9;
    this.orbs.forEach((o, i) => {
      if (o.screen.vis < 0.9) return;
      const d = Math.hypot(o.screen.x - x, o.screen.y - y);
      if (d < Math.max(o.screen.r, 10) + 14 && d < bd) { bd = d; best = i; }
    });
    return best;
  }

  onPointer(e) {
    if (!this.interactive) return;
    const i = this.pick(e.x, e.y);
    if (e.type === 'move') this.hovered = i;
    if (e.type === 'tap') this.pinned = i === this.pinned ? -1 : i;
    this.ctx.setCursor(i >= 0);
  }

  syncTip() {
    const { verseTip, orbRing } = this.ctx.dom;
    const i = this.hovered >= 0 ? this.hovered : this.pinned;
    if (i < 0 || !this.interactive) {
      verseTip.classList.remove('on');
      orbRing.classList.remove('on');
      this.shown = -1;
      return;
    }
    const o = this.orbs[i];
    const v = PERICHORESIS_VERSES[i % PERICHORESIS_VERSES.length];
    if (this.shown !== i) {
      verseTip.querySelector('.ref').textContent = v.ref;
      verseTip.querySelector('.txt').textContent = v.text;
      this.shown = i;
    }
    const W = this.ctx.size.w, H = this.ctx.size.h;
    const tw = verseTip.offsetWidth, th = verseTip.offsetHeight;
    const rr = Math.max(o.screen.r, 10) + 10;
    let x = o.screen.x + rr + 8, y = o.screen.y - th * 0.35;
    if (x + tw > W - 16) x = o.screen.x - rr - 8 - tw;
    if (x < 16) { x = Math.max(16, Math.min(W - tw - 16, o.screen.x - tw / 2)); y = o.screen.y + rr + 10; }
    y = Math.max(16, Math.min(H - th - 16, y));
    verseTip.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    orbRing.style.transform = `translate3d(${(o.screen.x - rr).toFixed(1)}px, ${(o.screen.y - rr).toFixed(1)}px, 0)`;
    orbRing.style.width = orbRing.style.height = `${(rr * 2).toFixed(1)}px`;
    verseTip.classList.add('on');
    orbRing.classList.add('on');
  }

  pose(P) {
    const p = P;
    return { pos: V(0, 0.05, lerp(7.4, 6.4, smooth(0, 1, p))), look: V(0, 0, 0), fov: 40 };
  }

  post(P) {
    return { bloom: 0.7, rays: 0.12, light: V(0, 0, 0), vignette: 0.9 };
  }
}
