import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Smartphone, Palette, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { StructuredData } from '../components/seo/StructuredData';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { SectionHeading } from '../components/common/SectionHeading';
import { Accordion } from '../components/common/Accordion';
import { CTASection } from '../components/layout/CTASection';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  getProfile,
  getServices,
  getFeaturedProjects,
  getTestimonials,
  getHomeFAQs
} from '../services/portfolioService';
import {
  ProfileData,
  ServiceItem,
  ProjectItem,
  TestimonialItem,
  FAQItem
} from '../types';

export const Home: React.FC = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<ProjectItem[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    getProfile().then(setProfile);
    getServices().then(setServices);
    getFeaturedProjects().then(setFeaturedProjects);
    getTestimonials().then(setTestimonials);
    getHomeFAQs().then(setFaqs);
  }, []);

  if (!profile) return null;

  // Orchestrated Hero entrance animation variants (only used in Hero)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.45, ease: 'easeOut' }
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="text-primary" size={28} />;
      case 'smartphone':
        return <Smartphone className="text-primary" size={28} />;
      case 'palette':
        return <Palette className="text-primary" size={28} />;
      default:
        return <Code2 className="text-primary" size={28} />;
    }
  };

  return (
    <>
      <SEOHead
        title={profile.name}
        description={`${profile.title}. ${profile.oneLinePitch}`}
        canonicalPath="/"
      />
      <StructuredData />

      {/* HERO SECTION: Full-width deep blue, visual boldness */}
      <section className="bg-primary-deep text-white pt-16 sm:pt-20 lg:pt-24 pb-20 relative overflow-hidden">
        {/* Subtle geometric background accents */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-32 w-80 h-80 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Availability Badge */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-primary-sky border border-white/15 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.remoteNotice}</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]"
              >
                Engineering software & designing brands that <span className="text-primary-sky">help businesses grow.</span>
              </motion.h1>

              {/* One-Line Pitch */}
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-2xl font-sans"
              >
                {profile.oneLinePitch}
              </motion.p>

              {/* Hero Call to Actions */}
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  to={profile.primaryCtaLink}
                  variant="hero-primary"
                  size="lg"
                  icon={<ArrowUpRight size={18} />}
                >
                  {profile.primaryCtaText}
                </Button>
                <Button
                  to={profile.secondaryCtaLink}
                  variant="hero-secondary"
                  size="lg"
                >
                  {profile.secondaryCtaText}
                </Button>
              </motion.div>

              {/* Hero Credibility Strip */}
              <motion.div
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {profile.stats.yearsExperience}+
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200/80 mt-0.5">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {profile.stats.projectsDelivered}+
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200/80 mt-0.5">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {profile.stats.happyClients}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200/80 mt-0.5">Happy Clients</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: High-Quality Portrait & Trust Card */}
            <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                {/* Decorative border frame */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-primary-sky opacity-30 transform translate-x-3 translate-y-3 -z-10" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 bg-blue-950/60 shadow-2xl">
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    className="w-full h-[420px] object-cover object-center"
                    loading="eager"
                  />
                  {/* Name Plate Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-blue-950/80 backdrop-blur-md px-4 py-3 rounded-xl border border-white/15 shadow-lg">
                    <div className="text-white font-display font-bold text-lg leading-tight">{profile.name}</div>
                    <div className="text-primary-sky text-sm font-semibold mt-0.5">Full Stack Developer</div>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="text-blue-200/80 text-xs font-medium">Graduating 2027 · MUST CS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SHORT ABOUT SECTION */}
      <section className="py-16 sm:py-20 bg-bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block font-sans">
                About The Specialist
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink leading-tight">
                Crafting software where thoughtful design meets production-grade code.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-ink-muted text-base leading-relaxed">
              {profile.bioParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Startup Ventures Showcase */}
              <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-subtle block">
                  Startups & Ventures:
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-12 px-3.5 py-1.5 bg-white rounded-xl border border-border shadow-sm flex items-center">
                    <img
                      src="/assets/logos/craftalo-logo.png"
                      alt="Craftalo Technologies"
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="h-12 px-3.5 py-1.5 bg-white rounded-xl border border-border shadow-sm flex items-center">
                    <img
                      src="/assets/logos/davies-visual-media-logo.png"
                      alt="Davies Visual Media"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:underline"
                >
                  <span>Explore my career journey & education</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 sm:py-20 bg-bg-page border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="What I Do"
              title="Tailored services built for commercial results"
              subtitle="Specialized capabilities designed to help startups and scaling enterprises move faster without technical debt."
              className="mb-0"
            />
            <div className="mt-4 sm:mt-0 shrink-0">
              <Button to="/services" variant="outline" size="sm" icon={<ChevronRight size={16} />}>
                Explore All Services
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map(service => (
              <Card key={service.id} hoverEffect className="flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-tint flex items-center justify-center mb-5 border border-primary/10">
                    {getServiceIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-display font-bold text-ink mb-2">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.slice(0, 4).map(tag => (
                      <Tag key={tag} size="sm">{tag}</Tag>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 focus-visible:outline-none focus-visible:underline"
                  >
                    Learn more <ChevronRight size={14} />
                  </Link>
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-semibold text-primary-deep dark:text-primary-sky hover:text-primary flex items-center gap-1 focus-visible:outline-none focus-visible:underline"
                  >
                    Inquire <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS (3 ITEMS) */}
      <section className="py-16 sm:py-20 bg-bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Featured Work"
              title="Real projects. Real metrics. Real impact."
              subtitle="A selection of recent web applications, mobile platforms, and design systems built for international clients."
              className="mb-0"
            />
            <div className="mt-4 sm:mt-0 shrink-0">
              <Button to="/projects" variant="primary" size="sm" icon={<ChevronRight size={16} />}>
                View All Projects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 3).map(project => (
              <Card key={project.id} hoverEffect padding="none" className="overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <Tag variant="blue">{project.category}</Tag>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-primary font-semibold mb-1">
                      {project.client} • {project.year}
                    </div>
                    <h3 className="text-lg font-display font-bold text-ink mb-2">
                      <Link to={`/projects/${project.slug}`} className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.slice(0, 3).map(t => (
                        <Tag key={t} variant="neutral" size="sm">{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-border/60 mt-2 flex items-center justify-between">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {project.metrics}
                  </span>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:underline"
                  >
                    Case study <ChevronRight size={14} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section className="py-16 sm:py-20 bg-bg-page border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Endorsements"
            title="What founders and engineering leaders say"
            subtitle="Honest feedback from long-term clients and commercial partners."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map(item => (
              <Card key={item.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-ink-muted leading-relaxed italic mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  {item.avatar && (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-border"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <div className="text-sm font-bold text-ink">{item.name}</div>
                    <div className="text-xs text-ink-muted">{item.role}, {item.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOME-PAGE DIRECT FAQ BLOCK */}
      <section className="py-16 sm:py-20 bg-bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quick Answers"
            title="Frequently asked questions"
            subtitle="Straightforward answers about my background, process, capabilities, and availability."
            align="center"
          />

          <Accordion items={faqs} />

          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:underline"
            >
              <span>View full FAQ on pricing, revisions & timelines</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <CTASection />
    </>
  );
};
