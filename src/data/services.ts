import { ServiceItem, ProcessStep } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development (Full-Stack)",
    shortDescription: "End-to-end web architectures from responsive frontends to scalable backends and secure REST APIs.",
    fullDescription: "Through Davies Visual Media and Craftalo Technologies, I architect and build fast, responsive, and robust web applications with clean component architecture, database schemas, and modern UI frameworks. Designed for performance, mobile accessibility, and real business results.",
    startingPrice: "",
    priceNote: "",
    deliverables: [
      "Custom responsive web interfaces built with React, Next.js, and TypeScript",
      "Backend API architecture with Node.js, Express, Python, or Supabase",
      "Database schema design and management (PostgreSQL, MySQL, SQL)",
      "Authentication systems, contact integration, and admin dashboards",
      "High Lighthouse performance scores, mobile responsiveness, and technical SEO",
      "Continuous deployment setup on Vercel, Netlify, or custom cloud hosts"
    ],
    tags: ["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    icon: "code"
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile App Development",
    shortDescription: "Cross-platform Android and iOS applications with smooth performance and intuitive touch UX.",
    fullDescription: "From interactive prototypes to functional releases, I engineer cross-platform mobile apps using React Native and Expo with offline-friendly architectures, push notifications, and responsive touch gestures.",
    startingPrice: "",
    priceNote: "",
    deliverables: [
      "Single codebase for Android and iOS using React Native and Expo",
      "Smooth UI animations, clean navigation, and gesture handling",
      "Offline caching and realtime database synchronization",
      "Integration with device cameras, GPS, and push notifications",
      "App testing, responsive screen scaling, and release preparation"
    ],
    tags: ["React Native", "Expo", "Android", "iOS", "TypeScript", "Mobile UI"],
    icon: "smartphone"
  },
  {
    id: "graphic-ui-design",
    slug: "graphic-ui-design",
    title: "Graphic Design & Brand Visibility",
    shortDescription: "Complete brand identities, vector logos, social media graphics, media visibility kits, and UI design systems.",
    fullDescription: "Under Davies Visual Media, I deliver high-impact visual design solutions that establish instant recognition and credibility. From memorable logos and promotional media to Figma wireframes and digital design kits, everything is crafted with meticulous typography and color harmony.",
    startingPrice: "",
    priceNote: "",
    deliverables: [
      "Distinctive logo marks, color palettes, and typography guidelines",
      "Complete Figma UI wireframes, design systems, and clickable prototypes",
      "Promotional flyers, social media banners, and digital marketing graphics",
      "Brand visibility materials and media presentation kits",
      "Ready-to-use vector assets (SVG, PNG, PDF) prepared for print and web"
    ],
    tags: ["Figma", "Branding", "Logo Design", "Adobe Photoshop", "Adobe Illustrator", "Media Visibility"],
    icon: "palette"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Inquiry",
    description: "We discuss your project goals, desired features, timeline expectations, and technical requirements.",
    deliverable: "Project scope outline and feasibility roadmap."
  },
  {
    step: "02",
    title: "Proposal & Architecture",
    description: "I provide a clear breakdown of milestones, recommended technologies, and an agreed-upon delivery schedule.",
    deliverable: "Detailed project proposal and milestone plan."
  },
  {
    step: "03",
    title: "Design & Development",
    description: "We build in iterative milestones with regular progress updates, interactive Figma mockups, and live testing previews.",
    deliverable: "Working staging environment and iterative design previews."
  },
  {
    step: "04",
    title: "Launch & Handover",
    description: "We deploy the application or deliver final design assets with full source code ownership and post-launch support.",
    deliverable: "Complete source repository, assets, and launch assistance."
  }
];
