/* =====================================================================
   DATA KONTEN — file ini yang paling sering diedit.
   Semua teks storyboard yang dinamis (ayat, referensi, label timeline)
   ada di sini supaya tidak perlu menyentuh kode 3D.
   ===================================================================== */

/* ---------------------------------------------------------------------
   AYAT DI TITIK CAHAYA (Story 2 & Story 3)
   Ayat muncul saat titik cahaya di-hover / di-tap.
   Setiap ayat pasti dapat minimal satu titik; posisinya diacak setiap
   halaman dimuat. Kalau titik tersisa, titik itu mengulang ayat acak.
   Kalau jumlah ayat lebih banyak dari titik, titik otomatis ditambah.
   Field:  ref     — referensi ayat
           note    — (opsional) label di samping referensi
           text    — isi ayat
           comment — (opsional) penjelasan, tampil di bawah ayat
   Format teks:  **tebal**,  *miring*,  [catatan editor] (lebih pudar).
   --------------------------------------------------------------------- */

/* STORY 2 · ALLAH ITU SATU / ESA */
export const ESA_VERSES = [
  {
    ref: 'Ulangan 6:4',
    note: 'Shema Yisrael — Pengakuan Utama',
    text: 'Dengarlah, hai orang Israel: **TUHAN itu Allah kita, TUHAN itu esa!**',
  },
  {
    ref: 'Ulangan 4:39',
    text:
      'Sebab itu ketahuilah pada hari ini dan camkanlah, bahwa ' +
      '**Tuhanlah Allah yang di langit di atas dan di bumi di bawah, tidak ada yang lain**.',
  },
  {
    ref: 'Yesaya 43:11',
    text: 'Aku, Akulah TUHAN (YHWH) dan **tidak ada juruselamat selain dari pada-Ku**.',
  },
  {
    ref: 'Yesaya 45:18',
    text: 'Sebab beginilah firman TUHAN, yang menciptakan langit… ‘Akulah TUHAN dan **tidak ada yang lain**.’',
  },
  {
    ref: 'Keluaran 20:3',
    text: 'Jangan ada padamu allah lain di hadapan-Ku.',
  },
  {
    ref: 'Markus 12:29',
    text: 'Hukum yang terutama ialah: **Dengarlah, hai orang Israel, Tuhan Allah kita, Tuhan itu esa**.',
  },
  {
    ref: '1 Korintus 8:6',
    text:
      '…namun bagi kita **hanya ada satu Allah saja, yaitu Bapa**, yang dari pada-Nya berasal ' +
      'segala sesuatu dan yang untuk Dia kita hidup, dan **satu Tuhan saja, yaitu Yesus Kristus**, ' +
      'yang oleh-Nya segala sesuatu telah dijadikan…',
  },
  {
    ref: 'Yohanes 17:3',
    text:
      'Inilah hidup yang kekal itu, yaitu bahwa mereka mengenal ' +
      '**Engkau, satu-satunya Allah yang benar**, dan mengenal Yesus Kristus yang telah Engkau utus.',
  },
  {
    ref: '1 Timotius 2:5',
    text:
      'Karena **Allah itu esa** dan esa pula Dia yang menjadi pengantara antara Allah dan manusia, ' +
      'yaitu manusia Kristus Yesus.',
  },
  {
    ref: 'Matius 28:19',
    note: 'Formula Keesaan dalam Tiga Pribadi',
    text:
      'Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam ' +
      '**nama** [bentuk tunggal/singular] **Bapa dan Anak dan Roh Kudus**…',
  },
  {
    ref: 'Yohanes 10:30',
    text: 'Aku dan Bapa adalah **satu**.',
  },
];

/* STORY 3 · TRITUNGGAL MAHAKUDUS — PERICHORESIS */
export const PERICHORESIS_VERSES = [
  {
    ref: 'Yohanes 10:38',
    text:
      '…tetapi jikalau Aku melakukannya… percayalah kepada perbuatan-perbuatan itu, supaya kamu tahu ' +
      'dan mengerti, bahwa Bapa di dalam Aku dan Aku di dalam Bapa.',
    comment: 'Pekerjaan-pekerjaan mukjizat yang dilakukan Yesus adalah bukti empiris dari realitas Perichoresis',
  },
  {
    ref: 'Yohanes 17:21a',
    text: '…supaya mereka semua menjadi satu, sama seperti **Engkau, ya Bapa, di dalam Aku dan Aku di dalam Engkau**…',
    comment:
      'Doa Syafaat Agung Kristus menjadikan persatuan *Perichoresis* antara Bapa dan Anak ' +
      'sebagai standar tertinggi dari kesatuan',
  },
  {
    ref: 'Yohanes 10:30',
    text: 'Aku dan Bapa adalah satu.',
    comment:
      'Teks asli menggunakan kata **hen** (satu secara hakikat/esensi netral), bukan *heis* ' +
      '(satu orang/pribadi). Ini menunjukkan bahwa Bapa dan Anak adalah dua Pribadi yang berbeda ' +
      '(*hypostases*), tetapi menyatu secara mutlak dalam satu hakikat (*ousia*) melalui *Perichoresis*',
  },
  {
    ref: '1 Korintus 2:10–11',
    text:
      'Karena kepada kita Allah telah menyatakannya oleh Roh, sebab Roh menyelami segala sesuatu, ' +
      'bahkan hal-hal yang terdalam dari Allah… Demikianlah tidak ada orang yang tahu apa yang ada ' +
      'di dalam diri Allah selain Roh Allah.',
  },
  {
    ref: 'Yohanes 15:26',
    text:
      'Jikalau Penghibur yang akan Kuutus dari Bapa datang, yaitu Roh Kebenaran, yang keluar dari Bapa, ' +
      'Ia akan bersaksi tentang Aku.',
    comment:
      'Roh Kudus keluar dari Bapa dan memancarkan kesaksian tentang Anak, memperlihatkan dinamika ' +
      'hubungan Tritunggal yang tak terpisahkan',
  },
  {
    ref: 'Matius 28:19',
    text:
      'Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam **nama** ' +
      'Bapa dan Anak dan Roh Kudus…',
    comment:
      'Penggunaan satu kata tunggal **“NAMA”** (*eis to onoma*) untuk Tiga Pribadi membuktikan bahwa ' +
      'Bapa, Anak, dan Roh Kudus memiliki satu hakikat dan kedaulatan yang saling melingkupi',
  },
  {
    ref: 'Yohanes 14:20',
    text: 'Pada hari itulah kamu akan tahu, bahwa **Aku di dalam Bapa-Ku dan kamu di dalam Aku dan Aku di dalam kamu**.',
  },
  {
    ref: 'Yohanes 14:23',
    text:
      'Jawab Yesus katanya: ‘Jika seorang mengasihi Aku, ia akan menuruti firman-Ku dan Bapa-Ku akan ' +
      'mengasihi dia dan **Kami akan datang kepadanya dan diam bersama-sama dengan dia**.’',
    comment: 'Bapa dan Anak menjadikan hati manusia yang taat sebagai tempat kediaman (*mōne*) Mereka',
  },
  {
    ref: 'Yohanes 15:4–5',
    text:
      '**Tinggallah di dalam Aku dan Aku di dalam kamu**. Sama seperti ranting tidak dapat berbuah dari ' +
      'dirinya sendiri, jikalau ia tidak tinggal pada pokok anggur, demikian juga kamu tidak berbuah, ' +
      'jikalau kamu tidak **tinggal di dalam Aku**… Barangsiapa **tinggal di dalam Aku dan Aku di dalam dia**, ' +
      'ia berbuah banyak…',
  },
  {
    ref: '1 Yohanes 4:13 & 15–16',
    text:
      'Demikianlah kita ketahui, bahwa **kita tetap berada di dalam Allah dan Dia di dalam kita**: ' +
      'Ia telah menganugerahkan kita bagian dari Roh-Nya… Barangsiapa mengaku, bahwa Yesus adalah ' +
      'Anak Allah, **Allah tetap berada di dalam dia dan dia di dalam Allah**… Allah adalah kasih, ' +
      'dan barangsiapa tetap berada di dalam kasih, **ia tetap berada di dalam Allah dan Allah di dalam dia**.',
  },
  {
    ref: 'Kolose 2:9',
    text: 'Sebab dalam Dialah berdiam secara jasmani seluruh kepenuhan keilahian…',
    comment: 'Seluruh Energi dan Kepenuhan Keilahian berdiam dan menembus kemanusiaan Kristus secara jasmani',
  },
  {
    ref: '2 Korintus 5:19',
    text: 'Sebab **Allah ada di dalam Kristus** mendamaikan dunia dengan diri-Nya…',
  },
];

/* ---------------------------------------------------------------------
   MODAL PENJELASAN (tombol "?" → "Lihat Ayat")
   Kunci objek = id story di js/config.js. Story yang punya entri di sini
   bisa diberi tombol <button class="info-btn" data-explainer="id-story">.
   Format teks sama dengan ayat:  **tebal**,  *miring*,  ^[2] (catatan kaki),
   dan baris baru (\n) di dalam `text`.
   --------------------------------------------------------------------- */
