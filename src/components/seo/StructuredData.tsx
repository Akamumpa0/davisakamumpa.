import React from 'react';
import { Helmet } from 'react-helmet-async';
import { profileData } from '../../data/profile';

export const StructuredData: React.FC = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://myportfolio.dev';

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profileData.name,
    jobTitle: profileData.title,
    url: siteUrl,
    image: profileData.avatarUrl,
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
      addressLocality: profileData.location
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${profileData.name} - Freelance Development & Design`,
    image: profileData.avatarUrl,
    url: siteUrl,
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: profileData.location
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};
