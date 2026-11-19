# Product Requirements Document (PRD)
## Website Portofolio Pribadi — Deny Kurniawan

**Versi:** 1.0  
**Status:** Draft kebutuhan tahap awal  
**Jenis produk:** Website portofolio statis  
**Target deployment:** GitHub Pages  
**Bahasa utama:** Bahasa Indonesia  

---

## 1. Ringkasan Produk

Website portofolio pribadi merupakan website statis yang berfungsi memperkenalkan identitas profesional, latar belakang pendidikan, kompetensi teknis, dan karya pengembangan web kepada dosen, rekan komunitas, serta rekruter magang.

Website dibangun menggunakan HTML5 semantik, Tailwind CSS melalui CDN resmi, dan Vanilla JavaScript tanpa framework JavaScript berat. Struktur awal proyek dipusatkan pada dua file utama, yaitu `index.html` dan `script.js`, sehingga mudah dipahami, dikembangkan, dan di-deploy melalui GitHub Pages.

Dalam 10 detik pertama, pengunjung harus dapat mengenali siapa pemilik website, bidang yang ditekuni, kompetensi utamanya, dan tindakan berikutnya yang dapat dilakukan.

### 1.1 Tujuan utama

1. Menampilkan profil profesional secara ringkas dan meyakinkan.
2. Memperlihatkan kompetensi teknis yang relevan dengan pengembangan web dan UI/UX.
3. Menyediakan fondasi portofolio yang mudah diperluas dengan proyek dan informasi kontak.
4. Menjadi media personal branding untuk kebutuhan akademik, komunitas, dan kesempatan magang.

### 1.2 Sasaran keberhasilan

- Identitas, peran, dan CTA utama terlihat tanpa perlu menggulir halaman pada layar desktop umum.
- Pengunjung dapat berpindah ke bagian halaman melalui navigasi.
- Navigasi hamburger dapat dibuka dan ditutup menggunakan mouse, keyboard, dan layar sentuh.
- Tampilan tetap terbaca dan tidak mengalami horizontal overflow pada ponsel, tablet, maupun desktop.
- Website dapat berjalan sebagai website statis tanpa backend atau proses build.

---

## 2. Latar Belakang dan Konteks Pengguna

Pemilik website adalah mahasiswa semester 3 Program Studi Sistem Informasi di Universitas Nusantara PGRI Kediri dan aktif dalam komunitas koding SIKOKI.

Website perlu mencerminkan profil mahasiswa Sistem Informasi yang memiliki minat pada pengembangan web dan desain antarmuka. Penyajian harus profesional, tetapi tetap terasa personal dan tidak berlebihan.

### 2.1 Target pengunjung

| Pengunjung | Kebutuhan informasi |
|---|---|
| Dosen | Identitas, latar belakang akademik, minat, dan kompetensi |
| Rekan komunitas SIKOKI | Keahlian, teknologi yang dipelajari, dan aktivitas pengembangan |
| Rekruter magang | Ringkasan profil, kemampuan teknis, proyek, dan kontak |
| Pengunjung umum | Gambaran singkat tentang pemilik website |

### 2.2 Pesan utama

> Saya adalah mahasiswa Sistem Informasi yang berfokus pada pengembangan web dan memiliki ketertarikan pada perancangan pengalaman pengguna.

Kalimat tersebut merupakan arah komunikasi awal dan dapat disesuaikan dengan pengalaman serta pencapaian aktual pemilik website.

---

## 3. Ruang Lingkup Produk

### 3.1 Cakupan tahap pertama (MVP)

Tahap pertama berfokus pada kerangka utama halaman dan interaksi navigasi.

| Bagian | Cakupan |
|---|---|
| Navbar | Logo nama, tautan Tentang, Keahlian, Proyek, Kontak, dan hamburger menu |
| Hero | Sapaan, nama lengkap, peran, deskripsi maksimal dua kalimat, CTA, foto profil |
| Tentang Saya | Ringkasan latar belakang, pendidikan, dan minat |
| Keahlian | Daftar teknologi dan kompetensi dalam kartu atau kelompok kategori |
| Interaksi | Menu mobile, navigasi anchor, dan perilaku dasar tombol |
| Responsivitas | Layout mobile-first untuk ponsel, tablet, dan desktop |
| Aksesibilitas | Struktur heading, landmark semantik, label, fokus keyboard, dan kontras |

