import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/services';
import { ArrowUpRight, Check, Monitor, Zap, ShoppingBag, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleServiceSelect = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#090A0F] border-b border-white/10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#9065F5]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#B39AFF]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
              02. WHAT WE DO
            </span>
            <span className="h-[1px] w-12 bg-[#9065F5]/40" />
            <span className="text-xs font-mono tracking-widest text-[#A3A1AF]">
              SERVICIOS INTEGRALES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.12] text-balance">
            Todo empieza con una buena idea.{' '}
            <span className="bg-gradient-to-r from-[#9065F5] via-[#B39AFF] to-[#F3F1F7] bg-clip-text text-transparent">
              Nosotros la llevamos más lejos.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed max-w-2xl">
            Soluciones digitales diseñadas para marcas que exigen distinción, alto desempeño y resultados medibles.
          </p>
        </div>

        {/* 3 Distinct Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {servicesData.map((service, index) => {
            const isHovered = activeCardId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveCardId(service.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`relative group rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 border ${
                  isHovered
                    ? 'bg-[#171923] border-[#9065F5]/70 shadow-[0_10px_40px_rgba(144,101,245,0.18)] -translate-y-1'
                    : 'bg-[#11121A] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Header of Card: Number + Abstract Icon */}
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className={`font-display text-4xl sm:text-5xl font-bold transition-colors duration-300 ${
                        isHovered ? 'text-[#9065F5]' : 'text-white/20'
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Abstract bespoke icon per service */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#9065F5]/20 border-[#9065F5] text-[#F3F1F7]'
                          : 'bg-[#171923] border-white/10 text-[#A3A1AF]'
                      }`}
                    >
                      {index === 0 && <Monitor size={22} className="text-[#B39AFF]" />}
                      {index === 1 && <Zap size={22} className="text-[#9065F5]" />}
                      {index === 2 && <ShoppingBag size={22} className="text-[#B39AFF]" />}
                    </div>
                  </div>

                  {/* Title & Category */}
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B39AFF] block mb-2">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#F3F1F7] mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#A3A1AF] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Visual Representation Graphic inside the Card */}
                  <div className="mb-8 p-4 rounded-2xl bg-[#090A0F]/80 border border-white/5 overflow-hidden">
                    {index === 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-[#A3A1AF] font-mono">
                          <span>Multi-Device Viewport</span>
                          <span className="text-[#9065F5]">100% Fluid</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#9065F5] to-[#B39AFF] w-4/5 rounded-full" />
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 pt-1 text-[10px] text-center text-[#A3A1AF]/80 font-mono">
                          <span className="py-1 rounded bg-[#171923] border border-white/5">Desktop</span>
                          <span className="py-1 rounded bg-[#171923] border border-white/5">Tablet</span>
                          <span className="py-1 rounded bg-[#171923] border border-white/5">Mobile</span>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-[#A3A1AF] font-mono">
                          <span>Embudo de Conversión</span>
                          <span className="text-[#9065F5]">Direct CTA</span>
                        </div>
                        <div className="flex items-center justify-between gap-1 text-[10px] font-mono">
                          <span className="px-2 py-1 rounded bg-[#171923] text-[#F3F1F7] border border-white/5">Propuesta</span>
                          <span className="text-[#9065F5]">→</span>
                          <span className="px-2 py-1 rounded bg-[#171923] text-[#F3F1F7] border border-white/5">Claridad</span>
                          <span className="text-[#9065F5]">→</span>
                          <span className="px-2 py-1 rounded bg-[#9065F5]/30 text-[#B39AFF] border border-[#9065F5]/40 font-bold">Consulta</span>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-[#A3A1AF] font-mono">
                          <span>Checkout Fluido</span>
                          <span className="text-[#9065F5]">0 Fricción</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#171923] border border-white/10 flex items-center justify-center text-xs text-[#B39AFF]">
                            ✦
                          </div>
                          <div className="flex-1">
                            <div className="h-2 w-20 bg-white/20 rounded mb-1" />
                            <div className="h-1.5 w-12 bg-white/10 rounded" />
                          </div>
                          <span className="text-xs font-mono text-[#F3F1F7] font-semibold">$ Cart</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A3A1AF]/80 block">
                      Características Principales:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-[13px] text-[#F3F1F7]">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-[#9065F5]/20 text-[#B39AFF] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Action button */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => handleServiceSelect(service.title)}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#171923] hover:bg-[#9065F5] text-[#F3F1F7] hover:text-white border border-white/10 hover:border-[#9065F5] transition-all duration-200 text-xs font-semibold tracking-wide group/btn cursor-pointer"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowUpRight
                      size={16}
                      className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom studio promise note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#11121A]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9065F5] shrink-0 animate-ping" />
            <p className="text-sm text-[#A3A1AF]">
              ¿Tenés un proyecto con requerimientos especiales o arquitectura a medida?
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleServiceSelect('Otro / Proyecto Personalizado')}
            className="text-xs font-mono font-semibold tracking-wider text-[#B39AFF] hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
          >
            Hablemos de una solución a medida →
          </button>
        </div>

      </div>
    </section>
  );
};
