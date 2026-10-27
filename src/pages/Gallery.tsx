import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Lightbox } from '../components/common/Lightbox';
import { CTASection } from '../components/layout/CTASection';
import { getGalleryItems } from '../services/portfolioService';
import { GalleryItem } from '../types';

const CATEGORIES = ['All', 'Branding', 'UI/UX', 'Graphic Design', 'Mobile Design'];

export const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    getGalleryItems(activeCategory).then(setItems);
  }, [activeCategory]);

  return (
    <>
      <SEOHead
        title="Design Gallery & Visual Portfolio"
        description="Visual portfolio of brand identities, design systems, UI typography, and digital product interfaces."
        canonicalPath="/gallery"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Visual Craft"
          title="Design gallery & brand artifacts"
          subtitle="Graphic design and visual systems judged by pure aesthetics, typography, and functional clarity."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Gallery categories">
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
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Grid with Lightbox Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxIndex(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged version of ${item.title}`}
              className="group relative rounded-xl overflow-hidden border border-border bg-bg-surface shadow-card hover:shadow-card-hover hover:border-primary/50 transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className={`w-full overflow-hidden bg-slate-950 ${item.aspectRatio || 'aspect-[4/3]'}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay with title and eye icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary-sky">
                    {item.category}
                  </span>
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                    <Eye size={16} />
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          items={items}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      </PageContainer>

      <CTASection />
    </>
  );
};
