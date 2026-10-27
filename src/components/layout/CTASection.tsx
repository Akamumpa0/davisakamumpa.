import React from 'react';
import { ArrowUpRight, MessageSquare, Mail } from 'lucide-react';
import { Button } from '../common/Button';
import { profileData } from '../../data/profile';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Have a high-impact project in mind? Let's build something remarkable.",
  subtitle = "Whether you need a bespoke web app, an iOS/Android MVP, or a high-converting brand identity, I'm currently booking select projects for the coming quarter."
}) => {
  return (
    <section className="py-16 sm:py-20 bg-bg-page relative overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-br from-primary-deep via-blue-900 to-primary text-white p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden">
          {/* Subtle background concentric circles */}
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full border border-white/10 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-primary-sky backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Q1 / Q2 Contracts
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-xl">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="hero-primary"
                size="lg"
                icon={<ArrowUpRight size={18} />}
              >
                Start a Conversation
              </Button>
              <Button
                href={`mailto:${profileData.email}`}
                variant="hero-secondary"
                size="lg"
                icon={<Mail size={18} />}
              >
                {profileData.email}
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-blue-100/80">
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-primary-sky" />
                <span>Quick response within 24 hours</span>
              </div>
              <div>•</div>
              <div>Fixed-price milestones or monthly retainers</div>
              <div>•</div>
              <div>Direct senior-level partnership</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
