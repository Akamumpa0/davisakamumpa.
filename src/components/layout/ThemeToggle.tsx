import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`p-2 rounded-lg border border-border bg-bg-surface hover:bg-bg-elevated text-ink hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${className}`}
    >
      {isDark ? (
        <Sun size={19} className="text-yellow-400 animate-in spin-in-90 duration-200" />
      ) : (
        <Moon size={19} className="text-primary-deep animate-in spin-in-90 duration-200" />
      )}
    </button>
  );
};
