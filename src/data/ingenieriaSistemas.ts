import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaIngenieriaSistemasUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ingeniería de Sistemas",
  creditosObligatorios: 212,
  cursosIA_BigData: 18,
  ciclos: [
    {
      numero: 1,
      creditosTotales: 20,
      cursos: [
        { nombre: "Geometría Analítica", creditos: 3, ciclo: 1 },
        { nombre: "Cálculo Diferencial", creditos: 5, ciclo: 1 },
        { nombre: "Química I", creditos: 5, ciclo: 1 },
        { nombre: "Introducción a la Computación", creditos: 2, ciclo: 1 },
        { nombre: "Redacción y Comunicación", creditos: 2, ciclo: 1 },
        { nombre: "Introducción al Pensamiento y a la Ing. de Sistemas", creditos: 3, ciclo: 1 }
      ]
    },
    {
      numero: 2,
      creditosTotales: 22,
      cursos: [
        { nombre: "Álgebra lineal", creditos: 4, ciclo: 2 },
        { nombre: "Cálculo Integral", creditos: 5, ciclo: 2 },
        { nombre: "Ética y Filosofía Política", creditos: 2, ciclo: 2 },
        { nombre: "Psicología Sistémica", creditos: 3, ciclo: 2 },
        { nombre: "Teoría y Ciencia de Sistemas", creditos: 3, ciclo: 2 },
        { nombre: "Sistemas Biológicos y Ecológicos", creditos: 2, ciclo: 2 },
        { nombre: "Algoritmia y Estructura de datos", creditos: 3, ciclo: 2 }
      ]
    },
    {
      numero: 3,
      creditosTotales: 23,
      cursos: [
        { nombre: "Matemática Discreta", creditos: 3, ciclo: 3 },
        { nombre: "Calculo Multivariable", creditos: 5, ciclo: 3 },
        { nombre: "Física I", creditos: 5, ciclo: 3 },
        { nombre: "Metodología de la Investigación", creditos: 2, ciclo: 3 },
        { nombre: "Estadística y Probabilidades", creditos: 3, ciclo: 3 },
        { nombre: "Teoría y Ciencia de Sistemas Aplicados", creditos: 2, ciclo: 3 },
        { nombre: "Programación Orientada a Objetos", creditos: 3, ciclo: 3 }
      ]
    },
    {
      numero: 4,
      creditosTotales: 24,
      cursos: [
        { nombre: "Cálculo Numérico", creditos: 3, ciclo: 4 },
        { nombre: "Ecuaciones Diferenciales", creditos: 5, ciclo: 4 },
        { nombre: "Física II", creditos: 5, ciclo: 4 },
        { nombre: "Estadística Aplicada", creditos: 3, ciclo: 4 },
        { nombre: "Desarrollo Personal", creditos: 2, ciclo: 4 },
        { nombre: "Metodología de los Sistemas Blandos", creditos: 3, ciclo: 4 },
        { nombre: "Modelado Conceptual de Datos", creditos: 3, ciclo: 4 }
      ]
    },
    {
      numero: 5,
      creditosTotales: 21,
      cursos: [
        { nombre: "Matemática Aplicada", creditos: 3, ciclo: 5 },
        { nombre: "Diseño de Base de Datos", creditos: 3, ciclo: 5 },
        { nombre: "Realidad Nacional. Constitución y Derechos Humanos", creditos: 3, ciclo: 5 },
        { nombre: "Investigación de Operaciones I", creditos: 3, ciclo: 5 },
        { nombre: "Economía General", creditos: 3, ciclo: 5 },
        { nombre: "Teoría Organizacional", creditos: 3, ciclo: 5 },
        { nombre: "Ingeniería de Procesos", creditos: 3, ciclo: 5 }
      ]
    },
    {
      numero: 6,
      creditosTotales: 22,
      cursos: [
        { nombre: "Sistema y Gestión Financiera", creditos: 3, ciclo: 6 },
        { nombre: "Modelado de Procesos de Ciclo de Vida de Sistemas", creditos: 3, ciclo: 6 },
        { nombre: "Investigación de Operaciones II", creditos: 3, ciclo: 6 },
        { nombre: "Dinámica de Sistemas", creditos: 3, ciclo: 6 },
        { nombre: "Análisis y Diseño de Sistemas", creditos: 4, ciclo: 6 },
        { nombre: "Arquitectura Empresarial", creditos: 3, ciclo: 6 },
        { nombre: "Arquitectura Computacional y Redes", creditos: 3, ciclo: 6 }
      ]
    },
    {
      numero: 7,
      creditosTotales: 19,
      cursos: [
        { nombre: "Sistemas de Calidad", creditos: 3, ciclo: 7 },
        { nombre: "Sistemas Integrados Empresariales", creditos: 3, ciclo: 7 },
        { nombre: "Modelado Sistémico y Simulación", creditos: 3, ciclo: 7 },
        { nombre: "Taller de Dinámica de Sistemas", creditos: 2, ciclo: 7 },
        { nombre: "Gestión de la Ingeniería de Sistemas", creditos: 3, ciclo: 7 },
        { nombre: "Estándares de la Ing. de Sistemas", creditos: 2, ciclo: 7 },
        { nombre: "Ingeniería de Software", creditos: 3, ciclo: 7 }
      ]
    },
    {
      numero: 8,
      creditosTotales: 15,
      cursos: [
        { nombre: "Modelo del Sistema Viable", creditos: 3, ciclo: 8 },
        { nombre: "Planeamiento y Gestión Estratégica", creditos: 3, ciclo: 8 },
        { nombre: "Sistemas Analiticos", creditos: 2, ciclo: 8 },
        { nombre: "Integración de Sistemas", creditos: 2, ciclo: 8 },
        { nombre: "Sistemas de Inteligencia de Negocio", creditos: 3, ciclo: 8 },
        { nombre: "Desarrollo Adaptativo e Integrado del SW", creditos: 2, ciclo: 8 }
      ]
    },
    {
      numero: 9,
      creditosTotales: 13,
      cursos: [
        { nombre: "Taller de proyecto de investigación", creditos: 2, ciclo: 9 },
        { nombre: "Ingeniería de Sistemas de Servicio", creditos: 3, ciclo: 9 },
        { nombre: "Implementacion de Sistemas", creditos: 2, ciclo: 9 },
        { nombre: "Seguridad de Sistemas", creditos: 3, ciclo: 9 },
        { nombre: "Diseño y Evaluación de Proyectos", creditos: 3, ciclo: 9 }
      ]
    },
    {
      numero: 10,
      creditosTotales: 13,
      cursos: [
        { nombre: "Taller de investigación", creditos: 2, ciclo: 10 },
        { nombre: "Gestión de Proyectos", creditos: 2, ciclo: 10 },
        { nombre: "Auditoria de Sistemas", creditos: 3, ciclo: 10 },
        { nombre: "Aplicación de Negocios Electrónicos.", creditos: 3, ciclo: 10 },
        { nombre: "Ingeniería Empresarial", creditos: 3, ciclo: 10 }
      ]
    }
  ],
  cursosRelacionados: [
    "Introducción a la Computación", "Algoritmia y Estructura de datos", "Matemática Discreta", 
    "Calculo Multivariable", "Estadística y Probabilidades", "Programación Orientada a Objetos", 
    "Cálculo Numérico", "Estadística Aplicada", "Modelado Conceptual de Datos", "Matemática Aplicada", 
    "Diseño de Base de Datos", "Investigación de Operaciones I", "Investigación de Operaciones II", 
    "Arquitectura Computacional y Redes", "Modelado Sistémico y Simulación", "Ingeniería de Software", 
    "Sistemas Analiticos", "Sistemas de Inteligencia de Negocio"
  ]
};

