import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import Header from "@/components/Header";
import EmergencyDisclaimer from "@/components/EmergencyDisclaimer";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const achievements = [
    { icon: Award, title: "Board Certified", desc: "American Board of Psychiatry" },
    { icon: Users, title: "35+ Years", desc: "Clinical Experience" },
    { icon: Clock, title: "24/7 Support", desc: "Crisis Intervention" },
    { icon: Heart, title: "Compassionate Care", desc: "Patient-Centered Approach" }
  ];

  // Comprehensive Physician Schema for About Page
  const aboutPageSchemas = [
    // Detailed IndividualPhysician Schema
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://www.arnoldshapiromd.com/about#physician",
      "name": "Arnold G. Shapiro, MD",
      "givenName": "Arnold",
      "familyName": "Shapiro",
      "honorificPrefix": "Dr.",
      "honorificSuffix": "MD",
      "jobTitle": "Board-Certified Psychiatrist",
      "description": "Dr. Arnold G. Shapiro is a board-certified psychiatrist with over 35 years of experience specializing in child, adolescent, and adult psychiatry. He is known for his compassionate, thorough three-part evaluation system and personalized treatment approach.",
      "url": "https://www.arnoldshapiromd.com/about",
      "image": "https://www.arnoldshapiromd.com/doctor-arnold-shapiro.jpg",
      "telephone": "+1-859-341-7453",
      
      // Medical Specialties
      "medicalSpecialty": [
        "Psychiatry",
        "Adult Psychiatry",
        "Child and Adolescent Psychiatry"
      ],
      
      // NPI Number placeholder - Update with actual NPI
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "NPI",
        "value": "[NPI_NUMBER_PLACEHOLDER]"
      },
      
      // Board Certifications
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Board Certification",
          "name": "Board Certified in Psychiatry",
          "recognizedBy": {
            "@type": "Organization",
            "name": "American Board of Psychiatry and Neurology",
            "alternateName": "ABPN",
            "url": "https://www.abpn.com"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Medical Degree",
          "name": "Doctor of Medicine (MD)",
          "educationalLevel": "Doctoral"
        }
      ],
      
      // Comprehensive conditions treated
      "knowsAbout": [
        "ADHD (Attention Deficit Hyperactivity Disorder)",
        "Depression (Major Depressive Disorder)",
        "Anxiety Disorders",
        "Generalized Anxiety Disorder (GAD)",
        "Bipolar Disorder",
        "OCD (Obsessive-Compulsive Disorder)",
        "Panic Disorder",
        "Tourette Syndrome",
        "Insomnia",
        "Autism Spectrum Disorder (ASD)",
        "PTSD (Post-Traumatic Stress Disorder)",
        "Social Anxiety Disorder",
        "Mood Disorders",
        "Oppositional Defiant Disorder",
        "Medication Management",
        "Psychiatric Evaluation"
      ],
      
      // Services Offered
      "availableService": [
        {
          "@type": "MedicalProcedure",
          "name": "Comprehensive Psychiatric Evaluation",
          "description": "Three-part evaluation system for thorough diagnosis"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Medication Management"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Individual Therapy"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Family Therapy"
        },
        {
          "@type": "MedicalProcedure",
          "name": "Telepsychiatry"
        }
      ],
      
      // Practice Details
      "isAcceptingNewPatients": true,
      "priceRange": "$$",
      
      // Two Office Locations
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "1717 Dixie Highway, Suite 200",
          "addressLocality": "Fort Wright",
          "addressRegion": "KY",
          "postalCode": "41011",
          "addressCountry": "US"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "8280 Montgomery Road, Suite 304",
          "addressLocality": "Cincinnati",
          "addressRegion": "OH",
          "postalCode": "45236",
          "addressCountry": "US"
        }
      ],
      
      // Work Location
      "workLocation": [
        {
          "@type": "MedicalClinic",
          "name": "Dr. Arnold Shapiro Psychiatry - Fort Wright",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1717 Dixie Highway, Suite 200",
            "addressLocality": "Fort Wright",
            "addressRegion": "KY",
            "postalCode": "41011"
          }
        },
        {
          "@type": "MedicalClinic",
          "name": "Dr. Arnold Shapiro Psychiatry - Cincinnati",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8280 Montgomery Road, Suite 304",
            "addressLocality": "Cincinnati",
            "addressRegion": "OH",
            "postalCode": "45236"
          }
        }
      ]
    },
    // Breadcrumb for About page
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.arnoldshapiromd.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Dr. Shapiro",
          "item": "https://www.arnoldshapiromd.com/about"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Dr. Arnold Shapiro, MD | Board-Certified Psychiatrist | Cincinnati & NKY"
        description="Meet Dr. Arnold Shapiro, MD - board-certified psychiatrist with 35+ years experience treating ADHD, anxiety, depression, bipolar disorder. Unique three-part evaluation system. Cincinnati & Fort Wright offices."
        path="/about"
        schema={aboutPageSchemas}
        keywords="Dr. Arnold Shapiro, Arnold Shapiro MD, board certified psychiatrist, psychiatrist Cincinnati, psychiatrist Fort Wright, child psychiatrist, adult psychiatrist, ADHD specialist, anxiety specialist, depression treatment"
      />
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-base">About Our Practice</Badge>
          <h1 className="text-4xl font-bold mb-6">Arnold G. Shapiro MD</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated to providing compassionate, evidence-based psychiatric care 
            to help you achieve mental wellness and live your best life.
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Doctor Profile Section */}
        <div className="mb-16">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Meet Arnold G. Shapiro MD</h2>
            <p className="text-muted-foreground leading-relaxed text-center">
              Dr. Arnold G. Shapiro is a board-certified psychiatrist with extensive experience 
              in treating a wide range of mental health conditions. He is committed to providing 
              compassionate, evidence-based psychiatric care to help patients achieve mental wellness.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Dr. Shapiro specializes in comprehensive psychiatric evaluation and treatment, 
              working with patients to develop personalized care plans that address their unique 
              needs and circumstances.
            </p>
            <div className="space-y-2 text-center">
              <p className="font-semibold"><strong>Practice Information:</strong></p>
              <ul className="text-muted-foreground space-y-1">
                <li><strong>• Board Certified Psychiatrist</strong></li>
                <li><strong>• Comprehensive Psychiatric Evaluation</strong></li>
                <li><strong>• Personalized Treatment Plans</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Doctor Image - Large and Centered */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-md md:max-w-lg">
            <img 
              src="/doctor-arnold-shapiro.jpg" 
              alt="Dr. Arnold G. Shapiro, MD - Board-certified child and adult psychiatrist serving Cincinnati and Northern Kentucky" 
              className="w-full h-auto object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Section */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Philosophy</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p>
                Mental health is just as important as physical health. Every individual deserves 
                access to quality psychiatric care that respects their unique circumstances, 
                cultural background, and personal goals.
              </p>
              <p>
                We believe in the power of the therapeutic relationship and work collaboratively 
                with our patients to develop treatment plans that are both effective and sustainable. 
                Our approach integrates the latest research with time-tested therapeutic techniques.
              </p>
              <p>
                Recovery is possible, and hope is always within reach. We're here to support 
                you every step of the way on your journey to mental wellness.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <EmergencyDisclaimer />
      <Footer />
    </div>
  );
};

export default About;
