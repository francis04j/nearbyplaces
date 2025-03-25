import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  name?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = 'website',
  name = 'CloseBy Amenities',
  image = 'https://imagesforcloseby.blob.core.windows.net/closeby/amenities.png'
}) => {
  const siteUrl = 'https://www.amenities-closeby.co.uk/.com';

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{`${title} | ${name}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || siteUrl} />

      {/* Open Graph */}
      <meta property="og:site_name" content={name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#312e81" /> {/* indigo-900 */}
    </Helmet>
  );
};

export default SEO;