export const EXPLAINERS = {
  /* Story 12 (Sejarah Manusia) — Penciptaan Manusia dalam IDE Allah (Logoi) */
  'logoi': {
    "title": "Penciptaan Manusia dalam IDE Allah (*Logoi*)",
    "sections": [
      {
        "heading": "Penciptaan Manusia dalam IDE Allah (*Logoi*)",
        "intro": "Secara teologis, sebelum alam semesta dipanggil dari ketiadaan (*creatio ex nihilo*), tidak ada wujud jiwa atau tubuh fisik manusia yang melayang-layang di alam kekal. Yang pre-eksis secara kekal di dalam pikiran dan Diri Sang *Logos* (Kristus) adalah **Logoi Penciptaan**—yaitu cetak biru, pikiran, kehendak, dan rancangan ilahi (*volitional thoughts / thelemata*) bagi seluruh ciptaan, termasuk bagi setiap individu manusia.",
        "items": [
          "**Satu *Logos* dan Banyak *Logoi*:** Santo Maksimus Pengaku Iman menegaskan bahwa Sang *Logos* yang tunggal memuat seluruh *logoi* ciptaan secara kekal dan tak terbagi. Di dalam Diri Kristus, rancangan mengenai keberadaan, identitas, dan tujuan akhir setiap manusia yang akan lahir di bumi (dari Adam hingga manusia terakhir) sudah ada secara simultan, sempurna, dan selesai sebelum segala zaman.",
          "**Potensi ke Aktualisasi:** Sebelum waktu ada, *logoi* individu manusia berada dalam status potensial di dalam kehendak Allah. Ketika individu tersebut dikandung di dalam sejarah, Allah mengaktualisasikan *logos* tersebut dari ketiadaan murni (*ex nihilo*) menjadi wujud aktual yang terdiri dari jiwa dan tubuh secara bersamaan."
        ]
      },
      {
        "heading": "Mengapa Ini BUKAN \"Takdir Kaku\" (Predestinasi Fatalistik)",
        "intro": "Jika semua ide manusia sudah ada sejak awal di dalam Allah, apakah itu berarti hidup manusia hanyalah \"skenario film\" atau takdir yang sudah ditentukan tanpa bisa diubah? Para Bapa Gereja secara tegas menjawab **TIDAK**. Santo Maksimus Pengaku Iman menjelaskan pembedaan antara ***Logos* Kodrat** (*Logos of Nature*) dan ***Tropos* Keberadaan** (*Tropos of Existence*):",
        "items": [
          {
            "text": "**1. *Logos* (Cetak Biru Ilahi / Panggilan Utama):**",
            "items": [
              "Ini adalah ide Allah tentang siapa diri kita dan potensi kebaikan tertinggi kita (yaitu untuk menyatu dengan Allah / *Theosis*). *Logos* ini tidak pernah berubah dan selalu baik."
            ]
          },
          {
            "text": "**2. *Tropos* (Pilihan Cara Hidup / Kehendak Bebas Manusia):**",
            "items": [
              "Ini adalah bagaimana manusia menggunakan kehendak bebasnya (*autexousion*) di dalam sejarah untuk merespons panggilan Allah tersebut.",
              "**Bukan Takdir Fatalistik:** Santo Maksimus menegaskan bahwa *logoi* bukanlah bentuk predestinasi fatalistik. Allah tidak memaksakan *logos* itu kepada manusia seperti robot. Sebaliknya, *logos* adalah tawaran dialog kasih (*dia-logos*).",
              "Manusia diberi kebebasan sejati untuk menerima dan bekerja sama (*sinergi*) dengan rahmat Allah demi mengaktualisasikan *logos*-nya menuju pengilahian (*Theosis*), atau menolak dan berpaling menuju ketidakberadaan/kebinasaan moral."
            ]
          }
        ]
      },
      {
        "heading": "Bagaimana Semua Manusia Sudah Ada dalam \"IDE Allah\" (*Logoi* Penciptaan)?",
        "intro": "Jika jiwa dan tubuh individu baru diwujudkan di dalam waktu saat manusia itu dikandung, lalu dalam arti apa manusia sudah \"ada\" dan \"selesai\" sebelum ada waktu? Jawabannya terletak pada doktrin ***Logoi* Penciptaan** (*Logoi of Creation*) yang dirumuskan oleh Santo Maksimus Pengaku Iman:",
        "items": [
          {
            "text": "**1. Cetak Biru Kekal di dalam Sang *Logos*:**",
            "items": [
              "Sebelum ruang dan waktu diciptakan, di dalam Diri Sang *Logos* (Kristus) telah pre-eksis secara kekal *logoi*—yaitu ide, rancangan, tujuan, dan kehendak ilahi bagi seluruh ciptaan, termasuk bagi setiap individu manusia yang akan lahir sepanjang sejarah."
            ]
          },
          {
            "text": "**2. Perbedaan Antara \"IDE/Rencana Ilahi\" dan \"Wujud Jiwa-Tubuh\":**",
            "items": [
              "**IDE Allah (*Logoi*):** Bersifat tak diciptakan (*uncreated*) karena merupakan kehendak dan pikiran Allah sendiri di dalam keekalan. Dalam pikiran Allah, rancangan dan takdir keselamatan setiap manusia sudah sempurna dan \"selesai\".",
              "**Wujud Jiwa & Tubuh:** Bersifat diciptakan (*created*) dari ketiadaan murni (*creatio ex nihilo*) di dalam waktu.",
              "Jadi, yang ada sebelum waktu bukanlah jiwa atau tubuh fisik yang melayang-layang, melainkan Kehendak dan Cetak Biru Ilahi (*uncreated acts of divine will*)."
            ]
          }
        ]
      },
      {
        "heading": "Alur Penciptaan: Dari Adam hingga Manusia di Segala Zaman",
        "intro": "Bagaimana proses ini berlangsung dari Adam sampai manusia abad ini?",
        "items": [
          {
            "text": "**Penciptaan Adam (Manusia Pertama):**",
            "items": [
              "Adam diciptakan dari tanah dan dihembusi jiwa secara bersamaan (*simultaneous*) di dalam waktu. Adam merupakan akar dan awal dari seluruh kodrat manusia (*common human nature*)."
            ]
          },
          {
            "text": "**Kelahiran Manusia di Segala Zaman:**",
            "items": [
              "Setiap manusia yang lahir setelah Adam tidak diciptakan melalui pra-eksistensi jiwa, melainkan diwujudkan pada momen spesifik di dalam sejarah (melalui proses pembuahan/kelahiran).",
              "Pada momen inilah, IDE/Kehendak Allah (*logos*) yang kekal mengenai individu tersebut diaktualisasikan di dalam waktu, di mana Allah menciptakan jiwa dan tubuh pribadi tersebut secara bersamaan."
            ]
          },
          {
            "text": "**Tidak Ada Jeda Waktu di Masing-Masing Individu:**",
            "items": [
              "Saat seorang bayi dikandung di rahim ibunya, pada detik itulah jiwa yang berakal budi dan tubuh fisiknya mulai ada secara serentak—memenuhi cetak biru (*logos*) yang telah dirancangkan Allah baginya sejak sebelum dunia dijadikan."
            ]
          }
        ]
      },
      {
        "heading": "Penolakan terhadap Pra-Eksistensi Jiwa (Bantahan atas Origenisme)",
        "intro": "Untuk memahami mengapa penciptaan jiwa dan tubuh bersifat simultan, kita perlu melihat latar belakang perdebatan teologis abad ke-4 hingga ke-7:",
        "items": [
          "**Pandangan Origenisme (Filsafat Yunani/Platonis):** Mengajarkan bahwa semua jiwa manusia sudah diciptakan terlebih dahulu di surga dalam sebuah kelompok kekal (*henad*), lalu karena kejatuhan moral, jiwa-jiwa tersebut diutus jatuh ke dalam tubuh fisik di bumi. Dalam pandangan ini, tubuh hanyalah wadah atau penjara sementara bagi jiwa.",
          "**Koreksi Santo Maksimus dan Santo Gregorius dari Nyssa:** Santo Maksimus dalam *Ambiguum* 7 dan *Ambiguum* 42 secara tegas menolak gagasan ini. Manusia bukanlah jiwa yang \"terperangkap\" dalam tubuh, melainkan kesatuan dwitunggal yang utuh (*composite species*) antara jiwa berakal budi (*noetic soul*) dan tubuh fisik (*bodily nature*).",
          "**Prinsip Hubungan Relasional (*Relational Co-existence*):** Jiwa dan tubuh memiliki hubungan kodrat yang tidak terpisahkan. Oleh karena itu, jiwa tidak pernah ada sebelum tubuh, dan tubuh tidak pernah ada sebelum jiwa—keduanya dipanggil menuju keberadaan secara bersamaan (*simultaneously*) pada momen awal penciptaan individu tersebut di dalam sejarah."
        ]
      },
      {
        "heading": "Perbandingan antara Antropologi Patristik (*Logoi* & Penciptaan Simultan) dan Doktrin TULIP Calvinisme",
        "intro": "**I. Titik Kesamaan (*Common Ground*)** — Meskipun teologi Ortodoks Patristik dan Calvinisme memiliki sistem soteriologi yang berbeda, keduanya membagi beberapa titik kesamaan mendasar terkait doktrin penciptaan dan kedaulatan Allah:",
        "items": [
          {
            "text": "**1. Penolakan terhadap Pra-Eksistensi Jiwa (Bantahan atas Origenisme):**",
            "items": [
              "Baik Tradisi Patristik Ortodoks maupun Tradisi Reformasi (Calvinisme) secara tegas menolak doktrin pra-eksistensi jiwa Origenis.",
              "Kedua tradisi sepakat bahwa jiwa manusia tidak melayang-layang atau ada secara fisik/substansial di surga sebelum kelahiran. Manusia adalah ciptaan kontingen yang jiwa dan tubuhnya diwujudkan di dalam waktu."
            ]
          },
          {
            "text": "**2. Kedaulatan dan Rencana Kekal Allah Sebelum Waktu:**",
            "items": [
              "Kedua tradisi sepakat bahwa sebelum dunia diciptakan, Allah di dalam keekalan-Nya telah memiliki cetak biru, pikiran, dan rencana keselamatan bagi ciptaan.",
              "Dalam Calvinisme, ini dipahami sebagai penetapan ketetapan kekal (*decrees of God*), sedangkan dalam Patristik Ortodoks, ini dirumuskan sebagai *Logoi* Penciptaan di dalam Sang *Logos*."
            ]
          },
          {
            "text": "**3. Inisiatif Mutlak Rahmat Allah:**",
            "items": [
              "Kedua tradisi menolak paham Pelagianisme (pandangan bahwa manusia dapat menyelamatkan dirinya sendiri tanpa Allah). Keselamatan selalu dimulai dari inisiatif kasih karunia Allah yang terlebih dahulu memanggil manusia."
            ]
          }
        ]
      },
      {
        "heading": "II. Titik Perbedaan Mendasar (*Contrasting Differences*)",
        "intro": "Meskipun ada kesamaan di atas, pemaknaan Patristik mengenai *Logoi* dan penciptaan manusia **berseberangan secara diametris dengan 5 Poin TULIP Calvinisme** (diputuskan dalam *Canons of Dort* 1618–1619):",
        "table": {
          "head": [
            "Doktrin TULIP Calvinisme",
            "Antropologi Patristik Ortodoks"
          ],
          "rows": [
            [
              "**T** – *Total Depravity* (Kerusakan Total)",
              "*Imago Dei* Terluka, Bebas Merespons"
            ],
            [
              "**U** – *Unconditional Election* (Tanpa Syarat)",
              "*Logoi* Penciptaan & Sinergi"
            ],
            [
              "**L** – *Limited Atonement* (Penebusan Terbatas)",
              "Penebusan Kosmis Universal"
            ],
            [
              "**I** – *Irresistible Grace* (Tak Terlawan)",
              "Rahmat Dialogis & Kehendak Bebas"
            ],
            [
              "**P** – *Perseverance of Saints* (Pasti Selamat)",
              "Kemungkinan Murtad / Perjuangan (*Nepsis*)"
            ]
          ]
        }
      },
      {
        "heading": "Kupas Ajaran TULIP yang Tidak Alkitabiah",
        "items": [
          {
            "text": "**U – *Unconditional Election* (Pemilihan Tanpa Syarat) vs. *Logoi* & Sinergi**",
            "items": [
              "**Calvinisme (TULIP):** Mengajarkan Predestinasi Ganda (*Double Predestination*). Sebelum dunia dijadikan, Allah menulis dua daftar kaku: siapa yang dipilih selamat (*elect*) dan siapa yang ditentukan binasa (*reprobate*), tanpa memedulikan kehendak atau respons manusia.",
              "**Patristik Ortodoks:** Santo Maksimus Pengaku Iman menjelaskan bahwa *Logoi* bukanlah takdir fatalistik atau penetapan mekanis. *Logoi* adalah cetak biru panggilan ilahi (*vocation*) bagi potensi kebaikan tertinggi manusia. Keberhasilan rancangan ini membutuhkan **Sinergi** (kerjasama antara rahmat Allah 100% dan kehendak bebas manusia 100%)."
            ]
          },
          {
            "text": "**T – *Total Depravity* (Kerusakan Total) vs. *Imago Dei* yang Terluka**",
            "items": [
              "**Calvinisme (TULIP):** Menyatakan bahwa akibat kejatuhan Adam, kehendak bebas manusia musnah/hancur total (*Total Depravity*) sehingga manusia sama sekali tidak mampu memilih Allah atau merespons kebaikan.",
              "**Patristik Ortodoks:** Bapa-Bapa Gereja (seperti St. Basil Agung, St. Gregorius dari Nyssa, dan St. Markus sang Rahib) menegaskan bahwa akibat kejatuhan Adam, manusia mewarisi kerusakan dan kematian fisik (*ancestral mortality and corruption*). Namun, Gambar Allah (*Imago Dei*) dan kehendak bebas (*autexousion*) manusia tidak hilang, melainkan hanya terluka/lemah. Manusia tetap memiliki daya pilih sukarela untuk menerima atau menolak rahmat Allah."
            ]
          },
          {
            "text": "**I – *Irresistible Grace* (Rahmat Tak Terlawan) vs. Kebebasan yang Dihormati**",
            "items": [
              "**Calvinisme (TULIP):** Mengajarkan Monergisme—ketika Allah memilih seseorang, rahmat-Nya bekerja secara sepihak dan tidak dapat ditolak (*irresistible*). Manusia tidak memiliki pilihan selain diselamatkan.",
              "**Patristik Ortodoks:** Allah tidak pernah mendobrak atau menghapus kehendak bebas manusia seperti robot. Sebagaimana ditunjukkan dalam peristiwa Anunsiasi Maria, Allah meminta persetujuan manusia (*fiat mihi*). Rahmat Allah bersifat ajakan kasih yang dapat ditolak oleh kebebasan manusia."
            ]
          },
          {
            "text": "**L – *Limited Atonement* & P – *Perseverance of the Saints***",
            "items": [
              "**Calvinisme (TULIP):** Mengajarkan bahwa pengorbanan Kristus di kayu salib hanya disediakan secara khusus bagi orang-orang pilihan (*Limited Atonement*), dan mereka yang telah dipilih tidak akan pernah bisa jatuh dari keselamatan (*Perseverance of the Saints*).",
              "**Patristik Ortodoks:** Menolak kedua poin ini. Kristus mati dan bangkit untuk memulihkan seluruh kosmos dan menawarkan keselamatan kepada seluruh umat manusia tanpa terkecuali (1 Timotius 2:4, Yohanes 3:16). Namun, karena kehendak bebas tetap ada, seorang beriman bisa membuang kasih karunia dan murtad jika ia tidak menjaga imannya melalui pertobatan dan kewaspadaan rohani (*Nepsis*)."
            ]
          }
        ],
        "outro": "Meskipun Patristik Ortodoks dan Calvinisme sama-sama menolak Origenisme (pra-eksistensi jiwa) dan sama-sama mengakui kedaulatan rencana Allah sebelum waktu ada, **keduanya bertolak belakang di dalam melihat bagaimana rencana itu bekerja**. Calvinisme melihat rencana Allah sebagai **predestinasi sepihak dan kaku (Monergisme)**, sedangkan Tradisi Patristik melihat *Logoi* Allah sebagai **panggilan relasional yang mengundang kehendak bebas manusia dalam kerangka Sinergi kasih**."
      },
      {
        "heading": "Ringkasan Pemetaan Teologis",
        "table": {
          "head": [
            "Dimensi",
            "Sisi Allah (Di Dalam IDE / Kekekalan)",
            "Sisi Manusia (Di Dalam Waktu & Sejarah)"
          ],
          "rows": [
            [
              "**Status Keberadaan**",
              "**IYA:** Seluruh individu manusia sudah ada secara **simultan** dalam pikiran & kehendak kekal Allah (*Logoi*).",
              "Manusia dipanggil dari ketiadaan murni (*ex nihilo*) menjadi wujud jiwa dan tubuh secara serentak (*simultaneous*) pada momen kelahirannya di sejarah."
            ],
            [
              "**Sifat Rancangan**",
              "Rancangan kebaikan, tujuan mulia, dan panggilan pengilahian (*Theosis*) bagi setiap pribadi.",
              "**Bukan Takdir Kaku:** Memerlukan keputusan kehendak bebas (*autexousion*) dan pilihan hidup (*tropos*) manusia untuk merespons Allah."
            ],
            [
              "**Hasil Akhir**",
              "Ditawarkan secara universal kepada semua orang tanpa terkecuali (*Antecedent Will*).",
              "Ditetapkan melalui dialog kasih dan kerjasama (*sinergi*) antara rahmat Allah dan ketaatan sukarela manusia."
            ]
          ]
        }
      },
      {
        "heading": "Kesimpulan",
        "intro": "**Seluruh manusia diciptakan bersamaan di dalam IDE ALLAH (*Logoi*).** Namun, ide tersebut bukanlah takdir mekanis yang membelenggu. Anda ada di dunia ini karena Allah telah mengenal dan mencintai cetak biru (*logos*) diri Anda sejak kekekalan, dan di dalam waktu, Ia memberikan Anda anugerah kehendak bebas untuk mengukir perjalanan kasih bersama-Nya menuju keabadian lewat KESALEHAN (**Eusebeia**) Anda."
      }
    ],
    "versesTitle": "Ayat Referensi",
    "verseGroups": [
      {
        "title": "Ayat-Ayat *Logos* Kodrat: Cetak Biru & Panggilan Ilahi bagi Manusia",
        "intro": "*Logos* merujuk pada ide, maksud, dan potensi kebaikan tertinggi yang dirancangkan Allah bagi manusia sejak sebelum dunia dijadikan (yaitu untuk mencapai *Theosis* / penyatuan dengan Allah).",
        "verses": [
          {
            "ref": "1 Timotius 2:4",
            "note": "Panggilan Universal Keselamatan",
            "text": "\"Dia menghendaki supaya **semua orang diselamatkan** dan memperoleh pengetahuan akan kebenaran.\"",
            "commentLabel": "Analisis:",
            "comment": "*Logos* atau kehendak dasar Allah (*antecedent will*) bagi seluruh manusia adalah keselamatan universal. Allah tidak pernah merancangkan penciptaan manusia untuk ditentukan masuk kebinasaan (*reprobation*) secara sepihak."
          },
          {
            "ref": "2 Petrus 1:4",
            "note": "Tujuan Utama Cetak Biru Manusia — *Theosis*",
            "text": "\"...supaya olehnya kamu boleh **mengambil bagian dalam kodrat ilahi** [*partakers of the divine nature*], dan luput dari kepenuhan hawa nafsu duniawi.\"",
            "commentLabel": "Analisis:",
            "comment": "Inilah *logos* atau target penciptaan manusia: bukan sekadar menjadi makhluk moral yang baik, melainkan berpartisipasi dalam Energi Ilahi Allah (*Theosis*)."
          },
          {
            "ref": "Efesus 1:4",
            "note": "Rancangan Kekal Sebelum Waktu",
            "text": "\"Sebab di dalam Dia Allah telah memilih kita **sebelum dunia dijadikan**, supaya kita kudus dan tak bercacat di hadapan-Nya.\"",
            "commentLabel": "Analisis:",
            "comment": "Sebelum ruang dan waktu diwujudkan, rancangan dan cetak biru (*logoi*) keberadaan manusia di dalam Kristus sudah sempurna di dalam kehendak Allah."
          }
        ]
      },
      {
        "title": "Ayat-Ayat *Tropos* & Kehendak Bebas (*Autexousion*): Manusia Bukan Robot",
        "intro": "*Tropos* dan *Autexousion* adalah kebebasan berdaulat yang diberikan Allah kepada manusia untuk memilih merespons panggilan ilahi tersebut atau menolaknya.",
        "verses": [
          {
            "ref": "Sirakh 15:14–17",
            "note": "Teks Deuterokanonika",
            "text": "\"Pada awal mulanya Allah menjadikan manusia dan menyerahkannya ke tangan **kehendaknya sendiri** (*autexousion*). Jika engkau mau, engkau dapat menepati hukum-Nya... Di hadapan manusia dihadapkan kehidupan dan kematian, apa yang disukainya akan diberikan kepadanya.\"",
            "commentLabel": "Analisis Patristik:",
            "comment": "Para Bapa Gereja (seperti Faustus dari Riez) mengutip teks ini untuk menegaskan bahwa Allah sengaja menanamkan benih kehendak bebas (*free will*) agar ketaatan manusia bernilai kasih sejati, bukan paksaan."
          },
          {
            "ref": "Wahyu 3:20",
            "note": "Kristus Mengetuk, Manusia Membuka",
            "text": "\"Lihat, Aku berdiri di muka pintu dan **mengetok**; jikalau ada orang yang mendengar suara-Ku dan **membukakan pintu**, Aku akan masuk mendapatkannya...\"",
            "commentLabel": "Analisis:",
            "comment": "Kristus tidak mendobrak pintu hati manusia secara paksa (*irresistible grace*). Pintu hati manusia hanya memiliki gagang dari dalam; manusia harus menggerakkan kehendaknya (*tropos*) secara sukarela untuk membukanya."
          },
          {
            "ref": "Matius 23:37",
            "note": "Kehendak Bebas yang Menolak Rahmat",
            "text": "\"Yerusalem, Yerusalem... berkali-kali Aku **rindu mengumpulkan anak-anakmu**... tetapi **kamu tidak mau**.\"",
            "commentLabel": "Analisis:",
            "comment": "Ayat ini secara telak membantah predestinasi fatalistik. Kehendak Allah adalah mengumpulkan dan menyelamatkan, namun manusia menggunakan kehendak bebasnya (*autexousion*) untuk berkata \"tidak mau\"."
          },
          {
            "ref": "Ulangan 30:19",
            "note": "Pilihan Eksistensial",
            "text": "\"...Aku menghadapkan kepadamu kehidupan dan kematian, berkat dan kutuk. **Pilihlah kehidupan**, supaya engkau hidup, baik engkau maupun keturunanmu.\""
          }
        ]
      },
      {
        "title": "Ayat-Ayat Sinergi: Kerjasama Rahmat Allah & Kehendak Manusia",
        "intro": "Keselamatan adalah perpaduan 100% Rahmat Allah (sumber daya dan pengampunan) dan 100% Kehendak Manusia (respons dan usaha ketaatan).",
        "verses": [
          {
            "ref": "Filipi 2:12–13",
            "note": "Teks Jangkar Sinergi",
            "text": "\"...tetaplah **kerjakan keselamatanmu** dengan takut dan gentar [*usaha manusia*], karena **Allahlah yang mengerjakan di dalam kamu** baik kemauan maupun pekerjaan menurut kerelaan-Nya [*rahmat Allah*].\"",
            "commentLabel": "Analisis Patristik:",
            "comment": "Rasul Paulus tidak membenturkan usaha manusia dengan rahmat Allah. Kehendak Allah memberi Energi (*energōn*) dan dorongan, tetapi manusia wajib mengaktualisasikan (*katergazesthe*) rahmat tersebut di dalam perjuangan hidup sehari-hari."
          },
          {
            "ref": "1 Korintus 3:9",
            "note": "Manusia sebagai Kawan Kerja Allah",
            "text": "\"Karena kami adalah **kawan kerja Allah** [*synergoi Theou*]; kamu adalah ladang Allah, bangunan Allah.\"",
            "commentLabel": "Analisis:",
            "comment": "Kata Yunani *Synergoi* secara harfiah berarti \"rekan kerja bersama\" atau Sinergi."
          },
          {
            "ref": "Yakobus 2:22, 26",
            "note": "Iman dan Perbuatan Berpadu",
            "text": "\"Kamu lihat, bahwa **iman bekerja sama dengan perbuatan-perbuatan** dan oleh perbuatan-perbuatan itu iman menjadi sempurna... Sebab seperti tubuh tanpa roh adalah mati, demikian pulalah **iman tanpa perbuatan-perbuatan adalah mati**.\""
          },
          {
            "ref": "Yohanes 15:5",
            "note": "Kebergantungan Mutlak pada Rahmat",
            "text": "\"Akulah pokok anggur dan kamulah ranting-rantingnya... sebab **di luar Aku kamu tidak dapat berbuat apa-apa**.\"",
            "commentLabel": "Analisis:",
            "comment": "Sinergi menolak Pelagianisme. Manusia tidak bisa berbuah tanpa Pokok Anggur (Kristus), tetapi ranting harus memilih untuk tetap bersatu sukarela di dalam Pokok Anggur tersebut."
          }
        ]
      },
      {
        "title": "Ayat-Ayat Penyelarasan Kehendak (*Dyothelitism* & Teladan Kristus)",
        "intro": "Bagaimana manusia melatih *tropos*-nya agar selaras kembali dengan *logos* penciptaan? Melalui penyelarasan kehendak seperti yang diteladani oleh Kristus di Getsemani.",
        "verses": [
          {
            "ref": "Matius 26:39",
            "note": "Puncak Penyelarasan Kehendak",
            "text": "\"Ya Bapa-Ku... jikalau sekiranya mungkin, biarlah cawan ini lalu dari pada-Ku, tetapi **janganlah seperti yang Kukehendaki, melainkan seperti yang Engkau kehendaki**.\"",
            "commentLabel": "Analisis Kristologi (Konsili Konstantinopel III):",
            "comment": "Kristus memiliki dua kehendak (*Dyothelitism*): Kehendak Ilahi dan Kehendak Manusia. Di Getsemani, Kehendak Manusia Yesus secara sukarela menundukkan diri selaras dengan Kehendak Ilahi untuk menyembuhkan ketidaktaatan Adam pertama."
          },
          {
            "ref": "2 Korintus 10:5",
            "note": "Menawan Pikiran & Kehendak",
            "text": "\"Kami mematahkan setiap siasat orang... Kami **menawan segala pikiran** [*logismoi*] dan menaklukkannya kepada Kristus.\""
          }
        ]
      }
    ],
    /* lanjutan setelah ayat-ayat: Hamartiologi / Dosa */
    "afterTitle": "Hamartiologi / Dosa",
    "sectionsAfter": [
      {
        "intro": "***Hamartia*** (bahasa Yunani: **ἁμαρτία**) memiliki kedalaman makna ontologis dan medis yang sangat berbeda dari pendekatan yuridis/hukum Barat modern. Dosa tidak dipandang sebagai sekadar \"pelanggaran aturan\" yang menuntut hukuman, melainkan sebagai **penyakit rohani** dan pergeseran manusia dari tujuan hakiki penciptaannya."
      },
      {
        "heading": "Etimologi dan Makna Hakiki *Hamartia*",
        "items": [
          "**Makna Harfiah (*To Miss the Mark*):** Secara etimologis Yunani Kuno, kata *Hamartia* berasal dari dunia pemanahan, yang berarti \"meleset dari sasaran\" (*to miss the mark*) atau gagal mencapai target.",
          "**Konteks Teologis:** Sasaran utama (target) penciptaan manusia adalah untuk hidup selaras dengan Gambar Allah (*Imago Dei*) dan bertumbuh menuju Rupa Allah melalui pengilahian (*Theosis*). Ketika manusia melakukan *Hamartia*, ia bukannya mencapai puncak kemuliaan tersebut, melainkan meleset dan jatuh pendek dari kehendak serta rancangan ilahi Allah."
        ]
      },
      {
        "heading": "Ontologi Dosa: Penyakit Rohani vs Pelanggaran Hukum",
        "intro": "Dosa dipahami sebagai parasit spiritual. Kejahatan dan dosa tidak memiliki keberadaan ontologis yang mandiri, melainkan merupakan **distorsi atau salah guna (*misuse*) atas fakultas-fakultas alami jiwa** yang pada dasarnya diciptakan baik oleh Allah.",
        "table": {
          "head": [
            "Dimensi",
            "Perspektif Hukum Barat (Yuridis)",
            "Perspektif Patristik Ortodoks (Medis)"
          ],
          "rows": [
            [
              "Hakikat Dosa",
              "Transaksi atau pelanggaran hukum di ruang pengadilan.",
              "**Penyakit rohani** (*spiritual illness*) dan pembusukan jiwa."
            ],
            [
              "Status Manusia",
              "Terdakwa yang berdosa dan terancam hukuman legalistik.",
              "**Orang sakit** yang terluka oleh kejahatan dan terpisah dari Sang Sumber Hidup."
            ],
            [
              "Fungsi Gereja",
              "Tempat keputusan status pengadilan.",
              "**Rumah Sakit Rohani** (*Spiritual Hospital*) tempat pengobatan jiwa."
            ],
            [
              "Peran Allah",
              "Hakim kejam yang mencari kesalahan untuk menghukum.",
              "**Tabib Agung** (*Divine Physician*) yang rindu menyembuhkan dan menyelamatkan manusia."
            ]
          ]
        }
      },
      {
        "heading": "Dosa Leluhur (*Ancestral Sin*) vs Dosa Waris",
        "intro": "Teologi Ortodoks menolak doktrin Barat tentang \"Rasa Bersalah Total Warisan Adam\" (*Original Sin / Guilt*):",
        "items": [
          "**Tidak Mewarisi Rasa Bersalah Adam:** Manusia modern tidak mewarisi kesalahan atau dosa personal Adam di Taman Eden, karena kesalahan personal hanya ditanggung oleh orang yang melakukannya.",
          "**Mewarisi Akibat Kejatuhan (*Ancestral Corruption & Mortality*):** Yang diwarisi manusia dari kejatuhan Adam adalah akibatnya—yaitu kerusakan kodrat, kefanaan/kematian fisik (*mortality*), serta kecenderungan dan kerentanan batin untuk berbuat dosa."
        ]
      },
      {
        "heading": "Tahapan Psikologi Terjadinya Dosa (Dari *Logismoi* ke *Pathos*)",
        "intro": "Para Bapa Asketis (seperti St. Mark the Ascetic dan St. Yohanes dari Damaskus) merumuskan urutan psikologis bagaimana sebuah gagasan berubah menjadi ikatan dosa:",
        "flowAt": "mid",
        "flowSteps": true,
        "flow": [
          {
            "label": "1. *Prosvoli*",
            "text": "Bisikan / Umpan",
            "sub": "(Belum Berdosa)"
          },
          [
            ""
          ],
          {
            "label": "2. *Synduasmos*",
            "text": "Mulai Menikmati",
            "sub": "(Perpaduan Pikiran)"
          },
          [
            ""
          ],
          {
            "label": "3. *Synkatathesis*",
            "text": "Persetujuan Hati",
            "sub": "(Ketaatan Kehendak)"
          },
          [
            ""
          ],
          {
            "label": "4. *Energeia*",
            "text": "Tindakan Dosa",
            "sub": "(Perbuatan Fisik)"
          },
          [
            ""
          ],
          {
            "label": "5. *Pathos*",
            "text": "Keterikatan Hawa Nafsu",
            "sub": "(Keterbudakan Jiwa)"
          }
        ],
        "items": [
          "**Provokasi / Umpan (*Prosvoli*):** Kemunculan awal bayangan pikiran (*logismoi*) yang dibisikkan oleh Iblis di luar kehendak batin. Pada tahap ini, hal tersebut belum dianggap dosa karena belum ada keterlibatan kehendak bebas manusia.",
          "**Perpaduan / Kompromi (*Synduasmos*):** Manusia mulai melakukan dialog batin dan memikirkan atau merenungkan bayangan dosa tersebut.",
          "**Persetujuan (*Synkatathesis*):** Akal budi dan kehendak mengambil keputusan tegas untuk menyetujui dan berencana mengaktualisasikan gagasan tersebut. Di titik inilah dosa batin telah terjadi.",
          "**Tindakan (*Energeia / Act*):** Diwujudkannya persetujuan batin tersebut ke dalam perbuatan fisik yang nyata.",
          "**Keterikatan Hawa Nafsu (*Pathos / Passion*):** Ketika perbuatan dosa dilakukan berulang kali, ia berakar menjadi ketergantungan atau hawa nafsu (*passion*) yang membelenggu dan memperbudak kebebasan jiwa."
        ]
      },
      {
        "heading": "Dosa Iblis vs Dosa Manusia",
        "intro": "Dalam teologi Patristik dan Dogmatika Ortodoks, terdapat perbedaan mendasar antara **dosa dan kejatuhan Iblis** dengan **dosa dan kejatuhan manusia**. Perbedaan ini menentukan mengapa Iblis tidak dapat diampuni dan telah menetap dalam kebinasaan kekal, sedangkan manusia diberikan pintu pertobatan (*metanoia*) serta jalan penebusan melalui Inkarnasi Kristus."
      },
      {
        "heading": "Inisiatif dan Sumber Dosa (Internal vs Eksternal)",
        "items": [
          {
            "text": "**Dosa Iblis (Pemberontakan Murni Tanpa Pengaruh Luar):**",
            "items": [
              "Iblis (Lucifer) diciptakan sebagai malaikat yang sangat mulia di tempat tinggi. Kejatuhannya bukan disebabkan oleh adanya godaan dari pihak ketiga, melainkan murni bersumber dari kesombongan radikal (*colossal pride*) dan iri hati (*envy*) di dalam batinnya sendiri.",
              "Ia secara sukarela dan tanpa hasutan memusatkan kehendaknya untuk menentang Allah dan menuntut untuk menyamai Yang Mahatinggi. Oleh karena itu, Iblis adalah pencipta dan sumber utama kejahatan (*father of lies*)."
            ]
          },
          {
            "text": "**Dosa Manusia (Kejatuhan Akibat Tipu Daya dan Perdayaan Luar):**",
            "items": [
              "Manusia pertama (Adam dan Hawa) tidak jatuh karena inisiatif murni membenci Allah dari dalam dirinya. Manusia jatuh karena diperdaya, dibohongi, dan dihasut oleh tipu muslihat si Ular (Iblis).",
              "Kehendak manusia terseret oleh persetujuan terhadap pengaruh kehendak asing (*alien will*) yang menawarkan janji palsu bahwa manusia dapat \"menjadi seperti Allah\". Manusia bertindak karena kecerobohan dan kebodohan pikiran yang terkecoh, bukan karena kebencian murni kepada Sang Pencipta."
            ]
          }
        ]
      },
      {
        "heading": "Status Kodrat dan Tingkat Kesadaran Spiritual",
        "items": [
          {
            "text": "**Iblis (Makhluk Roh Murni Tanpa Fisik):**",
            "items": [
              "Sebagai entitas rohani murni (*bodiless spirit*), Iblis memiliki pengetahuan spiritual yang penuh dan tidak terhalang oleh keterbatasan fisik.",
              "Keputusan Iblis untuk memberontak diambil dalam kondisi terang pengetahuan murni, sehingga pilihannya untuk menolak rahmat Allah bersifat mutlak, final, dan tidak dapat diubah (*eternally fixed in enmity*)."
            ]
          },
          {
            "text": "**Manusia (Makhluk Dwitunggal Jiwa dan Tubuh yang Fana):**",
            "items": [
              "Manusia diciptakan di dalam ruang dan waktu dengan kodrat yang memiliki keterbatasan persepsi indrawi.",
              "Ketika manusia tergoda, kecenderungan jiwanya silau oleh penampakan kebaikan palsu. Kerentanan kodrat fisik dan kepolosan batin manusia membuat kejatuhannya dipandang sebagai luka atau penyakit rohani yang membutuhkan penyembuhan."
            ]
          }
        ]
      },
      {
        "heading": "Implikasi Soteriologis: Mengapa Manusia Diampuni sedangkan Iblis Tidak?",
        "items": [
          {
            "text": "**Kebinasaan Kekal Iblis (*No Repentance for Demons*):**",
            "items": [
              "Karena Iblis adalah penyesat itu sendiri yang memilih kegelapan secara sadar dan tidak pernah menyesali tindakannya, ia tidak memiliki kapasitas batin untuk bertobat.",
              "Iblis telah menetapkan kehendaknya ke arah ketidakberadaan (*non-being*) dan kebencian mutlak kepada Allah, sehingga tempatnya terikat pada hukuman api kekal yang disiapkan bagi Iblis dan malaikat-malaikatnya."
            ]
          },
          {
            "text": "**Belas Kasihan dan Restorasi Manusia (*Redemption in Christ*):**",
            "items": [
              "Allah dalam keadilan dan kasih-Nya memandang manusia sebagai ciptaan-Nya yang terluka akibat tipu daya si penyesat.",
              "Oleh karena itu, Allah tidak membiarkan manusia binasa dalam kematian. Melalui Inkarnasi Sang *Logos* (Yesus Kristus), Allah Bapa mengutus Anak-Nya untuk mengambil kodrat manusia, menipu kembali Sang Penipu (Iblis) melalui kayu salib, mematahkan sengat maut, dan membukakan pintu pertobatan (*metanoia*) serta pengilahian (*Theosis*) bagi seluruh umat manusia."
            ]
          }
        ]
      },
      {
        "heading": "Pemulihan dan Penyembuhan (*Metanoia*, Sakramen, & *Nepsis*)",
        "intro": "Karena dosa dipahami sebagai penyakit, jalan keluarnya bukanlah sekadar pengampunan formal, melainkan proses penyembuhan yang aktif:",
        "items": [
          "**Pertobatan Sejati (*Metanoia*):** Kata *Metanoia* berarti \"perubahan akal budi dan orientasi jiwa\" (*transformation of the mind*), bukan sekadar penyesalan emosional sesaat.",
          "**Pengobatan Melalui Sakramen:** Sakramen Pengakuan Dosa disediakan Gereja sebagai wadah terapeutik untuk memoles jiwa yang terluka dan memulihkan ikatan persekutuan dengan Kristus.",
          "**Kewaspadaan Batin (*Nepsis*):** Praktik penjagaan akal budi (*nous*) dan kedisiplinan doa (seperti Doa Yesus) untuk memotong *logismoi* sejak tahap *prosvoli* sebelum berkembang menjadi hawa nafsu.",
          "**Tujuan Akhir (*Theosis*):** Melalui penyucian hawa nafsu (*katharsis*), rahmat Allah memulihkan manusia sehingga ia kembali berpartisipasi dalam Energi Ilahi Allah (*Theosis*)."
        ]
      },
      {
        "heading": "Tabel Komparatif Perbedaan Dosa Iblis vs Dosa Manusia",
        "table": {
          "head": [
            "Dimensi Perbandingan",
            "Dosa Iblis (Dosa Kekal)",
            "Dosa Manusia (Dosa Terperdaya)"
          ],
          "rows": [
            [
              "Penyebab Utama",
              "Kesombongan murni (*colossal pride*) dan iri hati tanpa ada pencoba luar.",
              "Penyesatan, tipu muslihat, dan janji palsu dari si Ular/Iblis."
            ],
            [
              "Kondisi Pengetahuan",
              "Dilakukan dalam kesadaran rohani murni yang penuh.",
              "Dilakukan dalam kecerobohan dan kebutaan pikiran yang terkecoh."
            ],
            [
              "Status Penyesatan",
              "Iblis adalah **Bapa Penyesat** (*The Deceiver*).",
              "Manusia adalah **Korban Penyesatan** (*The Deceived*)."
            ],
            [
              "Kapasitas Pertobatan",
              "Menolak rahmat secara menetap; tidak ada pertobatan.",
              "Diberikan rahmat pertobatan (*metanoia*) dan pemulihan."
            ],
            [
              "Hasil Soteriologis",
              "Dihukum kekal di tempat siksaan yang disiapkan baginya.",
              "Ditebus oleh Kristus dan diangkat menuju pengilahian (*Theosis*)."
            ]
          ]
        }
      },
      {
        "heading": "Kesimpulan",
        "intro": "Iblis jatuh karena **pemberontakan murni dari dalam batinnya** yang ingin menjadi Allah tanpa Allah, sehingga dosanya menetap secara kekal. Sebaliknya, manusia jatuh karena **diperdaya oleh muslihat Iblis**. Karena belas kasihan-Nya terhadap manusia yang terperdaya, Allah berinkarnasi dalam Yesus Kristus untuk mematahkan belenggu Iblis dan memulihkan manusia kembali kepada persekutuan kekal.",
        "outro": "*Hamartia* adalah kenyataan bahwa manusia telah **meleset dari sasaran mulia pengilahian (*Theosis*)** dan menderita luka rohani akibat keterasingan dari Allah. Namun melalui Tabib Agung Yesus Kristus, *Hamartia* disembuhkan melalui pertobatan sejati (*metanoia*), persekutuan sakramental, dan perjuangan kewaspadaan batin (*nepsis*)."
      }
    ]
  },

  /* Story 5 (Luapan Kasih) — Excess of Love */
  'cahaya-berkumpul': {
    "title": "Excess of Love",
    "sections": [
      {
        "heading": "Hakikat *Excess of Love*: Allah Adalah Kasih (Ontologi Relasi)",
        "intro": "Dalam pandangan teologi Ortodoks, kasih bukanlah sekadar emosi pasif atau reaksi Allah terhadap ciptaan, melainkan hakikat keberadaan (*arché*) Allah itu sendiri.",
        "items": [
          "**1 Yohanes 4:8:** \"Allah adalah kasih\"—sejak kekekalan sebelum alam semesta ada, persekutuan Tritunggal (Bapa, Anak, dan Roh Kudus) telah hidup dalam tarian kasih yang sempurna (*Perichoresis*).",
          "**Kebebasan Kasih:** Allah tidak membutuhkan alam semesta untuk merasa utuh atau bahagia. Oleh karena itu, ketika Allah bertindak keluar ke dalam sejarah, tindakan itu merupakan murni *Excess of Love*—tumpahan sukarela dari kasih-Nya yang tidak terbatas."
        ]
      },
      {
        "heading": "Dimensi Kosmologis: *Excess of Love* dalam *Creatio ex Nihilo*",
        "intro": "Mengapa Allah menciptakan alam semesta dari ketiadaan (*creatio ex nihilo*)? **Santo Gregorius dari Nyssa** memberikan jawaban langsung dalam karyanya *Catechetical Discourse*:",
        "quote": "\"Allah Sang Logos, Hikmat, dan Kuasa, membentuk asal-usul makhluk hidup seperti manusia bukan karena didorong oleh suatu keharusan/kebutuhan, melainkan karena **limpahan kasih** (*out of an excess of love / hyperbole tes agapes*). Sebab adalah perlu bahwa Terang tidak tetap tak terlihat, kemuliaan-Nya tidak tanpa saksi, dan kebaikan-Nya tidak tanpa dinikmati...\"",
        "items": [
          "**Menyediakan Ruang Luar:** Melalui *Creatio ex Nihilo*, *Excess of Love* ini memanggil wujud yang sama sekali baru dari ketiadaan murni. Meskipun ada jurang ontologis (*diastema*) yang sangat jauh antara kodrat Allah yang Tak Tercipta dan kodrat ciptaan yang Tercipta, jurang alamiah tersebut dijembatani dan dirangkum oleh kasih ilahi yang tak terukur ini."
        ]
      },
      {
        "heading": "Dimensi Inkarnasional: *Ekstasis* dan *Kenosis* Sang Logos",
        "intro": "Bagaimana *Excess of Love* bekerja saat manusia jatuh ke dalam dosa? Bapa Gereja seperti **Santo Dionysius Areopagita** dan **Santo Maksimus Pengaku Iman** (*Ambiguum* 71) menjelaskan dinamika ini melalui konsep *Ekstasis* (Allah \"keluar\" dari diri-Nya):",
        "items": [
          {
            "text": "**Kehadiran Ekstatik:**",
            "quote": "\"Sang Logos, dalam **kelimpahan kasih-Nya yang penuh kerinduan** (*in the overflow of his passionate goodness / erotikes agathotetos*), ditarik keluar dari diri-Nya (*ecstasis*) dalam pemeliharaan-Nya bagi segala sesuatu. Dipikat oleh kebaikan, kasih, dan kerinduan-Nya sendiri, Ia merendahkan diri untuk menembus segala ciptaan...\""
          },
          "**Pengosongan Diri** (*Kenosis*): Limpahan kasih ini mencapai puncaknya ketika Sang Logos menjadi manusia dalam Diri Yesus Kristus. Allah yang Mahatinggi rela mengecilkan diri-Nya dan membungkus kemuliaan-Nya ke dalam daging manusia agar ciptaan tidak hancur oleh kedahsyatan hakikat ilahi-Nya, melainkan dapat dipulihkan."
        ]
      },
      {
        "heading": "Dimensi Mistis dan Asketis: Pengalaman Jiwa dalam *Theosis*",
        "intro": "Dalam kehidupan rohani, *Excess of Love* menjadi daya penggerak utama bagi penyucian batin (*katharsis*) dan pengilahian manusia (*Theosis*):",
        "items": [
          "**Pengalaman Santo Symeon Teolog Baru:** Dalam *Hymns of Divine Eros*, Santo Symeon menggambarkan bagaimana perjumpaan jiwa dengan Terang Ilahi menghadirkan limpahan kasih (*hyperbole tou erotos*) yang membakar hawa nafsu egois, memurnikan *nous* (mata jiwa), dan memenuhi batin dengan ratapan sukacita.",
          "**Kasih yang Berkorban** (*Crucified Love*): Santo Yohanes Krisostomus dan Santo Nikodemos dari Gunung Athos menegaskan bahwa *Excess of Love* yang diterima dari Allah harus memancar keluar dalam bentuk kasih kepada sesama dan musuh. Bapa Gereja menyebut bahwa \"setiap kasih yang besar adalah kasih yang tersalib\" (*crucified love*)—kasih yang rela menderita dan berdoa bagi keselamatan seluruh dunia."
        ]
      },
      {
        "heading": "Rumusan",
        "flow": [
          "Perichoresis (Kasih Kekal Tritunggal)",
          [
            "Excess of Love",
            "Creatio ex Nihilo"
          ],
          "Penciptaan Kosmos",
          [
            "Excess of Love",
            "Kenosis / Inkarnasi"
          ],
          "Penebusan Kristus",
          [
            "Excess of Love",
            "Energi Ilahi"
          ],
          "Theosis"
        ]
      },
      {
        "heading": "Kesimpulan",
        "intro": "**Excess of Love** adalah denyut nadi utama dari seluruh sejarah keselamatan (*Divine Economy*). Alam semesta ada, Kristus berinkarnasi, dan manusia dipanggil menuju kekekalan, murni karena Allah adalah Kasih yang kelimpahan-Nya tak pernah habis untuk dibagikan."
      }
    ]
  },

  /* Story 4 (fase akhir: manusia ilahi & salib) — Penciptaan dari Ketiadaan */
  'ex-nihilo': {
    "title": "Penciptaan dari Ketiadaan",
    "sections": [
      {
        "heading": "Etimologi & Pengertian Dasar",
        "items": [
          "**Ketiadaan Mutlak** (*Out of Absolute Nothingness*): *Creatio ex Nihilo* menegaskan bahwa sebelum penciptaan dimulai, tidak ada materi mentah (*pre-existing matter*), bahan dasar, atau ruang-waktu yang sudah ada secara kekal mendampingi Allah.",
          "**Bukan Pembentukan Bahan Lama:** Berbeda dengan konsep *demiurge* dalam filsafat Yunani kuno (seperti Plato) yang hanya merapikan materi acak yang sudah ada (*formless matter*), Allah menciptakan elemen dan bahan baku fisik itu sendiri dari ketiadaan murni.",
          "**Positing of \"Outside\"** (Penciptaan Ruang Luar): Vladimir Lossky menjelaskan bahwa melalui *Creatio ex Nihilo*, Allah \"menyediakan ruang\" (*makes room*) dengan menghadirkan sebuah realitas baru yang sepenuhnya berada di \"luar\" Allah. Realitas baru ini terpisah dari Allah bukan oleh lokasi/jarak geografis, melainkan oleh perbedaan kodrat/substansi (*ou topō, alla physei*)."
        ]
      },
      {
        "heading": "Pembedaan Patristik Krusial: *Penciptaan* vs *Kelahiran*",
        "intro": "Para Bapa Gereja (seperti **Santo Athanasius Agung**, **Santo Sirilus dari Aleksandria**, dan **Santo Yohanes dari Damaskus**) merumuskan pembedaan dogmatis yang sangat tegas untuk menjaga ketepatan iman:",
        "table": {
          "head": [
            "Dimensi",
            "Kelahiran Sang Anak (*Generation / Begetting*)",
            "Penciptaan Kosmos (*Creation / Creatio*)"
          ],
          "rows": [
            [
              "**Kategori Tindakan**",
              "Tindakan **Kodrat/Esensi Allah** (*kat’ physin / by nature*).",
              "Tindakan **Kehendak Bebas Allah** (*ek boulematos / by will*)."
            ],
            [
              "**Sifat Keberadaan**",
              "**Kekal, tanpa awal, dan sehakikat** (*Homoousios*) dengan Bapa.",
              "**Memiliki awal, kontingen, dan diciptakan dari ketiadaan** (*ex nihilo*)."
            ],
            [
              "**Substansi Hasil**",
              "Sang Anak adalah \"Allah dari Allah\", meluncur dari Esensi Bapa sejak kekekalan.",
              "Alam semesta bersifat \"heterogen\" (berbeda kodrat) dan bukan berasal dari esensi Allah."
            ]
          ]
        }
      },
      {
        "heading": "Peran Sang *Logos* dan *Logoi* Penciptaan (Santo Maksimus Pengaku Iman)",
        "intro": "Bagaimana tindakan *Creatio ex Nihilo* ini berlangsung secara metafisik? Santo Maksimus Pengaku Iman menjelaskan hubungan antara Sang *Logos* dan *Logoi* penciptaan:",
        "items": [
          "**Keberadaan Pra-Tekstual Logoi:** Sebelum dunia diciptakan secara fisik, *logoi*—yaitu rancangan, maksud, cetak biru, dan tujuan ilahi bagi setiap makhluk—telah pre-eksis secara tak tercipta di dalam pikiran dan kehendak Sang *Logos* (Kristus).",
          "**Aktualisasi dari Ketiadaan** (*Ex Nihilo*): Ketika waktu dimulai, Allah memanggil dan mengaktualisasikan *logoi* tersebut dari ketiadaan murni (*ex nihilo*) menjadi wujud fisik/ciptaan nyata.",
          "**Pusat Kesatuan Kosmis:** Sang *Logos* adalah \"Satu\" dan *logoi* adalah \"Banyak\". Setiap ciptaan memiliki *logos*-nya sendiri yang memberi identitas unik, sekaligus menghubungkan ciptaan tersebut kepada Kristus untuk ditarik masuk dalam proses pengilahian (*Theosis*)."
        ]
      },
      {
        "heading": "Dasar Teks Alkitabiah Utama",
        "intro": "Doktrin *Creatio ex Nihilo* ditopang oleh penyataan Kitab Suci:",
        "verses": [
          {
            "ref": "2 Makabe 7:28",
            "note": "Teks Eksplisit Bahasa Yunani",
            "text": "\"Aku memohon kepadamu, anakku, pandanglah langit dan bumi... dan ketahuilah bahwa Allah membuat semuanya itu **bukan dari barang yang sudah ada** (*ek ouk onton / out of nothing*)...\""
          },
          {
            "ref": "Roma 4:17",
            "note": "Panggilan Eksistensial",
            "text": "\"...Allah yang menghidupkan orang mati dan yang **memanggil dengan nama-Nya apa yang tidak ada menjadi ada**.\""
          },
          {
            "ref": "Ibrani 11:3",
            "note": "Realitas Tak Tampak ke Tampak",
            "text": "\"Karena iman kita mengerti, bahwa alam semesta telah dijadikan oleh firman Allah, sehingga apa yang kita lihat telah terjadi **dari apa yang tidak dapat kita lihat**.\""
          },
          {
            "ref": "Yohanes 1:3 & Mazmur 33:6",
            "note": "Tritunggal dalam Penciptaan",
            "text": "\"**Segala sesuatu dijadikan oleh Dia** [*Logos*] dan tanpa Dia tidak ada suatu pun yang telah jadi dari segala yang telah dijadikan.\""
          }
        ]
      },
      {
        "heading": "Implikasi Asketis, Keselamatan, dan Sains Modern",
        "items": [
          {
            "text": "**Ketergantungan Mutlak & Pemeliharaan Kontinu:**",
            "items": [
              "Karena diciptakan dari ketiadaan, alam semesta tidak memiliki daya hidup yang otonom atau mandiri.",
              "Setiap detik keberadaan kosmos ditopang secara aktif oleh Energi Ilahi (*Uncreated Energies*) dan kehendak Allah. Jika Allah menarik Energi-Nya, alam semesta akan runtuh kembali ke dalam ketiadaan."
            ]
          },
          {
            "text": "**Landasan Kehendak Bebas dan Sinergi:**",
            "items": [
              "*Creatio ex Nihilo* menjamin kebebasan ciptaan. Manusia diberi kehendak bebas sejati untuk bekerja sama (*synergy*) dengan rahmat Allah demi mencapai pengilahian (*Theosis*)."
            ]
          },
          {
            "text": "**Keterhubungan dengan Fisika Modern:**",
            "items": [
              "Dalam sains kontemporer (seperti Big Bang dan Fisika Kuantum), disepakati bahwa ruang, waktu, dan materi memiliki titik awal mula bersamaan dari ketiadaan fisik. Ini selaras dengan ajaran Ortodoks bahwa alam semesta tidak bersifat abadi, melainkan memiliki permulaan di dalam waktu (*archē*)."
            ]
          }
        ]
      },
      {
        "heading": "Kesimpulan",
        "intro": "**Creatio ex Nihilo** mengajarkan kita kerendahan hati bahwa keberadaan kita adalah murni **misteri kasih karunia dan kehendak bebas Allah**. Kita dipanggil dari ketiadaan bukan untuk berakhir dalam kebinasaan, melainkan untuk menyatu dengan Sang *Logos* dalam tarian kasih kekal-Nya."
      }
    ]
  },

  /* Story 4 (fase diagram "Overflow of Love") — Monarkhia Sang Bapa */
  monarkhia: {
    title: 'Monarkhia Sang Bapa',
    versesTitle: 'Dasar-dasar Alkitab',
    verseGroups: [
      {
        verses: [
          { ref: '1 Korintus 8:6', text: 'namun bagi kita hanya ada satu Allah saja, yaitu Bapa, yang dari pada-Nya berasal segala sesuatu dan yang untuk Dia kita hidup, dan satu Tuhan saja, yaitu Yesus Kristus, yang oleh-Nya segala sesuatu telah dijadikan dan yang karena Dia kita hidup.' },
          { ref: 'Yohanes 1:14b', text: '…dan kita telah melihat kemuliaan-Nya, yaitu kemuliaan yang diberikan kepada-Nya sebagai Anak Tunggal Bapa, penuh kasih karunia dan kebenaran.' },
          { ref: 'Yohanes 5:26', text: 'Sebab sama seperti Bapa mempunyai hidup dalam diri-Nya sendiri, demikian juga diberikan-Nya Anak mempunyai hidup dalam diri-Nya sendiri.' },
          { ref: 'Yohanes 8:42', text: 'Kata Yesus kepada mereka: "Jikalau Allah adalah Bapamu, kamu akan mengasihi Aku, sebab Aku keluar dan datang dari Allah. Dan Aku datang bukan atas kehendak-Ku sendiri, melainkan Dialah yang mengutus Aku.' },
          { ref: 'Yohanes 14:28', text: 'Kamu telah mendengar, bahwa Aku telah berkata kepadamu: Aku pergi, tetapi Aku datang kembali kepadamu. Sekiranya kamu mengasihi Aku, kamu tentu akan bersukacita karena Aku pergi kepada Bapa-Ku, sebab Bapa lebih besar dari pada Aku.' },
          { ref: 'Ibrani 1:5', text: 'Karena kepada siapakah di antara malaikat-malaikat itu pernah Ia katakan: "Anak-Ku Engkau! Engkau telah Kuperanakkan pada hari ini?" dan "Aku akan menjadi Bapa-Nya, dan Ia akan menjadi Anak-Ku?"' },
          { ref: 'Yohanes 14:26', text: 'tetapi Penghibur, yaitu Roh Kudus, yang akan diutus oleh Bapa dalam nama-Ku, Dialah yang akan mengajarkan segala sesuatu kepadamu dan akan mengingatkan kamu akan semua yang telah Kukatakan kepadamu.' },
          { ref: 'Yohanes 15:26', text: 'Jikalau Penghibur yang akan Kuutus dari Bapa datang, yaitu Roh Kebenaran yang keluar dari Bapa, Ia akan bersaksi tentang Aku.' },
          { ref: 'Yohanes 16:13-15', text: '^[13] Tetapi apabila Ia datang, yaitu Roh Kebenaran, Ia akan memimpin kamu ke dalam seluruh kebenaran; sebab Ia tidak akan berkata-kata dari diri-Nya sendiri, tetapi segala sesuatu yang didengar-Nya itulah yang akan dikatakan-Nya dan Ia akan memberitakan kepadamu hal-hal yang akan datang. ^[14] Ia akan memuliakan Aku, sebab Ia akan memberitakan kepadamu apa yang diterimanya dari pada-Ku. ^[15] Segala sesuatu yang Bapa punya, adalah Aku punya; sebab itu Aku berkata: Ia akan memberitakan kepadamu apa yang diterimanya dari pada-Ku."' },
          { ref: 'Matius 11:27', text: 'Semua telah diserahkan kepada-Ku oleh Bapa-Ku dan tidak seorangpun mengenal Anak selain Bapa, dan tidak seorangpun mengenal Bapa selain Anak dan orang yang kepadanya Anak itu berkenan menyatakannya.' },
          { ref: '1 Korintus 2:11', text: 'Siapa gerangan di antara manusia yang tahu, apa yang terdapat di dalam diri manusia selain roh manusia sendiri yang ada di dalam dia? Demikian pulalah tidak ada orang yang tahu, apa yang terdapat di dalam diri Allah selain Roh Allah.' },
          { ref: 'Ayub 33:4', text: 'Roh Allah telah membuat aku, dan nafas Yang Mahakuasa membuat aku hidup.' },
          { ref: 'Mazmur 33:6', text: 'Oleh firman TUHAN langit telah dijadikan, oleh nafas dari mulut-Nya segala tentaranya.' },
        ],
      },
      {
        title: 'Pengakuan Iman Nicea (Nicea–Konstantinopel, 381) — butir 1, 2 dan 8',
        verses: [
          { ref: 'Butir 1', text: 'Aku percaya kepada satu Allah, Bapa Yang Mahakuasa, Pencipta langit dan bumi, dan segala sesuatu yang kelihatan dan yang tidak kelihatan.' },
          { ref: 'Butir 2', text: 'Dan kepada satu Tuhan, Yesus Kristus, Putra Allah yang Tunggal, yang dilahirkan dari Sang Bapa sebelum segala zaman; Terang dari Terang, Allah Sejati dari Allah Sejati; dilahirkan, bukan dibuat; sehakikat dengan Sang Bapa; yang melalui-Nya segala sesuatu dijadikan.' },
          { ref: 'Butir 8', text: 'Dan kepada Roh Kudus, Tuhan, Pemberi Hidup, yang keluar dari Sang Bapa; yang bersama Sang Bapa dan Sang Putra disembah dan dimuliakan; yang telah berfirman melalui para nabi.' },
        ],
      },
    ],
  },

  'creatio-ex-nihilo': {
    title: 'Penciptaan Kosmos (*Creatio ex Nihilo*) & Penanaman *Logoi*',
    points: [
      '**Memanggil dari Ketiadaan Mutlak:** *Creatio ex Nihilo* menegaskan bahwa sebelum penciptaan dimulai, ' +
        'tidak ada materi awal, bahan mentah, atau ruang-waktu yang sudah ada sebelumnya (*no pre-existing matter*)^[2]. ' +
        'Allah memanggil seluruh kosmos—baik dunia kasat mata (materi) maupun tak kasat mata (alam ruh/malaikat)—' +
        'dari ketiadaan murni menjadi ada.',
      '**Karya Bersama Tritunggal:** Bapa bertindak sebagai penyebab utama (*primordial cause*), Anak/Logos sebagai ' +
        'pelaksana (*operating cause*), dan Roh Kudus sebagai penyempurna (*perfecting cause*).',
      '**Benih *Logoi*:** Sang Logos (Kristus) menanamkan *logoi*—yaitu prinsip, rancangan, dan tujuan ilahi—ke dalam ' +
        'setiap makhluk dan bagian dari alam semesta. *Logoi* ini berfungsi sebagai “kode teologis” yang menjaga ' +
        'identitas unik setiap ciptaan sekaligus menarik seluruh alam semesta menuju persekutuan dengan Allah.',
      'Doktrin ini merupakan fondasi paling mendasar dalam kosmologi Kristen dan teologi Patristik mengenai ' +
        'bagaimana Allah menghadirkan alam semesta.',
      '**Jurang Antara Pencipta dan Ciptaan (*Diastema*):** Bapa Gereja seperti Santo Yohanes dari Damaskus ' +
        'menjelaskan bahwa tindakan penciptaan ini menciptakan sebuah “ruang luar” (*outside of God*). Hal ini ' +
        'menetapkan jurang ontologis yang permanen: Allah adalah **Yang Tidak Diciptakan** (*Uncreated*), sedangkan ' +
        'alam semesta adalah **Yang Diciptakan** (*Created*) dan sama sekali berbeda hakikat-Nya (*non-consubstantial*) dari Allah.',
    ],
    versesTitle: 'Ayat-ayat Referensi',
    verses: [
      {
        ref: '2 Makabe 7:28',
        note: 'Pernyataan Eksplisit Penciptaan dari Ketiadaan',
        text:
          'Aku memohon kepadamu, anakku, pandanglah langit dan bumi dan segala isinya; ketahuilah bahwa Allah ' +
          'membuat semuanya itu bukan dari barang yang sudah ada (*ek ouk onton* / *out of nothing*), dan demikian ' +
          'pulalah bangsa manusia dijadikan.',
        comment: 'Ini adalah ayat Alkitab paling eksplisit yang menggunakan frasa teknis Yunani *ek ouk onton* (*Creatio ex Nihilo*)',
      },
      {
        ref: 'Roma 4:17',
        note: 'Memanggil yang Tidak Ada Menjadi Ada',
        text:
          '…di hadapan Allah yang kepadanya ia percaya, yaitu Allah yang menghidupkan orang mati dan yang ' +
          '**memanggil dengan namanya apa yang tidak ada menjadi ada**.',
      },
      {
        ref: 'Ibrani 11:3',
        note: 'Diciptakan dari yang Tidak Kelihatan',
        text:
          'Karena iman kita mengerti, bahwa alam semesta telah dijadikan oleh firman Allah, sehingga ' +
          '**apa yang kita lihat telah terjadi dari apa yang tidak dapat kita lihat**.',
      },
      {
        ref: 'Yohanes 1:3',
        note: 'Peran Sang Logos dalam Penciptaan Mutlak',
        text: '**Segala sesuatu dijadikan oleh Dia** dan tanpa Dia tidak ada suatu pun yang telah jadi dari segala yang telah dijadikan.',
      },
      {
        ref: 'Kejadian 1:1–3 & Mazmur 33:6, 9',
        note: 'Penciptaan Melalui Perintah Firman',
        text:
          'Pada mulanya **Allah menciptakan langit dan bumi**…\n' +
          'Oleh **firman TUHAN** langit telah dijadikan, oleh nafas dari mulut-Nya segala tentaranya… ' +
          '**Sebab Dia berfirman, maka semuanya jadi; Dia memberi perintah, maka semuanya ada**.',
      },
      {
        ref: 'Wahyu 4:11',
        note: 'Kedaulatan Kehendak Allah dalam Mencipta',
        text:
          'Ya Tuhan dan Allah kami, Engkau layak menerima puji-pujian dan hormat dan kuasa; ' +
          '**sebab Engkau telah menciptakan segala sesuatu; dan karena kehendak-Mu semuanya itu ada dan diciptakan**.',
      },
    ],
  },

  'dunia-kasat-mata': {
    title: 'Penciptaan Dunia Tak Kasat Mata & Dunia Kasat Mata',
    diagram: {
      top: { title: 'Allah Sang Pencipta', sub: 'Uncreated / Tak Tercipta' },
      left: { title: 'Dunia Tak Kasat Mata', lines: ['Sorga / Alam Roh', 'Malaikat & Jiwa'], ref: 'Kolose 1:16' },
      right: { title: 'Dunia Kasat Mata', lines: ['Bumi / Kosmos Fisik', 'Materi, Ruang, Waktu'], ref: 'Roma 1:20' },
      bottom: { title: 'Manusia (Mikrokosmos)', lines: ['Jiwa / *Nous* (Tak Kasat Mata)', 'Tubuh Fisik (Kasat Mata)'] },
    },
    sections: [
      {
        heading: 'Dunia Tak Kasat Mata (*Noetic / Intelligible Realm*)',
        intro:
          'Dunia tak kasat mata mencakup seluruh realitas ciptaan yang bersifat immaterial (tidak berbobot materi padat). ' +
          'Dunia ini diciptakan oleh Allah dari ketiadaan (*creatio ex nihilo*) sebelum atau bersamaan dengan penciptaan alam semesta fisik.',
        items: [
          {
            text: '**Hakikat dan Penghuni Utama**',
            items: [
              '**Malaikat dan Hirarki Surgawi:** Penghuni utama dunia ini adalah bangsa malaikat (termasuk Serafim, Kerubim, ' +
                'Malaikat Agung, dan Benih-Benih Kuasa) serta jiwa manusia.',
              '**Sifat Ciptaan (*Created Incorporeal*):** Berbeda dengan Allah yang mutlak tidak tercipta (*Uncreated*), para malaikat ' +
                'adalah makhluk ciptaan (*created beings*). Meskipun mereka tidak berdaging/bermateri padat seperti manusia, mereka tetap ' +
                'terbatas (*circumscribed*) di hadapan Allah yang tidak terbatas (*incircumscriptible*).',
              '**Akal Budi dan Makanan Spiritual:** Makanan dan sumber kehidupan para malaikat adalah kontemplasi memandang ' +
                'kemuliaan Allah sejauh yang dimungkinkan oleh rahmat-Nya.',
            ],
          },
          {
            text: '**Peran Kosmis Dunia Tak Kasat Mata**',
            items: [
              'Para Bapa Gereja (seperti Origen, St. Basil Agung, dan St. Yohanes dari Damaskus) menjelaskan bahwa Allah menetapkan ' +
                'kuasa-kuasa malaikat untuk melayani dan menopang keteraturan alam semesta.',
              'Ada malaikat yang ditugaskan memelihara elemen-elemen alam (angin, air, api, atmosfer), mengawasi pergerakan ' +
                'benda-benda langit, serta bertindak sebagai malaikat pelindung (*guardian angels*) bagi manusia dan bangsa-bangsa.',
            ],
          },
        ],
      },
      {
        heading: 'Dunia Kasat Mata (*Sensible / Physical Realm*)',
        intro:
          'Dunia kasat mata adalah alam semesta fisik (kosmos) yang terdiri dari materi, ruang, dan waktu—meliputi bintang, ' +
          'planet, bumi, tumbuhan, hewan, dan tubuh fisik manusia.',
        items: [
          {
            text: '**Hakikat Materi**',
            items: [
              'Alam fisik diciptakan sangat baik oleh Allah dan bukanlah sesuatu yang jahat atau tidak suci. Teologi Ortodoks ' +
                'menolak paham Gnostik atau Manikeisme yang memandang materi fisik sebagai penjara bagi jiwa.',
            ],
          },
          {
            text: '**Prinsip *Logoi* Penciptaan (Benih-Benih Ilahi)**',
            items: [
              'Santo Maksimus Pengaku Iman mengajarkan bahwa alam semesta fisik tidak berdiri sebagai materi mati. Di dalam setiap ' +
                'ciptaan fisik, Sang Logos (Kristus) telah menanamkan *logos* (prinsip, tujuan, dan cetak biru ilahi).',
              'Oleh karena itu, dunia fisik memiliki makna sakramental (*sacramental view of creation*): benda-benda materi diciptakan ' +
                'sebagai “papan petunjuk” untuk menuntun akal budi manusia memahami keagungan Penciptanya.',
            ],
          },
        ],
      },
      {
        heading: 'Manusia sebagai Mikrokosmos (Jembatan Penyatupadu)',
        intro:
          'Di mana posisi manusia di antara kedua dunia ini? Manusia diciptakan oleh Allah sebagai puncak ciptaan yang menjadi ' +
          'jembatan ontologis (*mediator*) antara dunia tak kasat mata dan kasat mata.',
        items: [
          {
            text: '**Makhluk Ganda (*Composite Creature*)**',
            items: [
              {
                text: 'Santo Gregorius dari Nazianzus dan St. Symeon Teolog Baru menjelaskan bahwa manusia adalah makhluk ganda (*double living creature*):',
                items: [
                  'Melalui **tubuh fisik**, manusia terikat pada dunia kasat mata (materi dan elemen bumi).',
                  'Melalui **jiwa dan *nous*** (mata jiwa/akal budi rohani), manusia terhubung dengan dunia tak kasat mata (alam immaterial/surgawi).',
                ],
              },
            ],
          },
          {
            text: '**Manusia sebagai Mikrokosmos (Dunia Kecil)**',
            items: ['Manusia dirancang sebagai Mikrokosmos—sebuah miniatur alam semesta yang merangkum seluruh tingkatan ciptaan di dalam dirinya.'],
          },
          {
            text: '**Imamat Kosmik (*Cosmic Priesthood*)**',
            items: [
              'Panggilan utama manusia adalah membawa seluruh alam fisik kasat mata ini, menyucikannya melalui persembahan syukur ' +
                'dan ketaatan, lalu mengarahkannya kembali kepada Sang Pencipta agar seluruh kosmos mengalami pengilahian (*Theosis*).',
            ],
          },
        ],
      },
    ],
    versesTitle: 'Ayat-ayat Referensi',
    verseGroups: [
      {
        verses: [
          {
            ref: 'Kolose 1:15–16',
            note: 'Ayat Landasan Utama',
            text:
              'Ia [Kristus] adalah gambar Allah yang tidak kelihatan, yang sulung, lebih utama dari segala yang diciptakan, karena ' +
              'di dalam Dialah telah diciptakan segala sesuatu, yang ada di sorga dan yang ada di bumi, ' +
              '**yang kelihatan dan yang tidak kelihatan**, baik takhta-takhta, maupun pemerintah-pemerintah, maupun penguasa-penguasa; ' +
              'segala sesuatu diciptakan oleh Dia dan untuk Dia.',
            commentLabel: 'Analisis',
            comment:
              'Rasul Paulus menegaskan bahwa Kristus adalah Pencipta dari kedua ranah tersebut—baik alam semesta fisik (di bumi/kelihatan) ' +
              'maupun alam hirarki spiritual/malaikat (di sorga/tidak kelihatan).',
          },
          {
            ref: '2 Korintus 4:18',
            note: 'Realitas Fana vs. Kekal',
            text:
              'Sebab kami tidak memperhatikan **yang kelihatan**, melainkan **yang tidak kelihatan**, karena yang kelihatan adalah ' +
              '**sementara**, sedangkan yang tidak kelihatan adalah **kekal**.',
            commentLabel: 'Analisis',
            comment:
              'Rasul Paulus membedakan sifat ontologis dari kedua alam: dunia kasat mata bersifat sementara (fana), sedangkan dunia ' +
              'tak kasat mata bersifat abadi (kekal).',
          },
          {
            ref: 'Ibrani 11:3',
            note: 'Penciptaan yang Tampak dari yang Tidak Tampak',
            text:
              'Karena iman kita mengerti, bahwa alam semesta telah dijadikan oleh firman Allah, sehingga ' +
              '**apa yang kita lihat telah terjadi dari apa yang tidak dapat kita lihat**.',
            commentLabel: 'Analisis',
            comment:
              'Ayat ini menunjukkan hubungan sebab-akibat penciptaan (*Creatio ex Nihilo*): realitas kasat mata bermula dan ditopang ' +
              'oleh realitas tak kasat mata melalui Firman Allah.',
          },
        ],
      },
      {
        title: 'Dunia Tak Kasat Mata (*Noetic / Invisible Realm*)',
        verses: [
          {
            ref: 'Efesus 6:12',
            note: 'Realitas Peperangan di Alam Roh',
            text:
              'karena perjuangan kita bukanlah melawan darah dan daging [fisik], melainkan melawan pemerintah-pemerintah, melawan ' +
              'penguasa-penguasa, melawan penghulu-penghulu dunia yang gelap ini, melawan **roh-roh jahat di udara** [tempat-tempat surgawi].',
            commentLabel: 'Analisis',
            comment:
              'Teks ini mengonfirmasi adanya dinamika dan entitas spiritual yang tidak kelihatan oleh mata jasmani, tetapi beroperasi ' +
              'dan berinteraksi dengan dunia manusia.',
          },
          {
            ref: '1 Timotius 6:16',
            note: 'Ketakterlihatan Hakikat Ilahi',
            text:
              'Dialah satu-satunya yang tidak takluk kepada maut, bersemayam dalam terang yang tak terhampiri. Seorang pun tidak ' +
              'pernah melihat Dia dan **memang manusia tidak dapat melihat Dia**…',
          },
          {
            ref: 'Mazmur 103:20',
            note: 'Bangsa Malaikat sebagai Penghuni Tak Kasat Mata',
            text:
              'Pujilah TUHAN, hai malaikat-malaikat-Nya, hai pahlawan-pahlawan perkasa yang melakukan firman-Nya dengan ' +
              'mendengarkan suara firman-Nya.',
          },
        ],
      },
      {
        title: 'Dunia Kasat Mata (*Sensible / Physical Realm*)',
        verses: [
          {
            ref: 'Kejadian 1:1',
            note: 'Dualisme Penciptaan Awal',
            text: 'Pada mulanya Allah menciptakan **langit** [alam ruh/tak kasat mata] dan **bumi** [alam fisik/kasat mata].',
            commentLabel: 'Tafsir Patristik',
            comment:
              'Para Bapa Gereja menafsirkan kata “langit” pada hari pertama sebagai penciptaan dunia tak kasat mata (*noetic realm* / ' +
              'malaikat), sedangkan “bumi” sebagai bakal alam fisik kasat mata.',
          },
          {
            ref: 'Roma 1:20',
            note: 'Dunia Fisik Memancarkan Kebenaran Spiritual',
            text:
              'Sebab **apa yang tidak terwujud dari pada-Allah**, yaitu kekuatan-Nya yang kekal dan keilahian-Nya, dapat dilihat oleh ' +
              'pikiran melalui karya-Nya sejak dunia diciptakan…',
            commentLabel: 'Analisis',
            comment:
              'Dunia kasat mata berfungsi secara sakramental (*theoria* fisik): keindahan dan keteraturan materi diciptakan agar manusia ' +
              'dapat membaca dan menangkap keagungan Pencipta yang tak kelihatan.',
          },
          {
            ref: 'Mazmur 19:1',
            note: 'Cakrawala Fisik Menceritakan Kemuliaan',
            text: '**Langit menceritakan kemuliaan Allah**, dan cakrawala memberitakan pekerjaan tangan-Nya.',
          },
        ],
      },
    ],
  },

  'big-bang': {
    title: 'Sang Firman',
    lead: {
      ref: 'Yohanes 1:1',
      text: 'Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah.',
    },
    points: [
      'Penciptaan alam semesta dilakukan oleh Allah **murni melalui perkataan/Firman-Nya** (*Creatio ex Nihilo* — penciptaan dari ketiadaan).',
      'Allah tidak membutuhkan bahan baku mentah atau alat fisik; cukup dengan kehendak dan ucapan Firman-Nya, maka seluruh ' +
        'kosmos dipanggil dari ketiadaan menjadi ada (Mazmur 33:6, 9).',
    ],
    sections: [
      {
        heading: 'Pengertian dan Makna Asli “Memra” Allah (*Memra d’Adonai / Memra d’YHVH*)',
        intro:
          'Kata **Memra** (bahasa Aramaik: **מֵאמְרָא** / *Mēʾmrā*) berasal dari akar kata kerja Aramaik **אֲמַר** (*’amar* / *’emar*), ' +
          'yang berarti *perkataan*, *firman*, atau *ucapan* (sejajar dengan akar kata Ibrani *’amar*).',
      },
      {
        heading: 'Latar Belakang Sejarah (*Targum* Yahudi)',
        intro:
          'Pasca-pembuangan Babel (abad ke-5 SM hingga zaman Yesus), bahasa Ibrani tidak lagi menjadi bahasa percakapan sehari-hari ' +
          'umat Yahudi dan digantikan oleh **bahasa Aramaik**. Dalam ibadah sinagoge, Kitab Suci Ibrani dibacakan lalu diterjemahkan ' +
          'secara lisan/tertulis ke dalam bahasa Aramaik. Terjemahan dan tafsiran Aramaik ini disebut **Targum** (seperti ' +
          '*Targum Onkelos*, *Targum Jonathan*, dan *Targum Neofiti*).',
      },
      {
        heading: 'Makna Teologis *Memra* dalam Tradisi Kitab Suci / Targum',
        intro:
          'Di dalam Targum Aramaik, para rabi Yahudi kuno secara konsisten menggunakan istilah *Memra d’YHVH* (Firman TUHAN) setiap kali ' +
          'Alkitab Ibrani menggambarkan Allah bertindak, menampakkan diri, atau berinteraksi langsung dengan alam semesta dan manusia. ' +
          'Penggunaan kata *Memra* memiliki makna mendalam:',
        items: [
          {
            text: '**1. Perantara Penampakan & Kehadiran Ilahi (Teofani)**',
            items: [
              'Untuk menjaga kesucian dan ketidakterjangkauan (transendensi) Allah Bapa agar tidak digambarkan secara fisik/manusiawi ' +
                '(antropomorfisme), Targum mengganti tindakan langsung Allah dengan kata *Memra* (Firman-Nya).',
              '**Kejadian 3:8:** Dalam teks Ibrani tertulis “mereka mendengar bunyi TUHAN Allah berjalan di taman”. Dalam Targum Aramaik ' +
                'diterjemahkan menjadi: “mereka mendengar suara *Memra* (Firman) YHWH berjalan di dalam taman”.',
              '**Kejadian 15:1:** “*Memra* YHWH datang kepada Abram dalam penglihatan…”',
              '**Kejadian 28:20:** Yakub bersumpah, “Jika *Memra* YHWH menyertai aku dan menjagaku…”',
            ],
          },
          {
            text: '**2. Agen Aktif Penciptaan dan Penebusan**',
            items: [
              'Dalam pandangan Yahudi Kuno, *Memra* bukanlah sekadar gelombang suara lisan yang melayang di udara, melainkan daya/kekuatan ' +
                'Ilahi yang aktif, personal, dan berkuasa yang melaluinya Allah menciptakan dunia, mengadakan perjanjian, memimpin bangsa ' +
                'Israel keluar dari Mesir, dan menyelamatkan umat-Nya.',
            ],
          },
        ],
      },
      {
        heading: 'Konsep "Dua Kuasa di Surga" (*Two Powers in Heaven*)',
        intro:
          'Sebelum era teologi Rabbinik abad ke-2/3 Masehi memperketat batas-batas polemik anti-Kristen, pemikiran Yahudi kuno ' +
          'abad pertama mengenal konsep teologis yang disebut **"Dua Kuasa di Surga"** (*Two Powers in Heaven*):',
        items: [
          '**YHWH yang Tak Terlihat** (*Invisible YHWH*): Bapa di surga yang tidak pernah dilihat oleh mata manusia.',
          '**YHWH yang Terlihat / Manifestasi** (*Visible YHWH / Memra / Malakh YHWH*): Firman atau Utusan Ilahi yang turun ' +
            'menampakkan diri, berbicara kepada nabi-nabi, dan berjalan bersama manusia di bumi.',
        ],
      },
      {
        heading: 'Hubungan *Memra* (Aramaik) dengan *Logos* (Yunani) dalam Perjanjian Baru',
        // rumusan panah: Ibrani → Aramaik → Yunani (di akhir bagian)
        flow: ['Ibrani: **Dabar/’Amar**', ['', ''], 'Aramaik: **Memra**', ['', ''], 'Yunani: **Logos**'],
        flowAfter: true,
        intro:
          'Ketika Rasul Yohanes menulis Injilnya dalam bahasa Yunani (Yohanes 1:1–14), ia menggunakan kata **Logos** (Ὁ Λόγος) ' +
          'untuk menjelaskan identitas Kristus.',
        items: [
          '**Latar Belakang Pemikiran Yohanes:** Ketika Rasul Yohanes—seorang Yahudi abad pertama yang dibesarkan dalam tradisi ' +
            'pembacaan Targum di sinagoge—menulis Injilnya dalam bahasa Yunani, ia mengambil konsep *Memra* ini dan menerjemahkannya ' +
            'ke dalam istilah **Logos** (Ὁ Λόγος) (Yohanes 1:1–14).',
          '**Kebenaran Inkarnasi:** Yohanes mengabarkan bahwa *Memra* / *Logos* yang kekal ini bukan lagi sekadar suara penampakan ' +
            'sementara, melainkan telah **mengambil rupa daging manusia sejati (*Inkarnasi*) dalam Diri Yesus Kristus** (Yohanes 1:14).',
        ],
      },
      {
        heading: 'Misteri Inkarnasi',
        items: [
          'Dalam Perjanjian Lama/Targum, *Memra* menampakkan diri secara **sementara dan sporadis** (Teofani / Kristofani Perjanjian Lama).',
          {
            text:
              'Dalam Perjanjian Baru (Yohanes 1:14), Rasul Yohanes memproklamasikan kebenaran radikal: **Sang *Memra* / *Logos* itu ' +
              'sendiri telah mengambil rupa daging manusia sejati** (*Sarx Egeneto* / *Inkarnasi*) dalam Diri Yesus Kristus.',
            quote:
              '"Pada mulanya adalah Firman [*Memra* / *Logos*]; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah ... ' +
              '**Firman itu telah menjadi manusia** [daging], dan diam di antara kita..." (Yohanes 1:1, 14)',
          },
        ],
      },
      {
        heading: 'Implikasi Kristologis dalam Teologi Patristik Ortodoks',
        intro:
          'Bapa-Bapa Gereja (seperti **Santo Yustinus Martir**, **Santo Athanasius Agung**, **Santo Irenaeus dari Lyon**, dan ' +
          '**Santo Yohanes dari Damaskus**) memberikan penegasan dogmatis atas teologi *Memra* / *Logos* ini:',
        items: [
          '**1. Sehakikat (*Homoousios*):** Sang *Memra* / *Logos* bukanlah makhluk ciptaan, melainkan Pribadi Kedua dari ' +
            'Tritunggal Mahakudus yang sehakikat dengan Bapa (*Homoousios*), diperanakkan secara kekal sebelum segala zaman.',
          '**2. Kausa Penciptaan dan *Logoi*:** Segala sesuatu diciptakan oleh dan melalui Sang *Memra* / *Logos*. Setiap ciptaan ' +
            'memiliki benih prinsip ilahi (*logoi*) yang bersumber pada Sang *Logos* utama.',
          '**3. Penyatuan Tanpa Bercampur (*Hypostatic Union*):** Di dalam Yesus Kristus, Sang *Memra* (Kodrat Ilahi) dan Kodrat ' +
            'Manusia bersatu dalam satu Pribadi (*Hypostasis*) tanpa percampuran, tanpa perubahan, tanpa pembagian, dan tanpa perpisahan.',
        ],
      },
      {
        heading: 'Tabel Ringkasan Komparatif *Memra*',
        table: {
          head: ['Dimensi', 'Targum Aramaik (*Memra*)', 'Injil Yunani (*Logos*)', 'Teologi Kristologi Ortodoks'],
          rows: [
            [
              '**Definisi**',
              '*Memra d’YHVH* (Firman TUHAN sebagai agen tindakan Allah).',
              '*Ho Logos tou Theou* (Sang Firman yang bersama Allah dan adalah Allah).',
              'Pribadi Kedua Tritunggal Mahakudus yang sehakikat dengan Bapa (*Homoousios*).',
            ],
            [
              '**Peran Utama**',
              'Agen Penciptaan, Penyataan Perjanjian, dan Teofani.',
              'Pencipta Semesta dan Terang yang masuk ke dalam dunia.',
              'Sang *Logos* yang menopang *logoi* seluruh kosmos.',
            ],
            [
              '**Wujud Manifestasi**',
              'Suara, Penglihatan, dan Penampakan Malaikat TUHAN (*Malakh YHWH*).',
              'Mengambil rupa daging manusia sejati (*Sarx Egeneto*).',
              '**Inkarnasi Yesus Kristus:** 100% Allah Sejati & 100% Manusia Sejati.',
            ],
          ],
        },
      },
      {
        heading: 'Kesimpulan',
        intro:
          'Teologi **Memra** adalah jejak peninggalan iman Perjanjian Lama yang membuktikan bahwa Allah sejak awal berfirman, ' +
          'menampakkan diri, dan berhubungan dengan manusia melalui **Firman-Nya yang Kekal**. Di dalam Yesus Kristus, *Memra* yang ' +
          'dahsyat itu tidak lagi sekadar menjadi suara di semak duri atau penglihatan para nabi, melainkan telah hadir memeluk ' +
          'kemanusiaan kita agar kita dapat dipulihkan dan bersatu dengan Allah (*Theosis*).',
      },
    ],
  },

  proginosko: {
    title: 'Proginosko (προγινώσκω) — Kemahatahuan Allah',
    sections: [
      {
        heading: 'Etimologi dan Makna Asli Kata',
        intro: 'Secara kebahasaan Yunani Kuno, kata *Proginosko* dibentuk dari dua suku kata:',
        items: [
          '**Pro (πρό):** Berarti “sebelum” atau “terlebih dahulu”.',
          '**Ginosko (γινώσκω):** Berarti “mengetahui”, “mengenal”, atau “berelasi secara intim”.',
          {
            text: '**Makna Harfiah**',
            items: [
              '**Proginosko** (προγινώσκω — kata kerja): berarti “mengetahui/mengenal terlebih dahulu” (*to foreknow / to know beforehand*).',
              '**Prognosis** (πρόγνωσις — kata benda): berarti “pengetahuan semula” / “pengetahuan yang ada sebelumnya” (*foreknowledge*).',
            ],
          },
        ],
        outro:
          'Dalam budaya Ibrani-Alkitabiah, kata *Ginosko* (sepadan dengan kata Ibrani *Yada’*) melampaui sekadar data intelektual di otak; ' +
          'ia mengandung makna pengetahuan relasional yang penuh kasih dan kepedulian. Oleh karena itu, ketika Alkitab menyatakan bahwa ' +
          'Allah mengenal seseorang dari semula, itu menandakan penetapan relasi kasih dan pemeliharaan-Nya sejak kekekalan.',
      },
      {
        heading: 'Implikasi Teologis: “Dikenal dari Semula” (*Proginosko*)',
        intro:
          'Ketika Alkitab menyatakan bahwa Allah **proginosko** (*pro* = sebelum, *ginosko* = mengenal/berelasi), hal ini melampaui ' +
          'konsep bahwa Allah sekadar “melihat masa depan” secara pasif:',
        items: [
          '**Bukan Sekadar Informasi Pra-Ketaatan:** Allah “mengenal dari semula” bukan berarti Allah mengintip pita rekaman masa depan ' +
            'untuk melihat siapa yang pandai atau baik, lalu memilih mereka berdasarkan data tersebut.',
          '**Penetapan Relasi Kasih Sejak Kekekalan:** Berdasarkan makna *Yada’ / Ginosko*, ketika Allah *mengenal seseorang dari semula* ' +
            '(Roma 8:29), itu berarti **Allah telah menetapkan ikatan kasih, pemeliharaan, dan perlindungan Perjanjian-Nya (*covenantal love*) ' +
            'atas orang tersebut sejak sebelum dunia dijadikan**.',
        ],
      },
      {
        heading: 'Kata Ibrani: *Yada’* (יָדַע)',
        intro:
          'Dalam Perjanjian Lama, kata kerja *Yada’* tidak pernah merujuk pada pengamatan pasif atau teori akademis. *Yada’* berarti ' +
          'pengalaman langsung, perjumpaan personal, ikatan perjanjian, dan persatuan yang paling intim:',
        items: [
          '**Keintiman Tubuh dan Jiwa:** Teks Alkitab menggunakan kata *Yada’* untuk menggambarkan persatuan suami-istri yang paling intim ' +
            '(“Adam mengenal [*yada’*] Hawa, isterinya, dan mengandunglah ia…”, Kejadian 4:1).',
          '**Komitmen Perjanjian (*Covenantal Commitment*):** Ketika Allah menyatakan bahwa Ia “mengenal” suatu bangsa atau individu, hal itu ' +
            'menandakan bahwa Allah memilih mereka untuk masuk ke dalam hubungan relasional yang dipenuhi oleh pemeliharaan, kesetiaan, dan kasih.',
        ],
      },
      {
        heading: 'Kata Kerja: *Proginosko* (προγινώσκω) — 5 Kali Muncul',
        verses: [
          {
            ref: 'Roma 8:29', note: 'Konteks Rancangan Keselamatan',
            text: 'Sebab semua orang yang **dikenal-Nya dari semula** (προέγνω — *proegnō*), mereka juga ditentukan-Nya dari semula (*proōrisen*) untuk menjadi serupa dengan gambaran Anak-Nya…',
          },
          {
            ref: 'Roma 11:2', note: 'Konteks Kesetiaan Allah pada Umat-Nya',
            text: 'Allah tidak menolak umat-Nya yang **dikenal-Nya dari semula** (προέγνω — *proegnō*).',
          },
          {
            ref: '1 Petrus 1:20', note: 'Konteks Pra-Eksistensi Kristus',
            text: 'Ia [Kristus] telah **dipilih/dikenal sebelum dunia dijadikan** (προεγνωσμένου — *proegnōsmenou*), tetapi oleh karena kamu Ia baru menyatakan diri-Nya pada zaman akhir.',
          },
          {
            ref: '2 Petrus 3:17', note: 'Konteks Peringatan bagi Orang Beriman',
            text: 'Tetapi kamu, saudara-saudaraku yang kekasih, kamu telah **mengetahui hal ini sebelumnya** (προγινώσκοντες — *proginōskontes*). Karena itu waspadalah…',
          },
          {
            ref: 'Kisah Para Rasul 26:5', note: 'Konteks Pengakuan Kesaksian Manusia',
            text: 'Mereka telah **mengenal aku dari semula** (προγινώσκοντές — *proginōskontes*) dan jika mereka mau, mereka dapat bersaksi…',
          },
        ],
      },
      {
        heading: 'Kata Benda: *Prognosis* (πρόγνωσις) — 2 Kali Muncul',
        verses: [
          {
            ref: '1 Petrus 1:2', note: 'Konteks Pemilihan Ilahi',
            text: 'yaitu orang-orang yang dipilih, **sesuai dengan pengetahuan semula** (κατὰ πρόγνωσιν — *kata prognōsin*) Allah, Bapa kita, dan yang dikuduskan oleh Roh…',
          },
          {
            ref: 'Kisah Para Rasul 2:23', note: 'Konteks Rencana Salib Kristus',
            text: 'Dia yang diserahkan Allah **menurut rencana dan pengetahuan-Nya semula** (προγνώσει — *prognōsei*), telah kamu salibkan dan kamu bunuh oleh tangan bangsa-bangsa durhaka…',
          },
        ],
      },
      {
        heading: 'Tinjauan Teologis Patristik: *Prognosis* vs *Proorismos*',
        intro:
          'Para Bapa Gereja (seperti Santo Maksimus Pengaku Iman dan Santo Yohanes dari Damaskus) memberikan pembedaan dogmatis yang ' +
          'sangat jernih antara *Prognosis* dan *Proorismos*:',
        items: [
          '**Prognosis (Pengetahuan Semula):** Allah Mahatahu dan melihat seluruh alur sejarah serta pilihan bebas (*free will*) yang diambil ' +
            'oleh manusia sebelum penciptaan terjadi.',
          '**Proorismos (Predestinasi / Penetapan):** Allah menetapkan tujuan akhir rancangan keselamatan-Nya.',
          '**Prinsip Sinergi:** Bapa-Bapa Gereja menegaskan bahwa Pengetahuan Semula Allah (*Prognosis*) tidak memaksa kehendak manusia. ' +
            'Pengetahuan Allah akan masa depan tidak menjadi “penyebab” manusia berbuat dosa atau taat, melainkan Allah menghormati ' +
            'kebebasan yang Ia anugerahkan kepada manusia.',
        ],
      },
      {
        heading: 'Prinsip Utama: Allah Mengetahui Segala Sesuatu, Tetapi Tidak Menentukan Segala Sesuatu',
        intro: 'Santo Yohanes dari Damaskus merumuskan sebuah kaidah emas teologi Ortodoks:',
        quote: '“Allah mengetahui segala sesuatu sebelumnya (*prognosis*), tetapi Ia tidak menentukan (*proorismos* / mempredestinasikan) segala sesuatu.”',
        items: [
          '**Pembedaan *Prognosis* dan *Proorismos*:** Allah di dalam keekalan-Nya memandang dan mengetahui seluruh alur waktu dan tindakan ' +
            'manusia sebelum hal itu terjadi. Namun, pengetahuan Allah akan masa depan bukanlah penyebab dari terjadinya tindakan manusia.',
          '**Analogi Kausalitas:** Sebagaimana seorang dokter yang memiliki pengetahuan medis dapat meramalkan bahwa seorang pasien akan ' +
            'jatuh sakit jika terus mengonsumsi racun, ramalan dokter tersebut bukanlah penyebab sakitnya sang pasien. Demikian pula, fakta ' +
            'bahwa Allah tahu seorang manusia akan memilih kebaikan atau kejahatan tidak berarti Allah memaksanya melakukan pilihan tersebut.',
        ],
      },
      {
        heading: 'Dua Bentuk Kehendak Allah (*Antecedent Will* vs. *Consequent Will*)',
        intro:
          'Untuk menjelaskan bagaimana Allah yang Mahakuasa tetap mengizinkan adanya kejahatan atau penolakan manusia tanpa menjadi ' +
          'pencipta kejahatan, Santo Yohanes dari Damaskus membagi kehendak Allah ke dalam dua kategori:',
        items: [
          {
            text: '**1. Kehendak Utama / Awal (*Antecedent Will* / *Thelema Proegoumenon*)**',
            items: [
              'Ini adalah kehendak murni Allah berdasarkan kebaikan dan kasih-Nya yang melimpah, yaitu bahwa Allah menghendaki semua orang ' +
                'diselamatkan dan mengambil bagian dalam Kerajaan-Nya (1 Timotius 2:4).',
            ],
          },
          {
            text: '**2. Kehendak Kedua / Konsekuen (*Consequent Will* / *Thelema Hepomenon*)**',
            items: [
              'Ini adalah kehendak Allah yang bertindak sebagai pembiaran atau izin (*permissive will*) sebagai respons atas pilihan bebas ' +
                'manusia. Jika manusia secara persisten menolak kasih Allah dan memilih kejahatan, Allah mengizinkan manusia menanggung ' +
                'konsekuensi dari pilihannya sendiri.',
            ],
          },
        ],
      },
      {
        heading: 'Kehendak Bebas (*Autexousion*) sebagai Hakikat *Imago Dei*',
        intro:
          'Santo Yohanes dari Damaskus menegaskan bahwa kehendak bebas (*autexousion*) adalah bagian intrinsik dari ciptaan rasional yang ' +
          'diciptakan menurut Gambar dan Rupa Allah (*Imago Dei*):',
        items: [
          '**Kebebasan Manusia adalah Nyata:** Karena Allah itu bebas secara mutlak, maka manusia yang diciptakan menurut Gambar-Nya juga ' +
            'dianugerahi otonomi dan **kebebasan memilih**.',
          '**Keutamaan (*Virtue*) Menuntut Kebebasan:** Kebaikan atau kebajikan yang dilakukan karena paksaan bukanlah kebaikan sejati. ' +
            'Santo Yohanes menyatakan bahwa Allah menginginkan hamba-hamba yang mengasihi-Nya secara sukarela (*voluntary lovers*), bukan ' +
            'robot yang dipaksa taat.',
        ],
      },
      {
        heading: 'Penolakan atas Predestinasi Ganda (*Double Predestination*)',
        intro:
          'Ajaran Santo Yohanes dari Damaskus dan Tradisi Timur secara tegas menolak doktrin predestinasi ganda (paham bahwa dari kekekalan ' +
          'Allah telah menetapkan sebagian orang pasti selamat dan sebagian orang pasti binasa tanpa memedulikan kehendak mereka):',
        items: [
          '**Penolakan Monergisme Kaku:** Keselamatan tidak bekerja secara monergis (hanya satu aktor, yaitu Allah yang memaksa).',
          '**Doktrin Sinergi (*Cooperation*):** Keselamatan terjadi melalui Sinergi—yaitu pertemuan dan kerja sama harmonis antara ' +
            '**Rahmat Ilahi Allah** (yang memprakarsai dan menganugerahkan keselamatan) dan **Kehendak Bebas Manusia** (yang merespons, ' +
            'menerima, dan memelihara rahmat tersebut). Sebagaimana Bunda Maria memberikan persetujuannya (*assent*) saat Kabar Sukacita ' +
            'sebelum Roh Kudus menguduskannya.',
        ],
      },
      {
        heading: 'Ringkasan Pemikiran Santo Yohanes dari Damaskus',
        table: {
          head: ['Konsep', 'Penjelasan Teologis Santo Yohanes dari Damaskus'],
          rows: [
            ['Prognosis (Pengetahuan Semula)', 'Allah tahu segala tindakan manusia sebelum dunia ada, tetapi pengetahuan-Nya tidak memaksa pilihan manusia.'],
            ['Proorismos (Predestinasi)', 'Penetapan rancangan keselamatan Allah di dalam Kristus, yang ditawarkan kepada semua manusia.'],
            ['Autexousion (Kehendak Bebas)', 'Kemampuan bawaan manusia sebagai *Imago Dei* untuk memilih menyatu dengan Allah (*Theosis*) atau berpaling.'],
            ['Sinergi', 'Keselamatan membutuhkan tumpuan dua sayap: Rahmat Allah (100%) dan ketaatan sukarela manusia (100%).'],
          ],
        },
      },
    ],
    versesTitle: 'Ayat-ayat Referensi',
    verseGroups: [
      {
        title: 'Perjanjian Lama (*Yada’* — Relasi Intim & Perjanjian)',
        verses: [
          { ref: 'Kejadian 4:1', note: 'Keintiman Terdalam', text: 'Kemudian manusia itu **mengenal** [*yada’*] Hawa, isterinya, dan mengandunglah perempuan itu lalu melahirkan Kain…' },
          {
            ref: 'Amos 3:2', note: 'Pemilihan dan Relasi Khusus',
            text: 'Hanya kamu yang **Aku kenal** [*yada’*] dari segala kaum di muka bumi, sebab itu Aku akan menuntut dari padamu segala kesalahanmu.',
            commentLabel: 'Makna',
            comment: 'Allah Mahatahu dan secara intelektual tahu keberadaan semua bangsa di bumi, tetapi hanya dengan Israel-lah Ia masuk ke dalam ikatan hubungan perjanjian (*covenantal intimacy*).',
          },
          { ref: 'Yeremia 1:5', note: 'Pemeliharaan Sebelum Kelahiran', text: 'Sebelum Aku membentuk engkau dalam rahim ibumu, **Aku telah mengenal engkau** [*yada’*], dan sebelum engkau keluar dari kandungan, Aku telah menguduskan engkau…' },
          { ref: 'Mazmur 1:6', note: 'Perhatian dan Perlindungan Allah', text: 'Sebab **TUHAN mengenal** [*yada’*] jalan orang benar, tetapi jalan orang fasik menuju kebinasaan.' },
        ],
      },
      {
        title: 'Perjanjian Baru (*Ginosko* — Persatuan Hidup dengan Kristus)',
        verses: [
          { ref: 'Yohanes 17:3', note: 'Pengenalan Adalah Hidup Kekal', text: 'Inilah hidup yang kekal itu, yaitu bahwa mereka **mengenal** [*ginosko*] Engkau, satu-satunya Allah yang benar, dan **mengenal** [*ginosko*] Yesus Kristus yang telah Engkau utus.' },
          {
            ref: 'Matius 7:22–23', note: 'Kontras: Tanpa Relasi Batiniah',
            text: 'Pada waktu itulah Aku akan berterus terang kepada mereka dan berkata: **Aku tidak pernah mengenal kamu!** [*oudeporte egnon* — *ginosko*] Enyahlah dari pada-Ku, kamu sekalian pembuat kejahatan!',
            commentLabel: 'Makna',
            comment: 'Mereka memiliki aktivitas agama dan pelayanan (bahkan melakukan mukjizat), tetapi Yesus menyebut “Aku tidak pernah mengenal kamu” karena tidak pernah ada hubungan kasih yang nyata dan ketaatan batiniah antara mereka dengan Kristus.',
          },
          { ref: '1 Korintus 8:3', note: 'Mengasihi Berarti Dikenal', text: 'Tetapi orang yang mengasihi Allah, **ia dikenal** [*egnostai* — *ginosko*] oleh Allah.' },
          { ref: 'Galatia 4:9', note: 'Inisiatif Pengenalan dari Allah', text: 'Tetapi sekarang sesudah kamu mengenal [*gnontes* — *ginosko*] Allah, atau lebih baik: **sesudah kamu dikenal** [*gnosthentes* — *ginosko*] **oleh Allah**, bagaimanakah kamu dapat berbalik kembali kepada roh-roh dunia…?' },
          { ref: '2 Timotius 2:19', note: 'Kepemilikan Allah', text: 'Namun demikian dasar yang diletakkan Allah itu teguh dan meterainya ialah: **‘Tuhan mengenal siapa kepunyaan-Nya’** [*egno Kyrios tous ontas autou*]…' },
          { ref: '1 Yohanes 4:7–8', note: 'Pengenalan Berbuah Kasih', text: 'Barangsiapa mengasihi, ia lahir dari Allah dan **mengenal** [*ginosko*] Allah. Barangsiapa tidak mengasihi, ia **tidak mengenal** [*egno* — *ginosko*] Allah, sebab Allah adalah kasih.' },
        ],
      },
      {
        title: '*Proginosko* (Dikenal dari Semula)',
        verses: [
          { ref: 'Roma 8:29', text: 'Sebab semua orang yang **dikenal-Nya dari semula** [*proegno* — *proginosko*], mereka juga ditentukan-Nya dari semula untuk menjadi serupa dengan gambaran Anak-Nya…' },
          { ref: '1 Petrus 1:20', note: 'Kristus Dikenal Sebelum Dunia Ada', text: 'Ia [Kristus] telah **dipilih/dikenal sebelum dunia dijadikan** [*proegnosmenou* — *proginosko*], tetapi oleh karena kamu Ia baru menyatakan diri-Nya pada zaman akhir.' },
        ],
      },
    ],
  },

  esa: {
    title: 'Allah itu Esa — *Echad* (אֶחָד)',
    sections: [
      {
        heading: 'Mengapa Allah itu ESA?',
        intro:
          'Kekristenan Ortodoks memegang teguh **Monoteisme Mutlak** dan menolak keras ajaran **Tritheisme** (kepercayaan kepada tiga ' +
          'tuhan). Keesaan Allah berpijak pada dua pilar ontologis utama:',
        items: [
          {
            text: '**1. Satu Hakikat / Kodrat Ilahi (*Ousia* / Esensi)**',
            items: [
              'Bapa, Anak, dan Roh Kudus memiliki satu keilahian, satu kuasa, satu kehendak, dan satu kemuliaan yang sama dan tak ' +
                'terbagi (*Homoousios*).',
              'Ketiga-Nya tidak memiliki tiga esensi yang terpisah; kehidupan ilahi yang dihidupi Bapa adalah kehidupan ilahi yang sama ' +
                'persis di dalam Anak dan Roh Kudus.',
            ],
          },
          {
            text: '**2. Prinsip Monarki Bapa (*Monarchia of the Father*)**',
            items: [
              'Dalam teologi Patristik (seperti ajaran Santo Gregorius dari Nazianzus), keesaan Allah berakar pada Pribadi Allah Bapa ' +
                'sebagai satu-satunya Sumber Kekal (*Arche* / *Aitia*) dari seluruh keilahian.',
              'Anak diperanakkan/dilahirkan secara kekal dari Bapa, dan Roh Kudus keluar/berprosesi dari Bapa. Karena Bapa adalah ' +
                'satu-satunya sumber kekal tanpa awal, maka Allah itu mutlak Esa.',
            ],
          },
        ],
      },
      {
        heading: 'Mengapa Allah itupun TRITUNGGAL?',
        intro:
          'Allah yang Esa tidak pernah diimani sebagai sosok tunggal yang terisolasi atau kesepian (*monad*), melainkan ' +
          '**Komunitas Kasih yang abadi**. Ada tiga alasan utama mengapa Allah itu Tritunggal:',
        items: [
          {
            text: '**1. Karena Hakikat “Allah adalah Kasih” (1 Yohanes 4:8)**',
            items: [
              'Alkitab menegaskan bahwa “Allah adalah kasih”. Agar kasih itu bersifat nyata dan kekal sebelum ada ciptaan (malaikat atau ' +
                'manusia), harus ada relasi kasih timbal balik di dalam diri Allah sendiri sejak kekekalan.',
              'Jika Allah hanya satu pribadi yang sendirian, Dia tidak dapat mempraktikkan kasih sebelum ada ciptaan. Oleh karena itu, ' +
                'sejak kekekalan terdapat relasi kasih yang sempurna: Bapa sebagai **Sang Pengasih**, Anak sebagai **Yang Dikasihi**, ' +
                'dan Roh Kudus sebagai **Wujud/Aliran Kasih** tersebut.',
            ],
          },
          {
            text: '**2. Karakter Internal Allah (Memiliki Firman dan Roh)**',
            items: [
              'Allah Bapa tidak pernah sedetik pun ada tanpa Pikiran/Firman-Nya (*Logos*) dan tanpa Hidup/Nafas-Nya (*Pneuma*/Roh).',
              'Menolak Tritunggal berarti mengandaikan ada masa di mana Allah itu “bisu” tanpa Firman atau “mati” tanpa Roh—suatu hal ' +
                'yang mustahil bagi Allah yang hidup.',
            ],
          },
          {
            text: '**3. Saling Mendiami secara Sempurna (*Perichoresis*)**',
            items: [
              'Tiga Pribadi (*Hypostases*) ini tidak berdiri sendiri-sendiri atau terpisah secara fisik. Sebaliknya, Bapa, Anak, dan ' +
                'Roh Kudus saling berdiam dan saling menembus (*Perichoresis*) secara abadi dan sempurna.',
              'Hal ini menghancurkan ajaran sesat **Modalisme / Oneness** (yang mengira Allah berganti-ganti topeng) sekaligus ' +
                '**Tritheisme** (yang mengira ada tiga allah).',
            ],
          },
        ],
      },
      {
        heading: 'Ayat Referensi Utama di Alkitab',
        items: [
          '**Matius 28:19 (Formula Baptisan):** Yesus memerintahkan membaptis dalam “nama” (bentuk tunggal/esensi satu) Bapa dan Anak ' +
            'dan Roh Kudus (Tiga Pribadi).',
          '**Yohanes 10:30 (Kesatuan Hakikat):** “Aku dan Bapa adalah satu.” Teks Yunani menggunakan kata *hen* (satu secara ' +
            'hakikat/esensi netral), bukan *heis* (satu orang/pribadi).',
          '**Matius 3:16–17 (Teofani Agung Yordan):** Anak dibaptis di air, Roh Kudus turun rupa merpati, dan suara Bapa terdengar dari ' +
            'surga secara simultan.',
        ],
        outro:
          'Memahami Allah Tritunggal mengajarkan kita bahwa **puncak kebenaran Allah bukanlah kesendirian yang kaku, melainkan ' +
          'Persekutuan Kasih yang Abadi**. Melalui Kristus di dalam Roh Kudus, kita diundang bukan sekadar menjadi penonton luar, ' +
          'melainkan masuk dan berpartisipasi mengambil bagian dalam kehidupan kasih ilahi tersebut (*Theosis*).',
      },
      {
        heading: 'Makna: *Ehad / Echad* (אֶחָד)',
        intro:
          'Kata **Ehad (*Echad*)** adalah kata bahasa Ibrani Kuno yang muncul pertama kali dalam **Kejadian 1:5** (*yom echad* — ' +
          '“hari satu/pertama”) dan menjadi kata kunci dalam pengakuan iman utama Israel, yaitu **Shema Yisrael** (Ulangan 6:4):',
        quote:
          '**שְׁמַע יִשְׂרָאֵל יְהוָה אֱלֹהֵינוּ יְהוָה אֶחָֽד**\n' +
          '*Shema Yisrael Adonai Eloheinu Adonai* **Echad**\n' +
          '“Dengarlah, hai orang Israel: TUHAN itu Allah kita, TUHAN itu **esa/satu**!”',
      },
      {
        heading: 'Makna Linguistik: *Compound Unity* (Kesatuan Jamak / Manunggal)',
        intro:
          'Secara tata bahasa Ibrani, kata *Echad* sering kali merujuk pada kesatuan dari beberapa unsur yang menyatu secara utuh ' +
          '(*compound unity* / kesatuan jamak), bukan sekadar angka matematis tunggal yang terisolasi:',
        items: [
          '**Kejadian 2:24:** “Sebab itu seorang laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan isterinya, sehingga ' +
            'keduanya menjadi **satu daging**” (*l’basar echad*). Dua pribadi (suami dan istri) menjadi satu/*echad* dalam ikatan pernikahan.',
          '**Bilangan 13:23:** “Ketika mereka sampai ke lembah Eskol, dipotong merekalah di sana sebuah cabang dengan **setandan buah ' +
            'anggurnya**” (*eshkol anavim echad*). Banyak buah anggur dalam satu tangkai disebut satu/*echad*.',
          '**Kejadian 11:6:** “Ia berfirman: ‘Mereka ini **satu bangsa**’” (*am echad*). Ribuan orang menyatu dalam satu bangsa.',
        ],
      },
      {
        heading: 'Perbandingan Krusial: *Echad* (אֶחָד) vs *Yachid* (יָחִיד)',
        intro: 'Untuk memahami mengapa Alkitab menggunakan kata *Echad* untuk Allah, kita harus melihat kata Ibrani lainnya, yaitu **Yachid**:',
        table: {
          head: ['Kata Ibrani', 'Arti / Sifat', 'Penggunaan dalam Alkitab'],
          rows: [
            ['Echad (אֶחָד)', '**Kesatuan Manunggal** (*Compound Unity*). Menyatakan keesaan yang memiliki kedalaman relasional.',
              'Digunakan dalam **Ulangan 6:4** (*Shema Yisrael*) untuk menyatakan Keesaan Allah.'],
            ['Yachid (יָחִיד)', '**Tunggal Mutlak / Terisolasi** (*Solitary / Single*). Berarti angka satu yang menyendiri tanpa relasi.',
              'Digunakan untuk menyebut “anak tunggal” (seperti Ishak dalam Kejadian 22:2). **Tidak pernah** digunakan Alkitab untuk menyebut Keesaan Allah.'],
          ],
        },
        outro:
          '**Implikasi:** Kitab Suci secara sengaja memakai kata **Echad** (bukan *Yachid*) untuk menegaskan bahwa Allah Yang Esa bukanlah ' +
          'entitas yang kaku, kesepian, atau terisolasi, melainkan Allah yang memiliki persekutuan internal yang sempurna di dalam diri-Nya ' +
          'sendiri sejak kekekalan.',
      },
      {
        heading: 'Bedah Kata Bahasa Indonesia: *Esa*',
        intro: 'Kata *Esa* dalam bahasa Indonesia memiliki akar sejarah dan makna filosofis-teologis yang sangat khas:',
        items: [
          '**Etimologi Sanskerta:** Kata *Esa* berasal dari bahasa Sanskerta (*Eka* / *Esa*), yang berarti “Maha Tunggal”, “Utama”, atau “Yang Mengesakan”.',
          {
            text: '**Perbedaan “Esa” dan “Satu”:**',
            items: [
              'Kata “Satu” adalah bilangan numerik matematis (1, 2, 3…) yang bisa ditambah, dibagi, atau dikurangi.',
              'Kata “Esa” melampaui deret hitung matematika. Esa menandakan Keberadaan yang Utama, Mutlak, Tak Terbagi, dan Tidak Ada Tandingannya.',
            ],
          },
          'Oleh karena itu, ketika Lembaga Alkitab Indonesia (LAI) menerjemahkan Ulangan 6:4, mereka memilih frasa “TUHAN itu **esa**” ' +
            '(bukan sekadar “TUHAN itu satu”), untuk menangkap bobot keagungan kata *Echad*.',
        ],
      },
      {
        heading: 'Yohanes 10:30 — *Hen*',
        quote: '**ἐγὼ καὶ ὁ πατὴρ ἕν ἐσμεν**\n*Egō kai ho patēr* **hen** *esmen*\n“Aku dan Bapa adalah **satu/esa**.”',
        outro:
          '**Satu Hakikat (*Ousia*):** Allah itu **Esa** (*Echad / Hen*) karena Bapa, Anak (*Logos*), dan Roh Kudus memiliki satu kodrat ' +
          'keilahian, satu kuasa, satu kehendak, dan satu kemuliaan yang tak terbagi.',
      },
      {
        heading: 'Esensi Ilahi (*Ousia*) dan Energi Ilahi (*Energeia*)',
        items: [
          {
            text: '**Esensi Ilahi (*Ousia*)**',
            items: [
              '**Hakikat Batiniah Allah:** Merupakan wujud terdalam Allah di dalam diri-Nya sendiri.',
              '**Mutlak Tidak Terjangkau:** Esensi Allah sama sekali tidak terbatas, tidak tercipta, tidak dapat dilihat, dan tidak dapat ' +
                'dipahami oleh makhluk ciptaan mana pun—baik oleh manusia maupun malaikat.',
              '**Jurang Ontologis (*Diastema*):** Perbedaan kodrat antara Sang Pencipta yang Tidak Diciptakan (*Uncreated*) dan ciptaan ' +
                'yang Diciptakan (*Created*) membuat manusia jasmani akan mengalami kehancuran ontologis jika menatap Esensi Allah secara ' +
                'langsung tanpa pelindung.',
            ],
          },
          {
            text: '**Energi Ilahi (*Energeia*)**',
            items: [
              '**Hadirat dan Tindakan yang Memancar:** Merupakan tindakan, kuasa, kemuliaan, rahmat, dan Terang Tak Tercipta ' +
                '(*Uncreated Light*) yang memancar keluar dari Esensi Allah.',
              '**Dapat Dialami dan Dipartisipasi:** Melalui Energi Ilahi inilah Allah menyatakan diri-Nya di dalam sejarah, menopang alam ' +
                'semesta, serta memungkinkan manusia untuk bersatu dengan-Nya (*Theosis*) dan “melihat” hadirat-Nya tanpa kebinasaan.',
            ],
          },
        ],
      },
      {
        heading: 'Tidak ada seorang pun yang pernah melihat Allah',
        intro:
          'Ini adalah hal paling **PENTING** dalam doktrin fundamental Kitab Suci dan Tradisi Gereja Ortodoks. Ayat-ayat Alkitab secara ' +
          'konsisten dan tegas mengunci kebenaran mengenai **transendensi mutlak Sang Pencipta** di hadapan ciptaan-Nya.',
      },
      {
        heading: 'Mengapa Tidak Ada Seorang Pun yang Pernah Melihat Allah?',
        intro:
          'Pertanyaan ini menyentuh inti dari **transendensi mutlak Sang Pencipta** dibandingkan dengan kelemahan dan keterbatasan ' +
          'kodrat ciptaan-Nya.',
      },
      {
        heading: 'Jurang Antara Pencipta dan Ciptaan (*Diastema*)',
        intro:
          'Mengapa manusia tidak sanggup melihat Allah secara langsung? Para Bapa Gereja (seperti Santo Basil Agung, Santo Gregorius dari ' +
          'Nazianzus, Santo Gregorius dari Nyssa, dan Santo Gregorius Palamas) merumuskan pembedaan dogmatis yang sangat penting antara ' +
          '**Esensi Ilahi** dan **Energi Ilahi**:',
        items: [
          {
            text: '**1. Esensi Ilahi (*Ousia*)**',
            items: [
              '**Hakikat Batiniah Allah:** Merupakan wujud terdalam Allah di dalam diri-Nya sendiri.',
              '**Mutlak Transenden dan Tak Terjangkau:** Esensi Allah sama sekali tidak terbatas, tidak diciptakan, tidak terukur, dan tidak ' +
                'dapat dipahami maupun dilihat oleh makhluk apa pun—baik oleh manusia maupun oleh bangsa malaikat. Di dalam Esensi-Nya, ' +
                'Allah tetap bersifat tidak dapat dikomunikasikan (*incommunicable*) kepada ciptaan.',
              '**Jurang Ontologis (*Diastema*):** Terdapat perbedaan kodrat mendasar antara Sang Pencipta yang Tidak Diciptakan (*Uncreated*) ' +
                'dengan ciptaan yang Diciptakan (*Created*). Karena perbedaan kodrat yang tak terlaraskan ini, manusia berdosa dan fana yang ' +
                'mencoba menatap Esensi Allah secara langsung tanpa pelindung akan mengalami kematian ontologis.',
              '**Analogi Bapa Gereja (Analogi Matahari):** Para Bapa Gereja menggambarkan hal ini seperti menatap matahari. Mata manusia yang ' +
                'terbatas tidak sanggup menatap inti bola api matahari secara langsung tanpa menjadi buta atau terbakar seketika. Jika ' +
                'terhadap ciptaan fisik (matahari) saja kita terbatas, apalagi terhadap Esensi Sang Pencipta matahari.',
            ],
          },
          {
            text: '**2. Energi Ilahi (*Energeia*)**',
            items: [
              '**Hadirat dan Tindakan yang Memancar:** Merupakan tindakan, kuasa, kasih karunia, dan Terang Tak Tercipta (*Uncreated Light*) ' +
                'yang memancar dan mengalir keluar dari Esensi Allah.',
              '**Dapat Dialami dan Dipartisipasi:** Melalui Energi Ilahi inilah—seperti halnya sinar dan hangatnya matahari yang menyinari ' +
                'bumi—Allah menyatakan diri-Nya, memelihara alam semesta, serta memungkinkan manusia untuk bersatu dengan-Nya (*Theosis*) ' +
                'dan “melihat” hadirat-Nya tanpa harus binasa.',
            ],
          },
        ],
      },
      {
        heading: 'Teologi Apofatik (*Via Negativa* / Jalan Penyangkalan)',
        intro:
          'Ketakterlihatan Allah memicu lahirnya Teologi Apofatik di dalam Tradisi Patristik (dikembangkan oleh Bapa Gereja seperti ' +
          'Santo Dionysius Areopagita dan Santo Gregorius dari Nyssa):',
        items: [
          '**Bukan Objek Penglihatan:** Allah bukanlah salah satu objek fisik di alam semesta yang bisa diukur atau ditangkap oleh indra penglihatan manusia.',
          '**Melampaui Konsep Intelektual:** Akal budi manusia (*dianoia*) tidak sanggup mendefinisikan atau mengurung Hakikat Allah di dalam ' +
            'kata-kata atau gambaran visual.',
          '**Pengenalan Melalui “Kegelapan Ilahi” (*Agnosia*):** Santo Gregorius dari Nyssa menafsirkan peristiwa Musa mendaki Gunung Sinai: ' +
            'ketika Musa memasuki awan pekat, ia melepaskan semua konsep dan bayangan visual untuk bersatu dengan Allah di dalam keheningan ' +
            'doa yang melampaui pengetahuan intelektual.',
        ],
      },
      {
        heading: 'Bagaimana Manusia Akhirnya Dapat “Melihat” Allah?',
        intro: 'Jika Hakikat Bapa tidak dapat dilihat oleh manusia, lalu bagaimana manusia dapat mengenal dan berhubungan dengan Allah?',
        items: [
          '**Pengosongan Diri (*Kenosis*):** Karena manusia akan hancur jika melihat Terang Hakikat Allah yang tak terbatas, maka Allah Bapa ' +
            'mengutus Sang Logos (Firman-Nya) untuk mengambil rupa daging manusia sejati dalam diri Yesus Kristus.',
          '**Sang Gambar (*Eikon*) Allah yang Tidak Kelihatan:** Di dalam Kristus, Keilahian Allah dibungkus dengan kemanusiaan. Kristus adalah ' +
            'Ikon nyata dari Bapa yang tidak kelihatan.',
          '**Sabda Yesus (Yohanes 14:9):** “Barangsiapa telah melihat Aku, ia telah melihat Bapa…” Di dalam Diri Yesus Kristus, manusia ' +
            'akhirnya dapat melihat, mendengar, dan menyentuh Allah secara nyata tanpa harus binasa oleh kedahsyatan hakikat ilahi-Nya.',
        ],
      },
    ],
    versesTitle: 'Landasan Ayat-Ayat Alkitab',
    verseGroups: [
      {
        intro: 'Alkitab secara eksplisit dan konsisten mengunci kebenaran bahwa Allah di dalam hakikat-Nya tidak dapat dilihat oleh mata jasmani manusia:',
        verses: [
          { ref: 'Yohanes 1:18', text: '**Tidak ada seorang pun yang pernah melihat Allah**; tetapi Anak Tunggal Allah, yang ada di pangkuan Bapa, Dialah yang menyatakan-Nya.' },
          { ref: '1 Timotius 6:16', text: 'Dialah satu-satunya yang tidak takluk kepada maut, bersemayam dalam terang yang tak terhampiri. Seorang pun tidak pernah melihat Dia dan **memang manusia tidak dapat melihat Dia**…' },
          { ref: '1 Yohanes 4:12', text: '**Tidak ada seorang pun yang pernah melihat Allah**…' },
          { ref: 'Keluaran 33:20', text: 'Lagi firman-Nya: ‘Engkau tidak tahan memandang wajah-Ku, sebab **tidak ada orang yang memandang Aku dapat hidup**.’' },
        ],
      },
    ],
  },

  trinitas: {
    title: 'Perichoresis (περιχώρησις)',
    sections: [
      {
        heading: 'Etimologi (Asal-Usul Bahasa Yunani)',
        intro: 'Secara kebahasaan, kata *Perichoresis* dibentuk dari gabungan dua kata dalam bahasa Yunani Kuno:',
        items: [
          '**1. Peri (περί):** Berarti “di sekeliling”, “sekitar”, atau “saling / timbal-balik”.',
          '**2. Chōreō (χωρέω):** Berarti “memberi ruang”, “menampung”, “bergerak”, atau “melangkah” (berasal dari akar kata ' +
            '*chōros* [χῶρος] yang berarti “ruang” atau “tempat”).',
        ],
        outro:
          '**Makna Harfiah Linguistik:** Secara etimologis murni, *Perichoresis* berarti “saling memberi ruang”, “saling melingkupi”, ' +
          'atau “saling bergerak masuk dan menempati ruang satu sama lain” (*mutual indwelling / co-inherence*).\n\n' +
          '**Catatan Metaforis:** Dalam tradisi teologi populer, kata ini sering kali diasosiasikan secara puitis dengan kata Yunani ' +
          '*choreuō* (χορεύω) yang berarti “menari”. Metafora ini menggambarkan Tritunggal Mahakudus seperti sebuah “tarian ilahi yang ' +
          'saling melingkupi” (*dance around*), di mana Bapa, Anak, dan Roh Kudus bergerak secara harmonis, sejajar, dan saling menyatu ' +
          'tanpa pernah saling membenturkan atau meniadakan identitas masing-masing.',
      },
      {
        heading: 'Makna Hakiki: *Mutual Indwelling* & *Interpenetration*',
        intro:
          'Dalam teologi Patristik (ajaran Bapa-Bapa Gereja), *Perichoresis* diterjemahkan ke dalam bahasa Latin sebagai ' +
          '*circumincessio* atau *circuminsessio*, yang mengandung makna:',
        items: [
          '**Saling Menembus (*Interpenetration*):** Ketiga Pribadi Ilahi saling menembus dan memenuhi satu sama lain secara total, abadi, dan tak terpisahkan.',
          '**Saling Berdiam di Dalam (*Mutual Indwelling / Co-inherence*):** Bapa ada di dalam Anak dan Roh Kudus; Anak ada di dalam Bapa ' +
            'dan Roh Kudus; Roh Kudus ada di dalam Bapa dan Anak.',
          '**Tanpa Peleburan (*Without Confusion / Mingling*):** Meskipun saling menembus secara mutlak, Ketiga Pribadi (*Hypostases*) ' +
            'tidak pernah melebur menjadi satu pribadi yang kabur (Sabellianisme/Modalisme), dan esensi-Nya (*Ousia*) tidak terpecah ' +
            'menjadi tiga tuhan (Tritisme).',
        ],
      },
      {
        heading: 'Perkembangan Sejarah Teologis (Gereja Purba)',
        intro: 'Penggunaan kata *Perichoresis* berkembang melalui dua tahapan utama dalam sejarah Gereja:',
        items: [
          {
            text: '**1. Penggunaan Kristologis (Abad ke-4)**',
            items: [
              'Pertama kali diperkenalkan oleh Bapa Gereja seperti Santo Gregorius dari Nazianzus (*St. Gregory the Theologian*) untuk ' +
                'menjelaskan bagaimana Kodrat Ilahi dan Kodrat Manusia menyatu di dalam Satu Pribadi Kristus tanpa saling membinasakan atau melebur.',
            ],
          },
          {
            text: '**2. Penggunaan Trinitaris (Abad ke-8)**',
            items: [
              'Dirumuskan secara sistematis oleh Santo Yohanes dari Damaskus (*St. John of Damascus*) dan Pseudo-Cyril untuk menjelaskan ' +
                'hubungan internal antara Bapa, Anak, dan Roh Kudus.',
              'Santo Yohanes dari Damaskus menggambarkan bahwa Ketiga Pribadi saling melekat dan menembus seperti **tiga matahari yang ' +
                'memancarkan satu cahaya** yang bersatu padu.',
            ],
          },
        ],
      },
    ],
    versesTitle: 'Ayat-ayat Referensi',
    verseGroups: [
      {
        title: 'Saling Berdiam Antara Bapa dan Anak (*Intra-Trinitarian Indwelling*)',
        verses: [
          {
            ref: 'Yohanes 14:10–11', note: 'Pernyataan Eksplisit Saling Berdiam',
            text:
              'Tidak percayakah engkau, bahwa **Aku di dalam Bapa dan Bapa di dalam Aku**? Apa yang Aku katakan kepadamu, tidak Aku ' +
              'katakan dari diri-Ku sendiri, tetapi Bapa, **yang diam di dalam Aku**, Dialah yang melakukan pekerjaan-Nya. Percayalah ' +
              'kepada-Ku, bahwa **Aku di dalam Bapa dan Bapa di dalam Aku**…',
            commentLabel: 'Makna Teologis',
            comment: 'Yesus menegaskan bahwa setiap karya dan ucapan-Nya merupakan manifestasi Bapa yang berdiam di dalam diri-Nya secara utuh dan tak terpisahkan.',
          },
          {
            ref: 'Yohanes 10:30', note: 'Kesatuan Hakikat / *Ousia*',
            text: '**Aku dan Bapa adalah satu.**',
            commentLabel: 'Analisis Bahasa Asli',
            comment:
              'Teks asli Yunani menggunakan kata **hen** (ἕν — bentuk netral/*neuter* yang merujuk pada kesatuan hakikat atau esensi), ' +
              'bukan *heis* (εἷς — bentuk maskulin yang menunjuk pada satu orang/pribadi). Ini membuktikan bahwa Yesus dan Bapa adalah ' +
              '**DUA Pribadi** (*Hypostases*) yang berbeda, tetapi menyatu secara mutlak dalam **SATU Hakikat** (*Ousia*) melalui *Perichoresis*.',
          },
          {
            ref: 'Yohanes 14:9', note: 'Ikon Sempurna Bapa',
            text: 'Barangsiapa telah melihat Aku, ia telah melihat Bapa…',
            commentLabel: 'Makna Teologis',
            comment: 'Karena Anak berdiam di dalam Bapa dan Bapa di dalam Anak, maka mengenal Sang Anak berarti mengenal Sang Bapa secara utuh.',
          },
          {
            ref: 'Yohanes 17:21', note: 'Standar Kesatuan Persekutuan',
            text: '…supaya mereka semua menjadi satu, sama seperti **Engkau, ya Bapa, di dalam Aku dan Aku di dalam Engkau**…',
          },
        ],
      },
      {
        title: 'Kehadiran dan Kesatuan Roh Kudus dalam Tritunggal',
        verses: [
          {
            ref: 'Yohanes 15:26', note: 'Prosesi dan Kesaksian Roh',
            text: 'Jikalau Penghibur yang akan Kuutus dari Bapa datang, yaitu Roh Kebenaran, **yang keluar dari Bapa**, Ia akan bersaksi tentang Aku.',
            commentLabel: 'Makna Teologis',
            comment:
              'Roh Kudus keluar dari Bapa sebagai Sumber kekal (Monarki Bapa) dan memancarkan kesaksian tentang Anak, memperlihatkan ' +
              'persekutuan Tiga Pribadi yang saling mengalirkan kehidupan.',
          },
          {
            ref: '1 Korintus 2:10–11', note: 'Penyelaman Kedalaman Allah',
            text:
              'Karena kepada kita Allah telah menyatakannya oleh Roh, sebab Roh menyelami segala sesuatu, bahkan **hal-hal yang terdalam ' +
              'dari Allah**… Demikianlah tidak ada orang yang tahu apa yang ada di dalam diri Allah selain Roh Allah.',
            commentLabel: 'Makna Teologis',
            comment: 'Roh Kudus berdiam di dalam kedalaman batiniah Allah Bapa, membuktikan bahwa Roh Kudus adalah Allah sejati yang tahu dan sehakikat dengan Bapa.',
          },
          {
            ref: '2 Korintus 13:13', note: 'Persekutuan / *Koinonia* Trinitarian',
            text: '**Kasih karunia Tuhan Yesus Kristus**, dan **kasih Allah** [Bapa], dan **persekutuan Roh Kudus** menyertai kamu sekalian.',
            commentLabel: 'Makna Teologis',
            comment: 'Rasul Paulus menempatkan Ketiga Pribadi secara sejajar dan simultan sebagai sumber tunggal kasih karunia dan persekutuan rohani.',
          },
        ],
      },
      {
        title: 'Manifestasi Formula dan Teofani Kesatuan Tritunggal',
        verses: [
          {
            ref: 'Matius 28:19', note: 'Satu Nama untuk Tiga Pribadi',
            text: 'Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam **nama** Bapa dan Anak dan Roh Kudus…',
            commentLabel: 'Analisis Bahasa Asli',
            comment:
              'Penggunaan kata tunggal “NAMA” (*eis to onoma*), bukan “nama-nama” (jamak), menegaskan bahwa Bapa, Anak, dan Roh Kudus ' +
              'memiliki Satu Otoritas dan Satu Hakikat Ilahi yang tidak terbagi.',
          },
          {
            ref: 'Matius 3:16–17', note: 'Teofani Agung di Sungai Yordan',
            text:
              'Sesudah dibaptis, **Yesus** [Anak] segera keluar dari air… dan ia melihat **Roh Allah** [Roh Kudus] seperti burung merpati ' +
              'turun ke atas-Nya, lalu terdengarlah **suara dari sorga** [Bapa] yang mengatakan: ‘Inilah Anak-Ku yang Kekasih…’',
            commentLabel: 'Makna Teologis',
            comment:
              'Momen ini memperlihatkan Tiga Pribadi yang berbeda secara *hypostasis* menampakkan diri secara simultan dan bekerja dalam ' +
              'satu harmoni tindakan ilahi (*Inseparable Operations*).',
          },
        ],
      },
    ],
  },
};

