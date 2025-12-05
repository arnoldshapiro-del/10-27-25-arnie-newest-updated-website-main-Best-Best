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
      "telephone": ["+1-513-794-8777", "+1-859-341-7453"],
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
      "telephone": "+1-513-794-8777",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "medicalSpecialty": ["Psychiatry", "Child and Adolescent Psychiatry"]
    },
    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best psychiatrist in Cincinnati for ADHD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Arnold Shapiro is a board-certified psychiatrist in Cincinnati specializing in ADHD treatment for children, adolescents, and adults. With decades of experience and a unique three-part evaluation system, Dr. Shapiro provides comprehensive care at two convenient locations in Cincinnati, OH and Fort Wright, KY."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Shapiro treat children and adolescents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Arnold Shapiro is a board-certified child and adolescent psychiatrist. He treats patients of all ages, from young children to adults, for conditions including ADHD, anxiety, depression, bipolar disorder, OCD, and more."
          }
        },
        {
          "@type": "Question",
          "name": "What conditions does Dr. Shapiro treat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Shapiro treats a wide range of psychiatric conditions including: ADHD (with or without hyperactivity), anxiety disorders, major depression, bipolar disorder, OCD (obsessive-compulsive disorder), PTSD, Tourette syndrome, oppositional defiant disorder (ODD), disruptive mood dysregulation disorder, and other mood disorders."
          }
        },
        {
          "@type": "Question",
          "name": "Where are Dr. Shapiro's offices located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Shapiro has two convenient locations: Cincinnati Office at 8280 Montgomery Road, Suite 304, Cincinnati, OH 45236 (phone: 513-794-8777), and Fort Wright Office at 1717 Dixie Highway, Suite 200, Fort Wright, KY 41011 (phone: 859-341-7453)."
          }
        },
        {
          "@type": "Question",
          "name": "Does Dr. Shapiro provide both therapy and medication?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unlike many psychiatrists who only prescribe medication, Dr. Shapiro's practice provides both therapy and medication management. Research shows patients often respond best to a combination of therapy and medication, and Dr. Shapiro offers both services in one convenient setting."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Dr. Shapiro's practice different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Shapiro uses a unique three-part evaluation system that sets his practice apart from others in the Cincinnati tri-state area. The practice emphasizes patient education, flexible scheduling, same-day response to questions, and a family-like environment. Dr. Shapiro involves patients in every decision about their care."
          }
        },
        {
          "@type": "Question",
          "name": "Is Dr. Shapiro accepting new patients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Dr. Shapiro is accepting new patients at both the Cincinnati and Fort Wright locations. Call (513) 794-8777 for the Cincinnati office or (859) 341-7453 for the Fort Wright office to schedule an appointment."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do in a psychiatric emergency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you're experiencing a psychiatric emergency, call 911 or go to your nearest emergency room immediately. For the national mental health crisis line, call or text 988."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Dr. Arnold Shapiro, MD | Adult & Child Psychiatrist | Cincinnati OH & Northern Kentucky"
        description="Dr. Arnold Shapiro, MD - Board-certified adult and child psychiatrist serving Cincinnati, OH and Northern Kentucky. Expert treatment for ADHD, anxiety, depression, bipolar disorder, OCD. Two convenient locations. Same-day responses. Call (513) 794-8777 or (859) 341-7453."
        path="/"
        schema={schemas}
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
