import React from 'react';

export const ServiceCard = ({ service, onContactClick }) => {
  const { title, tag, subtitle, bullets, footnote, card_theme } = service;

  // Render high-fidelity Bento board matching Figma Image 1
  const renderBentoMockup = () => {
    switch (card_theme) {
      case 'strategy':
        return (
          <div className="w-[492px] max-w-full bg-[#FFFFFF] rounded-2xl p-2.5 shadow-2xl border border-gray-200/80 flex flex-col gap-2 select-none overflow-hidden text-left font-sans">
            {/* Top Grid Row (476px x 166px) */}
            <div className="grid grid-cols-12 gap-2 h-[166px]">
              {/* Box 1 (Col 6): Audience Personas Image */}
              <div className="col-span-6 h-full bg-[#FFF0EB] border border-[#FFD5C8] rounded-xl overflow-hidden shadow-xs flex items-center justify-center p-0.5">
                <img
                  src="/assets/bento/personas.webp"
                  alt="Audience Personas Framework"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top"
                />
              </div>

              {/* Box 2 (Col 3): Process Sketches Image */}
              <div className="col-span-3 h-full bg-[#FFFFFF] border border-gray-200 rounded-xl overflow-hidden shadow-xs flex items-center justify-center p-1">
                <img
                  src="/assets/bento/sketches.webp"
                  alt="Process & Concept Sketches"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Box 3 (Col 3): Typography Specimen Image */}
              <div className="col-span-3 h-full bg-[#FFFFFF] border border-gray-200 rounded-xl overflow-hidden shadow-xs flex items-center justify-center p-0.5">
                <img
                  src="/assets/bento/typography.webp"
                  alt="Typography Specimen"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>

            {/* Bottom Grid Row (476px x 150px) */}
            <div className="grid grid-cols-12 gap-2 h-[150px]">
              {/* Box 4 (Col 4): Key Takeaways Stickies Image */}
              <div className="col-span-4 h-full bg-[#FFFFFF] border border-gray-200 rounded-xl overflow-hidden shadow-xs flex items-center justify-center p-1">
                <img
                  src="/assets/bento/takeaways.webp"
                  alt="Key Takeaways Sticky Notes"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top"
                />
              </div>

              {/* Box 5 (Col 8): Cyble Vision Campaign Flow Image */}
              <div className="col-span-8 h-full bg-[#FFF0EB] border border-[#FFD5C8] rounded-xl overflow-hidden shadow-xs flex items-center justify-center p-0.5">
                <img
                  src="/assets/bento/cyble.webp"
                  alt="Cyble Vision Campaign Rollout"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>
          </div>
        );

      case 'brand':
        return (
          <div className="w-[492px] max-w-full bg-[#000000] rounded-2xl p-2.5 shadow-2xl border border-neutral-800 flex flex-col gap-2 select-none overflow-hidden text-left">
            {/* Top Section (Left: Image 3 + [Image 8 & Image 5], Right: Image 7 Accordion Laptop) */}
            <div className="grid grid-cols-12 gap-2 h-[210px]">
              {/* Left Column (Col 6): Image 3 (Top) + Image 8 & 5 (Bottom) */}
              <div className="col-span-6 flex flex-col gap-2 h-full justify-between">
                {/* Image 3: Team photo with turquoise 'A' */}
                <div className="w-full h-[115px] bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                  <img
                    src="/assets/service2/image3.webp"
                    alt="Brand Team Collaboration Strategy"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Sub-row: Image 8 and Image 5 */}
                <div className="grid grid-cols-12 gap-2 h-[87px]">
                  {/* Image 8 (Col 5): 3 dots (teal, purple, pink) */}
                  <div className="col-span-5 h-full bg-[#000000] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center p-1">
                    <img
                      src="/assets/service2/image8.webp"
                      alt="Brand Color Tokens"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Image 5 (Col 7): Purple card with Market Mapping / Tailored Hiring Strategy / Industry Expertise */}
                  <div className="col-span-7 h-full bg-[#7C5CFC] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                    <img
                      src="/assets/service2/image5.webp"
                      alt="Strategy & Expertise Framework"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column (Col 6): Image 7 (Folded 3D Accordion Device Mockup) */}
              <div className="col-span-6 h-full bg-[#E5E5E5] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service2/image7.webp"
                  alt="3D Interactive Digital Experience"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bottom Row: Image 6 (Pink brush stroke + teal swatch fan + black vertical pill card) */}
            <div className="w-full h-[105px] bg-transparent rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
              <img
                src="/assets/service2/image6.webp"
                alt="Brand Identity System & Swatches"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        );

      case 'product':
        return (
          <div className="w-[492px] max-w-full bg-[#000000] rounded-2xl p-2.5 shadow-2xl border border-neutral-800 flex flex-col gap-2 select-none overflow-hidden text-left">
            {/* Top Grid Row (3 cards: Laptop + Inter Poster + Tape Ribbon) */}
            <div className="grid grid-cols-12 gap-2 h-[160px]">
              {/* Left (Col 5): imag1 (Laptop on dark surface under pink spotlight) */}
              <div className="col-span-5 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service3/laptop.webp"
                  alt="Neatlogs Task Boards Interface"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle (Col 4): Inter Colour Palette Poster */}
              <div className="col-span-4 h-full bg-[#0D0D0D] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center p-0.5">
                <img
                  src="/assets/service3/inter_poster.webp"
                  alt="Inter Typography & Color Tokens"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Right (Col 3): image 5 (Neatlogs Tape Ribbon) */}
              <div className="col-span-3 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service3/tape_ribbon.webp"
                  alt="Neatlogs Tape Ribbon"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Grid Row (4 cards: Tablet + Squircles + Dashboard Mockup + Trace Panel) */}
            <div className="grid grid-cols-12 gap-2 h-[155px]">
              {/* Card 1 (Col 3): image 6 (Tablet angled view) */}
              <div className="col-span-3 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service3/tablet_view.webp"
                  alt="Neatlogs Tablet Interface"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 2 (Col 1): Stacked Colour Squircles */}
              <div className="col-span-1 h-full bg-[#000000] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center py-1">
                <img
                  src="/assets/service3/squircles.webp"
                  alt="Color Palette Swatches"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Card 3 (Col 6): Neon Neatlogs AI Dashboard Mockup */}
              <div className="col-span-6 h-full bg-[#000000] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service3/neatlogs_dashboard.webp"
                  alt="Neatlogs AI Dashboard Mockup"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card 4 (Col 2): Dark UI Trace Summary Panel */}
              <div className="col-span-2 h-full bg-[#0E0E0E] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center p-0.5">
                <img
                  src="/assets/service3/trace_panel.webp"
                  alt="Dark UI Trace Summary Panel"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        );

      case 'creative':
      default:
        return (
          <div className="w-[492px] max-w-full bg-[#fff] rounded-2xl p-2.5 shadow-2xl border border-neutral-800 flex flex-col gap-2 select-none overflow-hidden text-left">
            {/* Top Grid Row (Left: Stacked image3 & image6, Center: image8, Right: image9) */}
            <div className="grid grid-cols-12 gap-2 h-[160px]">
              {/* Left Sub-Column (Col 3): Two stacked cards */}
              <div className="col-span-3 flex flex-col gap-2 h-full justify-between">
                {/* Upper: image 3 (Hands holding blue booklet) */}
                <div className="w-full h-[74px] bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                  <img
                    src="/assets/service4/brochure.webp"
                    alt="Printed Brochure Collateral"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Lower: image 6 (Building facade billboard) */}
                <div className="w-full h-[74px] bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                  <img
                    src="/assets/service4/building_billboard.webp"
                    alt="Commercial Glass Facade Billboard"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Center (Col 4): image 8 (3 Wall Posters) */}
              <div className="col-span-4 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service4/wall_posters.webp"
                  alt="Street Wall Posters"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right (Col 5): image 9 (Cyble Billboard with palm trees) */}
              <div className="col-span-5 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service4/cyble_palm_billboard.webp"
                  alt="Cyble Billboard Installation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Grid Row (Left: image10, Center: image11, Right: image12) */}
            <div className="grid grid-cols-12 gap-2 h-[155px]">
              {/* Left (Col 5): image 10 (Shopify street billboard with pedestrian) */}
              <div className="col-span-5 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service4/shopify_billboard.webp"
                  alt="OOH Street Campaign Billboard"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Center (Col 3): image 11 (Street lightbox with cyclist) */}
              <div className="col-span-3 h-full bg-[#111111] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service4/pipeline_lightbox.webp"
                  alt="Urban Lightbox Ad Installation"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right (Col 4): image 12 (Multi-format recruitment campaign grid) */}
              <div className="col-span-4 h-full bg-[#0047FF] rounded-xl overflow-hidden border border-neutral-800/80 flex items-center justify-center">
                <img
                  src="/assets/service4/recruitment_grid.webp"
                  alt="Multi-channel Digital Campaign"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-[600px] lg:h-[760px] flex flex-col justify-center px-6 sm:px-12 lg:px-20 relative z-10 select-none py-10 lg:py-0">

      {/* Category Tag & Main Headline matching Figma Image 1 */}
      <div className="mb-6 lg:mb-10 text-left">
        <span className="font-mono text-xs font-bold tracking-widest text-gray-300 uppercase block mb-2 opacity-90">
          {tag || "WHAT CAN WE DO FOR YOU"}
        </span>
        <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-none font-sans">
          {title}
        </h2>
      </div>

      {/* Main 2-Column Row (Bento Mockup on Left + Content Block on Right) */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-14 xl:gap-20 w-full">

        {/* Left: Bento Showcase Card */}
        <div className="flex-shrink-0 w-full max-w-[480px] flex justify-center lg:justify-start">
          {renderBentoMockup()}
        </div>

        {/* Right: Copy + Bullet List + CONTACT Button */}
        <div className="w-full max-w-[540px] flex flex-col justify-between space-y-6 lg:space-y-7 text-left flex-shrink-0">

          {/* Subtitle Positioning Statement */}
          <p className="font-semibold text-lg sm:text-[21px] text-white leading-[140%] tracking-tight">
            {subtitle}
          </p>

          {/* Bullet Points with Clean Orange ✦ Star Bullet */}
          {bullets && bullets.length > 0 && (
            <div className="space-y-3.5">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#FF4200] font-black text-lg select-none flex-shrink-0">
                    ✦
                  </span>
                  <span className="font-semibold text-base sm:text-[19px] text-white leading-[140%] tracking-tight">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Footnote (if present) */}
          {footnote && (
            <p className="text-xs text-gray-400 italic bg-white/5 p-2 rounded">
              {footnote}
            </p>
          )}

          {/* CONTACT CTA Button matching Image 1 */}
          <div className="pt-2">
            <button
              onClick={() => onContactClick(service)}
              className="bg-white hover:bg-gray-100 text-[#FF4200] font-extrabold text-2xl sm:text-[30px] px-10 py-3 rounded-none shadow-2xl transition-transform active:scale-95 tracking-tight flex items-center justify-center"
              aria-label={`Contact us about ${title}`}
            >
              CONTACT
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
