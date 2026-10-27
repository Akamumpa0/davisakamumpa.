import React, { useEffect, useState } from 'react';
import { Check, ArrowUpRight, MessageCircle, Code2, Smartphone, Palette } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/layout/CTASection';
import { getServices, getProcessSteps, getTestimonials } from '../services/portfolioService';
import { ServiceItem, ProcessStep, TestimonialItem } from '../types';

export const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [steps, setSteps] = useState<ProcessStep[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  useEffect(() => {
    getServices().then(setServices);
    getProcessSteps().then(setSteps);
    getTestimonials().then(setTestimonials);
  }, []);

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 size={32} className="text-primary" />;
      case 'smartphone':
        return <Smartphone size={32} className="text-primary" />;
      case 'palette':
        return <Palette size={32} className="text-primary" />;
      default:
        return <Code2 size={32} className="text-primary" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Services & Pricing"
        description="Comprehensive web development, mobile app engineering, and brand UI/UX design services tailored for growing businesses and startups."
        canonicalPath="/services"
      />

      <PageContainer>
        {/* Page Header */}
        <SectionHeading
          eyebrow="Specialized Services"
          title="High-performance digital products engineered from design to deployment"
          subtitle="Direct senior-level execution with no agency overhead. Reach out with your project brief and I'll respond with a tailored proposal."
        />

        {/* 3 Core Services Cards */}
        <div className="space-y-10 mb-20">
          {services.map((service, index) => (
            <Card
              key={service.id}
              padding="lg"
              className="border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Icon & Description */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary-tint flex items-center justify-center border border-primary/20 shrink-0">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono">
                        Service 0{index + 1}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-ink">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-ink-muted text-base leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3 font-sans">
                    What's Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-muted">
                        <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map(t => (
                      <Tag key={t} variant="blue" size="sm">{t}</Tag>
                    ))}
                  </div>
                </div>

                {/* Right: CTA Panel */}
                <div className="lg:col-span-5 bg-bg-elevated p-6 sm:p-8 rounded-xl border border-border flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-2">
                      Ready to Start?
                    </span>
                    <h4 className="text-xl font-display font-bold text-ink mb-3">
                      Let's discuss your project
                    </h4>
                    <p className="text-sm text-ink-muted leading-relaxed mb-6">
                      Send me a message with your idea, requirements, and timeline. I'll get back to you promptly with a tailored proposal.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <Button
                      to={`/contact?service=${encodeURIComponent(service.title)}`}
                      variant="primary"
                      className="w-full justify-center"
                      icon={<ArrowUpRight size={16} />}
                    >
                      Inquire About This Service
                    </Button>
                    <Button
                      to="/contact?quote=custom"
                      variant="outline"
                      className="w-full justify-center"
                      icon={<MessageCircle size={16} />}
                    >
                      Request a Custom Quote
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* HOW I WORK SECTION (4 STEPS) */}
        <div className="mb-20 pt-8 border-t border-border">
          <SectionHeading
            eyebrow="Proven Methodology"
            title="How I work: 4 steps to launch"
            subtitle="A transparent, collaborative workflow designed to ensure complete alignment from discovery to warranty."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(step => (
              <Card key={step.step} className="flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-display font-extrabold text-primary-sky/80 mb-3 block">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-display font-bold text-ink mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-border text-xs text-primary font-medium">
                  <span className="text-ink-subtle block text-[11px] uppercase tracking-wider">Deliverable:</span>
                  {step.deliverable}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* TESTIMONIALS BLOCK */}
        <div className="pt-8 border-t border-border">
          <SectionHeading
            eyebrow="Client Validation"
            title="Results from past partnerships"
            subtitle="Read how dedicated attention to detail drove quantifiable outcomes for our clients."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(item => (
              <Card key={item.id} className="flex flex-col justify-between">
                <blockquote className="text-sm text-ink-muted italic leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
                <div className="pt-4 border-t border-border">
                  <div className="font-bold text-sm text-ink">{item.name}</div>
                  <div className="text-xs text-ink-muted">{item.role}, {item.company}</div>
                  {item.projectContext && (
                    <div className="text-[11px] text-primary mt-1 font-medium">{item.projectContext}</div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
};
