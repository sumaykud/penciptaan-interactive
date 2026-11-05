/* =====================================================================
   DATA KONTEN — file ini yang paling sering diedit.
   Semua teks storyboard yang dinamis (ayat, referensi, label timeline)
   ada di sini supaya tidak perlu menyentuh kode 3D.
   ===================================================================== */

/* ---------------------------------------------------------------------
   STORY 2 · PERICHORESIS
   Ayat yang muncul saat partikel cahaya di-hover / di-tap.
   Partikel ke-n menampilkan ayat ke-(n mod jumlah ayat).
   Tambahkan ayat baru cukup dengan menambah objek di array ini.
   --------------------------------------------------------------------- */
export const PERICHORESIS_VERSES = [
  {
    ref: 'Yohanes 14:10–11',
    text:
      'Tidak percayakah engkau, bahwa Aku di dalam Bapa dan Bapa di dalam Aku? ' +
      'Apa yang Aku katakan kepadamu, tidak Aku katakan dari diri-Ku sendiri, tetapi Bapa, ' +
      'yang diam di dalam Aku, Dialah yang melakukan pekerjaan-Nya. ' +
      'Percayalah kepada-Ku, bahwa Aku di dalam Bapa dan Bapa di dalam Aku …',
  },
  // { ref: 'Yohanes 17:21', text: '…' },
];

/* ---------------------------------------------------------------------
   STORY 8 · BIG BANG — label timeline (posisi x: 0 = Big Bang, 1 = sekarang)
   --------------------------------------------------------------------- */
export const UNIVERSE_TIMELINE = [
  { x: 0.0, title: 'Universe Age', sub: '0', kind: 'axis-start' },
  { x: 0.1, title: 'Cosmic Dark Ages', sub: '380,000 years' },
  { x: 0.24, title: 'First Stars', sub: '< 180 million years' },
  { x: 0.38, title: 'Black Holes and Accretion disks', sub: '250 million years' },
  { x: 0.55, title: 'Reionization', sub: '' },
  { x: 0.78, title: 'Modern Galaxies', sub: '' },
  { x: 1.0, title: 'Now', sub: '13.8 billion years', kind: 'end' },
];

/* ---------------------------------------------------------------------
   STORY 9–10 · KITAB (TB / LAI) — urutan, singkatan, jumlah pasal, kelompok
   Panjang batang di sumbu sebanding dengan jumlah pasal (total 1.189).
   --------------------------------------------------------------------- */
export const BOOK_GROUPS = [
  { id: 'taurat', name: 'Taurat', color: '#b9a4f2' },
  { id: 'sejarah', name: 'Sejarah', color: '#7ea6f4' },
  { id: 'puisi', name: 'Puisi & Hikmat', color: '#56c8e4' },
  { id: 'nabi-besar', name: 'Nabi-nabi Besar', color: '#5fd394' },
  { id: 'nabi-kecil', name: 'Nabi-nabi Kecil', color: '#c4e05c' },
  { id: 'injil', name: 'Injil', color: '#f3d35e' },
  { id: 'kisah', name: 'Kisah Para Rasul', color: '#f4a24e' },
  { id: 'paulus', name: 'Surat Paulus', color: '#f06a52' },
  { id: 'umum', name: 'Surat Umum', color: '#ea6f9f' },
  { id: 'wahyu', name: 'Wahyu', color: '#ddd6cb' },
];

