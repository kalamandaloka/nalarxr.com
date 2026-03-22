import { motion } from "framer-motion";
import { Eye, Brain, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    value: "4x",
    label: "Lebih Fokus",
    description: "Siswa lebih fokus dibanding metode pembelajaran tradisional",
  },
  {
    icon: Brain,
    value: "4x",
    label: "Lebih Cepat Menyerap",
    description: "Siswa lebih cepat memahami dan mengingat materi pelajaran",
  },
  {
    icon: TrendingUp,
    value: "275%",
    label: "Lebih Percaya Diri",
    description: "Dalam menerapkan hasil pembelajaran ke situasi nyata",
  },
];

const BenefitsSection = () => {
  return (
    <section id="xr-pendidikan" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4">
            Manfaat VR untuk Pembelajaran
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dibandingkan siswa yang belajar dengan metode tradisional, siswa yang menggunakan headset VR menunjukkan:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="text-center p-8"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center">
                <benefit.icon className="w-10 h-10 text-orange" />
              </div>
              <div className="font-heading font-extrabold text-5xl text-orange mb-2">
                {benefit.value}
              </div>
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {benefit.label}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          *sumber: PWC VR Soft Skills Training Study
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
