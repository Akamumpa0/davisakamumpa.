import React, { useEffect, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/layout/CTASection';
import { getCertifications } from '../services/portfolioService';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const [certs, setCerts] = useState<CertificationItem[]>([]);

  useEffect(() => {
    getCertifications().then(setCerts);
  }, []);

  return (
    <>
      <SEOHead
        title="Professional Certifications"
        description="Verified industry credentials across cloud architecture, modern mobile engineering, and design systems."
        canonicalPath="/certifications"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Verified Credentials"
          title="Industry certifications & technical licenses"
          subtitle="Continuous learning, rigorous examination, and professional accreditations from industry leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certs.map(cert => (
            <Card key={cert.id} hoverEffect padding="lg" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary-tint text-primary">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-bg-elevated text-ink-subtle border border-border">
                    Issued {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-ink mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-primary mb-4">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div className="text-xs font-mono text-ink-subtle mb-4">
                    Credential ID: <span className="text-ink">{cert.credentialId}</span>
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 border-t border-border">
                  <Button
                    href={cert.credentialUrl}
                    variant="ghost"
                    size="sm"
                    className="p-0 text-primary hover:text-primary-hover"
                    icon={<ExternalLink size={14} />}
                  >
                    Verify Credential
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
};
