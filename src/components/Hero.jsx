import React from 'react';
import { heroContent, clientLogos } from '../data/fallbackContent';

export const Hero = () => {
  const logos = clientLogos;
  const hero = heroContent;
  return (
    <section className="relative w-full max-w-full bg-blueprint border-b border-gray-200 overflow-x-clip overflow-hidden text-black pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16">

      <div
        className="
          w-full
          max-w-[1440px]
          mx-auto
          px-4
          sm:px-8
          md:px-12
          relative
          min-h-[600px]
          sm:min-h-[700px]
          md:min-h-[760px]
          lg:min-h-[820px]
          flex
          flex-col
          justify-between
        "
      >

        {/* Primary Semantic SEO H1 for Crawlers & Screen Readers */}
        <h1 className="sr-only">
          {hero.headlineTop || "BOLD DESIGN"} THAT {hero.headlineBottom || "PERFORMS"}
        </h1>

        {/* HERO VISUAL */}
        <div className="relative w-full flex flex-col items-center justify-center my-auto">

          <div className="w-full text-center select-none relative z-10">

            {/* =========================
                BOLD DESIGN (Full-Width Responsive SVG)
            ========================== */}
            <div className="w-full relative z-10 select-none">
              <svg 
                viewBox="0 0 1050 110" 
                className="w-full h-auto block overflow-visible" 
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <text
                  x="50%"
                  y="84%"
                  textAnchor="middle"
                  className="font-display-giant italic font-black fill-[#FF4600]"
                  style={{ fontSize: '118px', letterSpacing: '-0.04em' }}
                >
                  {hero.headlineTop || "BOLD DESIGN"}
                </text>
              </svg>
            </div>


            {/* =========================
                CENTRAL COMPOSITION
            ========================== */}
            <div
              className="
                relative
                w-full
                max-w-[1000px]
                mx-auto
                h-[320px]
                xs:h-[350px]
                sm:h-[400px]
                md:h-[430px]
                lg:h-[470px]
                mt-1
                sm:mt-4
                lg:mt-6
              "
            >

              {/* =========================
                  STRATEGY IS CHEAPER
                  LEFT / UPPER
              ========================== */}
              <div
                className="
                  absolute
                  left-[2%]
                  sm:left-[5%]
                  lg:left-[6%]
                  top-[24%]
                  sm:top-[22%]
                  lg:top-[22%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div className="font-black text-[10px] xs:text-xs sm:text-sm md:text-base text-black uppercase tracking-tight leading-tight">

                  <span>{hero.badgeStrategy || "STRATEGY IS"}</span>

                  <div className="relative inline-block mt-0.5">

                    <span className="relative z-10 px-1">
                      {hero.badgeCheaper || "CHEAPER"}
                    </span>

                    <svg
                      className="
                        absolute
                        -inset-x-1.5
                        -inset-y-1
                        w-[calc(100%+12px)]
                        h-[calc(100%+8px)]
                        pointer-events-none
                        z-0
                      "
                      viewBox="0 0 100 45"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M8,22 C12,8 85,4 94,18 C99,28 78,39 45,41 C18,42 4,32 6,20 C8,10 35,6 60,6"
                        stroke="#FF4600"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </div>
                </div>
              </div>


              {/* =========================
                  IDENTITY / EXPERIENCE / MOTION
                  LEFT / LOWER
              ========================== */}
              <div
                className="
                  absolute
                  left-[2%]
                  sm:left-[5%]
                  lg:left-[6%]
                  top-[52%]
                  sm:top-[48%]
                  lg:top-[48%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div
                  className="
                    font-black
                    text-[10px]
                    xs:text-xs
                    sm:text-sm
                    md:text-base
                    text-black
                    uppercase
                    tracking-tight
                    leading-[125%]
                  "
                >

                  <div>{hero.badgeIdentity || "IDENTITY ·"}</div>
                  <div>{hero.badgeExperience || "EXPERIENCE ·"}</div>

                  <div className="relative inline-block">
                    <span>{hero.badgeMotion || "MOTION ·"}</span>

                    <svg
                      className="w-[82%] h-2 sm:h-2.5 -mt-0.5 pointer-events-none"
                      viewBox="0 0 80 10"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,5 Q20,2 40,5 T78,5"
                        stroke="#FF4600"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>


              {/* =========================
                  THAT
                  RIGHT OF STATUE NECK
              ========================== */}
              <div
                className="
                  absolute
                  left-[56%]
                  sm:left-[56%]
                  lg:left-[56%]
                  top-[44%]
                  sm:top-[42%]
                  lg:top-[42%]
                  -translate-y-1/2
                  z-10
                  pointer-events-none
                  select-none
                "
              >
                <span
                  className="
                    font-condensed-bold
                    text-brand-orange
                    text-5xl
                    xs:text-6xl
                    sm:text-7xl
                    md:text-8xl
                    lg:text-[115px]
                    xl:text-[130px]
                    font-black
                    uppercase
                    tracking-tight
                    leading-none
                    block
                    whitespace-nowrap
                  "
                >
                  {hero.badgeThat || "THAT"}
                </span>
              </div>


              {/* =========================
                  STATUE
                  CENTERED OVERLAPPING
              ========================== */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[46%]
                  -translate-x-1/2
                  -translate-y-1/2
                  z-20
                  w-[185px]
                  xs:w-[205px]
                  sm:w-[270px]
                  md:w-[320px]
                  lg:w-[380px]
                  h-full
                  flex
                  items-center
                  justify-center
                  pointer-events-none
                  select-none
                "
              >
                <img
                  src="/assets/herostatue.png"
                  alt="Upthrust Holographic Classical Statue"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="740"
                  height="780"
                  className="
                    w-full
                    h-full
                    object-contain
                    max-h-[210px]
                    xs:max-h-[235px]
                    sm:max-h-[300px]
                    md:max-h-[350px]
                    lg:max-h-[400px]
                    drop-shadow-2xl
                    pointer-events-auto
                  "
                />
              </div>


              {/* =========================
                  COMFORTABLE IS EXPENSIVE
                  RIGHT / UPPER
              ========================== */}
              <div
                className="
                  absolute
                  right-[2%]
                  sm:right-[5%]
                  lg:right-[6%]
                  top-[20%]
                  sm:top-[18%]
                  lg:top-[18%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div
                  className="
                    font-black
                    text-[10px]
                    xs:text-xs
                    sm:text-sm
                    md:text-base
                    text-black
                    uppercase
                    tracking-tight
                    leading-tight
                  "
                >

                  <div>{hero.badgeComfortable || "COMFORTABLE"}</div>

                  <div className="relative inline-block mt-0.5">

                    <span>{hero.badgeExpensive || "IS EXPENSIVE"}</span>

                    <svg
                      className="w-full h-2 sm:h-2.5 -mt-0.5 pointer-events-none"
                      viewBox="0 0 120 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M2,6 Q15,2 30,6 T60,6 T90,6 T118,6"
                        stroke="#FF4600"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>

                  </div>
                </div>
              </div>


              {/* =========================
                  BLUEPRINT CIRCLE
              ========================== */}
              <div
                className="
                  absolute
                  right-[-2%]
                  sm:right-[2%]
                  bottom-[-4%]
                  sm:bottom-[0%]
                  pointer-events-none
                  opacity-30
                  sm:opacity-40
                  w-32
                  xs:w-40
                  sm:w-52
                  md:w-64
                  h-32
                  xs:h-40
                  sm:h-52
                  md:h-64
                  z-0
                "
              >
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="0.75"
                  className="w-full h-full"
                >
                  <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="30" />
                  <circle cx="50" cy="50" r="15" />

                  <line x1="5" y1="50" x2="95" y2="50" />
                  <line x1="50" y1="5" x2="50" y2="95" />

                  <path
                    d="M20 20 L80 80 M20 80 L80 20"
                    strokeWidth="0.4"
                  />
                </svg>
              </div>

            </div>


            {/* =========================
                PERFORMS (Full-Width Responsive SVG)
            ========================== */}
            <div className="w-full relative z-30 select-none -mt-8 xs:-mt-10 sm:-mt-14 md:-mt-18 lg:-mt-22">
              <svg 
                viewBox="0 0 880 110" 
                className="w-full h-auto block overflow-visible" 
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <text
                  x="50%"
                  y="85%"
                  textAnchor="middle"
                  className="font-display-giant italic font-black fill-[#FF4600]"
                  style={{ fontSize: '128px', letterSpacing: '-0.04em' }}
                >
                  {hero.headlineBottom || "PERFORMS"}
                </text>
              </svg>
            </div>

          </div>
        </div>


        {/* =========================
            TRUST BAR
        ========================== */}
        <div
          className="
            w-full
            mt-12
            pt-8
            border-t
            border-gray-300/80
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div
            className="
              flex
              items-center
              gap-4
              text-left
              border-r-0
              md:border-r
              border-gray-300
              pr-0
              md:pr-8
            "
          >
            <span className="font-black text-2xl sm:text-3xl text-black">
              {hero.trustCount || "100+"}
            </span>

            <p className="text-xs text-gray-700 font-medium leading-tight max-w-[130px]">
              {hero.trustText || "Brands trusted us to define how they're seen."}
            </p>
          </div>


          <div
            className="
              flex-1
              flex
              flex-wrap
              items-center
              justify-center
              md:justify-end
              gap-6
              sm:gap-10
              lg:gap-14
              opacity-85
            "
          >
            {logos.map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className="
                  font-black
                  text-sm
                  sm:text-base
                  md:text-lg
                  tracking-widest
                  uppercase
                  text-black
                  hover:text-brand-orange
                  transition-colors
                  cursor-default
                "
                title={logo.label}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};