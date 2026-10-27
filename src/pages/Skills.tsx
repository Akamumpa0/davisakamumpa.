import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { CTASection } from '../components/layout/CTASection';
import { getSkills, getSoftSkills } from '../services/portfolioService';
import { SkillCategory, SoftSkill } from '../types';

export const Skills: React.FC = () => {
  const [categories, setCategories] = useState<SkillCategory[]>([]);
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([]);

  useEffect(() => {
    getSkills().then(setCategories);
    getSoftSkills().then(setSoftSkills);
  }, []);

  return (
    <>
      <SEOHead
        title="Technical Skills & Methodology"
        description="Core technical competencies spanning Frontend, Backend, Mobile, Design Systems, and DevOps, alongside collaborative soft skills."
        canonicalPath="/skills"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Capabilities & Stack"
          title="Engineered for scalability, crafted with precision"
          subtitle="Every tool in my stack has been battle-tested across production applications. Grouped by core operational domains."
        />

        {/* Technical Skills Categorized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {categories.map(cat => (
            <Card key={cat.category} padding="lg">
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
                <h3 className="text-xl font-display font-bold text-ink flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  {cat.category}
                </h3>
                <span className="text-xs font-mono text-ink-subtle">
                  {cat.skills.length} core proficiencies
                </span>
              </div>

              <div className="space-y-5">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="font-semibold text-ink flex items-center gap-1.5">
                        {skill.name}
                        {skill.highlight && (
                          <Tag variant="blue" size="sm">Core</Tag>
                        )}
                      </span>
                      <span className="text-xs font-mono text-ink-subtle">
                        {skill.experienceYears} ({skill.level}%)
                      </span>
                    </div>

                    {/* Animated Skill Bar */}
                    <div
                      className="w-full h-2 rounded-full bg-bg-elevated overflow-hidden border border-border/40"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-sky transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* SOFT SKILLS: HOW I WORK */}
        <div className="pt-8 border-t border-border">
          <SectionHeading
            eyebrow="Soft Skills & Work Ethics"
            title="How I work: clear, predictable collaboration"
            subtitle="Technical capability only creates value when paired with exceptional communication, empathy, and business alignment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((item, idx) => (
              <Card key={idx} padding="md" className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-primary-tint text-primary shrink-0 mt-0.5">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-ink mb-1.5 font-display">
                    {item.title}
                  </h4>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.description}
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
