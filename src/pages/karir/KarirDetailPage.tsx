import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Clock, Banknote } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface JobListing {
  title: string;
  location: string;
  type: string;
  requirements: string[];
}

interface KarirDetailPageProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  listings: JobListing[];
}

const KarirDetailPage = ({ title, subtitle, icon: Icon, description, listings }: KarirDetailPageProps) => (
  <SubPageLayout title={title} subtitle={subtitle} backTo="/karir" backLabel="Karir">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-start gap-4 mb-6">
            <Icon className="w-12 h-12 text-accent shrink-0" />
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>
        </motion.div>
        <div className="space-y-6">
          {listings.map((job, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl p-6 lg:p-8">
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{job.title}</h3>
              <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{job.type}</span>
              </div>
              <div className="space-y-2">
                {job.requirements.map((r) => (
                  <div key={r} className="flex items-start gap-2 text-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {r}
                  </div>
                ))}
              </div>
              <a href="mailto:karir@nalarxr.com" className="inline-block mt-4 bg-accent text-accent-foreground font-heading font-semibold px-5 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">Lamar Sekarang</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default KarirDetailPage;
