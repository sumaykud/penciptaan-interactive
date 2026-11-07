import * as THREE from 'three';
import { Act, V } from './act.js';
import { points, SHARED } from '../core/materials.js';
import { ArcDiagram } from '../core/arcs.js';
import { buildHumanGeometry, humanMeshes } from '../core/human.js';
import { SEJARAH_CARDS } from '../data.js';
import { smooth, lerp, rng, range, easeInOut, bell } from '../core/util.js';

/* STORY 9 · Bumi — planet dengan cahaya matahari dramatis dari atas; scroll memunculkan
               grafik timeline interconnected di bawahnya (P 0..1).
   STORY 10 · Diagram busur berputar 3D menjadi vertikal; tema Penciptaan / Keselamatan /
               Eklesia / Penghakiman, pulse line, hover ayat (P 1..2). */

const EARTH_VS = /* glsl */ `
varying vec2 vUv; varying vec3 vNw; varying vec3 vPw;
void main(){
  vUv = uv;
  vNw = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vPw = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;
const EARTH_FS = /* glsl */ `
uniform sampler2D uDay, uNight, uClouds, uSpec;
uniform vec3 uSun; uniform float uCloudShift, uOpacity, uReady;
varying vec2 vUv; varying vec3 vNw; varying vec3 vPw;
void main(){
  vec3 N = normalize(vNw);
  vec3 Vd = normalize(cameraPosition - vPw);
  vec3 L = normalize(uSun);
  float ndl = dot(N, L);
  vec3 day = texture2D(uDay, vUv).rgb;
  vec3 night = texture2D(uNight, vUv).rgb;
  float cl = texture2D(uClouds, vUv + vec2(uCloudShift, 0.0)).r;
  float clSh = texture2D(uClouds, vUv + vec2(uCloudShift - 0.0025, 0.0015)).r;
  float spec = texture2D(uSpec, vUv).r;
  float lit = max(ndl, 0.0);
  vec3 col = day * (1.0 - clSh * 0.45) * lit * 1.15;
  col = mix(col, vec3(1.0, 0.98, 0.96) * pow(lit, 0.9) * 0.95, cl * 0.9);
  vec3 H = normalize(L + Vd);
  col += vec3(1.0, 0.88, 0.7) * pow(max(dot(N, H), 0.0), 220.0) * spec * (1.0 - cl) * 0.35 * step(0.0, ndl);
  float nightMask = 1.0 - smoothstep(-0.25, 0.08, ndl);
  col += max(night - 0.06, 0.0) * vec3(1.0, 0.72, 0.42) * nightMask * 1.8 * (1.0 - cl * 0.8);
  float fr = pow(1.0 - max(dot(N, Vd), 0.0), 3.0);
  col += vec3(0.32, 0.58, 1.0) * fr * smoothstep(-0.35, 0.5, ndl) * 0.7;
  gl_FragColor = vec4(col * uOpacity * uReady, 1.0);
}`;
const ATM_VS = /* glsl */ `
varying vec3 vPw;
void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vPw = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`;
const ATM_FS = /* glsl */ `
uniform vec3 uCenter, uSun; uniform float uR, uShell, uOpacity;
varying vec3 vPw;
void main(){
  vec3 ro = cameraPosition; vec3 rd = normalize(vPw - cameraPosition);
  float tca = dot(uCenter - ro, rd);
  vec3 pc = ro + rd * tca;
  float b = length(pc - uCenter);
  float h = (b - uR) / (uShell - uR);
  if (h < 0.0) discard;
  float g = exp(-h * 5.0) * (1.0 - smoothstep(0.75, 1.0, h));
  vec3 side = normalize(pc - uCenter);
  float sun = smoothstep(-0.35, 0.65, dot(side, normalize(uSun)));
  vec3 col = mix(vec3(0.25, 0.5, 1.0), vec3(0.6, 0.82, 1.0), sun);
  gl_FragColor = vec4(col * g * (0.06 + 0.7 * sun) * uOpacity, 1.0);
}`;

const R_EARTH = 2.0;
// rotasi 180° di sumbu (1,-1,0): horizontal (Kejadian kiri, busur ke atas) → vertikal (Kejadian atas, busur ke kiri)
const FLIP = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, -1, 0).normalize(), Math.PI);
const ID = new THREE.Quaternion();
const YAW = new THREE.Quaternion();
const UPY = new THREE.Vector3(0, 1, 0);

export class ActBumi extends Act {
  constructor(ctx) {
    super(ctx, { start: 9, end: 13 });
    this.crossEl = document.querySelector('#L13 .kr-cross');
    // DOM Taman Eden + Kristofani (overlay di atas canvas, di bawah teks)
    const ed = document.getElementById('eden');
    this.eden = ed && {
      root: ed, bg: ed.querySelector('.eden-bg'), kf: ed.querySelector('.eden-kf'), white: ed.querySelector('.eden-white'),
      christ: ed.querySelector('.kf-christ'), spark: ed.querySelector('.kf-spark'), adam: ed.querySelector('.kf-adam'),
    };
    const r = rng(8);

    // bintang latar
    this.stars = points(ctx.mobile ? 900 : 1800, () => {
      const u = r() * 2 - 1, th = r() * Math.PI * 2, s = Math.sqrt(1 - u * u), d = 60 + r() * 40;
      const t = r();
      return { p: [s * Math.cos(th) * d, u * d, s * Math.sin(th) * d - 20], c: t < 0.7 ? [0.85, 0.9, 1] : [1, 0.9, 0.8], s: 0.08 + Math.pow(r(), 4) * 0.35, a: 0.3 + r() * 0.6 };
    }, { twinkle: 0.4 });
    this.group.add(this.stars);

    // bumi
    this.sun = new THREE.Vector3(0.35, 1.0, 0.25).normalize();
    this.earthGroup = new THREE.Group();
    this.group.add(this.earthGroup);
    this.earthTilt = new THREE.Group();
    this.earthTilt.rotation.z = 0.41;
    this.earthGroup.add(this.earthTilt);
    this.earthMat = new THREE.ShaderMaterial({
      uniforms: {
        uDay: { value: null }, uNight: { value: null }, uClouds: { value: null }, uSpec: { value: null },
        uSun: { value: this.sun }, uCloudShift: { value: 0 }, uOpacity: { value: 1 }, uReady: { value: 0 },
      },
      vertexShader: EARTH_VS, fragmentShader: EARTH_FS,
    });
    this.earth = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH, 128, 96), this.earthMat);
    this.earthTilt.add(this.earth);
    this.atmMat = new THREE.ShaderMaterial({
      uniforms: { uCenter: { value: new THREE.Vector3() }, uSun: { value: this.sun }, uR: { value: R_EARTH }, uShell: { value: R_EARTH * 1.16 }, uOpacity: { value: 1 } },
      vertexShader: ATM_VS, fragmentShader: ATM_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide,
    });
    this.atm = new THREE.Mesh(new THREE.SphereGeometry(R_EARTH * 1.16, 96, 64), this.atmMat);
    this.earthGroup.add(this.atm);
    this.loadTextures();

    // diagram busur
    this.arcs = new ArcDiagram(ctx);
    this.group.add(this.arcs.root);
    this.dragYaw = 0; this.dragTarget = 0;
    this.theme = -1;
    this.tmp = V();
    this.labelEls = []; this.groupEls = [];
  }

  loadTextures() {
    const L = new THREE.TextureLoader();
    const u = this.earthMat.uniforms;
    const load = (url, key, srgb) => new Promise((res) => L.load(url, (t) => {
      if (srgb) t.colorSpace = THREE.SRGBColorSpace;
      t.wrapS = THREE.RepeatWrapping;
      t.anisotropy = 4;
      u[key].value = t; res();
    }, undefined, () => res()));
    Promise.all([
      load('assets/earth/day.jpg', 'uDay', true), load('assets/earth/night.jpg', 'uNight', true),
      load('assets/earth/clouds.jpg', 'uClouds', false), load('assets/earth/spec.jpg', 'uSpec', false),
    ]).then(() => { if (u.uDay.value && u.uClouds.value && u.uNight.value && u.uSpec.value) window.gsap.to(u.uReady, { value: 1, duration: 1.2 }); });
  }

  bindDom({ labels, groups, leaders, onTheme }) {
    this.labelEls = labels; this.groupEls = groups; this.leaders = leaders; this.onTheme = onTheme;
  }

  layout2() {
    const W = this.ctx.size.w, H = this.ctx.size.h;
    const portrait = W / H < 0.9;
    return portrait
      ? { pos: V(0.55, 0.95, 0), scale: 0.78, cam: V(0.0, -0.55, 12.4), look: V(0.0, -0.55, 0) }
      : { pos: V(0.9, 0, 0), scale: 1, cam: V(1.85, 0, 10.8), look: V(1.85, 0, 0) };
  }

  /* Act ini hidup di 3 story (P mentah 0..3):
       0..1  Taman Eden   — bumi (sedikit lebih jauh), lalu kamera menukik & gambar Eden terbuka
       1..2  Manusia      — Eden + Kristofani (DOM), kamera tetap dekat bumi; di akhir gambar memudar
       2..3  Keterhubungan — kamera mundur dari bumi, lalu logika lama diagram busur
     legacy(P) memetakan tahap 3 ke progress lama (0.38..2) supaya kode diagram tidak berubah. */
  legacy(P) {
    if (P < 2) return 0.2;
    if (P >= 3) return 2; // section KRISTUS: diagram dalam keadaan akhir, lalu ditata ulang (kristus())
    const u = P - 2;
    return u < 0.4 ? lerp(0.38, 1.24, u / 0.4) : 1.24 + ((u - 0.4) / 0.6) * 0.76;
  }

  syncEden(P, w) {
    const E = this.eden;
    if (!E) return;
    const open = smooth(0.8, 0.97, P) * (1 - smooth(1.84, 1.98, P));   // gambar Eden tampil
    const vis = w > 0.001 && open > 0.001;
    E.root.style.visibility = vis ? 'visible' : 'hidden';
    if (!vis) return;
    E.root.style.opacity = open.toFixed(3);
    // "zoom ke dalam bumi": gambar masuk dari skala besar & kabur → tajam, lalu Ken Burns pelan
    const zin = 1 - smooth(0.8, 1.0, P);
    const kb = smooth(1.0, 2.0, P);
    E.root.style.setProperty('--eden-scale', (1 + 0.35 * zin + 0.06 * kb).toFixed(4));
    E.root.style.setProperty('--eden-blur', `${(14 * zin).toFixed(2)}px`);
    // kilat putih lembut saat menembus atmosfer & saat kembali ke bumi
    E.white.style.opacity = (0.75 * bell(0.86, 1.02, P) + 0.6 * bell(1.86, 2.0, P)).toFixed(3);
    // Kristofani: cahaya Kristus muncul → cahaya mengalir ke manusia → manusia terbentuk → gambar penuh
    const r1 = 11.5 * easeInOut(range(1.22, 1.42, P));          // area Kristus
    const sp = range(1.42, 1.56, P);                            // cahaya mengalir
    const r2 = 9.5 * easeInOut(range(1.54, 1.68, P));           // area manusia
    const rAll = 130 * easeInOut(range(1.66, 1.8, P));         // seluruh gambar
    E.kf.style.setProperty('--r1', r1.toFixed(2));
    E.kf.style.setProperty('--r2', r2.toFixed(2));
    E.kf.style.setProperty('--ra', rAll.toFixed(2));
    E.christ.style.opacity = (smooth(1.16, 1.3, P) * (1 - 0.55 * smooth(1.5, 1.7, P)) * (1 - smooth(1.84, 1.95, P))).toFixed(3);
    E.christ.style.setProperty('--s', (0.6 + 0.5 * smooth(1.16, 1.4, P)).toFixed(3));
    E.spark.style.opacity = (sp > 0 && sp < 1 ? Math.sin(sp * Math.PI) : 0).toFixed(3);
    E.spark.style.setProperty('--t', sp.toFixed(3));
    E.adam.style.opacity = (bell(1.52, 1.74, P) * 1.0).toFixed(3);
  }

  /* Story 12 "Sejarah Manusia" disisipkan setelah Manusia (P mentah 2..3): kamera mundur dari Bumi
     tanpa diagram. Semua logika lama memakai P mentah lama, jadi P baru dipetakan:
       <2 → sama | 2..3 → 2 (kamera mundur lewat `back`) | ≥3 → P-1 (Keterhubungan, Kristus). */
  mapP(r) {
    if (r < 2) return { r, back: null };
    if (r < 3) return { r: 2, back: easeInOut(range(2.0, 2.22, r)) };
    return { r: r - 1, back: 1 };
  }

  update(rawP, w, t) {
    const m = this.mapP(rawP);
    this.updateOld(m.r, w, t);
    this.syncSejarah(rawP, w, t);
  }

  /* ---------- STORY 12 · Sejarah Manusia (P mentah 2..3, s = 0..1)
     0.00–0.22 kamera mundur dari Bumi · 0.24–0.40 Bumi bergeser ke kanan & figur Logoi muncul di kiri
     0.30–0.52 figur "terbentuk" (dissolve) · 0.44–0.90 cahaya mengalir dari Logoi ke Bumi
     0.42–0.92 timeline + kartu Kristofani (cover-flow mengikuti scroll) · 0.88–0.98 kembali ke tengah */
  buildSejarah() {
    if (this.sj) return;
    const geo = buildHumanGeometry(this.ctx.mobile ? 64 : 84, 'stand');
    const { pre, glowMesh, mat } = humanMeshes(geo);
    const g = new THREE.Group();
    g.add(pre, glowMesh);
    this.group.add(g);
    // cahaya mengalir dari Logoi (ide Allah) ke ciptaan (Bumi)
    const r = rng(31), N = this.ctx.mobile ? 80 : 160;
    const seeds = [];
    const flow = points(N, (i) => { seeds.push({ o: r(), sp: 0.05 + r() * 0.07, j: (r() - 0.5) * 0.6, s: 0.012 + r() * 0.03 }); return { p: [0, 0, 0], c: [1, 0.92, 0.75], s: seeds[i].s, a: 0.85 }; }, { soft: 0.9, twinkle: 0.25 });
    this.group.add(flow);
    // DOM
    const L = document.getElementById('L11');
    const cardsBox = L.querySelector('.sm-cards'), ruler = L.querySelector('.sm-ruler');
    const cards = SEJARAH_CARDS.map((c) => {
      const el = document.createElement('div');
      el.className = 'sm-card';
      if (c.img) { const im = new Image(); im.src = c.img; im.alt = c.title; im.loading = 'lazy'; el.appendChild(im); }
      else el.innerHTML = '<div class="ph"><b></b><span></span></div>';
      if (!c.img) { el.querySelector('b').textContent = c.ref; el.querySelector('span').textContent = c.title; }
      cardsBox.appendChild(el);
      return el;
    });
    // penggaris: satu garis besar per kartu, 5 garis kecil di antaranya
    const n = SEJARAH_CARDS.length;
    let html = '';
    for (let i = 0; i < n; i++) {
      const x0 = (i / (n - 1)) * 100;
      html += `<i class="mj" style="left:${x0.toFixed(3)}%"></i>`;
      if (i < n - 1) for (let k = 1; k < 6; k++) html += `<i style="left:${(x0 + (k / 6) * (100 / (n - 1))).toFixed(3)}%"></i>`;
    }
    // Alpha & Omega di kedua ujung penggaris (Why 22:13 — "Akulah Alfa dan Omega, Yang Pertama dan Yang Terkemudian")
    ruler.innerHTML = html + '<b></b><span class="sm-ao a" title="Alfa">Α</span><span class="sm-ao o" title="Omega">Ω</span>';
    this.sj = {
      g, mat, pre, glowMesh, flow, seeds, cards, L, marker: ruler.querySelector('b'),
      tl: L.querySelector('.sm-tl'), logoi: L.querySelector('.sm-logoi'),
      alpha: ruler.querySelector('.sm-ao.a'), omega: ruler.querySelector('.sm-ao.o'), cardsBox, rulerEl: ruler,
      ref: L.querySelector('.sm-tl-ref'), title: L.querySelector('.sm-tl-title'), last: -1, pinned: -1,
    };
    this.bindSejarahViewer();
  }

  /* Gambar kartu dibuka besar:
     - desktop (hover + kursor): hover → pratinjau besar di tengah layar; klik → dikunci / dilepas
     - layar sentuh / mobile: tap → layar penuh beserta ayat & judul */
  bindSejarahViewer() {
    const S = this.sj;
    const desktop = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches && window.innerWidth > 760;
    // pratinjau desktop
    const pv = document.createElement('figure');
    pv.className = 'sm-preview';
    pv.innerHTML = '<img alt=""><figcaption><b></b><span></span></figcaption>';
    S.L.appendChild(pv);
    // layar penuh mobile
    const full = document.createElement('div');
    full.className = 'sm-full';
    full.setAttribute('role', 'dialog');
    full.setAttribute('aria-modal', 'true');
    full.innerHTML = '<button class="sm-full-x" type="button" aria-label="Tutup">×</button><img alt=""><div class="sm-full-cap"><p class="r"></p><p class="t"></p></div>';
    document.body.appendChild(full);
    const fill = (root, i, refSel, titleSel) => {
      const c = SEJARAH_CARDS[i];
      const im = root.querySelector('img');
      if (c.img) { im.src = c.img; im.alt = c.title; im.style.display = ''; } else im.style.display = 'none';
      root.querySelector(refSel).textContent = c.ref;
      root.querySelector(titleSel).textContent = c.title;
    };
    S.preview = pv;
    S.showPreview = (i) => { fill(pv, i, 'b', 'span'); pv.classList.add('on'); };
    S.hidePreview = () => { pv.classList.remove('on'); S.pinned = -1; S.cards.forEach((c) => c.classList.remove('pin')); };
    const openFull = (i) => {
      fill(full, i, '.r', '.t');
      full.classList.add('on');
      this.ctx.setScrollLock?.(true);
    };
    const closeFull = () => { full.classList.remove('on'); this.ctx.setScrollLock?.(false); };
    full.addEventListener('click', closeFull);
    window.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (full.classList.contains('on')) closeFull();
      else if (S.pinned >= 0) S.hidePreview();
    });
    S.cards.forEach((el, i) => {
      el.classList.add('interactive');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `${SEJARAH_CARDS[i].ref} — ${SEJARAH_CARDS[i].title}`);
      el.addEventListener('pointerenter', () => { if (desktop() && S.pinned < 0) S.showPreview(i); });
      el.addEventListener('pointerleave', () => { if (desktop() && S.pinned < 0) pv.classList.remove('on'); });
      el.addEventListener('click', () => {
        if (!desktop()) { openFull(i); return; }
        const same = S.pinned === i;
        S.cards.forEach((c) => c.classList.remove('pin'));
        if (same) { S.pinned = -1; pv.classList.remove('on'); return; }
        S.pinned = i;
        el.classList.add('pin');
        S.showPreview(i);
      });
    });
  }

  syncSejarah(rawP, w, t) {
    const s = rawP - 2;
    const near = s > -0.6 && s < 1.05;
    if (near && !this.sj) this.buildSejarah();
    const S = this.sj;
    if (!S) return;
    const ss = Math.max(0, Math.min(1, s));
    const out = easeInOut(range(0.88, 0.98, ss));
    const sh = easeInOut(range(0.24, 0.4, ss)) * (1 - easeInOut(range(0.58, 0.68, ss))) * (1 - out) * (s >= 0 && s <= 1 ? 1 : 0);
    const wide = easeInOut(range(0.6, 0.7, ss)); // timeline melebar penuh setelah figur memudar
    const portrait = this.ctx.size.w / this.ctx.size.h < 0.9;
    // Bumi bergeser ke kanan & mengecil (tetap kembali ke tengah sebelum Keterhubungan)
    if (sh > 0) {
      const ex = portrait ? 0.9 : 2.7, ey = portrait ? 1.7 : 0.75, es = portrait ? 0.5 : 0.6;
      this.earthGroup.position.set(ex * sh, ey * sh, 0);
      const sc = lerp(1, es, sh);
      this.earthGroup.scale.setScalar(sc);
      // atmosfer dihitung di shader dalam satuan dunia → jari-jarinya ikut diskalakan (tetap tersembunyi di belakang Bumi)
      this.atmMat.uniforms.uR.value = R_EARTH * sc;
      this.atmMat.uniforms.uShell.value = R_EARTH * 1.16 * sc;
      this.atmMat.uniforms.uCenter.value.copy(this.earthGroup.position);
    } else if (this.earthGroup.scale.x !== 1) {
      this.earthGroup.scale.setScalar(1);
      this.atmMat.uniforms.uR.value = R_EARTH;
      this.atmMat.uniforms.uShell.value = R_EARTH * 1.16;
    }
    // Bumi berputar lebih cepat selama timeline di-scroll: tepat satu putaran penuh,
    // jadi orientasinya sama persis saat masuk ke Keterhubungan Firman (tanpa lompatan)
    if (s > 0 && s < 1.05) this.earth.rotation.y += Math.PI * 2 * easeInOut(range(0.44, 0.92, ss));
    // figur Logoi di kiri
    const hv = w * sh;
    const hx = portrait ? -0.05 : -3.05, hy = portrait ? -0.95 : -0.8, hsc = portrait ? 1.0 : 1.1;
    S.g.position.set(hx, hy, 0.6);
    S.g.scale.setScalar(hsc);
    S.g.rotation.y = Math.sin(t * 0.3) * 0.12;
    // muncul & menghilang dengan dissolve (bukan sekadar memudar → tidak jadi siluet gelap)
    S.mat.uniforms.uReveal.value = range(0.3, 0.52, ss) * (1 - range(0.54, 0.64, ss));
    S.mat.uniforms.uOpacity.value = w * smooth(0.24, 0.32, ss) * (ss < 0.66 ? 1 : 0) * (s >= 0 && s <= 1 ? 1 : 0);
    S.mat.uniforms.uIntensity.value = 1.35 + 0.12 * Math.sin(t * 1.4);
    S.g.visible = S.mat.uniforms.uOpacity.value > 0.002 && S.mat.uniforms.uReveal.value > 0.001;
    S.pre.visible = S.mat.uniforms.uReveal.value > 0.15; // penutup kedalaman hanya saat tubuh sudah cukup terbentuk
    // cahaya mengalir Logoi → Bumi
    const fv = w * sh * smooth(0.4, 0.48, ss);
    S.flow.visible = fv > 0.002;
    if (S.flow.visible) {
      const pos = S.flow.geometry.attributes.position.array;
      const a = new THREE.Vector3(hx, hy + 0.55 * hsc, 0.6), b = this.earthGroup.position.clone();
      const ctrl = a.clone().lerp(b, 0.5).add(V(0, 1.4, 0.4));
      S.seeds.forEach((sd, i) => {
        const u = (sd.o + t * sd.sp) % 1;
        const p = a.clone().multiplyScalar((1 - u) * (1 - u)).add(ctrl.clone().multiplyScalar(2 * u * (1 - u))).add(b.clone().multiplyScalar(u * u));
        p.y += Math.sin(u * Math.PI) * sd.j; p.z += Math.cos(u * 7 + sd.o * 6) * 0.08;
        pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z;
      });
      S.flow.geometry.attributes.position.needsUpdate = true;
      S.flow.material.uniforms.uOpacity.value = fv;
    }
    // DOM: keterangan Logoi
    const lv = w * sh * smooth(0.34, 0.42, ss);
    S.logoi.style.opacity = lv.toFixed(3);
    S.logoi.style.visibility = lv > 0.01 ? 'visible' : 'hidden';
    // DOM: timeline + kartu cover-flow
    const tv = w * smooth(0.42, 0.5, ss) * (1 - smooth(0.86, 0.92, ss)) * (s >= 0 && s <= 1 ? 1 : 0);
    S.tl.style.opacity = tv.toFixed(3);
    S.tl.style.setProperty('--tl-left', portrait ? '0' : (38 * (1 - wide)).toFixed(2) + '%');
    S.tl.style.visibility = tv > 0.01 ? 'visible' : 'hidden';
    if (tv <= 0.01 && S.preview?.classList.contains('on')) S.hidePreview();
    if (tv > 0.01) {
      const n = S.cards.length;
      const act = range(0.48, 0.84, ss) * (n - 1); // kartu terakhir sempat diam sebelum timeline memudar
      const gap = portrait ? 26 : 46, first = portrait ? 104 : 172;
      // posisi dasar = titik penanda di penggaris → kartu pertama di Alfa, kartu terakhir terbuka di Omega
      const pr0 = act / (n - 1);
      const boxW = S.cardsBox.clientWidth, cw = S.cards[0].offsetWidth || 150;
      const rl = S.rulerEl.offsetLeft, rw = S.rulerEl.offsetWidth;
      const base = Math.max(0, Math.min(boxW - cw, rl + rw * pr0 - cw / 2));
      S.cardsBox.style.perspectiveOrigin = `${(base + cw / 2).toFixed(0)}px 50%`; // perspektif berpusat di kartu aktif
      S.cards.forEach((el, i) => {
        const off = i - act, ao = Math.abs(off), sg = Math.sign(off);
        const x = base + (ao < 1 ? off * first : sg * (first + (ao - 1) * gap));
        const rot = -sg * Math.min(1, ao) * 62;
        const z = -Math.min(1, ao) * 120;
        const o = Math.max(0, 1 - Math.max(0, ao - (off < 0 ? 9 : 14)) * 0.4) * (x < -cw || x > boxW ? 0 : 1);
        el.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${rot.toFixed(2)}deg)`;
        el.style.opacity = o.toFixed(3);
        el.style.zIndex = String(100 - Math.round(ao * 2));
      });
      const k = Math.min(n - 1, Math.round(act));
      if (k !== S.last) {
        S.last = k;
        S.ref.textContent = SEJARAH_CARDS[k].ref;
        S.ref.classList.toggle('long', SEJARAH_CARDS[k].ref.length > 34);
        S.title.textContent = SEJARAH_CARDS[k].title;
      }
      S.marker.style.left = `${((act / (n - 1)) * 100).toFixed(3)}%`;
      // Alfa menyala di awal timeline, Omega makin terang saat mendekati akhir
      const pr = act / (n - 1);
      S.alpha.style.setProperty('--k', (1 - range(0, 0.3, pr) * 0.7).toFixed(3));
      S.omega.style.setProperty('--k', (0.3 + 0.7 * range(0.6, 1, pr)).toFixed(3));
    }
  }

  pose(rawP) { const m = this.mapP(rawP); return this.poseOld(m.r, m.back); }
  post(rawP) { return this.postOld(this.mapP(rawP).r); }

  updateOld(rawP, w, t) {
    this.syncEden(rawP, w);
    this.rawP = rawP;
    const P = this.legacy(rawP);
    const q = easeInOut(range(0.88, 1.24, P)); // transisi story 9 → 10
    // ---- bumi
    const e = this.earthMat.uniforms;
    e.uCloudShift.value = t * 0.0015;
    this.earth.rotation.y = t * 0.02 + rawP * 0.6;
    this.earthGroup.position.set(0, 7.5 * q * q, -2 * q);
    const earthVis = w * (1 - smooth(0.2, 0.85, q));
    e.uOpacity.value = earthVis;
    this.atmMat.uniforms.uOpacity.value = earthVis;
    this.atmMat.uniforms.uCenter.value.copy(this.earthGroup.position);
    this.earthGroup.visible = earthVis > 0.002;
    this.stars.material.uniforms.uOpacity.value = w * (1 - 0.5 * q);

    // ---- diagram
    const L2 = this.layout2();
    const pos1 = V(0, -3.0, 1.4), s1 = 0.36;
    const root = this.arcs.root;
    root.position.copy(pos1).lerp(L2.pos, q);
    root.scale.setScalar(lerp(s1, L2.scale, q));
    const s10 = range(1.24, 2.0, P);
    if (this.dragging) this.dragTarget = Math.max(-1.1, Math.min(1.1, this.dragTarget));
    else this.dragTarget *= 0.985;
    this.dragYaw += (this.dragTarget - this.dragYaw) * 0.08;
    const sway = (Math.sin(t * 0.22) * 0.22 + this.dragYaw) * smooth(1.15, 1.35, P);
    YAW.setFromAxisAngle(UPY, sway);
    root.quaternion.copy(ID).slerp(FLIP, q).premultiply(YAW);
    // KRISTUS: diagram kembali horizontal di bagian atas layar, fokus ke salib di kitab Injil
    const kr = this.kristusK(rawP);
    if (kr > 0) {
      const L3 = this.layout3();
      root.position.lerp(L3.pos, kr);
      root.scale.setScalar(lerp(root.scale.x, L3.scale, kr));
      root.quaternion.slerp(ID, kr);
    }
    const lm = this.arcs.lineMat.uniforms;
    lm.uDraw.value = smooth(0.4, 0.82, P) * 1.6;
    lm.uRainbow.value = 1 - smooth(0.95, 1.2, P);
    lm.uFan.value = smooth(1.08, 1.32, P);
    lm.uBase.value = lerp(0.07, 0.03, q) * Math.min(1, Math.sqrt(this.ctx.size.w / 1280) * 1.05) * (1 - 0.55 * kr);
    const arcsOn = rawP >= 2 ? 1 : 0;
    this.arcs.opacity = w * smooth(0.38, 0.5, P) * arcsOn;
    this.arcs.root.visible = w * smooth(0.38, 0.5, P) * arcsOn > 0.002;

    // tema mengikuti scroll di story 10
    if (P > 1.18 && rawP < 3) {
      const th = Math.min(3, Math.floor(range(0.1, 0.92, s10) * 4));
      if (th !== this.theme) { this.theme = th; this.arcs.setTheme(th); this.onTheme && this.onTheme(th); }
    }
    this.interactive = w > 0.6 && rawP >= 2 && P > 1.22;
    if (rawP >= 3) {
      if (rawP > 3.12 && this.theme !== 4) { this.theme = 4; this.arcs.setTheme(4); this.onTheme && this.onTheme(4); }
      this.interactive = w > 0.6 && kr > 0.95;
      this.hideLabels();
    } else {
      this.syncLabels(P, w, q);
    }
    this.syncCross(rawP, w, kr);
  }

  kristusK(rawP) { return easeInOut(range(3.0, 3.28, rawP)); }

  // tata letak section KRISTUS: diagram horizontal di atas, ruang daftar ayat di bawah
  layout3() {
    const portrait = this.ctx.size.w / this.ctx.size.h < 0.9;
    return portrait
      ? { pos: V(0, 1.6, 0), scale: 0.5, cam: V(0, 0.4, 11.5), look: V(0, 0.4, 0) }
      : { pos: V(0, 0.95, 0), scale: 0.88, cam: V(0, 0.2, 8.4), look: V(0, 0.2, 0) };
  }

  hideLabels() {
    if (this.labelsShown) { this.labelEls.forEach((el) => el.classList.remove('on')); this.leaders.setAttribute('d', ''); this.labelsShown = false; }
    this.groupEls.forEach((el) => el.classList.remove('on'));
  }

  // salib di atas kelompok kitab Injil, mengikuti proyeksi 3D sumbu
  syncCross(rawP, w, kr) {
    const el = this.crossEl;
    if (!el) return;
    const on = w * smooth(3.18, 3.34, rawP);
    el.style.opacity = on.toFixed(3);
    if (on < 0.002) return;
    const injil = this.arcs.layout.groups.find((g) => g.id === 'injil') || this.arcs.layout.groups[5];
    const x0 = injil.xc ?? (injil.x0 + injil.x1) / 2;
    this.arcs.inner.updateMatrixWorld();
    this.tmp.set(x0, 0, 0.02).applyMatrix4(this.arcs.inner.matrixWorld).project(this.ctx.camera);
    const sx = (this.tmp.x * 0.5 + 0.5) * this.ctx.size.w, sy = (-this.tmp.y * 0.5 + 0.5) * this.ctx.size.h;
    const pulse = 1 + 0.04 * Math.sin(performance.now() * 0.0025);
    el.style.transform = `translate3d(${sx.toFixed(1)}px, ${sy.toFixed(1)}px, 0) translate(-50%, -100%) scale(${(lerp(0.6, 1, smooth(3.18, 3.4, rawP)) * pulse).toFixed(3)})`;
  }

  // label kitab: kolom rata di kanan sumbu + garis penunjuk ke posisi sebenarnya
  syncLabels(P, w, q) {
    const cam = this.ctx.camera, W = this.ctx.size.w, H = this.ctx.size.h;
    const inner = this.arcs.inner;
    inner.updateMatrixWorld();
    const mw = inner.matrixWorld;
    const proj = (x, y = 0) => { this.tmp.set(x, y, 0).applyMatrix4(mw).project(cam); return [(this.tmp.x * 0.5 + 0.5) * W, (-this.tmp.y * 0.5 + 0.5) * H]; };

    // label kelompok (story 9, horizontal, teks vertikal di bawah sumbu)
    const showGroups = w > 0.5 && P > 0.6 && q < 0.15;
    this.arcs.layout.groups.forEach((g, i) => {
      const el = this.groupEls[i]; if (!el) return;
      const [x, y] = proj(g.xc, -0.12);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) rotate(90deg)`;
      el.classList.toggle('on', showGroups);
    });

    // label kitab (story 10)
    const show = w > 0.6 && q > 0.97;
    const books = this.arcs.layout.books;
    if (!show) {
      if (this.labelsShown) { this.labelEls.forEach((el) => el.classList.remove('on')); this.leaders.setAttribute('d', ''); this.labelsShown = false; }
      return;
    }
    this.labelsShown = true;
    const [ax0, ay0] = proj(books[0].x0, -0.06);
    const [ax1, ay1] = proj(books[books.length - 1].x1, -0.06);
    const span = Math.abs(ay1 - ay0);
    if (!Number.isFinite(span) || !Number.isFinite(ax0) || span < 1) return; // ukuran belum siap
    const step = span / books.length;
    const colX = Math.max(ax0, ax1) + 44;
    // semua 66 kitab tampil (bisa diklik). Bila baris terlalu rapat → dua kolom berselang-seling,
    // dan ukuran huruf menyesuaikan jarak baris.
    const twoCol = step < 10;
    const colW = 94;
    const fs = Math.max(6.5, Math.min(9.5, (twoCol ? step * 2 : step) * 0.8));
    if (this.labelFs !== fs) { this.labelFs = fs; this.labelEls[0]?.parentElement?.style.setProperty('--bl-fs', `${fs.toFixed(2)}px`); }
    let d = '';
    books.forEach((b, i) => {
      const el = this.labelEls[i];
      const [bx, by] = proj(b.xc, -0.06);
      const ly = ay0 + (i + 0.5) * step;
      const lx = colX + (twoCol && i % 2 ? colW : 0);
      el.style.transform = `translate3d(${lx.toFixed(1)}px, ${ly.toFixed(1)}px, 0)`;
      el.classList.add('on');
      if (Number.isFinite(bx) && Number.isFinite(by)) d += `M${(bx + 8).toFixed(1)} ${by.toFixed(1)}L${(colX - 14).toFixed(1)} ${by.toFixed(1)}L${(lx - 4).toFixed(1)} ${ly.toFixed(1)}`;
    });
    this.leaders.setAttribute('d', d);
  }

  onPointer(e) {
    if (!this.interactive) { this.dragging = false; return; }
    if (e.type === 'down') { this.dragging = true; this.dragX = e.x; this.dragStart = this.dragTarget; }
    if (e.type === 'up') this.dragging = false;
    if (e.type === 'move' && this.dragging && e.pointerType !== 'touch') this.dragTarget = this.dragStart + (e.x - this.dragX) * 0.004;
    if (e.type === 'move' || e.type === 'tap') {
      const it = this.arcs.pick(e.x, e.y, this.ctx.camera, this.ctx.size.w, this.ctx.size.h);
      this.arcs.setHoverItem(it);
      this.ctx.showArcTip(it, e.x, e.y);
      this.ctx.setCursor(!!it, this.dragging);
    }
  }

  poseOld(rawP, backOverride = null) {
    const portrait = this.ctx.size.w / this.ctx.size.h < 0.9;
    // Taman Eden: bumi sedikit lebih jauh, lalu menukik sampai menembus atmosfer
    const far = V(0, 0, portrait ? 12.5 : 9.0), farLook = V(0, 0.1, 0);
    const near = V(0.25, 0.55, 2.35), nearLook = V(0.3, 0.75, 0);
    const dive = easeInOut(range(0.5, 1.0, rawP));
    if (rawP < 2) return { pos: far.clone().lerp(near, dive), look: farLook.clone().lerp(nearLook, dive), fov: 40 };
    // Keterhubungan: pose lama (dari progress legacy), diawali kamera mundur dari dekat bumi
    const P = this.legacy(rawP);
    const q = easeInOut(range(0.88, 1.24, P));
    const k = smooth(0.06, 0.62, P);
    const pos1 = V(0, lerp(-0.1, -0.85, k), lerp(portrait ? 10.5 : 7.2, portrait ? 13.5 : 9.8, k));
    const look1 = V(0, lerp(0.35, -0.85, k), 0);
    const L2 = this.layout2();
    const pos = pos1.lerp(L2.cam, q), look = look1.lerp(L2.look, q);
    const back = backOverride ?? easeInOut(range(2.0, 2.2, rawP)); // zoom out bumi (Sejarah Manusia)
    const p = near.clone().lerp(pos, back), l = nearLook.clone().lerp(look, back);
    const kr = this.kristusK(rawP);
    if (kr > 0) {
      // fokus ke salib: kamera sedikit bergeser & mendekat ke arah kitab Injil
      const L3 = this.layout3();
      const injil = this.arcs.layout.groups.find((g) => g.id === 'injil');
      const fx = injil ? (injil.xc ?? (injil.x0 + injil.x1) / 2) * L3.scale : 0;
      const focus = smooth(3.35, 3.7, rawP) * 0.3;
      p.lerp(L3.cam.clone().add(V(fx * focus, 0, -1.2 * focus)), kr);
      l.lerp(L3.look.clone().add(V(fx * focus, 0, 0)), kr);
    }
    return { pos: p, look: l, fov: 40 };
  }

  postOld(rawP) {
    const P = this.legacy(rawP);
    const q = range(0.88, 1.24, P);
    const flashIn = 1 - smooth(0.0, 0.08, rawP);
    return {
      bloom: lerp(0.7, 0.75, q),
      rays: 0,
      light: V(0, 2.5, -1),
      flash: 0.55 * flashIn * flashIn,
      flashColor: [0.75, 0.88, 1.0],
      vignette: 0.9,
      threshold: 0.45,
    };
  }
}
