import SubPageLayout from "@/components/SubPageLayout";
import { motion } from "framer-motion";
import { PlusCircle, Send } from "lucide-react";
import { useState } from "react";

const AjukanJurusan = () => {
  const [form, setForm] = useState({ jurusan: "", alasan: "", institusi: "", email: "" });

  return (
    <SubPageLayout title="Ajukan Jurusan Baru" subtitle="Usulkan jurusan atau bidang studi yang ingin Anda lihat di platform XR kami." backTo="/xr-pendidikan" backLabel="XR Pendidikan">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-secondary rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <PlusCircle className="w-8 h-8 text-accent" />
                <h2 className="font-heading font-bold text-2xl text-foreground">Form Pengajuan</h2>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Nama Jurusan / Bidang Studi" value={form.jurusan} onChange={(e) => setForm({ ...form, jurusan: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none" />
                <input type="text" placeholder="Nama Institusi" value={form.institusi} onChange={(e) => setForm({ ...form, institusi: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none" />
                <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none" />
                <textarea placeholder="Alasan pengajuan dan deskripsi kebutuhan" rows={4} value={form.alasan} onChange={(e) => setForm({ ...form, alasan: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none resize-none" />
                <button className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4" /> Kirim Pengajuan
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </SubPageLayout>
  );
};

export default AjukanJurusan;
