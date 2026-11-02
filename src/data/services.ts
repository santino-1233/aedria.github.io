export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  scope: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-design",
    number: "01",
    title: "Diseño y desarrollo web",
    category: "Full Custom Platform",
    description: "Páginas web personalizadas que combinan diseño, funcionalidad y rendimiento para representar tu marca y conectar con tus clientes.",
    features: [
      "Diseño personalizado y adaptado a tu identidad",
      "Adaptación fluida a todos los dispositivos",
      "Optimización avanzada de velocidad y rendimiento",
      "Arquitectura semántica y SEO técnico inicial"
    ],
    scope: "Ideal para marcas, empresas, estudios y profesionales que buscan diferenciarse del estándar con una plataforma propia de alto calibre.",
    deliverables: ["Prototipado interactivo", "Desarrollo frontend en React / TypeScript", "Testing cross-browser", "Optimización Core Web Vitals"]
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing pages",
    category: "Conversion Driven",
    description: "Experiencias enfocadas en una acción concreta. Diseñadas para captar la atención, comunicar una propuesta y generar consultas de calidad.",
    features: [
      "Diseño con foco riguroso en conversión",
      "Estructura narrativa y jerarquía estratégica",
      "Formularios dinámicos y enlaces directos",
      "Optimización integral mobile-first"
    ],
    scope: "Diseñadas para lanzamientos de productos, campañas publicitarias de performance y captación de clientes cualificados sin dispersión.",
    deliverables: ["Copywriting estructurado", "Formulario con validación", "Integración con CRM/WhatsApp", "Eventos de analítica"]
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce",
    category: "Digital Retail Experience",
    description: "Tiendas online pensadas para mostrar tus productos con elegancia, facilitar las compras y ofrecer una experiencia de navegación clara.",
    features: [
      "Catálogo de productos intuitivo y visual",
      "Diseño de interfaz a la medida de la marca",
      "Proceso de checkout simplificado",
      "Integraciones según los requerimientos de tu negocio"
    ],
    scope: "Para marcas de productos físicos o digitales que buscan una tienda con estética premium y una experiencia de compra sin fricciones.",
    deliverables: ["Arquitectura de catálogo", "Filtros interactivos", "Pasarela de cobro", "Panel autogestionable"]
  }
];
