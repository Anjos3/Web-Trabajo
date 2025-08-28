import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaCienciaComputacionUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ciencia de la Computación",
  creditosObligatorios: 200,
  cursosIA_BigData: 31,
  ciclos: [
    {
      numero: 1,
      creditosTotales: 21,
      cursos: [
        { nombre: "Física I", creditos: 5, ciclo: 1 },
        { nombre: "Introducción a la Computación", creditos: 2, ciclo: 1 },
        { nombre: "Cálculo Diferencial", creditos: 5, ciclo: 1 },
        { nombre: "Álgebra Lineal", creditos: 4, ciclo: 1 },
        { nombre: "Química I", creditos: 5, ciclo: 1 }
      ]
    },
    {
      numero: 2,
      creditosTotales: 21,
      cursos: [
        { nombre: "Cálculo Integral", creditos: 5, ciclo: 2 },
        { nombre: "Redacción y Comunicación", creditos: 2, ciclo: 2 },
        { nombre: "Inglés I", creditos: 2, ciclo: 2 },
        { nombre: "Álgebra Lineal", creditos: 5, ciclo: 2 },
        { nombre: "Fundamentos de Programación", creditos: 4, ciclo: 2 },
        { nombre: "Cálculo de Probabilidades", creditos: 3, ciclo: 2 }
      ]
    },
    {
      numero: 3,
      creditosTotales: 22,
      cursos: [
        { nombre: "Cálculo Diferencial e Integral Avanzado", creditos: 7, ciclo: 3 },
        { nombre: "Matemática Discreta", creditos: 4, ciclo: 3 },
        { nombre: "Programación Orientada a Objetos", creditos: 4, ciclo: 3 },
        { nombre: "Arquitectura de Computadores", creditos: 4, ciclo: 3 },
        { nombre: "Estadística Inferencial", creditos: 3, ciclo: 3 }
      ]
    },
    {
      numero: 4,
      creditosTotales: 22,
      cursos: [
        { nombre: "Economía General", creditos: 3, ciclo: 4 },
        { nombre: "Base de Datos", creditos: 4, ciclo: 4 },
        { nombre: "Sistemas Operativos", creditos: 4, ciclo: 4 },
        { nombre: "Algoritmos y Estructura de Datos", creditos: 4, ciclo: 4 },
        { nombre: "Introducción a la Electricidad y Magnetismo", creditos: 5, ciclo: 4 },
        { nombre: "Idioma Extranjero o Lengua Nativa en el Nivel Intermedio", creditos: 2, ciclo: 4 }
      ]
    },
    {
      numero: 5,
      creditosTotales: 21,
      cursos: [
        { nombre: "Análisis y Diseño de Algoritmos", creditos: 4, ciclo: 5 },
        { nombre: "Computación Centrada en Redes", creditos: 4, ciclo: 5 },
        { nombre: "Teoría de Autómatas, Lenguajes y Computación", creditos: 4, ciclo: 5 },
        { nombre: "Ingeniería de Software", creditos: 4, ciclo: 5 },
        { nombre: "Análisis y Modelamiento Numérico I", creditos: 5, ciclo: 5 }
      ]
    },
    {
      numero: 6,
      creditosTotales: 21,
      cursos: [
        { nombre: "Realidad Nacional, Constitución y Derechos Humanos", creditos: 3, ciclo: 6 },
        { nombre: "Ética y Filosofía Política", creditos: 2, ciclo: 6 },
        { nombre: "Administración de Redes", creditos: 4, ciclo: 6 },
        { nombre: "Matemática Computacional", creditos: 4, ciclo: 6 },
        { nombre: "Programación Paralela", creditos: 4, ciclo: 6 },
        { nombre: "Desarrollo de Software", creditos: 4, ciclo: 6 }
      ]
    },
    {
      numero: 7,
      creditosTotales: 22,
      cursos: [
        { nombre: "Seguridad en Sistemas Informáticos", creditos: 4, ciclo: 7 },
        { nombre: "Inteligencia Artificial", creditos: 4, ciclo: 7 },
        { nombre: "Computación Gráfica", creditos: 4, ciclo: 7 },
        { nombre: "Programación Concurrente y Distribuida", creditos: 4, ciclo: 7 },
        { nombre: "Interacción Humano-Computador", creditos: 4, ciclo: 7 },
        { nombre: "Metodología de la Investigación", creditos: 2, ciclo: 7 }
      ]
    },
    {
      numero: 8,
      creditosTotales: 16,
      cursos: [
        { nombre: "Proyecto de Tesis I", creditos: 4, ciclo: 8 },
        { nombre: "Infraestructura de Computación", creditos: 4, ciclo: 8 },
        { nombre: "Robótica", creditos: 4, ciclo: 8 },
        { nombre: "Minería de Datos", creditos: 4, ciclo: 8 }
      ]
    },
    {
      numero: 9,
      creditosTotales: 12,
      cursos: [
        { nombre: "Proyecto de Tesis II", creditos: 4, ciclo: 9 },
        { nombre: "Programación Evolutiva", creditos: 4, ciclo: 9 },
        { nombre: "Análisis en Macrodatos", creditos: 4, ciclo: 9 }
      ]
    },
    {
      numero: 10,
      creditosTotales: 8,
      cursos: [
        { nombre: "Proyecto de Tesis III", creditos: 4, ciclo: 10 },
        { nombre: "Actividades Extracurriculares", creditos: 1, ciclo: 10 },
        { nombre: "Prácticas Pre-Profesionales II", creditos: 2, ciclo: 10 },
        { nombre: "Ayudantía Académica I", creditos: 1, ciclo: 10 }
      ]
    }
  ],
  cursosRelacionados: [
    "Introducción a la Computación", "Cálculo Diferencial", "Álgebra Lineal",
    "Cálculo Integral", "Fundamentos de Programación", "Cálculo de Probabilidades",
    "Cálculo Diferencial e Integral Avanzado", "Matemática Discreta", "Programación Orientada a Objetos",
    "Arquitectura de Computadores", "Estadística Inferencial", "Base de Datos",
    "Sistemas Operativos", "Algoritmos y Estructura de Datos", "Análisis y Diseño de Algoritmos",
    "Teoría de Autómatas, Lenguajes y Computación", "Ingeniería de Software",
    "Análisis y Modelamiento Numérico I", "Administración de Redes", "Matemática Computacional",
    "Programación Paralela", "Seguridad en Sistemas Informáticos", "Computación Gráfica",
    "Inteligencia Artificial", "Programación Concurrente y Distribuida", "Interacción Humano-Computador",
    "Infraestructura de Computación", "Robótica", "Minería de Datos",
    "Programación Evolutiva", "Análisis en Macrodatos"
  ]
};

