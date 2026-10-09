import React from 'react';
import { heroContent, clientLogos } from '../data/fallbackContent';

/* ------------------------------------------------------------------
   Perspective headline
   direction="top"    -> wide at top, narrows toward the statue (BOLD DESIGN)
   direction="bottom" -> narrow at top, widens downward (PERFORMS)
------------------------------------------------------------------- */
const PerspectiveHeadline = ({ text, viewW, fontSize, mobilePct, desktopPct, direction }) => {
  const angle = direction === 'top' ? -41 : 41;
  return (
    <div
      className="mx-auto select-none w-[var(--wm)] md:w-[var(--wd)]"
      style={{
        '--wm': `${mobilePct}%`,
        '--wd': `${desktopPct}%`,
        transform: `perspective(40cqw) rotateX(${angle}deg) scaleY(1.3)`,
        transformOrigin: '50% 50%',
      }}
    >
      <svg
        viewBox={`0 0 ${viewW} 110`}
        className="w-full h-auto block overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text
          x={viewW / 2}
          y="84%"
          textAnchor="middle"
          textLength={viewW - 10}
          lengthAdjust="spacingAndGlyphs"
          className="font-display-giant italic font-black fill-[#FF4600]"
          style={{ fontSize: `${fontSize}px` }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

/* ------------------------------------------------------------------
   Side labels
------------------------------------------------------------------- */
const StrategyBadge = ({ hero }) => (
  <div className="font-black text-black uppercase tracking-tight leading-tight">
    {/* <span>{hero.badgeStrategy || 'STRATEGY IS'}</span> */}
    <span className="block">{hero.badgeStrategy || 'STRATEGY IS'}</span>
    <div className="relative inline-block mt-0.5">
      <span className="relative z-10 px-1">{hero.badgeCheaper || 'CHEAPER'}</span>
      <svg
        className="absolute -inset-x-1.5 -inset-y-1 w-[calc(100%+12px)] h-[calc(100%+8px)] pointer-events-none z-0"
        viewBox="0 0 100 45"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
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
);

const ListBadge = ({ hero }) => (
  <div className="font-black text-black uppercase tracking-tight leading-[125%]">
    <div>{hero.badgeIdentity || 'IDENTITY ·'}</div>
    <div>{hero.badgeExperience || 'EXPERIENCE ·'}</div>
    <div className="relative inline-block">
      <span>{hero.badgeMotion || 'MOTION ·'}</span>
      <svg
        className="w-[82%] h-1.5 md:h-2 -mt-0.5 pointer-events-none block"
        viewBox="0 0 80 10"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M2,5 Q20,2 40,5 T78,5" stroke="#FF4600" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

const ComfortBadge = ({ hero }) => (
  <div className="font-black text-black uppercase tracking-tight leading-tight">
    <div>{hero.badgeComfortable || 'COMFORTABLE'}</div>
    <div className="relative inline-block mt-0.5">
      <span>{hero.badgeExpensive || 'IS EXPENSIVE'}</span>
      <svg
        className="w-full h-1.5 md:h-2 -mt-0.5 pointer-events-none block"
        viewBox="0 0 120 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
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
);

/* label text size: scales with the stage (cqw) so it fits at 375 / 768 / 1440 */
const LABEL_SIZE = 'text-[clamp(8.5px,2.75cqw,12px)] md:text-[clamp(11px,1.7cqw,22px)]';

/* ------------------------------------------------------------------
   HERO
------------------------------------------------------------------- */
export const Hero = () => {
  const logos = clientLogos;
  const hero = heroContent;

  return (
    <section className="relative w-full max-w-full bg-blueprint border-b border-gray-200 overflow-x-clip overflow-hidden text-black pt-6 pb-10 sm:pt-10 sm:pb-14 lg:pt-14 lg:pb-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 relative">

        <h1 className="sr-only">
          {hero.headlineTop || 'BOLD DESIGN'} THAT {hero.headlineBottom || 'PERFORMS'}
        </h1>

        {/* STAGE
            mobile  : 343 x 310 composition
            md & up : 713 x 500 composition (measured from your reference) */}
        <div
          className="
            relative w-full max-w-[1280px] mx-auto
            [container-type:inline-size]
            aspect-[343/310] md:aspect-[713/500]
          "
        >
          {/* BOLD DESIGN (behind statue) */}
          <div className="absolute inset-x-0 top-[1%] md:top-[2%] z-10">
            <PerspectiveHeadline
              text={hero.headlineTop || 'BOLD DESIGN'}
              viewW={1050}
              fontSize={118}
              mobilePct={94}
              desktopPct={92}
              direction="top"
            />
          </div>

          {/* THAT (behind statue so the "T" is covered) */}
          <div
            className="
              absolute z-[15] pointer-events-none select-none
              top-[36%] right-[5%]
              md:right-auto md:left-[56.5%] md:top-[36%]
            "
          >
            <span
              className="
                font-condensed-bold text-brand-orange font-black uppercase
                tracking-tight leading-none block whitespace-nowrap
                text-[14cqw] md:text-[9.6cqw]
              "
            >
              {hero.badgeThat || 'THAT'}
            </span>
          </div>

          {/* BLUEPRINT CIRCLE */}
          <div className="absolute z-0 pointer-events-none opacity-30 md:opacity-40 right-[-2%] bottom-0 w-[40%] md:w-[38%] aspect-square">
            <svg viewBox="0 0 100 100" fill="none" stroke="#000" strokeWidth="0.75" className="w-full h-full" aria-hidden="true">
              <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="15" />
              <line x1="5" y1="50" x2="95" y2="50" />
              <line x1="50" y1="5" x2="50" y2="95" />
              <path d="M20 20 L80 80 M20 80 L80 20" strokeWidth="0.4" />
            </svg>
          </div>

          {/* STATUE: fixed box, so it can never grow into the labels or PERFORMS.
              Tune: top / width / height */}
          <div
            className="
              absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none
              top-[8%]  w-[52%] h-[73%]
              md:top-[12%] md:w-[37%] md:h-[67%]
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
              className="w-full h-full object-contain object-center drop-shadow-2xl"
            />
          </div>

          {/* PERFORMS: only touches the pedestal.
              Tune: top (bigger number = lower = less overlap) */}
          <div className="absolute inset-x-0 top-[75%] md:top-[74%] z-30">
            <PerspectiveHeadline
              text={hero.headlineBottom || 'PERFORMS'}
              viewW={880}
              fontSize={128}
              mobilePct={88}
              desktopPct={84}
              direction="bottom"
            />
          </div>

          {/* FLOATING LABELS: same layout on every screen, sized by stage width */}
          <div className={`absolute z-30 select-none left-[3%] top-[30%] md:left-[20%] md:top-[37%] ${LABEL_SIZE}`}>
            <StrategyBadge hero={hero} />
          </div>

          <div className={`absolute z-30 select-none right-[3%] top-[17%] md:right-[2.5%] md:top-[29%] ${LABEL_SIZE}`}>
            <ComfortBadge hero={hero} />
          </div>

          <div className={`absolute z-30 select-none left-[3%] top-[50%] md:left-[5%] md:top-[51%] ${LABEL_SIZE}`}>
            <ListBadge hero={hero} />
          </div>
        </div>

        {/* TRUST BAR */}
        <div
          className="
            w-full mt-8 md:mt-12 pt-6 md:pt-8
            border-t border-gray-300/80
            flex flex-col md:flex-row
            items-start md:items-center justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-4 text-left md:border-r border-gray-300 md:pr-8">
            <span className="font-black text-2xl sm:text-3xl text-black">
              {hero.trustCount || '100+'}
            </span>
            <p className="text-xs text-gray-700 font-medium leading-tight max-w-[130px]">
              {hero.trustText || "Brands trusted us to define how they're seen."}
            </p>
          </div>

          <div
            className="
              w-full md:flex-1
              grid grid-cols-3 gap-x-4 gap-y-5 place-items-start
              sm:flex sm:flex-wrap sm:items-center sm:justify-center md:justify-end
              sm:gap-x-10 lg:gap-x-14
              opacity-85
            "
          >
            {logos.map((logo, index) => (
              <span
                key={`${logo.name}-${index}`}
                className="
                  font-black text-sm sm:text-base md:text-lg
                  tracking-widest uppercase text-black
                  hover:text-brand-orange transition-colors cursor-default
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