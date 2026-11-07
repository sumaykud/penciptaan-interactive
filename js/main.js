import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { STORIES, CROSSFADE } from './config.js';
import { SHARED } from './core/materials.js';
import { GradeShader } from './core/post.js';
import { clamp, smooth, prefersReducedMotion } from './core/util.js';
import { StoryUI } from './ui.js';
import { Sound } from './core/sound.js';
import { ActSiapa } from './acts/a1-siapa.js';
import { ActPerichoresis } from './acts/a2-perichoresis.js';
import { ActTrinitas } from './acts/a3-trinitas.js';
import { ActCahaya } from './acts/a4-cahaya.js';
import { ActMenyebar } from './acts/a5-menyebar.js';
import { ActProginosko } from './acts/a5b-proginosko.js';
import { ActBigBang } from './acts/a6-bigbang.js';
import { ActBumi } from './acts/a7-bumi.js';

const canvas = document.getElementById('gl');
const loader = document.getElementById('loader');

function fail(msg) {
  loader.querySelector('.loader-txt').textContent = msg;
  loader.querySelector('.loader-dot').style.display = 'none';
}

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', alpha: false });
} catch (e) {
  fail('Browser ini tidak mendukung WebGL. Buka di Chrome, Edge, Safari, atau Firefox terbaru.');
  throw e;
}

const mobile = Math.min(innerWidth, innerHeight) < 700 || /Mobi|Android/i.test(navigator.userAgent);
const touch = matchMedia('(hover: none)').matches;
const reduced = prefersReducedMotion();
renderer.setClearColor(0x000000, 1);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 0.05, 500);
scene.add(camera);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.7, 0.5, 0.22);
composer.addPass(bloom);
const grade = new ShaderPass(GradeShader);
composer.addPass(grade);
composer.addPass(new OutputPass());

const dom = {
  verseTip: document.getElementById('verse-tip'),
  orbRing: document.getElementById('orb-ring'),
  arcTip: document.getElementById('arc-tip'),
};
const size = { w: innerWidth, h: innerHeight };

/* ---------------- konteks bersama ---------------- */
const ctx = {
  scene, camera, renderer, dom, size, mobile, touch, reduced,
  setCursor(pointer, grabbing) {
    document.body.style.cursor = grabbing ? 'grabbing' : pointer ? 'pointer' : '';
  },
  // Kunci scroll halaman saat modal terbuka (modal tetap bisa di-scroll: data-lenis-prevent).
  setScrollLock(on) {
    if (lenis) { if (on) lenis.stop(); else lenis.start(); }
    document.documentElement.classList.toggle('modal-open', on);
  },
  showArcTip(it, x, y) {
    const tip = dom.arcTip;
    if (!it) { tip.classList.remove('on'); return; }
    tip.querySelector('.ref').textContent = `${it.ref.from}  ⟶  ${it.ref.to}`;
    tip.querySelector('.txt').textContent = it.ref.text || '';
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    let tx = x + 16, ty = y + 16;
    if (tx + tw > size.w - 16) tx = x - tw - 16;
    if (ty + th > size.h - 16) ty = y - th - 16;
    tip.style.transform = `translate3d(${Math.max(16, tx)}px, ${Math.max(16, ty)}px, 0)`;
    tip.classList.add('on');
  },
  scrollToStory(i, offset = 0) {
    const y = trackTop[i] + trackLen[i] * offset;
    if (lenis) lenis.scrollTo(y, { duration: Math.min(2.6, 0.9 + Math.abs(y - scrollY) / innerHeight * 0.12) });
    else window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  },
  goTheme(i) {
    const s10 = 0.1 + ((i + 0.5) / 4) * 0.82;
    ctx.scrollToStory(12, 0.4 + 0.6 * s10);
  },
};

/* ---------------- UI & acts ---------------- */
const ui = new StoryUI(ctx);
const acts = [
  new ActSiapa(ctx),
  new ActPerichoresis(ctx),
  new ActTrinitas(ctx),
  new ActCahaya(ctx),
  new ActMenyebar(ctx),
  new ActProginosko(ctx),
  new ActBigBang(ctx),
  new ActBumi(ctx),
];
const bigbang = acts[6], bumi = acts[7];
bigbang.bindLabels(ui.uniLabels);
const bookEls = ui.bindBookLabels(bumi.arcs.layout.books, bumi.arcs);
bumi.bindDom({ labels: bookEls, groups: ui.groupLabels, leaders: ui.leaders, onTheme: (i) => ui.setTheme(i, bumi.arcs) });

