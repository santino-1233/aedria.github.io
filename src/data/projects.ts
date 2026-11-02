export interface ProjectConcept {
  id: string;
  tag: string;
  title: string;
  type: string;
  conceptSubtitle: string;
  description: string;
  year: string;
  urlMock: string;
  accentColor: string;
  features: string[];
  mockupDetails: {
    heroTitle: string;
    heroSubtitle: string;
    badge: string;
    metricsOrPill: string;
    uiBlocks: Array<{
      label: string;
      value: string;
      desc?: string;
    }>;
  };
}

export const projectsData: ProjectConcept[] = [
  {
    id: "nordika-gastronomy",
    tag: "Concepto de Estudio · Demo",
    title: "Nórdika",
    type: "Website / Gastronomy",
    conceptSubtitle: "Experiencia culinaria de autor & coctelería botánica",
    description: "Diseño conceptual para un restaurante de alta cocina. Navegación fluida, tipografía editorial, carta interactiva y sistema de reservas visual.",
    year: "2026",
    urlMock: "nordika-dining.com",
    accentColor: "#9065F5",
    features: [
      "Sistema de reservas en tiempo real",
      "Carta gastronómica con filtrado estacional",
      "Atmósfera inmersiva en tonos oscuros",
      "Integración de geolocalización y eventos"
    ],
    mockupDetails: {
      heroTitle: "SABORES DE ORIGEN",
      heroSubtitle: "Cocina de estación, brasas y fermentos botánicos en un entorno arquitectónico único.",
      badge: "GASTRONOMÍA · BUENOS AIRES",
      metricsOrPill: "Mesa de Degustación · 7 Pasos",
      uiBlocks: [
        { label: "Menú Activo", value: "Solsticio '26", desc: "14 creaciones de temporada" },
        { label: "Cava Curada", value: "180+ Etiquetas", desc: "Vinos naturales y biodinámicos" },
        { label: "Mesa de Autor", value: "Reservas Abiertas", desc: "Turnos exclusivos 20:00 / 22:30" }
      ]
    }
  },
  {
    id: "mateo-soria-portfolio",
    tag: "Concepto de Estudio · Demo",
    title: "Mateo Soria",
    type: "Portfolio / Personal Brand",
    conceptSubtitle: "Fotografía de arquitectura & dirección de arte",
    description: "Sitio web para un fotógrafo y director creativo independiente. Layout asimétrico, transiciones fluidas de galería y contacto directo.",
    year: "2026",
    urlMock: "mateosoria.studio",
    accentColor: "#B39AFF",
    features: [
      "Galería curada con zoom interactivo",
      "Biografía y publicaciones editoriales",
      "Carga instantánea de activos visuales",
      "Canal directo de contrataciones y licensing"
    ],
    mockupDetails: {
      heroTitle: "ESPACIO, SOMBRA Y LUZ",
      heroSubtitle: "Documentando la interacción entre la masa arquitectónica y la luz natural en Iberoamérica.",
      badge: "DIRECCIÓN VISUAL · PORTFOLIO",
      metricsOrPill: "Publicado en Domus & Arquitectura Viva",
      uiBlocks: [
        { label: "Monografías", value: "08 Series", desc: "Brutalismo y modernismo tardío" },
        { label: "Premios", value: "FAD 2025", desc: "Primer premio fotografía de obra" },
        { label: "Disponibilidad", value: "Q3 / Q4 2026", desc: "Proyectos globales comisionados" }
      ]
    }
  },
  {
    id: "kura-objects-ecommerce",
    tag: "Concepto de Estudio · Demo",
    title: "KURA Objects",
    type: "E-commerce / Digital Store",
    conceptSubtitle: "Cerámica contemporánea y objetos para el habitar",
    description: "Plataforma de comercio electrónico para una marca de diseño y objetos de autor. Navegación limpia, catálogo filtrable y checkout directo.",
    year: "2026",
    urlMock: "kura-objects.store",
    accentColor: "#9065F5",
    features: [
      "Catálogo dinámico con previsualización rápida",
      "Filtros por materialidad, lote y dimensión",
      "Pasarela de pago y envíos internacionales",
      "Gestión de stock de piezas numeradas"
    ],
    mockupDetails: {
      heroTitle: "PIEZAS NUMERADAS",
      heroSubtitle: "Gres de alta temperatura modelado a mano en pequeños lotes de autor.",
      badge: "EDICIÓN LIMITADA · TIENDA ONLINE",
      metricsOrPill: "Colección Mineral '26 · Lote 04",
      uiBlocks: [
        { label: "Edición 04", value: "32 Piezas", desc: "Esmalte ceniza y hierro negro" },
        { label: "Envíos", value: "Nacionales & Globales", desc: "Embalaje sustentable reforzado" },
        { label: "Certificación", value: "Firma y Folio", desc: "Autenticidad de taller" }
      ]
    }
  }
];
