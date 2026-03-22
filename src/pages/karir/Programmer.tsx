import KarirDetailPage from "./KarirDetailPage";
import { Code } from "lucide-react";
const Programmer = () => <KarirDetailPage title="Programmer" subtitle="Posisi developer yang tersedia di NalarXR." icon={Code} description="Tim engineering NalarXR membangun platform XR pendidikan terdepan. Kami mencari developer yang passionate dengan teknologi dan pendidikan." listings={[
  { title: "Frontend Developer (React)", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun React/TypeScript", "Familiar REST API & GraphQL", "Responsive & accessible UI", "Unit testing"] },
  { title: "Backend Developer (Node.js)", location: "Jakarta", type: "Full-time", requirements: ["3+ tahun Node.js/Python", "Database design (PostgreSQL)", "Cloud services (AWS/GCP)", "API design & microservices"] },
  { title: "Mobile Developer (Flutter)", location: "Jakarta / Remote", type: "Full-time", requirements: ["2+ tahun Flutter/Dart", "Published apps di Play Store/App Store", "State management (Riverpod/Bloc)", "Integration dengan native APIs"] },
]} />;
export default Programmer;
