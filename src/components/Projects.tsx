import React, { useState } from 'react';
import { projectsData, ProjectConcept } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, ExternalLink, Sparkles, Utensils, Camera, ShoppingBag, Eye } from 'lucide-react';

interface ProjectsProps {
  onSelectProject?: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectConcept | null>(null);

  const handleInquire = (title: string) => {
    if (onSelectProject) {
      onSelectProject(`Inspirado en concepto: ${title}`);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#090A0F] border-b border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-1/4 bottom-1/4 w-[500px] h-[500px] bg-[#9065F5]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#9065F5]">
              03. SELECTED WORK
            </span>
            <span className="h-[1px] w-12 bg-[#9065F5]/40" />
            <span className="text-xs font-mono tracking-widest text-[#A3A1AF]">
              PROYECTOS & EXPLORACIONES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#F3F1F7] tracking-tight leading-[1.12] text-balance">
            Algunas ideas llevadas a la realidad.
          </h2>

          <p className="text-base sm:text-lg text-[#A3A1AF] font-normal leading-relaxed max-w-2xl">
            Exploraciones conceptuales y prototipos de alta fidelidad que demuestran el estándar visual,
            tipográfico y funcional de nuestro estudio.
          </p>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#171923] border border-white/10 text-xs text-[#A3A1AF] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B39AFF]" />
            <span>Demostraciones conceptuales no estadísticas · 100% diseño propio</span>
          </div>
        </div>

        {/* Asymmetric Editorial Portfolio Grid */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Row 1: Split Columns - Project 01 (Gastronomy) & Project 02 (Personal Brand) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Project 01: Nórdika (Col 7) */}
            <div className="lg:col-span-7 group rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl">
              <div className="space-y-6">
                
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9065F5]" />
                    <span className="font-mono text-[#B39AFF] uppercase tracking-wider">{projectsData[0].tag}</span>
                  </div>
                  <span className="text-[#A3A1AF] font-mono">{projectsData[0].type}</span>
                </div>

                {/* Simulated Browser Window Mockup */}
                <div className="rounded-2xl border border-white/10 bg-[#090A0F] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl">
                  {/* Browser Bar */}
                  <div className="bg-[#171923] px-3.5 py-2.5 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-[#090A0F] text-[10px] font-mono text-[#A3A1AF] truncate max-w-[200px]">
                      {projectsData[0].urlMock}
                    </div>
                    <span className="text-[10px] font-mono text-[#9065F5]">DEMO</span>
                  </div>

                  {/* Mockup Screen Visual (Fine Dining Gastronomy) */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-[#12141e] via-[#090A0F] to-[#171923] space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#A3A1AF] font-mono border-b border-white/10 pb-3">
                      <span>NÓRDIKA · RESTAURANTE</span>
                      <span className="text-[#9065F5]">EST. 2026</span>
                    </div>

                    <div className="space-y-2 py-2">
                      <span className="text-[10px] tracking-widest font-mono text-[#B39AFF] uppercase block">
                        ALTA COCINA & BOTÁNICA
                      </span>
                      <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F3F1F7] tracking-tight">
                        Sabores de origen y fuego vivo.
                      </h4>
                      <p className="text-xs text-[#A3A1AF] line-clamp-2">
                        Carta de 7 pasos inspirada en la recolección estacional y fermentos silvestres.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono">
                      <div className="p-2.5 rounded-lg bg-[#11121A] border border-white/5 flex items-center justify-between">
                        <span className="text-[#A3A1AF]">Cava</span>
                        <span className="text-[#F3F1F7]">180+ Etiquetas</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#11121A] border border-white/5 flex items-center justify-between">
                        <span className="text-[#A3A1AF]">Mesa</span>
                        <span className="text-[#9065F5]">Reservas Activas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Information and title */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                    {projectsData[0].title}
                  </h3>
                  <p className="text-sm text-[#A3A1AF] leading-relaxed">
                    {projectsData[0].description}
                  </p>
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(projectsData[0])}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#B39AFF] hover:text-white transition-colors cursor-pointer"
                >
                  <Eye size={15} />
                  <span>Explorar concepto detallado</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(projectsData[0].title)}
                  className="p-2 rounded-lg bg-[#171923] text-[#F3F1F7] hover:bg-[#9065F5] transition-colors"
                  aria-label="Consultar proyecto similar"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