/* ---------------------------------------------------------------------
   STORY 8 · BIG BANG — timeline 7 hari penciptaan di sumbu 3D
   (posisi x: 0 = titik awal, 1 = ujung terompet). `ref` = referensi ayat.
   --------------------------------------------------------------------- */
export const UNIVERSE_TIMELINE = [
  { x: 0.0, title: 'Hari Pertama', ref: 'Kejadian 1:1–5', sub: 'Penciptaan Terang & Pemisahan Terang dari Gelap', kind: 'axis-start' },
  { x: 1 / 6, title: 'Hari Kedua', ref: 'Kejadian 1:6–8', sub: 'Cakrawala / Pemisahan Air' },
  { x: 2 / 6, title: 'Hari Ketiga', ref: 'Kejadian 1:9–13', sub: 'Daratan, Lautan, dan Tumbuhan' },
  { x: 3 / 6, title: 'Hari Keempat', ref: 'Kejadian 1:14–19', sub: 'Benda-Benda Penerang (Matahari, Bulan, & Bintang)' },
  { x: 4 / 6, title: 'Hari Kelima', ref: 'Kejadian 1:20–23', sub: 'Binatang Laut & Burung di Udara' },
  { x: 5 / 6, title: 'Hari Keenam', ref: 'Kejadian 1:24–31', sub: 'Binatang Darat & Manusia' },
  { x: 1.0, title: 'Hari Ketujuh', ref: 'Kejadian 2:1–3', sub: 'Perhentian Allah (Sabat) & Pengudusan', kind: 'end' },
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
      { from: 'Mzm 19:1', to: 'Rm 1:20', text: '' },
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
      { from: 'Mzm 22:1', to: 'Mat 27:46', text: '' },
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
    name: 'Eklesia',
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
      { from: 'Mzm 9:8', to: 'Kis 17:31', text: '' },
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
  /* Section terakhir KRISTUS — tema tersembunyi (tidak tampil sebagai tombol di Keterhubungan).
     cat: 'kristofani' = Sang Firman menampakkan diri sebelum inkarnasi;
          'inkarnasi'  = Sang Firman menjadi manusia di dalam Yesus Kristus.
     Penomoran mengikuti TB (LAI), diverifikasi di alkitab.sabda.org:
     Mikha 5:2 TB (= 5:1 Ibrani/Inggris), Mazmur 40:6-8 TB (= 40:7-9). */
  {
    id: 'kristus',
    name: 'Kristus',
    hidden: true,
    refs: [
      { cat: 'kristofani', from: 'Kej 3:8', to: 'Yoh 1:14', text: 'Suara (Memra) TUHAN berjalan di taman — Firman itu diam di antara kita' },
      { cat: 'kristofani', from: 'Kej 15:1', to: 'Yoh 1:1', text: 'Firman TUHAN datang kepada Abram dalam penglihatan — Pada mulanya adalah Firman' },
      { cat: 'kristofani', from: 'Kej 18:1', to: 'Yoh 8:56', text: 'TUHAN menampakkan diri kepada Abraham — Abraham telah melihat hari-Ku' },
      { cat: 'kristofani', from: 'Kej 32:30', to: 'Yoh 1:18', text: 'Yakub melihat Allah berhadapan muka — Anak Tunggal Allah yang menyatakan-Nya' },
      { cat: 'kristofani', from: 'Kel 3:2', to: 'Kis 7:30', text: 'Malaikat TUHAN dalam nyala api semak duri' },
      { cat: 'kristofani', from: 'Kel 3:14', to: 'Yoh 8:58', text: 'AKU ADALAH AKU — Sebelum Abraham jadi, Aku telah ada' },
      { cat: 'kristofani', from: 'Kel 17:6', to: '1Kor 10:4', text: 'Batu karang di Horeb — batu karang itu ialah Kristus' },
      { cat: 'kristofani', from: 'Yos 5:14', to: 'Why 19:14', text: 'Panglima Balatentara TUHAN — pasukan sorga mengikuti Dia' },
      { cat: 'kristofani', from: 'Hak 13:18', to: 'Yes 9:5', text: 'Nama-Ku ajaib — Penasihat Ajaib' },
      { cat: 'kristofani', from: '1Sam 3:21', to: 'Yoh 1:1', text: 'TUHAN menyatakan diri dengan perantaraan firman-Nya' },
      { cat: 'kristofani', from: 'Yes 6:1', to: 'Yoh 12:41', text: 'Yesaya melihat Tuhan — ia telah melihat kemuliaan-Nya (Kristus)' },
      { cat: 'kristofani', from: 'Yeh 1:26', to: 'Why 1:13', text: 'Rupa manusia di atas takhta — seorang serupa Anak Manusia' },
      { cat: 'kristofani', from: 'Dan 3:25', to: 'Yes 43:2', text: 'Yang keempat seperti anak dewa — Aku menyertai engkau di dalam api' },
      { cat: 'kristofani', from: 'Dan 7:13', to: 'Mat 26:64', text: 'Seorang seperti anak manusia datang dengan awan-awan' },
      { cat: 'inkarnasi', from: 'Kej 3:15', to: 'Gal 4:4', text: 'Keturunan perempuan — Anak-Nya lahir dari seorang perempuan' },
      { cat: 'inkarnasi', from: 'Ul 18:15', to: 'Kis 3:22', text: 'Seorang nabi seperti Musa akan dibangkitkan' },
      { cat: 'inkarnasi', from: 'Mzm 2:7', to: 'Ibr 1:5', text: 'Anak-Ku Engkau! Engkau telah Kuperanakkan' },
      { cat: 'inkarnasi', from: 'Mzm 33:6', to: 'Yoh 1:3', text: 'Oleh firman TUHAN langit dijadikan — segala sesuatu dijadikan oleh Dia' },
      { cat: 'inkarnasi', from: 'Mzm 40:6-8', to: 'Ibr 10:5-7', text: 'Sungguh, aku datang — Engkau telah menyediakan tubuh bagiku' },
      { cat: 'inkarnasi', from: 'Yes 7:14', to: 'Mat 1:23', text: 'Anak dara mengandung — Imanuel, Allah menyertai kita' },
      { cat: 'inkarnasi', from: 'Yes 9:5', to: 'Luk 2:11', text: 'Seorang anak telah lahir untuk kita — Juruselamat, Kristus, Tuhan' },
      { cat: 'inkarnasi', from: 'Yes 40:3', to: 'Mrk 1:3', text: 'Persiapkanlah jalan untuk TUHAN' },
      { cat: 'inkarnasi', from: 'Yer 23:5', to: 'Luk 1:32', text: 'Tunas adil bagi Daud — takhta Daud, bapa leluhur-Nya' },
      { cat: 'inkarnasi', from: 'Mi 5:2', to: 'Mat 2:6', text: 'Betlehem Efrata — dari padamu akan bangkit seorang pemimpin' },
      { cat: 'inkarnasi', from: 'Mal 3:1', to: 'Mrk 1:2', text: 'Aku menyuruh utusan-Ku mempersiapkan jalan' },
      { cat: 'inkarnasi', from: 'Yoh 1:1', to: '1Yoh 1:1', text: 'Firman hidup yang telah kami lihat dan raba' },
      { cat: 'inkarnasi', from: 'Yoh 1:14', to: 'Flp 2:7', text: 'Firman menjadi manusia — mengambil rupa seorang hamba' },
      { cat: 'inkarnasi', from: 'Yoh 1:14', to: 'Kol 2:9', text: 'Seluruh kepenuhan keallahan berdiam secara jasmani' },
      { cat: 'inkarnasi', from: 'Yoh 1:14', to: '1Tim 3:16', text: 'Dia, yang telah menyatakan diri-Nya dalam rupa manusia' },
      { cat: 'inkarnasi', from: 'Yoh 1:14', to: 'Ibr 2:14', text: 'Ia juga menjadi sama dengan mereka dan mendapat bagian dalam darah dan daging' },
    ],
  },
];

