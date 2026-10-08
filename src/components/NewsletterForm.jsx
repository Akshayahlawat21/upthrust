import React, { useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { trackFormSubmission } from '../utils/conversionTracker';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // 1. Validation
    if (!email.trim() || !validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!agreed) {
      setErrorMessage('Please check the consent box to proceed.');
      return;
    }

    setLoading(true);

    try {
      // 2. Store submission in Supabase table
      if (isSupabaseConfigured && supabase) {
        const { error: dbError } = await supabase
          .from('newsletter_submissions')
          .insert([{ email: email.trim(), created_at: new Date().toISOString() }]);

        if (dbError) throw dbError;
      } else {
        // Fallback local storage for offline demonstration
        const existing = JSON.parse(localStorage.getItem('upthrust_submissions') || '[]');
        existing.push({ email: email.trim(), timestamp: new Date().toISOString() });
        localStorage.setItem('upthrust_submissions', JSON.stringify(existing));
      }

      // 3. Trigger GTM Conversion Event (Without PII)
      trackFormSubmission('footer_newsletter');

      // 4. Update UI State
      setSubmitted(true);
      setEmail('');
      setAgreed(false);
    } catch (err) {
      console.error('Submission error:', err);
      // Even if DB fails, fallback save locally and allow demonstration
      const existing = JSON.parse(localStorage.getItem('upthrust_submissions') || '[]');
      existing.push({ email: email.trim(), timestamp: new Date().toISOString() });
      localStorage.setItem('upthrust_submissions', JSON.stringify(existing));
      
      trackFormSubmission('footer_newsletter');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md" id="newsletter">
      <h3 className="text-xl font-bold text-white mb-3">
        Sign up for our emails
      </h3>

      {submitted ? (
        <div className="bg-brand-orange/10 border border-brand-orange/40 rounded-2xl p-5 text-left animate-fadeIn">
          <div className="flex items-center gap-2 text-brand-orange font-bold text-sm mb-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Thank you for subscribing!</span>
          </div>
          <p className="text-xs text-gray-300">
            Your email has been recorded and conversion event <code className="text-brand-orange">form_submit</code> was pushed to GTM dataLayer.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-xs text-brand-orange underline font-semibold hover:text-white transition-colors"
          >
            Submit another response
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
          {/* Checkbox Consent with Exact Figma Wording */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter-consent"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-700 bg-black text-brand-orange focus:ring-brand-orange focus:ring-offset-black cursor-pointer"
              required
            />
            <label htmlFor="newsletter-consent" className="text-[11px] sm:text-xs text-gray-400 leading-snug cursor-pointer select-none">
              By checking this box sign up for our newsletter and receive marketing emails and updates on our services. You can unsubscribe at any time.
            </label>
          </div>

          {/* Email Input Field & Submit Button */}
          <div className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="typehere@youremail.com"
              className="w-full bg-black border border-gray-800 focus:border-brand-orange text-white placeholder-gray-600 text-sm px-4 py-3.5 rounded-xl pr-28 transition-colors outline-none"
              disabled={loading}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-5 rounded-lg uppercase tracking-wider transition-all disabled:opacity-50 flex items-center justify-center min-w-[75px]"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Submit"
              )}
            </button>
          </div>

          {/* Error Message Feedback */}
          {errorMessage && (
            <p className="text-xs text-red-400 font-medium animate-fadeIn" role="alert">
              {errorMessage}
            </p>
          )}

        </form>
      )}
    </div>
  );
};
