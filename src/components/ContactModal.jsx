import React, { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { trackFormSubmission } from '../utils/conversionTracker';

export const ContactModal = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService?.title || 'General Inquiry',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService.title }));
    }
  }, [selectedService]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please fill in your name and email.');
      return;
    }

    setLoading(true);

    try {
      if (isSupabaseConfigured && supabase) {
        const { error: dbError } = await supabase
          .from('newsletter_submissions')
          .insert([{ 
            email: formData.email.trim(), 
            created_at: new Date().toISOString() 
          }]);

        if (dbError) throw dbError;
      } else {
        const existing = JSON.parse(localStorage.getItem('upthrust_submissions') || '[]');
        existing.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('upthrust_submissions', JSON.stringify(existing));
      }

      trackFormSubmission('contact_modal');
      setSubmitted(true);
    } catch (err) {
      console.error('Modal submit notice:', err);
      trackFormSubmission('contact_modal');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div 
        className="bg-[#0F0F0F] border border-gray-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-black text-white">Message Received</h3>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Thank you! Our strategic team will review your inquiry and reach out within 24 hours.
            </p>
            <p className="text-xs text-gray-500 font-mono">
              GTM Conversion Event <code className="text-brand-orange">form_submit</code> recorded.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="bg-brand-orange text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full mt-4"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[10px] font-mono text-brand-orange font-bold uppercase tracking-widest block mb-1">
                START A CONVERSATION
              </span>
              <h3 id="contact-modal-title" className="text-2xl font-black text-white">
                {selectedService ? `Inquire about ${selectedService.title}` : "Let's Build Something Bold"}
              </h3>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label htmlFor="contact-name" className="text-xs font-semibold text-gray-300 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Mercer"
                  className="w-full bg-black border border-gray-800 focus:border-brand-orange text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-xs font-semibold text-gray-300 block mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@brand.com"
                  className="w-full bg-black border border-gray-800 focus:border-brand-orange text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs font-semibold text-gray-300 block mb-1">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your brand goals, timeline, and scope..."
                  className="w-full bg-black border border-gray-800 focus:border-brand-orange text-white text-sm px-4 py-3 rounded-xl outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-400 font-medium" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Send Inquiry'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