**Catatan:** Menu Proyek dan Kontak sudah ditampilkan pada navbar sebagai bagian dari rancangan navigasi. Pada tahap pertama, keduanya dapat diarahkan ke placeholder atau penanda bagian yang akan dikembangkan pada tahap berikutnya. Jangan menampilkan tautan yang seolah-olah berfungsi jika tujuannya belum tersedia.

### 3.2 Di luar cakupan tahap pertama

- Backend, database, autentikasi, dan dashboard admin.
- CMS atau pengelolaan konten melalui panel khusus.
- Formulir kontak yang mengirim data ke server.
- Blog, artikel, dan sistem pencarian.
- Animasi kompleks, WebGL, atau efek 3D berat.
- Integrasi API eksternal.
- Halaman detail proyek terpisah.
- Analitik pengunjung selain fitur analitik bawaan platform hosting jika kelak diperlukan.

### 3.3 Rencana pengembangan berikutnya

1. Section Proyek dengan kartu proyek, deskripsi, teknologi, tautan demo, dan repository.
2. Section Kontak dengan email, GitHub, LinkedIn, dan media profesional lain yang dimiliki.
3. Pengayaan pengalaman organisasi, sertifikat, dan pendidikan.
4. Optimasi SEO lanjutan dan metadata sosial.
5. Penyempurnaan konten berdasarkan proyek serta pengalaman aktual.

---

## 4. Struktur Informasi dan Alur Halaman

Website menggunakan satu halaman (*single-page portfolio*) dengan urutan:

1. Navbar
2. Hero
3. Tentang Saya
4. Keahlian
5. Placeholder Proyek (opsional pada MVP)
6. Placeholder Kontak (opsional pada MVP)
7. Footer sederhana (opsional pada MVP)

### 4.1 Navigasi

| Label | Tujuan |
|---|---|
| Logo/nama | Kembali ke bagian Hero (`#home`) |
| Tentang | Section Tentang Saya (`#about`) |
| Keahlian | Section Keahlian (`#skills`) |
| Proyek | Section Proyek (`#projects`) |
| Kontak | Section Kontak (`#contact`) |

Gunakan tautan anchor HTML agar navigasi tetap berfungsi tanpa JavaScript. JavaScript digunakan untuk mengendalikan tampilan menu mobile, bukan menjadi satu-satunya cara navigasi bekerja.

---

## 5. Persyaratan Fungsional

### FR-01 — Navbar lengket

**Deskripsi:** Navbar berada di bagian atas layar dan tetap terlihat ketika pengunjung menggulir halaman.

**Kriteria penerimaan:**
- Navbar menggunakan `position: sticky` dengan `top: 0`.
- Navbar memiliki latar belakang gelap yang cukup solid atau transparan dengan kontras memadai.
- Logo/nama pemilik berada di sisi kiri.
- Menu Tentang, Keahlian, Proyek, dan Kontak berada di sisi kanan pada layar lebar.
- Tinggi navbar tidak menutupi judul section ketika tautan anchor dipilih. Gunakan `scroll-margin-top` pada target section bila diperlukan.
- Status fokus keyboard terlihat jelas.

### FR-02 — Navigasi mobile

**Deskripsi:** Pada layar kecil, menu navigasi desktop digantikan tombol hamburger.

**Kriteria penerimaan:**
- Tombol hamburger hanya tampil pada breakpoint mobile yang ditentukan.
- Tombol memiliki `aria-label`, `aria-expanded`, dan `aria-controls`.
- Klik tombol membuka dan menutup menu.
- Memilih salah satu tautan menutup menu.
- Tombol `Escape` menutup menu ketika menu terbuka.
- Status menu diperbarui pada atribut aksesibilitas.
- Navigasi tetap dapat digunakan dengan keyboard.
- JavaScript tidak menghasilkan error ketika elemen menu tidak ditemukan.

### FR-03 — Hero section

**Deskripsi:** Bagian pembuka yang menyampaikan identitas dan fokus profesional pemilik website.

**Elemen wajib:**
- Sapaan singkat, misalnya “Halo, saya”.
- Nama lengkap pemilik website.
- Peran: **Web Developer & UI/UX Enthusiast**.
- Deskripsi singkat maksimal dua kalimat.
- Tombol CTA **“Lihat Proyek”**.
- Foto profil dalam bingkai berbentuk lingkaran.
- Ikon pendukung dari Lucide Icons bila relevan.

