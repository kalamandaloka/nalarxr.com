import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { BookOpen, Monitor, Users, Award, CheckCircle } from "lucide-react";

interface JurusanPageProps {
  title: string;
  description: string;
  modules: string[];
  benefits: string[];
}

const JurusanPage = ({ title, description, modules, benefits }: JurusanPageProps) => (
  <SubPageLayout title={title} subtitle={description} backTo="/xr-pendidikan" backLabel="XR Pendidikan">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-accent" /> Modul Pembelajaran
            </h2>
            <div className="space-y-3">
              {modules.map((m) => (
                <div key={m} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{m}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent" /> Keunggulan
            </h2>
            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Monitor, label: "VR Ready" },
                { icon: Users, label: "Kolaboratif" },
                { icon: Award, label: "Bersertifikat" },
              ].map((f) => (
                <div key={f.label} className="text-center p-4 bg-primary rounded-xl">
                  <f.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-primary-foreground text-sm font-heading font-semibold">{f.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default JurusanPage;
