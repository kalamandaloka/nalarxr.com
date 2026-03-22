import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Calendar, Video, Megaphone } from "lucide-react";

const items = [
  { to: "/media/artikel", icon: FileText, title: "Artikel / Berita", desc: "Berita terbaru seputar NalarXR dan XR pendidikan" },
  { to: "/media/kegiatan", icon: Calendar, title: "Kegiatan / Event", desc: "Acara, workshop, dan pameran NalarXR" },
  { to: "/media/video-galeri", icon: Video, title: "Video & Galeri", desc: "Dokumentasi video dan foto kegiatan" },
  { to: "/media/press-release", icon: Megaphone, title: "Press Release", desc: "Siaran pers resmi NalarXR" },
];

const MediaIndex = () => (
  <SubPageLayout title="Media" subtitle="Berita, kegiatan, dan dokumentasi terbaru dari NalarXR.">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {items.map((item, i) => (
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

export default MediaIndex;
