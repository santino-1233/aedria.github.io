import React from 'react';

const words = [
  'DISEÑO DIGITAL',
  'CREATIVIDAD',
  'DESARROLLO WEB',
  'INNOVACIÓN',
  'EXPERIENCIAS DIGITALES',
];

export const Marquee: React.FC = () => {
  return (
    <section
      id="marquee"
      className="relative w-full py-8 sm:py-10 bg-[#11121A] border-y border-white/10 overflow-hidden select-none"
      aria-label="Manifiesto y disciplinas de AEDRIA"
    >
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#11121A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#11121A] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div className="flex w-max animate-marquee">
        {/* Sequence 1 */}
        <div className="flex items-center shrink-0 space-x-8 sm:space-x-12 px-4">
          {words.map((word, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#F3F1F7]/85 hover:text-white transition-colors">
                {word}
              </span>
              {/* Símbolo geométrico violeta */}
              <span className="inline-flex items-center justify-center text-[#9065F5]" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
                </svg>
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Sequence 2 for continuous loop */}
        <div className="flex items-center shrink-0 space-x-8 sm:space-x-12 px-4" aria-hidden="true">
          {words.map((word, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#F3F1F7]/85 hover:text-white transition-colors">
                {word}
              </span>
              <span className="inline-flex items-center justify-center text-[#9065F5]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
                </svg>
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
