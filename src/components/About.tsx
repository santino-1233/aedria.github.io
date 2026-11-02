import React, { useState } from 'react';
import { AedriaIsotype } from './AedriaIsotype';
import { ArrowUpRight, Compass, Code2, Sparkles, Check } from 'lucide-react';

export const About: React.FC = () => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      title: 'Estrategia & Intención',
      tag: 'STRATEGY',
      description: 'Antes de tocar una sola línea de diseño o código, entendemos a fondo el modelo de negocio, el cliente objetivo y el valor diferencial que te distingue.',
      metric: '01 / Claridad'
    },
    {
      title: 'Diseño Sin Concesiones',
      tag: 'DESIGN',
      description: 'Construimos identidades digitales memorables. Tipografía con carácter, composiciones asimétricas balanceadas y espacios negativos que permiten respirar al contenido.',
      metric: '02 / Identidad'
    },
    {
      title: 'Ingeniería de Precisión',
      tag: 'DEVELOPMENT',
      description: 'Desarrollo moderno en React y TypeScript con foco en tiempos de carga mínimos, accesibilidad universal y arquitecturas limpias y escalables.',
      metric: '03 / Ejecución'
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#090A0F] overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#9065F5]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-[400px] h-[400px] bg-[#B39AFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
            01. ABOUT AEDRIA
          </span>
          <span className="h-[1px] w-12 bg-[#9065F5]/40" />
          <div className="text-xs font-mono tracking-widest text-[#A3A1AF] hidden sm:flex items-center gap-2">
            <span>DESIGN</span>
            <span>·</span>
            <span>STRATEGY</span>
            <span>·</span>
            <span>DEVELOPMENT</span>
          </div>
        </div>

        {/* Asymmetric Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Manifesto & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] leading-[1.15] tracking-tight text-balance">
              No hacemos páginas por hacer.{' '}
              <span className="bg-gradient-to-r from-[#F3F1F7] via-[#B39AFF] to-[#9065F5] bg-clip-text text-transparent">
                Creamos experiencias con intención.
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed">
              <p>
                Cada marca tiene algo valioso que contar. Nuestro trabajo en <strong className="text-[#F3F1F7] font-semibold">AEDRIA</strong> consiste en transformar esa idea en una experiencia digital clara, atractiva y funcional.
              </p>
              <p>
                Combinamos diseño, tecnología y estrategia para construir sitios web que no solo se vean bien, sino que también tengan un propósito comercial y una identidad inconfundible. Rechazamos el trabajo genérico y las fórmulas predecibles.
              </p>
            </div>

            {/* Interactive Pillar Selector (Segmented Cards) */}
            <div className="pt-4 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3A1AF]">
                Nuestros tres pilares de trabajo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pillars.map((pillar, idx) => {
                  const isActive = activePillar === idx;
                  return (
                    <button
                      key={pillar.title}
                      type="button"
                      onClick={() => setActivePillar(idx)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#171923] border-[#9065F5] shadow-[0_0_20px_rgba(144,101,245,0.18)]'
                          : 'bg-[#11121A]/80 border-white/10 hover:border-white/20 hover:bg-[#171923]/50'
                      }`}
                    >
                      <span className="text-[11px] font-mono text-[#9065F5] block mb-1">
                        {pillar.metric}
                      </span>
                      <span className="font-display font-semibold text-sm text-[#F3F1F7] block">
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Description Box for Active Pillar */}
              <div className="p-5 rounded-2xl bg-[#11121A] border border-white/10 text-sm text-[#A3A1AF] leading-relaxed flex items-start gap-3.5">
                <div className="w-2 h-2 rounded-full bg-[#9065F5] mt-2 shrink-0 animate-pulse" />
                <div>
                  <span className="text-xs font-mono font-semibold text-[#B39AFF] uppercase tracking-wider block mb-1">
                    {pillars[activePillar].tag} FOCUS
                  </span>
                  <p>{pillars[activePillar].description}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Large Isotype Composition & Graphic Lines */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#11121A] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
              
              {/* Subtle background radial & grid lines */}
              <div className="absolute inset-0 aedria-radial-subtle opacity-70" />
              <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-white/10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-white/10 pointer-events-none" />

              {/* Central Graphic Composition */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                
                {/* Large Isotype with subtle hover scaling */}
                <div className="relative p-6 rounded-full bg-[#171923]/80 border border-white/10 shadow-[0_0_50px_rgba(144,101,245,0.2)] group transition-transform duration-500 hover:scale-105">
                  <AedriaIsotype size={120} showGlow />
                  {/* Surrounding orbital line */}
                  <div className="absolute inset-[-14px] rounded-full border border-[#9065F5]/30 border-dashed animate-spin-slow pointer-events-none" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl text-[#F3F1F7] tracking-wider">
                    AEDRIA
                  </h3>
                  <p className="font-mono text-xs tracking-widest text-[#B39AFF] uppercase">
                    DIGITAL STUDIO · 2026
                  </p>
                </div>

                <p className="text-xs text-[#A3A1AF] leading-relaxed max-w-xs mx-auto">
                  “El diseño no es lo que se ve y se siente. El diseño es cómo funciona y qué transmite al instante.”
                </p>

                {/* Studio Quality Badges */}
                <div className="pt-4 border-t border-white/10 w-full flex items-center justify-around text-xs text-[#A3A1AF]">
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9065F5]" />
                    <span>Bespoke UI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9065F5]" />
                    <span>Sin Templates</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check size={14} className="text-[#9065F5]" />
                    <span>Full Stack</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
