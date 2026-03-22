import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Truck, 
  Globe2, 
  Info,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Lokasi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "Apakah NalarXR melayani luar Pulau Jawa?",
      a: "Ya, kami melayani implementasi di seluruh Indonesia. Untuk lokasi di luar Jabodetabek dan Bandung, biaya transportasi dan akomodasi tim teknis akan disesuaikan."
    },
    {
      q: "Berapa lama proses pengiriman barang?",
      a: "Untuk unit ready stock, pengiriman memakan waktu 3-7 hari kerja tergantung lokasi. Untuk pemesanan dalam jumlah besar (bulk order), estimasi waktu akan diinformasikan di awal kontrak."
    },
    {
      q: "Apakah ada biaya tambahan untuk instalasi?",
      a: "Biaya instalasi dan pelatihan dasar biasanya sudah termasuk dalam paket bundling. Namun untuk permintaan khusus atau lokasi terpencil, mungkin ada penyesuaian biaya operasional."
    },
    {
      q: "Bisakah saya mengunjungi kantor NalarXR langsung?",
      a: "Tentu! Kami menerima kunjungan dengan perjanjian (appointment only) minimal H-3 agar tim kami bisa menyiapkan demo yang relevan dengan kebutuhan Anda."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta */}
      {/* 
        <title>Lokasi & Jangkauan Layanan NalarXR - Bandung & Seluruh Indonesia</title>
        <meta name="description" content="NalarXR berbasis di Bandung dan melayani implementasi teknologi pendidikan VR/AR di seluruh wilayah Indonesia. Cek lokasi kantor dan area layanan kami." />
      */}

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">Coverage Area</Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl lg:text-6xl text-white mb-6 leading-tight"
          >
            Lokasi & Jangkauan <span className="text-orange">Layanan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Berbasis operasional di <strong>Bandung</strong>, kami siap melayani implementasi teknologi pendidikan masa depan di berbagai wilayah Indonesia.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-12 px-8" asChild>
              <Link to="/nalarxr/kontak">Cek Ketersediaan Demo</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 h-12 px-8" asChild>
              <Link to="/nalarxr/kontak">Hubungi Tim</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Kantor / Base & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info Kantor */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <MapPin className="w-4 h-4" /> Head Office (Base)
              </div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Bandung, Jawa Barat
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Pusat operasional, pengembangan produk (R&D), dan showroom utama kami.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Alamat Lengkap</h4>
                    <p className="text-muted-foreground text-sm">
                      Jl. Pelajar Pejuang 45 No. 123,<br />
                      Lengkong, Kota Bandung,<br />
                      Jawa Barat 40264
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Jam Operasional</h4>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 09:00 - 17:00 WIB<br />
                      Sabtu - Minggu: Tutup (Kecuali perjanjian khusus)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="h-[400px] bg-secondary/30 rounded-2xl border border-border overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862!2d107.573117!3d-6.903444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
                title="Lokasi Kantor NalarXR Bandung"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="font-bold text-sm mb-1">NalarXR HQ</p>
                <p className="text-xs text-muted-foreground">Jl. Pelajar Pejuang 45 No. 123, Bandung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Layanan */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Area Layanan Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meski berbasis di Bandung, kami telah melayani berbagai institusi di seluruh Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-primary/20 shadow-md">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Bandung & Sekitarnya</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Cimahi, Sumedang, Bandung Barat.
                </p>
                <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">
                  Layanan Prioritas (H+1)
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4 text-orange">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Pulau Jawa & Bali</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Jakarta, Semarang, Surabaya, Yogyakarta, Denpasar.
                </p>
                <Badge variant="outline" className="text-orange-600 bg-orange-50 border-orange-200">
                  Terjadwal (H+3 sd H+7)
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-sm">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-xl mb-2">Luar Pulau Jawa</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sumatera, Kalimantan, Sulawesi, hingga Papua.
                </p>
                <Badge variant="outline" className="text-blue-600 bg-blue-50 border-blue-200">
                  By Project Request
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kunjungan & Pengiriman Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Kunjungan */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                Aturan Kunjungan & Demo
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Kami sangat terbuka untuk kunjungan sekolah atau industri yang ingin mencoba langsung teknologi XR. Harap perhatikan:
                </p>
                <ul className="space-y-3">
                  {[
                    "Wajib reservasi minimal 3 hari kerja sebelumnya.",
                    "Maksimal 5 orang per grup untuk demo efektif.",
                    "Sebutkan minat jurusan/industri saat booking.",
                    "Durasi demo maksimal 90 menit per sesi."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="link" className="text-orange p-0 h-auto font-semibold mt-2" asChild>
                  <Link to="/nalarxr/kontak">Isi Form Kunjungan <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>

            {/* Pengiriman */}
            <div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" />
                Pengiriman & Instalasi
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-foreground">Pengiriman Aman</h4>
                    <p className="text-sm text-muted-foreground">Menggunakan packing kayu & asuransi untuk perangkat keras.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-foreground">Instalasi On-Site</h4>
                    <p className="text-sm text-muted-foreground">Tim teknis kami akan datang ke lokasi untuk setup ruangan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-foreground">Training Awal</h4>
                    <p className="text-sm text-muted-foreground">Sesi pelatihan penggunaan alat langsung setelah instalasi selesai.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">FAQ Terkait Lokasi</h2>
            <div className="h-1 w-20 bg-orange rounded-full mx-auto"></div>
          </div>
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

export default Lokasi;