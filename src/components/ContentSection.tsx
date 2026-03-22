import { motion } from "framer-motion";
import { Globe, Compass, Box } from "lucide-react";

const contentTypes = [
  { icon: Box, label: "Model 3D" },
  { icon: Compass, label: "Adegan Eksplorasi" },
  { icon: Globe, label: "Gambar & Video 360°" },
];

const ContentSection = () => {
  return (
    <section id="nalarxr" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-6">
            Konten Immersif untuk <span className="text-gradient">Setiap Pelajaran</span>
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
            Setiap konten NalarXR dirancang untuk meningkatkan kurikulum dan membuat
            pembelajaran lebih menarik. Dengan sumber daya siap pakai, Anda dapat dengan
            mudah menghadirkan pengalaman immersif ke kelas mana pun.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-primary mb-4">
              Sumber Daya NalarXR Mencakup:
            </h3>
            <ol className="space-y-3 mb-8">
              {[
                "Tujuan pembelajaran untuk memandu hasil belajar",
                "Topik diskusi untuk membangkitkan rasa ingin tahu",
                "Aktivitas yang disarankan untuk pembelajaran hands-on",
                "Hubungan lintas kurikulum untuk memperluas koneksi",
                "Lembar kerja & kuis untuk diintegrasikan ke rencana pelajaran",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-accent/10 text-orange font-heading font-bold text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading font-bold text-xl text-primary mb-6 text-center">
              Jenis Sumber Daya VR/AR
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {contentTypes.map((ct) => (
                <div key={ct.label} className="text-center p-6 bg-light-gray rounded-2xl">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                    <ct.icon className="w-8 h-8 text-orange" />
                  </div>
                  <p className="font-heading font-semibold text-primary text-sm">{ct.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-navy rounded-2xl p-8 text-center">
              <p className="text-primary-foreground/60 text-sm font-heading font-medium mb-2 uppercase tracking-wider">
                Sesuai Standar
              </p>
              <h4 className="font-heading font-bold text-2xl text-primary-foreground mb-3">
                SKKNI & Kurikulum Nasional
              </h4>
              <p className="text-primary-foreground/70">
                Semua konten dirancang sesuai dengan standar pendidikan nasional Indonesia.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
