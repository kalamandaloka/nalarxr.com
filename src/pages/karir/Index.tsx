import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Briefcase, Code, Box, Gamepad2, GraduationCap } from "lucide-react";

const positions = [
  { to: "/karir/lowongan", icon: Briefcase, title: "Lowongan Kerja", desc: "Lihat semua posisi yang tersedia" },
  { to: "/karir/programmer", icon: Code, title: "Programmer", desc: "Backend, frontend, dan mobile developer" },
  { to: "/karir/3d-modeler", icon: Box, title: "3D Modeler", desc: "Seniman 3D dan desainer environment" },
  { to: "/karir/game-developer", icon: Gamepad2, title: "Game Developer", desc: "Unity dan Unreal Engine developer" },
  { to: "/karir/internship", icon: GraduationCap, title: "Internship / Magang", desc: "Program magang untuk mahasiswa" },
];

const KarirIndex = () => (
  <SubPageLayout title="Karir di NalarXR" subtitle="Bergabunglah dengan tim yang membangun masa depan pendidikan Indonesia.">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-xl p-8 lg:p-12 mb-12 text-center">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl text-primary-foreground mb-4">Kenapa Bekerja di NalarXR?</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">Kami menawarkan lingkungan kerja yang inovatif, kesempatan belajar tanpa batas, dan misi yang bermakna — memajukan pendidikan Indonesia melalui teknologi.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["🚀 Teknologi Terdepan", "🌍 Dampak Sosial", "📚 Learning Budget", "🏡 Hybrid Working"].map((perk) => (
              <div key={perk} className="bg-primary-foreground/10 rounded-lg p-3 text-primary-foreground text-sm font-heading font-semibold">{perk}</div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((item, i) => (
            <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={item.to} className="block bg-secondary rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <item.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default KarirIndex;
