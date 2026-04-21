import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Monitor, 
  Glasses, 
  ShieldCheck, 
  Settings,
  Activity,
  FileText,
  MapPin,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import { SplineScene } from "@/components/ui/splite";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProductCard } from "@/components/ui/info-card";
import { AudienceTabs } from "@/components/ui/audience-tabs";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { FocusCards } from "@/components/ui/focus-cards";
import { HyperText } from "@/components/ui/hyper-text";

const galleryCards = [
  {
    title: "Praktik Mesin Otomotif",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Safety Training K3",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Analisis Data Real-time",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Kolaborasi Jarak Jauh",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Laboratorium Virtual",
    src: "https://images.unsplash.com/photo-1581093458791-9f302e6d8659?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Sertifikasi Industri",
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop",
  },
];

const NalarXRIndex = () => {
  const [heroMode, setHeroMode] = useState<'mr' | 'digital'>('mr');
  const [activeScrollStep, setActiveScrollStep] = useState(0);
  
  // Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hero Content Data
  const heroContent = {
    mr: {
      title: "Simulasi Praktik Nyata Tanpa Risiko",
      subtitle: "Modul Mixed Reality (MR) untuk pelatihan vokasi yang aman, efisien, dan bisa diulang tanpa batas.",
      benefits: ["Zero Accident Risk", "Hemat Bahan Praktik", "Unlimited Repetition"],
      videoPlaceholder: "bg-navy", // Placeholder color
      accent: "text-orange",
      buttonColor: "bg-orange hover:bg-orange-light"
    },
    digital: {
      title: "Konten Interaktif untuk Kelas Modern",
      subtitle: "Materi pembelajaran digital imersif untuk IFP & Smart Classroom. Visualisasi 3D yang memukau siswa.",
      benefits: ["Visualisasi Kompleks", "Gamifikasi Seru", "Multi-Platform"],
      videoPlaceholder: "bg-blue-900", // Placeholder color
      accent: "text-cyan-400",
      buttonColor: "bg-cyan-600 hover:bg-cyan-500"
    }
  };

  // Scrollytelling Data
  const steps = [
    {
      id: "sop",
      title: "1. SOP & K3",
      desc: "Pelajari prosedur keselamatan kerja (K3) dan pengenalan alat pelindung diri sebelum masuk ke area kerja virtual.",
      icon: ShieldCheck
    },
    {
      id: "praktik",
      title: "2. Praktik Bongkar Pasang",
      desc: "Lakukan bongkar pasang komponen mesin secara detail. Rasakan urutan kerja yang sesuai standar industri.",
      icon: Settings
    },
    {
      id: "diagnostik",
      title: "3. Diagnostik Masalah",
      desc: "Identifikasi kerusakan pada sistem. Gunakan alat ukur virtual untuk menemukan anomali pada mesin.",
      icon: Activity
    },
    {
      id: "evaluasi",
      title: "4. Evaluasi & Skor",
      desc: "Dapatkan penilaian otomatis berdasarkan ketepatan langkah, waktu pengerjaan, dan kepatuhan prosedur.",
      icon: FileText
    }
  ];

  // Handle Scroll for Scrollytelling
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simple intersection observer effect for scrollytelling steps
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.scrolly-step');
      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveScrollStep(index);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* SEO Meta Tags Placeholder */}
      {/* 
        <title>NalarXR - Solusi VR/AR Pendidikan & Pelatihan Vokasi Indonesia</title>
        <meta name="description" content="Platform pembelajaran imersif (VR/AR/MR) untuk SMK, Vokasi, dan Industri. Simulasi praktik aman, hemat biaya, dan sesuai standar industri." />
        <meta name="keywords" content="VR pendidikan, AR edukasi, laboratorium virtual, SMK pusat keunggulan, pelatihan vokasi, media pembelajaran interaktif, metaverse pendidikan, NalarXR" />
      */}

      <Navbar />

      {/* 1. HERO SECTION WITH SPLINE */}
      <section className="relative w-full h-screen bg-black/[0.96] overflow-hidden flex flex-col md:flex-row">
        {/* Left content - Text */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center bg-black/50 backdrop-blur-sm md:bg-transparent">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setHeroMode('mr')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${heroMode === 'mr' ? 'bg-orange border-orange text-white' : 'border-white/20 text-white/70 hover:text-white'}`}
            >
              <Glasses className="w-3 h-3" /> Mixed Reality
            </button>
            <button
              onClick={() => setHeroMode('digital')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border ${heroMode === 'digital' ? 'bg-cyan-600 border-cyan-600 text-white' : 'border-white/20 text-white/70 hover:text-white'}`}
            >
              <Monitor className="w-3 h-3" /> Digital Content
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={heroMode}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-6">
                {heroContent[heroMode].title}
              </h1>
              <p className="mt-4 text-neutral-300 text-lg max-w-lg mb-8">
                {heroContent[heroMode].subtitle}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {heroContent[heroMode].benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="outline" className="text-white border-white/20 bg-white/5 px-3 py-1">
                    <CheckCircle2 className="w-3 h-3 mr-2 text-green-400" /> {benefit}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className={`${heroContent[heroMode].buttonColor} text-white px-8 py-6 text-lg rounded-full`}>
                  Minta Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent">
                  <Play className="mr-2 w-5 h-5" /> Lihat Video
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right content - Spline Scene */}
        <div className="flex-1 relative h-[50vh] md:h-auto w-full">
           <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          {/* Overlay gradient for mobile readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden pointer-events-none" />
        </div>
      </section>

      {/* 1.5. INFINITE SLIDER SECTION */}
      <section className="py-10 bg-black border-y border-white/10 overflow-hidden">
        <InfiniteSlider gap={24} duration={30} durationOnHover={75}>
          {Array.from({ length: 8 }).map((_, i) => (
             <div key={i} className="flex items-center gap-4 px-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">LOGO</span>
                </div>
                <span className="text-white font-bold text-lg tracking-widest">PARTNER {i + 1}</span>
             </div>
          ))}
        </InfiniteSlider>
      </section>

      {/* 1.6. PRODUCT CARDS SECTION */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              <HyperText text="Ekosistem Pendidikan Vokasi" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
            </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Teknologi terintegrasi untuk menciptakan pengalaman belajar yang imersif, interaktif, dan terukur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-24">
            {/* 1. Mixed Reality */}
            <ProductCard 
              title="Mixed Reality (MR)" 
              description="Simulasi praktik nyata dengan menggabungkan objek virtual ke lingkungan fisik. Aman, hemat biaya, dan tanpa risiko kecelakaan kerja."
              image="/images/produk1.png"
              tags={['Immersive', 'Safety', 'Hands-on']}
              actionLabel="Pelajari MR"
              onAction={() => window.location.href = '/nalarxr/produk/mr'}
              className="h-full"
            />
            
            {/* 2. Interaktif Content */}
            <ProductCard 
              title="Interaktif Content" 
              description="Materi pembelajaran digital berbasis 3D dan gamifikasi. Visualisasi komponen mesin yang kompleks menjadi mudah dipahami."
              image="/images/produk2.png"
              tags={['Gamifikasi', 'Visual 3D', 'Engaging']}
              actionLabel="Lihat Konten"
              onAction={() => window.location.href = '/nalarxr/produk/interactive'}
              className="h-full"
            />
            
            {/* 3. Learning Management */}
            <ProductCard 
              title="Learning Management" 
              description="Sistem manajemen pembelajaran (LMS) untuk melacak progres siswa, nilai otomatis, dan analisis kompetensi secara real-time."
              image="/images/produk3.png"
              tags={['Analytics', 'Tracking', 'Cloud']}
              actionLabel="Coba LMS"
              onAction={() => window.location.href = '/nalarxr/produk/lms'}
              className="h-full"
            />
          </div>

        </div>
      </section>

      {/* 1.7. AUDIENCE TABS SECTION */}
      <section className="py-24 bg-slate-950 dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              <HyperText text="Siapa yang Membutuhkan NalarXR?" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
            </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto"></div>
          </div>
          <AudienceTabs />
        </div>
      </section>

      {/* 3. SCROLLYTELLING SECTION */}
      <section className="relative" ref={scrollRef}>
        <BackgroundBeamsWithCollision className="h-auto min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              <HyperText text="Alur Pembelajaran" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
              </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto mb-6"></div>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-foreground/80">Standard Operating Procedure (SOP) & Alur Kompetensi</h3>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Metode NalarXR membimbing siswa langkah demi langkah, memastikan pemahaman konsep sebelum praktik mandiri.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left Column: Scrolling Text */}
              <div className="lg:w-1/2 space-y-24 py-12">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={step.id}
                    className={`scrolly-step transition-all duration-500 p-6 rounded-2xl border ${activeScrollStep === idx ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl border-orange/50 scale-100' : 'bg-transparent border-transparent opacity-50 scale-95'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: activeScrollStep === idx ? 1 : 0.5, x: 0 }}
                    viewport={{ margin: "-20% 0px -20% 0px" }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${activeScrollStep === idx ? 'bg-orange text-white' : 'bg-gray-200 text-gray-500'}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className={`font-heading font-bold text-2xl ${activeScrollStep === idx ? 'text-foreground' : 'text-muted-foreground'}`}>{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Sticky Visual */}
              <div className="lg:w-1/2 hidden lg:block">
                <div className="sticky top-32 h-[500px] bg-navy rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
                  {/* Simulated 3D View */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-64 h-64 mx-auto bg-gradient-to-tr from-orange to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                      <div className="relative z-10">
                        {/* Dynamic Content based on Step */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeScrollStep}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                          >
                            {activeScrollStep === 0 && (
                              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <ShieldCheck className="w-24 h-24 text-green-400 mb-4" />
                                <p className="text-white font-bold text-xl">Safety Check Active</p>
                              </div>
                            )}
                            {activeScrollStep === 1 && (
                              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <Settings className="w-24 h-24 text-orange mb-4 animate-spin-slow" />
                                <p className="text-white font-bold text-xl">Assembly Mode</p>
                              </div>
                            )}
                            {activeScrollStep === 2 && (
                              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <Activity className="w-24 h-24 text-red-400 mb-4 animate-pulse" />
                                <p className="text-white font-bold text-xl">Diagnostic Tools</p>
                              </div>
                            )}
                            {activeScrollStep === 3 && (
                              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                                <div className="text-6xl font-extrabold text-yellow-400 mb-2">95</div>
                                <p className="text-white font-bold text-xl">Score: Excellent</p>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <div className="flex justify-between items-center text-white/80 text-sm">
                      <span>Interactive Module: <strong>Mesin 4 Tak</strong></span>
                      <Badge variant="outline" className="text-xs border-white/30 text-white">v2.1.0</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* 4. ACTIVITY GALLERY - FOCUS CARDS */}
      <section id="gallery-section" className="py-24 bg-slate-950 w-full">
         <div className="container mx-auto px-4 mb-16 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
              <HyperText text="Pengalaman Belajar Interaktif" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
            </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lihat bagaimana siswa terlibat langsung dalam simulasi praktik yang mendalam.
            </p>
         </div>
         <FocusCards cards={galleryCards} />
      </section>

      {/* 5. SOCIAL PROOF */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              <HyperText text="Dipercaya Oleh Institusi Pendidikan & Industri" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
            </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto"></div>
          </div>

          <div className="mt-12 w-full">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      {/* 7. CTA WITH FORM & MAP */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl lg:text-5xl text-white mb-6">
              <HyperText text="Hubungi Kami" containerClassName="py-0 justify-center" framerProps={{ initial: { opacity: 0 }, animate: { opacity: 1 } }} />
            </h2>
            <div className="h-1 w-24 bg-orange rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Siap untuk transformasi digital? Kirim pesan atau kunjungi kantor kami.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Side */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="font-heading font-bold text-2xl text-white mb-6">Kirim Pesan</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nama Lengkap</Label>
                    <Input id="name" placeholder="Nama Anda" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-white">Peran</Label>
                    <select id="role" className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="" className="text-black">Pilih Peran</option>
                      <option value="guru" className="text-black">Guru / Kepsek</option>
                      <option value="dinas" className="text-black">Dinas Pendidikan</option>
                      <option value="industri" className="text-black">Industri / Korporat</option>
                      <option value="lainnya" className="text-black">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="email@contoh.com" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Pesan</Label>
                  <Textarea id="message" placeholder="Ceritakan kebutuhan Anda..." className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </div>

                <Button className="w-full bg-orange hover:bg-orange-light text-white font-bold h-12 text-base">
                  Kirim Pesan
                </Button>
              </form>
            </div>

            {/* Map Side */}
            <div className="space-y-8">
              <div className="h-[400px] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862!2d107.573117!3d-6.903444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                  title="Lokasi Kantor NalarXR Bandung"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs text-black">
                  <p className="font-bold text-sm mb-1">NalarXR HQ</p>
                  <p className="text-xs text-muted-foreground">Jl. Pelajar Pejuang 45 No. 123, Bandung</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                 <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <MapPin className="w-5 h-5 text-orange" />
                    <div className="text-sm">
                       <p className="font-bold">Bandung, Jawa Barat</p>
                       <p className="text-white/60">Head Office</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Mail className="w-5 h-5 text-orange" />
                    <div className="text-sm">
                       <p className="font-bold">info@nalarxr.com</p>
                       <p className="text-white/60">Email Resmi</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NalarXRIndex;
