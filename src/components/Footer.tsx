import React from 'react';
import { AedriaIsotype } from './AedriaIsotype';
import { siteConfig } from '../config/site';
import { ArrowUp, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090A0F] text-[#F3F1F7] pt-20 pb-12 overflow-hidden">
      {/* Subtle top border */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10 items-start">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <AedriaIsotype size={36} showGlow />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-wider text-[#F3F1F7]">
                  AEDRIA
                </span>
                <span className="text-[11px] font-mono tracking-[0.25em] text-[#A3A1AF] uppercase">
                  Digital Studio
                </span>
              </div>
            </div>

            <p className="text-sm text-[#A3A1AF] max-w-sm leading-relaxed">
              Transformamos ideas en experiencias digitales contemporáneas, funcionales y memorables.
            </p>

            <div className="pt-2 text-xs font-mono text-[#B39AFF]">
              <span>BUENOS AIRES · ARGENTINA · GLOBAL REACH</span>
            </div>
          </div>

          {/* Navigation Links Col (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B39AFF] block">
              Navegación
            </span>
            <ul className="space-y-2.5 text-sm text-[#A3A1AF]">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F3F1F7] transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contact Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B39AFF] block">
              Conexión & Contacto
            </span>

            <div className="space-y-3 text-sm text-[#A3A1AF]">
              <p>
                Iniciá tu proyecto escribiéndonos a:
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="block text-[#F3F1F7] font-semibold hover:text-[#9065F5] transition-colors mt-0.5"
                >
                  {siteConfig.contact.email}
                </a>
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram de AEDRIA"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn de AEDRIA"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href={siteConfig.socials.xTwitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#11121A] border border-white/10 hover:border-[#9065F5]/60 hover:text-white flex items-center justify-center transition-all duration-200"
                  aria-label="X / Twitter de AEDRIA"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Phrase */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3A1AF]">
          <div>
            <span>© {currentYear} AEDRIA Digital Studio. Todos los derechos reservados.</span>
          </div>

          <div className="font-mono text-center tracking-wider text-[#F3F1F7]/80">
            “Built with intention.”
          </div>

          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#A3A1AF] hover:text-[#F3F1F7] transition-colors group cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-[#9065F5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
