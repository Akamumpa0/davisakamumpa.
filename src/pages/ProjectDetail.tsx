import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, User, Zap } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { Tag } from '../components/common/Tag';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { CTASection } from '../components/layout/CTASection';
import { getProjectBySlug } from '../services/portfolioService';
import { ProjectItem } from '../types';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getProjectBySlug(slug).then(result => {
      if (result) {
        setProject(result);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <PageContainer>
        <div className="py-20 text-center text-ink-muted">Loading project details...</div>
      </PageContainer>
    );
  }

  if (!project) {
    return (
      <PageContainer>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold text-ink mb-4">Project Not Found</h1>
          <p className="text-ink-muted mb-6">The requested case study could not be located.</p>
          <Button to="/projects" variant="primary" icon={<ArrowLeft size={16} />} iconPosition="left">
            Back to Projects
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.shortDescription}
        canonicalPath={`/projects/${project.slug}`}
        ogImage={project.coverImage}
      />

      <PageContainer>
        {/* Back Link */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:underline cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to all projects</span>
          </button>
        </div>

        {/* Case Study Header */}
        <div className="max-w-4xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Tag variant="blue">{project.category}</Tag>
            {project.client && (
              <span className="text-xs font-semibold text-ink-muted flex items-center gap-1">
                <User size={13} /> {project.client}
              </span>
            )}
            <span className="text-xs font-semibold text-ink-muted flex items-center gap-1">
              <Calendar size={13} /> {project.year}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-ink tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Action Links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="primary"
                size="md"
                icon={<ExternalLink size={16} />}
              >
                Visit Live Product
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                variant="outline"
                size="md"
                icon={<Github size={16} />}
              >
                View Repository
              </Button>
            )}
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-elevated mb-14 bg-slate-950">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto max-h-[550px] object-cover"
          />
        </div>

        {/* Key Metrics Strip if available */}
        {project.metrics && (
          <Card className="mb-14 bg-primary-tint/50 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary text-white shrink-0">
                <Zap size={22} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Commercial Impact</span>
                <div className="text-base sm:text-lg font-bold text-ink">{project.metrics}</div>
              </div>
            </div>
          </Card>
        )}

        {/* Deep Dive Breakdown: Problem, Approach, Result */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-10">
            {/* The Challenge */}
            <section>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-ink mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                The Challenge & Objective
              </h2>
              <p className="text-ink-muted leading-relaxed text-base sm:text-lg">
                {project.problem}
              </p>
            </section>

            {/* The Technical Approach */}
            <section>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-ink mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                The Engineering & Design Approach
              </h2>
              <p className="text-ink-muted leading-relaxed text-base sm:text-lg">
                {project.approach}
              </p>
            </section>

            {/* The Outcome */}
            <section>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-ink mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                The Business Result & Impact
              </h2>
              <p className="text-ink-muted leading-relaxed text-base sm:text-lg">
                {project.result}
              </p>
            </section>
          </div>

          {/* Sidebar: Technology Stack & Metadata */}
          <div className="lg:col-span-4">
            <Card padding="md" className="sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-subtle mb-3">
                  Technologies Deployed
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map(tech => (
                    <Tag key={tech} variant="blue" size="sm">{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-subtle mb-2">
                  Role Scope
                </h3>
                <ul className="space-y-1.5 text-xs text-ink-muted">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Architecture & System Design</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Interactive UI/UX & Responsive Prototyping</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Production Implementation & Testing</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="w-full justify-center"
                >
                  Discuss a Similar Build
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Gallery / Additional Screenshots */}
        {project.screenshots && project.screenshots.length > 1 && (
          <div className="pt-8 border-t border-border mb-16">
            <h2 className="text-2xl font-display font-bold text-ink mb-6">
              Visual Documentation & Interface Previews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((shot, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-border shadow-sm bg-slate-900">
                  <img
                    src={shot}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </PageContainer>

      <CTASection />
    </>
  );
};
