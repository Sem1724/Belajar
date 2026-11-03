// HALAMAN TENTANG. Alamatnya: /tentang
// Alamat mengikuti nama folder: folder "tentang" -> /tentang
import { situs } from '../../data/data';

export default function Tentang() {
  return (
    <section className="py-16">
      <h1 className="text-5xl font-bold">Tentang</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/70">
        Halo, saya {situs.nama}. Ini halaman kedua untuk melihat cara kerja
        pindah halaman di Next.js. Ganti tulisan ini dengan cerita kamu.
      </p>
      <p className="mt-4">
        Email:{' '}
        <a className="text-aksen underline" href={`mailto:${situs.email}`}>
          {situs.email}
        </a>
      </p>
    </section>
  );
}
