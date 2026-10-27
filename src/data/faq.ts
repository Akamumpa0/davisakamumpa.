import { FAQItem } from '../types';

export const homeFaqData: FAQItem[] = [
  {
    id: "faq-home-who",
    question: "Who are you and what makes your background unique?",
    answer: "I am Akamumpa Davis, an undergraduate computer science student in my third year at Mbarara University of Science and Technology (MUST), with 2.5 years of experience building modern web applications, mobile apps, and brand designs. I blend rigorous academic software engineering foundations with hands-on client freelancing to deliver fast, beautiful, and reliable digital solutions."
  },
  {
    id: "faq-home-what",
    question: "What exact services do you offer?",
    answer: "I specialize in three core domains: 1) Full-stack web development (React, Next.js, Node.js, TypeScript, PostgreSQL), 2) Cross-platform mobile development (React Native for iOS and Android), and 3) UI/UX and graphic design (Figma design systems, brand identities, logos, and marketing design)."
  },
  {
    id: "faq-home-tools",
    question: "What primary tools and technologies do you use daily?",
    answer: "My core development stack is React, TypeScript, Tailwind CSS, Next.js, Node.js, React Native, and PostgreSQL. For design, I rely on Figma for design systems, vector UI, and interactive prototypes, supplemented by Adobe Illustrator and Photoshop for brand assets."
  },
  {
    id: "faq-home-hire",
    question: "How can we hire you and when can you start?",
    answer: "You can book a project by contacting me via the Contact page or reaching out directly on WhatsApp or email. I typically take on 1-2 major projects at a time to ensure dedicated focus. Depending on current schedule, I can usually onboard within 1 to 2 weeks."
  }
];

export const allFaqData: FAQItem[] = [
  ...homeFaqData,
  {
    id: "faq-pricing",
    category: "Pricing",
    question: "How do you structure your pricing?",
    answer: "Pricing is structured transparently based on project scope, technical complexity, deliverables, and milestone deadlines. Whether delivering an MVP, a full-stack web application, a mobile app, or graphic design and media visibility through Davies Visual Media or Craftalo Technologies, I provide a detailed, itemized quote following our initial discovery discussion."
  },
  {
    id: "faq-timelines",
    category: "Services",
    question: "What are your typical project timelines?",
    answer: "A focused landing page or brand identity package takes approximately 1-2 weeks. Full-scale web applications or complete mobile MVPs typically take 4 to 8 weeks depending on scope, API integrations, and testing requirements."
  },
  {
    id: "faq-revisions",
    category: "Process",
    question: "How do revisions and feedback cycles work?",
    answer: "Every milestone includes two comprehensive rounds of revisions. Because we work in weekly sprints with clickable Figma prototypes and live staging previews, surprises are eliminated early and feedback is incorporated continuously throughout the build."
  },
  {
    id: "faq-payments",
    category: "Pricing",
    question: "What payment methods and schedules do you accept?",
    answer: "Standard terms are 50% upfront deposit upon contract signing and 50% upon final acceptance before production deployment. For larger multi-month builds, we divide payments into equal milestone deliverables (e.g., 30/30/40). I accept international bank wire (SWIFT/SEPA), Stripe, Wise, and ACH transfers."
  },
  {
    id: "faq-remote",
    category: "Collaboration",
    question: "How do you handle remote collaboration across different time zones?",
    answer: "I have worked remotely with clients across North America, Europe, Asia, and Australia for 5+ years. I provide daily asynchronous updates via Slack/Loom, maintain transparent GitHub and Figma boards, and schedule weekly sync calls during overlapping business hours."
  },
  {
    id: "faq-handover",
    category: "Process",
    question: "What happens after the project launches? Do I own the code?",
    answer: "You receive 100% intellectual property ownership of all source code, Figma design files, and brand assets upon final payment. Every project includes a 30-day post-launch warranty covering any unforeseen bugs, plus comprehensive documentation on how to maintain and expand the product."
  }
];
