import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    tempId: 0,
    testimonial: "Penggunaan NalarXR di jurusan Otomotif sangat membantu siswa memahami bagian mesin yang sulit dilihat langsung. Nilai uji kompetensi meningkat signifikan.",
    by: "Bpk. Haryanto, Kepala Program Keahlian SMK Negeri",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "Efisiensi biaya bahan praktik terasa sekali. Siswa jadi lebih berani mencoba karena tidak takut alat rusak. Sangat worth it untuk investasi jangka panjang.",
    by: "Ibu Sarah, Direktur LPK Vokasi",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Modul safety training K3 NalarXR membuat onboarding karyawan baru kami 40% lebih cepat dan jauh lebih aman.",
    by: "Bpk. Rudi, Manager HRD Manufaktur",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "Belajar mesin jadi seru banget! Bisa bongkar pasang berkali-kali sampai paham tanpa dimarahin guru kalau salah.",
    by: "Adit, Siswa SMK Jurusan TKR",
    imgSrc: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "Fitur analytics-nya sangat detail. Saya bisa memantau progress tiap siswa secara real-time dari dashboard.",
    by: "Ibu Ratna, Guru Produktif",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "Solusi tepat untuk pemerataan kualitas pendidikan vokasi di daerah. Tidak perlu beli alat berat yang mahal.",
    by: "Bpk. Wijaya, Dinas Pendidikan",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (index: number) => void;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  index
}) => {
  const isActive = position === 0;
  
  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(index)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-8 rounded-2xl border transition-all duration-500 ease-in-out w-[300px] md:w-[450px] flex flex-col items-center justify-center text-center",
        isActive 
          ? "z-30 bg-orange text-white border-orange shadow-2xl scale-110" 
          : "z-10 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-orange/50 shadow-lg opacity-60 hover:opacity-100"
      )}
      animate={{
        x: `calc(-50% + ${position * 220}px)`,
        y: `calc(-50% + ${isActive ? 0 : position % 2 === 0 ? 20 : -20}px)`,
        rotate: isActive ? 0 : position * 5,
        scale: isActive ? 1.1 : 0.9 - Math.abs(position) * 0.1,
        zIndex: 30 - Math.abs(position),
        opacity: Math.abs(position) > 2 ? 0 : isActive ? 1 : 0.6
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by}
        crossOrigin="anonymous"
        className={cn(
          "mb-6 h-20 w-20 rounded-full object-cover border-4",
          isActive ? "border-white/30" : "border-gray-200 dark:border-gray-700"
        )}
      />
      <h3 className={cn(
        "text-lg md:text-xl font-medium mb-4 leading-relaxed",
        isActive ? "text-white" : "text-gray-900 dark:text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "text-sm font-bold uppercase tracking-wider",
        isActive ? "text-white/80" : "text-gray-500 dark:text-gray-400"
      )}>
        — {testimonial.by}
      </p>
    </motion.div>
  );
};

export const StaggerTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMove = (index: number) => {
    setActiveIndex(index);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      {/* Cards */}
      <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center perspective-1000">
        {testimonials.map((testimonial, index) => {
          // Calculate relative position to active index
          let position = index - activeIndex;
          
          // Handle wrapping for infinite loop effect visually
          if (position > testimonials.length / 2) position -= testimonials.length;
          if (position < -testimonials.length / 2) position += testimonials.length;

          // Only render visible cards
          if (Math.abs(position) > 2) return null;

          return (
            <TestimonialCard
              key={testimonial.tempId}
              testimonial={testimonial}
              handleMove={() => handleMove(index)}
              position={position}
              index={index}
            />
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-40">
        <button
          onClick={prevTestimonial}
          className="p-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:bg-orange hover:text-white hover:border-orange transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-4 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-600 dark:text-gray-300 hover:bg-orange hover:text-white hover:border-orange transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
