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
}

export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
