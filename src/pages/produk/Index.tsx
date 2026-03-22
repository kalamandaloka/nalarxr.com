import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, School, Wrench, Building, Factory, Shield } from "lucide-react";

const segments = [
  { to: "/produk/sekolah-dasar", icon: School, title: "Sekolah Dasar", desc: "Solusi XR untuk SD kelas 1-6", color: "from-blue-500 to-cyan-500" },
  { to: "/produk/sekolah-menengah", icon: GraduationCap, title: "Sekolah Menengah", desc: "Solusi XR untuk SMP dan SMA", color: "from-purple-500 to-pink-500" },
  { to: "/produk/sekolah-kejuruan", icon: Wrench, title: "Sekolah Kejuruan", desc: "Solusi XR untuk SMK", color: "from-orange-500 to-red-500" },
  { to: "/produk/universitas", icon: Building, title: "Universitas", desc: "Solusi XR untuk perguruan tinggi", color: "from-green-500 to-emerald-500" },
  { to: "/produk/industri", icon: Factory, title: "Industri", desc: "Pelatihan korporat berbasis XR", color: "from-amber-500 to-yellow-500" },
  { to: "/produk/militer", icon: Shield, title: "Militer", desc: "Simulasi pertahanan dan keamanan", color: "from-slate-500 to-gray-600" },
];

const ProdukIndex = () => (
  <SubPageLayout title="Produk NalarXR" subtitle="Solusi XR untuk setiap jenjang pendidikan dan kebutuhan industri.">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((item, i) => (
            <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={item.to} className="block bg-primary rounded-xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <item.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default ProdukIndex;
