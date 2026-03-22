import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Monitor, Headphones, BookOpen, Users } from "lucide-react";

interface ProdukSegmentPageProps {
  title: string;
  subtitle: string;
  features: string[];
  packages: { name: string; desc: string; price: string }[];
}

const ProdukSegmentPage = ({ title, subtitle, features, packages }: ProdukSegmentPageProps) => (
  <SubPageLayout title={title} subtitle={subtitle} backTo="/produk" backLabel="Produk">
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Fitur Utama</h2>
            <div className="space-y-3">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Termasuk dalam Paket</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Headphones, label: "Headset VR" },
                { icon: Monitor, label: "Portal Manajemen" },
                { icon: BookOpen, label: "Konten Kurikulum" },
                { icon: Users, label: "Pelatihan Guru" },
              ].map((item) => (
                <div key={item.label} className="bg-primary rounded-xl p-4 text-center">
                  <item.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-primary-foreground text-sm font-heading font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6 text-center">Pilihan Paket</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-secondary rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{pkg.desc}</p>
              <p className="font-heading font-extrabold text-2xl text-accent">{pkg.price}</p>
              <a href="/nalarxr/kontak" className="inline-block mt-4 bg-accent text-accent-foreground font-heading font-semibold px-6 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity">Hubungi Kami</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </SubPageLayout>
);

export default ProdukSegmentPage;
