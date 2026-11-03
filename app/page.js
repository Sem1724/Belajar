// HALAMAN BERANDA. Alamatnya: /
// Aturan Next.js: file bernama page.js di dalam folder app = satu halaman.
import Kartu from '../components/Kartu';
import { situs, karya } from '../data/data';

export default function Beranda() {
  return (
    <>
      <section className="py-16">
        <h1 className="max-w-2xl text-5xl font-bold leading-tight">
          {situs.deskripsi}
        </h1>
        <a
          href={`mailto:${situs.email}`}
          className="mt-8 inline-block rounded-full bg-aksen px-6 py-3 text-white transition hover:opacity-90"
        >
          Hubungi saya
        </a>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* map = buat satu <Kartu> untuk setiap item di daftar karya */}
        {karya.map((item) => (
          <Kartu
            key={item.judul}
            judul={item.judul}
            kategori={item.kategori}
            warna={item.warna}
          />
        ))}
      </section>
    </>
  );
}
