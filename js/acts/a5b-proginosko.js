import { Act, V } from './act.js';
import { glow, rays, points, streaks } from '../core/materials.js';
import { smooth, lerp, rng, range, bell, easeOut, easeInOut } from '../core/util.js';
import { Sound } from '../core/sound.js';

/* STORY 8 · PROGINOSKO — kemahatahuan Allah.
   Cahaya Story 7 (titik asal dunia) berdenyut seperti detak, lalu MELEDAK: semburan garis
   emas-putih + dua gelombang kejut. Setelah itu ribuan titik cahaya menyebar ke segala arah
   dan tetap menyala ("Allah mengenal semuanya dari semula"). Di akhir kamera mendekat ke
   titik cahaya — posisi awal Story 9 (7 Hari Penciptaan) — sehingga peralihannya menyambung. */
const BOOM = 0.42; // progress saat ledakan terjadi
const END_DIR = V(0.12, 0.2, 1).normalize(); // = arah kamera awal Story 9

export class ActProginosko extends Act {
  constructor(ctx) {
    super(ctx, { start: 7, end: 7 });
    const r = rng(808);
    const m = ctx.mobile ? 0.55 : 1;

    this.core = glow({ color: [1.0, 0.86, 0.62], scale: [2.4, 2.4], falloff: 3.3, core: 34, coreAmt: 1.1, intensity: 0.8 });
    this.halo = glow({ color: [1.0, 0.6, 0.28], scale: [7, 7], falloff: 2.8, coreAmt: 0, intensity: 0.25 });
    this.flare = glow({ color: [1.0, 0.74, 0.45], scale: [9, 0.1], falloff: 1.6, coreAmt: 0, intensity: 0.5 });
    this.flareV = glow({ color: [1.0, 0.86, 0.66], scale: [0.06, 3], falloff: 1.6, coreAmt: 0, intensity: 0.25 });
    this.fine = rays({ scale: [12, 12], count: 220, sharp: 8, length: 0.45, color: [1.0, 0.78, 0.5], intensity: 0, edge: 0.45 });
    this.shock = glow({ color: [1.0, 0.9, 0.72], scale: [2, 2], falloff: 40, ring: 0.03, coreAmt: 0, intensity: 0 });
    this.shock2 = glow({ color: [0.85, 0.9, 1.0], scale: [2, 2], falloff: 40, ring: 0.018, coreAmt: 0, intensity: 0 });

    // semburan garis cahaya keluar dari pusat (digerakkan progress ledakan)
    this.burst = streaks(Math.round(1700 * m), () => {
      const u = r() * 2 - 1, a = r() * Math.PI * 2, s = Math.sqrt(1 - u * u);
      const hot = r();
      const k = 0.55 + r() * 0.9;
      return {
        start: [0, 0, 0], dir: [Math.cos(a) * s, Math.sin(a) * s * 0.85, u * 0.25 - 0.15],
        color: [1.0 * k, (0.72 + hot * 0.25) * k, (0.38 + hot * 0.5) * k],
        speed: 3 + Math.pow(r(), 0.6) * 18, len: 0.5 + r() * 1.5, width: 0.006 + r() * 0.02,
        phase: r() * 1.2,
      };
    }, 2, { intensity: 0.5 });

    // "semua dikenal": titik cahaya menyebar ke segala arah lalu tetap menyala (berkelip)
    const N = Math.round(2600 * m);
    this.seeds = [];
    this.known = points(N, () => {
      const u = r() * 2 - 1, a = r() * Math.PI * 2, s = Math.sqrt(1 - u * u);
      const rad = 2.2 + Math.pow(r(), 0.55) * 13;
      this.seeds.push({ x: Math.cos(a) * s * rad, y: Math.sin(a) * s * rad * 0.8, z: u * rad * 0.7, d: r() * 0.25 });
      const warm = r();
      return { p: [0, 0, 0], c: warm < 0.7 ? [1.0, 0.84, 0.6] : [0.8, 0.88, 1.0], s: 0.02 + Math.pow(r(), 3) * 0.08, a: 0.45 + r() * 0.55 };
    }, { twinkle: 0.7, soft: 0.4 });

    this.group.add(this.halo, this.fine, this.known, this.burst, this.flare, this.flareV, this.shock, this.shock2, this.core);
    this.shakeV = V();
    this.prevP = 0;
  }

