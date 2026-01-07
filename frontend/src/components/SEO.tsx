import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
  includeAnalytics?: boolean;
  keywords?: string;
  ogImage?: string;
}

// Comprehensive Global Physician Schema - Dr. Arnold Shapiro
const globalPhysicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://www.arnoldshapiromd.com/#physician",
  "name": "Arnold G. Shapiro, MD",
  "alternateName": ["Arnold Shapiro MD", "Dr. Arnold Shapiro", "Dr. Shapiro"],
  "description": "Board-certified adult and child psychiatrist with over 35 years of experience. Specializing in ADHD, anxiety, depression, bipolar disorder, OCD, and more. Serving Cincinnati, Ohio and Northern Kentucky.",
  "url": "https://www.arnoldshapiromd.com",
  "image": "https://www.arnoldshapiromd.com/doctor-arnold-shapiro.jpg",
  "telephone": "+1-859-341-7453",
  "priceRange": "$$",
  "isAcceptingNewPatients": true,
  
  // Medical Specialties
  "medicalSpecialty": [
    "Psychiatry",
    "Adult Psychiatry", 
    "Child and Adolescent Psychiatry"
  ],
  
  // Comprehensive list of conditions treated
  "knowsAbout": [
    "ADHD",
    "Attention Deficit Hyperactivity Disorder",
    "ADD",
    "Attention Deficit Disorder",
    "Depression",
    "Major Depressive Disorder",
    "MDD",
    "Anxiety",
    "Anxiety Disorders",
    "Generalized Anxiety Disorder",
    "GAD",
    "Bipolar Disorder",
    "Bipolar I",
    "Bipolar II",
    "Manic Depression",
    "OCD",
    "Obsessive-Compulsive Disorder",
    "Obsessive Compulsive Disorder",
    "Panic Disorder",
    "Panic Attacks",
    "Tourette Syndrome",
    "Tourette's Syndrome",
    "Tic Disorders",
    "Insomnia",
    "Sleep Disorders",
    "Autism Spectrum Disorder",
    "ASD",
    "Autism",
    "PTSD",
    "Post-Traumatic Stress Disorder",
    "Social Anxiety",
    "Social Phobia",
    "Mood Disorders",
    "Child Psychiatry",
    "Adolescent Psychiatry",
    "Medication Management",
    "Psychiatric Evaluation"
  ],
  
  // Board Certification
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Board Certification",
      "name": "Board Certified in Psychiatry",
      "recognizedBy": {
        "@type": "Organization",
        "name": "American Board of Psychiatry and Neurology",
        "alternateName": "ABPN"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Medical Degree",
      "name": "Doctor of Medicine (MD)"
    }
  ],
  
  // Available Services
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Psychiatric Evaluation",
      "procedureType": "Diagnostic"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Medication Management",
      "procedureType": "Therapeutic"
    },
    {
      "@type": "MedicalProcedure", 
      "name": "Psychotherapy",
      "procedureType": "Therapeutic"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Telepsychiatry",
      "procedureType": "Therapeutic"
    }
  ],
  
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
  
  // Areas Served
  "areaServed": [
    {
      "@type": "City",
      "name": "Cincinnati",
      "containedInPlace": { "@type": "State", "name": "Ohio" }
    },
    {
      "@type": "City", 
      "name": "Fort Wright",
      "containedInPlace": { "@type": "State", "name": "Kentucky" }
    },
    { "@type": "Place", "name": "Northern Kentucky" },
    { "@type": "Place", "name": "Greater Cincinnati Area" },
    { "@type": "City", "name": "Covington", "containedInPlace": { "@type": "State", "name": "Kentucky" } },
    { "@type": "City", "name": "Florence", "containedInPlace": { "@type": "State", "name": "Kentucky" } },
    { "@type": "City", "name": "Newport", "containedInPlace": { "@type": "State", "name": "Kentucky" } }
  ],
  
  // Location Details with both offices
  "location": [
    {
      "@type": "MedicalClinic",
      "name": "Dr. Arnold Shapiro Psychiatry - Fort Wright Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1717 Dixie Highway, Suite 200",
        "addressLocality": "Fort Wright",
        "addressRegion": "KY",
        "postalCode": "41011",
        "addressCountry": "US"
      },
      "telephone": "+1-859-341-7453",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.062",
        "longitude": "-84.538"
      }
    },
    {
      "@type": "MedicalClinic",
      "name": "Dr. Arnold Shapiro Psychiatry - Cincinnati Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8280 Montgomery Road, Suite 304",
        "addressLocality": "Cincinnati",
        "addressRegion": "OH",
        "postalCode": "45236",
        "addressCountry": "US"
      },
      "telephone": "+1-859-341-7453",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "39.2062",
        "longitude": "-84.3656"
      }
    }
  ]
};

