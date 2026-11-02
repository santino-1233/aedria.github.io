import React from 'react';
import { differentialsData } from '../data/differentials';
import { Layers, Smartphone, Gauge, MessageSquare, Check, Sparkles } from 'lucide-react';

export const Differentials: React.FC = () => {
  return (
    <section id="differentials" className="relative py-24 sm:py-32 bg-[#090A0F] border-b border-white/10 overflow-hidden">
      {/* Background accents */}
      <div className="absolute right-10 top-1/3 w-[450px] h-[450px] bg-[#9065F5]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-10 bottom-1/4 w-[400px] h-[400px] bg-[#B39AFF]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
              05. WHY AEDRIA
            </span>
            <span className="h-[1px] w-12 bg-[#9065F5]/40" />
            <span className="text-xs font-mono tracking-widest text-[#A3A1AF]">
              DIFERENCIALES & CRITERIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.12] text-balance">
            El detalle también forma parte del resultado.
          </h2>

          <p className="text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed max-w-2xl">
            La diferencia entre una web corriente y una presencia memorable reside en el rigor técnico y la sensibilidad estética aplicada a cada píxel.
          </p>
        </div>

        {/* Asymmetric Bento Composition: 4 Distinct Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Block 01: Diseño Personalizado (Large Col 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/20 group-hover:text-[#9065F5] transition-colors tabular-nums">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#171923] border border-white/10 flex items-center justify-center text-[#9065F5]">
                  <Layers size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                  {differentialsData[0].title}
                </h3>
                <p className="text-base text-[#F3F1F7]/90 font-medium">
                  {differentialsData[0].description}
                </p>
                <p className="text-sm text-[#A3A1AF] leading-relaxed">
                  {differentialsData[0].extended}
                </p>
              </div>
            </div>

            {/* Custom Grid Graphic preview */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-xs text-[#A3A1AF] font-mono">
              <div className="p-3 rounded-xl bg-[#171923] border border-white/5">
                <span className="text-[#9065F5] block font-bold mb-1">0% Copias</span>
                <span>Bocetos exclusivos</span>
              </div>
              <div className="p-3 rounded-xl bg-[#171923] border border-white/5">
                <span className="text-[#B39AFF] block font-bold mb-1">Tipografía</span>
                <span>Escala armónica</span>
              </div>
              <div className="p-3 rounded-xl bg-[#171923] border border-white/5">
                <span className="text-[#F3F1F7] block font-bold mb-1">Identidad</span>
                <span>Alineada a tu marca</span>
              </div>
            </div>
          </div>

          {/* Block 02: Experiencia Adaptable (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#B39AFF]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/20 group-hover:text-[#B39AFF] transition-colors tabular-nums">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#171923] border border-white/10 flex items-center justify-center text-[#B39AFF]">
                  <Smartphone size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                  {differentialsData[1].title}
                </h3>
                <p className="text-base text-[#F3F1F7]/90 font-medium">
                  {differentialsData[1].description}
                </p>
                <p className="text-sm text-[#A3A1AF] leading-relaxed">
                  {differentialsData[1].extended}
                </p>
              </div>
            </div>

            {/* Screen breakpoints strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A3A1AF]">
              <span>360px</span>
              <span className="text-white/20">·</span>
              <span>768px</span>
              <span className="text-white/20">·</span>
              <span>1024px</span>
              <span className="text-white/20">·</span>
              <span className="text-[#B39AFF]">1440px+</span>
            </div>
          </div>

          {/* Block 03: Rendimiento (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/20 group-hover:text-[#9065F5] transition-colors tabular-nums">
                  03
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#171923] border border-white/10 flex items-center justify-center text-[#9065F5]">
                  <Gauge size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                  {differentialsData[2].title}
                </h3>
                <p className="text-base text-[#F3F1F7]/90 font-medium">
                  {differentialsData[2].description}
                </p>
                <p className="text-sm text-[#A3A1AF] leading-relaxed">
                  {differentialsData[2].extended}
                </p>
              </div>
            </div>

            {/* Performance telemetry badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-2xl font-display font-bold text-emerald-400 tabular-nums">98+</span>
                <span className="text-xs text-[#A3A1AF] block font-mono">Performance Score</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-display font-bold text-[#F3F1F7] tabular-nums">&lt;0.7s</span>
                <span className="text-xs text-[#A3A1AF] block font-mono">FCP Medido</span>
              </div>
            </div>
          </div>

          {/* Block 04: Comunicación Directa (Large Col 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#B39AFF]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl font-bold text-white/20 group-hover:text-[#B39AFF] transition-colors tabular-nums">
                  04
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#171923] border border-white/10 flex items-center justify-center text-[#B39AFF]">
                  <MessageSquare size={20} />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                  {differentialsData[3].title}
                </h3>
                <p className="text-base text-[#F3F1F7]/90 font-medium">
                  {differentialsData[3].description}
                </p>
                <p className="text-sm text-[#A3A1AF] leading-relaxed">
                  {differentialsData[3].extended}
                </p>
              </div>
            </div>

            {/* Communication channels strip */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A3A1AF]">
              <span className="flex items-center gap-1.5 text-[#F3F1F7]">
                <Check size={14} className="text-[#9065F5]" />
                WhatsApp Directo
              </span>
              <span className="flex items-center gap-1.5 text-[#F3F1F7]">
                <Check size={14} className="text-[#9065F5]" />
                Revisiones en Video
              </span>
              <span className="flex items-center gap-1.5 text-[#F3F1F7]">
                <Check size={14} className="text-[#9065F5]" />
                Avances Semanales
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