**Kriteria penerimaan:**
- Nama dan peran menjadi elemen visual paling menonjol.
- CTA terlihat jelas dan memiliki tujuan tautan yang benar.
- Foto profil menggunakan `alt` yang deskriptif.
- Jika foto belum tersedia, gunakan placeholder visual yang rapi; jangan menggunakan gambar acak yang seolah-olah merupakan foto pemilik.
- Pada desktop, teks dan foto tersusun berdampingan jika ruang mencukupi.
- Pada ponsel, elemen tersusun vertikal tanpa terpotong.

### FR-04 — Tentang Saya

**Deskripsi:** Bagian yang menjelaskan latar belakang dan arah pengembangan diri pemilik website.

**Konten minimum:**
- Paragraf perkenalan singkat.
- Program Studi Sistem Informasi.
- Universitas Nusantara PGRI Kediri.
- Status mahasiswa semester 3.
- Aktivitas di komunitas koding SIKOKI.
- Minat pada web development dan UI/UX.

**Kriteria penerimaan:**
- Informasi ditulis dengan bahasa profesional dan mudah dipahami.
- Konten tidak mengklaim pengalaman kerja, sertifikasi, atau pencapaian yang belum dimiliki.
- Teks memiliki lebar baca yang nyaman dan hierarki heading yang konsisten.

### FR-05 — Keahlian (Tech Stack)

**Deskripsi:** Bagian untuk memperlihatkan teknologi dan kompetensi yang sedang dikuasai atau dipelajari.

**Rancangan kategori awal:**
- **Frontend:** HTML5, CSS3, JavaScript, Tailwind CSS.
- **Tools & Workflow:** Git, GitHub, Visual Studio Code.
- **Design:** UI/UX fundamentals dan penggunaan tools desain yang benar-benar dikuasai.

**Kriteria penerimaan:**
- Keahlian disajikan dalam kartu, chip, atau kelompok kategori.
- Ikon atau logo teknologi digunakan secara konsisten.
- Jangan memberi persentase kemampuan seperti “90% ahli” tanpa metode pengukuran yang jelas.
- Bedakan kemampuan yang sudah dikuasai dengan teknologi yang masih dipelajari jika diperlukan.

### FR-06 — CTA “Lihat Proyek”

**Deskripsi:** Tombol utama pada Hero mengarahkan pengunjung ke bagian Proyek.

**Kriteria penerimaan:**
- Tombol berupa elemen tautan (`a`) dengan tujuan `#projects`.
- Jika section Proyek belum dibuat pada MVP, sediakan placeholder dengan ID tersebut atau ubah CTA sementara menjadi tautan yang benar-benar tersedia.
- Tampilan tombol memiliki hover, active, dan focus state.

### FR-07 — Ikon

**Deskripsi:** Ikon antarmuka menggunakan Lucide Icons melalui CDN.

**Kriteria penerimaan:**
- Ikon hanya digunakan untuk memperjelas fungsi atau informasi.
- Ikon dekoratif diberi `aria-hidden="true"`.
- Tombol yang hanya menampilkan ikon tetap memiliki nama aksesibel.
- Ikon tidak menggantikan label teks penting.

---

## 6. Persyaratan Non-Fungsional

### NFR-01 — Responsivitas

- Terapkan pendekatan *mobile-first*.
- Layout harus beradaptasi pada ponsel kecil, ponsel besar, tablet, laptop, dan desktop.
- Hindari lebar tetap yang menyebabkan konten meluber.
- Gunakan container dengan lebar maksimum yang konsisten.
- Gambar harus responsif dan tidak mengalami distorsi.
- Tidak boleh ada horizontal scrolling pada viewport normal.

### NFR-02 — Aksesibilitas

Target implementasi mengacu pada praktik WCAG 2.2 level AA sejauh relevan.

- Gunakan elemen semantik: `header`, `nav`, `main`, `section`, dan `footer`.
- Sediakan tautan “Lewati ke konten utama” (*skip link*).
- Terapkan satu `h1` utama dan hierarki heading yang logis.
- Semua kontrol dapat diakses dengan keyboard.
- Fokus keyboard terlihat jelas.
- Gunakan kontras teks dan latar yang memadai.
- Jangan mengandalkan warna saja untuk menyampaikan informasi.
- Hormati preferensi `prefers-reduced-motion`.
- Berikan `alt` yang sesuai untuk gambar informatif.

### NFR-03 — Kinerja

