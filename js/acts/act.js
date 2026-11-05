import * as THREE from 'three';

/**
 * Satu "act" = sekumpulan objek 3D yang hidup di satu atau beberapa track scroll.
 * P = progress lokal (0..1 untuk satu track, 0..2 untuk dua track, dst.)
 * w = bobot crossfade (0..1) terhadap act lain.
 */
export class Act {
  constructor(ctx, { start, end }) {
    this.ctx = ctx;
    this.start = start;
    this.end = end;
    this.group = new THREE.Group();
    this.group.visible = false;
    this.weight = 0;
    ctx.scene.add(this.group);
  }
  update(/* P, w, t, dt */) {}
  pose(/* P, t */) { return { pos: new THREE.Vector3(0, 0, 7), look: new THREE.Vector3(), fov: 40 }; }
  post(/* P, t */) { return {}; }
  onPointer(/* e */) {}

  // Layar portrait: mundurkan kamera dari titik fokus supaya komposisi tengah tidak terpotong.
  fit(pose, k = 0.72, max = 1.8) {
    const aspect = this.ctx.size.w / this.ctx.size.h;
    if (aspect >= 1) return pose;
    const f = Math.min(max, Math.max(1, k / aspect));
    pose.pos.sub(pose.look).multiplyScalar(f).add(pose.look);
    return pose;
  }
}

export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