// Comprehensive MedicalClinic Schema with all details
const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://www.arnoldshapiromd.com/#medicalclinic",
  "name": "Arnold Shapiro, MD - Adult and Child Psychiatry",
  "alternateName": "Dr. Arnold Shapiro Psychiatry",
  "description": "Board-certified psychiatry practice specializing in ADHD, anxiety, depression, bipolar disorder, OCD, and other mental health conditions for children, adolescents, and adults.",
  "url": "https://www.arnoldshapiromd.com",
  "telephone": "+1-859-341-7453",
  "priceRange": "$$",
  "isAcceptingNewPatients": true,
  "image": "https://www.arnoldshapiromd.com/doctor-arnold-shapiro.jpg",
  
  // Medical Specialty
  "medicalSpecialty": [
    "Psychiatric",
    "Child and Adolescent Psychiatry"
  ],
  
  // Conditions Treated (MedicalConditions)
  "availableService": [
    {
      "@type": "MedicalTherapy",
      "name": "ADHD Treatment",
      "alternateName": "Attention Deficit Hyperactivity Disorder Treatment",
      "relevantSpecialty": "Psychiatry",
      "howPerformed": "Medication management and behavioral therapy"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Depression Treatment",
      "alternateName": "Major Depressive Disorder Treatment",
      "relevantSpecialty": "Psychiatry",
      "howPerformed": "Medication and psychotherapy"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Anxiety Treatment",
      "alternateName": "Anxiety Disorders Treatment",
      "relevantSpecialty": "Psychiatry"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Generalized Anxiety Disorder Treatment",
      "alternateName": "GAD Treatment",
      "relevantSpecialty": "Psychiatry"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Bipolar Disorder Treatment",
      "relevantSpecialty": "Psychiatry",
      "howPerformed": "Mood stabilizers and therapy"
    },
    {
      "@type": "MedicalTherapy",
      "name": "OCD Treatment",
      "alternateName": "Obsessive-Compulsive Disorder Treatment",
      "relevantSpecialty": "Psychiatry",
      "howPerformed": "Medication and exposure therapy"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Panic Disorder Treatment",
      "relevantSpecialty": "Psychiatry"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Tourette Syndrome Treatment",
      "alternateName": "Tourette's Syndrome Treatment",
      "relevantSpecialty": "Psychiatry"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Insomnia Treatment",
      "alternateName": "Sleep Disorder Treatment",
      "relevantSpecialty": "Psychiatry"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Autism Spectrum Disorder Treatment",
      "alternateName": "ASD Treatment",
      "relevantSpecialty": "Psychiatry"
    }
  ],
  
  // Opening Hours
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
  
  // Two Locations
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
  
  // Geo coordinates for primary location
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.062",
    "longitude": "-84.538"
  },
  
  // Area Served
  "areaServed": [
    { "@type": "City", "name": "Cincinnati" },
    { "@type": "City", "name": "Fort Wright" },
    { "@type": "Place", "name": "Northern Kentucky" },
    { "@type": "Place", "name": "Greater Cincinnati" }
  ],
  
  // Contact Options
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-859-341-7453",
    "contactType": "Appointments",
    "availableLanguage": "English"
  }
};