/* Garis latar dekoratif (BUKAN data referensi) supaya diagram tampak padat
   seperti storyboard. Set ke 0 bila semua referensi asli sudah diisi. */
export const DECORATIVE_ARCS = 440;

/* ---------------------------------------------------------------------
   TEKS AYAT (TB, LAI) untuk detail di Keterhubungan Firman — klik ayat di daftar.
   Diambil dari alkitab.sabda.org (API passage). Kunci = string referensi di THEMES.
   --------------------------------------------------------------------- */
export const VERSE_TEXTS = {
  "Kej 1:1": "Pada mulanya Allah menciptakan langit dan bumi.",
  "Yoh 1:1-3": "Pada mulanya adalah Firman; Firman itu bersama-sama dengan Allah dan Firman itu adalah Allah. Ia pada mulanya bersama-sama dengan Allah. Segala sesuatu dijadikan oleh Dia dan tanpa Dia tidak ada suatupun yang telah jadi dari segala yang telah dijadikan.",
  "Ibr 11:3": "Karena iman kita mengerti, bahwa alam semesta telah dijadikan oleh firman Allah, sehingga apa yang kita lihat telah terjadi dari apa yang tidak dapat kita lihat.",
  "Kol 1:16": "karena di dalam Dialah telah diciptakan segala sesuatu, yang ada di sorga dan yang ada di bumi, yang kelihatan dan yang tidak kelihatan, baik singgasana, maupun kerajaan, baik pemerintah, maupun penguasa; segala sesuatu diciptakan oleh Dia dan untuk Dia.",
  "Why 4:11": "\"Ya Tuhan dan Allah kami, Engkau layak menerima puji-pujian dan hormat dan kuasa; sebab Engkau telah menciptakan segala sesuatu; dan oleh karena kehendak-Mu semuanya itu ada dan diciptakan.\"",
  "Kej 1:2": "Bumi belum berbentuk dan kosong; gelap gulita menutupi samudera raya, dan Roh Allah melayang-layang di atas permukaan air.",
  "Mzm 104:30": "Apabila Engkau mengirim roh-Mu, mereka tercipta, dan Engkau membaharui muka bumi.",
  "Kej 1:3": "Berfirmanlah Allah: \"Jadilah terang.\" Lalu terang itu jadi.",
  "2Kor 4:6": "Sebab Allah yang telah berfirman: \"Dari dalam gelap akan terbit terang!\", Ia juga yang membuat terang-Nya bercahaya di dalam hati kita, supaya kita beroleh terang dari pengetahuan tentang kemuliaan Allah yang nampak pada wajah Kristus.",
  "Mzm 33:6": "Oleh firman TUHAN langit telah dijadikan, oleh nafas dari mulut-Nya segala tentaranya.",
  "Kej 1:26-27": "Berfirmanlah Allah: \"Baiklah Kita menjadikan manusia menurut gambar dan rupa Kita, supaya mereka berkuasa atas ikan-ikan di laut dan burung-burung di udara dan atas ternak dan atas seluruh bumi dan atas segala binatang melata yang merayap di bumi.\" Maka Allah menciptakan manusia itu menurut gambar-Nya, menurut gambar Allah diciptakan-Nya dia; laki-laki dan perempuan diciptakan-Nya mereka.",
  "Kol 3:10": "dan telah mengenakan manusia baru yang terus-menerus diperbaharui untuk memperoleh pengetahuan yang benar menurut gambar Khaliknya;",
  "Kej 2:7": "ketika itulah TUHAN Allah membentuk manusia itu dari debu tanah dan menghembuskan nafas hidup ke dalam hidungnya; demikianlah manusia itu menjadi makhluk yang hidup.",
  "1Kor 15:45": "Seperti ada tertulis: \"Manusia pertama, Adam menjadi makhluk yang hidup\", tetapi Adam yang akhir menjadi roh yang menghidupkan.",
  "Neh 9:6": "\"Hanya Engkau adalah TUHAN! Engkau telah menjadikan langit, ya langit segala langit dengan segala bala tentaranya, dan bumi dengan segala yang ada di atasnya, dan laut dengan segala yang ada di dalamnya. Engkau memberi hidup kepada semuanya itu dan bala tentara langit sujud menyembah kepada-Mu.",
  "Kis 17:24": "Allah yang telah menjadikan bumi dan segala isinya, Ia, yang adalah Tuhan atas langit dan bumi, tidak diam dalam kuil-kuil buatan tangan manusia,",
  "Ayb 38:4": "Di manakah engkau, ketika Aku meletakkan dasar bumi? Ceritakanlah, kalau engkau mempunyai pengertian!",
  "Yes 45:18": "Sebab beginilah firman TUHAN, yang menciptakan langit, --Dialah Allah--yang membentuk bumi dan menjadikannya dan yang menegakkannya, --dan Ia menciptakannya bukan supaya kosong, tetapi Ia membentuknya untuk didiami--:\"Akulah TUHAN dan tidak ada yang lain.",
  "Mzm 19:1": "Langit menceritakan kemuliaan Allah, dan cakrawala memberitakan pekerjaan tangan-Nya;",
  "Rm 1:20": "Sebab apa yang tidak nampak dari pada-Nya, yaitu kekuatan-Nya yang kekal dan keilahian-Nya, dapat nampak kepada pikiran dari karya-Nya sejak dunia diciptakan, sehingga mereka tidak dapat berdalih.",
  "Yes 65:17": "\"Sebab sesungguhnya, Aku menciptakan langit yang baru dan bumi yang baru; hal-hal yang dahulu tidak akan diingat lagi, dan tidak akan timbul lagi dalam hati.",
  "Why 21:1": "Lalu aku melihat langit yang baru dan bumi yang baru, sebab langit yang pertama dan bumi yang pertama telah berlalu, dan lautpun tidak ada lagi.",
  "Kej 3:15": "Aku akan mengadakan permusuhan antara engkau dan perempuan ini, antara keturunanmu dan keturunannya; keturunannya akan meremukkan kepalamu, dan engkau akan meremukkan tumitnya.\"",
  "Gal 4:4": "Tetapi setelah genap waktunya, maka Allah mengutus Anak-Nya, yang lahir dari seorang perempuan dan takluk kepada hukum Taurat.",
  "Kej 15:6": "Lalu percayalah Abram kepada TUHAN, maka TUHAN memperhitungkan hal itu kepadanya sebagai kebenaran.",
  "Rm 4:3": "Sebab apakah dikatakan nas Kitab Suci? \"Lalu percayalah Abraham kepada Tuhan, dan Tuhan memperhitungkan hal itu kepadanya sebagai kebenaran.\"",
  "Kej 22:8": "Sahut Abraham: \"Allah yang akan menyediakan anak domba untuk korban bakaran bagi-Nya, anakku.\" Demikianlah keduanya berjalan bersama-sama.",
  "Yoh 1:29": "Pada keesokan harinya Yohanes melihat Yesus datang kepadanya dan ia berkata: \"Lihatlah Anak domba Allah, yang menghapus dosa dunia.",
  "Kel 12:13": "Dan darah itu menjadi tanda bagimu pada rumah-rumah di mana kamu tinggal: Apabila Aku melihat darah itu, maka Aku akan lewat dari pada kamu. Jadi tidak akan ada tulah kemusnahan di tengah-tengah kamu, apabila Aku menghukum tanah Mesir.",
  "1Kor 5:7": "Buanglah ragi yang lama itu, supaya kamu menjadi adonan yang baru, sebab kamu memang tidak beragi. Sebab anak domba Paskah kita juga telah disembelih, yaitu Kristus.",
  "Bil 21:9": "Lalu Musa membuat ular tembaga dan menaruhnya pada sebuah tiang; maka jika seseorang dipagut ular, dan ia memandang kepada ular tembaga itu, tetaplah ia hidup.",
  "Yoh 3:14-15": "Dan sama seperti Musa meninggikan ular di padang gurun, demikian juga Anak Manusia harus ditinggikan, supaya setiap orang yang percaya kepada-Nya beroleh hidup yang kekal.",
  "Mzm 22:1": "Allahku, Allahku, mengapa Engkau meninggalkan aku? Aku berseru, tetapi Engkau tetap jauh dan tidak menolong aku.",
  "Mat 27:46": "Kira-kira jam tiga berserulah Yesus dengan suara nyaring: \"Eli, Eli, lama sabakhtani?\" Artinya: Allah-Ku, Allah-Ku, mengapa Engkau meninggalkan Aku?",
  "Yes 53:5": "Tetapi dia tertikam oleh karena pemberontakan kita, dia diremukkan oleh karena kejahatan kita; ganjaran yang mendatangkan keselamatan bagi kita ditimpakan kepadanya, dan oleh bilur-bilurnya kita menjadi sembuh.",
  "1Ptr 2:24": "Ia sendiri telah memikul dosa kita di dalam tubuh-Nya di kayu salib, supaya kita, yang telah mati terhadap dosa, hidup untuk kebenaran. Oleh bilur-bilur-Nya kamu telah sembuh.",
  "Yes 53:7": "Dia dianiaya, tetapi dia membiarkan diri ditindas dan tidak membuka mulutnya seperti anak domba yang dibawa ke pembantaian; seperti induk domba yang kelu di depan orang-orang yang menggunting bulunya, ia tidak membuka mulutnya.",
  "Kis 8:32": "Nas yang dibacanya itu berbunyi seperti berikut: Seperti seekor domba Ia dibawa ke pembantaian; dan seperti anak domba yang kelu di depan orang yang menggunting bulunya, demikianlah Ia tidak membuka mulut-Nya.",
  "Yer 31:31": "Sesungguhnya, akan datang waktunya, demikianlah firman TUHAN, Aku akan mengadakan perjanjian baru dengan kaum Israel dan kaum Yehuda,",
  "Ibr 8:8": "Sebab Ia menegor mereka ketika Ia berkata: \"Sesungguhnya, akan datang waktunya,\" demikianlah firman Tuhan, \"Aku akan mengadakan perjanjian baru dengan kaum Israel dan dengan kaum Yehuda,",
  "Yl 2:32": "Dan barangsiapa yang berseru kepada nama TUHAN akan diselamatkan, sebab di gunung Sion dan di Yerusalem akan ada keselamatan, seperti yang telah difirmankan TUHAN; dan setiap orang yang dipanggil TUHAN akan termasuk orang-orang yang terlepas.\"",
  "Rm 10:13": "Sebab, barangsiapa yang berseru kepada nama Tuhan, akan diselamatkan.",
  "Hab 2:4": "Sesungguhnya, orang yang membusungkan dada, tidak lurus hatinya, tetapi orang yang benar itu akan hidup oleh percayanya.",
  "Rm 1:17": "Sebab di dalamnya nyata kebenaran Allah, yang bertolak dari iman dan memimpin kepada iman, seperti ada tertulis: \"Orang benar akan hidup oleh iman.\"",
  "Yoh 3:16": "Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.",
  "Rm 5:8": "Akan tetapi Allah menunjukkan kasih-Nya kepada kita, oleh karena Kristus telah mati untuk kita, ketika kita masih berdosa.",
  "Ef 2:8": "Sebab karena kasih karunia kamu diselamatkan oleh iman; itu bukan hasil usahamu, tetapi pemberian Allah,",
  "Tit 3:5": "pada waktu itu Dia telah menyelamatkan kita, bukan karena perbuatan baik yang telah kita lakukan, tetapi karena rahmat-Nya oleh permandian kelahiran kembali dan oleh pembaharuan yang dikerjakan oleh Roh Kudus,",
  "Kel 19:6": "Kamu akan menjadi bagi-Ku kerajaan imam dan bangsa yang kudus. Inilah semuanya firman yang harus kaukatakan kepada orang Israel.\"",
  "1Ptr 2:9": "Tetapi kamulah bangsa yang terpilih, imamat yang rajani, bangsa yang kudus, umat kepunyaan Allah sendiri, supaya kamu memberitakan perbuatan-perbuatan yang besar dari Dia, yang telah memanggil kamu keluar dari kegelapan kepada terang-Nya yang ajaib:",
  "Mzm 118:22": "Batu yang dibuang oleh tukang-tukang bangunan telah menjadi batu penjuru.",
  "1Ptr 2:7": "Karena itu bagi kamu, yang percaya, ia mahal, tetapi bagi mereka yang tidak percaya: \"Batu yang telah dibuang oleh tukang-tukang bangunan, telah menjadi batu penjuru, juga telah menjadi batu sentuhan dan suatu batu sandungan.\"",
  "Yes 28:16": "sebab itu beginilah firman Tuhan ALLAH: \"Sesungguhnya, Aku meletakkan sebagai dasar di Sion sebuah batu, batu yang teruji, sebuah batu penjuru yang mahal, suatu dasar yang teguh: Siapa yang percaya, tidak akan gelisah!",
  "1Ptr 2:6": "Sebab ada tertulis dalam Kitab Suci: \"Sesungguhnya, Aku meletakkan di Sion sebuah batu yang terpilih, sebuah batu penjuru yang mahal, dan siapa yang percaya kepada-Nya, tidak akan dipermalukan.\"",
  "Yl 2:28": "\"Kemudian dari pada itu akan terjadi, bahwa Aku akan mencurahkan Roh-Ku ke atas semua manusia, maka anak-anakmu laki-laki dan perempuan akan bernubuat; orang-orangmu yang tua akan mendapat mimpi, teruna-terunamu akan mendapat penglihatan-penglihatan.\"",
  "Kis 2:17": "Akan terjadi pada hari-hari terakhir--demikianlah firman Allah--bahwa Aku akan mencurahkan Roh-Ku ke atas semua manusia; maka anak-anakmu laki-laki dan perempuan akan bernubuat, dan teruna-terunamu akan mendapat penglihatan-penglihatan, dan orang-orangmu yang tua akan mendapat mimpi.",
  "Mat 16:18": "Dan Akupun berkata kepadamu: Engkau adalah Petrus dan di atas batu karang ini Aku akan mendirikan jemaat-Ku dan alam maut tidak akan menguasainya.",
  "Ef 2:20": "yang dibangun di atas dasar para rasul dan para nabi, dengan Kristus Yesus sebagai batu penjuru.",
  "Mat 28:19": "Karena itu pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa dan Anak dan Roh Kudus,",
  "Kis 2:38": "Jawab Petrus kepada mereka: \"Bertobatlah dan hendaklah kamu masing-masing memberi dirimu dibaptis dalam nama Yesus Kristus untuk pengampunan dosamu, maka kamu akan menerima karunia Roh Kudus.\"",
  "Yoh 17:21": "supaya mereka semua menjadi satu, sama seperti Engkau, ya Bapa, di dalam Aku dan Aku di dalam Engkau, agar mereka juga di dalam Kita, supaya dunia percaya, bahwa Engkaulah yang telah mengutus Aku.",
  "Ef 4:4": "satu tubuh, dan satu Roh, sebagaimana kamu telah dipanggil kepada satu pengharapan yang terkandung dalam panggilanmu,",
  "Kis 2:42": "Mereka bertekun dalam pengajaran rasul-rasul dan dalam persekutuan. Dan mereka selalu berkumpul untuk memecahkan roti dan berdoa.",
  "1Kor 10:16": "Bukankah cawan pengucapan syukur, yang atasnya kita ucapkan syukur, adalah persekutuan dengan darah Kristus? Bukankah roti yang kita pecah-pecahkan adalah persekutuan dengan tubuh Kristus?",
  "Rm 12:5": "demikian juga kita, walaupun banyak, adalah satu tubuh di dalam Kristus; tetapi kita masing-masing adalah anggota yang seorang terhadap yang lain.",
  "1Kor 12:27": "Kamu semua adalah tubuh Kristus dan kamu masing-masing adalah anggotanya.",
  "Ef 1:22": "Dan segala sesuatu telah diletakkan-Nya di bawah kaki Kristus dan Dia telah diberikan-Nya kepada jemaat sebagai Kepala dari segala yang ada.",
  "Kol 1:18": "Ialah kepala tubuh, yaitu jemaat. Ialah yang sulung, yang pertama bangkit dari antara orang mati, sehingga Ia yang lebih utama dalam segala sesuatu.",
  "Ef 5:25": "Hai suami, kasihilah isterimu sebagaimana Kristus telah mengasihi jemaat dan telah menyerahkan diri-Nya baginya",
  "Why 19:7": "Marilah kita bersukacita dan bersorak-sorai, dan memuliakan Dia! Karena hari perkawinan Anak Domba telah tiba, dan pengantin-Nya telah siap sedia.",
  "Ef 5:27": "supaya dengan demikian Ia menempatkan jemaat di hadapan diri-Nya dengan cemerlang tanpa cacat atau kerut atau yang serupa itu, tetapi supaya jemaat kudus dan tidak bercela.",
  "Why 21:2": "Dan aku melihat kota yang kudus, Yerusalem yang baru, turun dari sorga, dari Allah, yang berhias bagaikan pengantin perempuan yang berdandan untuk suaminya.",
  "Kej 18:25": "Jauhlah kiranya dari pada-Mu untuk berbuat demikian, membunuh orang benar bersama-sama dengan orang fasik, sehingga orang benar itu seolah-olah sama dengan orang fasik! Jauhlah kiranya yang demikian dari pada-Mu! Masakan Hakim segenap bumi tidak menghukum dengan adil?\"",
  "Rm 3:6": "Sekali-kali tidak! Andaikata demikian, bagaimanakah Allah dapat menghakimi dunia?",
  "Mzm 9:8": "Dialah yang menghakimi dunia dengan keadilan dan mengadili bangsa-bangsa dengan kebenaran.",
  "Kis 17:31": "Karena Ia telah menetapkan suatu hari, pada waktu mana Ia dengan adil akan menghakimi dunia oleh seorang yang telah ditentukan-Nya, sesudah Ia memberikan kepada semua orang suatu bukti tentang hal itu dengan membangkitkan Dia dari antara orang mati.\"",
  "Pkh 12:14": "Karena Allah akan membawa setiap perbuatan ke pengadilan yang berlaku atas segala sesuatu yang tersembunyi, entah itu baik, entah itu jahat.",
  "2Kor 5:10": "Sebab kita semua harus menghadap takhta pengadilan Kristus, supaya setiap orang memperoleh apa yang patut diterimanya, sesuai dengan yang dilakukannya dalam hidupnya ini, baik ataupun jahat.",
  "Yes 66:24": "Mereka akan keluar dan akan memandangi bangkai orang-orang yang telah memberontak kepada-Ku. Di situ ulat-ulatnya tidak akan mati, dan apinya tidak akan padam, maka semuanya akan menjadi kengerian bagi segala yang hidup.",
  "Mrk 9:48": "di mana ulat-ulat bangkai tidak mati dan api tidak padam.",
  "Yer 17:10": "Aku, TUHAN, yang menyelidiki hati, yang menguji batin, untuk memberi balasan kepada setiap orang setimpal dengan tingkah langkahnya, setimpal dengan hasil perbuatannya.\"",
  "Why 22:12": "\"Sesungguhnya Aku datang segera dan Aku membawa upah-Ku untuk membalaskan kepada setiap orang menurut perbuatannya.",
  "Dan 7:10": "suatu sungai api timbul dan mengalir dari hadapan-Nya; seribu kali beribu-ribu melayani Dia, dan selaksa kali berlaksa-laksa berdiri di hadapan-Nya. Lalu duduklah Majelis Pengadilan dan dibukalah Kitab-kitab.",
  "Why 20:12": "Dan aku melihat orang-orang mati, besar dan kecil, berdiri di depan takhta itu. Lalu dibuka semua kitab. Dan dibuka juga sebuah kitab lain, yaitu kitab kehidupan. Dan orang-orang mati dihakimi menurut perbuatan mereka, berdasarkan apa yang ada tertulis di dalam kitab-kitab itu.",
  "Dan 12:2": "Dan banyak dari antara orang-orang yang telah tidur di dalam debu tanah, akan bangun, sebagian untuk mendapat hidup yang kekal, sebagian untuk mengalami kehinaan dan kengerian yang kekal.",
  "Yoh 5:29": "dan mereka yang telah berbuat baik akan keluar dan bangkit untuk hidup yang kekal, tetapi mereka yang telah berbuat jahat akan bangkit untuk dihukum.",
  "Yl 3:2": "Aku akan mengumpulkan segala bangsa dan akan membawa mereka turun ke lembah Yosafat; Aku akan berperkara dengan mereka di sana mengenai umat-Ku dan milik-Ku sendiri, Israel, oleh karena mereka mencerai-beraikannya ke antara bangsa-bangsa dan membagi-bagi tanah-Ku,",
  "Mat 25:32": "Lalu semua bangsa akan dikumpulkan di hadapan-Nya dan Ia akan memisahkan mereka seorang dari pada seorang, sama seperti gembala memisahkan domba dari kambing,",
  "Mal 4:1": "Bahwa sesungguhnya hari itu datang, menyala seperti perapian, maka semua orang gegabah dan setiap orang yang berbuat fasik menjadi seperti jerami dan akan terbakar oleh hari yang datang itu, firman TUHAN semesta alam, sampai tidak ditinggalkannya akar dan cabang mereka.",
  "2Ptr 3:7": "Tetapi oleh firman itu juga langit dan bumi yang sekarang terpelihara dari api dan disimpan untuk hari penghakiman dan kebinasaan orang-orang fasik.",
  "Mat 25:31": "\"Apabila Anak Manusia datang dalam kemuliaan-Nya dan semua malaikat bersama-sama dengan Dia, maka Ia akan bersemayam di atas takhta kemuliaan-Nya.",
  "Why 20:11": "Lalu aku melihat suatu takhta putih yang besar dan Dia, yang duduk di atasnya. Dari hadapan-Nya lenyaplah bumi dan langit dan tidak ditemukan lagi tempatnya.",
  "Yoh 5:22": "Bapa tidak menghakimi siapapun, melainkan telah menyerahkan penghakiman itu seluruhnya kepada Anak,",
  "Kis 10:42": "Dan Ia telah menugaskan kami memberitakan kepada seluruh bangsa dan bersaksi, bahwa Dialah yang ditentukan Allah menjadi Hakim atas orang-orang hidup dan orang-orang mati.",
  "Rm 2:16": "Hal itu akan nampak pada hari, bilamana Allah, sesuai dengan Injil yang kuberitakan, akan menghakimi segala sesuatu yang tersembunyi dalam hati manusia, oleh Kristus Yesus.",
  "Ibr 9:27": "Dan sama seperti manusia ditetapkan untuk mati hanya satu kali saja, dan sesudah itu dihakimi,",
  "Kej 22:18": "Oleh keturunanmulah semua bangsa di bumi akan mendapat berkat, karena engkau mendengarkan firman-Ku.\"",
  "Gal 3:16": "Adapun kepada Abraham diucapkan segala janji itu dan kepada keturunannya. Tidak dikatakan \"kepada keturunan-keturunannya\" seolah-olah dimaksud banyak orang, tetapi hanya satu orang: \"dan kepada keturunanmu\", yaitu Kristus.",
  "Kej 49:10": "Tongkat kerajaan tidak akan beranjak dari Yehuda ataupun lambang pemerintahan dari antara kakinya, sampai dia datang yang berhak atasnya, maka kepadanya akan takluk bangsa-bangsa.",
  "Luk 1:32-33": "Ia akan menjadi besar dan akan disebut Anak Allah Yang Mahatinggi. Dan Tuhan Allah akan mengaruniakan kepada-Nya takhta Daud, bapa leluhur-Nya, dan Ia akan menjadi raja atas kaum keturunan Yakub sampai selama-lamanya dan Kerajaan-Nya tidak akan berkesudahan.\"",
  "Kel 12:46": "Paskah itu harus dimakan dalam satu rumah juga; tidak boleh kaubawa sedikitpun dari daging itu keluar rumah; satu tulangpun tidak boleh kamu patahkan.",
  "Yoh 19:36": "Sebab hal itu terjadi, supaya genaplah yang tertulis dalam Kitab Suci: \"Tidak ada tulang-Nya yang akan dipatahkan.\"",
  "Im 17:11": "Karena nyawa makhluk ada di dalam darahnya dan Aku telah memberikan darah itu kepadamu di atas mezbah untuk mengadakan pendamaian bagi nyawamu, karena darah mengadakan pendamaian dengan perantaraan nyawa.",
  "Ibr 9:22": "Dan hampir segala sesuatu disucikan menurut hukum Taurat dengan darah, dan tanpa penumpahan darah tidak ada pengampunan.",
  "Bil 24:17": "Aku melihat dia, tetapi bukan sekarang; aku memandang dia, tetapi bukan dari dekat; bintang terbit dari Yakub, tongkat kerajaan timbul dari Israel, dan meremukkan pelipis-pelipis Moab, dan menghancurkan semua anak Set.",
  "Mat 2:2": "dan bertanya-tanya: \"Di manakah Dia, raja orang Yahudi yang baru dilahirkan itu? Kami telah melihat bintang-Nya di Timur dan kami datang untuk menyembah Dia.\"",
  "Ul 18:15": "Seorang nabi dari tengah-tengahmu, dari antara saudara-saudaramu, sama seperti aku, akan dibangkitkan bagimu oleh TUHAN, Allahmu; dialah yang harus kamu dengarkan.",
  "Kis 3:22": "Bukankah telah dikatakan Musa: Tuhan Allah akan membangkitkan bagimu seorang nabi dari antara saudara-saudaramu, sama seperti aku: Dengarkanlah dia dalam segala sesuatu yang akan dikatakannya kepadamu.",
  "Rut 4:17": "Dan tetangga-tetangga perempuan memberi nama kepada anak itu, katanya: \"Pada Naomi telah lahir seorang anak laki-laki\"; lalu mereka menyebutkan namanya Obed. Dialah ayah Isai, ayah Daud.",
  "Mat 1:5": "Salmon memperanakkan Boas dari Rahab, Boas memperanakkan Obed dari Rut, Obed memperanakkan Isai,",
  "2Sam 7:12-13": "Apabila umurmu sudah genap dan engkau telah mendapat perhentian bersama-sama dengan nenek moyangmu, maka Aku akan membangkitkan keturunanmu yang kemudian, anak kandungmu, dan Aku akan mengokohkan kerajaannya. Dialah yang akan mendirikan rumah bagi nama-Ku dan Aku akan mengokohkan takhta kerajaannya untuk selama-lamanya.",
  "2Sam 7:14": "Aku akan menjadi Bapanya, dan ia akan menjadi anak-Ku. Apabila ia melakukan kesalahan, maka Aku akan menghukum dia dengan rotan yang dipakai orang dan dengan pukulan yang diberikan anak-anak manusia.",
  "Ibr 1:5": "Karena kepada siapakah di antara malaikat-malaikat itu pernah Ia katakan: \"Anak-Ku Engkau! Engkau telah Kuperanakkan pada hari ini?\" dan \"Aku akan menjadi Bapa-Nya, dan Ia akan menjadi Anak-Ku?\"",
  "1Taw 17:11": "Apabila umurmu sudah genap untuk pergi mengikuti nenek moyangmu, maka Aku akan membangkitkan keturunanmu yang kemudian, salah seorang anakmu sendiri, dan Aku akan mengokohkan kerajaannya.",
  "Kis 13:23": "Dan dari keturunannyalah, sesuai dengan yang telah dijanjikan-Nya, Allah telah membangkitkan Juruselamat bagi orang Israel, yaitu Yesus.",
  "Mzm 2:7": "Aku mau menceritakan tentang ketetapan TUHAN; Ia berkata kepadaku: \"Anak-Ku engkau! Engkau telah Kuperanakkan pada hari ini.",
  "Mzm 16:10": "sebab Engkau tidak menyerahkan aku ke dunia orang mati, dan tidak membiarkan Orang Kudus-Mu melihat kebinasaan.",
  "Kis 2:31": "Karena itu ia telah melihat ke depan dan telah berbicara tentang kebangkitan Mesias, ketika ia mengatakan, bahwa Dia tidak ditinggalkan di dalam dunia orang mati, dan bahwa daging-Nya tidak mengalami kebinasaan.",
  "Mzm 22:16": "Sebab anjing-anjing mengerumuni aku, gerombolan penjahat mengepung aku, mereka menusuk tangan dan kakiku.",
  "Luk 24:39": "Lihatlah tangan-Ku dan kaki-Ku: Aku sendirilah ini; rabalah Aku dan lihatlah, karena hantu tidak ada daging dan tulangnya, seperti yang kamu lihat ada pada-Ku.\"",
  "Mzm 22:18": "Mereka membagi-bagi pakaianku di antara mereka, dan mereka membuang undi atas jubahku.",
  "Yoh 19:24": "Karena itu mereka berkata seorang kepada yang lain: \"Janganlah kita membaginya menjadi beberapa potong, tetapi baiklah kita membuang undi untuk menentukan siapa yang mendapatnya.\" Demikianlah hendaknya supaya genaplah yang ada tertulis dalam Kitab Suci: \"Mereka membagi-bagi pakaian-Ku di antara mereka dan mereka membuang undi atas jubah-Ku.\" Hal itu telah dilakukan prajurit-prajurit itu.",
  "Mzm 40:6-8": "Engkau tidak berkenan kepada korban sembelihan dan korban sajian, tetapi Engkau telah membuka telingaku; korban bakaran dan korban penghapus dosa tidak Engkau tuntut. Lalu aku berkata: \"Sungguh, aku datang; dalam gulungan kitab ada tertulis tentang aku; aku suka melakukan kehendak-Mu, ya Allahku; Taurat-Mu ada dalam dadaku.\"",
  "Ibr 10:5-7": "Karena itu ketika Ia masuk ke dunia, Ia berkata: \"Korban dan persembahan tidak Engkau kehendaki--tetapi Engkau telah menyediakan tubuh bagiku--. Kepada korban bakaran dan korban penghapus dosa Engkau tidak berkenan. Lalu Aku berkata: Sungguh, Aku datang; dalam gulungan kitab ada tertulis tentang Aku untuk melakukan kehendak-Mu, ya Allah-Ku.\"",
  "Mzm 110:1": "Mazmur Daud. Demikianlah firman TUHAN kepada tuanku: \"Duduklah di sebelah kanan-Ku, sampai Kubuat musuh-musuhmu menjadi tumpuan kakimu.\"",
  "Mat 22:44": "Tuhan telah berfirman kepada Tuanku: duduklah di sebelah kanan-Ku, sampai musuh-musuh-Mu Kutaruh di bawah kaki-Mu.",
  "Mzm 110:4": "TUHAN telah bersumpah, dan Ia tidak akan menyesal: \"Engkau adalah imam untuk selama-lamanya, menurut Melkisedek.\"",
  "Ibr 5:6": "sebagaimana firman-Nya dalam suatu nas lain: \"Engkau adalah Imam untuk selama-lamanya, menurut peraturan Melkisedek.\"",
  "Ams 30:4": "Siapakah yang naik ke sorga lalu turun? Siapakah yang telah mengumpulkan angin dalam genggamnya? Siapakah yang telah membungkus air dengan kain? Siapakah yang telah menetapkan segala ujung bumi? Siapa namanya dan siapa nama anaknya? Engkau tentu tahu!",
  "Yoh 3:13": "Tidak ada seorangpun yang telah naik ke sorga, selain dari pada Dia yang telah turun dari sorga, yaitu Anak Manusia.",
  "Yes 7:14": "Sebab itu Tuhan sendirilah yang akan memberikan kepadamu suatu pertanda: Sesungguhnya, seorang perempuan muda mengandung dan akan melahirkan seorang anak laki-laki, dan ia akan menamakan Dia Imanuel.",
  "Mat 1:22-23": "Hal itu terjadi supaya genaplah yang difirmankan Tuhan oleh nabi: \"Sesungguhnya, anak dara itu akan mengandung dan melahirkan seorang anak laki-laki, dan mereka akan menamakan Dia Imanuel\" --yang berarti: Allah menyertai kita.",
  "Yes 9:6": "Sebab seorang anak telah lahir untuk kita, seorang putera telah diberikan untuk kita; lambang pemerintahan ada di atas bahunya, dan namanya disebutkan orang: Penasihat Ajaib, Allah yang Perkasa, Bapa yang Kekal, Raja Damai.",
  "Luk 2:11": "Hari ini telah lahir bagimu Juruselamat, yaitu Kristus, Tuhan, di kota Daud.",
  "Yes 11:1": "Suatu tunas akan keluar dari tunggul Isai, dan taruk yang akan tumbuh dari pangkalnya akan berbuah.",
  "Rm 15:12": "Dan selanjutnya kata Yesaya: \"Taruk dari pangkal Isai akan terbit, dan Ia akan bangkit untuk memerintah bangsa-bangsa, dan kepada-Nyalah bangsa-bangsa akan menaruh harapan.\"",
  "Yes 40:3": "Ada suara yang berseru-seru: \"Persiapkanlah di padang gurun jalan untuk TUHAN, luruskanlah di padang belantara jalan raya bagi Allah kita!",
  "Mat 3:3": "Sesungguhnya dialah yang dimaksudkan nabi Yesaya ketika ia berkata: \"Ada suara orang yang berseru-seru di padang gurun: Persiapkanlah jalan untuk Tuhan, luruskanlah jalan bagi-Nya.\"",
  "Yes 61:1": "Roh Tuhan ALLAH ada padaku, oleh karena TUHAN telah mengurapi aku; Ia telah mengutus aku untuk menyampaikan kabar baik kepada orang-orang sengsara, dan merawat orang-orang yang remuk hati, untuk memberitakan pembebasan kepada orang-orang tawanan, dan kepada orang-orang yang terkurung kelepasan dari penjara,",
  "Luk 4:18": "\"Roh Tuhan ada pada-Ku, oleh sebab Ia telah mengurapi Aku, untuk menyampaikan kabar baik kepada orang-orang miskin; dan Ia telah mengutus Aku",
  "Yer 23:5": "Sesungguhnya, waktunya akan datang, demikianlah firman TUHAN, bahwa Aku akan menumbuhkan Tunas adil bagi Daud. Ia akan memerintah sebagai raja yang bijaksana dan akan melakukan keadilan dan kebenaran di negeri.",
  "Yoh 7:42": "Karena Kitab Suci mengatakan, bahwa Mesias berasal dari keturunan Daud dan dari kampung Betlehem, tempat Daud dahulu tinggal.\"",
  "Yer 31:15": "Beginilah firman TUHAN: Dengar! Di Rama terdengar ratapan, tangisan yang pahit pedih: Rahel menangisi anak-anaknya, ia tidak mau dihibur karena anak-anaknya, sebab mereka tidak ada lagi.",
  "Mat 2:17-18": "Dengan demikian genaplah firman yang disampaikan oleh nabi Yeremia: \"Terdengarlah suara di Rama, tangis dan ratap yang amat sedih; Rahel menangisi anak-anaknya dan ia tidak mau dihibur, sebab mereka tidak ada lagi.\"",
  "Yeh 34:23": "Aku akan mengangkat satu orang gembala atas mereka, yang akan menggembalakannya, yaitu Daud, hamba-Ku; dia akan menggembalakan mereka, dan menjadi gembalanya.",
  "Yoh 10:11": "Akulah gembala yang baik. Gembala yang baik memberikan nyawanya bagi domba-dombanya;",
  "Dan 7:13": "Aku terus melihat dalam penglihatan malam itu, tampak datang dengan awan-awan dari langit seorang seperti anak manusia; datanglah ia kepada Yang Lanjut Usianya itu, dan ia dibawa ke hadapan-Nya.",
  "Mat 26:64": "Jawab Yesus: \"Engkau telah mengatakannya. Akan tetapi, Aku berkata kepadamu, mulai sekarang kamu akan melihat Anak Manusia duduk di sebelah kanan Yang Mahakuasa dan datang di atas awan-awan di langit.\"",
  "Hos 11:1": "Ketika Israel masih muda, Kukasihi dia, dan dari Mesir Kupanggil anak-Ku itu.",
  "Mat 2:15": "dan tinggal di sana hingga Herodes mati. Hal itu terjadi supaya genaplah yang difirmankan Tuhan oleh nabi: \"Dari Mesir Kupanggil Anak-Ku.\"",
  "Am 9:11": "\"Pada hari itu Aku akan mendirikan kembali pondok Daud yang telah roboh; Aku akan menutup pecahan dindingnya, dan akan mendirikan kembali reruntuhannya; Aku akan membangunnya kembali seperti di zaman dahulu kala,",
  "Kis 15:16": "Kemudian Aku akan kembali dan membangunkan kembali pondok Daud yang telah roboh, dan reruntuhannya akan Kubangun kembali dan akan Kuteguhkan,",
  "Yun 1:17": "Maka atas penentuan TUHAN datanglah seekor ikan besar yang menelan Yunus; dan Yunus tinggal di dalam perut ikan itu tiga hari tiga malam lamanya.",
  "Mat 12:40": "Sebab seperti Yunus tinggal di dalam perut ikan tiga hari tiga malam, demikian juga Anak Manusia akan tinggal di dalam rahim bumi tiga hari tiga malam.",
  "Mi 5:2": "Tetapi engkau, hai Betlehem Efrata, hai yang terkecil di antara kaum-kaum Yehuda, dari padamu akan bangkit bagi-Ku seorang yang akan memerintah Israel, yang permulaannya sudah sejak purbakala, sejak dahulu kala.",
  "Mat 2:6": "Dan engkau Betlehem, tanah Yehuda, engkau sekali-kali bukanlah yang terkecil di antara mereka yang memerintah Yehuda, karena dari padamulah akan bangkit seorang pemimpin, yang akan menggembalakan umat-Ku Israel.\"",
  "Za 9:9": "Bersorak-soraklah dengan nyaring, hai puteri Sion, bersorak-sorailah, hai puteri Yerusalem! Lihat, rajamu datang kepadamu; ia adil dan jaya. Ia lemah lembut dan mengendarai seekor keledai, seekor keledai beban yang muda.",
  "Mat 21:5": "\"Katakanlah kepada puteri Sion: Lihat, Rajamu datang kepadamu, Ia lemah lembut dan mengendarai seekor keledai, seekor keledai beban yang muda.\"",
  "Za 11:12": "Lalu aku berkata kepada mereka: \"Jika itu kamu anggap baik, berikanlah upahku, dan jika tidak, biarkanlah!\" Maka mereka membayar upahku dengan menimbang tiga puluh uang perak.",
  "Mat 26:15": "Ia berkata: \"Apa yang hendak kamu berikan kepadaku, supaya aku menyerahkan Dia kepada kamu?\" Mereka membayar tiga puluh uang perak kepadanya.",
  "Za 12:10": "\"Aku akan mencurahkan roh pengasihan dan roh permohonan atas keluarga Daud dan atas penduduk Yerusalem, dan mereka akan memandang kepada dia yang telah mereka tikam, dan akan meratapi dia seperti orang meratapi anak tunggal, dan akan menangisi dia dengan pedih seperti orang menangisi anak sulung.",
  "Yoh 19:37": "Dan ada pula nas yang mengatakan: \"Mereka akan memandang kepada Dia yang telah mereka tikam.\"",
  "Mal 3:1": "Lihat, Aku menyuruh utusan-Ku, supaya ia mempersiapkan jalan di hadapan-Ku! Dengan mendadak Tuhan yang kamu cari itu akan masuk ke bait-Nya! Malaikat Perjanjian yang kamu kehendaki itu, sesungguhnya, Ia datang, firman TUHAN semesta alam.",
  "Mat 11:10": "Karena tentang dia ada tertulis: Lihatlah, Aku menyuruh utusan-Ku mendahului Engkau, ia akan mempersiapkan jalan-Mu di hadapan-Mu.",
  "Mal 4:5": "Sesungguhnya Aku akan mengutus nabi Elia kepadamu menjelang datangnya hari TUHAN yang besar dan dahsyat itu.",
  "Mat 11:14": "dan--jika kamu mau menerimanya--ialah Elia yang akan datang itu.",
  "Mat 24:30": "Pada waktu itu akan tampak tanda Anak Manusia di langit dan semua bangsa di bumi akan meratap dan mereka akan melihat Anak Manusia itu datang di atas awan-awan di langit dengan segala kekuasaan dan kemuliaan-Nya.",
  "Mrk 13:26": "Pada waktu itu orang akan melihat Anak Manusia datang dalam awan-awan dengan segala kekuasaan dan kemuliaan-Nya.",
  "Luk 21:27": "Pada waktu itu orang akan melihat Anak Manusia datang dalam awan dengan segala kekuasaan dan kemuliaan-Nya.",
  "Yoh 5:28-29": "Janganlah kamu heran akan hal itu, sebab saatnya akan tiba, bahwa semua orang yang di dalam kuburan akan mendengar suara-Nya, dan mereka yang telah berbuat baik akan keluar dan bangkit untuk hidup yang kekal, tetapi mereka yang telah berbuat jahat akan bangkit untuk dihukum.",
  "Yoh 14:3": "Dan apabila Aku telah pergi ke situ dan telah menyediakan tempat bagimu, Aku akan datang kembali dan membawa kamu ke tempat-Ku, supaya di tempat di mana Aku berada, kamupun berada.",
  "Za 14:4": "Pada waktu itu kaki-Nya akan berjejak di bukit Zaitun yang terletak di depan Yerusalem di sebelah timur. Bukit Zaitun itu akan terbelah dua dari timur ke barat, sehingga terjadi suatu lembah yang sangat besar; setengah dari bukit itu akan bergeser ke utara dan setengah lagi ke selatan.",
  "Kis 1:11": "dan berkata kepada mereka: \"Hai orang-orang Galilea, mengapakah kamu berdiri melihat ke langit? Yesus ini, yang terangkat ke sorga meninggalkan kamu, akan datang kembali dengan cara yang sama seperti kamu melihat Dia naik ke sorga.\"",
  "Yes 59:20": "Dan Ia akan datang sebagai Penebus untuk Sion dan untuk orang-orang Yakub yang bertobat dari pemberontakannya, demikianlah firman TUHAN.",
  "Rm 11:26": "Dengan jalan demikian seluruh Israel akan diselamatkan, seperti ada tertulis: \"Dari Sion akan datang Penebus, Ia akan menyingkirkan segala kefasikan dari pada Yakub.",
  "1Kor 15:23": "Tetapi tiap-tiap orang menurut urutannya: Kristus sebagai buah sulung; sesudah itu mereka yang menjadi milik-Nya pada waktu kedatangan-Nya.",
  "1Kor 11:26": "Sebab setiap kali kamu makan roti ini dan minum cawan ini, kamu memberitakan kematian Tuhan sampai Ia datang.",
  "Flp 3:20-21": "Karena kewargaan kita adalah di dalam sorga, dan dari situ juga kita menantikan Tuhan Yesus Kristus sebagai Juruselamat, yang akan mengubah tubuh kita yang hina ini, sehingga serupa dengan tubuh-Nya yang mulia, menurut kuasa-Nya yang dapat menaklukkan segala sesuatu kepada diri-Nya.",
  "Kol 3:4": "Apabila Kristus, yang adalah hidup kita, menyatakan diri kelak, kamupun akan menyatakan diri bersama dengan Dia dalam kemuliaan.",
  "1Tes 4:16-17": "Sebab pada waktu tanda diberi, yaitu pada waktu penghulu malaikat berseru dan sangkakala Allah berbunyi, maka Tuhan sendiri akan turun dari sorga dan mereka yang mati dalam Kristus akan lebih dahulu bangkit; sesudah itu, kita yang hidup, yang masih tinggal, akan diangkat bersama-sama dengan mereka dalam awan menyongsong Tuhan di angkasa. Demikianlah kita akan selama-lamanya bersama-sama dengan Tuhan.",
  "Yl 2:31": "Matahari akan berubah menjadi gelap gulita dan bulan menjadi darah sebelum datangnya hari TUHAN yang hebat dan dahsyat itu.",
  "1Tes 5:2": "karena kamu sendiri tahu benar-benar, bahwa hari Tuhan datang seperti pencuri pada malam.",
  "Yes 66:15": "Sebab sesungguhnya, TUHAN akan datang dengan api, dan kereta-kereta-Nya akan seperti puting beliung, untuk melampiaskan murka-Nya dengan kepanasan dan hardik-Nya dengan nyala api.",
  "2Tes 1:7-8": "dan untuk memberikan kelegaan kepada kamu yang ditindas, dan juga kepada kami, pada waktu Tuhan Yesus dari dalam sorga menyatakan diri-Nya bersama-sama dengan malaikat-malaikat-Nya, dalam kuasa-Nya, di dalam api yang bernyala-nyala, dan mengadakan pembalasan terhadap mereka yang tidak mau mengenal Allah dan tidak mentaati Injil Yesus, Tuhan kita.",
  "1Tim 6:14": "Turutilah perintah ini, dengan tidak bercacat dan tidak bercela, hingga pada saat Tuhan kita Yesus Kristus menyatakan diri-Nya,",
  "2Tim 4:8": "Sekarang telah tersedia bagiku mahkota kebenaran yang akan dikaruniakan kepadaku oleh Tuhan, Hakim yang adil, pada hari-Nya; tetapi bukan hanya kepadaku, melainkan juga kepada semua orang yang merindukan kedatangan-Nya.",
  "Tit 2:13": "dengan menantikan penggenapan pengharapan kita yang penuh bahagia dan penyataan kemuliaan Allah yang Mahabesar dan Juruselamat kita Yesus Kristus,",
  "Ibr 9:28": "demikian pula Kristus hanya satu kali saja mengorbankan diri-Nya untuk menanggung dosa banyak orang. Sesudah itu Ia akan menyatakan diri-Nya sekali lagi tanpa menanggung dosa untuk menganugerahkan keselamatan kepada mereka, yang menantikan Dia.",
  "Hab 2:3": "Sebab penglihatan itu masih menanti saatnya, tetapi ia bersegera menuju kesudahannya dengan tidak menipu; apabila berlambat-lambat, nantikanlah itu, sebab itu sungguh-sungguh akan datang dan tidak akan bertangguh.",
  "Ibr 10:37": "\"Sebab sedikit, bahkan sangat sedikit waktu lagi, dan Ia yang akan datang, sudah akan ada, tanpa menangguhkan kedatangan-Nya.",
  "Yak 5:8": "Kamu juga harus bersabar dan harus meneguhkan hatimu, karena kedatangan Tuhan sudah dekat!",
  "1Ptr 5:4": "Maka kamu, apabila Gembala Agung datang, kamu akan menerima mahkota kemuliaan yang tidak dapat layu.",
  "2Ptr 3:10": "Tetapi hari Tuhan akan tiba seperti pencuri. Pada hari itu langit akan lenyap dengan gemuruh yang dahsyat dan unsur-unsur dunia akan hangus dalam nyala api, dan bumi dan segala yang ada di atasnya akan hilang lenyap.",
  "1Yoh 3:2": "Saudara-saudaraku yang kekasih, sekarang kita adalah anak-anak Allah, tetapi belum nyata apa keadaan kita kelak; akan tetapi kita tahu, bahwa apabila Kristus menyatakan diri-Nya, kita akan menjadi sama seperti Dia, sebab kita akan melihat Dia dalam keadaan-Nya yang sebenarnya.",
  "Za 14:5": "Maka tertutuplah lembah gunung-gunung-Ku, sebab lembah gunung itu akan menyentuh sisinya; dan kamu akan melarikan diri seperti kamu pernah melarikan diri oleh karena gempa bumi pada zaman Uzia, raja Yehuda. Lalu TUHAN, Allahku, akan datang, dan semua orang kudus bersama-sama Dia.",
  "Yud 1:14": "Juga tentang mereka Henokh, keturunan ketujuh dari Adam, telah bernubuat, katanya: \"Sesungguhnya Tuhan datang dengan beribu-ribu orang kudus-Nya,",
  "Why 1:7": "Lihatlah, Ia datang dengan awan-awan dan setiap mata akan melihat Dia, juga mereka yang telah menikam Dia. Dan semua bangsa di bumi akan meratapi Dia. Ya, amin.",
  "Yes 40:10": "Lihat, itu Tuhan ALLAH, Ia datang dengan kekuatan dan dengan tangan-Nya Ia berkuasa. Lihat, mereka yang menjadi upah jerih payah-Nya ada bersama-sama Dia, dan mereka yang diperoleh-Nya berjalan di hadapan-Nya.",
  "Why 22:20": "Ia yang memberi kesaksian tentang semuanya ini, berfirman: \"Ya, Aku datang segera!\" Amin, datanglah, Tuhan Yesus!"
};

