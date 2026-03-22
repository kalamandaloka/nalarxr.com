import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface MediaItem {
  title: string;
  date: string;
  excerpt: string;
}

interface MediaListPageProps {
  title: string;
  subtitle: string;
  items: MediaItem[];
}

const MediaListPage = ({ title, subtitle, items }: MediaListPageProps) => (
  <SubPageLayout title={title} subtitle={subtitle} backTo="/media" backLabel="Media">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default MediaListPage;
