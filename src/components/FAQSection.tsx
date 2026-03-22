import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Apa yang diperlukan untuk memulai VR di sekolah kami?",
    a: "Memulai dengan NalarXR sangat mudah. Yang Anda butuhkan hanyalah satu set headset NalarXR, langganan konten, dan koneksi Wi-Fi yang andal. Solusi NalarXR mencakup headset siap pakai di kelas, konten sesuai kurikulum, sumber daya pelajaran, dan alat manajemen kelas yang intuitif. Kami menyediakan pelatihan komprehensif untuk membantu Anda mengatur headset, menggunakannya dengan percaya diri, dan mengintegrasikan VR ke dalam pelajaran Anda.",
  },
  {
    q: "Apakah guru memerlukan pengalaman teknis untuk menggunakan portal manajemen kelas?",
    a: "Sama sekali tidak! Portal NalarXR dirancang oleh spesialis pendidikan khusus untuk guru. Ini intuitif dan mudah digunakan, memberi Anda kontrol penuh atas bagaimana siswa berinteraksi dengan headset mereka.",
  },
  {
    q: "Mengapa VR baik untuk pendidikan?",
    a: "Virtual reality menawarkan berbagai manfaat, dari meningkatkan retensi pengetahuan dan mendukung hasil pembelajaran hingga meningkatkan keterlibatan di kelas. Pengalaman immersif, seperti berjalan di bulan atau menjelajahi tempat-tempat jauh, memicu rasa ingin tahu dan mendorong siswa untuk bertanya; membantu mereka membangun pemahaman yang lebih dalam tentang mata pelajaran mereka.",
  },
  {
    q: "Bagaimana VR digunakan di sekolah-sekolah?",
    a: "Setiap hari, semakin banyak sekolah di seluruh Indonesia menggunakan virtual reality dalam pelajaran mereka untuk membuat pembelajaran lebih menarik dan meningkatkan perhatian serta fokus di kelas. VR menyediakan berbagai cara untuk belajar dari lingkungan immersif, pembelajaran hands-on, dan simulasi interaktif yang membuat mata pelajaran kompleks mudah dipahami dan tak terlupakan.",
  },
  {
    q: "Apakah konten NalarXR sesuai dengan kurikulum Indonesia?",
    a: "Ya! Semua konten NalarXR dirancang dan dikurasi agar sesuai dengan standar SKKNI dan Kurikulum Nasional Indonesia. Tim kami bekerja sama dengan ahli pendidikan untuk memastikan setiap sumber daya relevan dan berkualitas tinggi.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-card rounded-xl border px-6 shadow-sm"
              >
                <AccordionTrigger className="font-heading font-semibold text-left text-primary hover:text-orange py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
