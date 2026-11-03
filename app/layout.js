// KERANGKA. Dibungkus ke semua halaman (mirip index.html + App.tsx di proyek besar).
// Menu ditaruh di sini supaya muncul di setiap halaman.
import './globals.css';
import Menu from '../components/Menu';
import { situs } from '../data/data';
//Percobaan
import { karya } from '../data/data';

// Judul tab dan deskripsi untuk Google
export const metadata = {
  title: situs.nama,
  description: situs.deskripsi,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Menu />
        {/* children = isi halaman yang sedang dibuka */}
        <main className="mx-auto max-w-4xl px-6 pb-20">{children}</main>
      </body>
    </html>
  );
}
