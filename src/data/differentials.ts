export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
  extended: string;
  iconType: "custom" | "responsive" | "performance" | "communication";
  accent: string;
}

export const differentialsData: DifferentialItem[] = [
  {
    number: "01",
    title: "Diseño personalizado",
    description: "Cada proyecto se diseña según la identidad y las necesidades de cada marca.",
    extended: "No recurrimos a plantillas prediseñadas ni soluciones genéricas. Cada tipografía, espaciado y transición se concibe para reflejar el carácter único de tu negocio.",
    iconType: "custom",
    accent: "#9065F5"
  },
  {
    number: "02",
    title: "Experiencia adaptable",
    description: "Sitios preparados para funcionar correctamente en celulares, tablets y computadoras.",
    extended: "Pensamos la experiencia de forma responsiva desde el origen: botones táctiles generosos, tipografía fluida con clamp() y navegación ágil en cualquier pantalla.",
    iconType: "responsive",
    accent: "#B39AFF"
  },
  {
    number: "03",
    title: "Rendimiento",
    description: "Priorizamos tiempos de carga, optimización y una estructura eficiente.",
    extended: "Un diseño sobresaliente pierde impacto si tarda en cargar. Optimizamos pesos, eliminamos dependencias superfluas y cuidamos los estándares de Core Web Vitals.",
    iconType: "performance",
    accent: "#9065F5"
  },
  {
    number: "04",
    title: "Comunicación directa",
    description: "Acompañamiento durante el desarrollo, con comunicación clara y decisiones compartidas.",
    extended: "Hablas directamente con el equipo que diseña y programa tu web. Sin intermediarios innecesarios, con avances visibles y feedback constructivo en cada paso.",
    iconType: "communication",
    accent: "#B39AFF"
  }
];
