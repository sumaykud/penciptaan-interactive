# penciptaan-interactive

Kisah interaktif 3D berbasis scroll (three.js), dari **"Siapa Allah"** sampai **keterhubungan firman**.
Ada 10 story sesuai storyboard. Tiap story punya animasi scroll sendiri, dengan cahaya 3D dramatis
(bloom, god-rays, flare anamorfik, dan lampu 3D sungguhan pada salib dan Bumi).

## Menjalankan

Kode ini memakai ES modules, jadi harus dibuka lewat server lokal. Membuka `index.html` langsung dengan `file://` tidak akan jalan.

```bash
python3 -m http.server 8080
```

Lalu buka <http://localhost:8080>. Tidak perlu `npm install`. Semua library sudah ada di `vendor/`.

Untuk lompat langsung ke sebuah story, tambahkan id-nya di URL, misalnya `http://localhost:8080/#big-bang`.
Daftar id ada di `js/config.js`.

## Peta storyboard → kode

| # | Story | Animasi scroll | File 3D |
|---|-------|----------------|---------|
| 1 | Siapa Allah | Judul muncul per huruf; kartu santo "tersinari" satu per satu; cahaya pulse dari bawah naik ke tengah | `js/acts/a1-siapa.js` |
| 2 | Perichoresis | Cincin cahaya tergambar oleh scroll; partikel keluar dari pusat; **hover/tap partikel → ayat** | `js/acts/a2-perichoresis.js` |
| 3 | (tiga cahaya) | Satu cincin membelah jadi tiga, bergerak teratur dan saling overlapping, kamera mengorbit | `js/acts/a3-trinitas.js` |
| 4 | Creatio ex Nihilo | Cahaya berkumpul; manusia ilahi transparan muncul (dissolve); salib kayu disinari lampu 3D | `js/acts/a3-trinitas.js` + `js/core/human.js` |
| 5 | Cahaya berkumpul | Garis cahaya berwarna tersedot ke satu bintang, dengan flare anamorfik | `js/acts/a4-cahaya.js` |
| 6 | Cahaya meledak | Kilat putih, ledakan sinar pelangi, gelombang kejut, getaran kamera | `js/acts/a4-cahaya.js` |
| 7 | Dunia Tak Kasat Mata & Dunia Kasat Mata | Arus garis emas (seperti video referensi); teks terbelah dari garis cahaya | `js/acts/a5-menyebar.js` |
| 8 | Big Bang | "Terompet" ruang-waktu tumbuh, label timeline menempel di sumbu 3D, kamera menukik ke Bumi | `js/acts/a6-bigbang.js` |
| 9 | Bumi | Bumi dengan cahaya matahari dari atas; grafik timeline interconnected muncul di bawahnya | `js/acts/a7-bumi.js` |
| 10 | Keterhubungan firman | Diagram berputar 3D jadi vertikal; tema Penciptaan / Keselamatan / Gereja / Penghakiman; pulse line; bisa diseret | `js/acts/a7-bumi.js` + `js/core/arcs.js` |

Teks dan animasi DOM per story ada di `js/ui.js`. Kamera, post-processing dan sinkronisasi scroll ada di `js/main.js`.

## Mengisi konten (tanpa menyentuh kode 3D)

Semua konten dinamis ada di **`js/data.js`**:

- **`PERICHORESIS_VERSES`**: ayat yang muncul saat partikel di Story 2 di-hover. Partikel ke-n menampilkan ayat ke-(n mod jumlah ayat), jadi cukup tambah objek `{ ref, text }`.
- **`THEMES`**: referensi silang per tema untuk Story 10. Formatnya `{ from: 'Kej 1:1', to: 'Yoh 1:1-3', text: '' }`. Singkatan kitab harus sama dengan kolom ke-2 di `BOOKS`. `text` boleh dikosongkan.
- **`DECORATIVE_ARCS`**: jumlah garis latar dekoratif di diagram. Garis ini **bukan** data referensi, hanya supaya diagram tampak padat seperti storyboard. Set ke `0` kalau semua referensi asli sudah diisi.
- **`UNIVERSE_TIMELINE`**: label timeline Big Bang.

Panjang scroll tiap story (dalam `vh`) diatur di `js/config.js`.

## Perlu diperhatikan

- **Ikon santo** di `assets/saints/` dipotong dari PDF storyboard, jadi resolusinya rendah. Ganti dengan file asli beresolusi tinggi memakai nama file yang sama.
- **Story 1, kartu 1 dan 2** isinya sama persis (dua-duanya tentang St Gregorius dari Nazianzus), mengikuti storyboard. Kemungkinan salah satunya seharusnya teks lain.
- **Catatan kaki `[8]`** di paragraf Story 1 belum punya sumber di storyboard.
- **Daftar referensi di `THEMES`** adalah contoh awal berupa rujukan silang yang umum dikenal, dengan penomoran TB. Mohon diverifikasi sebelum dipublikasikan.

## Pustaka & aset pihak ketiga

- [three.js](https://threejs.org) r160 (MIT), di `vendor/three/`
- [GSAP](https://gsap.com) 3.12.5 (GSAP Standard License), di `vendor/gsap.min.js`
- [Lenis](https://github.com/darkroomengineering/lenis) 1.1.13 (MIT), di `vendor/lenis.min.js`
- Tekstur Bumi di `assets/earth/` berasal dari paket npm `earth-visualization` (MIT) dan sudah diperkecil
- Font: Instrument Serif & Inter (Google Fonts)
