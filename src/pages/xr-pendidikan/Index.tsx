import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Sprout, ChefHat, Hotel, Monitor, Plane, Ship, Heart, Zap, Palette, Globe, PlusCircle } from "lucide-react";

const jurusan = [
  { to: "/xr-pendidikan/otomotif", icon: Car, title: "Otomotif", desc: "Teknologi kendaraan dan mesin" },
  { to: "/xr-pendidikan/pertanian", icon: Sprout, title: "Pertanian", desc: "Agrikultur dan perkebunan modern" },
  { to: "/xr-pendidikan/tataboga", icon: ChefHat, title: "Tataboga", desc: "Kuliner dan pengolahan makanan" },
  { to: "/xr-pendidikan/perhotelan", icon: Hotel, title: "Perhotelan", desc: "Hospitality dan manajemen hotel" },
  { to: "/xr-pendidikan/tkj", icon: Monitor, title: "TKJ", desc: "Teknik Komputer dan Jaringan" },
  { to: "/xr-pendidikan/pariwisata", icon: Globe, title: "Pariwisata", desc: "Tourism dan destinasi wisata" },
  { to: "/xr-pendidikan/ekonomi-kreatif", icon: Palette, title: "Ekonomi Kreatif", desc: "Industri kreatif dan desain" },
  { to: "/xr-pendidikan/energi-terbaru", icon: Zap, title: "Energi Terbaru", desc: "Energi terbarukan dan berkelanjutan" },
  { to: "/xr-pendidikan/perkapalan", icon: Ship, title: "Perkapalan", desc: "Maritim dan teknik perkapalan" },
  { to: "/xr-pendidikan/keperawatan", icon: Heart, title: "Keperawatan", desc: "Ilmu kesehatan dan keperawatan" },
  { to: "/xr-pendidikan/pesawat", icon: Plane, title: "Pesawat", desc: "Aviasi dan teknik penerbangan" },
  { to: "/xr-pendidikan/ajukan-jurusan", icon: PlusCircle, title: "Ajukan Jurusan", desc: "Usulkan jurusan baru untuk XR" },
];

const XRPendidikanIndex = () => (
  <SubPageLayout title="XR Pendidikan" subtitle="Jelajahi berbagai modul pembelajaran XR untuk berbagai jurusan kejuruan di Indonesia.">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jurusan.map((item, i) => (
            <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Link to={item.to} className="block bg-secondary rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <item.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default XRPendidikanIndex;
