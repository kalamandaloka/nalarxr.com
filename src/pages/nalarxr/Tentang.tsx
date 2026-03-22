
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Lightbulb, 
  ShieldCheck, 
  Zap, 
  GraduationCap, 
  Building2, 
  Landmark,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Tentang = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const uspPoints = [
    "Konten interaktif berbasis simulasi nyata",
    "Ekosistem lengkap: Hardware + Software + Training",
    "Mendukung mode offline / low-internet",
    "Sesuai standar kompetensi (SKKNI) & kurikulum merdeka",
    "Pendampingan implementasi dari awal hingga mahir"
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Safety First (K3)",
      desc: "Simulasi risiko tinggi tanpa bahaya fisik nyata."
    },
    {
      icon: Zap,
      title: "Realisme Praktik",
      desc: "Pengalaman mendekati kondisi lapangan sebenarnya."
    },
    {
      icon: Lightbulb,
      title: "Pembelajaran Aktif",
      desc: "Siswa melakukan, bukan hanya menonton atau mendengar."
    },
    {
      icon: Target,
      title: "Terukur & Evaluatif",
      desc: "Data performa siswa terekam untuk evaluasi presisi."
    }
  ];

  const targetAudience = [
    { icon: GraduationCap, label: "SMK & Vokasi" },
    { icon: Building2, label: "Industri & Korporat" },
    { icon: Landmark, label: "Dinas Pendidikan" },
    { icon: Users, label: "Universitas & Kampus" },
  ];

  const faqs = [
    {
      q: "Apakah NalarXR hanya menjual software?",
      a: "Tidak. Kami menyediakan solusi end-to-end meliputi penyediaan headset XR (VR/AR), instalasi software, pelatihan guru, hingga pendampingan kurikulum agar teknologi benar-benar terpakai efektif di kelas."
    },
    {
      q: "Apakah butuh internet kencang untuk menggunakan NalarXR?",
      a: "NalarXR dirancang ramah infrastruktur Indonesia. Sebagian besar modul simulasi dapat dijalankan secara offline (local network) tanpa ketergantungan internet kecepatan tinggi terus-menerus."
    },
    {
      q: "Bagaimana kesesuaian materi dengan kurikulum nasional?",
      a: "Tim konten kami bekerjasama dengan instruktur ahli dan merujuk pada Capaian Pembelajaran (CP), Alur Tujuan Pembelajaran (ATP), serta Standar Kompetensi Kerja Nasional Indonesia (SKKNI)."
    },
    {
      q: "Apakah ada pelatihan untuk guru?",
      a: "Tentu. Salah satu pilar utama kami adalah 'Teacher Empowerment'. Kami memberikan sertifikasi dan pelatihan intensif agar guru percaya diri menggunakan alat bantu ajar berbasis XR."
    },
    {
      q: "Berapa biaya investasi untuk sekolah?",
      a: "Kami memiliki skema fleksibel, mulai dari paket pilot project (skala kecil) hingga laboratorium XR lengkap. Silakan hubungi tim kami untuk konsultasi kebutuhan spesifik Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta (Placeholder representation) */}
      {/* 
        <title>Tentang NalarXR - Revolusi Pembelajaran Vokasi & Pelatihan Imersif</title>
        <meta name="description" content="NalarXR menghadirkan solusi pembelajaran XR (VR/AR) untuk SMK, Vokasi, dan Industri. Simulasi interaktif, aman, dan sesuai standar kurikulum nasional." />
      */}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium tracking-wide uppercase">
              Tentang NalarXR
            </Badge>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading font-extrabold text-4xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
            >
              Membangun Generasi yang <span className="text-orange">Paham Sistem</span>, Bukan Sekadar Hafal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Kami menghadirkan teknologi <strong>Extended Reality (XR)</strong> untuk mengubah cara pendidikan vokasi dan pelatihan industri dilakukan di Indonesia. Lebih aman, lebih hemat, dan lebih efektif.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-semibold px-8 w-full sm:w-auto h-12 text-base" asChild>
                <Link to="/nalarxr/kontak">Minta Demo Sekarang</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10 w-full sm:w-auto h-12 text-base" asChild>
                <Link to="/xr-pendidikan">Lihat XR Pendidikan</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kenapa NalarXR & Apa yang Kami Bangun */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Problem */}
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Tantangan Pendidikan Vokasi Hari Ini
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Pendidikan vokasi menghadapi dilema klasik: kebutuhan praktik tinggi, namun terkendala biaya alat, risiko keselamatan, dan keterbatasan ruang. Akibatnya, siswa seringkali hanya "melihat" tanpa benar-benar "melakukan".
              </p>
              <ul className="space-y-4">
                {[
                  "Keterbatasan alat praktik yang mahal & cepat usang",
                  "Risiko keselamatan (K3) pada mesin/alat berat",
                  "Biaya bahan habis pakai (consumables) yang tinggi",
                  "Kesulitan melakukan repetisi latihan bagi setiap siswa"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-red-100 p-1 rounded-full">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Solution (Apa yang Kami Bangun) */}
            <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                Ekosistem Solusi NalarXR
              </h3>
              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Modul XR Imersif</h4>
                    <p className="text-sm text-muted-foreground">Perpustakaan konten simulasi VR/AR untuk berbagai jurusan (Otomotif, Kesehatan, Teknik, dll).</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-orange-600">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Platform LMS & Asesmen</h4>
                    <p className="text-sm text-muted-foreground">Sistem manajemen pembelajaran yang melacak progres dan skor kompetensi siswa secara real-time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <span className="font-bold text-green-600">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Pendampingan & Hardware</h4>
                    <p className="text-sm text-muted-foreground">Dukungan teknis penuh, mulai dari penyediaan headset hingga pelatihan guru (ToT).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Program */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-muted-foreground text-lg">
              Pendekatan sistematis untuk memastikan teknologi berdampak nyata, bukan sekadar gaya-gayaan.
            </p>
          </div>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discovery", desc: "Analisis kebutuhan sekolah/industri & pemetaan kurikulum." },
                { step: "02", title: "Pilot & Setup", desc: "Instalasi perangkat dan uji coba skala terbatas." },
                { step: "03", title: "Training", desc: "Pelatihan guru/instruktur untuk operasional mandiri." },
                { step: "04", title: "Scale & Evaluasi", desc: "Implementasi penuh dan monitoring dampak pembelajaran." }
              ].map((item, idx) => (
                <div key={idx} className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto lg:mx-0">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 text-center lg:text-left">{item.title}</h3>
                  <p className="text-muted-foreground text-sm text-center lg:text-left leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nilai & Prinsip */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Prinsip Desain & Nilai Kami
            </h2>
            <div className="h-1 w-20 bg-orange rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-all bg-secondary/10">
                <CardHeader>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-2">
                    <val.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{val.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {val.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tim & Ekosistem Placeholder */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">Tim & Ekosistem</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-12 text-lg">
            Dibangun oleh kolaborasi praktisi pendidikan, engineer XR, 3D artist, dan ahli industri yang berdedikasi untuk kemajuan vokasi Indonesia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-white/10 rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
                  <Users className="w-12 h-12 text-white/30" />
                  <div className="absolute inset-0 bg-orange/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="h-4 w-24 bg-white/20 rounded mx-auto mb-2"></div>
                <div className="h-3 w-16 bg-white/10 rounded mx-auto"></div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
            <p className="font-medium text-lg">
              "Komitmen kami adalah pada kualitas konten yang sesuai standar industri dan kurikulum nasional (CP/ATP & SKKNI)."
            </p>
          </div>
        </div>
      </section>

      {/* Untuk Siapa */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Siapa yang Kami Bantu?
            </h2>
            <p className="text-muted-foreground">Solusi NalarXR dirancang untuk berbagai pemangku kepentingan.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targetAudience.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-secondary rounded-xl text-center hover:bg-secondary/80 transition-colors">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <span className="font-bold text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP & FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: USP */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Kenapa Memilih NalarXR?
              </h2>
              <ul className="space-y-4">
                {uspPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-background p-4 rounded-lg shadow-sm border border-border/50">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="font-medium text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: FAQ */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
                Sering Ditanyakan
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl lg:text-5xl mb-6">
            Siap Membawa Pembelajaran Masa Depan ke Institusi Anda?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Diskusikan kebutuhan Anda dengan tim kami dan dapatkan demo gratis.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-14 px-8 text-lg" asChild>
              <Link to="/nalarxr/kontak">Hubungi Kami <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-lg" asChild>
              <Link to="/xr-pendidikan">Pelajari Produk</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tentang;
