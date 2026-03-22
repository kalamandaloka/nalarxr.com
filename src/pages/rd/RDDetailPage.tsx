import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface RDDetailPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
  techStack: string[];
}

const RDDetailPage = ({ title, subtitle, icon: Icon, description, highlights, techStack }: RDDetailPageProps) => (
  <SubPageLayout title={title} subtitle={subtitle} backTo="/rd" backLabel="R&D">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Icon className="w-16 h-16 text-accent mb-6" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{description}</p>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Highlights</h3>
            <div className="space-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((t) => (
                <span key={t} className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-heading font-semibold">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default RDDetailPage;
