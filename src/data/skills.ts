import { SkillCategory, SoftSkill } from '../types';

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 92, experienceYears: "2.5 yrs", highlight: true },
      { name: "TypeScript / JavaScript (ESNext)", level: 90, experienceYears: "2.5 yrs", highlight: true },
      { name: "Tailwind CSS & Modern Responsive CSS", level: 95, experienceYears: "2.5 yrs", highlight: true },
      { name: "State Management (Zustand, Context API)", level: 86, experienceYears: "2 yrs" },
      { name: "Web Animations & Framer Motion", level: 84, experienceYears: "1.5 yrs" },
      { name: "Web Performance & Responsive UX", level: 88, experienceYears: "2 yrs" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js & Express REST APIs", level: 85, experienceYears: "2 yrs", highlight: true },
      { name: "PostgreSQL & SQL Databases", level: 82, experienceYears: "2 yrs", highlight: true },
      { name: "Supabase & Firebase Integration", level: 84, experienceYears: "2 yrs" },
      { name: "Authentication & Security (JWT, OAuth)", level: 80, experienceYears: "1.5 yrs" },
      { name: "API Integration & Webhooks", level: 85, experienceYears: "2 yrs" }
    ]
  },
  {
    category: "Mobile",
    skills: [
      { name: "React Native & Expo Ecosystem", level: 86, experienceYears: "2 yrs", highlight: true },
      { name: "Cross-Platform Android & iOS UIs", level: 84, experienceYears: "2 yrs" },
      { name: "Offline Data Storage & Mobile Navigation", level: 82, experienceYears: "1.5 yrs" }
    ]
  },
  {
    category: "Design",
    skills: [
      { name: "Figma (Wireframes, Auto-layout, Prototypes)", level: 92, experienceYears: "2.5 yrs", highlight: true },
      { name: "Adobe Photoshop (Raster Graphics & Photo Editing)", level: 90, experienceYears: "2.5 yrs", highlight: true },
      { name: "Adobe Illustrator (Vector Art & Logo Design)", level: 88, experienceYears: "2.5 yrs", highlight: true },
      { name: "Brand Identity, Typography & Logo Craft", level: 90, experienceYears: "2.5 yrs", highlight: true },
      { name: "UI/UX Design Systems & Styleguides", level: 88, experienceYears: "2 yrs" },
      { name: "Graphic Design & Social Media Visibility", level: 90, experienceYears: "2.5 yrs" }
    ]
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub Version Control", level: 90, experienceYears: "2.5 yrs" },
      { name: "Vite, npm & Frontend Tooling", level: 92, experienceYears: "2.5 yrs" },
      { name: "Vercel & Netlify Deployment", level: 88, experienceYears: "2 yrs" }
    ]
  }
];

export const softSkillsData: SoftSkill[] = [
  {
    title: "Fast Learner & Curious Problem Solver",
    description: "Deep academic computer science foundation at MUST paired with the agility to rapidly master emerging frameworks, APIs, and design paradigms."
  },
  {
    title: "Proactive Communication",
    description: "Clear, prompt updates throughout every project milestone. No guesswork for clients regarding timelines or progress."
  },
  {
    title: "Dual Engineering & Design Competency",
    description: "Able to craft attractive UI layouts in Figma and immediately translate them into pixel-perfect, clean, maintainable code."
  },
  {
    title: "Disciplined Reliability",
    description: "Commitment to deadlines, clean code standards, and rigorous self-testing before delivering deliverables to clients."
  }
];
