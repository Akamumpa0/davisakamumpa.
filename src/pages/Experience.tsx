import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/layout/CTASection';
import { getExperience, getEducation, getProfile } from '../services/portfolioService';
import { ExperienceItem, EducationItem, ProfileData } from '../types';

export const Experience: React.FC = () => {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  useEffect(() => {
    getExperience().then(setExperience);
    getEducation().then(setEducation);
    getProfile().then(setProfile);
  }, []);

  return (
    <>
      <SEOHead
        title="Experience & Career History"
        description="Career track record, commercial achievements, leadership roles, and academic foundations in software engineering and design."
        canonicalPath="/experience"
      />

      <PageContainer>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Track Record"
            title="Career history & commercial impact"
            subtitle="2.5 years of hands-on software development, practical university initiatives, and client projects."
            className="mb-0"
          />
          {profile?.cvDownloadUrl && (
            <div className="mt-4 sm:mt-0 shrink-0">
              <Button
                href={profile.cvDownloadUrl}
                variant="outline"
                size="sm"
                download
              >
                Download Resume (PDF)
              </Button>
            </div>
          )}
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-6 space-y-12 mb-20 pl-6 sm:pl-10">
          {experience.map(item => (
            <div key={item.id} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-primary-tint border-4 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-200" />

              <Card padding="lg" className="border-border group-hover:border-primary/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3.5">
                    {item.logoUrl && (
                      <div className="w-14 h-14 rounded-xl bg-white border border-border/80 shadow-sm p-1.5 flex items-center justify-center shrink-0 overflow-hidden">
                        <img
                          src={item.logoUrl}
                          alt={`${item.company} logo`}
                          className="max-h-full max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary font-mono block">
                        {item.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                        {item.role}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-ink-subtle">
                    <span className="font-semibold text-primary-deep dark:text-primary-sky flex items-center gap-1">
                      <Calendar size={13} /> {item.period}
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin size={13} /> {item.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 my-5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-ink-muted leading-relaxed">
                      <CheckCircle2 size={17} className="text-primary shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {item.techStack.map(tech => (
                    <Tag key={tech} variant="neutral" size="sm">{tech}</Tag>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Education Block */}
        <div className="pt-8 border-t border-border">
          <SectionHeading
            eyebrow="Academic Background"
            title="Education & specialized certifications"
            subtitle="Solid foundations in computer science theory, human-computer interaction, and modern visual design principles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map(edu => (
              <Card key={edu.id} padding="lg" className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-tint text-primary shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-primary block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-display font-bold text-ink mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-sm font-semibold text-ink-muted mb-2">
                    {edu.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {edu.details}
                  </p>
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