/* ---------------------------------------------------------------------
   NUBUAT "FIRMAN MENJADI MANUSIA" — klik nama kitab di Keterhubungan Firman.
   Pasangan nubuat (PL) → penggenapan (PB). Teks TB di VERSE_TEXTS (alkitab.sabda.org).
   Kitab menampilkan semua pasangan yang salah satu sisinya ada di kitab itu.
   --------------------------------------------------------------------- */
export const INCARNATION_PROPHECIES = [
  {
    "from": "Kej 3:15",
    "to": "Gal 4:4",
    "note": "Keturunan perempuan yang meremukkan kepala ular"
  },
  {
    "from": "Kej 22:18",
    "to": "Gal 3:16",
    "note": "Keturunan Abraham yang memberkati segala bangsa"
  },
  {
    "from": "Kej 49:10",
    "to": "Luk 1:32-33",
    "note": "Tongkat kerajaan tidak beranjak dari Yehuda"
  },
  {
    "from": "Kel 12:46",
    "to": "Yoh 19:36",
    "note": "Anak domba Paskah: tulang-Nya tidak dipatahkan"
  },
  {
    "from": "Im 17:11",
    "to": "Ibr 9:22",
    "note": "Darah yang mengadakan pendamaian"
  },
  {
    "from": "Bil 24:17",
    "to": "Mat 2:2",
    "note": "Bintang terbit dari Yakub"
  },
  {
    "from": "Bil 21:9",
    "to": "Yoh 3:14-15",
    "note": "Ular tembaga yang ditinggikan"
  },
  {
    "from": "Ul 18:15",
    "to": "Kis 3:22",
    "note": "Seorang nabi seperti Musa"
  },
  {
    "from": "Rut 4:17",
    "to": "Mat 1:5",
    "note": "Silsilah Daud melalui Rut"
  },
  {
    "from": "2Sam 7:12-13",
    "to": "Luk 1:32-33",
    "note": "Takhta Daud yang kekal"
  },
  {
    "from": "2Sam 7:14",
    "to": "Ibr 1:5",
    "note": "Aku akan menjadi Bapa-Nya"
  },
  {
    "from": "1Taw 17:11",
    "to": "Kis 13:23",
    "note": "Juruselamat dari keturunan Daud"
  },
  {
    "from": "Mzm 2:7",
    "to": "Ibr 1:5",
    "note": "Anak-Ku Engkau"
  },
  {
    "from": "Mzm 16:10",
    "to": "Kis 2:31",
    "note": "Tidak dibiarkan melihat kebinasaan"
  },
  {
    "from": "Mzm 22:16",
    "to": "Luk 24:39",
    "note": "Tangan dan kaki yang ditusuk"
  },
  {
    "from": "Mzm 22:18",
    "to": "Yoh 19:24",
    "note": "Membuang undi atas jubah-Nya"
  },
  {
    "from": "Mzm 40:6-8",
    "to": "Ibr 10:5-7",
    "note": "Sungguh, Aku datang — tubuh disediakan bagi-Nya"
  },
  {
    "from": "Mzm 110:1",
    "to": "Mat 22:44",
    "note": "Tuhan bagi Daud"
  },
  {
    "from": "Mzm 110:4",
    "to": "Ibr 5:6",
    "note": "Imam menurut peraturan Melkisedek"
  },
  {
    "from": "Mzm 118:22",
    "to": "1Ptr 2:7",
    "note": "Batu yang dibuang menjadi batu penjuru"
  },
  {
    "from": "Ams 30:4",
    "to": "Yoh 3:13",
    "note": "Yang naik ke sorga dan turun"
  },
  {
    "from": "Yes 7:14",
    "to": "Mat 1:22-23",
    "note": "Perawan mengandung: Imanuel"
  },
  {
    "from": "Yes 9:6",
    "to": "Luk 2:11",
    "note": "Seorang anak telah lahir untuk kita"
  },
  {
    "from": "Yes 11:1",
    "to": "Rm 15:12",
    "note": "Tunas dari tunggul Isai"
  },
  {
    "from": "Yes 40:3",
    "to": "Mat 3:3",
    "note": "Suara yang berseru di padang gurun"
  },
  {
    "from": "Yes 53:5",
    "to": "1Ptr 2:24",
    "note": "Oleh bilur-bilur-Nya kita sembuh"
  },
  {
    "from": "Yes 61:1",
    "to": "Luk 4:18",
    "note": "Roh Tuhan ada pada-Ku"
  },
  {
    "from": "Yer 23:5",
    "to": "Yoh 7:42",
    "note": "Tunas adil bagi Daud"
  },
  {
    "from": "Yer 31:15",
    "to": "Mat 2:17-18",
    "note": "Ratapan di Rama"
  },
  {
    "from": "Yer 31:31",
    "to": "Ibr 8:8",
    "note": "Perjanjian baru"
  },
  {
    "from": "Yeh 34:23",
    "to": "Yoh 10:11",
    "note": "Seorang gembala, hamba-Ku Daud"
  },
  {
    "from": "Dan 7:13",
    "to": "Mat 26:64",
    "note": "Anak Manusia datang dengan awan"
  },
  {
    "from": "Hos 11:1",
    "to": "Mat 2:15",
    "note": "Dari Mesir Kupanggil anak-Ku"
  },
  {
    "from": "Yl 2:32",
    "to": "Rm 10:13",
    "note": "Berseru kepada nama Tuhan"
  },
  {
    "from": "Am 9:11",
    "to": "Kis 15:16",
    "note": "Pondok Daud dibangun kembali"
  },
  {
    "from": "Yun 1:17",
    "to": "Mat 12:40",
    "note": "Tiga hari tiga malam"
  },
  {
    "from": "Mi 5:2",
    "to": "Mat 2:6",
    "note": "Lahir di Betlehem"
  },
  {
    "from": "Za 9:9",
    "to": "Mat 21:5",
    "note": "Raja yang menunggang keledai"
  },
  {
    "from": "Za 11:12",
    "to": "Mat 26:15",
    "note": "Tiga puluh uang perak"
  },
  {
    "from": "Za 12:10",
    "to": "Yoh 19:37",
    "note": "Memandang Dia yang ditikam"
  },
  {
    "from": "Mal 3:1",
    "to": "Mat 11:10",
    "note": "Utusan yang mempersiapkan jalan"
  },
  {
    "from": "Mal 4:5",
    "to": "Mat 11:14",
    "note": "Elia yang akan datang"
  }
];

