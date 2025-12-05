import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import { FAQSection } from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Arnold G. Shapiro MD - Board Certified Psychiatrist | Cincinnati & Fort Wright"
        description="Compassionate, evidence-based psychiatric care by Dr. Arnold G. Shapiro. Board certified psychiatrist serving Cincinnati, OH and Fort Wright, KY with 35+ years of experience. Same-day response to calls and questions."
        path="/"
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsCarousel />
      <FAQSection />
      <ContactSection />
      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default Index;