export const mallaIngenieriaSistemasPUCP: MallaCurricular = {
  universidad: "PUCP",
  carrera: "Ingeniería Informática",
  creditosObligatorios: 211.25,
  cursosIA_BigData: 21,
  ciclos: [
    {
      numero: 1,
      creditosTotales: 16,
      cursos: [
        { nombre: "Algebra matricial y geometría analítica", creditos: 4, ciclo: 1 },
        { nombre: "Fundamentos de cálculo", creditos: 4, ciclo: 1 },
        { nombre: "Fundamentos de física", creditos: 3, ciclo: 1 },
        { nombre: "Química 1", creditos: 3, ciclo: 1 },
        { nombre: "Comunicación académica", creditos: 2, ciclo: 1 }
      ]
    },
    {
      numero: 2,
      creditosTotales: 16,
      cursos: [
        { nombre: "Cálculo diferencial", creditos: 4, ciclo: 2 },
        { nombre: "Fisica I", creditos: 4, ciclo: 2 },
        { nombre: "Dibujo en ingeniería", creditos: 3, ciclo: 2 },
        { nombre: "Trabajo académico", creditos: 2, ciclo: 2 },
        { nombre: "Ciencia y filosofía", creditos: 2, ciclo: 2 }
      ]
    },
    {
      numero: 3,
      creditosTotales: 18,
      cursos: [
        { nombre: "Cálculo integral", creditos: 4, ciclo: 3 },
        { nombre: "Cálculo en varias variables", creditos: 4, ciclo: 3 },
        { nombre: "Fisica 2", creditos: 4, ciclo: 3 },
        { nombre: "Fundamentos de programación", creditos: 2, ciclo: 3 },
        { nombre: "Estructuras discretas", creditos: 4, ciclo: 3 }
      ]
    },
    {
      numero: 4,
      creditosTotales: 12,
      cursos: [
        { nombre: "Cálculo aplicado", creditos: 4, ciclo: 4 },
        { nombre: "Física 3", creditos: 4, ciclo: 4 },
        { nombre: "Técnicas de programación", creditos: 4, ciclo: 4 }
      ]
    },
    {
      numero: 5,
      creditosTotales: 19,
      cursos: [
        { nombre: "Taller de Habilidades Interpersonales", creditos: 1, ciclo: 5 },
        { nombre: "Empresa y su Entorno", creditos: 2, ciclo: 5 },
        { nombre: "Programación 2", creditos: 4, ciclo: 5 },
        { nombre: "Algoritmia y Estructura de Datos", creditos: 3, ciclo: 5 },
        { nombre: "Fundamentos de Sistemas de Información", creditos: 3, ciclo: 5 },
        { nombre: "Base de Datos", creditos: 3, ciclo: 5 },
        { nombre: "Ingeniería de Requisitos", creditos: 3, ciclo: 5 }
      ]
    },
    {
      numero: 6,
      creditosTotales: 18,
      cursos: [
        { nombre: "Contabilidad y Finanzas", creditos: 2, ciclo: 6 },
        { nombre: "Arquitectura de Computadoras", creditos: 3, ciclo: 6 },
        { nombre: "Probabilidad y Estadística", creditos: 3, ciclo: 6 },
        { nombre: "Sistemas Operativos", creditos: 2, ciclo: 6 },
        { nombre: "Programación 3", creditos: 4, ciclo: 6 },
        { nombre: "Arquitectura de Software", creditos: 2, ciclo: 6 },
        { nombre: "Algoritmos Avanzados", creditos: 2, ciclo: 6 }
      ]
    },
    {
      numero: 7,
      creditosTotales: 18,
      cursos: [
        { nombre: "Experimentación Numérica", creditos: 2, ciclo: 7 },
        { nombre: "Inteligencia Artificial", creditos: 3, ciclo: 7 },
        { nombre: "Modelado y Automatización de Procesos Empresariales", creditos: 3, ciclo: 7 },
        { nombre: "Administración de Sistemas Operativos", creditos: 2, ciclo: 7 },
        { nombre: "Diseño de Software", creditos: 2, ciclo: 7 },
        { nombre: "Ingeniería Económica", creditos: 3, ciclo: 7 },
        { nombre: "Redes de Computadoras", creditos: 3, ciclo: 7 }
      ]
    },
    {
      numero: 8,
      creditosTotales: 19,
      cursos: [
        { nombre: "Formulación de Proyecto de Fin de Carrera", creditos: 2, ciclo: 8 },
        { nombre: "Ética y RSU en Ingeniería Informática", creditos: 2, ciclo: 8 },
        { nombre: "Ingeniería de Software", creditos: 3, ciclo: 8 },
        { nombre: "Innovación y Emprendimiento con Tecnologías de Informacion", creditos: 3, ciclo: 8 },
        { nombre: "Gobierno y Gestión de Tecnologías de Información", creditos: 3, ciclo: 8 },
        { nombre: "Tecnologías de Información para los Negocios", creditos: 3, ciclo: 8 },
        { nombre: "Seguridad de Información", creditos: 3, ciclo: 8 }
      ]
    },
    {
      numero: 9,
      creditosTotales: 13,
      cursos: [
        { nombre: "Proyecto de Fin de Carrera 1", creditos: 2, ciclo: 9 },
        { nombre: "Arquitectura Empresarial", creditos: 3, ciclo: 9 },
        { nombre: "Implantación de Sistemas de Información", creditos: 3, ciclo: 9 },
        { nombre: "Proyecto de Diseño y Desarrollo de Software", creditos: 2, ciclo: 9 },
        { nombre: "Gestión de Proyectos", creditos: 3, ciclo: 9 }
      ]
    },
    {
      numero: 10,
      creditosTotales: 10,
      cursos: [
        { nombre: "Proyecto de Fin de Carrera 2", creditos: 2, ciclo: 10 },
        { nombre: "Proyecto de Implementación de Software", creditos: 2, ciclo: 10 },
        { nombre: "Estrategia y Gestión de Sistemas de Información", creditos: 3, ciclo: 10 }
      ]
    }
  ],
  cursosRelacionados: [
    "Algebra matricial y geometría analítica", "Cálculo en varias variables", "Fundamentos de programación", 
    "Estructuras discretas", "Técnicas de programación", "Programación 2", "Algoritmia y Estructura de Datos", 
    "Base de Datos", "Arquitectura de Computadoras", "Probabilidad y Estadística", "Sistemas Operativos", 
    "Programación 3", "Arquitectura de Software", "Algoritmos Avanzados", "Experimentación Numérica", 
    "Inteligencia Artificial", "Diseño de Software", "Redes de Computadoras", "Ingeniería de Software", 
    "Seguridad de Información", "Proyecto de Diseño y Desarrollo de Software"
  ]
};

