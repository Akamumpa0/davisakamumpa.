import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageCircle, Send, CheckCircle, AlertCircle, ArrowUpRight, Github, Linkedin, Globe, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { PageContainer } from '../components/layout/PageContainer';
import { SectionHeading } from '../components/common/SectionHeading';
import { Card } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { submitContactForm, ContactSubmission } from '../services/contactService';
import { getProfile } from '../services/portfolioService';
import { ProfileData } from '../types';

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const initialService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    serviceInterest: initialService || 'Web Development',
    budget: 'Flexible / Open to discussion',
    message: '',
    _gotcha: '', // Honeypot field (hidden from legitimate users)
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceInterest: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setStatusMessage('');

    const res = await submitContactForm(formData);

    if (res.success) {
      setStatus('success');
      setStatusMessage(res.message);
      setFormData({
        name: '',
        email: '',
        serviceInterest: 'Web Development',
        budget: 'Flexible / Open to discussion',
        message: '',
        _gotcha: '',
      });
    } else {
      setStatus('error');
      setStatusMessage(res.message);
    }
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

  const whatsappLink = profile?.socialLinks.find(s => s.platform === 'whatsapp')?.url ||
    `https://wa.me/?text=Hello%20${encodeURIComponent(profile?.name || 'Davis')},%20I%20would%20like%20to%20discuss%20a%20project`;

  return (
    <>
      <SEOHead
        title="Contact & Project Inquiry"
        description="Book a project, request a quote, or get in touch directly via email, WhatsApp, or the secure contact form."
        canonicalPath="/contact"
      />

      <PageContainer>
        <SectionHeading
          eyebrow="Initiate Contact"
          title="Let's build something exceptional together"
          subtitle="Tell me about your project, timeline, and commercial goals. I respond within 24 hours on business days."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Contact Form with Honeypot */}
          <div className="lg:col-span-7">
            <Card padding="lg">
              <h2 className="text-xl font-display font-bold text-ink mb-6">
                Send a Direct Message
              </h2>

              {/* Status Alert Messages */}
              {status === 'success' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-status-success-bg border border-emerald-300 dark:border-emerald-800 text-status-success flex items-start gap-3"
                >
                  <CheckCircle size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Message Sent Successfully</h4>
                    <p className="text-sm mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-status-error-bg border border-red-300 dark:border-red-800 text-status-error flex items-start gap-3"
                >
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm">Submission Error</h4>
                    <p className="text-sm mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot Spam Protection Field - Hidden from humans */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="_gotcha">Do not fill this field</label>
                  <input
                    type="text"
                    id="_gotcha"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-sans">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-surface text-ink text-sm placeholder:text-ink-subtle/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-sans">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-surface text-ink text-sm placeholder:text-ink-subtle/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-sans">
                      Primary Service Needed
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-surface text-ink text-sm focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                    >
                      <option value="Web Development">Full-Stack Web Development</option>
                      <option value="Mobile Development">Mobile App Development</option>
                      <option value="UI/UX & Branding">UI/UX & Graphic Design</option>
                      <option value="Advisory / Code Audit">Technical Advisory / Audit</option>
                      <option value="Other">Other / Custom Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-sans">
                      Estimated Project Scope
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-bg-surface text-ink text-sm focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors"
                    >
                      <option value="Flexible / Open to discussion">Flexible / Open to discussion</option>
                      <option value="MVP / Prototype Build">MVP / Prototype Build</option>
                      <option value="Full Web Application">Full Web Application</option>
                      <option value="Mobile Application">Mobile Application (iOS / Android)</option>
                      <option value="Branding & Visual Media">Graphic Design & Media Visibility</option>
                      <option value="Ongoing Retainer">Ongoing Retainer / Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5 font-sans">
                    Project Details & Scope <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you are looking to build, desired launch timeline, and any existing design or technical specs..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg-surface text-ink text-sm placeholder:text-ink-subtle/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors resize-y"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto"
                    icon={<Send size={16} />}
                  >
                    {status === 'submitting' ? 'Submitting Message...' : 'Send Inquiry'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Right Column: Direct Channels & Fast WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <Card padding="lg" className="bg-emerald-500/10 border-emerald-500/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500 text-white shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                    Fastest Response
                  </span>
                  <h3 className="text-lg font-display font-bold text-ink mb-2">
                    Message me on WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    Ideal for initial scope questions, scheduling a discovery call, or urgent consultation.
                  </p>
                  <Button
                    href={whatsappLink}
                    variant="outline"
                    size="sm"
                    className="border-emerald-600/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/10"
                    icon={<ArrowUpRight size={15} />}
                  >
                    Open WhatsApp Chat
                  </Button>
                </div>
              </div>
            </Card>

            {/* Email & Details Card */}
            <Card padding="lg">
              <h3 className="text-base font-display font-bold text-ink mb-4">
                Direct Channels & Coordinates
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-ink-subtle block">Direct Email</span>
                    <a
                      href={`mailto:${profile?.email}`}
                      className="font-semibold text-ink hover:text-primary transition-colors"
                    >
                      {profile?.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-ink-subtle block">Phone & WhatsApp</span>
                    <span className="font-semibold text-ink font-mono text-xs sm:text-sm">
                      {profile?.phoneWhatsapp}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-ink-subtle block">Location & Remote Availability</span>
                    <span className="font-semibold text-ink">
                      {profile?.location} • Remote Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-border mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-subtle block mb-3">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile?.socialLinks.map(s => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-bg-surface hover:border-primary hover:text-primary text-xs font-medium text-ink transition-colors"
                    >
                      {getSocialIcon(s.platform)}
                      <span>{s.label}</span>
                      <ArrowUpRight size={12} className="text-ink-subtle" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </PageContainer>
    </>
  );
};