export const mallaCienciaComputacionUTEC: MallaCurricular = {
  universidad: "UTEC",
  carrera: "Ciencia de la Computación",
  creditosObligatorios: 209,
  cursosIA_BigData: 31,
  ciclos: [
    {
      numero: 1,
      creditosTotales: 20,
      cursos: [
        { nombre: "Programación I", creditos: 4, ciclo: 1 },
        { nombre: "Introducción a la Ciencia de la Computación", creditos: 4, ciclo: 1 },
        { nombre: "Matemáticas Discretas I", creditos: 2, ciclo: 1 },
        { nombre: "Laboratorio de Comunicación 1", creditos: 4, ciclo: 1 },
        { nombre: "Proyectos Interdisciplinarios 1", creditos: 3, ciclo: 1 },
        { nombre: "Cálculo de una Variable", creditos: 3, ciclo: 1 }
      ]
    },
    {
      numero: 2,
      creditosTotales: 20,
      cursos: [
        { nombre: "Programación II", creditos: 4, ciclo: 2 },
        { nombre: "Cálculo Vectorial", creditos: 3, ciclo: 2 },
        { nombre: "Álgebra Lineal", creditos: 2, ciclo: 2 },
        { nombre: "Óptica y Ondas", creditos: 4, ciclo: 2 },
        { nombre: "Matemáticas Discretas II", creditos: 4, ciclo: 2 },
        { nombre: "Laboratorio de Comunicación 2", creditos: 3, ciclo: 2 }
      ]
    },
    {
      numero: 3,
      creditosTotales: 22,
      cursos: [
        { nombre: "Ecuaciones Diferenciales", creditos: 3, ciclo: 3 },
        { nombre: "Estadística y Probabilidades I", creditos: 4, ciclo: 3 },
        { nombre: "Desarrollo Basado en Plataformas", creditos: 4, ciclo: 3 },
        { nombre: "Programación III", creditos: 4, ciclo: 3 },
        { nombre: "Base de Datos I", creditos: 4, ciclo: 3 },
        { nombre: "Proyectos Interdisciplinarios 2", creditos: 3, ciclo: 3 }
      ]
    },
    {
      numero: 4,
      creditosTotales: 21,
      cursos: [
        { nombre: "Métodos Numéricos", creditos: 3, ciclo: 4 },
        { nombre: "Algoritmos y Estructuras de Datos", creditos: 4, ciclo: 4 },
        { nombre: "Arquitectura de Computadoras", creditos: 4, ciclo: 4 },
        { nombre: "Teoría de la Computación", creditos: 4, ciclo: 4 },
        { nombre: "Cloud Computing", creditos: 3, ciclo: 4 },
        { nombre: "Empresa y Consumidor", creditos: 3, ciclo: 4 }
      ]
    },
    {
      numero: 5,
      creditosTotales: 21,
      cursos: [
        { nombre: "Compiladores", creditos: 4, ciclo: 5 },
        { nombre: "Base de Datos II", creditos: 3, ciclo: 5 },
        { nombre: "Análisis y Diseño de Algoritmos", creditos: 4, ciclo: 5 },
        { nombre: "Ingeniería de Software", creditos: 4, ciclo: 5 },
        { nombre: "Perú: Temas de la Sociedad Contemporánea", creditos: 3, ciclo: 5 },
        { nombre: "Proyectos Interdisciplinarios 3", creditos: 3, ciclo: 5 }
      ]
    },
    {
      numero: 6,
      creditosTotales: 19,
      cursos: [
        { nombre: "Machine Learning", creditos: 4, ciclo: 6 },
        { nombre: "Estructura de Datos Avanzadas", creditos: 4, ciclo: 6 },
        { nombre: "Programación Competitiva", creditos: 4, ciclo: 6 },
        { nombre: "Sistemas Operativos", creditos: 4, ciclo: 6 },
        { nombre: "Economía, Gobernanza y Relaciones de Poder", creditos: 3, ciclo: 6 }
      ]
    },
    {
      numero: 7,
      creditosTotales: 19,
      cursos: [
        { nombre: "Computación Paralela y Distribuida", creditos: 4, ciclo: 7 },
        { nombre: "Computación Gráfica", creditos: 4, ciclo: 7 },
        { nombre: "Interacción Humano Computador", creditos: 4, ciclo: 7 },
        { nombre: "Redes y Comunicaciones", creditos: 3, ciclo: 7 },
        { nombre: "Electivo Libre 1", creditos: 4, ciclo: 7 }
      ]
    },
    {
      numero: 8,
      creditosTotales: 14,
      cursos: [
        { nombre: "Investigación en Computación", creditos: 3, ciclo: 8 },
        { nombre: "Proyecto Preprofesional", creditos: 8, ciclo: 8 },
        { nombre: "Arte y Tecnología", creditos: 3, ciclo: 8 }
      ]
    },
    {
      numero: 9,
      creditosTotales: 22,
      cursos: [
        { nombre: "Internet de las Cosas", creditos: 4, ciclo: 9 },
        { nombre: "Electivo de Carrera 1", creditos: 4, ciclo: 9 },
        { nombre: "Electivo Libre 2", creditos: 4, ciclo: 9 },
        { nombre: "Ética y Tecnología", creditos: 3, ciclo: 9 },
        { nombre: "Evaluación Financiera de Proyectos", creditos: 3, ciclo: 9 },
        { nombre: "Proyecto Final de Ciencia de la Computación - Trabajo de Investigación I", creditos: 4, ciclo: 9 }
      ]
    },
    {
      numero: 10,
      creditosTotales: 19,
      cursos: [
        { nombre: "Electivo de Carrera 2", creditos: 4, ciclo: 10 },
        { nombre: "Electivo de Carrera 3", creditos: 4, ciclo: 10 },
        { nombre: "Electivo Libre 3", creditos: 4, ciclo: 10 },
        { nombre: "Estrategia y Organizaciones", creditos: 3, ciclo: 10 },
        { nombre: "Trabajo de Investigación", creditos: 4, ciclo: 10 }
      ]
    }
  ],
  cursosRelacionados: [
    "Programación I", "Introducción a la Ciencia de la Computación", "Matemáticas Discretas I", "Cálculo de una Variable",
    "Programación II", "Cálculo Vectorial", "Álgebra Lineal", "Matemáticas Discretas II",
    "Ecuaciones Diferenciales", "Estadística y Probabilidades I", "Desarrollo Basado en Plataformas", "Programación III", "Base de Datos I",
    "Métodos Numéricos", "Algoritmos y Estructuras de Datos", "Arquitectura de Computadoras", "Teoría de la Computación", "Cloud Computing",
    "Compiladores", "Base de Datos II", "Análisis y Diseño de Algoritmos", "Ingeniería de Software",
    "Machine Learning", "Estructura de Datos Avanzadas", "Programación Competitiva", "Sistemas Operativos",
    "Computación Paralela y Distribuida", "Computación Gráfica", "Interacción Humano Computador", "Redes y Comunicaciones",
    "Internet de las Cosas"
  ]
};

