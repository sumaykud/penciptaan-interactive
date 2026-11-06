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
| 2 | Allah itu Satu / Esa | Judul + caption Ousia/Hypostasis; cincin cahaya tergambar oleh scroll; partikel keluar dari pusat; **hover/tap partikel → ayat** | `js/acts/a2-perichoresis.js` |
| 3 | Tritunggal Mahakudus (judul: Perichoresis) | Satu cincin membelah jadi tiga, bergerak teratur dan saling overlapping, kamera mengorbit; **hover/tap titik cahaya → ayat** | `js/acts/a3-trinitas.js` |
| 4 | Creatio ex Nihilo | Cahaya berkumpul; manusia ilahi transparan muncul (dissolve); salib kayu disinari lampu 3D | `js/acts/a3-trinitas.js` + `js/core/human.js` |
| 5 | Luapan Kasih (Overflow of Love) | Garis cahaya berwarna terus mengalir ke satu bintang (digerakkan waktu, kecepatan naik seiring scroll), dengan flare anamorfik | `js/acts/a4-cahaya.js` |
| 6 | Penciptaan | Kilat putih, ledakan sinar pelangi, gelombang kejut, getaran kamera | `js/acts/a4-cahaya.js` |
| 7 | Penciptaan Dua Dunia (judul: Dunia Tak Kasat Mata & Dunia Kasat Mata) | Arus garis emas (seperti video referensi); teks terbelah dari garis cahaya | `js/acts/a5-menyebar.js` |
| 8 | Proginosko (kemahatahuan Allah) | Cahaya berdenyut lalu meledak (garis emas, gelombang kejut), titik cahaya menyebar ke segala arah; suara dentuman (Web Audio, tombol Suara); modal penjelasan | `js/acts/a5b-proginosko.js` + `js/core/sound.js` |
| 9 | 7 Hari Penciptaan | "Terompet" ruang-waktu tumbuh, label timeline menempel di sumbu 3D, kamera menukik ke Bumi | `js/acts/a6-bigbang.js` |
| 10 | Taman Eden | Bumi (sedikit lebih jauh) + judul; kamera menukik ke Bumi dan gambar Taman Eden terbuka | `js/acts/a7-bumi.js` + `assets/eden/` |
| 11 | Manusia | Kejadian 1:27 di atas Taman Eden; Kristofani: cahaya Kristus → cahaya mengalir → manusia terbentuk → gambar penuh; lalu memudar dan kamera menjauh dari Bumi | `js/acts/a7-bumi.js` (`syncEden`) |
| 12 | Keterhubungan firman | Diagram berputar 3D jadi vertikal; tema Penciptaan / Keselamatan / Eklesia / Penghakiman; pulse line; bisa diseret | `js/acts/a7-bumi.js` + `js/core/arcs.js` |
| 13 | Kristus (Sang Kristus = Firman) | Diagram kembali horizontal, salib Ortodoks di kitab Injil, busur ayat Kristofani & Inkarnasi menyala; daftar 30 ayat yang bisa di-hover | `js/acts/a7-bumi.js` + tema `kristus` di `THEMES` |

Teks dan animasi DOM per story ada di `js/ui.js`. Kamera, post-processing dan sinkronisasi scroll ada di `js/main.js`.

## Mengisi konten (tanpa menyentuh kode 3D)

Semua konten dinamis ada di **`js/data.js`**:

- **`ESA_VERSES`** (Story 2) dan **`PERICHORESIS_VERSES`** (Story 3): ayat yang muncul saat titik cahaya di-hover/tap. Setiap ayat pasti dapat minimal satu titik dan posisinya diacak tiap halaman dimuat; titik otomatis ditambah kalau ayatnya lebih banyak. Cukup tambah objek `{ ref, text, note?, comment? }`. `comment` tampil sebagai penjelasan di bawah ayat. Di teks, `**...**` jadi tebal, `*...*` jadi miring, dan `[...]` jadi catatan pudar.
- **`THEMES`**: referensi silang per tema untuk Story 10. Formatnya `{ from: 'Kej 1:1', to: 'Yoh 1:1-3', text: '' }`. Singkatan kitab harus sama dengan kolom ke-2 di `BOOKS`. `text` boleh dikosongkan.
- **`DECORATIVE_ARCS`**: jumlah garis latar dekoratif di diagram. Garis ini **bukan** data referensi, hanya supaya diagram tampak padat seperti storyboard. Set ke `0` kalau semua referensi asli sudah diisi.
- **`EXPLAINERS`**: isi modal penjelasan yang dibuka tombol **?** (“Lihat Ayat”), sekarang di Story 4. Kunci = id story di `js/config.js`; isinya `title`, `points`, `versesTitle`, `verses`. Story lain bisa diberi tombol yang sama dengan `<button class="info-btn interactive" data-explainer="id-story">`. Format teks sama dengan ayat, ditambah `^[2]` untuk catatan kaki.
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
