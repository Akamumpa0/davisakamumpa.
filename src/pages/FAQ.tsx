import React, { useEffect, useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Accordion } from '../components/common/Accordion';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { CTASection } from '../components/layout/CTASection';
import { getAllFAQs } from '../services/portfolioService';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>('All');

  useEffect(() => {
    getAllFAQs().then(setFaqs);
  }, []);

  const categories = ['All', 'Services', 'Pricing', 'Process', 'Collaboration'];

  const filteredFaqs = activeTab === 'All'
    ? faqs
    : faqs.filter(f => f.category === activeTab);

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions"
        description="Clear answers covering pricing structures, payment schedules, project timelines, revisions, and international remote collaboration."
        canonicalPath="/faq"
      />

      <PageContainer size="narrow">
        <SectionHeading
          eyebrow="Everything You Need to Know"
          title="Frequently asked questions"
          subtitle="Transparent details on how I engage with clients, structure milestones, handle revisions, and ensure project success."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="FAQ categories">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                activeTab === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-bg-surface text-ink-muted border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Component */}
        <Accordion items={filteredFaqs} className="mb-14" />

        {/* Still Have Questions Box */}
        <Card padding="lg" className="bg-primary-tint/60 border-primary/20 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={22} />
            </div>
            <h3 className="text-xl font-display font-bold text-ink mb-2">
              Have a question not listed here?
            </h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-6">
              I am always happy to talk through technical specifics, NDA requirements, or custom project arrangements.
            </p>
            <Button to="/contact" variant="primary" size="md">
              Ask Me Directly
            </Button>
          </div>
        </Card>
      </PageContainer>

      <CTASection />
    </>
  );
};
