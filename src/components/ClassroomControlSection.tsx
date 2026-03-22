import { motion } from "framer-motion";
import classroomImg from "@/assets/classroom-management.jpg";

const ClassroomControlSection = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6">
            Kontrol Kelas <span className="text-gradient">Sepenuhnya</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-3xl mx-auto">
            NalarXR adalah solusi all-in-one yang dirancang khusus untuk pendidikan.
            Menggabungkan perangkat XR yang powerful, konten immersif sesuai kurikulum,
            alat perencanaan pelajaran, dan manajemen kelas & perangkat yang mulus dalam
            satu platform yang mudah digunakan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Portal NalarXR dibuat khusus dan terintegrasi penuh dengan setiap headset,
              memberikan guru visibilitas dan kontrol real-time atas seluruh lingkungan
              belajar VR mereka.
            </p>
            <a
              href="#kontak"
              className="inline-block bg-accent hover:bg-orange-dark text-accent-foreground font-heading font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Pelajari Lebih Lanjut
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={classroomImg}
              alt="Manajemen kelas NalarXR"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-2xl opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClassroomControlSection;