// [nama, singkatan, jumlah pasal, kelompok]
export const BOOKS = [
  ['Kejadian', 'Kej', 50, 'taurat'], ['Keluaran', 'Kel', 40, 'taurat'], ['Imamat', 'Im', 27, 'taurat'],
  ['Bilangan', 'Bil', 36, 'taurat'], ['Ulangan', 'Ul', 34, 'taurat'],
  ['Yosua', 'Yos', 24, 'sejarah'], ['Hakim-hakim', 'Hak', 21, 'sejarah'], ['Rut', 'Rut', 4, 'sejarah'],
  ['1 Samuel', '1Sam', 31, 'sejarah'], ['2 Samuel', '2Sam', 24, 'sejarah'], ['1 Raja-raja', '1Raj', 22, 'sejarah'],
  ['2 Raja-raja', '2Raj', 25, 'sejarah'], ['1 Tawarikh', '1Taw', 29, 'sejarah'], ['2 Tawarikh', '2Taw', 36, 'sejarah'],
  ['Ezra', 'Ezr', 10, 'sejarah'], ['Nehemia', 'Neh', 13, 'sejarah'], ['Ester', 'Est', 10, 'sejarah'],
  ['Ayub', 'Ayb', 42, 'puisi'], ['Mazmur', 'Mzm', 150, 'puisi'], ['Amsal', 'Ams', 31, 'puisi'],
  ['Pengkhotbah', 'Pkh', 12, 'puisi'], ['Kidung Agung', 'Kid', 8, 'puisi'],
  ['Yesaya', 'Yes', 66, 'nabi-besar'], ['Yeremia', 'Yer', 52, 'nabi-besar'], ['Ratapan', 'Rat', 5, 'nabi-besar'],
  ['Yehezkiel', 'Yeh', 48, 'nabi-besar'], ['Daniel', 'Dan', 12, 'nabi-besar'],
  ['Hosea', 'Hos', 14, 'nabi-kecil'], ['Yoel', 'Yl', 3, 'nabi-kecil'], ['Amos', 'Am', 9, 'nabi-kecil'],
  ['Obaja', 'Ob', 1, 'nabi-kecil'], ['Yunus', 'Yun', 4, 'nabi-kecil'], ['Mikha', 'Mi', 7, 'nabi-kecil'],
  ['Nahum', 'Nah', 3, 'nabi-kecil'], ['Habakuk', 'Hab', 3, 'nabi-kecil'], ['Zefanya', 'Zef', 3, 'nabi-kecil'],
  ['Hagai', 'Hag', 2, 'nabi-kecil'], ['Zakharia', 'Za', 14, 'nabi-kecil'], ['Maleakhi', 'Mal', 4, 'nabi-kecil'],
  ['Matius', 'Mat', 28, 'injil'], ['Markus', 'Mrk', 16, 'injil'], ['Lukas', 'Luk', 24, 'injil'], ['Yohanes', 'Yoh', 21, 'injil'],
  ['Kisah Para Rasul', 'Kis', 28, 'kisah'],
  ['Roma', 'Rm', 16, 'paulus'], ['1 Korintus', '1Kor', 16, 'paulus'], ['2 Korintus', '2Kor', 13, 'paulus'],
  ['Galatia', 'Gal', 6, 'paulus'], ['Efesus', 'Ef', 6, 'paulus'], ['Filipi', 'Flp', 4, 'paulus'],
  ['Kolose', 'Kol', 4, 'paulus'], ['1 Tesalonika', '1Tes', 5, 'paulus'], ['2 Tesalonika', '2Tes', 3, 'paulus'],
  ['1 Timotius', '1Tim', 6, 'paulus'], ['2 Timotius', '2Tim', 4, 'paulus'], ['Titus', 'Tit', 3, 'paulus'],
  ['Filemon', 'Flm', 1, 'paulus'],
  ['Ibrani', 'Ibr', 13, 'umum'], ['Yakobus', 'Yak', 5, 'umum'], ['1 Petrus', '1Ptr', 5, 'umum'],
  ['2 Petrus', '2Ptr', 3, 'umum'], ['1 Yohanes', '1Yoh', 5, 'umum'], ['2 Yohanes', '2Yoh', 1, 'umum'],
  ['3 Yohanes', '3Yoh', 1, 'umum'], ['Yudas', 'Yud', 1, 'umum'],
  ['Wahyu', 'Why', 22, 'wahyu'],
];

/* ---------------------------------------------------------------------
   STORY 10 · KETERHUBUNGAN FIRMAN — tema & referensi silang
   Format: { from: 'Kej 1:1', to: 'Yoh 1:1-3', text: 'isi ayat (opsional)' }
   - Singkatan harus sama dengan kolom ke-2 BOOKS di atas.
   - `text` boleh kosong; tooltip tetap menampilkan pasangan referensi.
   CATATAN: daftar di bawah adalah CONTOH AWAL (rujukan silang yang umum
   dikenal) — silakan verifikasi, ganti, atau tambah sesuai riset Anda.
   --------------------------------------------------------------------- */