/* ---------------- scroll ---------------- */
const LenisCtor = window.Lenis;
const lenis = !reduced && LenisCtor ? new LenisCtor({ lerp: 0.075, wheelMultiplier: 0.85, smoothWheel: true }) : null;
let trackTop = [], trackLen = [];
function measure() {
  ui.tracks.forEach((el, i) => {
    trackTop[i] = el.offsetTop;
    const h = el.offsetHeight;
    trackLen[i] = i === ui.tracks.length - 1 ? Math.max(h - innerHeight, 1) : h;
  });
}
let scrollY = 0;
function globalProgress(y) {
  for (let i = trackTop.length - 1; i >= 0; i--) if (y >= trackTop[i]) return i + (y - trackTop[i]) / trackLen[i];
  return 0;
}
const progressOf = (g) => (i) => g - i;

function weightOf(act, g) {
  const T = CROSSFADE;
  const a = act.start === 0 ? 1 : smooth(act.start - T, act.start + T, g);
  const b = act.end === STORIES.length - 1 ? 1 : 1 - smooth(act.end + 1 - T, act.end + 1 + T, g);
  return a * b;
}

/* ---------------- pointer ---------------- */
const pointer = { x: innerWidth / 2, y: innerHeight / 2, nx: 0, ny: 0, sx: 0, sy: 0 };
let downAt = null;
function dispatch(type, e) {
  const ev = { type, x: e.clientX, y: e.clientY, pointerType: e.pointerType };
  acts.forEach((a) => { if (a.weight > 0.5) a.onPointer(ev); });
}
addEventListener('pointermove', (e) => {
  pointer.x = e.clientX; pointer.y = e.clientY;
  pointer.nx = (e.clientX / size.w) * 2 - 1; pointer.ny = (e.clientY / size.h) * 2 - 1;
  dispatch('move', e);
}, { passive: true });
addEventListener('pointerdown', (e) => {
  if (e.target.closest('button, a, .bl, .ref-list')) return;
  downAt = { x: e.clientX, y: e.clientY, t: performance.now() };
  dispatch('down', e);
});
addEventListener('pointerup', (e) => {
  dispatch('up', e);
  if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 8 && performance.now() - downAt.t < 450) dispatch('tap', e);
  downAt = null;
});

/* ---------------- resize ---------------- */
/* Kualitas adaptif: kalau rata-rata frame terlalu lambat secara konsisten (GPU lemah),
   resolusi render diturunkan bertahap supaya animasi tetap mulus. Tidak pernah dinaikkan lagi
   di sesi yang sama (menghindari naik-turun), dan tidak berlaku di layar yang sudah lancar. */
let prScale = 1;
const perf = { acc: 0, n: 0, slow: 0 };
function watchPerf(rawDt) {
  if (document.hidden || rawDt > 0.25) return; // tab di latar / jeda panjang: abaikan
  perf.acc += rawDt; perf.n++;
  if (perf.acc < 0.5) return; // evaluasi tiap ±0,5 detik
  const avg = perf.acc / perf.n;
  perf.acc = 0; perf.n = 0;
  perf.slow = avg > 1 / 42 ? perf.slow + 1 : 0; // < ±42 fps
  const base = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 1.75);
  if (perf.slow >= 3 && base * prScale > 0.8) {
    prScale = Math.max(0.8 / base, prScale * 0.82);
    perf.slow = 0;
    resize();
  }
}

function resize() {
  size.w = innerWidth; size.h = innerHeight;
  const pr = Math.min(devicePixelRatio || 1, mobile ? 1.5 : 1.75) * prScale;
  renderer.setPixelRatio(pr);
  renderer.setSize(size.w, size.h, false);
  composer.setPixelRatio(pr);
  composer.setSize(size.w, size.h);
  camera.aspect = size.w / size.h;
  camera.updateProjectionMatrix();
  SHARED.uPR.value = pr;
  grade.uniforms.uRes.value.set(size.w * pr, size.h * pr);
  measure();
}
addEventListener('resize', resize);
resize();

/* ---------------- loop ---------------- */
const clock = new THREE.Clock();
const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(), tmpV = new THREE.Vector3(), lightScr = new THREE.Vector2();
const flashCol = new THREE.Color();
let smoothLook = null;

