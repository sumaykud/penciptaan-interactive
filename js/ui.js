import { STORIES } from './config.js';
import { UNIVERSE_TIMELINE, THEMES, BOOK_GROUPS } from './data.js';
import { clamp } from './core/util.js';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- pemecah teks untuk animasi per huruf / kata ---------- */
function splitChars(el) {
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  for (const ch of text) {
    const s = document.createElement('span');
    if (ch === ' ') s.className = 'sp';
    else { s.className = 'ch'; s.textContent = ch; }
    s.setAttribute('aria-hidden', 'true');
    el.appendChild(s);
  }
  return $$('.ch', el);
}
function splitMask(el) {
  const text = el.textContent;
  el.setAttribute('aria-label', text);
  el.textContent = '';
  for (const ch of text) {
    const m = document.createElement('span');
    m.className = 'm'; m.setAttribute('aria-hidden', 'true');
    const c = document.createElement('span');
    c.className = 'c'; c.textContent = ch;
    m.appendChild(c); el.appendChild(m);
  }
  return $$('.c', el);
}
function splitWords(el) {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s); }
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) {
        if (n.classList.contains('nb') || n.tagName === 'SUP' || n.tagName === 'STRONG') n.classList.add('w');
        else walk(n);
      }
    });
  };
  walk(el);
  return $$('.w', el);
}

export class StoryUI {
  constructor(ctx) {
    this.ctx = ctx;
    this.layers = STORIES.map((_, i) => $(`#L${i}`));
    this.tls = [];
    this.buildTracks();
    this.buildChapters();
    this.buildStory1();
    this.buildStory2();
    this.buildStory4();
    this.buildStory7();
    this.buildStory8();
    this.buildStory9and10();
    this.lastG = -1;
  }

  buildTracks() {
    const main = $('#tracks');
    STORIES.forEach((s) => {
      const d = document.createElement('div');
      d.className = 'track'; d.id = s.id; d.style.height = `${s.vh}vh`;
      d.setAttribute('aria-hidden', 'true');
      main.appendChild(d);
    });
    this.tracks = $$('.track', main);
  }

