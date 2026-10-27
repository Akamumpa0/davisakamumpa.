import React from 'react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'blue',
  size = 'sm',
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const variantStyles = {
    blue: 'bg-primary-tint text-primary font-medium border border-primary/10',
    neutral: 'bg-bg-elevated text-ink-muted font-normal border border-border',
    outline: 'bg-transparent text-ink font-medium border border-border hover:border-primary',
  };

  return (
    <span className={`inline-flex items-center rounded-md font-sans tracking-wide transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
