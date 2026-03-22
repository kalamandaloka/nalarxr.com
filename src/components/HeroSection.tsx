import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Siswa menggunakan VR di kelas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/70 to-navy-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6"
        >
          Transformasi Pembelajaran
          <br />
          <span className="text-gradient">dengan Virtual Reality</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-xl md:text-2xl text-primary-foreground/80 font-medium italic mb-10"
        >
          Libatkan Setiap Siswa, di Setiap Pelajaran
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#produk"
            className="bg-accent hover:bg-orange-dark text-accent-foreground font-heading font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Lihat Produk
          </a>
          <a
            href="#kontak"
            className="border-2 border-primary-foreground/40 hover:border-primary-foreground text-primary-foreground font-heading font-semibold px-8 py-4 rounded-lg text-lg transition-colors hover:bg-primary-foreground/10"
          >
            Minta Demo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