export const puntajesComparativosIngenieriaSistemas: PuntajeComparativo[] = [
  {
    categoria: "Créditos Totales",
    puntajes: { "UNI": 8.5, "PUCP": 8.5 },
    justificacion: "Ambas universidades presentan un total de créditos casi idéntico (UNI: 212, PUCP: 211.25), por lo que no hay una ventaja competitiva en este criterio. El análisis debe centrarse en la eficiencia y estructura de dichos créditos."
  },
  {
    categoria: "Base Matemática y de Ciencias",
    puntajes: { "UNI": 9.0, "PUCP": 8.0 },
    justificacion: "UNI presenta una base matemática más robusta con cursos como 'Cálculo Multivariable', 'Ecuaciones Diferenciales', 'Matemática Discreta', 'Estadística y Probabilidades', 'Estadística Aplicada', 'Matemática Aplicada' y 'Cálculo Numérico'. PUCP tiene una formación sólida pero menos intensiva en matemáticas avanzadas."
  },
  {
    categoria: "Cursos de IA/Big Data/tecnologías emergentes",
    puntajes: { "UNI": 7.0, "PUCP": 9.0 },
    justificacion: "UNI cuenta con 18 cursos relacionados incluyendo 'Sistemas de Inteligencia de Negocio', 'Sistemas Analiticos', 'Modelado Sistémico y Simulación'. PUCP supera con 21 cursos, destacando 'Inteligencia Artificial', 'Experimentación Numérica', 'Seguridad de Información', mostrando mayor modernización tecnológica."
  },
  {
    categoria: "Formación en Investigación",
    puntajes: { "UNI": 8.0, "PUCP": 9.0 },
    justificacion: "UNI tiene 'Metodología de la Investigación', 'Taller de proyecto de investigación' y 'Taller de investigación'. PUCP presenta una estructura más sólida con 'Proyecto de Fin de Carrera 1 y 2', 'Formulación de Proyecto de Fin de Carrera', ofreciendo mayor continuidad en el proceso investigativo."
  },
  {
    categoria: "Cursos de Integración Interdisciplinaria",
    puntajes: { "UNI": 8.5, "PUCP": 7.5 },
    justificacion: "UNI muestra fortaleza con cursos como 'Teoría y Ciencia de Sistemas', 'Sistemas Biológicos y Ecológicos', 'Dinámica de Sistemas', 'Arquitectura Empresarial', 'Ingeniería de Procesos'. PUCP tiene integración pero más enfocada en aspectos técnicos específicos."
  }
];

