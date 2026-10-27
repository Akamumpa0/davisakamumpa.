export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'whatsapp' | 'email' | 'dribbble';
  label: string;
  url: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  remoteNotice: string;
  oneLinePitch: string;
  bioParagraphs: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  stats: {
    yearsExperience: number;
    projectsDelivered: number;
    happyClients: number;
    satisfactionRate: number;
  };
  socialLinks: SocialLink[];
  email: string;
  phoneWhatsapp: string;
  avatarUrl: string;
  cvDownloadUrl?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: string;
  priceNote: string;
  deliverables: string[];
  tags: string[];
  icon: 'code' | 'smartphone' | 'palette' | 'layout';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export type ProjectCategory = 'Web' | 'Mobile' | 'Design';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  featured: boolean;
  coverImage: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  client?: string;
  year: string;
  // Detail page specifics
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  screenshots: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Branding' | 'UI/UX' | 'Graphic Design' | 'Mobile Design';
  image: string;
  thumbnail: string;
  aspectRatio: string;
  caption: string;
  year: string;
}

export interface SkillCategory {
  category: 'Frontend' | 'Backend' | 'Mobile' | 'Design' | 'Tools & DevOps';
  skills: {
    name: string;
    level: number; // 1-100
    experienceYears: string;
    highlight?: boolean;
  }[];
}

export interface SoftSkill {
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  techStack: string[];
  logoUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface PostItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  externalUrl?: string;
  publication?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'Services' | 'Pricing' | 'Process' | 'Collaboration';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  projectContext?: string;
}
