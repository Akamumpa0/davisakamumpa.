import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "easypay-api",
    slug: "easypay-api",
    title: "EasyPay - Unified Payment Orchestration API",
    category: "Web",
    shortDescription: "A provider-agnostic payment API that unifies Paystack, Flutterwave, and more behind a single interface - with built-in failover, idempotency, and AES-256 credential encryption.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Zod", "Vitest"],
    githubUrl: "https://github.com/Akamumpa0/EasyPay",
    metrics: "Multi-provider failover, zero duplicate charges via idempotency keys",
    year: "2025",
    problem: "Businesses integrating multiple African payment gateways face vendor lock-in, duplicate charge risks during network retries, and the complexity of managing separate provider credentials and webhook flows securely.",
    approach: "Built a unified orchestration layer on Node.js and TypeScript that abstracts provider-specific SDKs behind a single REST API. Implemented dynamic routing with automatic failover, bcrypt-hashed API keys, AES-256 encrypted provider credentials, and idempotency middleware to make retries safe. Webhooks are verified by signature and deduplicated before processing.",
    result: "A production-ready API that lets any business swap or add payment providers without changing their integration code. Fully covered by Vitest, supports tier-based rate limiting, and shuts down gracefully under load.",
    techStack: ["Node.js", "Express", "TypeScript", "Prisma ORM", "Neon (PostgreSQL)", "Zod", "Pino", "Vitest", "AES-256", "bcrypt"],
    screenshots: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "easypharma-pos",
    slug: "easypharma-pos",
    title: "EasyPharma - Open-Source Pharmacy POS System",
    category: "Web",
    shortDescription: "A free, open-source web-based point-of-sale and inventory management system built for pharmacies - customizable, community-driven, and designed to raise the standard of pharmacy operations globally.",
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    tags: ["Meteor", "JavaScript", "MongoDB", "Node.js", "Open Source"],
    githubUrl: "https://github.com/Akamumpa0/easypharma",
    year: "2025",
    problem: "Most pharmacy management tools are expensive, rigid, and inaccessible to small or independent pharmacies in developing markets - leaving staff to manage stock and sales manually.",
    approach: "Built on the Meteor framework for real-time reactivity, with a NoSQL-backed collection system for inventory and purchases. Structured around a clear client/server separation, with route-based admin provisioning and configurable settings to support diverse pharmacy setups.",
    result: "A fully functional, self-hostable POS system that any pharmacy can deploy and customize. Driven by an open-source philosophy to build a global community around accessible pharmacy tooling.",
    techStack: ["Meteor", "JavaScript", "MongoDB", "Node.js"],
    screenshots: [
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "flare-media-sponsor-flier",
    slug: "flare-media-sponsor-flier",
    title: "Flare Media x SC Ensayi - Sponsorship Announcement Flier",
    category: "Design",
    shortDescription: "A bold sponsorship announcement flier designed for Flare Media, declaring their official partnership with SC Ensayi for the Termites League Season 6.",
    featured: true,
    coverImage: "/assets/flier-flare-media-sponsor.png",
    tags: ["Graphic Design", "Flier Design", "Adobe Photoshop", "Branding", "Sports"],
    year: "2026",
    problem: "The client needed a professional, eye-catching flier to publicly announce a new sponsorship deal in a way that reflected both brands clearly and commanded attention on social media.",
    approach: "Used a deep navy and gold color palette to convey prestige and authority. Balanced both brand logos with bold typographic hierarchy and a handshake imagery to visually reinforce the partnership theme.",
    result: "A clean, print-and-digital-ready flier that effectively communicated the partnership announcement across social media platforms.",
    techStack: ["Adobe Photoshop", "Adobe Illustrator"],
    screenshots: [
      "/assets/flier-flare-media-sponsor.png"
    ]
  },
  {
    id: "kizito-swearing-in-flier",
    slug: "kizito-swearing-in-flier",
    title: "Hon. Kizito Abasi - Swearing-In Ceremony Flier",
    category: "Design",
    shortDescription: "An official event flier designed for the swearing-in ceremony of Hon. Kizito Abasi as LC5 Chairman of Lwengo District, clearly communicating the date, venue, and significance of the occasion.",
    featured: true,
    coverImage: "/assets/flier-kizito-swearing-in.jpg",
    tags: ["Graphic Design", "Flier Design", "Adobe Photoshop", "Political", "Event"],
    year: "2026",
    problem: "The client needed a formal yet visually striking flier to announce a high-profile swearing-in ceremony to the public and media.",
    approach: "Designed with a red, white, and blue official color scheme to reinforce political authority. Incorporated circular portrait frames for the two key figures, with clean typographic layout for event details.",
    result: "A professional event announcement flier that communicated ceremony details with clarity and gravitas, suited for both print distribution and digital sharing.",
    techStack: ["Adobe Photoshop", "Adobe Illustrator"],
    screenshots: [
      "/assets/flier-kizito-swearing-in.jpg"
    ]
  },
  {
    id: "edgar-mp-campaign-flier",
    slug: "edgar-mp-campaign-flier",
    title: "Muhanguzi Edgar - Member of Parliament Campaign Flier",
    category: "Design",
    shortDescription: "A clean and impactful campaign flier for Muhanguzi Edgar (Clinton), candidate for Member of Parliament, Bushenyi Ishaka Municipality, for the 2031-2036 term.",
    featured: true,
    coverImage: "/assets/flier-edgar-mp.png",
    tags: ["Graphic Design", "Flier Design", "Adobe Photoshop", "Political", "Campaign"],
    year: "2026",
    problem: "The candidate needed a striking campaign flier that would stand out, build name recognition, and convey credibility to voters across the municipality.",
    approach: "Used a bold purple gradient background with large, dominant typography to make the candidate's name immediately recognizable. Incorporated the Uganda coat of arms and a clean portrait cutout to give the design an official, trustworthy feel.",
    result: "A bold, memorable campaign flier ready for large-format printing and social media distribution, designed to maximize visual impact and voter recall.",
    techStack: ["Adobe Photoshop", "Adobe Illustrator"],
    screenshots: [
      "/assets/flier-edgar-mp.png"
    ]
  }
];