import { motion } from "framer-motion";
import { MapPin, School, Monitor } from "lucide-react";

const stats = [
  { icon: MapPin, value: "34", label: "Provinsi di Indonesia", suffix: "+" },
  { icon: School, value: "500", label: "Sekolah Terdaftar", suffix: "+" },
  { icon: Monitor, value: "10.000", label: "Kelas Tertransformasi", suffix: "+" },
];

const GlobalReachSection = () => {
  return (
    <section className="py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4">
            Jangkauan NalarXR di Indonesia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dari Sabang sampai Merauke, NalarXR mendukung guru untuk menciptakan pengalaman
            belajar yang immersif dan berdampak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-orange" />
              </div>
              <div className="font-heading font-extrabold text-4xl text-primary mb-1">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