- Hindari framework JavaScript berat.
- Gunakan gambar terkompresi dengan dimensi yang sesuai.
- Hindari animasi yang membebani perangkat.
- Muat JavaScript dengan atribut `defer` atau letakkan script pada posisi yang sesuai agar tidak menghambat parsing HTML.
- Gunakan CDN secara seperlunya.
- Pertimbangkan fallback font sistem jika Google Fonts gagal dimuat.

### NFR-04 — Kompatibilitas

Website ditargetkan berjalan pada browser modern, termasuk:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

### NFR-05 — Kemudahan pemeliharaan

- Pisahkan struktur HTML dan logika interaksi JavaScript.
- Gunakan penamaan class, ID, dan fungsi yang konsisten.
- Hindari JavaScript inline untuk logika utama.
- Tambahkan komentar singkat di awal setiap section HTML.
- Hindari duplikasi markup dan kode yang tidak diperlukan.

### NFR-06 — Keamanan dan privasi

- Jangan menaruh API key, password, token, atau kredensial pada file publik.
- Jangan mengumpulkan data pribadi melalui formulir tanpa kebutuhan dan mekanisme yang jelas.
- Gunakan tautan eksternal dengan atribut keamanan yang sesuai ketika membuka tab baru.
- Batasi dependensi eksternal pada sumber yang diperlukan.

---

## 7. Arahan UI/UX dan Design System

### 7.1 Konsep visual

**Nama arah visual:** Elegant Dark Developer Portfolio.

Karakter desain:
- Modern, minimalis, elegan, dan profesional.
- Mengutamakan keterbacaan serta hierarki informasi.
- Tidak terlalu ramai dengan efek visual.
- Menggunakan aksen warna secukupnya untuk menonjolkan CTA dan elemen penting.

### 7.2 Palet warna

| Peran | Warna | Penggunaan |
|---|---|---|
| Background utama | `slate-950` | Latar keseluruhan halaman |
| Surface/kartu | `slate-900` | Kartu dan panel |
| Border | `slate-800` | Garis pemisah dan border |
| Teks utama | `slate-100` | Heading dan teks penting |
| Teks sekunder | `slate-400` | Paragraf dan metadata |
| Aksen utama | `emerald-400` | CTA dan highlight |
| Aksen sekunder | `cyan-400` | Ikon atau detail visual |

Warna harus diuji kembali untuk memastikan kontras teks yang memadai, terutama untuk teks berukuran kecil.

### 7.3 Tipografi

- **Heading:** Plus Jakarta Sans dari Google Fonts.
- **Body/paragraf:** Inter dari Google Fonts.
- Heading menggunakan bobot 600–800 sesuai hierarki.
- Paragraf menggunakan ukuran dan line-height yang nyaman dibaca.
- Sediakan fallback font sans-serif.

### 7.4 Komponen visual

- Navbar sticky dengan border bawah tipis.
- Hero dengan komposisi teks dan foto profil.
- Foto profil berbentuk lingkaran dengan border atau ring aksen.
- Tombol CTA dengan warna emerald dan state interaksi.
- Kartu keahlian dengan latar slate-900 dan border slate-800.
- Ikon Lucide dengan ukuran dan stroke yang konsisten.
- Transisi ringan pada hover; hindari animasi berlebihan.

### 7.5 Prinsip UX 10 detik pertama

Dalam tampilan awal, pengunjung harus segera menemukan:
1. Nama pemilik.
2. Peran profesional.
3. Ringkasan fokus atau keunggulan.
4. Foto profil.
5. CTA untuk melihat karya.

Hindari paragraf panjang, jargon teknis yang tidak perlu, dan dekorasi yang mengalahkan informasi utama.

---

## 8. Teknologi dan Ketentuan Implementasi

| Teknologi | Penggunaan | Ketentuan |
|---|---|---|
| HTML5 | Struktur halaman | Semantik dan aksesibel |
| Tailwind CSS | Styling | Menggunakan CDN resmi untuk prototipe/tahap awal |
| Vanilla JavaScript | Interaksi | Tanpa framework |
| Google Fonts | Tipografi | Plus Jakarta Sans dan Inter |
| Lucide Icons | Ikon | Melalui CDN |
| GitHub Pages | Hosting | Website statis |

**Catatan Tailwind CDN:** Tailwind Play CDN ditujukan untuk pengembangan/prototyping dan bukan pilihan ideal untuk optimasi produksi jangka panjang. Untuk MVP yang diminta, CDN dapat digunakan agar setup sederhana. Jika website berkembang dan membutuhkan optimasi ukuran CSS, pertimbangkan proses build Tailwind pada tahap lanjutan.

