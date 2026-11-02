import React, { useRef, useState } from 'react';
import { AedriaIsotype } from './AedriaIsotype';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onActionClick?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onActionClick }) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    setBtnOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const handleClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    if (onActionClick) onActionClick();
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#090A0F] border-b border-white/10 overflow-hidden flex items-center justify-center">
      {/* Background radial halo & giant abstract A motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="w-[600px] h-[600px] bg-[#9065F5]/10 rounded-full blur-[160px]" />
        
        {/* Giant Monolith Isotype Silhouette in the background */}
        <div className="absolute opacity-[0.06] transform scale-[2.8] sm:scale-[3.5] rotate-3 transition-transform duration-1000">
          <AedriaIsotype size={260} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-8">
        
        {/* Minimalist studio label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171923] border border-white/10 text-xs font-mono text-[#B39AFF] tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9065F5]" />
          <span>INICIAR PROYECTO CON AEDRIA</span>
        </div>

        {/* Master Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.08] text-balance">
          Tu próxima gran idea puede{' '}
          <span className="bg-gradient-to-r from-[#9065F5] via-[#B39AFF] to-[#FFFFFF] bg-clip-text text-transparent">
            empezar acá.
          </span>
        </h2>

        {/* Subtitle with generous whitespace */}
        <p className="text-base sm:text-lg md:text-xl text-[#A3A1AF] font-normal leading-relaxed max-w-xl mx-auto text-balance">
          Contanos qué estás imaginando. Nosotros te ayudamos a transformarlo en una experiencia digital contemporánea, funcional y con identidad propia.
        </p>

        {/* Magnetic Button */}
        <div className="pt-4 flex justify-center">
          <button
            ref={buttonRef}
            type="button"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
              transform: `translate3d(${btnOffset.x}px, ${btnOffset.y}px, 0)`,
              transition: btnOffset.x === 0 ? 'transform 0.4s ease-out' : 'transform 0.1s ease-out',
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm sm:text-base font-semibold tracking-wide text-white bg-[#9065F5] hover:bg-[#8050e6] shadow-[0_0_35px_rgba(144,101,245,0.4)] hover:shadow-[0_0_50px_rgba(144,101,245,0.6)] border border-[#B39AFF]/30 transition-all duration-300 active:scale-[0.98] group cursor-pointer"
          >
            <span>Hablemos de tu proyecto</span>
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

      </div>
    </section>
  );
};