            {/* Project 02: Mateo Soria (Col 5) */}
            <div className="lg:col-span-5 group rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-xl">
              <div className="space-y-6">
                
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B39AFF]" />
                    <span className="font-mono text-[#B39AFF] uppercase tracking-wider">{projectsData[1].tag}</span>
                  </div>
                  <span className="text-[#A3A1AF] font-mono">{projectsData[1].type}</span>
                </div>

                {/* Simulated Browser Window Mockup */}
                <div className="rounded-2xl border border-white/10 bg-[#090A0F] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl">
                  {/* Browser Bar */}
                  <div className="bg-[#171923] px-3.5 py-2.5 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-[#090A0F] text-[10px] font-mono text-[#A3A1AF] truncate max-w-[180px]">
                      {projectsData[1].urlMock}
                    </div>
                    <span className="text-[10px] font-mono text-[#B39AFF]">PORTFOLIO</span>
                  </div>

                  {/* Mockup Screen Visual (Architectural Photography & Direction) */}
                  <div className="p-6 bg-gradient-to-br from-[#141522] via-[#090A0F] to-[#12131b] space-y-4">
                    <div className="flex items-center justify-between text-[11px] text-[#A3A1AF] font-mono border-b border-white/10 pb-3">
                      <span>MATEO SORIA</span>
                      <span className="text-[#B39AFF]">ARCH / PHOTO</span>
                    </div>

                    <div className="space-y-2 py-1">
                      <span className="text-[10px] tracking-widest font-mono text-[#B39AFF] uppercase block">
                        MONOGRAFÍA VISUAL
                      </span>
                      <h4 className="font-display font-extrabold text-2xl text-[#F3F1F7] tracking-tight">
                        Espacio, Sombra y Masa.
                      </h4>
                    </div>

                    {/* Architectural Gallery Wireframe */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="h-20 rounded-lg bg-[#1a1c29] border border-white/5 p-2 flex flex-col justify-end">
                        <span className="text-[9px] font-mono text-white/50">SERIE 01</span>
                      </div>
                      <div className="h-20 rounded-lg bg-[#212333] border border-white/5 p-2 flex flex-col justify-end">
                        <span className="text-[9px] font-mono text-white/50">SERIE 02</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                    {projectsData[1].title}
                  </h3>
                  <p className="text-sm text-[#A3A1AF] leading-relaxed">
                    {projectsData[1].description}
                  </p>
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedProject(projectsData[1])}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#B39AFF] hover:text-white transition-colors cursor-pointer"
                >
                  <Eye size={15} />
                  <span>Explorar concepto</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInquire(projectsData[1].title)}
                  className="p-2 rounded-lg bg-[#171923] text-[#F3F1F7] hover:bg-[#9065F5] transition-colors"
                  aria-label="Consultar proyecto similar"
                >
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>

          </div>

          {/* Row 2: Full Width Marquee Showcase - Project 03 (E-commerce KURA Objects) */}
          <div className="group rounded-3xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 transition-all duration-300 p-6 sm:p-10 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column Description */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9065F5]" />
                  <span className="text-xs font-mono text-[#B39AFF] uppercase tracking-wider">{projectsData[2].tag}</span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs font-mono text-[#A3A1AF]">{projectsData[2].type}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                    {projectsData[2].title}
                  </h3>
                  <p className="text-sm text-[#B39AFF] font-mono">
                    {projectsData[2].conceptSubtitle}
                  </p>
                  <p className="text-sm text-[#A3A1AF] leading-relaxed">
                    {projectsData[2].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#F3F1F7]">
                  <div className="p-3 rounded-xl bg-[#171923] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#9065F5] block">CATÁLOGO</span>
                    <span className="font-semibold">Piezas Seriadas</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#171923] border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-[#9065F5] block">PAGOS</span>
                    <span className="font-semibold">Checkout 1-Paso</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(projectsData[2])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#9065F5] hover:bg-[#8050e6] transition-all cursor-pointer shadow-[0_0_20px_rgba(144,101,245,0.25)]"
                  >
                    <Eye size={15} />
                    <span>Ver maqueta de tienda</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleInquire(projectsData[2].title)}
                    className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#F3F1F7] bg-[#171923] hover:bg-[#1f2230] border border-white/10 transition-colors"
                  >
                    Cotizar tienda similar
                  </button>
                </div>
              </div>

              {/* Right Column: Large Browser Mockup */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-white/10 bg-[#090A0F] overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 shadow-2xl">
                  {/* Browser Bar */}
                  <div className="bg-[#171923] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    </div>
                    <div className="px-3 py-0.5 rounded bg-[#090A0F] text-[10px] font-mono text-[#A3A1AF]">
                      https://{projectsData[2].urlMock}
                    </div>
                    <span className="text-[10px] font-mono text-[#9065F5]">E-COMMERCE STORE</span>
                  </div>

                  {/* Browser Screen UI (Digital Ceramics Store) */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-[#12131d] to-[#090A0F] space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
                      <span className="font-bold text-[#F3F1F7] tracking-wider">KURA OBJECTS</span>
                      <div className="flex items-center gap-4 text-[#A3A1AF]">
                        <span>COLECCIÓN '26</span>
                        <span>SOBRE EL TALLER</span>
                        <span className="text-[#9065F5]">BOLSA (0)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#9065F5]/20 text-[#B39AFF] uppercase">
                          EDICIÓN NUMERADA
                        </span>
                        <h4 className="font-display font-bold text-2xl text-[#F3F1F7]">
                          Vaso Cónico No. 04
                        </h4>
                        <p className="text-xs text-[#A3A1AF]">
                          Gres volcánico con esmalte ceniza mate. Elaborado en torno manual y cocido a 1280°C.
                        </p>
                        <div className="flex items-center gap-3 pt-1">
                          <span className="font-mono font-bold text-lg text-[#F3F1F7]">$84 USD</span>
                          <span className="text-[10px] font-mono text-emerald-400">Stock: 6 unid.</span>
                        </div>
                      </div>

                      {/* Mockup ceramic vessel illustration */}
                      <div className="h-40 rounded-xl bg-[#171923] border border-white/5 flex items-center justify-center relative overflow-hidden group/tray">
                        <div className="w-20 h-24 rounded-b-2xl rounded-t-sm bg-gradient-to-b from-[#2e3146] to-[#1a1b26] border border-white/10 shadow-lg" />
                        <div className="absolute bottom-2 text-[10px] font-mono text-[#A3A1AF]">
                          Pieza Única · Lote 04
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Selected Project Full Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquire}
      />
    </section>
  );
};
