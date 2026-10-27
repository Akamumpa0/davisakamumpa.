import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  size = 'default'
}) => {
  const sizeStyles = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${sizeStyles[size]} ${className}`}>
      {children}
    </div>
  );
};
