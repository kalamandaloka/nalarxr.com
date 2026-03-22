import KarirDetailPage from "./KarirDetailPage";
import { Box } from "lucide-react";
const Modeler3D = () => <KarirDetailPage title="3D Modeler" subtitle="Posisi 3D artist yang tersedia di NalarXR." icon={Box} description="Tim 3D kami menciptakan aset dan environment immersif untuk modul pembelajaran XR. Kami mencari seniman 3D yang detail-oriented dan kreatif." listings={[
  { title: "Senior 3D Environment Artist", location: "Jakarta", type: "Full-time", requirements: ["4+ tahun 3D modeling", "Expert Blender/Maya/3ds Max", "PBR texturing", "Optimisasi untuk real-time rendering"] },
  { title: "3D Character Artist", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun character modeling", "Sculpting di ZBrush", "Rigging dan skinning", "Animasi dasar"] },
]} />;
export default Modeler3D;