function frame() {
  const rawDt = clock.getDelta();
  const dt = Math.min(rawDt, 0.05);
  watchPerf(rawDt);
  const t = clock.elapsedTime;
  SHARED.uTime.value = t;
  if (lenis) lenis.raf(t * 1000);
  scrollY = lenis ? lenis.animatedScroll : window.scrollY;
  const g = clamp(globalProgress(scrollY), 0, STORIES.length);

  // pose kamera & parameter post dari act yang aktif (dibobot)
  camPos.set(0, 0, 0); camLook.set(0, 0, 0);
  let fov = 0, wsum = 0;
  const P = { bloom: 0, threshold: 0, rays: 0, ca: 0, flash: 0, vignette: 0 };
  lightScr.set(0, 0);
  let lightW = 0;
  flashCol.setRGB(0, 0, 0);
  acts.forEach((a) => {
    const w = weightOf(a, g);
    a.weight = w;
    a.group.visible = w > 0.001;
    if (!a.group.visible) return;
    const lp = g - a.start;
    a.update(lp, w, t, dt);
    const pose = a.pose(lp, t);
    camPos.addScaledVector(pose.pos, w);
    camLook.addScaledVector(pose.look, w);
    fov += (pose.fov || 40) * w;
    wsum += w;
    const pp = a.post(lp, t);
    P.bloom += (pp.bloom ?? 1) * w;
    P.threshold += (pp.threshold ?? 0.24) * w;
    P.rays += (pp.rays ?? 0) * w;
    P.ca += (pp.ca ?? 0) * w;
    P.flash += (pp.flash ?? 0) * w;
    P.vignette += (pp.vignette ?? 0.8) * w;
    const fc = pp.flashColor || [1, 0.94, 0.85];
    flashCol.r += fc[0] * w; flashCol.g += fc[1] * w; flashCol.b += fc[2] * w;
    if (pp.light) {
      tmpV.copy(pp.light).applyMatrix4(a.group.matrixWorld).project(camera);
      if (tmpV.z < 1) { lightScr.x += (tmpV.x * 0.5 + 0.5) * w; lightScr.y += (tmpV.y * 0.5 + 0.5) * w; lightW += w; }
    }
  });
  if (wsum > 0) {
    camPos.multiplyScalar(1 / wsum); camLook.multiplyScalar(1 / wsum); fov /= wsum;
    for (const k in P) P[k] /= wsum;
    flashCol.multiplyScalar(1 / wsum);
  }

  // parallax halus mengikuti pointer
  pointer.sx += (pointer.nx - pointer.sx) * 0.04;
  pointer.sy += (pointer.ny - pointer.sy) * 0.04;
  const par = reduced || touch ? 0 : 0.18;
  camPos.x += pointer.sx * par; camPos.y -= pointer.sy * par * 0.6;
  if (!smoothLook) smoothLook = camLook.clone();
  smoothLook.lerp(camLook, 0.5);
  camera.position.copy(camPos);
  camera.lookAt(smoothLook);
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
  SHARED.uPxScale.value = size.h / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2));

  bloom.strength = P.bloom;
  bloom.threshold = P.threshold;
  const gu = grade.uniforms;
  gu.uRays.value = P.rays;
  if (lightW > 0) gu.uLight.value.set(lightScr.x / lightW, lightScr.y / lightW);
  gu.uCA.value = P.ca;
  gu.uFlash.value = P.flash;
  gu.uFlashColor.value.copy(flashCol);
  gu.uVignette.value = P.vignette;
  gu.uTime.value = t;

  ui.update(g, progressOf(g));
  // musik latar: penuh sepanjang cerita, memudar hingga hilang saat masuk section terakhir
  Sound.setMusic(1 - smooth(STORIES.length - 1.5, STORIES.length - 0.9, g));
  Sound.commit();
  composer.render(dt);
  probeNavBackdrop();
  requestAnimationFrame(frame);
}

/* ---------------- warna navigasi bab adaptif ----------------
   Kecerahan gambar tepat di belakang navigasi bab (kiri bawah) dibaca dari canvas, lalu
   teks & garis navigasi berganti hitam saat latarnya terlalu terang (mis. kilat ledakan).
   Pembacaan asinkron (WebGL2 PBO + fence): readPixels masuk antrean GPU dan hasilnya diambil
   di frame berikutnya bila sudah siap, jadi tidak pernah menahan render (tetap mulus). */
const navEl = document.getElementById('chapters');
const gl = renderer.getContext();
const navProbe = (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext)
  ? { pbo: gl.createBuffer(), cap: 0, len: 0, buf: null, sync: null, frame: 0, light: false } : null;
