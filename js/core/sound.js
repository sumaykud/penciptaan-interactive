/* Suara prosedural (Web Audio) — tanpa file audio.
   - dengung: noise rendah + nada sub-bass, volumenya diatur tiap frame oleh act (setHum)
   - boom(): dentuman ledakan = sub-bass turun + desis ledakan (lowpass menurun) + kilau
     frekuensi tinggi, semuanya dikirim ke gema (convolver dengan impulse buatan).
   Browser hanya mengizinkan audio setelah interaksi pengguna, jadi suara baru aktif
   setelah tombol "Suara" ditekan (default mati). */

let ac = null, master = null, verb = null, humGain = null, noiseBuf = null;
let enabled = false, humLevel = 0, lastBoom = 0;

function makeNoise(seconds) {
  const b = ac.createBuffer(1, ac.sampleRate * seconds, ac.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  return b;
}

function makeImpulse(seconds, decay) {
  const len = ac.sampleRate * seconds;
  const b = ac.createBuffer(2, len, ac.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return b;
}

function init() {
  ac = new (window.AudioContext || window.webkitAudioContext)();
  const comp = ac.createDynamicsCompressor();
  comp.threshold.value = -14; comp.ratio.value = 4;
  master = ac.createGain(); master.gain.value = 0.9;
  master.connect(comp).connect(ac.destination);
  verb = ac.createConvolver(); verb.buffer = makeImpulse(3.2, 2.6);
  const verbGain = ac.createGain(); verbGain.gain.value = 0.55;
  verb.connect(verbGain).connect(master);
  noiseBuf = makeNoise(4);

  // dengung latar (selalu berjalan, volumenya 0 sampai act menaikkannya)
  humGain = ac.createGain(); humGain.gain.value = 0;
  humGain.connect(master); humGain.connect(verb);
  const n = ac.createBufferSource(); n.buffer = noiseBuf; n.loop = true;
  const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 140; lp.Q.value = 0.7;
  const nG = ac.createGain(); nG.gain.value = 0.55;
  n.connect(lp).connect(nG).connect(humGain); n.start();
  const o = ac.createOscillator(); o.type = 'sine'; o.frequency.value = 49;
  const oG = ac.createGain(); oG.gain.value = 0.35;
  o.connect(oG).connect(humGain); o.start();
}

export const Sound = {
  get enabled() { return enabled; },

  async setEnabled(on) {
    enabled = on;
    if (on) {
      if (!ac) init();
      if (ac.state === 'suspended') await ac.resume();
    } else if (ac) {
      humGain.gain.setTargetAtTime(0, ac.currentTime, 0.1);
    }
  },

  // dipanggil act yang terlihat tiap frame (nilai dijumlahkan); commit() oleh main loop menerapkannya
  setHum(level) { humLevel += Math.max(0, level); },

  commit() {
    const v = Math.min(1, humLevel);
    humLevel = 0;
    if (!enabled || !ac) return;
    humGain.gain.setTargetAtTime(v * 0.32, ac.currentTime, 0.15);
  },

  boom() {
    if (!enabled || !ac) return;
    const t = ac.currentTime;
    if (t - lastBoom < 1.2) return; // jangan bertumpuk saat scroll bolak-balik cepat
    lastBoom = t;
    const out = ac.createGain(); out.gain.value = 1;
    out.connect(master); out.connect(verb);

    // 1) sub-bass turun
    const sub = ac.createOscillator(); sub.type = 'sine';
    sub.frequency.setValueAtTime(95, t); sub.frequency.exponentialRampToValueAtTime(26, t + 2.4);
    const sg = ac.createGain();
    sg.gain.setValueAtTime(0.0001, t); sg.gain.exponentialRampToValueAtTime(1.0, t + 0.03); sg.gain.exponentialRampToValueAtTime(0.0001, t + 2.8);
    sub.connect(sg).connect(out); sub.start(t); sub.stop(t + 3);

    // 2) desis ledakan
    const nz = ac.createBufferSource(); nz.buffer = noiseBuf;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.Q.value = 0.8;
    lp.frequency.setValueAtTime(3200, t); lp.frequency.exponentialRampToValueAtTime(160, t + 2.2);
    const ng = ac.createGain();
    ng.gain.setValueAtTime(0.0001, t); ng.gain.exponentialRampToValueAtTime(0.75, t + 0.02); ng.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    nz.connect(lp).connect(ng).connect(out); nz.start(t); nz.stop(t + 2.8);

    // 3) kilau cahaya (frekuensi tinggi, lambat memudar)
    const sh = ac.createBufferSource(); sh.buffer = noiseBuf;
    const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 6500; bp.Q.value = 1.4;
    const hg = ac.createGain();
    hg.gain.setValueAtTime(0.0001, t); hg.gain.exponentialRampToValueAtTime(0.22, t + 0.25); hg.gain.exponentialRampToValueAtTime(0.0001, t + 3.6);
    sh.connect(bp).connect(hg).connect(verb); sh.start(t); sh.stop(t + 3.8);
  },
};
