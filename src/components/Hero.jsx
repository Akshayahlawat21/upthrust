import React from 'react';
import { heroContent, clientLogos } from '../data/fallbackContent';

export const Hero = () => {
  const logos = clientLogos;
  const hero = heroContent;
  return (
    <section className="relative w-full bg-blueprint border-b border-gray-200 overflow-hidden text-black pt-8 pb-12 lg:pt-14 lg:pb-16">

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative min-h-[640px] lg:min-h-[820px] flex flex-col justify-between">

        {/* HERO VISUAL */}
        <div className="relative w-full flex flex-col items-center justify-center my-auto">

          <div className="w-full text-center select-none relative z-10">

            {/* =========================
                BOLD DESIGN
            ========================== */}
            <h1
              className="
                font-display-giant
                text-brand-orange
                text-[10.5vw]
                xs:text-[11vw]
                sm:text-[68px]
                md:text-[92px]
                lg:text-[140px]
                xl:text-[160px]
                tracking-tight
                leading-none
                italic
                font-black
                relative
                z-10
                block
                whitespace-nowrap
              "
            >
              {hero.headlineTop || "BOLD DESIGN"}
            </h1>


            {/* =========================
                CENTRAL COMPOSITION
            ========================== */}
            <div
              className="
                relative
                w-full
                max-w-[1000px]
                mx-auto
                h-[340px]
                xs:h-[350px]
                sm:h-[400px]
                md:h-[430px]
                lg:h-[450px]
                mt-2
                xs:mt-4
                sm:mt-6
                lg:mt-8
              "
            >

              {/* =========================
                  STRATEGY IS CHEAPER
                  LEFT / MIDDLE
              ========================== */}
              <div
                className="
                  absolute
                  left-[3%]
                  xs:left-[4%]
                  sm:left-[5%]
                  md:left-[7%]
                  lg:left-[8%]
                  top-[32%]
                  sm:top-[22%]
                  md:top-[25%]
                  lg:top-[28%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div className="font-black text-[9px] xs:text-[10px] sm:text-sm md:text-base text-black uppercase tracking-tight leading-tight">

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
                  LEFT / CENTER
              ========================== */}
              <div
                className="
                  absolute
                  left-[3%]
                  xs:left-[4%]
                  sm:left-[5%]
                  md:left-[7%]
                  lg:left-[8%]
                  top-[60%]
                  sm:top-[52%]
                  md:top-[53%]
                  lg:top-[53%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div
                  className="
                    font-black
                    text-[9px]
                    xs:text-[10px]
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
                  RIGHT OF STATUE
              ========================== */}
              <div
                className="
                  absolute
                  left-[62%]
                  sm:left-[59%]
                  md:left-[59%]
                  lg:left-[59%]
                  top-[54%]
                  sm:top-[48%]
                  md:top-[49%]
                  lg:top-[50%]
                  -translate-y-1/2
                  z-0
                  pointer-events-none
                  select-none
                "
              >
                <span
                  className="
                    font-condensed-bold
                    text-brand-orange
                    text-[36px]
                    xs:text-[42px]
                    sm:text-[64px]
                    md:text-[82px]
                    lg:text-[110px]
                    xl:text-[125px]
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
                  SMALLER + CENTERED
              ========================== */}
              <div
                className="
                  absolute
                  left-1/2
                  top-[48%]
                  sm:top-[48%]
                  md:top-[47%]
                  lg:top-[46%]
                  -translate-x-1/2
                  -translate-y-1/2
                  z-20
                  w-[145px]
                  xs:w-[155px]
                  sm:w-[230px]
                  md:w-[290px]
                  lg:w-[370px]
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
                    max-h-[170px]
                    xs:max-h-[180px]
                    sm:max-h-[270px]
                    md:max-h-[320px]
                    lg:max-h-[390px]
                    drop-shadow-2xl
                    pointer-events-auto
                  "
                />
              </div>


              {/* =========================
                  COMFORTABLE IS EXPENSIVE
                  RIGHT / MIDDLE
              ========================== */}
              <div
                className="
                  absolute
                  right-[3%]
                  xs:right-[4%]
                  sm:right-[5%]
                  md:right-[7%]
                  lg:right-[8%]
                  top-[30%]
                  sm:top-[21%]
                  md:top-[24%]
                  lg:top-[25%]
                  z-30
                  text-left
                  select-none
                "
              >
                <div
                  className="
                    font-black
                    text-[9px]
                    xs:text-[10px]
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
                  sm:right-[0%]
                  bottom-[0%]
                  pointer-events-none
                  opacity-25
                  sm:opacity-40
                  w-28
                  sm:w-44
                  md:w-56
                  h-28
                  sm:h-44
                  md:h-56
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
                PERFORMS
                LOWER + OVERLAPPING
            ========================== */}
            <div
              className="
                w-full
                text-center
                relative
                z-30
                -mt-8
                xs:-mt-10
                sm:-mt-16
                md:-mt-20
                lg:-mt-24
                select-none
              "
            >
              <span
                className="
                  font-display-giant
                  text-brand-orange
                  text-[10.5vw]
                  xs:text-[11vw]
                  sm:text-[68px]
                  md:text-[92px]
                  lg:text-[140px]
                  xl:text-[160px]
                  tracking-tight
                  leading-none
                  italic
                  font-black
                  block
                  whitespace-nowrap
                "
              >
                {hero.headlineBottom || "PERFORMS"}
              </span>
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