export const puntajesComparativos: PuntajeComparativo[] = [
  {
    categoria: "Créditos Totales",
    puntajes: { "UNI": 6.0, "UTEC": 7.5 },
    justificacion: "La UNI tiene 200 créditos mientras UTEC tiene 209 créditos. La mayor carga crediticia de la UNI (200 vs 209) representa una sobrecarga académica significativa que puede comprometer la calidad del aprendizaje. UTEC demuestra mayor eficiencia curricular con menos créditos pero mayor enfoque en competencias clave."
  },
  {
    categoria: "Base Matemática y de Ciencias",
    puntajes: { "UNI": 7.5, "UTEC": 8.5 },
    justificacion: "UNI presenta cursos como 'Cálculo Diferencial e Integral Avanzado' (7 créditos), 'Matemática Computacional' (4 créditos), 'Análisis y Modelamiento Numérico I' (5 créditos). Sin embargo, la concentración excesiva de créditos genera rigidez. UTEC distribuye mejor la formación matemática con 'Cálculo Vectorial', 'Ecuaciones Diferenciales', 'Métodos Numéricos', permitiendo mayor flexibilidad."
  },
  {
    categoria: "Cursos de IA/Big Data/tecnologías emergentes",
    puntajes: { "UNI": 7.5, "UTEC": 8.5 },
    justificacion: "Ambas universidades tienen 31 cursos relacionados a tecnologías. UNI incluye 'Inteligencia Artificial', 'Minería de Datos', 'Programación Evolutiva', 'Análisis en Macrodatos', 'Robótica', 'Computación Gráfica', 'Infraestructura de Computación'. UTEC se destaca con nomenclatura más moderna: 'Machine Learning', 'Cloud Computing', 'Internet de las Cosas', 'Desarrollo Basado en Plataformas'. La ventaja de UTEC radica en la actualización semántica que conecta mejor con el mercado laboral."
  },
  {
    categoria: "Formación en Investigación",
    puntajes: { "UNI": 9.5, "UTEC": 7.5 },
    justificacion: "UNI mantiene su fortaleza con la secuencia 'Proyecto de Tesis I' (4 créditos), 'Proyecto de Tesis II' (4 créditos), 'Proyecto de Tesis III' (4 créditos), más 'Metodología de la Investigación' (2 créditos). UTEC tiene 'Investigación en Computación' (3 créditos) y 'Trabajo de Investigación' (4 créditos), pero menor profundidad."
  },
  {
    categoria: "Cursos de Integración Interdisciplinaria",
    puntajes: { "UNI": 4.0, "UTEC": 9.5 },
    justificacion: "La mayor debilidad de la UNI. No tiene cursos de proyectos interdisciplinarios. UTEC cuenta con 'Proyectos Interdisciplinarios 1' (3 créditos), 'Proyectos Interdisciplinarios 2' (3 créditos), 'Proyectos Interdisciplinarios 3' (3 créditos), 'Proyecto Preprofesional' (8 créditos), fomentando la integración de conocimientos y trabajo colaborativo desde el primer ciclo."
  }
];

