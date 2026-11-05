import { STORIES } from './config.js';
import { UNIVERSE_TIMELINE, THEMES, BOOK_GROUPS, EXPLAINERS } from './data.js';
import { clamp } from './core/util.js';
import { fmtVerse } from './core/verses.js';

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
  const text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.textContent = '';
  // Huruf dikelompokkan per kata (nowrap) supaya baris hanya patah di spasi.
  text.split(/\s+/).forEach((word, wi) => {
    if (wi) el.appendChild(document.createTextNode(' '));
    const wd = document.createElement('span');
    wd.className = 'wd'; wd.setAttribute('aria-hidden', 'true');
    for (const ch of word) {
      const m = document.createElement('span');
      m.className = 'm';
      const c = document.createElement('span');
      c.className = 'c'; c.textContent = ch;
      m.appendChild(c); wd.appendChild(m);
    }
    el.appendChild(wd);
  });
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
    this.buildStory3();
    this.buildStory4();
    this.buildExplainer();
    this.buildStory7();
    this.buildProginosko();
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
    gsap.set(this.s1chars, { opacity: 0 });
    gsap.set(this.s1words, { opacity: 0 });
    const [c1, c2, c3] = $$('.card', L);
    const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.out' } });
    const rest = { opacity: 0.3, filter: 'blur(2.5px)', '--lit': 0, '--sweep': 0 };
    const lit = { opacity: 1, x: 0, y: 0, rotateY: 0, rotateX: 0, filter: 'blur(0px)', '--lit': 1, '--sweep': 1, duration: 0.2 };
    tl.fromTo(c1, { ...rest, x: -34, rotateY: 16 }, lit, 0.07)
      .fromTo(c2, { ...rest, x: 34, rotateY: -16 }, lit, 0.19)
      .fromTo(c3, { ...rest, y: 26, rotateX: 20 }, lit, 0.31)
      .fromTo($('.scroll-hint', L), { opacity: 1 }, { opacity: 0, duration: 0.04, immediateRender: false }, 0.01)
      .fromTo($('.s1-wrap', L), { y: 0, opacity: 1, filter: 'blur(0px)' }, { y: -60, opacity: 0, filter: 'blur(10px)', duration: 0.13, ease: 'power2.in', immediateRender: false }, 0.76)
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

  /* STORY 2 & 3: huruf naik dari balik "mask", kilau emas menyapu judul, lalu caption
     dan petunjuk "titik cahaya → ayat" muncul. hintAt = saat titik mulai bisa di-hover. */
  buildStory2() { this.tls[1] = this.buildVerseStory(this.layers[1], 0.52); }
  buildStory3() { this.tls[2] = this.buildVerseStory(this.layers[2], 0.32); }

  buildVerseStory(L, hintAt) {
    const head = $('.s2-head', L);
    const title = $('.s2-title', L);
    const chars = splitMask(title);
    const caption = $$('.s2-sub, .s2-cap', L);
    const hint = $('.s2-hint', L);
    hint.innerHTML = `${this.ctx.touch ? 'Ketuk partikel cahaya' : 'Arahkan kursor ke partikel cahaya'}<span class="s2-hint-sub">untuk melihat ayat</span>`;
    // Kilau emas menyapu judul huruf per huruf. Warna diberikan per huruf karena
    // background-clip:text di induk tidak ikut mewarnai huruf yang di-transform.
    const root = getComputedStyle(document.documentElement);
    const ink = root.getPropertyValue('--ink').trim();
    const gold = root.getPropertyValue('--gold').trim();
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(chars, { yPercent: 118 }, { yPercent: 0, stagger: { amount: 0.17 }, duration: 0.14, ease: 'power3.out' }, 0.02)
      .fromTo(chars, { color: ink }, { color: gold, duration: 0.05, stagger: { amount: 0.24 }, ease: 'power1.out', immediateRender: false }, 0.16)
      .fromTo(chars, { color: gold }, { color: ink, duration: 0.09, stagger: { amount: 0.24 }, ease: 'power1.in', immediateRender: false }, 0.21)
      .fromTo(caption, { opacity: 0, y: 12, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.09, stagger: 0.05, ease: 'power2.out' }, 0.26)
      .fromTo(hint, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.05 }, hintAt)
      .to(hint, { opacity: 0, duration: 0.04 }, 0.92)
      .fromTo(head, { opacity: 1, y: 0, filter: 'blur(0px)' }, { opacity: 0, y: -34, filter: 'blur(10px)', duration: 0.07, ease: 'power2.in', immediateRender: false }, 0.91)
      .set({}, {}, 1);
    const info = $('.info-btn', L); // tombol "?" (opsional)
    if (info) tl.fromTo(info, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.1).to(info, { autoAlpha: 0, duration: 0.05 }, 0.91);
    return tl;
  }

  /* STORY 4: judul "disinari" — pita cahaya memindai huruf dari kiri ke kanan */
  buildStory4() {
    const L = this.layers[3];
    const title = $('.s4-title', L);
    const cap = $('.s4-cap', L);
    const info = $('.info-btn', L);
    const tl = gsap.timeline({ paused: true });
    // tombol "?" hanya bisa diklik selama judul tampil (autoAlpha → visibility: hidden saat 0)
    tl.fromTo(info, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.06 }, 0.1)
      .to(info, { autoAlpha: 0, duration: 0.06 }, 0.86);
    tl.fromTo(title, { '--scan': '0%', opacity: 0, scale: 1.07, filter: 'blur(10px)', '--glow': 0 }, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.1 }, 0.03)
      .to(title, { '--scan': '100%', duration: 0.32, ease: 'power1.inOut' }, 0.05)
      .to(title, { '--glow': 1, duration: 0.2 }, 0.32)
      .fromTo(cap, { opacity: 0, y: 12, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.1, ease: 'power2.out' }, 0.3)
      .to(cap, { opacity: 0, y: -20, filter: 'blur(10px)', duration: 0.08, ease: 'power2.in' }, 0.84)
      .to(title, { opacity: 0, letterSpacing: '0.28em', filter: 'blur(12px)', duration: 0.1, ease: 'power2.in' }, 0.84)
      .set({}, {}, 1);
    this.tls[3] = tl;
  }

  /* PROGINOSKO: judul tetap terlihat (dan terbaca) selama detak & ledakan, hilang sebelum
     kamera mendekat ke titik cahaya untuk 7 Hari Penciptaan */
  buildProginosko() {
    const L = this.layers[7];
    const head = $('.pg-head', L), info = $('.info-btn', L);
    const tl = gsap.timeline({ paused: true });
    tl.fromTo($('.pg-greek', L), { opacity: 0, y: 10, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.06, ease: 'power2.out' }, 0.04)
      .fromTo($('.pg-title', L), { opacity: 0, letterSpacing: '0.24em', filter: 'blur(12px)' }, { opacity: 1, letterSpacing: '0.06em', filter: 'blur(0px)', duration: 0.1, ease: 'power3.out' }, 0.05)
      .fromTo($('.pg-cap', L), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.06, ease: 'power2.out' }, 0.12)
      .fromTo(info, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.1)
      .to(head, { opacity: 0, y: -26, filter: 'blur(8px)', duration: 0.07, ease: 'power2.in' }, 0.8)
      .to(info, { autoAlpha: 0, duration: 0.05 }, 0.8)
      .set({}, {}, 1);
    this.tls[7] = tl;
  }

  /* Modal penjelasan: tombol .info-btn[data-explainer] membuka EXPLAINERS[id] dari data.js */
  buildExplainer() {
    const dlg = $('#explainer');
    if (!dlg) return;
    const f = fmtVerse;
    // butir bisa berupa teks, atau { text, items: [...] } untuk sub-butir (bertingkat)
    const list = (items, cls = 'modal-points') => `<ul class="${cls}">${items.map((it) => (typeof it === 'string'
      ? `<li>${f(it)}</li>`
      : `<li>${f(it.text)}${it.items?.length ? list(it.items, 'modal-points sub') : ''}</li>`)).join('')}</ul>`;
    const node = (n, cls = '') => `<div class="md-node ${cls}"><p class="md-t">${f(n.title)}</p>${n.sub ? `<p class="md-s">${f(n.sub)}</p>` : ''}${
      (n.lines || []).map((l) => `<p class="md-l">${f(l)}</p>`).join('')}${n.ref ? `<p class="md-ref">${f(n.ref)}</p>` : ''}</div>`;
    const diagram = (g) => `<figure class="mdiag" aria-label="Diagram">${node(g.top, 'md-top')}
      <div class="md-stem"></div><div class="md-branch"></div>
      <div class="md-row">${node(g.left)}${node(g.right)}</div>
      <div class="md-merge"></div><div class="md-stem"></div>${node(g.bottom, 'md-bottom')}</figure>`;
    const verse = (v) => `<li><p class="mv-ref">${f(v.ref)}</p>${v.note ? `<p class="mv-note">${f(v.note)}</p>` : ''}
      <p class="mv-txt">${f(v.text)}</p>${v.comment ? `<p class="mv-cmt">${v.commentLabel ? `<span class="mv-cmt-label">${f(v.commentLabel)}</span>` : ''}${f(v.comment)}</p>` : ''}</li>`;
    const fill = (id) => {
      const d = EXPLAINERS[id];
      if (!d) return false;
      $('.modal-title', dlg).innerHTML = f(d.title);
      let html = d.lead ? `<blockquote class="modal-lead"><p>${f(d.lead.text)}</p><cite>${f(d.lead.ref)}</cite></blockquote>` : '';
      if (d.diagram) html += diagram(d.diagram);
      if (d.points) html += list(d.points);
      (d.sections || []).forEach((s) => {
        const table = s.table ? `<div class="modal-table-wrap"><table class="modal-table"><thead><tr>${s.table.head.map((h) => `<th>${f(h)}</th>`).join('')}</tr></thead><tbody>${
          s.table.rows.map((r) => `<tr>${r.map((c) => `<td>${f(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '';
        html += `<section class="modal-sec"><h3 class="modal-h">${f(s.heading)}</h3>${s.intro ? `<p class="modal-intro">${f(s.intro)}</p>` : ''}${
          s.quote ? `<blockquote class="modal-quote">${f(s.quote)}</blockquote>` : ''}${s.items ? list(s.items) : ''}${
          s.outro ? `<p class="modal-intro">${f(s.outro)}</p>` : ''}${s.verses ? `<ol class="modal-verses">${s.verses.map(verse).join('')}</ol>` : ''}${table}</section>`;
      });
      const groups = d.verseGroups || (d.verses ? [{ verses: d.verses }] : []);
      if (groups.length) {
        html += `<h3 class="modal-sub">${f(d.versesTitle || 'Ayat-ayat Referensi')}</h3>`;
        groups.forEach((gr) => {
          html += `${gr.title ? `<h4 class="modal-gtitle">${f(gr.title)}</h4>` : ''}${gr.intro ? `<p class="modal-intro">${f(gr.intro)}</p>` : ''}<ol class="modal-verses">${gr.verses.map(verse).join('')}</ol>`;
        });
      }
      $('.modal-body', dlg).innerHTML = html;
      return true;
    };
    let opener = null;
    $$('.info-btn[data-explainer]').forEach((btn) => btn.addEventListener('click', () => {
      if (!fill(btn.dataset.explainer)) return;
      opener = btn;
      dlg.showModal();
      $('.modal-scroll', dlg).scrollTop = 0; // setelah dibuka; saat tersembunyi scrollTop tidak berlaku
      this.ctx.setScrollLock(true);
    }));
    $('.modal-close', dlg).addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); }); // klik di luar panel
    dlg.addEventListener('close', () => {
      this.ctx.setScrollLock(false);
      opener?.focus({ preventScroll: true });
    });
  }

  /* STORY 7: "&" muncul di garis cahaya, kedua frasa membelah keluar, sub-judul diketik */
  buildStory7() {
    const L = this.layers[6];
    const amp = $('.amp', L);
    const [wl, wr] = $$('.wipe', L);
    const subL = splitChars($('.sub.left', L));
    const subR = splitChars($('.sub.right', L));
    const tl = gsap.timeline({ paused: true });
    const info = $('.info-btn', L);
    tl.fromTo(info, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.5)
      .to(info, { autoAlpha: 0, duration: 0.05 }, 0.93);
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
    const box = $('.uni-labels', this.layers[8]);
    const items = [...UNIVERSE_TIMELINE];
    this.uniLabels = items.map((it, i) => {
      const el = document.createElement('div');
      el.className = `ul ${it.kind || ''} ${!it.kind && i % 2 === 0 ? 'hi' : ''}`;
      el.innerHTML = `<div class="lab"><b></b><i></i><span></span></div>`;
      $('b', el).textContent = it.title;
      $('i', el).textContent = it.ref || '';
      $('span', el).textContent = it.sub;
      el._item = it;
      box.appendChild(el);
      return el;
    });
    // judul "Berfirmanlah Allah" + caption Ibrani, dan tombol "?" — tampil selama terompet tumbuh,
    // hilang sebelum kamera menukik ke Bumi
    const L = this.layers[8];
    const head = $('.s8-head', L), info = $('.info-btn', L);
    const tl = gsap.timeline({ paused: true });
    tl.fromTo($('.s8-title', L), { opacity: 0, y: 18, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.07, ease: 'power2.out' }, 0.05)
      .fromTo($('.s8-cap', L), { opacity: 0, y: 10, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.07, ease: 'power2.out' }, 0.1)
      .fromTo(info, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.1)
      .to(head, { opacity: 0, y: -24, filter: 'blur(8px)', duration: 0.06, ease: 'power2.in' }, 0.76)
      .to(info, { autoAlpha: 0, duration: 0.05 }, 0.76)
      .set({}, {}, 1);
    this.tls[8] = tl;
  }

  /* STORY 9–10: label kelompok, label kitab, legend, navigasi tema, daftar referensi */
  buildStory9and10() {
    const gbox = $('.group-labels', this.layers[11]);
    this.groupLabels = BOOK_GROUPS.map((g) => {
      const el = document.createElement('div');
      el.className = 'gl'; el.textContent = g.name;
      gbox.appendChild(el);
      return el;
    });
    const L = this.layers[11];
    const leg = $('.legend ul', L);
    BOOK_GROUPS.forEach((g) => {
      const li = document.createElement('li');
      li.innerHTML = `<i></i><span></span>`;
      $('i', li).style.background = g.color;
      $('span', li).textContent = g.name;
      leg.appendChild(li);
    });
    const list = $('.theme-list', L);
    this.themeButtons = THEMES.filter((th) => !th.hidden).map((th, i) => {
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
    // diagram baru selesai berputar ke vertikal di ±40% story ini (lihat a7-bumi legacy())
    tl.fromTo(this.themeButtons, { opacity: 0, x: 34 }, { opacity: 1, x: 0, stagger: 0.025, duration: 0.07, ease: 'power3.out' }, 0.38)
      .fromTo($('.legend', L), { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.08 }, 0.4)
      .fromTo([this.refList, $('.drag-hint', L)], { opacity: 0 }, { opacity: 1, duration: 0.06, stagger: 0.03 }, 0.44)
      .set({}, {}, 1);
    this.tls[11] = tl;

    // Taman Eden: judul tampil di awal, hilang sebelum kamera menukik ke Bumi
    const E = this.layers[9];
    const te = gsap.timeline({ paused: true });
    te.fromTo($('.eden-title', E), { opacity: 0, y: 16, letterSpacing: '0.12em', filter: 'blur(10px)' }, { opacity: 1, y: 0, letterSpacing: '0.02em', filter: 'blur(0px)', duration: 0.12, ease: 'power3.out' }, 0.06)
      .to($('.eden-head', E), { opacity: 0, y: -20, filter: 'blur(8px)', duration: 0.08, ease: 'power2.in' }, 0.5)
      .set({}, {}, 1);
    this.tls[9] = te;

    // Manusia: kalimat pembuka → ayat Kejadian 1:27 → referensi; hilang sebelum gambar memudar
    const M = this.layers[10];
    const tm = gsap.timeline({ paused: true });
    tm.fromTo($('.mn-lead', M), { opacity: 0, y: 12, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.07 }, 0.06)
      .fromTo($('.mn-verse', M), { opacity: 0, y: 14, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.09 }, 0.14)
      .fromTo($('.mn-ref', M), { opacity: 0 }, { opacity: 1, duration: 0.05 }, 0.22)
      .to($('.mn-text', M), { opacity: 0, y: 16, filter: 'blur(6px)', duration: 0.07, ease: 'power2.in' }, 0.8)
      .set({}, {}, 1);
    this.tls[10] = tm;

    // KRISTUS: judul + daftar ayat muncul setelah diagram kembali horizontal (salib digerakkan act Bumi)
    const K = this.layers[12];
    const tk = gsap.timeline({ paused: true });
    tk.fromTo($('.kr-panel', K), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.04 }, 0.2)
      .fromTo($('.kr-title', K), { opacity: 0, y: 18, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.08, ease: 'power3.out' }, 0.22)
      .fromTo($('.kr-sub', K), { opacity: 0 }, { opacity: 1, duration: 0.06 }, 0.27)
      .fromTo($('.kr-grid', K), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.08 }, 0.3)
      .set({}, {}, 1);
    this.tls[12] = tk;
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
    if (th.hidden) { this.fillKristus(th, arcs); return; }
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

  /* Section KRISTUS: daftar semua ayat yang terhubung, dikelompokkan Kristofani / Inkarnasi */
  fillKristus(th, arcs) {
    const box = $('.kr-grid', this.layers[12]);
    if (!box || box.dataset.filled) return;
    box.dataset.filled = '1';
    const cats = [
      ['kristofani', 'Kristofani', 'Sang Firman menampakkan diri sebelum menjadi manusia'],
      ['inkarnasi', 'Inkarnasi', 'Sang Firman menjadi manusia di dalam Yesus Kristus'],
    ];
    let n = 0;
    cats.forEach(([id, name, desc]) => {
      const sec = document.createElement('section');
      sec.className = 'kr-cat';
      sec.innerHTML = `<h3><span></span><small></small></h3><ol></ol>`;
      $('h3 span', sec).textContent = name;
      $('h3 small', sec).textContent = desc;
      const ol = $('ol', sec);
      th.items.filter((it) => it.ref.cat === id).forEach((it) => {
        const li = document.createElement('li');
        li.innerHTML = `<p class="r"><span class="a"></span><span class="arrow">⟶</span><span class="b"></span></p><p class="t"></p>`;
        $('.a', li).textContent = it.ref.from;
        $('.b', li).textContent = it.ref.to;
        $('.t', li).textContent = it.ref.text;
        li.addEventListener('pointerenter', () => arcs.setHoverItem(it));
        li.addEventListener('pointerleave', () => arcs.setHoverItem(null));
        ol.appendChild(li);
        setTimeout(() => li.classList.add('in'), 60 + n++ * 35);
      });
      box.appendChild(sec);
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