export const THEMES = [
  {
    id: 'penciptaan',
    name: 'Penciptaan',
    refs: [
      { from: 'Kej 1:1', to: 'Yoh 1:1-3', text: '' },
      { from: 'Kej 1:1', to: 'Ibr 11:3', text: '' },
      { from: 'Kej 1:1', to: 'Kol 1:16', text: '' },
      { from: 'Kej 1:1', to: 'Why 4:11', text: '' },
      { from: 'Kej 1:2', to: 'Mzm 104:30', text: '' },
      { from: 'Kej 1:3', to: '2Kor 4:6', text: '' },
      { from: 'Kej 1:3', to: 'Mzm 33:6', text: '' },
      { from: 'Kej 1:26-27', to: 'Kol 3:10', text: '' },
      { from: 'Kej 2:7', to: '1Kor 15:45', text: '' },
      { from: 'Neh 9:6', to: 'Kis 17:24', text: '' },
      { from: 'Ayb 38:4', to: 'Yes 45:18', text: '' },
      { from: 'Mzm 19:2', to: 'Rm 1:20', text: '' },
      { from: 'Yes 65:17', to: 'Why 21:1', text: '' },
    ],
  },
  {
    id: 'keselamatan',
    name: 'Keselamatan',
    refs: [
      { from: 'Kej 3:15', to: 'Gal 4:4', text: '' },
      { from: 'Kej 15:6', to: 'Rm 4:3', text: '' },
      { from: 'Kej 22:8', to: 'Yoh 1:29', text: '' },
      { from: 'Kel 12:13', to: '1Kor 5:7', text: '' },
      { from: 'Bil 21:9', to: 'Yoh 3:14-15', text: '' },
      { from: 'Mzm 22:2', to: 'Mat 27:46', text: '' },
      { from: 'Yes 53:5', to: '1Ptr 2:24', text: '' },
      { from: 'Yes 53:7', to: 'Kis 8:32', text: '' },
      { from: 'Yer 31:31', to: 'Ibr 8:8', text: '' },
      { from: 'Yl 2:32', to: 'Rm 10:13', text: '' },
      { from: 'Hab 2:4', to: 'Rm 1:17', text: '' },
      { from: 'Yoh 3:16', to: 'Rm 5:8', text: '' },
      { from: 'Ef 2:8', to: 'Tit 3:5', text: '' },
    ],
  },
  {
    id: 'gereja',
    name: 'Gereja',
    refs: [
      { from: 'Kel 19:6', to: '1Ptr 2:9', text: '' },
      { from: 'Mzm 118:22', to: '1Ptr 2:7', text: '' },
      { from: 'Yes 28:16', to: '1Ptr 2:6', text: '' },
      { from: 'Yl 2:28', to: 'Kis 2:17', text: '' },
      { from: 'Mat 16:18', to: 'Ef 2:20', text: '' },
      { from: 'Mat 28:19', to: 'Kis 2:38', text: '' },
      { from: 'Yoh 17:21', to: 'Ef 4:4', text: '' },
      { from: 'Kis 2:42', to: '1Kor 10:16', text: '' },
      { from: 'Rm 12:5', to: '1Kor 12:27', text: '' },
      { from: 'Ef 1:22', to: 'Kol 1:18', text: '' },
      { from: 'Ef 5:25', to: 'Why 19:7', text: '' },
      { from: 'Ef 5:27', to: 'Why 21:2', text: '' },
    ],
  },
  {
    id: 'penghakiman',
    name: 'Penghakiman',
    refs: [
      { from: 'Kej 18:25', to: 'Rm 3:6', text: '' },
      { from: 'Mzm 9:9', to: 'Kis 17:31', text: '' },
      { from: 'Pkh 12:14', to: '2Kor 5:10', text: '' },
      { from: 'Yes 66:24', to: 'Mrk 9:48', text: '' },
      { from: 'Yer 17:10', to: 'Why 22:12', text: '' },
      { from: 'Dan 7:10', to: 'Why 20:12', text: '' },
      { from: 'Dan 12:2', to: 'Yoh 5:29', text: '' },
      { from: 'Yl 3:2', to: 'Mat 25:32', text: '' },
      { from: 'Mal 4:1', to: '2Ptr 3:7', text: '' },
      { from: 'Mat 25:31', to: 'Why 20:11', text: '' },
      { from: 'Yoh 5:22', to: 'Kis 10:42', text: '' },
      { from: 'Rm 2:16', to: 'Ibr 9:27', text: '' },
    ],
  },
];

/* Garis latar dekoratif (BUKAN data referensi) supaya diagram tampak padat
   seperti storyboard. Set ke 0 bila semua referensi asli sudah diisi. */
export const DECORATIVE_ARCS = 440;
