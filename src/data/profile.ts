import { ProfileData } from '../types';

export const profileData: ProfileData = {
  // Full Name
  name: "Akamumpa Davis",
  // Primary professional title
  title: "Full-Stack Developer, Mobile Specialist & UI Designer",
  // Location and university
  location: "Mbarara, Uganda",
  remoteNotice: "Founder @ Davies Visual Media • Co-Founder @ Craftalo Tech • MUST CS Undergrad",
  // One-line pitch
  oneLinePitch: "I build responsive websites, mobile apps, and visual brands that help modern businesses scale.",
  bioParagraphs: [
    "I am an undergraduate student in my third year pursuing a Bachelor of Science in Computer Science at Mbarara University of Science and Technology (MUST), graduating in 2027. With 2.5 years of practical software engineering and design experience, I am the founder of Davies Visual Media and co-founder of Craftalo Technologies.",
    "Previously, I interned at Blue Ox Kampus—a faith-driven startup building dedicated management systems for churches—as well as its sister venture Odd Shoes, which specializes in rapid MVP product development.",
    "Across all my ventures and client work, I deliver end-to-end full-stack web platforms, cross-platform iOS/Android mobile apps, comprehensive graphic design solutions, and strategic media visibility tailored for ambitious founders and organizations."
  ],
  primaryCtaText: "Hire Me",
  primaryCtaLink: "/contact",
  secondaryCtaText: "See My Work",
  secondaryCtaLink: "/projects",
  stats: {
    yearsExperience: 2.5,
    projectsDelivered: 18,
    happyClients: 14,
    satisfactionRate: 100,
  },
  socialLinks: [
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akamumpa-davis-949b98416'
    },
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/Akamumpa0'
    },
    {
      platform: 'whatsapp',
      label: 'WhatsApp',
      url: 'https://wa.me/256774793804'
    }
  ],
  // Professional email address
  email: "akamumpadavis21@gmail.com",
  // Contact phone / WhatsApp display number
  phoneWhatsapp: "+256 774 793 804",
  // Profile portrait (placeholder until a real photo is provided)
  avatarUrl: "/assets/profile.jpg",
  // CV download link
  cvDownloadUrl: "/cv.pdf"
};
