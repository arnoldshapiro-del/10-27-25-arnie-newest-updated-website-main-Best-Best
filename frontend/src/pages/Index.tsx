import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EvaluationProcessSection from "@/components/EvaluationProcessSection";
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
  // Comprehensive Schema Markup for Homepage
  const schemas = [
    // Physician Schema
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": `${window.location.origin}/#physician`,
      "name": "Dr. Arnold G. Shapiro, MD",
      "alternateName": "Arnold Shapiro MD",
      "description": "Board-certified adult and child psychiatrist serving Cincinnati, Ohio and Northern Kentucky. Specializing in ADHD, anxiety, depression, bipolar disorder, OCD, and more.",
      "medicalSpecialty": [
        "Psychiatry",
        "Child and Adolescent Psychiatry",
        "Adult Psychiatry"
      ],
      "knowsAbout": [
        "ADHD",
        "Attention Deficit Hyperactivity Disorder",
        "Anxiety",
        "Depression",
        "Bipolar Disorder",
        "OCD",
        "Obsessive Compulsive Disorder",
        "PTSD",
        "Tourette Syndrome",
        "Oppositional Defiant Disorder",
        "Mood Disorders",
        "Child Psychiatry",
        "Adolescent Psychiatry",
        "Medication Management",
        "Psychiatric Evaluation"
      ],
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Psychiatric Evaluation"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Medication Management"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Psychotherapy"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Cincinnati",
          "containedInPlace": {
            "@type": "State",
            "name": "Ohio"
          }
        },
        {
          "@type": "City",
          "name": "Fort Wright",
          "containedInPlace": {
            "@type": "State",
            "name": "Kentucky"
          }
        },
        {
          "@type": "Place",
          "name": "Northern Kentucky"
        },
        {
          "@type": "Place",
          "name": "Greater Cincinnati Area"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "8280 Montgomery Road, Suite 304",
          "addressLocality": "Cincinnati",
          "addressRegion": "OH",
          "postalCode": "45236",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "1717 Dixie Highway, Suite 200",
          "addressLocality": "Fort Wright",
          "addressRegion": "KY",
          "postalCode": "41011",
          "addressCountry": "US"
        }
      ],
      "telephone": ["+1-859-341-7453"],
      "priceRange": "$$",
      "isAcceptingNewPatients": true,
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Board Certification",
        "name": "Board Certified Psychiatrist"
      }
    },
    // Cincinnati Office LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Dr. Arnold Shapiro Psychiatry - Cincinnati",
      "description": "Adult and child psychiatry practice in Cincinnati, Ohio",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8280 Montgomery Road, Suite 304",
        "addressLocality": "Cincinnati",
        "addressRegion": "OH",
        "postalCode": "45236",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.2062",
        "longitude": "-84.3656"
      },
      "telephone": "+1-859-341-7453",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday"],
          "opens": "09:00",
          "closes": "12:00"
        }
      ],
      "medicalSpecialty": ["Psychiatry", "Child and Adolescent Psychiatry"]
    },
    // Fort Wright Office LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Dr. Arnold Shapiro Psychiatry - Fort Wright",
      "description": "Adult and child psychiatry practice in Fort Wright, Kentucky",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1717 Dixie Highway, Suite 200",
        "addressLocality": "Fort Wright",
        "addressRegion": "KY",
        "postalCode": "41011",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.062",
        "longitude": "-84.538"
      },
      "telephone": "+1-859-341-7453",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Friday"],
          "opens": "09:00",
          "closes": "12:00"
        }
      ],
      "medicalSpecialty": ["Psychiatry", "Child and Adolescent Psychiatry"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dr. Arnold Shapiro, MD | Adult & Child Psychiatrist | Cincinnati OH & Northern Kentucky"
        description="Dr. Arnold Shapiro, MD - Board-certified adult and child psychiatrist serving Cincinnati, OH and Northern Kentucky. Expert treatment for ADHD, anxiety, depression, bipolar disorder, OCD. Two convenient locations. Same-day responses. Call (859) 341-7453."
        path="/"
        schema={schemas}
      />
      <Header />
      <HeroSection />
      <EvaluationProcessSection />
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
