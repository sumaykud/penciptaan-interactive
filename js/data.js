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
            ref: 'Mazmur 19:2',
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
        heading: 'Hubungan *Memra* (Aramaik) dengan *Logos* (Yunani) dalam Perjanjian Baru',
        intro:
          'Ketika Rasul Yohanes menulis Injilnya dalam bahasa Yunani (Yohanes 1:1–14), ia menggunakan kata **Logos** (Ὁ Λόγος) ' +
          'untuk menjelaskan identitas Kristus.',
        items: [
          '**Latar Belakang Pemikiran Yohanes:** Sebagai seorang Yahudi abad pertama yang akrab dengan pembacaan Targum di sinagoge, ' +
            'Rasul Yohanes mengambil konsep *Memra* (Firman TUHAN yang menciptakan dan menampakkan diri di Perjanjian Lama) dan ' +
            'menyatakannya dalam bahasa Yunani sebagai *Logos*.',
          '**Kebenaran Inkarnasi:** Yohanes mengabarkan bahwa *Memra* / *Logos* yang kekal ini bukan lagi sekadar suara penampakan ' +
            'sementara, melainkan telah **mengambil rupa daging manusia sejati (*Inkarnasi*) dalam Diri Yesus Kristus** (Yohanes 1:14).',
        ],
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
