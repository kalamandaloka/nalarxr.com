import KarirDetailPage from "./KarirDetailPage";
import { GraduationCap } from "lucide-react";
const Internship = () => <KarirDetailPage title="Internship / Magang" subtitle="Program magang untuk mahasiswa yang ingin belajar teknologi XR." icon={GraduationCap} description="Program magang NalarXR memberi kesempatan mahasiswa untuk belajar langsung dari para ahli di bidang XR, game development, dan EdTech. Durasi magang 3-6 bulan dengan kemungkinan konversi menjadi karyawan tetap." listings={[
  { title: "Intern — Unity Developer", location: "Jakarta", type: "Magang (3-6 bulan)", requirements: ["Mahasiswa semester 5+", "Familiar Unity & C#", "Passion di XR/game dev", "Portfolio project"] },
  { title: "Intern — 3D Artist", location: "Jakarta", type: "Magang (3-6 bulan)", requirements: ["Mahasiswa DKV/Desain", "Familiar Blender/Maya", "Portfolio 3D work", "Kreatif dan detail-oriented"] },
  { title: "Intern — UI/UX Designer", location: "Jakarta / Remote", type: "Magang (3-6 bulan)", requirements: ["Mahasiswa Desain/IT", "Familiar Figma", "Pemahaman UX research", "Portfolio desain"] },
]} />;
export default Internship;