export const analisisFODA: AnalisisFODA = {
  fortalezas: [
    "Diferenciación clara en formación de investigadores a través de una secuencia robusta: 'Metodología de la Investigación' (2 créditos), 'Proyecto de Tesis I' (4 créditos), 'Proyecto de Tesis II' (4 créditos) y 'Proyecto de Tesis III' (4 créditos).",
    "Base matemática sólida con cursos especializados como 'Cálculo Diferencial e Integral Avanzado' (7 créditos), 'Matemática Computacional' (4 créditos) y 'Análisis y Modelamiento Numérico I' (5 créditos).",
    "Prestigio histórico y reconocimiento de marca de la UNI en el campo de la ingeniería, con egresados posicionados en la industria.",
    "Cumplimiento del mínimo de 200 créditos establecido en los artículos 41 y 42 de la Ley Universitaria, aunque con exceso que requiere optimización para mayor eficiencia académica."
  ],
  oportunidades: [
    "El artículo 40 de la Ley Universitaria ampara la actualización de planes de estudio cada 3 años o cuando sea conveniente según avances científicos y tecnológicos, justificando la modernización urgente en IA, Machine Learning y Big Data.",
    "Implementar un eje de proyectos integradores respaldado por el marco legal de actualización curricular, conectando teoría con aplicaciones reales y capitalizando el prestigio institucional.",
    "Establecer alianzas estratégicas con líderes tecnológicos para casos de estudio actualizados, aprovechando la flexibilidad legal para modificaciones curriculares por conveniencia tecnológica."
  ],
  debilidades: [
    "Sobrecarga académica con 200 créditos, aunque cumple el mínimo establecido en artículos 41 y 42 de la Ley Universitaria, la concentración excesiva en ciclos como el 2°, 3°, 4°, 6° y 7° (6 asignaturas) genera estrés académico innecesario.",
    "Ausencia total de cursos de integración interdisciplinaria, evidenciando necesidad de actualización curricular según artículo 40 por conveniencia ante metodologías pedagógicas actuales como los proyectos integradores.",
    "Exceso de créditos en cursos individuales como 'Cálculo Diferencial e Integral Avanzado' (7 créditos), superando eficiencias recomendadas y reduciendo flexibilidad para incorporar tecnologías emergentes dentro del marco de los artículos 41 y 42.",
    "Nomenclatura desactualizada que no refleja avances tecnológicos: 'Minería de Datos' vs 'Machine Learning', 'Análisis en Macrodatos' vs 'Big Data Analytics', requiriendo actualización bajo amparo del artículo 40.",
    "Falta de aprovechamiento del marco legal del artículo 40 para actualizar contenidos según avances científicos y tecnológicos, manteniéndose en nomenclatura obsoleta cuando la ley permite y fomenta la modernización."
  ],
  amenazas: [
    "UTEC aprovecha mejor el marco legal del artículo 40, posicionándose como líder en modernidad tecnológica, mientras UNI no actualiza según avances científicos y tecnológicos permitidos por ley.",
    "El mercado laboral prioriza habilidades de colaboración interdisciplinaria y experiencia en proyectos, evidenciando que otras universidades han actualizado mejor sus currículos según conveniencia tecnológica permitida en el artículo 40.",
    "Riesgo de percepción de incumplimiento del espíritu de actualización continua establecido en la Ley Universitaria, a pesar de la solidez técnica tradicional, lo que puede afectar la competitividad institucional."
  ]
};