function probeNavBackdrop() {
  const p = navProbe;
  if (!p) return;
  if (p.sync) {
    if (gl.clientWaitSync(p.sync, 0, 0) === gl.TIMEOUT_EXPIRED) return; // belum siap; cek frame berikutnya
    gl.deleteSync(p.sync); p.sync = null;
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, p.pbo);
    gl.getBufferSubData(gl.PIXEL_PACK_BUFFER, 0, p.buf, 0, p.len);
    gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
    let s = 0, n = 0;
    for (let i = 0; i < p.len; i += 12) { s += 0.2126 * p.buf[i] + 0.7152 * p.buf[i + 1] + 0.0722 * p.buf[i + 2]; n++; }
    const luma = n ? s / n / 255 : 0;
    p.luma = luma;
    // histeresis supaya tidak berkedip bolak-balik di sekitar ambang
    const light = p.light ? luma > 0.42 : luma > 0.58;
    if (light !== p.light) { p.light = light; navEl.classList.toggle('on-light', light); }
    return;
  }
  if (++p.frame % 5) return; // ±12× per detik sudah cukup
  const r = navEl.getBoundingClientRect();
  const pr = renderer.getPixelRatio();
  const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight;
  const x = Math.max(0, Math.floor(r.left * pr)), y = Math.max(0, Math.floor((size.h - r.bottom) * pr));
  const w = Math.min(Math.ceil(r.width * pr), W - x), h = Math.min(Math.ceil(r.height * pr), H - y);
  if (w <= 0 || h <= 0) return;
  p.len = w * h * 4;
  renderer.setRenderTarget(null); // pastikan membaca framebuffer layar
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, p.pbo);
  if (p.cap < p.len) { gl.bufferData(gl.PIXEL_PACK_BUFFER, p.len, gl.STREAM_READ); p.cap = p.len; p.buf = new Uint8Array(p.len); }
  gl.readPixels(x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, 0);
  gl.bindBuffer(gl.PIXEL_PACK_BUFFER, null);
  p.sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
}

/* ---------------- suara & musik latar ----------------
   Default "nyala": audio mulai pada interaksi pertama (klik/ketuk/tombol) di mana saja —
   browser tidak mengizinkan audio sebelum itu. Tombol "Suara" mematikan/menyalakan;
   pilihan disimpan di localStorage. */
const soundBtn = document.getElementById('sound-toggle');
let soundWanted = true;
try { soundWanted = localStorage.getItem('penciptaan-sound') !== 'off'; } catch (e) { /* storage diblokir */ }
function paintSoundBtn() {
  if (!soundBtn) return;
  const on = Sound.enabled;
  soundBtn.setAttribute('aria-pressed', String(on));
  soundBtn.querySelector('.st-label').textContent = on ? 'Suara: nyala' : soundWanted ? 'Ketuk untuk suara' : 'Suara: mati';
}
async function setSound(on, remember) {
  soundWanted = on;
  if (remember) { try { localStorage.setItem('penciptaan-sound', on ? 'on' : 'off'); } catch (e) { /* abaikan */ } }
  await Sound.setEnabled(on);
  paintSoundBtn();
}
if (soundBtn) soundBtn.addEventListener('click', (e) => { e.stopPropagation(); setSound(!Sound.enabled, true); });
const firstGesture = (e) => {
  if (soundBtn && soundBtn.contains(e.target)) return; // klik tombol Suara ditangani tombol itu sendiri
  if (soundWanted && !Sound.enabled) setSound(true, false);
  ['pointerdown', 'keydown', 'touchstart'].forEach((t) => removeEventListener(t, firstGesture, true));
};
['pointerdown', 'keydown', 'touchstart'].forEach((t) => addEventListener(t, firstGesture, { capture: true, passive: true }));
paintSoundBtn();

/* ---------------- boot ---------------- */
async function boot() {
  try { await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 2500))]); } catch (e) { /* font opsional */ }
  measure();
  const hash = decodeURIComponent(location.hash.slice(1));
  const target = STORIES.findIndex((s) => s.id === hash);
  if (target > 0) window.scrollTo(0, trackTop[target] + 2);
  composer.render(0);
  requestAnimationFrame(() => {
    acts[2].buildHuman();
    loader.classList.add('done');
    ui.playIntro();
    clock.start();
    requestAnimationFrame(frame);
  });
}
boot();

window.__story = { ctx, acts, ui, measure, lenis, trackTop, trackLen, get g() { return globalProgress(scrollY); }, get navLuma() { return navProbe?.luma; } };
