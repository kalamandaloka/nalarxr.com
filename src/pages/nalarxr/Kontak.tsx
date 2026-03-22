import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Briefcase,
  MessageSquare,
  Clock,
  HelpCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Kontak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactCards = [
    {
      icon: Mail,
      label: "Email Umum",
      value: "info@nalarxr.com",
      action: "mailto:info@nalarxr.com",
      desc: "Untuk pertanyaan umum & kemitraan."
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+62 812-2206-6691",
      action: "https://wa.me/6281222066691",
      desc: "Respon cepat (Senin - Jumat)."
    },
    {
      icon: Briefcase,
      label: "Karir & HR",
      value: "lowongan@nalarxr.com",
      action: "mailto:lowongan@nalarxr.com",
      desc: "Bergabung dengan tim kami."
    }
  ];

  const faqs = [
    {
      q: "Berapa lama respon email/pesan?",
      a: "Kami berusaha membalas setiap pesan dalam waktu 1x24 jam pada hari kerja (Senin-Jumat)."
    },
    {
      q: "Bagaimana cara meminta jadwal demo produk?",
      a: "Anda bisa mengisi formulir di halaman ini dan mencentang opsi 'Jadwalkan Demo'. Tim kami akan menghubungi Anda untuk konfirmasi waktu."
    },
    {
      q: "Apakah NalarXR menerima mahasiswa magang?",
      a: "Ya, kami membuka program internship secara berkala. Silakan kirim CV dan portofolio ke email karir kami (lowongan@nalarxr.com)."
    },
    {
      q: "Apakah bisa konsultasi via Zoom/Google Meet?",
      a: "Sangat bisa. Kami melayani diskusi daring untuk efisiensi waktu, terutama bagi mitra di luar Bandung."
    },
    {
      q: "Format apa yang harus disiapkan untuk kerjasama?",
      a: "Cukup jelaskan kebutuhan dasar Anda di formulir. Jika ada dokumen pendukung (TOR/Proposal), bisa dikirimkan menyusul via email."
    },
    {
      q: "Apakah ada layanan support di akhir pekan?",
      a: "Layanan standar kami beroperasi Senin-Jumat. Untuk klien dengan kontrak SLA khusus, tersedia layanan support prioritas 24/7."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      {/* 
        <title>Hubungi NalarXR - Kontak, Demo & Kerjasama</title>
        <meta name="description" content="Hubungi tim NalarXR untuk permintaan demo, kerjasama pendidikan, atau pertanyaan seputar teknologi VR/AR. Email: info@nalarxr.com, WA: +62 812-2206-6691." />
      */}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">Contact Us</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl lg:text-6xl text-primary-foreground mb-6 leading-tight"
          >
            Kontak <span className="text-orange">NalarXR</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Pilih kebutuhanmu—mulai dari <strong>demo produk</strong>, <strong>kerjasama strategis</strong>, pengembangan konten, hingga peluang karir.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-12 px-8" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
              Minta Demo
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10 h-12 px-8" asChild>
              <Link to="/nalarxr/kerjasama">Ajukan Kerjasama</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Quick Contacts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 -mt-32 relative z-20">
            {contactCards.map((card, idx) => (
              <Card key={idx} className="border-none shadow-xl bg-white hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6">
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{card.label}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{card.desc}</p>
                  <a 
                    href={card.action} 
                    className="mt-auto font-bold text-orange hover:text-orange-dark flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
            <div className="grid lg:grid-cols-5">
              {/* Form Side */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Kirim Pesan</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Peran</Label>
                      <select id="role" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Pilih Peran</option>
                        <option value="guru">Guru / Kepsek</option>
                        <option value="dinas">Dinas Pendidikan</option>
                        <option value="industri">Industri / Korporat</option>
                        <option value="kampus">Dosen / Kampus</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="instansi">Instansi / Perusahaan</Label>
                    <Input id="instansi" placeholder="Nama Sekolah atau Perusahaan" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">Kota / Provinsi</Label>
                      <Input id="city" placeholder="Domisili Instansi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Minat Utama</Label>
                      <select id="interest" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Pilih Minat</option>
                        <option value="demo">Demo Produk</option>
                        <option value="otomotif">Jurusan Otomotif</option>
                        <option value="kesehatan">Jurusan Kesehatan</option>
                        <option value="pertanian">Jurusan Pertanian</option>
                        <option value="ajukan">Ajukan Jurusan Baru</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan / Detail Kebutuhan</Label>
                    <Textarea id="message" placeholder="Ceritakan kebutuhan Anda..." className="min-h-[120px]" />
                  </div>

                  <div className="flex items-center space-x-2 py-2">
                    <input type="checkbox" id="demo-req" className="h-4 w-4 rounded border-gray-300 text-orange focus:ring-orange" />
                    <Label htmlFor="demo-req" className="text-sm font-normal text-muted-foreground cursor-pointer">
                      Saya ingin menjadwalkan demo (Online/Offline)
                    </Label>
                  </div>

                  <Button className="w-full bg-orange hover:bg-orange-light text-white font-bold h-12 text-base">
                    Kirim Pesan
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Data Anda aman. Kami mematuhi kebijakan privasi dan tidak menyebarkan kontak Anda.
                  </p>
                </form>
              </div>

              {/* Info Side */}
              <div className="lg:col-span-2 bg-primary p-8 lg:p-12 text-primary-foreground flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl mb-6">Kantor Pusat</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange shrink-0 mt-1" />
                      <p className="text-sm opacity-90 leading-relaxed">
                        Jl. Pelajar Pejuang 45 No. 123,<br />
                        Lengkong, Bandung,<br />
                        Jawa Barat 40264
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-orange shrink-0" />
                      <p className="text-sm opacity-90">
                        Senin - Jumat: 09:00 - 17:00
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-orange shrink-0" />
                      <p className="text-sm opacity-90">info@nalarxr.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white/10 rounded-xl border border-white/10">
                  <p className="font-medium text-sm mb-2">Butuh Bantuan Teknis?</p>
                  <p className="text-xs opacity-70 mb-4">
                    Untuk pelanggan existing, silakan hubungi tim support via portal khusus.
                  </p>
                  <a href="#" className="text-orange text-sm font-bold hover:underline flex items-center gap-1">
                    Login Portal Support <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-section" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Pertanyaan Seputar Kontak</h2>
            <div className="h-1 w-20 bg-orange rounded-full mx-auto"></div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`faq-contact-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-8">
            Siap Memulai Transformasi Digital?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-12 px-8">
              Hubungi Kami Sekarang
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-12 px-8" asChild>
              <Link to="/nalarxr/tentang">Pelajari Tentang Kami</Link>
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 h-12 px-8" onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}>
              Lihat Pusat Bantuan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;