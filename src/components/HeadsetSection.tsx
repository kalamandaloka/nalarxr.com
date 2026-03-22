import { motion } from "framer-motion";
import headsetXplorer from "@/assets/headset-xplorer.png";
import headsetPremium from "@/assets/headset-premium.png";

const headsets = [
  {
    name: "NalarXR Pro",
    description: "VR Interaktif untuk SMA dan Perguruan Tinggi",
    image: headsetPremium,
  },
  {
    name: "NalarXR Lite",
    description: "VR Menarik untuk Semua Pelajar",
    image: headsetXplorer,
  },
];

const HeadsetSection = () => {
  return (
    <section id="produk" className="py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4">
            Headset NalarXR untuk Kelas Anda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dirancang khusus untuk pendidikan — tahan lama, mudah dikelola, dan siap pakai di kelas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {headsets.map((headset, idx) => (
            <motion.div
              key={headset.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center group"
            >
              <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={headset.image}
                  alt={headset.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-2">{headset.name}</h3>
              <p className="text-muted-foreground mb-6">{headset.description}</p>
              <a
                href="#kontak"
                className="inline-block bg-accent hover:bg-orange-dark text-accent-foreground font-heading font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Selengkapnya
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeadsetSection;
