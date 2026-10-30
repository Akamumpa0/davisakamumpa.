import React from 'react';
import { Helmet } from 'react-helmet-async';
import { profileData } from '../../data/profile';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = '/assets/profile.jpg',
  noindex = false
}) => {
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://akamumpadavis.tech').replace(/\/+$/, '');
  const fullCanonicalUrl = new URL(canonicalPath, `${siteUrl}/`).toString();
  const fullOgImage = new URL(ogImage, `${siteUrl}/`).toString();
  const fullTitle = `${title} | ${profileData.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profileData.name} />
      <meta name="robots" content={noindex ? 'noindex, follow' : 'index, follow'} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={`${profileData.name} Portfolio`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
};