### 8.1 Struktur folder proyek

```text
portfolio/
├── index.html
├── script.js
└── assets/
    └── images/
        └── profile.jpg
```

Folder `assets/images/` disiapkan untuk foto profil dan aset visual. Jika foto belum tersedia, file tersebut belum wajib dibuat.

### 8.2 Ketentuan file

**`index.html`**
- Berisi metadata dokumen.
- Memuat CDN Tailwind, Google Fonts, dan Lucide Icons.
- Berisi seluruh struktur section.
- Menggunakan komentar HTML singkat pada awal setiap section.
- Memuat `script.js` secara tepat, misalnya menggunakan `defer`.

**`script.js`**
- Mengelola buka/tutup hamburger menu.
- Memperbarui `aria-expanded`.
- Menutup menu setelah tautan dipilih.
- Menutup menu dengan tombol Escape.
- Menggunakan event listener yang terorganisasi.
- Tidak memuat logika yang tidak diperlukan pada tahap pertama.

---

## 9. Konten dan Data yang Dibutuhkan

Konten berikut perlu disiapkan atau dikonfirmasi sebelum website dipublikasikan.

| Data | Status awal | Catatan |
|---|---|---|
| Nama lengkap | Perlu konfirmasi | Digunakan pada logo dan Hero |
| Foto profil | Perlu disediakan | Foto milik sendiri, kualitas cukup, rasio persegi disarankan |
| Sapaan Hero | Dapat menggunakan default | Contoh: “Halo, saya” |
| Deskripsi Hero | Perlu finalisasi | Maksimal dua kalimat |
| Pendidikan | Tersedia | Sistem Informasi, Universitas Nusantara PGRI Kediri |
| Semester | Tersedia | Semester 3 saat penyusunan PRD |
| Komunitas | Tersedia | SIKOKI |
| Daftar keahlian | Perlu validasi | Tampilkan teknologi yang benar-benar dipelajari/dikuasai |
| Proyek | Tahap berikutnya | Tambahkan karya yang dapat ditunjukkan |
| Kontak profesional | Tahap berikutnya | Email dan tautan profesional yang aktif |

### 9.1 Contoh arah copywriting Hero

**Sapaan:** Halo, saya

**Nama:** [Nama Lengkap]

**Peran:** Web Developer & UI/UX Enthusiast

**Deskripsi contoh:**
“Saya mahasiswa Sistem Informasi yang tertarik membangun website fungsional dengan antarmuka yang nyaman digunakan. Saya terus mengembangkan kemampuan melalui proyek, pembelajaran, dan komunitas koding.”

**CTA:** Lihat Proyek

Teks ini adalah contoh awal dan harus disesuaikan dengan gaya komunikasi serta pengalaman aktual pemilik.

---

## 10. Kriteria Penerimaan MVP

MVP dinyatakan selesai apabila seluruh poin berikut terpenuhi:

- [ ] File `index.html` tersedia dan dapat dibuka langsung di browser.
- [ ] File `script.js` tersedia dan terhubung dengan benar.
- [ ] Navbar sticky berfungsi.
- [ ] Navbar desktop menampilkan empat tautan navigasi.
- [ ] Hamburger menu berfungsi pada layar mobile.
- [ ] Hero menampilkan sapaan, nama, peran, deskripsi maksimal dua kalimat, CTA, dan bingkai foto profil.
- [ ] Section Tentang Saya menampilkan latar belakang yang benar.
- [ ] Section Keahlian menampilkan teknologi dalam kategori yang jelas.
- [ ] Ikon Lucide tampil dengan benar.
- [ ] Komentar HTML tersedia di awal setiap section.
- [ ] Semua tautan navigasi mengarah ke target yang tersedia.
- [ ] Website dapat digunakan dengan keyboard.
- [ ] Tidak ada error JavaScript pada console dalam penggunaan normal.
- [ ] Tidak ada horizontal overflow pada ukuran layar yang diuji.
- [ ] Tampilan diuji pada ponsel, tablet, dan desktop.
- [ ] Website dapat dipublikasikan melalui GitHub Pages.

---

## 11. Rencana Pengujian