/* Nubuat KEDATANGAN KRISTUS YANG KEDUA KALI — Matius..Wahyu (dan akar PL-nya).
   `from` = akar Perjanjian Lama (boleh null), `to` = nas Perjanjian Baru. Teks TB di VERSE_TEXTS. */
export const SECOND_COMING_PROPHECIES = [
  {
    "from": "Dan 7:13",
    "to": "Mat 24:30",
    "note": "Anak Manusia datang di atas awan-awan"
  },
  {
    "from": null,
    "to": "Mat 25:31",
    "note": "Bersemayam di atas takhta kemuliaan-Nya"
  },
  {
    "from": "Dan 7:13",
    "to": "Mrk 13:26",
    "note": "Datang dalam awan dengan segala kekuasaan"
  },
  {
    "from": null,
    "to": "Luk 21:27",
    "note": "Datang dalam awan dengan kemuliaan-Nya"
  },
  {
    "from": "Dan 12:2",
    "to": "Yoh 5:28-29",
    "note": "Orang mati bangkit mendengar suara-Nya"
  },
  {
    "from": null,
    "to": "Yoh 14:3",
    "note": "Aku akan datang kembali"
  },
  {
    "from": "Za 14:4",
    "to": "Kis 1:11",
    "note": "Kembali dengan cara yang sama (Bukit Zaitun)"
  },
  {
    "from": "Yes 59:20",
    "to": "Rm 11:26",
    "note": "Penebus akan datang dari Sion"
  },
  {
    "from": null,
    "to": "1Kor 15:23",
    "note": "Pada waktu kedatangan-Nya"
  },
  {
    "from": null,
    "to": "1Kor 11:26",
    "note": "Sampai Ia datang"
  },
  {
    "from": null,
    "to": "Flp 3:20-21",
    "note": "Menantikan Juruselamat dari sorga"
  },
  {
    "from": null,
    "to": "Kol 3:4",
    "note": "Apabila Kristus menyatakan diri kelak"
  },
  {
    "from": null,
    "to": "1Tes 4:16-17",
    "note": "Tuhan sendiri akan turun dari sorga"
  },
  {
    "from": "Yl 2:31",
    "to": "1Tes 5:2",
    "note": "Hari Tuhan datang seperti pencuri"
  },
  {
    "from": "Yes 66:15",
    "to": "2Tes 1:7-8",
    "note": "Dinyatakan dalam api yang bernyala-nyala"
  },
  {
    "from": null,
    "to": "1Tim 6:14",
    "note": "Sampai Yesus Kristus menyatakan diri"
  },
  {
    "from": null,
    "to": "2Tim 4:8",
    "note": "Semua yang merindukan kedatangan-Nya"
  },
  {
    "from": null,
    "to": "Tit 2:13",
    "note": "Pengharapan yang penuh bahagia"
  },
  {
    "from": null,
    "to": "Ibr 9:28",
    "note": "Menyatakan diri-Nya sekali lagi"
  },
  {
    "from": "Hab 2:3",
    "to": "Ibr 10:37",
    "note": "Ia yang akan datang tidak akan menangguhkan"
  },
  {
    "from": null,
    "to": "Yak 5:8",
    "note": "Kedatangan Tuhan sudah dekat"
  },
  {
    "from": null,
    "to": "1Ptr 5:4",
    "note": "Apabila Gembala Agung datang"
  },
  {
    "from": null,
    "to": "2Ptr 3:10",
    "note": "Hari Tuhan tiba seperti pencuri"
  },
  {
    "from": null,
    "to": "1Yoh 3:2",
    "note": "Kita akan menjadi sama seperti Dia"
  },
  {
    "from": "Za 14:5",
    "to": "Yud 1:14",
    "note": "Datang dengan beribu-ribu orang kudus-Nya"
  },
  {
    "from": "Za 12:10",
    "to": "Why 1:7",
    "note": "Setiap mata akan melihat Dia"
  },
  {
    "from": "Yes 40:10",
    "to": "Why 22:12",
    "note": "Aku datang segera membawa upah-Ku"
  },
  {
    "from": null,
    "to": "Why 22:20",
    "note": "Ya, Aku datang segera"
  }
];

