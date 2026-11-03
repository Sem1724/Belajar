// KOMPONEN. Menu di bagian atas, dipakai di semua halaman.
import Link from 'next/link';
import { situs } from '../data/data';

export default function Menu() {
  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
      <Link href="/" className="font-semibold">
        {situs.nama}
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-aksen">Karya</Link>
        <Link href="/tentang" className="hover:text-aksen">Tentang</Link>
      </div>
    </nav>
  );
}
