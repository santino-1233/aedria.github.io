import React, { useState, useEffect } from 'react';
import { AedriaIsotype } from './AedriaIsotype';
import { siteConfig } from '../config/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Evitar scroll de fondo al abrir el menú móvil
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090A0F]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Brand Zone: Isotipo independiente + Nombre AEDRIA */}
          <a
            href="#hero"
            className="flex items-center gap-3 group shrink-0 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9065F5] rounded-md py-1"
            aria-label="AEDRIA Digital Studio - Inicio"
          >
            <div className="relative flex items-center justify-center">
              <AedriaIsotype
                size={30}
                className="group-hover:scale-105 group-hover:rotate-1 transition-all duration-300"
                showGlow={isScrolled}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-wider font-bold text-[#F3F1F7] group-hover:text-white transition-colors">
                AEDRIA
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#A3A1AF] font-medium -mt-1 hidden sm:block">
                Digital Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-[13px] font-medium tracking-wide text-[#A3A1AF] hover:text-[#F3F1F7] transition-colors py-1 group whitespace-nowrap"
              >
                {link.label}
                {/* Línea animada violeta en hover */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#9065F5] to-[#B39AFF] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Action Zone: Desktop Contact CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
                if (onOpenContact) onOpenContact();
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-[#F3F1F7] bg-[#171923] hover:bg-[#1f2230] border border-white/10 hover:border-[#9065F5]/60 hover:shadow-[0_0_20px_rgba(144,101,245,0.25)] rounded-lg transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Hablemos de tu idea</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#9065F5]" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#F3F1F7] bg-[#171923]/80 hover:bg-[#171923] border border-white/10 hover:border-[#9065F5]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9065F5]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Overlay Menu (Composición Visual de pantalla completa) */}
      <div
        className={`fixed inset-0 z-40 bg-[#090A0F]/95 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6 sm:p-10 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Top spacer */}
        <div className="pt-16 pb-6 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <AedriaIsotype size={28} />
            <span className="font-display font-bold text-lg tracking-wider text-[#F3F1F7]">AEDRIA</span>
          </div>
          <span className="text-xs text-[#A3A1AF] font-mono">DIGITAL STUDIO</span>
        </div>

        {/* Links list with large editorial typography */}
        <div className="flex flex-col gap-5 my-auto py-6">
          {siteConfig.navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="group flex items-center justify-between text-2xl sm:text-3xl font-display font-medium text-[#F3F1F7] hover:text-[#9065F5] transition-colors"
            >
              <span className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#9065F5] opacity-60">
                  {`0${idx + 1}`}
                </span>
                <span>{link.label}</span>
              </span>
              <ArrowUpRight
                size={20}
                className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#9065F5]"
              />
            </a>
          ))}
        </div>

        {/* Mobile footer info */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#A3A1AF]">
          <div>
            <span className="text-[#F3F1F7] block font-medium">contacto@aedria.studio</span>
            <span>Buenos Aires · Argentina</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9065F5] hover:text-[#B39AFF] transition-colors"
            >
              WhatsApp
            </a>
            <span>·</span>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F1F7] transition-colors"
            >
              Instagram
            </a>
            <span>·</span>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F3F1F7] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
