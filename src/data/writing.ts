import { PostItem } from '../types';

export const writingData: PostItem[] = [
  {
    id: "post-1",
    title: "Designing Design Systems That Engineers Actually Enjoy Using",
    slug: "design-systems-engineers-enjoy-using",
    date: "January 2025",
    readTime: "6 min read",
    summary: "Why most design systems fail during engineering handoff, and how aligning Figma variables directly with CSS custom properties bridges the architectural chasm. A practical breakdown from real project experience.",
    tags: ["Design Systems", "Figma", "CSS", "Frontend Architecture"],
    publication: "Personal Blog"
  },
  {
    id: "post-2",
    title: "Building EasyPharma: Architecture Decisions Behind an Open-Source Pharmacy POS",
    slug: "easypharma-architecture-decisions",
    date: "October 2025",
    readTime: "8 min read",
    summary: "A deep dive into why I chose Meteor.js for real-time reactivity, how I structured MongoDB collections for inventory, and the lessons learned shipping an open-source POS for pharmacies in developing markets.",
    tags: ["Open Source", "Meteor.js", "MongoDB", "Architecture"],
    publication: "Personal Blog"
  },
  {
    id: "post-3",
    title: "Why Single-Hue Blue Palettes Win User Trust in Modern Software",
    slug: "blue-palettes-user-trust",
    date: "August 2024",
    readTime: "5 min read",
    summary: "An analysis of visual restraint in UI design: how disciplined monochromatic blue scales combined with rich surfaces create immediate authority and reduced cognitive load.",
    tags: ["UI Design", "Color Theory", "Product Strategy"],
    publication: "Personal Blog"
  },
  {
    id: "post-4",
    title: "Idempotency Keys and Payment Safety: Lessons from Building EasyPay",
    slug: "idempotency-payment-safety-easypay",
    date: "September 2025",
    readTime: "7 min read",
    summary: "How I solved the duplicate charge problem in African payment gateway integrations — building AES-256 credential encryption, bcrypt API keys, and retry-safe idempotency middleware into EasyPay.",
    tags: ["Node.js", "Payments", "Security", "TypeScript"],
    publication: "Personal Blog"
  }
];
