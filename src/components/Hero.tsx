import React from 'react';
import { HeroVisual } from './HeroVisual';
import { AedriaIsotype } from './AedriaIsotype';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreProjects?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#090A0F]"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 aedria-radial-subtle pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9065F5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 aedria-grid-lines opacity-40 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Editorial Headline & Messaging */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
          
          {/* Top Label / Studio Identifier with subtle isotype mark */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#171923]/90 border border-white/10 text-xs text-[#A3A1AF] font-mono tracking-wider animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#9065F5]" />
            <span className="text-[#F3F1F7] font-semibold">DIGITAL STUDIO</span>
            <span className="text-white/30">/</span>
            <span>BUENOS AIRES · GLOBAL</span>
          </div>

          {/* Master Headline: Words staggered */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.4rem] font-bold font-display text-[#F3F1F7] leading-[1.08] tracking-tight text-balance">
            Las ideas merecen una presencia{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#9065F5] via-[#B39AFF] to-[#C9B6FF] bg-clip-text text-transparent font-extrabold">
                extraordinaria.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#9065F5] to-transparent opacity-80" />
            </span>
          </h1>

          {/* Subtitle / Value proposition */}
          <p className="text-base sm:text-lg md:text-xl text-[#A3A1AF] max-w-xl font-normal leading-relaxed text-balance">
            Diseñamos y desarrollamos experiencias digitales que conectan marcas con personas. 
            Estrategia visual, tecnología de punta y atención obsesiva al detalle.
          </p>

          {/* CTAs Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <button
              type="button"
              onClick={() => {
                scrollTo('projects');
                if (onExploreProjects) onExploreProjects();
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#9065F5] hover:bg-[#8050e6] shadow-[0_0_28px_rgba(144,101,245,0.35)] hover:shadow-[0_0_36px_rgba(144,101,245,0.5)] rounded-xl transition-all duration-300 active:scale-[0.98] group"
            >
              <span>Explorar proyectos</span>
              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                scrollTo('contact');
                if (onContactClick) onContactClick();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-wide text-[#F3F1F7] bg-[#171923] hover:bg-[#1f2230] border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 active:scale-[0.98]"
            >
              <span>Hablemos de tu idea</span>
            </button>
          </div>

          {/* Studio Metrics / Editorial proof strip */}
          <div className="pt-4 border-t border-white/10 w-full max-w-lg grid grid-cols-3 gap-4 text-left">
            <div>
              <span className="block font-display font-bold text-lg sm:text-xl text-[#F3F1F7] tabular-nums">100%</span>
              <span className="text-xs text-[#A3A1AF]">Código Propio</span>
            </div>
            <div>
              <span className="block font-display font-bold text-lg sm:text-xl text-[#F3F1F7] tabular-nums">&lt; 0.8s</span>
              <span className="text-xs text-[#A3A1AF]">Velocidad Carga</span>
            </div>
            <div>
              <span className="block font-display font-bold text-lg sm:text-xl text-[#9065F5] tabular-nums">0%</span>
              <span className="text-xs text-[#A3A1AF]">Plantillas</span>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual Master Kinetic Element */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
          {/* Kinetic Canvas Sculpture */}
          <div className="relative w-full aspect-square max-w-[480px]">
            <HeroVisual className="w-full h-full" />
            
            {/* Center Floating Isotype Hologram Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-[#11121A]/70 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center gap-2 pointer-events-none">
              <AedriaIsotype size={44} showGlow />
              <span className="font-display text-[10px] tracking-[0.25em] text-[#B39AFF] uppercase font-bold">
                AEDRIA
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full z-10 pt-4 flex items-center justify-between text-xs text-[#A3A1AF]">
        <button
          type="button"
          onClick={() => scrollTo('marquee')}
          className="group flex items-center gap-2 hover:text-[#F3F1F7] transition-colors focus-visible:outline-none"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#9065F5] flex items-center justify-center transition-colors">
            <ArrowDown size={13} className="text-[#9065F5] animate-bounce" />
          </span>
          <span className="tracking-widest uppercase font-mono text-[11px]">SCROLL PARA DESCUBRIR</span>
        </button>

        <span className="font-mono text-[11px] text-[#A3A1AF]/60 hidden sm:inline-block">
          BUILT WITH INTENTION
        </span>
      </div>

    </section>
  );
};
