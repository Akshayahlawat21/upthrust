import React from 'react';
import { NewsletterForm } from './NewsletterForm';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#000000] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Massive Full-Width Brand Typography: UPTHRUST 🧡 DESIGN */}
        <div className="w-full border-b border-white/15 pb-8 mb-12 select-none overflow-hidden">
          <div className="w-full flex items-center justify-between gap-2 sm:gap-6 whitespace-nowrap">
            <span className="font-condensed-bold text-white text-[11vw] lg:text-[135px] xl:text-[150px] tracking-tight leading-none uppercase">
              UPTHRUST
            </span>

            {/* Electric Orange 3-Petal Propeller Icon */}
            <div className="w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 flex-shrink-0 text-brand-orange flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C12.55 5.5 15.5 8.5 19 9C15.5 9.5 12.5 12.5 12 16C11.5 12.5 8.5 9.5 5 9C8.5 8.5 11.5 5.5 12 2Z" />
                <circle cx="12" cy="12" r="3" fill="#FF5E1E" />
              </svg>
            </div>

            <span className="font-condensed-bold text-white text-[11vw] lg:text-[135px] xl:text-[150px] tracking-tight leading-none uppercase">
              DESIGN
            </span>
          </div>
        </div>

        {/* 2-Column Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Agency Hub Links */}
          <div className="lg:col-span-6 space-y-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Agency Hub 1 */}
              <div className="space-y-2">
                <a 
                  href="https://upthrust.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-sm font-bold text-white hover:text-brand-orange transition-colors"
                >
                  <span>upthrust.agency</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
                <p className="text-xs text-gray-500 font-medium">
                  Main agency portfolio and enterprise design systems.
                </p>
                <a 
                  href="mailto:hello@upthrust.agency" 
                  className="text-xs font-mono text-gray-400 hover:text-white block pt-1"
                >
                  hello@upthrust.agency
                </a>
              </div>

              {/* Agency Hub 2 */}
              <div className="space-y-2">
                <a 
                  href="https://upthrust.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-mono text-sm font-bold text-white hover:text-brand-orange transition-colors"
                >
                  <span>upthrust.in</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </a>
                <p className="text-xs text-gray-500 font-medium">
                  Regional studio operations & creative sprints.
                </p>
                <a 
                  href="mailto:hello@upthrust.in" 
                  className="text-xs font-mono text-gray-400 hover:text-white block pt-1"
                >
                  hello@upthrust.in
                </a>
              </div>

            </div>

            {/* Bottom Left Placeholder / Note */}
            <p className="text-xs text-gray-600 font-mono">
              Designed with precision. Engineered for performance.
            </p>

          </div>

          {/* Right Column: Newsletter Form & Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            {/* Functional Newsletter Form */}
            <NewsletterForm />

            {/* Social & Secondary Hub Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-gray-400 font-mono">
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-orange transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-4">
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <span>© Upthrust Design</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};
