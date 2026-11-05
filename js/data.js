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
    title: 'Dunia Tak Kasat Mata & Dunia Kasat Mata',
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
];

/* Garis latar dekoratif (BUKAN data referensi) supaya diagram tampak padat
   seperti storyboard. Set ke 0 bila semua referensi asli sudah diisi. */
export const DECORATIVE_ARCS = 440;
