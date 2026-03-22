import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeadsetSection from "@/components/HeadsetSection";
import ClassroomControlSection from "@/components/ClassroomControlSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ContentSection from "@/components/ContentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HeadsetSection />
      <ClassroomControlSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <ContentSection />
      <TestimonialsSection />
      <GlobalReachSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
