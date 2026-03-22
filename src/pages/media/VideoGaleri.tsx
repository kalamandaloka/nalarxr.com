import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Play, Image } from "lucide-react";

const videos = [
  { title: "NalarXR — Transformasi Pendidikan Indonesia", type: "video" },
  { title: "Demo NalarXR Pro di Kelas", type: "video" },
  { title: "Testimoni Guru — SMKN 1 Jakarta", type: "video" },
  { title: "NalarXR Summit 2025 Highlights", type: "video" },
  { title: "Lab Virtual Kimia dengan NalarXR", type: "video" },
  { title: "Behind The Scenes — R&D Labs", type: "video" },
];

const VideoGaleri = () => (
  <SubPageLayout title="Video & Galeri" subtitle="Dokumentasi video dan foto kegiatan NalarXR." backTo="/media" backLabel="Media">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary rounded-xl aspect-video flex items-center justify-center cursor-pointer group hover:shadow-2xl transition-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-foreground/5 group-hover:bg-primary-foreground/10 transition-colors" />
              <div className="text-center z-10">
                <Play className="w-12 h-12 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-primary-foreground text-sm font-heading font-semibold px-4">{v.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default VideoGaleri;
