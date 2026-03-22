import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Rina Sulistyani",
    role: "Kepala Sekolah",
    school: "SMPN 1 Bandung",
    quote:
      "Yang benar-benar membuat saya kagum adalah melihat bagaimana siswa bisa memegang katak di tangan mereka melalui komponen AR, dan bahwa kita bisa membawa mereka ke dalam jantung manusia. Saya kembali menjadi anak kecil dan berkata 'siswa kita membutuhkan ini sekarang'.",
  },
  {
    name: "Budi Hartono, M.Pd.",
    role: "Wakil Kepala Sekolah",
    school: "SMAN 3 Surabaya",
    quote:
      "Alih-alih harus membayangkan sesuatu, mereka benar-benar bisa melihatnya atau tenggelam di dalamnya, yang akan mentransformasi cara siswa kami belajar dan memahami konsep. VR/AR dapat membantu kami mendukung perkembangan siswa dalam banyak cara.",
  },
  {
    name: "Siti Nurhaliza, S.Pd.",
    role: "Guru TIK",
    school: "SMK Multimedia Jakarta",
    quote:
      "Saya sangat menganjurkan sekolah lain untuk mengimplementasikan VR. NalarXR menawarkan pilihan sumber daya yang sangat baik di semua tingkat kelas dan area kurikulum. Ini keuntungan besar bagi siswa dan dapat menambahkan kedalaman ekstra pada pelajaran.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-4">
            Dipercaya oleh Sekolah di Indonesia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-navy-light/50 rounded-2xl p-8 border border-primary-foreground/10"
            >
              <Quote className="w-8 h-8 text-orange mb-4" />
              <p className="text-primary-foreground/80 italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-heading font-bold text-primary-foreground">{t.name}</p>
                <p className="text-orange text-sm font-medium">{t.role}</p>
                <p className="text-primary-foreground/50 text-sm">{t.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
