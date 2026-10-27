import { ExperienceItem, EducationItem } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-davies-visual-media",
    role: "Founder & Lead Developer / Designer",
    company: "Davies Visual Media",
    location: "Mbarara, Uganda & Remote",
    period: "2024 - Present",
    logoUrl: "/assets/logos/davies-visual-media-logo.png",
    bullets: [
      "Founded and lead a creative digital agency delivering full-stack web platforms, mobile applications, and comprehensive graphic design solutions.",
      "Design distinct brand identities, media visibility kits, promotional collateral, and high-fidelity Figma UI prototypes for growing businesses.",
      "Create professional digital visual assets and creative artwork using Adobe Photoshop and Adobe Illustrator.",
      "Architect responsive, fast-loading web applications using React, Next.js, TypeScript, and modern CSS frameworks.",
      "Manage end-to-end client engagements from initial consultation and project scoping to production deployment."
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Branding",
      "Media Visibility"
    ]
  },
  {
    id: "exp-craftalo-technologies",
    role: "Co-Founder & Full-Stack Developer",
    company: "Craftalo Technologies",
    location: "Mbarara, Uganda & Remote",
    period: "2024 - Present",
    logoUrl: "/assets/logos/craftalo-logo.png",
    bullets: [
      "Co-founded a forward-thinking tech startup offering full-stack development, mobile app engineering, and graphic design solutions.",
      "Collaborate on technical architecture and cross-platform mobile app development with React Native and Expo.",
      "Design polished graphics, vector assets, and app branding assets using Adobe Photoshop, Adobe Illustrator, and Figma.",
      "Build modular, clean frontend components and integrate secure backend APIs and SQL/PostgreSQL databases.",
      "Drive continuous product iterations and ensure reliable software delivery across client-commissioned solutions."
    ],
    techStack: [
      "React Native",
      "Expo",
      "React",
      "Node.js",
      "PostgreSQL",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "UI/UX",
      "Git"
    ]
  },
  {
    id: "exp-blue-ox-kampus",
    role: "Software Engineering Intern",
    company: "Blue Ox Kampus & Odd Shoes",
    location: "Uganda",
    period: "2023 - 2024",
    bullets: [
      "Contributed as an intern at Blue Ox Kampus, a faith-driven startup developing dedicated digital systems, community management tools, and portals for churches.",
      "Worked with Odd Shoes (operating under the same management), assisting in the rapid engineering and deployment of Minimum Viable Products (MVPs).",
      "Collaborated on responsive UI components, user flow testing, API connections, and agile sprint deliveries under senior developer mentorship."
    ],
    techStack: ["JavaScript", "React", "Web Systems", "MVP Development", "Church Management Software", "Figma"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science (3rd Year Undergraduate)",
    institution: "Mbarara University of Science and Technology (MUST)",
    period: "2023 - 2027 (Expected Graduation: 2027)",
    details: "Currently in my 3rd year of undergraduate study, graduating in 2027. Core coursework includes Software Engineering Principles, Data Structures & Algorithms, Mobile Computing, Database Systems, Computer Networks, and Human-Computer Interaction."
  }
];
