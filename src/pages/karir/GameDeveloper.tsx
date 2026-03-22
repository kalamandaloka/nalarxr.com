import KarirDetailPage from "./KarirDetailPage";
import { Gamepad2 } from "lucide-react";
const GameDeveloper = () => <KarirDetailPage title="Game Developer" subtitle="Posisi game developer yang tersedia di NalarXR." icon={Gamepad2} description="Game developer kami membangun pengalaman interaktif dan gamifikasi untuk modul XR pendidikan. Teknologi utama kami adalah Unity dan Unreal Engine." listings={[
  { title: "Unity XR Developer", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun Unity development", "XR development experience (VR/AR)", "C# proficiency", "Performance optimization"] },
  { title: "Unreal Engine Developer", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun Unreal Engine", "Blueprint & C++", "VR development experience", "Realistic rendering"] },
]} />;
export default GameDeveloper;
