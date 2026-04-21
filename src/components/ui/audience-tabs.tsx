"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, School, GraduationCap, Building2, Briefcase, Shield } from "lucide-react"

interface AudienceTab {
  id: string
  label: string
  icon: React.ElementType
  image: string
  title: string
  description: string
  cta?: string
}

const audiences: AudienceTab[] = [
  {
    id: "sd-sma",
    label: "Sekolah SD-SMA",
    icon: School,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
    title: "Pembelajaran Interaktif untuk Sekolah SD-SMA",
    description: "Bantu siswa memahami konsep abstrak melalui visualisasi 3D yang menarik dan mudah dipahami. Guru dapat menghadirkan pengalaman belajar yang lebih aktif, menyenangkan, dan relevan untuk kelas modern.",
    cta: "Lihat Solusi Sekolah"
  },
  {
    id: "smk",
    label: "SMK / Vokasi",
    icon: School,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
    title: "Solusi Praktik untuk SMK Pusat Keunggulan",
    description: "Tingkatkan kualitas lulusan dengan simulasi praktik industri yang aman dan hemat biaya. Siswa dapat mengulang prosedur kompleks tanpa risiko kerusakan alat atau kecelakaan kerja, mempersiapkan mereka untuk dunia kerja nyata.",
    cta: "Pelajari Program SMK PK"
  },
  {
    id: "politeknik",
    label: "Politeknik / Kampus",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    title: "Riset & Inovasi Perguruan Tinggi",
    description: "Fasilitasi riset mahasiswa dan dosen dengan teknologi terkini. NalarXR memungkinkan visualisasi data kompleks, simulasi eksperimen berbahaya, dan kolaborasi jarak jauh antar institusi pendidikan.",
    cta: "Lihat Solusi Kampus"
  },
  {
    id: "industri",
    label: "Industri",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Efisiensi Onboarding & Training Karyawan",
    description: "Pangkas waktu pelatihan karyawan baru hingga 60%. Dengan modul Mixed Reality, karyawan dapat berlatih mengoperasikan mesin mahal secara virtual sebelum menyentuh alat asli, mengurangi downtime dan risiko error.",
    cta: "Optimalkan Training Karyawan"
  },
  {
    id: "militer",
    label: "Militer",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=2070&auto=format&fit=crop",
    title: "Simulasi Taktis untuk Pelatihan Militer",
    description: "Latihan skenario operasional dengan simulasi imersif yang aman, terukur, dan dapat diulang. Tingkatkan kesiapan personel melalui evaluasi objektif berbasis performa.",
    cta: "Eksplor Solusi Militer"
  },
  {
    id: "lkp",
    label: "Lembaga Pelatihan",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
    title: "Sertifikasi Kompetensi Modern",
    description: "Tawarkan program pelatihan bersertifikat dengan nilai tambah teknologi immersive. Tarik lebih banyak peserta dengan metode pembelajaran yang menarik, interaktif, dan relevan dengan kebutuhan industri 4.0.",
    cta: "Upgrade Kurikulum LKP"
  },
]

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState(audiences[0].id)
  
  const activeContent = audiences.find(a => a.id === activeTab) || audiences[0]

  return (
    <div className="w-full max-w-7xl mx-auto border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-950">
      {/* Tabs Header */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-200 dark:border-gray-800">
        {audiences.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex flex-col items-center justify-center p-6 transition-all duration-300 outline-none group min-h-[140px]",
              activeTab === tab.id 
                ? "bg-orange text-white" 
                : "bg-orange-50/50 dark:bg-gray-900/50 hover:bg-orange-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
            )}
          >
            {/* Circle Icon Container */}
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 shadow-md",
              activeTab === tab.id 
                ? "bg-white text-orange scale-110" 
                : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 group-hover:scale-105"
            )}
            >
              {/* Image Placeholder / Icon */}
              <tab.icon className="w-8 h-8" strokeWidth={1.5} />
            </div>
            
            {/* Label */}
            <span className={cn(
              "text-sm font-bold text-center leading-tight max-w-[120px]",
              activeTab === tab.id ? "text-white" : "text-gray-700 dark:text-gray-300"
            )}>
              {tab.label}
            </span>

            {/* Active Indicator Triangle (Bottom) */}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-orange z-10"></div>
            )}
            
            {/* Vertical Divider (Right) - Hide on last item and active item */}
            <div className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-[1px] bg-gray-300 dark:bg-gray-700",
              activeTab === tab.id ? "hidden" : "block lg:last:hidden"
            )}></div>
          </button>
        ))}
      </div>

      {/* Content Body */}
      <div className="p-8 md:p-12 lg:p-16 min-h-[500px] flex items-center bg-white dark:bg-gray-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row gap-12 items-center w-full"
          >
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={activeContent.image} 
                  alt={activeContent.title}
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Optional Badge */}
                <div className="absolute top-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <activeContent.icon className="w-4 h-4 text-orange" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">{activeContent.label}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                {activeContent.title}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {activeContent.description}
              </p>
              
              <div className="pt-4">
                <button className="inline-flex items-center justify-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold transition-all hover:bg-orange hover:text-white hover:scale-105 hover:shadow-lg group">
                  {activeContent.cta || "Pelajari Lebih Lanjut"}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
