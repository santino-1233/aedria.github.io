import React, { useState } from 'react';
import { processData, ProcessStep } from '../data/process';
import { Compass, Palette, Code2, Rocket, Clock, CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const icons = [
    <Compass key="compass" size={24} className="text-[#9065F5]" />,
    <Palette key="palette" size={24} className="text-[#B39AFF]" />,
    <Code2 key="code" size={24} className="text-[#9065F5]" />,
    <Rocket key="rocket" size={24} className="text-[#B39AFF]" />
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#090A0F] border-b border-white/10 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#9065F5]/6 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
              04. THE PROCESS
            </span>
            <span className="h-[1px] w-12 bg-[#9065F5]/40" />
            <span className="text-xs font-mono tracking-widest text-[#A3A1AF]">
              METODOLOGÍA DE TRABAJO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.12] text-balance">
            De la idea al resultado.
          </h2>

          <p className="text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed max-w-2xl">
            Un método transparente y sin sorpresas. Cuatro etapas claras diseñadas para convertir conceptos complejos en sitios web precisos y de alto impacto.
          </p>
        </div>

        {/* Timeline Grid: 4 Steps with connecting line */}
        <div className="relative">
          
          {/* Subtle horizontal connecting bar in desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#9065F5]/20 via-[#B39AFF]/40 to-[#9065F5]/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {processData.map((stage, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStep(idx)}
                  className={`group rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#171923] border-[#9065F5] shadow-[0_10px_35px_rgba(144,101,245,0.2)] -translate-y-1'
                      : 'bg-[#11121A] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Top Row: Milestone Node & Number */}
                    <div className="flex items-center justify-between">
                      {/* Luminous Node */}
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? 'bg-[#9065F5]/25 border-[#9065F5] shadow-[0_0_20px_rgba(144,101,245,0.4)]'
                            : 'bg-[#171923] border-white/10 group-hover:border-[#9065F5]/40'
                        }`}
                      >
                        {icons[idx]}
                      </div>

                      {/* Large Stage Number */}
                      <span
                        className={`font-display text-4xl font-bold transition-colors duration-300 tabular-nums ${
                          isActive ? 'text-[#9065F5]' : 'text-white/20 group-hover:text-white/40'
                        }`}
                      >
                        {stage.number}
                      </span>
                    </div>

                    {/* Stage Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#B39AFF] uppercase tracking-wider">
                          {stage.step}
                        </span>
                        <span className="text-white/20">·</span>
                        <span className="text-[11px] font-mono text-[#A3A1AF] flex items-center gap-1">
                          <Clock size={11} /> {stage.timeframe}
                        </span>
                      </div>

                      <h3 className="text-xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                        {stage.title}
                      </h3>

                      <p className="text-sm text-[#A3A1AF] leading-relaxed">
                        {stage.summary}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables snippet */}
                  <div className="pt-6 border-t border-white/10 mt-6 space-y-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A1AF]/80 block">
                      Entregables de la etapa:
                    </span>
                    <ul className="space-y-1 text-xs text-[#F3F1F7]">
                      {stage.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#9065F5] shrink-0" />
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Deep-Dive Drawer for Selected Stage */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#11121A] border border-white/10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#9065F5] font-semibold">
                  DETALLE DE LA ETAPA {processData[activeStep].number}
                </span>
                <span className="text-white/20">·</span>
                <span className="text-xs font-mono text-[#F3F1F7]">
                  {processData[activeStep].title}
                </span>
              </div>
              <p className="text-sm text-[#A3A1AF] leading-relaxed">
                {processData[activeStep].details}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-mono text-[#A3A1AF]">
                Hacé click en cualquier etapa para explorar su alcance
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
