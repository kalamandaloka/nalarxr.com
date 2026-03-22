import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, School, Building2, Landmark, Users, Heart } from "lucide-react";

const audiences = [
  {
    id: "sd",
    icon: School,
    title: "Pendidikan Dasar (SD)",
    description:
      "NalarXR menghidupkan seluruh kurikulum untuk siswa SD. Siswa dapat masuk ke dalam hutan hujan, berjalan di antara dinosaurus, atau menjelajahi tata surya, semua dari dalam kelas mereka. Pengalaman bersama ini meningkatkan imajinasi, memperkaya kosakata, dan membantu anak-anak memahami ide-ide kompleks dengan cara yang terasa nyata dan berkesan.",
  },
  {
    id: "smp",
    icon: GraduationCap,
    title: "Pendidikan Menengah (SMP/SMA)",
    description:
      "Untuk siswa yang lebih besar, NalarXR membuka pintu menuju pembelajaran yang lebih dalam dan berpikir kritis. Siswa SMP/SMA dapat masuk ke simulasi lanjutan yang menghidupkan konsep kompleks. Dalam sains, mereka dapat menjelajahi cara kerja otak atau berinteraksi dengan model molekul 3D. Dalam sejarah dan geografi, mereka bisa berjalan melalui rekonstruksi sejarah yang immersif.",
  },
  {
    id: "smk",
    icon: Building2,
    title: "Pendidikan Kejuruan (SMK)",
    description:
      "NalarXR memberdayakan pendidikan kejuruan untuk menggabungkan pelatihan teknis hands-on dengan soft skill siap kerja. Siswa dapat mempraktikkan tugas teknis di bidang teknik, kesehatan, atau desain sementara modul berbasis AI membangun kepercayaan diri dalam komunikasi, kerja tim, dan presentasi.",
  },
  {
    id: "pt",
    icon: Landmark,
    title: "Perguruan Tinggi",
    description:
      "Di perguruan tinggi, NalarXR mendukung penelitian, studi lanjutan, dan persiapan profesional. Mahasiswa dapat berinteraksi dengan model kompleks, simulasi, atau lingkungan yang sebelumnya tidak bisa diakses. Ini memungkinkan universitas dan perguruan tinggi untuk berinovasi dalam pengajaran.",
  },
  {
    id: "inklusi",
    icon: Heart,
    title: "Pendidikan Inklusi (ABK)",
    description:
      "Untuk siswa berkebutuhan khusus, VR menyediakan pengalaman multi-sensori yang aman, menarik, dan mudah diakses. NalarXR memungkinkan guru untuk mempersonalisasi konten, mengurangi hambatan, dan menciptakan lingkungan yang menenangkan atau merangsang sesuai kebutuhan individu.",
  },
  {
    id: "dinas",
    icon: Users,
    title: "Dinas Pendidikan",
    description:
      "NalarXR memungkinkan pemerintah dan dinas pendidikan untuk mendorong transformasi skala besar. Dengan deployment yang scalable, konten sesuai kurikulum, dan manajemen terpusat, VR memberdayakan dinas pendidikan untuk menghadirkan pembelajaran inovatif secara konsisten.",
  },
];

const TargetAudienceSection = () => {
  const [active, setActive] = useState("sd");
  const current = audiences.find((a) => a.id === active)!;

  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4">
            NalarXR untuk Siapa?
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {audiences.map((a) => (
            <button
              key={a.id}
              onClick={() => setActive(a.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm transition-all ${
                active === a.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-card/80 shadow"
              }`}
            >
              <a.icon className="w-4 h-4" />
              {a.title.split(" (")[0]}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                <current.icon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary">{current.title}</h3>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed">{current.description}</p>
            <a
              href="#kontak"
              className="inline-block mt-6 bg-accent hover:bg-orange-dark text-accent-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
