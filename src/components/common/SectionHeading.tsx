import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 lg:mb-12 max-w-prose-custom ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2.5 px-2.5 py-1 rounded bg-primary-tint border border-primary/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-ink leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-ink-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
