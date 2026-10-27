import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, MessageCircle, Globe, Mail } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github size={18} />;
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'whatsapp':
        return <MessageCircle size={18} />;
      default:
        return <Globe size={18} />;
    }
  };

  return (
    <footer className="bg-primary-deep text-white border-t border-blue-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Bio column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block font-display font-bold text-xl text-white mb-3">
              {profileData.name}
            </Link>
            <p className="text-blue-100/80 text-sm max-w-sm mb-5 leading-relaxed">
              {profileData.title}. {profileData.oneLinePitch}
            </p>
            <div className="flex items-center gap-3">
              {profileData.socialLinks.map(s => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {getSocialIcon(s.platform)}
                </a>
              ))}
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Direct Email"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-sky mb-4 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">Design Gallery</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white transition-colors">Skills & Approach</Link>
              </li>
            </ul>
          </div>

          {/* Background & Insights */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-sky mb-4 font-sans">
              Profile
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/80">
              <li>
                <Link to="/experience" className="hover:text-white transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link>
              </li>
              <li>
                <Link to="/writing" className="hover:text-white transition-colors">Writing & Articles</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-sky mb-4 font-sans">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm text-blue-100/80">
              <p className="font-mono text-xs">{profileData.location}</p>
              <a
                href={`mailto:${profileData.email}`}
                className="block text-white hover:text-primary-sky transition-colors underline-offset-4 hover:underline"
              >
                {profileData.email}
              </a>
              <a
                href={profileData.socialLinks.find(s => s.platform === 'whatsapp')?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-sky hover:text-white transition-colors"
              >
                Chat on WhatsApp →
              </a>
              {profileData.cvDownloadUrl && (
                <a
                  href={profileData.cvDownloadUrl}
                  download
                  className="inline-block mt-2 text-xs font-semibold px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Download CV (PDF)
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React, Vite & Tailwind CSS</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-blue-100 hover:text-white transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
