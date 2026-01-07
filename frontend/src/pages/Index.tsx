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
  // Homepage-specific schemas (in addition to global schemas from SEO component)
  const homepageSchemas = [
    // WebSite Schema for sitelinks search box
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Arnold Shapiro, MD - Adult and Child Psychiatry",
      "alternateName": "Dr. Arnold Shapiro Psychiatry",
      "url": "https://www.arnoldshapiromd.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.arnoldshapiromd.com/screening?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // BreadcrumbList Schema for homepage
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.arnoldshapiromd.com/"
        }
      ]
    },
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Arnold Shapiro, MD - Adult and Child Psychiatry",
      "url": "https://www.arnoldshapiromd.com",
      "logo": "https://www.arnoldshapiromd.com/doctor-arnold-shapiro.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-859-341-7453",
        "contactType": "Appointments",
        "areaServed": ["US"],
        "availableLanguage": "English"
      },
      "sameAs": []
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dr. Arnold Shapiro, MD | Adult & Child Psychiatrist | Cincinnati & Northern Kentucky"
        description="Board-certified psychiatrist Dr. Arnold Shapiro, MD treats ADHD, anxiety, depression, bipolar disorder, OCD, and more. Serving Cincinnati, OH & Fort Wright, KY. 35+ years experience. Call (859) 341-7453."
        path="/"
        schema={homepageSchemas}
        keywords="psychiatrist Cincinnati, psychiatrist Fort Wright, psychiatrist Northern Kentucky, ADHD doctor, ADHD treatment Cincinnati, anxiety treatment, depression treatment, bipolar disorder treatment, OCD treatment, child psychiatrist Cincinnati, adult psychiatrist, Dr. Arnold Shapiro, mental health Cincinnati"
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ApproachSection />
      <TestimonialsCarousel />
      <ContactSection />
      <FAQSection />
      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default Index;
