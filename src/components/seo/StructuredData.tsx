import React from 'react';
import { Helmet } from 'react-helmet-async';
import { profileData } from '../../data/profile';

export const StructuredData: React.FC = () => {
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://akamumpadavis.tech').replace(/\/+$/, '');

  const personSchema = {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: profileData.name,
    jobTitle: profileData.title,
    description: profileData.oneLinePitch,
    url: `${siteUrl}/`,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/profile.jpg`,
      contentUrl: `${siteUrl}/assets/profile.jpg`,
      width: 800,
      height: 800,
    },
    // Logo used for Google Knowledge Panel & brand recognition
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/logos/davies-visual-media-logo.png`,
      contentUrl: `${siteUrl}/assets/logos/davies-visual-media-logo.png`,
    },
    sameAs: [
      ...profileData.socialLinks.map(s => s.url),
      `${siteUrl}/`
    ],
    knowsAbout: [
      'Full-Stack Web Development',
      'React',
      'TypeScript',
      'React Native',
      'Mobile Application Development',
      'UI/UX Design',
      'Brand Identity',
      'Design Systems',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Figma'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mbarara',
      addressCountry: 'Uganda'
    },
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Davies Visual Media',
        url: `${siteUrl}/`,
        logo: `${siteUrl}/assets/logos/davies-visual-media-logo.png`,
      },
      {
        '@type': 'Organization',
        name: 'Craftalo Technologies',
        logo: `${siteUrl}/assets/logos/craftalo-logo.png`,
      }
    ]
  };

  const websiteSchema = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: `${profileData.name} Portfolio`,
    url: `${siteUrl}/`,
    inLanguage: 'en',
    publisher: { '@id': `${siteUrl}/#person` }
  };

  const profilePageSchema = {
    '@type': 'ProfilePage',
    '@id': `${siteUrl}/#profilepage`,
    url: `${siteUrl}/`,
    name: `${profileData.name} | ${profileData.title}`,
    mainEntity: { '@id': `${siteUrl}/#person` }
  };

  const organizationSchema = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Davies Visual Media',
    url: `${siteUrl}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/logos/davies-visual-media-logo.png`,
      contentUrl: `${siteUrl}/assets/logos/davies-visual-media-logo.png`,
    },
    founder: { '@id': `${siteUrl}/#person` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mbarara',
      addressCountry: 'Uganda'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [personSchema, websiteSchema, profilePageSchema, organizationSchema]
        })}
      </script>
    </Helmet>
  );
};
