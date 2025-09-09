
import HeroSection from "@/components/HeroSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ServicesSection from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import ProcessSection from "@/components/ProcessSection";
import CybersecuritySection from "@/components/CybersecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhyWorkWithUs />
      <ServicesSection />
      <FounderSection />
      <ProcessSection />
      <CybersecuritySection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
