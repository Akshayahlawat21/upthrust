import React, { useState } from 'react';

export const Navbar = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-blueprint border-b border-gray-200/80 sticky top-0 z-50 backdrop-blur-xs transition-all">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        
        {/* Brand Logo with Upthrust Rocket Icon */}
        <a 
          href="/" 
          className="flex items-center gap-2.5 text-black hover:opacity-85 transition-opacity group"
          aria-label="Upthrust Design Home"
        >
          <img 
            src="/assets/rocket.png" 
            alt="Upthrust Rocket Logo" 
            className="w-6 h-6 object-contain group-hover:scale-105 transition-transform" 
          />
          <span className="font-extrabold text-2xl tracking-tight text-black font-body">
            Upthrust
          </span>
        </a>

        {/* Desktop Direct Orange "CONTACT US" Typography Link */}
        <div className="hidden md:flex items-center justify-end">
          <button
            onClick={onOpenContact}
            className="w-[198px] h-[51px] flex items-center justify-center font-condensed-bold text-brand-orange hover:text-brand-orange-hover text-2xl sm:text-[32px] font-black uppercase tracking-normal transition-transform duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded cursor-pointer"
            id="nav-contact-btn"
          >
            CONTACT US
          </button>
        </div>

        {/* Mobile Hamburger Touch Action */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:text-brand-orange transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="sm:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-xl animate-fadeIn">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-gray-900 py-2 border-b border-gray-100"
          >
            Services
          </a>
          <a
            href="#newsletter"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-semibold text-gray-900 py-2 border-b border-gray-100"
          >
            Newsletter
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full font-display-giant text-brand-orange text-lg font-black uppercase tracking-wider text-center py-2"
          >
            CONTACT US
          </button>
        </nav>
      )}
    </header>
  );
};
