export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  summary: string;
  details: string;
  timeframe: string;
  deliverables: string[];
}

export const processData: ProcessStep[] = [
  {
    step: "Paso 01",
    number: "01",
    title: "Descubrimiento",
    summary: "Conocemos tu negocio, tus objetivos y lo que necesitás comunicar.",
    details: "Nos sumergimos en la visión de tu proyecto, analizamos tu audiencia y definimos los objetivos clave de comunicación y conversión.",
    timeframe: "Semana 1",
    deliverables: ["Brief estratégico", "Relevamiento de requerimientos", "Definición de arquitectura de información"]
  },
  {
    step: "Paso 02",
    number: "02",
    title: "Dirección y diseño",
    summary: "Definimos la estructura, la identidad visual y la experiencia que tendrá tu sitio.",
    details: "Exploramos tipografía, paleta cromática, ritmo espacial y prototipos interactivos para que veas exactamente cómo se sentirá la web antes de programarla.",
    timeframe: "Semanas 2–3",
    deliverables: ["Wireframes de alta fidelidad", "Sistema de diseño y tokens", "Prototipo interactivo navegable"]
  },
  {
    step: "Paso 03",
    number: "03",
    title: "Desarrollo",
    summary: "Transformamos el diseño en una web funcional, rápida y adaptable.",
    details: "Escribimos código limpio, semántico y moderno en React / TypeScript, optimizando cada interacción, animación y tiempo de respuesta.",
    timeframe: "Semanas 3–4",
    deliverables: ["Código fuente estructurado", "Integración de componentes", "Animaciones de alto rendimiento"]
  },
  {
    step: "Paso 04",
    number: "04",
    title: "Lanzamiento",
    summary: "Probamos, ajustamos y dejamos todo preparado para publicar.",
    details: "Ejecutamos auditorías completas de accesibilidad, Core Web Vitals, pruebas en múltiples pantallas y conectamos tus canales de contacto.",
    timeframe: "Semana 5",
    deliverables: ["Testing en todos los navegadores", "Indexación y SEO base", "Puesta en producción y entrega"]
  }
];