/* Ringkasan singkat tiap kitab — tampil di panel kitab bila tidak ada nubuat yang dicatat. */
export const BOOK_SUMMARIES = {
  "Kej": "Kitab permulaan: penciptaan langit dan bumi, kejatuhan manusia ke dalam dosa, air bah, menara Babel, lalu panggilan Allah kepada Abraham dan kisah para bapa leluhur—Ishak, Yakub, dan Yusuf—sampai Israel menetap di Mesir.",
  "Kel": "Allah membebaskan Israel dari perbudakan Mesir melalui Musa, mengadakan Paskah, membelah Laut Teberau, memberikan Sepuluh Perintah di Sinai, dan memerintahkan pembangunan Kemah Suci sebagai tempat kediaman-Nya di tengah umat.",
  "Im": "Petunjuk tentang kekudusan: korban-korban, tugas imam, hukum tahir dan najis, Hari Pendamaian, serta hari-hari raya—\"Kuduslah kamu, sebab Aku kudus.\"",
  "Bil": "Perjalanan Israel selama empat puluh tahun di padang gurun: sensus umat, pemberontakan dan ketidakpercayaan, hukuman Allah, serta kesetiaan-Nya yang tetap memimpin generasi baru menuju Tanah Perjanjian.",
  "Ul": "Khotbah-khotbah terakhir Musa di dataran Moab yang mengulang Taurat bagi generasi baru: kasihilah TUHAN dengan segenap hati, taatilah perjanjian-Nya, dan pilihlah kehidupan.",
  "Yos": "Di bawah pimpinan Yosua, Israel menyeberangi Sungai Yordan, merebut Tanah Kanaan, dan membagi-bagikannya kepada kedua belas suku—bukti bahwa Allah menggenapi janji-Nya kepada Abraham.",
  "Hak": "Siklus yang berulang di Israel: umat berdosa, ditindas bangsa lain, berseru kepada TUHAN, lalu dibebaskan melalui para hakim seperti Debora, Gideon, dan Simson—\"setiap orang berbuat apa yang benar menurut pandangannya sendiri.\"",
  "Rut": "Kisah kesetiaan Rut, perempuan Moab, kepada mertuanya Naomi. Melalui Boas sebagai penebus kerabat, Rut menjadi nenek buyut Raja Daud—tanda pemeliharaan Allah dalam hidup sehari-hari.",
  "1Sam": "Peralihan Israel dari para hakim ke kerajaan: pelayanan nabi Samuel, kebangkitan dan kejatuhan Raja Saul, serta Daud yang diurapi, mengalahkan Goliat, dan hidup dalam pelarian.",
  "2Sam": "Pemerintahan Raja Daud: Yerusalem menjadi ibu kota, Allah mengikat perjanjian takhta yang kekal dengan Daud, lalu dosa Daud dengan Batsyeba dan akibat-akibat pahitnya dalam keluarga dan kerajaan.",
  "1Raj": "Hikmat dan kemegahan Salomo serta pembangunan Bait Allah, lalu perpecahan kerajaan menjadi Israel (utara) dan Yehuda (selatan), dan pelayanan nabi Elia melawan penyembahan Baal.",
  "2Raj": "Kemerosotan kedua kerajaan: pelayanan nabi Elisa, raja-raja yang setia maupun yang jahat, sampai Israel dibuang ke Asyur dan Yehuda ke Babel karena tidak mau bertobat.",
  "1Taw": "Sejarah umat ditulis ulang setelah pembuangan: silsilah dari Adam sampai Israel, lalu pemerintahan Daud, persiapan pembangunan Bait Allah, dan penataan ibadah para imam dan orang Lewi.",
  "2Taw": "Kelanjutan sejarah Yehuda dari Salomo sampai pembuangan, dengan sorotan pada Bait Allah, ibadah yang benar, dan pembaruan rohani di bawah raja-raja seperti Hizkia dan Yosia.",
  "Ezr": "Kepulangan orang Yahudi dari pembuangan Babel, pembangunan kembali Bait Allah di Yerusalem, dan pembaruan umat melalui pengajaran Taurat oleh imam Ezra.",
  "Neh": "Nehemia memimpin pembangunan kembali tembok Yerusalem di tengah tentangan, lalu bersama Ezra membarui perjanjian umat dengan Allah melalui pembacaan Taurat dan pertobatan.",
  "Est": "Ratu Ester mempertaruhkan nyawanya di istana Persia untuk menyelamatkan bangsa Yahudi dari rencana pemusnahan Haman. Nama Allah tidak disebut, tetapi pemeliharaan-Nya nyata di setiap peristiwa; asal-usul hari raya Purim.",
  "Ayb": "Ayub, orang benar yang kehilangan segalanya, bergumul dengan pertanyaan mengapa orang benar menderita. Allah menjawab dari dalam badai, menyatakan kedaulatan dan hikmat-Nya, lalu memulihkan Ayub.",
  "Mzm": "Kumpulan 150 doa dan nyanyian umat Allah: pujian, ratapan, pengakuan dosa, ucapan syukur, dan pengharapan—banyak di antaranya ditulis Daud dan dipakai dalam ibadah.",
  "Ams": "Kumpulan nasihat hikmat untuk hidup sehari-hari—tentang perkataan, pekerjaan, keluarga, dan kejujuran—berakar pada satu prinsip: \"Takut akan TUHAN adalah permulaan pengetahuan.\"",
  "Pkh": "Renungan Sang Pengkhotbah tentang kesia-siaan hidup \"di bawah matahari\" bila dijalani tanpa Allah. Kesimpulannya: takutlah akan Allah dan berpeganglah pada perintah-perintah-Nya.",
  "Kid": "Syair cinta antara mempelai laki-laki dan perempuan yang merayakan keindahan kasih dan pernikahan; dalam tradisi Gereja dibaca juga sebagai gambaran kasih Allah kepada umat-Nya dan jiwa manusia.",
  "Yes": "Nubuat Yesaya tentang hukuman atas dosa Yehuda dan bangsa-bangsa, sekaligus penghiburan dan pengharapan: kedatangan Mesias, Hamba TUHAN yang menderita, serta langit dan bumi yang baru.",
  "Yer": "Nabi Yeremia, \"nabi yang menangis\", memperingatkan Yehuda akan hukuman dan pembuangan ke Babel, menderita karena kesetiaannya, dan menubuatkan perjanjian baru yang tertulis di dalam hati.",
  "Rat": "Lima syair ratapan atas kehancuran Yerusalem dan Bait Allah oleh Babel (587 SM). Di tengah duka yang dalam, terselip pengakuan iman: \"Tak berkesudahan kasih setia TUHAN... besar kesetiaan-Mu!\" (Rat 3:22-23).",
  "Yeh": "Nabi Yehezkiel di pembuangan Babel melihat kemuliaan TUHAN meninggalkan Bait Allah karena dosa umat, lalu menubuatkan pemulihan: hati yang baru, lembah tulang-tulang kering yang hidup kembali, dan Bait Allah yang baru.",
  "Dan": "Kesetiaan Daniel dan sahabat-sahabatnya di istana Babel—dapur api dan gua singa—serta penglihatan tentang kerajaan-kerajaan dunia yang silih berganti dan Kerajaan Allah yang kekal.",
  "Hos": "Pernikahan nabi Hosea dengan istri yang tidak setia menjadi gambaran kasih Allah yang tetap setia kepada Israel yang berzinah secara rohani, dan panggilan untuk kembali kepada-Nya.",
  "Yl": "Tulah belalang menjadi peringatan akan \"hari TUHAN\" dan panggilan untuk bertobat dengan sungguh-sungguh, disertai janji pencurahan Roh Allah atas semua manusia.",
  "Am": "Amos, seorang peternak, menyerukan keadilan sosial kepada Israel yang makmur tetapi menindas orang miskin: \"Biarlah keadilan bergulung-gulung seperti air.\"",
  "Ob": "Kitab terpendek di Perjanjian Lama: hukuman atas Edom karena kesombongannya dan karena bersukacita atas kehancuran Yerusalem, serta janji bahwa kerajaan akan menjadi milik TUHAN.",
  "Yun": "Nabi Yunus lari dari panggilan Allah, ditelan ikan besar, lalu berkhotbah di Niniwe yang kemudian bertobat. Allah menyatakan belas kasihan-Nya juga kepada bangsa-bangsa lain.",
  "Mi": "Nabi Mikha menegur ketidakadilan para pemimpin Israel dan Yehuda, menubuatkan Mesias yang lahir di Betlehem, dan merangkum kehendak Allah: berlaku adil, mencintai kesetiaan, dan hidup rendah hati di hadapan-Nya.",
  "Nah": "Nubuat tentang kejatuhan Niniwe, ibu kota Asyur yang kejam. TUHAN lambat marah tetapi adil; Ia menjadi tempat pengungsian bagi orang yang berlindung kepada-Nya.",
  "Hab": "Dialog nabi Habakuk dengan Allah tentang kejahatan dan keadilan: mengapa orang fasik dibiarkan? Jawabannya: \"orang yang benar itu akan hidup oleh percayanya,\" dan Habakuk tetap bersorak di dalam TUHAN.",
  "Zef": "Nabi Zefanya memperingatkan datangnya \"hari TUHAN\" atas Yehuda dan bangsa-bangsa, lalu menutup dengan janji pemulihan: TUHAN bersukaria atas umat-Nya dengan sorak-sorai.",
  "Hag": "Nabi Hagai mendorong orang Yahudi yang pulang dari pembuangan untuk mendahulukan pembangunan kembali Bait Allah, dengan janji bahwa kemuliaan rumah yang baru akan melebihi yang dahulu.",
  "Za": "Penglihatan-penglihatan nabi Zakharia untuk membangkitkan semangat umat membangun Bait Allah, dengan banyak nubuat tentang Mesias—Raja yang datang menunggang keledai dan Dia yang ditikam.",
  "Mal": "Kitab terakhir Perjanjian Lama: teguran atas ibadah yang setengah hati dan ketidaksetiaan umat, serta janji kedatangan utusan TUHAN yang mempersiapkan jalan bagi-Nya.",
  "Mat": "Injil yang menampilkan Yesus sebagai Mesias, Raja keturunan Daud yang menggenapi nubuat Perjanjian Lama: kelahiran-Nya, Khotbah di Bukit, perumpamaan Kerajaan Sorga, kematian, kebangkitan, dan Amanat Agung.",
  "Mrk": "Injil yang paling singkat dan bergerak cepat, menampilkan Yesus sebagai Hamba yang berkuasa—Anak Allah yang datang untuk melayani dan memberikan nyawa-Nya menjadi tebusan bagi banyak orang.",
  "Luk": "Catatan teliti tabib Lukas tentang hidup Yesus, Juruselamat bagi semua orang—termasuk orang miskin, perempuan, dan orang berdosa—dari kelahiran-Nya di Betlehem sampai kenaikan-Nya ke sorga.",
  "Yoh": "Injil yang menyatakan Yesus sebagai Firman yang menjadi manusia dan Anak Allah, melalui tanda-tanda ajaib dan pernyataan \"Akulah...\", supaya pembaca percaya dan beroleh hidup dalam nama-Nya.",
  "Kis": "Kisah Gereja mula-mula: kenaikan Yesus, pencurahan Roh Kudus pada hari Pentakosta, pelayanan Petrus dan Paulus, dan Injil yang tersebar dari Yerusalem sampai ke Roma.",
  "Rm": "Uraian Paulus yang paling sistematis tentang Injil: semua manusia telah berdosa, dibenarkan oleh kasih karunia melalui iman kepada Kristus, hidup baru dalam Roh, dan kehidupan sebagai tubuh Kristus.",
  "1Kor": "Surat Paulus kepada jemaat Korintus yang bermasalah—perpecahan, percabulan, perkara hukum, karunia rohani—dengan jalan yang lebih utama, yaitu kasih (pasal 13), dan pengajaran tentang kebangkitan.",
  "2Kor": "Surat Paulus yang paling pribadi: pembelaan pelayanannya, penghiburan Allah di tengah penderitaan, pelayanan pendamaian, kemurahan memberi, dan kuasa Kristus yang menjadi sempurna di dalam kelemahan.",
  "Gal": "Paulus membela Injil kasih karunia melawan ajaran bahwa orang harus menaati hukum Taurat untuk diselamatkan: manusia dibenarkan oleh iman kepada Kristus dan hidup merdeka dalam Roh, berbuahkan kasih.",
  "Ef": "Rencana kekal Allah untuk mempersatukan segala sesuatu di dalam Kristus: keselamatan oleh kasih karunia, Gereja sebagai tubuh Kristus, hidup baru dalam keluarga, dan perlengkapan senjata Allah.",
  "Flp": "Surat sukacita yang ditulis Paulus dari penjara: teladan kerendahan hati Kristus yang mengosongkan diri-Nya, sukacita dalam segala keadaan, dan \"segala perkara dapat kutanggung di dalam Dia.\"",
  "Kol": "Paulus menegaskan keunggulan Kristus—gambar Allah yang tidak kelihatan, yang di dalam-Nya seluruh kepenuhan keallahan berdiam—melawan ajaran sesat, dan memanggil jemaat hidup sebagai manusia baru.",
  "1Tes": "Surat dorongan kepada jemaat muda di Tesalonika: kesetiaan di tengah penganiayaan, hidup kudus, dan pengharapan akan kedatangan Tuhan bagi mereka yang hidup maupun yang telah meninggal.",
  "2Tes": "Paulus meluruskan kekeliruan tentang hari Tuhan: hari itu belum tiba; jemaat dipanggil tetap teguh, tidak hidup bermalas-malasan, dan setia sampai Kristus datang.",
  "1Tim": "Petunjuk Paulus kepada Timotius untuk menata jemaat di Efesus: ajaran yang sehat, syarat pemimpin jemaat, ibadah, dan nasihat agar bertanding dalam pertandingan iman yang benar.",
  "2Tim": "Surat terakhir Paulus sebelum kematiannya: dorongan kepada Timotius agar tetap setia, memberitakan firman, dan berpegang pada Kitab Suci yang diilhamkan Allah—\"Aku telah mengakhiri pertandingan yang baik.\"",
  "Tit": "Petunjuk Paulus kepada Titus untuk menata jemaat di Kreta: mengangkat penatua, mengajarkan ajaran yang sehat, dan menyatakan kasih karunia Allah melalui hidup yang penuh perbuatan baik.",
  "Flm": "Surat pendek Paulus kepada Filemon, memohon agar ia menerima kembali Onesimus, budaknya yang melarikan diri dan telah menjadi Kristen, sebagai saudara yang kekasih—gambaran nyata pengampunan dan pendamaian dalam Kristus.",
  "Ibr": "Kristus lebih unggul dari para malaikat, Musa, dan imamat Lewi: Dialah Imam Besar yang kekal dan korban yang sempurna bagi perjanjian baru. Pembaca didorong bertekun dalam iman seperti saksi-saksi iman dahulu.",
  "Yak": "Hikmat praktis untuk hidup Kristen: iman tanpa perbuatan adalah mati, menjaga lidah, bertekun dalam pencobaan, tidak memandang muka, dan doa orang benar yang besar kuasanya.",
  "1Ptr": "Penghiburan bagi orang Kristen yang menderita sebagai pendatang di dunia: pengharapan yang hidup karena kebangkitan Kristus, hidup kudus, dan teladan Kristus yang menderita.",
  "2Ptr": "Peringatan terhadap guru-guru palsu dan pengejek, dorongan untuk bertumbuh dalam pengenalan akan Kristus, dan kepastian bahwa hari Tuhan akan datang meskipun tampak tertunda.",
  "1Yoh": "Surat tentang kepastian hidup kekal: Allah adalah terang dan kasih; orang yang lahir dari Allah hidup dalam kebenaran, mengasihi saudaranya, dan mengakui Yesus Kristus yang telah datang sebagai manusia.",
  "2Yoh": "Surat singkat Yohanes kepada \"Ibu yang terpilih\": tetaplah hidup dalam kebenaran dan kasih, dan waspadalah terhadap penyesat yang tidak mengakui bahwa Yesus Kristus telah datang sebagai manusia.",
  "3Yoh": "Surat pribadi Yohanes kepada Gayus, memuji keramahannya menerima para pemberita Injil, menegur Diotrefes yang gila hormat, dan menasihati: \"janganlah meniru yang jahat, melainkan yang baik.\"",
  "Yud": "Yudas mendesak orang percaya untuk berjuang mempertahankan iman yang telah disampaikan sekali untuk selamanya, menghadapi guru-guru palsu, dan ditutup dengan doksologi bagi Allah yang berkuasa menjaga kita.",
  "Why": "Wahyu Yesus Kristus kepada Yohanes di Patmos: surat kepada tujuh jemaat, penglihatan takhta Allah dan Anak Domba, pergumulan antara kebaikan dan kejahatan, kemenangan Kristus, serta langit dan bumi yang baru."
};