export const planAccion: PlanAccion[] = [
  {
    titulo: "Actualización Curricular Urgente según Artículo 40 de la Ley Universitaria",
    descripcion: "Fundamentándose en el artículo 40 que permite actualización de planes cada 3 años o por avances científicos/tecnológicos, modernizar inmediatamente nomenclatura: 'Minería de Datos' → 'Machine Learning Aplicado', 'Análisis en Macrodatos' → 'Big Data Analytics', 'Infraestructura de Computación' → 'Cloud Computing y Arquitecturas Escalables'. Incorporar contenidos de TensorFlow, AWS, Docker sin exceder el marco crediticio de artículos 41 y 42.",
    prioridad: "Crítica",
    plazo: "Inmediato (6 meses)"
  },
  {
    titulo: "Implementación de Proyectos Interdisciplinarios bajo Marco Legal",
    descripcion: "Aprovechando el artículo 40 sobre actualización por conveniencia metodológica, crear: 'Proyecto Integrador I: Fundamentos' (3 créditos, ciclo 3), 'Proyecto Integrador II: Desarrollo de Software' (4 créditos, ciclo 5), 'Proyecto Integrador III: Soluciones Tecnológicas' (4 créditos, ciclo 7). Mantener dentro del marco de artículos 41 y 42 optimizando créditos existentes.",
    prioridad: "Alta",
    plazo: "Corto (1 año)"
  },
  {
    titulo: "Optimización de Carga Crediticia según Artículos 41 y 42",
    descripcion: "Considerando que los artículos 41 y 42 establecen mínimo 200 créditos, optimizar la actual carga de 200 créditos redistribuyendo eficientemente. Modularizar 'Cálculo Diferencial e Integral Avanzado' (7 créditos) en cursos de 4 y 3 créditos. Limitar ciclos a máximo 20 créditos para evitar sobrecarga innecesaria manteniendo calidad académica.",
    prioridad: "Alta",
    plazo: "Corto (8 meses)"
  },
  {
    titulo: "Actualización de Sílabos según Avances Tecnológicos del Artículo 40",
    descripcion: "Respaldándose en el artículo 40 que permite modificaciones por avances científicos y tecnológicos, actualizar sílabos incorporando herramientas actuales: Python, TensorFlow, Kubernetes, metodologías DevOps, frameworks de Machine Learning. Modernizar laboratorios y casos de estudio sin modificar estructura crediticia establecida en artículos 41 y 42.",
    prioridad: "Alta",
    plazo: "Inmediato (4 meses)"
  },
  {
    titulo: "Establecimiento de Alianzas Estratégicas con la Industria Tech",
    descripcion: "Crear un Consejo Consultivo con representantes de Google, Microsoft, Amazon, Rappi, BCP Tech para: definir casos de estudio reales para proyectos integradores, actualizar anualmente los sílabos de cursos de IA/Big Data, establecer programas de prácticas profesionales, y proporcionar mentorías especializadas.",
    prioridad: "Media",
    plazo: "Mediano (1.5 años)"
  },
  {
    titulo: "Creación de Laboratorio de Tecnologías Emergentes",
    descripcion: "Establecer un laboratorio especializado equipado con GPUs para Deep Learning, infraestructura cloud, dispositivos IoT, y plataformas de desarrollo colaborativo. Este laboratorio debe soportar los nuevos cursos de IA y los proyectos interdisciplinarios, garantizando experiencia práctica con tecnologías de punta.",
    prioridad: "Media",
    plazo: "Mediano (2 años)"
  }
];