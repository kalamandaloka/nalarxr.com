import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, Rocket, Boxes, Brain } from "lucide-react";

const items = [
  { to: "/rd/labs", icon: FlaskConical, title: "R&D Labs", desc: "Laboratorium riset dan pengembangan NalarXR" },
  { to: "/rd/next-products", icon: Rocket, title: "Next Products", desc: "Produk masa depan yang sedang dikembangkan" },
  { to: "/rd/spatial-hologram", icon: Boxes, title: "Spatial & Hologram", desc: "Teknologi spatial computing dan holografi" },
  { to: "/rd/ai", icon: Brain, title: "Artificial Intelligence", desc: "AI untuk personalisasi dan adaptasi pembelajaran" },
];

const RDIndex = () => (
  <SubPageLayout title="Research & Development" subtitle="Inovasi tanpa henti untuk masa depan pendidikan Indonesia.">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={item.to} className="block bg-primary rounded-xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1 group">
                <item.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default RDIndex;