// MedicalCondition Schemas for each condition treated
const conditionSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "ADHD",
    "alternateName": ["Attention Deficit Hyperactivity Disorder", "ADD", "Attention Deficit Disorder"],
    "description": "A neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity that affects children and adults.",
    "code": { "@type": "MedicalCode", "code": "F90", "codingSystem": "ICD-10" },
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": "ADHD Treatment at Arnold Shapiro MD",
      "drug": { "@type": "Drug", "name": "Stimulant Medications" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Depression",
    "alternateName": ["Major Depressive Disorder", "MDD", "Clinical Depression"],
    "description": "A mood disorder causing persistent feelings of sadness, hopelessness, and loss of interest in activities.",
    "code": { "@type": "MedicalCode", "code": "F32", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Generalized Anxiety Disorder",
    "alternateName": ["GAD", "Anxiety Disorder"],
    "description": "A mental health condition characterized by excessive, persistent worry about everyday situations.",
    "code": { "@type": "MedicalCode", "code": "F41.1", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Bipolar Disorder",
    "alternateName": ["Manic Depression", "Bipolar I", "Bipolar II"],
    "description": "A mental health condition causing extreme mood swings including emotional highs (mania) and lows (depression).",
    "code": { "@type": "MedicalCode", "code": "F31", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "OCD",
    "alternateName": ["Obsessive-Compulsive Disorder", "Obsessive Compulsive Disorder"],
    "description": "A mental health disorder featuring unwanted, intrusive thoughts (obsessions) and repetitive behaviors (compulsions).",
    "code": { "@type": "MedicalCode", "code": "F42", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Panic Disorder",
    "alternateName": ["Panic Attacks", "Panic Anxiety"],
    "description": "An anxiety disorder characterized by recurring, unexpected panic attacks and persistent fear of future attacks.",
    "code": { "@type": "MedicalCode", "code": "F41.0", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Tourette Syndrome",
    "alternateName": ["Tourette's Syndrome", "TS", "Tic Disorder"],
    "description": "A neurological disorder characterized by repetitive, involuntary movements and vocalizations called tics.",
    "code": { "@type": "MedicalCode", "code": "F95.2", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Insomnia",
    "alternateName": ["Sleep Disorder", "Chronic Insomnia"],
    "description": "A sleep disorder characterized by difficulty falling asleep, staying asleep, or getting restful sleep.",
    "code": { "@type": "MedicalCode", "code": "F51.0", "codingSystem": "ICD-10" }
  },
  {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Autism Spectrum Disorder",
    "alternateName": ["ASD", "Autism", "Asperger's Syndrome"],
    "description": "A developmental disorder affecting communication, behavior, and social interaction.",
    "code": { "@type": "MedicalCode", "code": "F84.0", "codingSystem": "ICD-10" }
  }
];

const SEO = ({ 
  title, 
  description, 
  path = '', 
  schema, 
  includeAnalytics = true,
  keywords = "psychiatrist, Cincinnati psychiatrist, Kentucky psychiatrist, ADHD treatment, anxiety treatment, depression treatment, child psychiatrist, adult psychiatrist, Dr. Arnold Shapiro, Fort Wright psychiatrist, mental health",
  ogImage = "https://www.arnoldshapiromd.com/doctor-arnold-shapiro.jpg"
}: SEOProps) => {
  const siteUrl = "https://www.arnoldshapiromd.com";
  const fullUrl = `${siteUrl}${path}`;
  const siteName = "Arnold Shapiro, MD - Adult and Child Psychiatry";

  // Combine global schemas with page-specific schema
  // Include Physician, MedicalClinic, and condition schemas on homepage
  const baseSchemas = path === '/' || path === '' 
    ? [globalPhysicianSchema, medicalClinicSchema, ...conditionSchemas]
    : [globalPhysicianSchema, medicalClinicSchema];
    
  const allSchemas = schema 
    ? (Array.isArray(schema) ? [...baseSchemas, ...schema] : [...baseSchemas, schema])
    : baseSchemas;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dr. Arnold G. Shapiro, MD" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Viewport for Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="US-KY" />
      <meta name="geo.placename" content="Fort Wright, Kentucky" />
      <meta name="geo.position" content="39.062;-84.538" />
      <meta name="ICBM" content="39.062, -84.538" />
      
      {/* Medical/Healthcare specific meta */}
      <meta name="classification" content="Healthcare, Mental Health, Psychiatry" />
      <meta name="category" content="Psychiatry Practice" />

      {/* Google Analytics 4 */}
      {includeAnalytics && (
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-44WMW5WXBW"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44WMW5WXBW');
            `}
          </script>
        </>
      )}

      {/* Schema Markup - All JSON-LD */}
      {allSchemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
