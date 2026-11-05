import { SHARED } from './materials.js';

/* Interaksi "titik cahaya → ayat" yang dipakai Story 2 & Story 3.
   Tiap act punya satu VerseOrbs; tooltip (#verse-tip) dan cincin hover (#orb-ring)
   dipakai bersama, jadi hanya act yang sedang menampilkannya yang boleh menutupnya. */

let owner = null;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Bagikan ayat ke n titik secara acak: putaran pertama memuat semua ayat,
// sisa titik diisi putaran acak berikutnya, lalu urutannya diacak lagi.
export function assignVerses(n, count) {
  if (!count) return [];
  const list = [];
  while (list.length < n) list.push(...shuffle([...Array(count).keys()]));
  return shuffle(list.slice(0, n));
}

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

// **tebal**, *miring*, ^[2] catatan kaki, [catatan editor], baris baru
export const fmtVerse = (s) => esc(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/\^\[(.+?)\]/g, '<sup>[$1]</sup>')
  .replace(/\[(.+?)\]/g, (m, x, i, str) => (str.slice(i - 5, i) === '<sup>' ? m : `<span class="note">[${x}]</span>`))
  .replace(/\n/g, '<br>');

// Proyeksikan titik dunia ke layar (px CSS) + perkiraan radius titik yang terlihat.
export function projectOrb(o, world, sizeWorld, group, cam, ctx, vis) {
  const v = world.clone().applyMatrix4(group.matrixWorld).project(cam);
  const depth = Math.max(cam.position.distanceTo(world), 0.05);
  o.screen.x = (v.x * 0.5 + 0.5) * ctx.size.w;
  o.screen.y = (-v.y * 0.5 + 0.5) * ctx.size.h;
  o.screen.r = (sizeWorld * SHARED.uPxScale.value / depth) * 0.5;
  o.screen.vis = v.z < 1 ? vis : 0;
}

export class VerseOrbs {
  constructor(ctx, verses, n) {
    this.ctx = ctx;
    this.verses = verses;
    this.verseOf = assignVerses(n, verses.length);
    this.hovered = -1;
    this.pinned = -1;
    this.shown = -1;
    this.interactive = false;
  }

  setInteractive(on) {
    if (this.interactive && !on) {
      if (this.hovered >= 0) this.ctx.setCursor(false);
      this.hovered = this.pinned = -1;
    }
    this.interactive = on;
  }

  isActive(i) { return i === this.hovered || i === this.pinned; }

  pick(orbs, x, y) {
    let best = -1, bd = 1e9;
    orbs.forEach((o, i) => {
      if (o.screen.vis < 0.9) return;
      const d = Math.hypot(o.screen.x - x, o.screen.y - y);
      if (d < Math.max(o.screen.r, 10) + 14 && d < bd) { bd = d; best = i; }
    });
    return best;
  }

  onPointer(e, orbs) {
    if (!this.interactive) return;
    const i = this.pick(orbs, e.x, e.y);
    if (e.type === 'move') this.hovered = i;
    if (e.type === 'tap') this.pinned = i === this.pinned ? -1 : i;
    this.ctx.setCursor(i >= 0);
  }

  sync(orbs) {
    const { verseTip, orbRing } = this.ctx.dom;
    const i = this.hovered >= 0 ? this.hovered : this.pinned;
    const v = this.interactive && i >= 0 ? this.verses[this.verseOf[i]] : null;
    if (!v) {
      if (owner === this) {
        verseTip.classList.remove('on');
        orbRing.classList.remove('on');
        owner = null;
      }
      this.shown = -1;
      return;
    }
    if (owner !== this || this.shown !== i) {
      verseTip.querySelector('.ref').innerHTML = esc(v.ref) + (v.note ? `<span class="ref-note"> · ${esc(v.note)}</span>` : '');
      verseTip.querySelector('.txt').innerHTML = fmtVerse(v.text);
      verseTip.querySelector('.cmt').innerHTML = v.comment ? fmtVerse(v.comment) : '';
      this.shown = i;
      owner = this;
    }
    const o = orbs[i];
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
}
