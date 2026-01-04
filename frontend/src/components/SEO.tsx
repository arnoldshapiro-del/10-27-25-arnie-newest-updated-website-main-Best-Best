import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
  includeAnalytics?: boolean;
}

// Global Physician Schema for all pages
const globalPhysicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Arnold Shapiro, MD - Adult and Child Psychiatry",
  "description": "Board-certified psychiatrist specializing in ADHD, anxiety, depression, bipolar disorder, and OCD treatment for adults and children in Cincinnati, Ohio and Northern Kentucky.",
  "url": "https://www.arnoldshapiromd.com",
  "telephone": "+1-859-341-7453",
  "medicalSpecialty": ["Psychiatry", "Child and Adolescent Psychiatry"],
  "availableService": ["ADHD Treatment", "Anxiety Treatment", "Depression Treatment", "Bipolar Disorder Treatment", "OCD Treatment"],
  "priceRange": "$$",
  "location": [
    {
      "@type": "MedicalClinic",
      "name": "Arnold Shapiro, MD - Fort Wright Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1717 Dixie Hwy",
        "addressLocality": "Fort Wright",
        "addressRegion": "KY",
        "postalCode": "41017",
        "addressCountry": "US"
      },
      "telephone": "+1-859-341-7453"
    },
    {
      "@type": "MedicalClinic",
      "name": "Arnold Shapiro, MD - Cincinnati Office",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "8280 Montgomery Rd",
        "addressLocality": "Cincinnati",
        "addressRegion": "OH",
        "postalCode": "45236",
        "addressCountry": "US"
      },
      "telephone": "+1-859-341-7453"
    }
  ]
};

const SEO = ({ title, description, path = '', schema, includeAnalytics = true }: SEOProps) => {
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${path}`;
  const siteName = "Dr. Arnold Shapiro Psychiatry";

  // Combine global schema with page-specific schema
  const allSchemas = schema 
    ? (Array.isArray(schema) ? [globalPhysicianSchema, ...schema] : [globalPhysicianSchema, schema])
    : [globalPhysicianSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Dr. Arnold G. Shapiro, MD" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

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

      {/* Schema Markup - Global + Page-specific */}
      {allSchemas.map((s, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
