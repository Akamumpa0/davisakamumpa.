import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = false,
  padding = 'md'
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-bg-surface border border-border rounded-xl shadow-card transition-all duration-200 ${
        hoverEffect ? 'hover:shadow-card-hover hover:border-primary/40 hover:-translate-y-0.5' : ''
      } ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
