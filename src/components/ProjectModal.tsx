import React, { useEffect } from 'react';
import { ProjectConcept } from '../data/projects';
import { X, ExternalLink, Check, Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectConcept | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#11121A] border border-white/10 p-6 sm:p-10 shadow-2xl z-10 space-y-8">
        
        {/* Top Bar */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-[#9065F5] uppercase tracking-widest">
                {project.tag}
              </span>
              <span className="text-white/30">·</span>
              <span className="text-xs font-mono text-[#A3A1AF]">{project.year}</span>
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-display font-bold text-[#F3F1F7]">
              {project.title}
            </h3>
            <p className="text-sm text-[#A3A1AF]">{project.type}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#171923] text-[#A3A1AF] hover:text-[#F3F1F7] hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Cerrar vista detallada"
          >
            <X size={20} />
          </button>
        </div>

        {/* Big Simulated Browser Mockup Viewport */}
        <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#090A0F] shadow-2xl">
          {/* Browser header bar */}
          <div className="bg-[#171923] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block" />
            </div>
            <div className="px-4 py-1 rounded-md bg-[#090A0F] border border-white/5 text-[11px] font-mono text-[#A3A1AF] max-w-xs w-full text-center truncate">
              https://{project.urlMock}
            </div>
            <span className="text-[10px] font-mono text-[#9065F5] uppercase">SSL SECURE</span>
          </div>

          {/* Browser Inner Page Simulation */}
          <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-[#0e0f17] to-[#090A0F]">
            
            {/* Simulated Hero */}
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B39AFF] px-2.5 py-1 rounded bg-[#9065F5]/10 border border-[#9065F5]/30">
                {project.mockupDetails.badge}
              </span>
              <h4 className="text-3xl sm:text-4xl font-display font-extrabold text-[#F3F1F7] tracking-tight">
                {project.mockupDetails.heroTitle}
              </h4>
              <p className="text-sm text-[#A3A1AF] leading-relaxed">
                {project.mockupDetails.heroSubtitle}
              </p>
            </div>

            {/* Simulated UI metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.mockupDetails.uiBlocks.map((block, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#171923]/90 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#9065F5] block">
                    {block.label}
                  </span>
                  <span className="text-base font-display font-bold text-[#F3F1F7] block">
                    {block.value}
                  </span>
                  {block.desc && (
                    <span className="text-xs text-[#A3A1AF] block">
                      {block.desc}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Narrative & Rationale */}
        <div className="space-y-4">
          <h5 className="text-sm font-mono uppercase tracking-widest text-[#B39AFF]">
            Enfoque de Diseño AEDRIA
          </h5>
          <p className="text-sm text-[#A3A1AF] leading-relaxed">
            {project.description}
          </p>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#A3A1AF] block mb-3">
              Capacidades desarrolladas en esta maqueta:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2 text-xs text-[#F3F1F7]">
                  <span className="w-4 h-4 rounded-full bg-[#9065F5]/20 text-[#B39AFF] flex items-center justify-center shrink-0">
                    <Check size={11} />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#A3A1AF] italic text-center sm:text-left">
            * Este proyecto es una demostración conceptual del estándar de diseño del estudio.
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-medium text-[#A3A1AF] hover:text-[#F3F1F7] bg-[#171923] border border-white/10 transition-colors"
            >
              Cerrar
            </button>
            <button
              type="button"
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#9065F5] hover:bg-[#8050e6] shadow-[0_0_20px_rgba(144,101,245,0.3)] transition-all"
            >
              <span>Quiero algo similar para mi marca</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
