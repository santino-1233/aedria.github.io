import React from 'react';
import { siteConfig } from '../config/site';

interface AedriaIsotypeProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}

export const AedriaIsotype: React.FC<AedriaIsotypeProps> = ({
  className = 'w-8 h-8',
  size,
  showGlow = false,
}) => {
  // Si el usuario configuró una imagen de logo personalizada, se muestra directamente
  if (siteConfig.branding.customLogoUrl) {
    return (
      <img
        src={siteConfig.branding.customLogoUrl}
        alt="Isotipo AEDRIA"
        style={size ? { width: size, height: size } : undefined}
        className={`object-contain ${className}`}
      />
    );
  }

  // Isotipo Vectorial Maestro de AEDRIA:
  // "Representa una A abstracta, construida mediante formas geométricas y curvas,
  // combinando tono blanco/perlado con acento violeta, estética minimalista y futurista."
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={size ? { width: size, height: size } : undefined}
      className={`inline-block shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Isotipo de AEDRIA"
      role="img"
    >
      <defs>
        {/* Gradiente blanco perlado para la estructura principal */}
        <linearGradient id="aedriaPearlGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F3F1F7" />
          <stop offset="100%" stopColor="#D4D0DE" />
        </linearGradient>

        {/* Gradiente violeta vibrante para el acento curvo central */}
        <linearGradient id="aedriaVioletAccent" x1="30" y1="58" x2="70" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#9065F5" />
          <stop offset="60%" stopColor="#B39AFF" />
          <stop offset="100%" stopColor="#C9B6FF" />
        </linearGradient>

        {/* Filtro de resplandor para el acento */}
        <filter id="violetGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <linearGradient id="subtleShine" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Resplandor ambiental de fondo si está activo */}
      {showGlow && (
        <circle cx="50" cy="50" r="38" fill="#9065F5" opacity="0.18" filter="url(#violetGlow)" />
      )}

      {/* Brazo izquierdo de la A abstracta con curvatura aerodinámica */}
      <path
        d="M48 16 C46 16 38 34 32 50 C26 66 20 78 18 80 C26 79 32 75 37 68 C42 61 47 48 49 38 Z"
        fill="url(#aedriaPearlGrad)"
      />

      {/* Brazo derecho simétrico con apertura futurista */}
      <path
        d="M52 16 C54 16 62 34 68 50 C74 66 80 78 82 80 C74 79 68 75 63 68 C58 61 53 48 51 38 Z"
        fill="url(#aedriaPearlGrad)"
      />

      {/* Cúspide de la A: monolito central perlado */}
      <path
        d="M50 14 L55 26 L45 26 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* Acento Violeta Curvo: Trazo dinámico transversal que conecta la A */}
      <path
        d="M29 60 C38 52 62 52 71 60"
        stroke="url(#aedriaVioletAccent)"
        strokeWidth="6.5"
        strokeLinecap="round"
        filter="url(#violetGlow)"
      />

      {/* Núcleo focal luminoso superior en violeta claro */}
      <circle
        cx="50"
        cy="36"
        r="3"
        fill="#B39AFF"
        filter="url(#violetGlow)"
      />
    </svg>
  );
};
