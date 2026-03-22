import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Rocket, 
  Users, 
  Globe2, 
  Target,
  ArrowRight,
  Building2,
  Landmark,
  Briefcase,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Investor = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metrics = [
    { value: "14K+", label: "SMK di Indonesia", icon: Building2 },
    { value: "5M+", label: "Siswa Vokasi", icon: Users },
    { value: "$4.8B", label: "Pasar EdTech ID", icon: TrendingUp },
    { value: "2024", label: "Wajib Digitalisasi", icon: Target }
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "First-Mover Advantage",
      desc: "Pemain utama di segmen XR pendidikan vokasi dengan konten lokal terstandarisasi."
    },
    {
      icon: Globe2,
      title: "Scalable Technology",
      desc: "Platform agnostik yang dapat berjalan di berbagai perangkat VR/AR, termasuk mode offline."
    },
    {
      icon: Briefcase,
      title: "Strong B2G & B2B Pipeline",
      desc: "Kemitraan strategis dengan dinas pendidikan dan jaringan sekolah swasta besar."
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Kombinasi veteran industri pendidikan, praktisi teknologi imersif, dan pengembang kurikulum."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1 text-sm font-medium tracking-wide uppercase">
            Investor Relations
          </Badge>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-extrabold text-4xl lg:text-6xl text-primary-foreground mb-6 leading-tight max-w-4xl mx-auto"
          >
            Investasi pada Masa Depan <span className="text-orange">Tenaga Kerja Indonesia</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            NalarXR menjembatani kesenjangan keterampilan (skills gap) antara lulusan vokasi dan kebutuhan industri melalui teknologi imersif yang terjangkau dan berskala besar.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-orange hover:bg-orange-light text-white font-bold h-12 px-8" onClick={() => document.getElementById('contact-ir')?.scrollIntoView({ behavior: 'smooth' })}>
              Hubungi Tim IR
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10 h-12 px-8" asChild>
              <Link to="/nalarxr/tentang">Pelajari Model Bisnis</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Peluang Pasar Besar & Mendesak
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Indonesia sedang mengalami bonus demografi, namun kualitas pendidikan vokasi masih tertinggal. Digitalisasi adalah satu-satunya jalan pintas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="bg-secondary/20 p-8 rounded-2xl border border-border text-center hover:bg-secondary/40 transition-colors">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-heading font-extrabold text-4xl text-foreground mb-2">{metric.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest / Competitive Advantage */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                Mengapa NalarXR?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Kami bukan sekadar software house. Kami membangun <strong>ekosistem pembelajaran</strong> yang memecahkan masalah infrastruktur, konten, dan kompetensi guru sekaligus.
              </p>
              
              <div className="space-y-6">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm shrink-0">
                      <reason.icon className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-foreground mb-1">{reason.title}</h4>
                      <p className="text-muted-foreground text-sm">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-navy rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="font-heading font-bold text-2xl mb-6 relative z-10">Traction Highlights</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Sekolah Pilot</span>
                  <span className="font-bold text-xl">15+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Siswa Terdampak</span>
                  <span className="font-bold text-xl">2,500+</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-white/70">Modul Tersedia</span>
                  <span className="font-bold text-xl">40+</span>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <span className="text-white/70">Mitra Industri</span>
                  <span className="font-bold text-xl">8</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/60 italic">
                  *Data per Q4 2025. Hubungi kami untuk laporan lengkap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Model Bisnis</h2>
            <p className="text-muted-foreground">Diversifikasi pendapatan untuk keberlanjutan jangka panjang.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-none">Recurring</Badge>
                <CardTitle>Subscription (SaaS)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Langganan tahunan per sekolah untuk akses platform LMS, update konten, dan maintenance sistem.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-colors border-primary bg-primary/5">
              <CardHeader>
                <Badge className="w-fit mb-4 bg-orange text-white hover:bg-orange-light border-none">High Value</Badge>
                <CardTitle>Hardware Bundling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Penjualan perangkat keras (VR Headset/AR Glasses) yang sudah dipra-instal dengan sistem NalarXR.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <Badge className="w-fit mb-4 bg-green-100 text-green-700 hover:bg-green-200 border-none">Service</Badge>
                <CardTitle>Custom Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Jasa pengembangan modul khusus untuk kebutuhan pelatihan spesifik di korporasi atau industri.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact-ir" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Rocket className="w-16 h-16 text-orange mx-auto mb-6" />
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-6">
            Tertarik Berkolaborasi?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Kami sedang membuka putaran pendanaan strategis. Dapatkan akses ke Pitch Deck lengkap dan laporan keuangan kami.
          </p>
          <div className="bg-white/10 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <h4 className="font-bold text-xl mb-4">Kontak Investor Relations</h4>
            <div className="flex flex-col gap-4 items-center">
              <a href="mailto:investor@nalarxr.com" className="flex items-center gap-3 text-lg hover:text-orange transition-colors">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                investor@nalarxr.com
              </a>
              <div className="text-sm text-white/50">
                Menara Multimedia, Jl. Kebon Sirih No.12, Jakarta Pusat
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Investor;