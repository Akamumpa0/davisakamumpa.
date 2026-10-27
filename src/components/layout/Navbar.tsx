import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '../common/Button';
import { profileData } from '../../data/profile';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Writing', path: '/writing' },
  { name: 'FAQ', path: '/faq' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever navigation occurs
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track window scroll for subtle glass blur navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-bg-surface/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-bg-surface border-b border-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2.5 font-display font-extrabold text-lg sm:text-xl text-ink tracking-tight hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md p-1"
          >
            <span className="w-8 h-8 rounded-lg bg-primary-deep text-white flex items-center justify-center shadow-sm border border-primary/20">
              <Code2 size={16} />
            </span>
            <span>
              {profileData.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'text-primary bg-primary-tint font-semibold'
                      : 'text-ink-muted hover:text-ink hover:bg-bg-elevated'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Actions: Theme Toggle & Get in touch CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight size={16} />}
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu & Theme Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="p-2 rounded-lg border border-border bg-bg-surface text-ink hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-border bg-bg-surface px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col space-y-1 mb-4" aria-label="Mobile Navigation">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-primary bg-primary-tint font-bold'
                      : 'text-ink hover:text-primary hover:bg-bg-elevated'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-tint font-bold'
                    : 'text-ink hover:text-primary hover:bg-bg-elevated'
                }`
              }
            >
              Certifications
            </NavLink>
          </nav>

          <div className="pt-2 border-t border-border">
            <Button
              to="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              icon={<ArrowUpRight size={18} />}
            >
              Get in touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
