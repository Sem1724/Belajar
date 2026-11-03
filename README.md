# Web Sederhana (Next.js + Tailwind)

Proyek contoh yang sangat kecil untuk belajar. Hasil akhirnya situs statis
dengan 2 halaman: Karya (beranda) dan Tentang.

## Cara menjalankan di komputer

1. Pasang Node.js (versi LTS) dari https://nodejs.org
2. Buka terminal di folder ini, lalu jalankan:

   ```
   npm install
   npm run dev
   ```

3. Buka http://localhost:3000 di browser.
   Ubah file apa pun, simpan, dan tampilan berubah otomatis.

## Membuat versi final (HTML/CSS/JS biasa)

```
npm run build
```

Hasilnya ada di folder `out/`. Isi folder itu yang diunggah ke hosting.

## Mempublikasikan ke GitHub Pages

1. Unggah seluruh isi proyek ke repo GitHub (branch `main`).
   Pastikan folder tersembunyi `.github` ikut terunggah.
2. Di repo, buka **Settings > Pages**, lalu pada **Source** pilih **GitHub Actions**.
3. Setiap kali Anda push ke `main`, situs dibangun dan diterbitkan otomatis.
   Progresnya terlihat di tab **Actions**.
4. Alamat situs: `https://USERNAME.github.io/NAMA-REPO/`
   (atau `https://USERNAME.github.io/` jika repo bernama `USERNAME.github.io`).

Alternatif: hubungkan repo ke https://vercel.com, tanpa pengaturan tambahan.

## Peta file (dari yang paling mudah diubah)

| File | Fungsi |
|---|---|
| `data/data.js` | Semua teks dan daftar karya. **Mulai dari sini.** |
| `components/Kartu.js` | Tampilan satu kartu karya |
| `components/Menu.js` | Menu di atas |
| `app/page.js` | Halaman beranda (alamat `/`) |
| `app/tentang/page.js` | Halaman tentang (alamat `/tentang`) |
| `app/layout.js` | Kerangka yang membungkus semua halaman |
| `app/globals.css` | Warna sendiri dan CSS global |
| `.github/workflows/deploy.yml` | Resep otomatis untuk menerbitkan ke GitHub Pages |
| `next.config.mjs`, `postcss.config.mjs`, `package.json` | Pengaturan, jarang perlu disentuh |

## Alur singkat

```
data/data.js  ──►  Kartu.js, Menu.js, page.js  ──►  layout.js  ──►  browser
 (isi)              (potongan tampilan)             (kerangka)
```

Kata `import` di bagian atas tiap file menunjukkan file itu meminjam dari
file mana.

## Latihan

1. Ganti `nama` di `data/data.js`, lihat nama berubah di menu dan judul tab.
2. Tambah satu baris karya baru di daftar `karya`.
3. Ubah `--color-aksen` di `app/globals.css`, lihat warna tombol berubah.
4. Buat halaman baru: buat folder `app/kontak/` lalu file `page.js` di dalamnya,
   dan alamat `/kontak` langsung aktif.
