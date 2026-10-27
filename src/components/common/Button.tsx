import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'hero-primary' | 'hero-secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover focus-visible:ring-primary shadow-sm hover:shadow active:scale-[0.98]",
    secondary: "bg-primary-tint text-primary hover:bg-blue-100 dark:hover:bg-blue-900/40 focus-visible:ring-primary active:scale-[0.98]",
    outline: "border border-border text-ink hover:border-primary hover:text-primary bg-bg-surface focus-visible:ring-primary active:scale-[0.98]",
    ghost: "text-ink hover:text-primary hover:bg-primary-tint/50 focus-visible:ring-primary",
    'hero-primary': "bg-white text-primary-deep font-bold hover:bg-slate-100 shadow-md hover:shadow-lg focus-visible:ring-white active:scale-[0.98]",
    'hero-secondary': "border-2 border-white/40 text-white font-semibold hover:border-white hover:bg-white/10 backdrop-blur-sm focus-visible:ring-white active:scale-[0.98]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={props.target}
        rel={props.rel || "noopener noreferrer"}
        download={props.download}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
