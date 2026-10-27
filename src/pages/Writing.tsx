import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock, Calendar } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Tag } from '../components/common/Tag';
import { CTASection } from '../components/layout/CTASection';
import { getPosts } from '../services/portfolioService';
import { PostItem } from '../types';

export const Writing: React.FC = () => {
  const [posts, setPosts] = useState<PostItem[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      <SEOHead
        title="Technical Writing & Architecture Essays"
        description="Deep dives on design systems, React performance, realtime architectures, and user trust in digital products."
        canonicalPath="/writing"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Articles & Essays"
          title="Thoughts on architecture, craft & user experience"
          subtitle="Reflections from the trenches of shipping software: performance optimization, design token systems, and commercial UX."
        />

        <div className="space-y-6 mb-16">
          {posts.map(post => (
            <Card
              key={post.id}
              hoverEffect
              padding="lg"
              className="border-border hover:border-primary/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-ink-subtle">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {post.readTime}
                  </span>
                  {post.publication && (
                    <>
                      <span>•</span>
                      <span className="text-primary font-semibold">{post.publication}</span>
                    </>
                  )}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-ink mb-3">
                {post.externalUrl ? (
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:underline"
                  >
                    <span>{post.title}</span>
                    <ExternalLink size={17} className="text-primary shrink-0" />
                  </a>
                ) : (
                  post.title
                )}
              </h3>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed mb-5 max-w-3xl">
                {post.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                {post.tags.map(tag => (
                  <Tag key={tag} variant="neutral" size="sm">{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </PageContainer>

      <CTASection />
    </>
  );
};
