import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { Button } from '../components/common/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead
        title="404 Page Not Found"
        description="The requested page could not be located."
        canonicalPath="/404"
        noindex
      />

      <PageContainer size="narrow" className="py-24 sm:py-32 text-center">
        <span className="text-6xl sm:text-7xl font-display font-extrabold text-primary mb-4 block">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink mb-3">
          Page not found
        </h1>
        <p className="text-ink-muted text-base max-w-md mx-auto mb-8 leading-relaxed">
          The page you are looking for does not exist, has been moved, or has an outdated link.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" icon={<Home size={16} />}>
            Back to Home
          </Button>
          <Button to="/projects" variant="outline" icon={<ArrowLeft size={16} />} iconPosition="left">
            View Projects
          </Button>
        </div>
      </PageContainer>
    </>
  );
};
