import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="kontak" className="py-24 bg-navy">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6">
            Punya Pertanyaan? <span className="text-gradient">Kami Siap Membantu</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10">
            Setiap hari, guru di seluruh Indonesia menggunakan NalarXR untuk membantu meningkatkan
            keterlibatan siswa, memperdalam pemahaman, dan mendukung retensi pengetahuan jangka
            panjang di setiap mata pelajaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@nalarxr.com"
              className="bg-accent hover:bg-orange-dark text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Hubungi Sales
            </a>
            <a
              href="mailto:support@nalarxr.com"
              className="border-2 border-primary-foreground/30 hover:border-primary-foreground text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg transition-colors hover:bg-primary-foreground/10"
            >
              Hubungi Support
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