/* ---------------------------------------------------------------------
   SEJARAH MANUSIA — kartu timeline (cover-flow 3D).
   Proginosko: Allah telah menetapkan Sang Firman (Kristus) yang menampakkan diri
   sepanjang sejarah (Kristofani). `img` boleh null → kartu placeholder (gambar menyusul).
   --------------------------------------------------------------------- */
export const SEJARAH_CARDS = [
  { ref: 'Kej 1:27', title: 'Manusia diciptakan menurut gambar Allah', img: 'assets/sejarah/kej-1-27.webp' },
  { ref: 'Kej 3:8', title: 'Suara TUHAN berjalan di taman', img: 'assets/sejarah/kej-3-8.webp' },
  { ref: 'Kej 16:7-13', title: 'Bentuk penampakan Malaikat TUHAN kepada Hagar di padang gurun', img: 'assets/sejarah/kej-16-7.webp',
    cap: 'Perintah "jangan takut" atau "jangan kuatir" ditulis tepat sebanyak 365 kali di dalam Alkitab, dasar dari Allah sang Maha PengetahuanNya sudah punya Rencana untuk Hidup Manusia' },
  { ref: 'Kej 18:1-15', title: 'TUHAN menampakkan diri kepada Abraham di dekat pohon tarbantin di Mamre', img: 'assets/sejarah/kej-18-1.webp' },
  { ref: 'Kej 32:24-30', title: 'Lalu tinggallah Yakub seorang diri. Dan seorang laki-laki bergulat dengan dia sampai fajar menyingsing', img: 'assets/sejarah/kej-32-24.webp' },
  { ref: 'Kel 3:1-6', title: 'Malaikat TUHAN dalam Nyala Api Semak Duri', img: 'assets/sejarah/kel-3-1.webp' },
  { ref: 'Yos 5:13-15', title: 'Panglima Balatentara TUHAN', img: 'assets/sejarah/yos-5-13.webp' },
  { ref: 'Hak 6:11-24', title: 'Gideon — Malaikat TUHAN menampakkan diri kepadanya', img: 'assets/sejarah/hak-6-11.webp' },
  { ref: 'Dan 3:24-25', title: 'Sosok Keempat di dapur api ("seperti Anak Allah" / "Anak Dewa")', img: 'assets/sejarah/dan-3-24.webp' },
  { ref: 'Za 3:1-5', title: 'Malaikat TUHAN sebagai Hakim dan Pendoa Syafaat Ilahi', img: 'assets/sejarah/za-3-1.webp' },
  { ref: 'Mat 1:18-25; Luk 2:1-21; Yoh 1:1-14', title: 'Kelahiran Kristus', img: 'assets/sejarah/kelahiran.webp' },
  { ref: 'Mat 5:1–7:29; Luk 6:17-49', title: 'Khotbah di Bukit', img: 'assets/sejarah/khotbah-bukit.webp' },
  { ref: 'Mat 17:1-13; Mrk 9:2-13; Luk 9:28-36', title: 'Transfigurasi di atas gunung', img: 'assets/sejarah/transfigurasi.webp' },
  { ref: 'Mat 27:32-56; Mrk 15:21-41; Luk 23:26-49; Yoh 19:16-30', title: 'Penyaliban Yesus', img: 'assets/sejarah/penyaliban.webp', mark: 'cross' },
  { ref: 'Mat 28:1-10; Mrk 16:1-8; Luk 24:1-12; Yoh 20:1-18', title: 'Kebangkitan Kristus', img: 'assets/sejarah/kebangkitan.webp',
    cap: 'Matius 28:20b — "...Dan ketahuilah, Aku menyertai kamu senantiasa sampai kepada akhir zaman."' },
  { ref: 'Kis 1:3; Mat 28:16-20; Luk 24:13-49; Yoh 20:19–21:14; 1Kor 15:5-7', title: '40 hari menampakkan diri kepada murid-murid', img: 'assets/sejarah/penampakan-40-hari.webp' },
  { ref: 'Mrk 16:19-20; Luk 24:50-53; Kis 1:9-11', title: 'Kenaikan ke Surga', img: 'assets/sejarah/kenaikan.webp', mark: 'gold-end' },
  { ref: 'Kis 2:1-13; Yl 2:28-32', title: 'Pencurahan Roh Kudus (Pentakosta)', img: 'assets/sejarah/pentakosta.webp' },
  { ref: 'Kis 2:14-41', title: 'Khotbah Petrus — 3000 jiwa percaya dan dibaptis', img: 'assets/sejarah/petrus-3000.webp' },
  { ref: 'Kis 9:1-19; 22:6-16; 26:12-18', title: 'Paulus bertemu Kristus di jalan ke Damsyik', img: 'assets/sejarah/paulus-damsyik.webp' },
  { ref: 'Kis 15:1-29 (15:28) · ± 49 M', title: 'Konsili Yerusalem', img: 'assets/sejarah/konsili-yerusalem.webp' },
  { ref: 'Yoh 21:18-19 · Tradisi: Eusebius, Sejarah Gereja III.1', title: 'Rasul Petrus disalib terbalik di Roma', img: 'assets/sejarah/salib-petrus.webp' },
  { ref: 'Tradisi Suci · Patras, Akhaya', title: 'Rasul Andreas disalib pada salib X', img: 'assets/sejarah/salib-andreas.webp' },
  { ref: 'Why 2:10 · Tradisi: St. Ignatius dari Antiokhia (± 107 M)', title: 'Martir yang diserahkan kepada singa', img: 'assets/sejarah/martir-singa.webp' },
  { ref: 'Tradisi Suci · St. Yohanes dari Damaskus, Homili Dormisi', title: 'Tertidurnya Theotokos (Dormisi Bunda Allah)', img: 'assets/sejarah/dormisi-theotokos.webp' },
  { ref: 'Kis 2:42 · Didache 7 (Baptisan), 9–10 (Ekaristi), 14 (Hari Tuhan) · ± 50–120 M', title: 'Didache — tata cara liturgi Gereja mula-mula (baptisan & Ekaristi)', img: 'assets/sejarah/didache.webp' },
  { ref: 'Kis 6:6; 14:23; 1Tim 4:14; 2Tim 1:6; Tit 1:5; Yak 5:14', title: 'Pengurapan & penumpangan tangan para penatua — suksesi apostolik', img: 'assets/sejarah/pengurapan-penatua.webp' },
  { ref: 'Why 2:12-17 · Konsili Ekumenis 325–787 M', title: 'Pergamus (Era Konsili Ekumenis) — konsolidasi dogma besar-besaran, berkumpulnya uskup dan kaisar Kristen', img: 'assets/sejarah/pergamus.webp' },
  { ref: 'Why 2:18-29', title: 'Tiatira (Era Kebiaraan & Kejayaan Liturgis) — perkembangan pesat tradisi kebiaraan (monastisisme) serta pendalaman tata ibadah sakramental', img: 'assets/sejarah/tiatira.webp' },
  { ref: 'Why 3:1-6 · Skisma Agung 1054 M', title: 'Sardis (Era Skisma & Kemunduran) — dimulainya perpecahan besar (Skisma Agung) serta masuknya benih-benih sekularisme dalam peradaban', img: 'assets/sejarah/sardis.webp' },
  { ref: 'Why 3:7-13', title: 'Filadelfia (Era "Sedikit Kekuatan") — Gereja sejati menghadapi hegemoni pemikiran sekuler, namun tetap tabah dan setia menjaga Tradisi Suci', img: 'assets/sejarah/filadelfia.webp' },
  { ref: 'Why 3:14-22', title: 'Laodikia (Era Akhir Zaman) — kepalsuan spiritual: jemaat menjadi suam-suam kuku, kaya secara materi namun miskin secara rohani', img: 'assets/sejarah/laodikia.webp' },
  { ref: '1Yoh 2:18, 22; 4:3; 2Yoh 1:7', title: 'Perkembangan "Banyak Antikristus" — sepanjang sejarah muncul banyak "antikristus kecil" (pemimpin atau ajaran palsu) yang merintis jalan bagi Antikristus utama', img: 'assets/sejarah/banyak-antikristus.webp' },
  { ref: 'Kej 11:1-9; Why 13:7; 17–18', title: 'Re-enactment Menara Babel melalui Globalisasi — tatanan dunia baru yang bersatu tanpa Allah, sarana munculnya sosok pemimpin tunggal di akhir sejarah', img: 'assets/sejarah/menara-babel-global.webp' },
  { ref: '2Tes 2:3-10; Yoh 5:43; Mat 24:24 · Tradisi: St. Ireneus, Adv. Haer. V.30', title: 'Antikristus sebagai Peniru Kristus (The Ape of Christ) — manusia sejati (diperkirakan dari suku Dan) yang tampil sebagai tokoh perdamaian untuk menyesatkan umat manusia', img: 'assets/sejarah/antikristus-peniru.webp' },
  { ref: '2Tes 2:4; Dan 9:27; Why 11:2-3; 13:5', title: 'Takhta di Yerusalem — bertakhta di Bait Suci yang dibangun kembali selama 3,5 tahun (42 bulan / 1.260 hari), menuntut penyembahan atas dirinya sebagai Allah', img: 'assets/sejarah/takhta-yerusalem.webp' },
  { ref: 'Why 13:11-18', title: 'Tanda Binatang (666) & Monopoli Ekonomi — tidak ada yang dapat membeli atau menjual tanpa tanda pada tangan kanan atau dahi', img: 'assets/sejarah/tanda-666.webp' },
  { ref: '2Tes 2:8; Why 16:16; 19:11-21', title: 'Pertempuran Armagedon — kuasa Antikristus dihancurkan oleh "napas mulut Kristus" pada saat Kedatangan-Nya', img: 'assets/sejarah/armagedon.webp' },
  { ref: 'Mat 24:27-31; 1Tes 4:16 · Tradisi: St. Sirilus dari Yerusalem, Katekese 15', title: 'Tanda Anak Manusia (Salib di Langit) — Parousia diawali Tanda Salib Suci yang bersinar dari timur ke barat, diiringi sangkakala malaikat', img: 'assets/sejarah/tanda-anak-manusia.webp' },
  { ref: 'Dan 12:2; Yoh 5:28-29; 1Kor 15:51-53; Why 20:11-15', title: 'Kebangkitan Umum & Penghakiman Terakhir — alam semesta diselimuti Terang Tak Tercipta (Uncreated Light) dalam keabadian', img: 'assets/sejarah/kebangkitan-umum.webp' },
  { ref: 'Why 21:1-5; Yes 65:17; 2Ptr 3:13', title: 'Langit yang baru, Yerusalem yang baru, dunia yang baru', img: 'assets/sejarah/langit-baru.webp' },
];
