import KarirDetailPage from "./KarirDetailPage";
import { Briefcase } from "lucide-react";
const Lowongan = () => <KarirDetailPage title="Lowongan Kerja" subtitle="Semua posisi yang sedang dibuka di NalarXR." icon={Briefcase} description="Kami selalu mencari talenta terbaik untuk bergabung dengan tim NalarXR. Lihat posisi yang tersedia di bawah ini." listings={[
  { title: "Senior Unity Developer", location: "Jakarta", type: "Full-time", requirements: ["5+ tahun pengalaman Unity", "Familiar dengan XR development", "C# expert", "Portfolio game/XR project"] },
  { title: "Product Manager — Education", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun sebagai PM", "Background pendidikan atau EdTech", "Data-driven decision making", "Kemampuan komunikasi excellent"] },
  { title: "UX Designer", location: "Jakarta / Remote", type: "Full-time", requirements: ["3+ tahun UX design", "Experience dengan 3D/spatial UI", "Proficient Figma", "Portfolio yang kuat"] },
]} />;
export default Lowongan;
