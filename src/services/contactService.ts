import emailjs from '@emailjs/browser';

export interface ContactSubmission {
  name: string;
  email: string;
  serviceInterest?: string;
  budget?: string;
  message: string;
  _gotcha?: string; // Honeypot field for bot spam prevention
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

const emailjsConfigured = () =>
  SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY &&
  SERVICE_ID !== '' && TEMPLATE_ID !== '' && PUBLIC_KEY !== '';

export const submitContactForm = async (
  payload: ContactSubmission
): Promise<ContactResponse> => {
  // Honeypot check: silently block bots
  if (payload._gotcha && payload._gotcha.trim() !== '') {
    return { success: true, message: 'Thank you! Your message has been received.' };
  }

  // Dev / unconfigured fallback — simulate success so the UI stays testable
  if (!emailjsConfigured()) {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.'
    };
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:   payload.name,
        from_email:  payload.email,
        service:     payload.serviceInterest || 'General Inquiry',
        budget:      payload.budget          || 'Not specified',
        message:     payload.message,
      },
      PUBLIC_KEY
    );

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will respond within 24 hours.'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again or reach out directly via email or WhatsApp.'
    };
  }
};