| ID | Skenario | Hasil yang diharapkan |
|---|---|---|
| TC-01 | Buka website pada desktop | Navbar, Hero, About, dan Skills tampil rapi |
| TC-02 | Buka website pada ponsel | Layout menyesuaikan lebar layar |
| TC-03 | Klik hamburger | Menu mobile terbuka |
| TC-04 | Klik hamburger saat menu terbuka | Menu mobile tertutup |
| TC-05 | Pilih tautan menu mobile | Halaman menuju section dan menu tertutup |
| TC-06 | Tekan Escape saat menu terbuka | Menu tertutup |
| TC-07 | Navigasi menggunakan keyboard | Fokus terlihat dan tautan dapat diaktifkan |
| TC-08 | Klik CTA Hero | Menuju section Proyek atau placeholder yang disiapkan |
| TC-09 | CDN ikon/font gagal dimuat | Konten utama tetap terbaca dan dapat digunakan |
| TC-10 | Uji viewport kecil | Tidak ada konten terpotong atau horizontal overflow |

---

## 12. Deployment ke GitHub Pages

Website tidak membutuhkan server backend. Deployment dapat dilakukan melalui repository GitHub.

Langkah umum:
1. Buat repository GitHub, misalnya `portfolio`.
2. Letakkan `index.html`, `script.js`, dan folder `assets/` pada root repository.
3. Push atau upload seluruh file ke branch utama.
4. Buka **Settings → Pages** pada repository.
5. Pada bagian Build and deployment, pilih deploy dari branch.
6. Pilih branch utama dan folder root (`/`), lalu simpan.
7. Tunggu proses deployment selesai dan buka URL GitHub Pages yang diberikan.

Pastikan nama file halaman utama adalah `index.html`, kapitalisasi nama file konsisten, dan semua path aset menggunakan path relatif yang benar.

---

## 13. Risiko dan Mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Foto profil belum tersedia | Hero terasa kurang personal | Siapkan placeholder yang jelas dan ganti sebelum publikasi |
| Konten terlalu umum | Profil kurang meyakinkan | Gunakan deskripsi spesifik dan proyek nyata |
| Menu mobile tidak aksesibel | Pengunjung sulit bernavigasi | Uji keyboard, atribut ARIA, dan tombol Escape |
| CDN tidak dapat diakses | Font atau ikon tidak tampil | Sediakan fallback font dan pastikan konten tetap berfungsi |
| Tailwind CDN kurang optimal untuk produksi | Ukuran/performansi CSS kurang ideal | Gunakan CDN untuk MVP; evaluasi build CSS saat pengembangan lanjutan |
| Tautan Proyek/Kontak belum memiliki tujuan | Pengalaman navigasi membingungkan | Sediakan placeholder atau nonaktifkan tautan sampai section tersedia |

---

## 14. Prioritas Pengembangan

| Prioritas | Fitur | Tahap |
|---|---|---|
| P0 | Struktur HTML semantik dan metadata | MVP |
| P0 | Navbar sticky dan navigasi desktop | MVP |
| P0 | Hamburger menu aksesibel | MVP |
| P0 | Hero dan CTA | MVP |
| P0 | Tentang Saya | MVP |
| P0 | Keahlian/Tech Stack | MVP |
| P0 | Responsivitas dan aksesibilitas dasar | MVP |
| P1 | Section Proyek lengkap | Tahap 2 |
| P1 | Section Kontak dan tautan profesional | Tahap 2 |
| P2 | Pengalaman organisasi, sertifikat, dan aktivitas | Tahap 3 |
| P2 | SEO lanjutan dan metadata sosial | Tahap 3 |

---

## 15. Definisi Selesai (Definition of Done)

Pekerjaan tahap pertama dianggap selesai apabila:
1. Semua persyaratan fungsional P0 telah diimplementasikan.
2. Seluruh kriteria penerimaan MVP terpenuhi.
3. Tidak ada error kritis pada console browser.
4. Layout lolos pengujian pada ukuran layar mobile, tablet, dan desktop.
5. Navigasi dapat digunakan dengan mouse, sentuhan, dan keyboard.
6. Konten profil tidak mengandung klaim yang belum dapat dibuktikan.
7. Repository siap dipublikasikan melalui GitHub Pages.

---

## 16. Catatan untuk Pengembangan

- Pertahankan implementasi tetap sederhana dan mudah dipelajari.
- Jangan menambahkan framework atau dependensi baru tanpa alasan yang jelas.
- Utamakan aksesibilitas dan keterbacaan dibanding efek dekoratif.
- Gunakan data dan karya nyata untuk memperkuat kredibilitas portofolio.
- Struktur satu halaman dapat dikembangkan secara bertahap tanpa harus mengubah fondasi proyek.
