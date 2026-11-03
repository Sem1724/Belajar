// KOMPONEN. Satu kartu karya.
// Ini hanya sebuah fungsi: menerima data (judul, kategori, warna)
// dan mengembalikan potongan HTML.
export default function Kartu({ judul, kategori, warna }) {
  return (
    <div className="rounded-2xl border border-tinta/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
      {/* style={{ ... }} dipakai untuk nilai yang datang dari data */}
      <div className="h-40 rounded-xl" style={{ backgroundColor: warna }} />
      <h3 className="mt-4 text-xl font-semibold">{judul}</h3>
      <p className="text-sm text-tinta/60">{kategori}</p>
    </div>
  );
}