  buildChapters() {
    const bar = $('#chapters .ch-bar');
    this.chButtons = STORIES.map((s, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `${String(i + 1).padStart(2, '0')} · ${s.label}`);
      b.title = s.label;
      b.addEventListener('click', () => this.ctx.scrollToStory(i, 0.02));
      bar.appendChild(b);
      return b;
    });
    this.chNum = $('#chapters .ch-num');
    this.chName = $('#chapters .ch-name');
  }

  /* STORY 1: judul menyala per huruf saat dimuat; kartu "tersinari" satu per satu oleh scroll */
  buildStory1() {
    const L = this.layers[0];
    this.s1chars = splitChars($('.s1-title', L));
    this.s1words = splitWords($('.s1-intro', L));
    const creatioChars = splitChars($('.s1-creatio', L));
    const creatio = $('.s1-creatio', L);
    gsap.set(this.s1chars, { opacity: 0 });
    gsap.set(this.s1words, { opacity: 0 });
    const [c1, c2, c3] = $$('.card', L);
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
    const rest = { opacity: 0.3, filter: 'blur(2.5px)', '--lit': 0, '--sweep': 0 };
    const lit = { opacity: 1, x: 0, y: 0, rotateY: 0, rotateX: 0, filter: 'blur(0px)', '--lit': 1, '--sweep': 1, duration: 0.2 };
    tl.fromTo(c1, { ...rest, x: -34, rotateY: 16 }, lit, 0.07)
      .fromTo(c2, { ...rest, x: 34, rotateY: -16 }, lit, 0.19)
      .fromTo(c3, { ...rest, y: 26, rotateX: 20 }, lit, 0.31)
      .fromTo(creatioChars, { opacity: 0.32, filter: 'blur(3px)' }, { opacity: 1, filter: 'blur(0px)', stagger: 0.01, duration: 0.12 }, 0.5)
      .fromTo(creatio, { letterSpacing: '0.16em', '--glow': 0 }, { letterSpacing: '0em', '--glow': 1, duration: 0.24, ease: 'power3.out' }, 0.5)
      .fromTo($('.scroll-hint', L), { opacity: 1 }, { opacity: 0, duration: 0.04, immediateRender: false }, 0.01)
      .fromTo($('.s1-wrap', L), { y: 0, opacity: 1, filter: 'blur(0px)' }, { y: -60, opacity: 0, filter: 'blur(10px)', duration: 0.13, ease: 'power2.in', immediateRender: false }, 0.76)
      .fromTo(creatio, { scale: 1, opacity: 1, filter: 'blur(0px)' }, { scale: 1.18, opacity: 0, filter: 'blur(14px)', duration: 0.1, ease: 'power2.in', immediateRender: false }, 0.9)
      .set({}, {}, 1);
    this.tls[0] = tl;
  }

  playIntro() {
    const reduced = this.ctx.reduced;
    gsap.fromTo(this.s1chars,
      { opacity: 0, yPercent: 60, rotateX: -75, filter: 'blur(16px)' },
      { opacity: 1, yPercent: 0, rotateX: 0, filter: 'blur(0px)', duration: reduced ? 0.6 : 1.5, stagger: reduced ? 0 : 0.055, ease: 'power3.out', delay: 0.15 });
    gsap.fromTo(this.s1words,
      { opacity: 0, y: 8, filter: 'blur(6px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: reduced ? 0 : 0.012, ease: 'power2.out', delay: reduced ? 0.2 : 0.75 });
    document.body.classList.add('ready');
  }

  /* STORY 2: huruf naik dari balik "mask", kilau emas menyapu judul */
  buildStory2() {
    const L = this.layers[1];
    const title = $('.s2-title', L);
    const chars = splitMask(title);
    const hint = $('.s2-hint', L);
    hint.textContent = this.ctx.touch ? 'Ketuk partikel cahaya' : 'Arahkan kursor ke partikel cahaya';
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(chars, { yPercent: 118 }, { yPercent: 0, stagger: 0.014, duration: 0.14, ease: 'power3.out' }, 0.02)
      .fromTo(title, { '--shine': '0%' }, { '--shine': '100%', duration: 0.32, ease: 'none' }, 0.16)
      .fromTo(hint, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.05 }, 0.52)
      .to(hint, { opacity: 0, duration: 0.04 }, 0.92)
      .fromTo(title, { opacity: 1, y: 0, filter: 'blur(0px)' }, { opacity: 0, y: -34, filter: 'blur(10px)', duration: 0.07, ease: 'power2.in', immediateRender: false }, 0.91)
      .set({}, {}, 1);
    this.tls[1] = tl;
  }

  /* STORY 4: judul "disinari" — pita cahaya memindai huruf dari kiri ke kanan */
  buildStory4() {
    const L = this.layers[3];
    const title = $('.s4-title', L);
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(title, { '--scan': '0%', opacity: 0, scale: 1.07, filter: 'blur(10px)', '--glow': 0 }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.1 }, 0.03)
      .to(title, { '--scan': '100%', duration: 0.32, ease: 'power1.inOut' }, 0.05)
      .to(title, { '--glow': 1, duration: 0.2 }, 0.32)
      .to(title, { opacity: 0, letterSpacing: '0.28em', filter: 'blur(12px)', duration: 0.1, ease: 'power2.in' }, 0.84)
      .set({}, {}, 1);
    this.tls[3] = tl;
  }

  /* STORY 7: "&" muncul di garis cahaya, kedua frasa membelah keluar, sub-judul diketik */
  buildStory7() {
    const L = this.layers[6];
    const amp = $('.amp', L);
    const [wl, wr] = $$('.wipe', L);
    const subL = splitChars($('.sub.left', L));
    const subR = splitChars($('.sub.right', L));
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(amp, { opacity: 0, scale: 0.3, filter: 'blur(10px)' }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.06, ease: 'back.out(2)' }, 0.47)
      .fromTo(wl, { clipPath: 'inset(0 0 0 100%)', x: 36, opacity: 1 }, { clipPath: 'inset(0 0 0 0%)', x: 0, duration: 0.12, ease: 'power3.out' }, 0.5)
      .fromTo(wr, { clipPath: 'inset(0 100% 0 0)', x: -36, opacity: 1 }, { clipPath: 'inset(0 0% 0 0)', x: 0, duration: 0.12, ease: 'power3.out' }, 0.5)
      .fromTo(subL, { opacity: 0 }, { opacity: 1, stagger: { each: 0.004, from: 'end' }, duration: 0.01 }, 0.62)
      .fromTo(subR, { opacity: 0 }, { opacity: 1, stagger: { each: 0.004 }, duration: 0.01 }, 0.62)
      .fromTo($('.s7-wrap', L), { opacity: 1, y: 0, filter: 'blur(0px)' }, { opacity: 0, y: 24, filter: 'blur(8px)', duration: 0.06, immediateRender: false }, 0.93)
      .set({}, {}, 1);
    this.tls[6] = tl;
  }

  /* STORY 8: label timeline — posisi diatur act Big Bang setiap frame */
  buildStory8() {
    const box = $('.uni-labels', this.layers[7]);
    const items = [{ x: 0, title: 'Big Bang', sub: '', kind: 'bigbang' }, ...UNIVERSE_TIMELINE];
    this.uniLabels = items.map((it, i) => {
      const el = document.createElement('div');
      el.className = `ul ${it.kind || ''} ${!it.kind && i % 2 === 0 ? 'hi' : ''}`;
      el.innerHTML = `<div class="lab"><b></b><span></span></div>`;
      $('b', el).textContent = it.title;
      $('span', el).textContent = it.sub;
      el._item = it;
      box.appendChild(el);
      return el;
    });
  }

  /* STORY 9–10: label kelompok, label kitab, legend, navigasi tema, daftar referensi */
  buildStory9and10() {
    const gbox = $('.group-labels', this.layers[8]);
    this.groupLabels = BOOK_GROUPS.map((g) => {
      const el = document.createElement('div');
      el.className = 'gl'; el.textContent = g.name;
      gbox.appendChild(el);
      return el;
    });
    const L = this.layers[9];
    const leg = $('.legend ul', L);
    BOOK_GROUPS.forEach((g) => {
      const li = document.createElement('li');
      li.innerHTML = `<i></i><span></span>`;
      $('i', li).style.background = g.color;
      $('span', li).textContent = g.name;
      leg.appendChild(li);
    });
    const list = $('.theme-list', L);
    this.themeButtons = THEMES.map((th, i) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'interactive'; b.textContent = th.name;
      b.addEventListener('click', () => this.ctx.goTheme(i));
      li.appendChild(b); list.appendChild(li);
      return b;
    });
    this.refList = $('.ref-list', L);
    this.refList.classList.add('interactive');
    $('.drag-hint', L).textContent = this.ctx.touch
      ? 'Ketuk busur untuk melihat ayat'
      : 'Seret diagram untuk memutar 3D · arahkan kursor ke busur untuk melihat ayat';
    this.bookBox = $('.book-labels', L);
    this.leaders = $('.leaders path', L);
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(this.themeButtons, { opacity: 0, x: 34 }, { opacity: 1, x: 0, stagger: 0.025, duration: 0.07, ease: 'power3.out' }, 0.15)
      .fromTo($('.legend', L), { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.08 }, 0.17)
      .fromTo([this.refList, $('.drag-hint', L)], { opacity: 0 }, { opacity: 1, duration: 0.06, stagger: 0.03 }, 0.22)
      .set({}, {}, 1);
    this.tls[9] = tl;
  }

  bindBookLabels(books, arcs) {
    this.bookLabels = books.map((b) => {
      const el = document.createElement('div');
      el.className = 'bl';
      el.innerHTML = `<i></i><span></span>`;
      $('i', el).style.background = BOOK_GROUPS[b.gi].color;
      $('span', el).textContent = b.name;
      el.addEventListener('pointerenter', () => { arcs.setHoverBook(b); el.classList.add('hot'); });
      el.addEventListener('pointerleave', () => { arcs.setHoverBook(null); el.classList.remove('hot'); });
      this.bookBox.appendChild(el);
      return el;
    });
    return this.bookLabels;
  }

  setTheme(i, arcs) {
    this.themeButtons.forEach((b, k) => b.setAttribute('aria-current', k === i ? 'true' : 'false'));
    const th = arcs.themes[i];
    this.refList.innerHTML = '';
    th.items.forEach((it, k) => {
      const li = document.createElement('li');
      li.innerHTML = `<span class="a"></span><span class="arrow">⟶</span><span class="b"></span>`;
      $('.a', li).textContent = it.ref.from;
      $('.b', li).textContent = it.ref.to;
      li.addEventListener('pointerenter', () => arcs.setHoverItem(it));
      li.addEventListener('pointerleave', () => arcs.setHoverItem(null));
      this.refList.appendChild(li);
      setTimeout(() => li.classList.add('in'), 40 + k * 45);
    });
  }

  update(g, progressOf) {
    const idx = clamp(Math.floor(g + 0.0001), 0, STORIES.length - 1);
    if (idx !== this.chIdx) {
      this.chIdx = idx;
      this.chNum.textContent = String(idx + 1).padStart(2, '0');
      this.chName.textContent = STORIES[idx].label;
      this.chButtons.forEach((b, i) => b.setAttribute('aria-current', i === idx ? 'true' : 'false'));
    }
    this.layers.forEach((L, i) => {
      const live = g > i - 0.06 && g < i + 1.06;
      if (L._live !== live) { L._live = live; L.classList.toggle('live', live); }
      const tl = this.tls[i];
      if (tl && live) {
        const p = clamp(progressOf(i));
        if (tl._p !== p) { tl._p = p; tl.progress(p); }
      }
    });
  }
}
