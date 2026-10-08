/**
 * Conversion Tracking Utility
 * Safely pushes conversion event to window.dataLayer for GTM / Analytics
 * without triggering ad-blocker filename filters or exposing PII.
 */
export const trackFormSubmission = (formId = 'footer_newsletter') => {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'form_submit',
        form_id: formId,
        timestamp: new Date().toISOString()
      });
      console.log(`[Conversion Tracked] form_submit for ${formId}`, window.dataLayer);
    }
  } catch (error) {
    console.warn('[Conversion Tracking Notice]', error);
  }
};
