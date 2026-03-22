import MediaListPage from "./MediaListPage";
const Kegiatan = () => <MediaListPage title="Kegiatan / Event" subtitle="Acara, workshop, dan pameran NalarXR yang akan datang dan telah berlangsung." items={[
  { title: "NalarXR Summit 2026 — Jakarta", date: "15 April 2026", excerpt: "Konferensi tahunan NalarXR yang menghadirkan pembicara dari seluruh dunia tentang masa depan XR pendidikan." },
  { title: "Workshop XR untuk Guru — Bandung", date: "20 Maret 2026", excerpt: "Pelatihan intensif 2 hari untuk guru dalam menggunakan teknologi XR di kelas." },
  { title: "Demo Day NalarXR — Surabaya", date: "5 Maret 2026", excerpt: "Demonstrasi produk terbaru NalarXR untuk sekolah dan institusi pendidikan di Jawa Timur." },
]} />;
export default Kegiatan;
