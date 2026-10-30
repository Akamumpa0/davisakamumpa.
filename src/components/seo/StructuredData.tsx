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
    image: new URL(profileData.avatarUrl, `${siteUrl}/`).toString(),
    sameAs: profileData.socialLinks.map(s => s.url),
    knowsAbout: [
      'Full-Stack Web Development',
      'React',
      'TypeScript',
      'React Native',
      'Mobile Application Development',
      'UI/UX Design',
      'Brand Identity',
      'Design Systems'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mbarara',
      addressCountry: 'Uganda'
    }
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [personSchema, websiteSchema, profilePageSchema]
        })}
      </script>
    </Helmet>
  );
};
