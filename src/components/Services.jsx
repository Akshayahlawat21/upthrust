import React, { useState } from 'react';
import { fallbackServices } from '../data/fallbackContent';
import { ServiceCard } from './ServiceCard';
import { Ribbon3D } from './Ribbon3D';

export const Services = ({ onOpenContact }) => {
  const services = fallbackServices;
  const [activeSlide, setActiveSlide] = useState(0);

  const currentService = services[activeSlide] || services[0];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : services.length - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev < services.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#000000] min-h-[720px] lg:h-[810px] overflow-hidden border-b border-white/10 flex flex-col justify-between"
      aria-label="Services Showcase"
    >
      
      {/* 3D Dark Orange Looped Ribbon Canvas spanning behind cards */}
      <Ribbon3D />

      {/* Subtle Dark Perspective Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Main Active Slide Display matching 1440x810px Figma Frame */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center">
        {currentService && (
          <div key={activeSlide} className="w-full flex justify-center animate-service-fade">
            <ServiceCard
              service={currentService}
              index={activeSlide}
              onContactClick={onOpenContact}
            />
          </div>
        )}
      </div>

      {/* Bottom Slider Navigation Bar with Tabs and Arrow Controls */}
      <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 sm:px-12 lg:px-20 pb-8 flex items-center justify-between">
        
        {/* Slide Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          {services.map((svc, idx) => (
            <button
              key={svc.id || idx}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-full font-mono text-[11px] sm:text-xs transition-all duration-200 cursor-pointer ${
                activeSlide === idx
                  ? 'bg-brand-orange text-white font-bold shadow-lg scale-105'
                  : 'bg-white/10 text-gray-400 hover:text-white hover:bg-white/20'
              }`}
            >
              0{idx + 1} / {svc.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Arrow Controls < > */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all text-base font-mono cursor-pointer"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all text-base font-mono cursor-pointer"
            aria-label="Next slide"
          >
            →
          </button>
        </div>

      </div>

    </section>
  );
};




