
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Handshake, 
  Building2, 
  GraduationCap, 
  Globe2, 
  Users2, 
  Presentation, 
  Box, 
  FileCheck, 
  Headset, 
  ArrowRight,
  CheckCircle,
  CalendarDays,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Kerjasama = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collaborationTypes = [
    {
      icon: GraduationCap,
      title: "Sekolah & Kampus",
      desc: "Implementasi laboratorium XR, kelas percontohan (pilot), dan pengayaan materi vokasi.",
      features: ["Paket Lab XR", "Pelatihan Guru", "Lisensi Konten"]
    },
    {
      icon: Globe2,
      title: "Dinas & Pemerintah",
      desc: "Program skala daerah/nasional untuk standardisasi kompetensi dan pemerataan kualitas pendidikan.",
      features: ["Implementasi Massal", "Dashboard Monitoring", "Laporan Dampak"]
    },
    {
      icon: Building2,
      title: "Industri & Korporat",
      desc: "Pelatihan K3, onboarding karyawan baru, dan simulasi prosedur operasional standar (SOP).",
      features: ["Custom Module", "Safety Training", "Employee Onboarding"]
    },
    {
      icon: Presentation,
      title: "Co-Creation Konten",
      desc: "Kolaborasi pengembangan modul spesifik sesuai kebutuhan industri atau jurusan tertentu.",
      features: ["Joint Development", "Revenue Sharing", "IP Rights"]
    }
  ];

  const whatWeProvide = [
    { icon: Box, label: "Perangkat XR (Headset)", desc: "Unit VR/AR siap pakai dengan spesifikasi teruji." },
    { icon: FileCheck, label: "Konten & Kurikulum", desc: "Modul simulasi sesuai CP/ATP dan SKKNI." },
    { icon: FileText, label: "SOP & Panduan", desc: "Dokumen teknis pelaksanaan kelas XR." },
    { icon: Headset, label: "Dukungan Teknis", desc: "Tim support siap membantu troubleshooting." },
    { icon: Users2, label: "Pelatihan (ToT)", desc: "Training intensif untuk guru/instruktur." },
  ];

  const scenarios = [
    {
      title: "Skenario A: Pilot 1 Jurusan SMK",
      desc: "Cocok untuk sekolah yang ingin memulai validasi dampak teknologi XR.",
      items: [
        "2-5 Unit Headset VR",
        "Akses Modul 1 Jurusan (misal: Otomotif)",
        "Pelatihan 2 Guru Inti",
        "Durasi Pilot: 3-6 Bulan"
      ]
    },
    {
      title: "Skenario B: Program Kota/Kabupaten",
      desc: "Implementasi serentak untuk pemerataan kualitas di banyak sekolah.",
      items: [
        "Paket Lab XR per Sekolah",
        "Dashboard Monitoring Pusat",
        "Kompetisi/Showcase Siswa",
        "Laporan Analisis Dampak Wilayah"
      ]
    }
  ];

  const faqs = [
    {
      q: "Berapa lama proses implementasi sampai siap pakai?",
      a: "Untuk skala sekolah (pilot), persiapan memakan waktu 2-4 minggu (pengiriman alat, instalasi, pelatihan). Untuk skala industri/dinas, timeline disesuaikan dengan kompleksitas."
    },
    {
      q: "Apakah perlu ruangan khusus?",
      a: "Idealnya ada ruang 'Lab XR' ukuran 4x4 meter minimal agar siswa leluasa bergerak. Namun, XR NalarXR fleksibel dan bisa digunakan di ruang kelas biasa dengan pengaturan meja-kursi."
    },
    {
      q: "Bagaimana jika alat rusak?",
      a: "Kami menyediakan garansi perangkat (sesuai manufaktur) dan layanan service/support cepat untuk meminimalisir downtime pembelajaran."
    },
    {
      q: "Apakah bisa mengajukan demo ke sekolah kami?",
      a: "Sangat bisa. Kami memiliki program roadshow dan demo day. Silakan isi formulir untuk menjadwalkan kunjungan tim kami."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      {/* 
        <title>Kerjasama NalarXR - Mitra Implementasi Teknologi Pendidikan Imersif</title>
        <meta name="description" content="Berkolaborasi dengan NalarXR untuk implementasi laboratorium VR/AR di sekolah, kampus, dinas pendidikan, dan pelatihan industri." />
      */}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">Partnership</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Kerjasama dengan <span className="text-orange">NalarXR</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Kolaborasi strategis untuk menghadirkan pembelajaran imersif yang <strong>terukur</strong>, <strong>aman</strong>, dan <strong>siap implementasi</strong> di institusi Anda.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-12 px-8" onClick={() => document.getElementById('form-kerjasama')?.scrollIntoView({ behavior: 'smooth' })}>
              Ajukan Kerjasama
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-12 px-8" asChild>
              <Link to="/nalarxr/kontak">Jadwalkan Meeting</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bentuk Kerjasama */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Pilihan Model Kolaborasi
            </h2>
            <p className="text-muted-foreground">Kami menyesuaikan skema kerjasama dengan kebutuhan institusi Anda.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationTypes.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all border-border/50">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[80px]">
                    {item.desc}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                        <CheckCircle className="w-4 h-4 text-green-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apa yang Disiapkan & Tahapan */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: What We Provide */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                Apa yang Kami Siapkan?
              </h2>
              <div className="space-y-6">
                {whatWeProvide.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border shadow-sm">
                    <div className="bg-primary/5 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-8">
                Alur Kerjasama
              </h2>
              <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                {[
                  { title: "Diskusi Awal", desc: "Pemetaan masalah dan kebutuhan target." },
                  { title: "Proposal & Demo", desc: "Kami mengajukan solusi teknis dan demo produk." },
                  { title: "MoU & Administrasi", desc: "Penandatanganan kesepakatan kerjasama." },
                  { title: "Setup & Training", desc: "Instalasi alat dan pelatihan intensif guru." },
                  { title: "Pelaksanaan & Monitoring", desc: "Pembelajaran berjalan dengan pendampingan." },
                  { title: "Evaluasi Berkala", desc: "Laporan dampak dan rencana pengembangan." }
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[41px] bg-background border-4 border-secondary w-6 h-6 rounded-full flex items-center justify-center z-10">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <h4 className="font-bold text-lg text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="mt-20 pt-16 border-t border-border">
            <h2 className="font-heading font-bold text-3xl text-center text-foreground mb-12">
              Output & Dampak Nyata
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: FileText, 
                  title: "Materi & Modul", 
                  desc: "Akses penuh ke perpustakaan konten simulasi sesuai standar industri." 
                },
                { 
                  icon: BarChart3, 
                  title: "Laporan Kompetensi", 
                  desc: "Data analitik perkembangan skill siswa secara individual dan kelas." 
                },
                { 
                  icon: CheckCircle, 
                  title: "Sertifikasi", 
                  desc: "Sertifikat penyelesaian program bagi siswa dan guru pendamping." 
                },
                { 
                  icon: Presentation, 
                  title: "Portofolio Digital", 
                  desc: "Rekam jejak proyek siswa yang valid untuk melamar kerja." 
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-background p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all text-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skenario Contoh */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Contoh Skenario Implementasi</h2>
            <p className="text-muted-foreground">Gambaran umum skala kerjasama yang sering dilakukan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {scenarios.map((scenario, idx) => (
              <div key={idx} className="bg-secondary/10 border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{scenario.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{scenario.desc}</p>
                <div className="bg-background rounded-xl p-4">
                  <p className="font-semibold text-sm mb-3 text-primary">Termasuk:</p>
                  <ul className="space-y-2">
                    {scenario.items.map((item, i) => (
                      <li key={i} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-kerjasama" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
                Mari Mulai Langkah Pertama
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Isi formulir di samping untuk mendiskusikan potensi kerjasama. Tim kami akan menghubungi Anda dalam waktu 1x24 jam kerja.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <FileCheck className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Kebutuhan Mitra</h4>
                    <ul className="text-sm text-primary-foreground/70 mt-2 space-y-1 list-disc pl-4">
                      <li>Ruang aman untuk praktik (min. 3x3m per alat)</li>
                      <li>Listrik stabil & koneksi internet (opsional untuk offline)</li>
                      <li>PIC / Guru pendamping yang berdedikasi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-foreground rounded-2xl p-8 shadow-2xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nama Depan</Label>
                    <Input id="firstName" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nama Belakang</Label>
                    <Input id="lastName" placeholder="Nama Belakang" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Institusi</Label>
                  <Input id="email" type="email" placeholder="nama@sekolah.sch.id" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor WhatsApp</Label>
                  <Input id="phone" type="tel" placeholder="+62..." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="institution">Nama Institusi / Perusahaan</Label>
                  <Input id="institution" placeholder="SMK... / PT..." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="type">Jenis Kerjasama</Label>
                  <select id="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Pilih Jenis Kerjasama</option>
                    <option value="school">Implementasi Sekolah/Kampus</option>
                    <option value="government">Program Dinas/Pemerintah</option>
                    <option value="corporate">Industri/Korporat</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan / Kebutuhan Singkat</Label>
                  <Textarea id="message" placeholder="Ceritakan sedikit tentang rencana atau kebutuhan Anda..." />
                </div>
                
                <Button className="w-full bg-orange hover:bg-orange-light text-white font-bold h-12 text-base mt-2">
                  Kirim Pengajuan
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Kami menjaga privasi data Anda. Tidak ada spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-10">Pertanyaan Umum Kerjasama</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kerjasama;