export const analisisFODAUNI: AnalisisFODA = {
  fortalezas: [
    "Base matemática excepcionalmente robusta con 7 cursos especializados: 'Matemática Discreta' (3 créditos), 'Cálculo Multivariable' (5 créditos), 'Ecuaciones Diferenciales' (5 créditos), 'Estadística y Probabilidades' (3 créditos), 'Estadística Aplicada' (3 créditos), 'Matemática Aplicada' (3 créditos) y 'Cálculo Numérico' (3 créditos), proporcionando fundamentos analíticos superiores para modelado de sistemas complejos.",
    "Enfoque sistémico diferenciador desde el primer ciclo con una secuencia pedagógica única: 'Introducción al Pensamiento y a la Ing. de Sistemas' (ciclo 1), 'Teoría y Ciencia de Sistemas' (ciclo 2), 'Teoría y Ciencia de Sistemas Aplicados' (ciclo 3) y 'Dinámica de Sistemas' (ciclo 6), construyendo pensamiento sistémico progresivo.",
    "Formación interdisciplinaria innovadora con cursos únicos en el mercado peruano: 'Sistemas Biológicos y Ecológicos' (2 créditos) y 'Psicología Sistémica' (3 créditos), preparando profesionales con visión holística para resolver problemas complejos organizacionales.",
    "Equilibrio crediticio óptimo con 212 créditos, superando el mínimo de 200 créditos establecido en los artículos 41 y 42 de la Ley Universitaria, distribuyendo la carga entre 20-24 créditos por ciclo sin sobrecarga excesiva en los primeros 6 ciclos."
  ],
  oportunidades: [
    "Artículo 40 de la Ley Universitaria que permite actualizaciones curriculares cada 3 años o cuando sea conveniente por avances científicos y tecnológicos, creando ventana de oportunidad legal para modernizar nomenclatura de cursos como 'Sistemas Analíticos' hacia 'Analytics y Big Data' sin modificar estructura crediticia.",
    "Posicionamiento único para liderar transformación digital empresarial aprovechando fortalezas en 'Dinámica de Sistemas', 'Arquitectura Empresarial' y 'Modelado de Procesos de Ciclo de Vida de Sistemas', competencias críticas para la industria 4.0.",
    "Demanda creciente del mercado por profesionales con visión sistémica integral, especialmente en sectores como fintech, healthtech y govtech, donde la comprensión holística de sistemas complejos es diferenciador competitivo clave."
  ],
  debilidades: [
    "Brecha tecnológica crítica evidenciada en solo 18 cursos relacionados a IA/Big Data/tecnologías emergentes versus 21 de PUCP. UNI carece de cursos específicos en Machine Learning directo, mientras PUCP incluye 'Inteligencia Artificial' (3 créditos) como curso independiente.",
    "Nomenclatura desactualizada que compromete empleabilidad: 'Sistemas Analíticos' en lugar de 'Business Analytics', 'Sistemas de Inteligencia de Negocio' versus terminología moderna 'Business Intelligence & Machine Learning', creando desconexión con expectativas del mercado laboral.",
    "Ausencia total de metodologías ágiles y DevOps en la malla curricular, competencias esenciales demandadas por el 89% de empresas tecnológicas según estudios sectoriales, representando una desventaja competitiva significativa frente a egresados de otras universidades.",
    "Distribución desigual de carga académica con ciclos sobrecargados: ciclo 4 (24 créditos, 7 cursos) y ciclo 6 (22 créditos, 7 cursos) generan estrés académico innecesario que compromete profundidad de aprendizaje, aunque respeta el mínimo de 200 créditos de los artículos 41 y 42 de la Ley Universitaria."
  ],
  amenazas: [
    "PUCP se posiciona agresivamente con mayor modernidad tecnológica evidenciada en su curso específico 'Inteligencia Artificial' y mayor cantidad de cursos tecnológicos, atrayendo talento orientado hacia innovación y empleabilidad inmediata.",
    "Velocidad acelerada de obsolescencia tecnológica donde el 70% de habilidades digitales requieren actualización cada 2-3 años, mientras la nomenclatura de UNI permanece estática, arriesgando relevancia en el mercado laboral.",
    "Competidores aprovechan mejor las oportunidades legales de actualización curricular, implementando programas más alineados con Industry 4.0, IoT, y economía digital, mientras UNI mantiene enfoque tradicional a pesar de sus fortalezas sistémicas."
  ]
};

