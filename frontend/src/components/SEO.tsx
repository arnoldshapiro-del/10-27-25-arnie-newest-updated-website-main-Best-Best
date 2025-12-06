import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  schema?: object | object[];
  includeAnalytics?: boolean;
}

const SEO = ({ title, description, path = '', schema, includeAnalytics = true }: SEOProps) => {
  const siteUrl = window.location.origin;
  const fullUrl = `${siteUrl}${path}`;
  const siteName = "Dr. Arnold Shapiro Psychiatry";

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

      {/* Schema Markup */}
      {schema && (
        Array.isArray(schema) ? (
          schema.map((s, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(s)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEO;
