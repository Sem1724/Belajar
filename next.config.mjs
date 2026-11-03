// Pengaturan Next.js.
// output: 'export' artinya hasil build berupa file statis (HTML/CSS/JS biasa)
// di folder "out", jadi bisa ditaruh di hosting statis mana pun.
//
// basePath: GitHub Pages biasanya memberi alamat username.github.io/NAMA-REPO,
// jadi semua alamat harus diawali /NAMA-REPO. Nilainya diisi otomatis oleh
// GitHub Actions (lihat .github/workflows/deploy.yml). Di komputer sendiri
// nilainya kosong, jadi tidak ada yang perlu diubah.
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH || '',
};

export default nextConfig;