export const planAccionUNI: PlanAccion[] = [
  {
    titulo: "Modernización Estratégica de Nomenclatura Tecnológica",
    descripcion: "Ejecutar inmediatamente la actualización de nomenclatura crítica amparada en el artículo 40 de la Ley Universitaria por avances tecnológicos: 'Sistemas Analíticos' → 'Business Analytics & Big Data', 'Sistemas de Inteligencia de Negocio' → 'Business Intelligence & Machine Learning', 'Desarrollo Adaptativo e Integrado del SW' → 'DevOps & Continuous Integration'. Incorporar laboratorios con Python, R, TensorFlow, Kubernetes y Power BI sin modificar estructura crediticia de 212 créditos.",
    prioridad: "Crítica",
    plazo: "Inmediato (6 meses)"
  },
  {
    titulo: "Implementación de Metodologías Ágiles y DevOps",
    descripcion: "Crear dos nuevos cursos obligatorios fundamentados en el artículo 40 de la Ley Universitaria por avances tecnológicos: 'Metodologías Ágiles y Gestión de Proyectos Scrum' (3 créditos, ciclo 7) y 'DevOps y Automatización de Procesos Empresariales' (3 créditos, ciclo 8). Redistribuir créditos optimizando cursos actuales para mantener los 212 créditos totales que superan el mínimo de los artículos 41 y 42, cerrando la brecha del 89% de demanda empresarial.",
    prioridad: "Alta",
    plazo: "Corto (1 año)"
  },
  {
    titulo: "Especialización Avanzada en Inteligencia Artificial Sistémica",
    descripcion: "Transformar 'Sistemas de Inteligencia de Negocio' (3 créditos) en una secuencia especializada: 'Fundamentos de IA y Machine Learning Sistémico' (3 créditos, ciclo 7) e 'IA Aplicada a Arquitecturas Empresariales' (4 créditos, ciclo 8). Aprovechar la fortaleza única en pensamiento sistémico para diferenciarse de competidores, integrando IA con 'Dinámica de Sistemas' y 'Arquitectura Empresarial'.",
    prioridad: "Alta",
    plazo: "Corto (1 año)"
  },
  {
    titulo: "Rebalanceo de Carga Académica para Optimización de Aprendizaje",
    descripcion: "Redistribuir la carga de ciclos sobrecargados (ciclo 4: 24 créditos/7 cursos, ciclo 6: 22 créditos/7 cursos) hacia un máximo de 21 créditos/6 cursos por ciclo. Fusionar cursos complementarios como 'Teoría y Ciencia de Sistemas' con 'Sistemas Aplicados' en una secuencia más eficiente, liberando espacio curricular para tecnologías emergentes. Esta reestructuración respeta los artículos 41 y 42 de la Ley Universitaria manteniendo 212 créditos.",
    prioridad: "Media",
    plazo: "Mediano (1.5 años)"
  },
  {
    titulo: "Centro de Excelencia en Transformación Digital Sistémica",
    descripcion: "Establecer un laboratorio especializado que capitalice las fortalezas diferenciadoras de UNI en 'Dinámica de Sistemas', 'Arquitectura Empresarial' y 'Modelado de Procesos' para casos reales de transformación digital. Crear alianzas con fintech, healthtech y govtech donde la visión sistémica integral sea ventaja competitiva clave, posicionando a UNI como líder en consultoría de sistemas complejos.",
    prioridad: "Media",
    plazo: "Mediano (2 años)"
  },
  {
    titulo: "Programa de Actualización Docente en Tecnologías Emergentes",
    descripcion: "Implementar programa de certificación intensiva para docentes en herramientas como TensorFlow, AWS, Azure, metodologías ágiles y business analytics. Establecer alianzas con Microsoft, Google y AWS para certificaciones oficiales del cuerpo docente. Esta actualización docente es esencial para implementar las modernizaciones curriculares sustentadas en el artículo 40 de la Ley Universitaria, garantizando expertise técnico actualizado y casos de estudio reales del mercado.",
    prioridad: "Alta",
    plazo: "Corto (8 meses)"
  }
];