  update(P, w, t) {
    const u = (o) => o.material.uniforms;
    const pre = smooth(0.0, BOOM, P);            // berkumpul / detak sebelum ledakan
    const e = range(BOOM, BOOM + 0.38, P);       // progress ledakan
    const boom = bell(BOOM - 0.02, BOOM + 0.3, P);
    const settle = smooth(0.72, 1.0, P);         // mengecil menjadi titik untuk Story 9

    // detak: makin cepat & kuat mendekati ledakan
    const beat = Math.pow(0.5 + 0.5 * Math.sin(t * (2.2 + 4 * pre)), 6) * pre * (1 - smooth(BOOM, BOOM + 0.05, P));
    u(this.core).uIntensity.value = (0.75 + 0.35 * pre + 0.5 * beat + 0.55 * boom) * (1 - 0.35 * settle);
    u(this.core).uScale.value.setScalar((2.2 + 0.6 * pre + 0.8 * beat + 1.4 * boom) * (1 - 0.45 * settle));
    u(this.halo).uIntensity.value = 0.18 + 0.12 * pre + 0.1 * boom;
    u(this.halo).uScale.value.setScalar(6 + 2 * pre + 3 * boom);
    u(this.flare).uIntensity.value = (0.45 + 0.4 * pre + 0.35 * boom) * (1 - 0.5 * settle);
    u(this.flare).uScale.value.set(8 + 4 * pre + 12 * boom, 0.1 + 0.03 * pre);
    u(this.flareV).uIntensity.value = 0.2 + 0.2 * pre;
    u(this.fine).uIntensity.value = 0.25 * pre * (1 - e) + 0.28 * boom;
    u(this.fine).uLength.value = 0.25 + 0.35 * pre + 0.6 * easeOut(e);
    u(this.fine).uSpin.value = t * 0.004;

    u(this.burst).uProgress.value = e * 1.05;
    u(this.burst).uOpacity.value = w * smooth(BOOM - 0.005, BOOM + 0.02, P) * (1 - smooth(0.8, 0.95, P));
    u(this.burst).uLenMul.value = 1 + 0.4 * boom;
    const sh = range(BOOM, BOOM + 0.22, P);
    u(this.shock).uScale.value.setScalar(1 + sh * 24);
    u(this.shock).uIntensity.value = 0.55 * (1 - sh) * (sh > 0 ? 1 : 0);
    const sh2 = range(BOOM + 0.05, BOOM + 0.34, P);
    u(this.shock2).uScale.value.setScalar(1 + sh2 * 28);
    u(this.shock2).uIntensity.value = 0.35 * (1 - sh2) * (sh2 > 0 ? 1 : 0);
    [this.core, this.halo, this.flare, this.flareV, this.fine, this.shock, this.shock2].forEach((o) => (u(o).uOpacity.value = w));

    // titik-titik "dikenal": menyebar dari pusat setelah ledakan, lalu diam berkelip
    const pos = this.known.geometry.attributes.position.array;
    const spread = this.seeds.length;
    for (let i = 0; i < spread; i++) {
      const sd = this.seeds[i];
      const k = easeOut(range(BOOM + sd.d * 0.4, BOOM + 0.3 + sd.d, P));
      pos[i * 3] = sd.x * k; pos[i * 3 + 1] = sd.y * k; pos[i * 3 + 2] = sd.z * k;
    }
    this.known.geometry.attributes.position.needsUpdate = true;
    u(this.known).uOpacity.value = w * smooth(BOOM, BOOM + 0.06, P);

    // getaran kamera saat ledakan
    const amp = this.ctx.reduced ? 0 : 0.06 * bell(BOOM, BOOM + 0.22, P);
    this.shakeV.set(Math.sin(t * 45) * amp, Math.cos(t * 37) * amp, 0);

    // suara: dengung naik menjelang ledakan, lalu dentuman saat melewati titik ledakan (maju)
    Sound.setHum(w * (0.25 + 0.75 * pre) * (1 - smooth(BOOM, BOOM + 0.08, P)) + w * 0.35 * boom * (1 - settle));
    if (w > 0.5 && this.prevP < BOOM && P >= BOOM && P - this.prevP < 0.2) Sound.boom();
    this.prevP = P;
  }

  pose(P) {
    // awal = akhir Story 7 (0, 0, 11.6) → mendekat saat detak → mundur sedikit saat ledakan →
    // akhirnya tepat di posisi awal Story 9 (jarak 2,3 dari titik cahaya)
    const zA = lerp(11.6, 7.2, easeInOut(range(0, BOOM, P))) + 1.6 * smooth(BOOM, BOOM + 0.2, P);
    const a = V(0, 0, zA);
    const b = END_DIR.clone().multiplyScalar(2.3);
    const pos = a.lerp(b, easeInOut(range(0.74, 1.0, P))).add(this.shakeV);
    return this.fit({ pos, look: V(0, 0, 0).add(this.shakeV.clone().multiplyScalar(0.5)), fov: 40 + 5 * bell(BOOM, BOOM + 0.25, P) }, 0.8);
  }

  post(P) {
    const flash = bell(BOOM - 0.005, BOOM + 0.1, P);
    return {
      bloom: 0.78 - 0.22 * bell(BOOM, BOOM + 0.3, P), // bloom diredam di puncak supaya tidak memutih
      rays: 0.22 + 0.12 * smooth(0, BOOM, P),
      light: V(0, 0, 0),
      ca: 0.01 * bell(BOOM, BOOM + 0.25, P),
      // kilat dibatasi supaya judul tetap terbaca
      flash: (this.ctx.reduced ? 0.12 : 0.32) * flash * flash,
      vignette: 0.85,
    };
  }
}
