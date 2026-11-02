/**
 * AEDRIA Digital Studio – Configuración Centralizada del Sitio
 * 
 * Editá este archivo para actualizar los datos de contacto, enlaces sociales,
 * número de WhatsApp y configuración de marca sin necesidad de tocar componentes.
 */

export interface SiteConfig {
  name: string;
  descriptor: string;
  tagline: string;
  concept: string;
  location: string;
  contact: {
    email: string;
    // Ingresar número con código de país sin espacios ni signos (ej: "+5491123456789")
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  };
  socials: {
    instagram: string;
    linkedin: string;
    xTwitter: string;
    github?: string;
  };
  branding: {
    // Si tenés una imagen física de logo (png, svg, webp) colocala en /public/ y poné aquí la ruta (ej: "/logo-aedria.svg")
    // Si está vacío (''), se renderiza automáticamente el Isotipo Vectorial Maestro de AEDRIA con geometría perla y violeta.
    customLogoUrl: string;
    primaryColor: string;
    accentViolet: string;
    accentVioletLight: string;
  };
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "AEDRIA",
  descriptor: "Digital Studio",
  tagline: "Las ideas merecen una presencia extraordinaria.",
  concept: "Transformamos ideas en experiencias digitales.",
  location: "ARGENTINA",
  contact: {
    email: "contacto@aedria.studio",
    // Configurable: Modificar con tu número de WhatsApp comercial real
    whatsappNumber: "5491123456789",
    whatsappDefaultMessage: "Hola AEDRIA! Me gustaría conversar sobre el diseño y desarrollo de mi proyecto web.",
  },
  socials: {
    instagram: "https://instagram.com/aedria.studio",
    linkedin: "https://linkedin.com/company/aedria-studio",
    xTwitter: "https://x.com/aedria_studio",
  },
  branding: {
    customLogoUrl: "", // Dejar vacío para usar el Isotipo oficial en SVG de alta resolución
    primaryColor: "#090A0F",
    accentViolet: "#9065F5",
    accentVioletLight: "#B39AFF",
  },
  navLinks: [
    { label: "Inicio", href: "#hero" },
    { label: "Nosotros", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Proyectos", href: "#projects" },
    { label: "Proceso", href: "#process" },
    { label: "Diferenciales", href: "#differentials" },
    { label: "Contacto", href: "#contact" },
  ],
};
