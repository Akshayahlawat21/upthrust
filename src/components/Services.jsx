import React, { useState } from 'react';
import { fallbackServices } from '../data/fallbackContent';
import { ServiceCard } from './ServiceCard';
import { Ribbon3D } from './Ribbon3D';

export const Services = ({ onOpenContact }) => {
  const services = fallbackServices;
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Gesture tracking refs to avoid state re-render lags during gesture
  const startXRef = React.useRef(0);
  const startYRef = React.useRef(0);
  const startTimeRef = React.useRef(0);
  const currentDeltaXRef = React.useRef(0);
  const isHorizontalSwipeRef = React.useRef(null);

  // Touch handlers
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    startYRef.current = touch.clientY;
    startTimeRef.current = Date.now();
    currentDeltaXRef.current = 0;
    isHorizontalSwipeRef.current = null;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!startXRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startXRef.current;
    const deltaY = touch.clientY - startYRef.current;

    // Determine swipe direction axis on first move
    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
        isHorizontalSwipeRef.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (!isHorizontalSwipeRef.current) return;

    // Apply rubber-band damping at carousel boundaries
    let effectiveOffset = deltaX;
    if ((activeSlide === 0 && deltaX > 0) || (activeSlide === services.length - 1 && deltaX < 0)) {
      effectiveOffset = deltaX * 0.35;
    }

    currentDeltaXRef.current = effectiveOffset;
    setDragOffset(effectiveOffset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const deltaX = currentDeltaXRef.current;
    const duration = Math.max(1, Date.now() - startTimeRef.current);
    const velocity = Math.abs(deltaX) / duration;

    // Trigger slide change on quick flick (>0.3px/ms) or drag distance (>40px)
    const shouldSwipe = Math.abs(deltaX) > 40 || velocity > 0.3;

    if (shouldSwipe && isHorizontalSwipeRef.current) {
      if (deltaX < 0 && activeSlide < services.length - 1) {
        setActiveSlide((prev) => prev + 1);
      } else if (deltaX > 0 && activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      }
    }

    setDragOffset(0);
    setIsDragging(false);
    startXRef.current = 0;
    startYRef.current = 0;
    currentDeltaXRef.current = 0;
    isHorizontalSwipeRef.current = null;
  };

  // Mouse drag handlers (Desktop support)
  const handleMouseDown = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
    startXRef.current = e.clientX;
    startTimeRef.current = Date.now();
    currentDeltaXRef.current = 0;
    isHorizontalSwipeRef.current = true;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !startXRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    let effectiveOffset = deltaX;
    if ((activeSlide === 0 && deltaX > 0) || (activeSlide === services.length - 1 && deltaX < 0)) {
      effectiveOffset = deltaX * 0.35;
    }
    currentDeltaXRef.current = effectiveOffset;
    setDragOffset(effectiveOffset);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  return (
    <section 
      id="services" 
      className="relative w-full bg-[#000000] min-h-[640px] sm:min-h-[700px] lg:h-[810px] overflow-hidden border-b border-white/10 flex flex-col justify-between select-none cursor-grab active:cursor-grabbing touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      aria-label="Services Showcase"
    >
      
      {/* 3D Dark Orange Looped Ribbon Canvas spanning behind cards */}
      <Ribbon3D />

      {/* Subtle Dark Perspective Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none" />

      {/* Smooth Horizontal Swipe Carousel Track */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-start overflow-hidden py-4">
        <div 
          className="flex w-full h-full items-center will-change-transform"
          style={{
            transform: `translateX(calc(-${activeSlide * 100}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.45s cubic-bezier(0.2, 1, 0.3, 1)'
          }}
        >
          {services.map((svc, idx) => (
            <div 
              key={svc.id || idx}
              className="w-full flex-shrink-0 flex items-center justify-center px-4 sm:px-8 lg:px-12 pointer-events-auto"
            >
              <div className="w-full max-w-[1440px] flex justify-center">
                <ServiceCard
                  service={svc}
                  index={idx}
                  onContactClick={onOpenContact}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Minimal Dot Indicators for Slide Position */}
      <div className="relative z-20 w-full flex justify-center items-center gap-2 pb-6">
        {services.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === idx ? 'w-8 bg-brand-orange' : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to service 0${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};





