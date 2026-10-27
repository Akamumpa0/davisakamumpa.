import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { CTASection } from '../components/layout/CTASection';
import { getProjects } from '../services/portfolioService';
import { ProjectItem, ProjectCategory } from '../types';

const CATEGORIES: (ProjectCategory | 'All')[] = ['All', 'Web', 'Mobile', 'Design'];

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');

  useEffect(() => {
    getProjects(activeCategory).then(setProjects);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Featured Projects & Case Studies"
        description="Explore production case studies spanning full-stack web applications, mobile platforms, and comprehensive design systems."
        canonicalPath="/projects"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Portfolio Case Studies"
          title="Architectural craftsmanship in every detail"
          subtitle="Explore client case studies across web apps, native mobile builds, and scalable brand design systems."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project categories">
          {CATEGORIES.map(category => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-bg-surface text-ink-muted border border-border hover:border-primary hover:text-primary'
              }`}
            >
              {category} {category === 'All' ? `(${projects.length})` : ''}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Card
              key={project.id}
              hoverEffect
              padding="none"
              className="overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <Tag variant="blue">{project.category}</Tag>
                  </div>
                  {project.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-sm text-emerald-400 text-xs px-2.5 py-1.5 rounded-md font-medium">
                      {project.metrics}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-1">
                    {project.client} • {project.year}
                  </div>
                  <h3 className="text-lg font-display font-bold text-ink mb-2">
                    <Link
                      to={`/projects/${project.slug}`}
                      className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                      <Tag key={t} variant="neutral" size="sm">{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-primary transition-colors p-1"
                      aria-label={`Visit live demo for ${project.title}`}
                      title="Live Demo"
                    >
                      <ExternalLink size={17} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-primary transition-colors p-1"
                      aria-label={`View source code on GitHub for ${project.title}`}
                      title="Source Code"
                    >
                      <Github size={17} />
                    </a>
                  )}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-hover focus-visible:outline-none focus-visible:underline"
                >
                  <span>View Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
};
