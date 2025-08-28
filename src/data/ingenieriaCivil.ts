import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaIngenieriaCivilUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ingeniería Civil",
  creditosObligatorios: 223,
  cursosIA_BigData: 4, // Based on user's list
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "DIBUJO DE INGENIERIA I", creditos: 0, ciclo: 1 }, { nombre: "QUIMICA I", creditos: 0, ciclo: 1 }, { nombre: "METODOLOGIA DEL APRENDIZAJE", creditos: 0, ciclo: 1 }, { nombre: "REDACCION Y COMUNICACION", creditos: 0, ciclo: 1 }, { nombre: "CÁLCULO DIFERENCIAL", creditos: 0, ciclo: 1 }, { nombre: "FISICA I", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "DIBUJO DE INGENIERIA II", creditos: 0, ciclo: 2 }, { nombre: "CÁLCULO INTEGRAL", creditos: 0, ciclo: 2 }, { nombre: "ALGEBRA LINEAL", creditos: 0, ciclo: 2 }, { nombre: "ECONOMÍA GENERAL", creditos: 0, ciclo: 2 }, { nombre: "FISICA II", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "MATEMÁTICA III", creditos: 0, ciclo: 3 }, { nombre: "ESTÁTICA", creditos: 0, ciclo: 3 }, { nombre: "TECNOLOGÍA DE LOS MATERIALES", creditos: 0, ciclo: 3 }, { nombre: "ESTADISTICA Y PROBABILIDADES", creditos: 0, ciclo: 3 }, { nombre: "INTRODUCCIÓN A LA COMPUTACIÓN", creditos: 0, ciclo: 3 }, { nombre: "TOPOGRAFIA I", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "ÉTICA Y FILOSOFÍA POLÍTICA", creditos: 0, ciclo: 4 }, { nombre: "MATEMÁTICA IV", creditos: 0, ciclo: 4 }, { nombre: "PROGRAMACIÓN DIGITAL APLICADA A LA INGENIERIA CIVIL", creditos: 0, ciclo: 4 }, { nombre: "TECNOLOGÍA DE LA CONSTRUCCIÓN I", creditos: 0, ciclo: 4 }, { nombre: "DINÁMICA", creditos: 0, ciclo: 4 }, { nombre: "GEOLOGIA GENERAL", creditos: 0, ciclo: 4 }, { nombre: "TOPOGRAFIA II", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "MECANICA DE SUELOS I", creditos: 0, ciclo: 5 }, { nombre: "TECNOLOGÍA DEL CONCRETO I", creditos: 0, ciclo: 5 }, { nombre: "RESISTENCIA DE MATERIALES", creditos: 0, ciclo: 5 }, { nombre: "MECANICA DE FLUIDOS I", creditos: 0, ciclo: 5 }, { nombre: "MÉTODOS NUMERICOS", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "TECNOLOGIA DE LA CONSTRUCCIÓN II", creditos: 0, ciclo: 6 }, { nombre: "REALIDAD NACIONAL, CONSTITUCIÓN Y DERECHOS HUMANOS", creditos: 0, ciclo: 6 }, { nombre: "ANÁLISIS ESTRUCTURAL I", creditos: 0, ciclo: 6 }, { nombre: "MECANICA DE SUELOS II", creditos: 0, ciclo: 6 }, { nombre: "MECANICA DE FLUIDOS II", creditos: 0, ciclo: 6 }, { nombre: "INGENIERIA DE TRANSPORTES", creditos: 0, ciclo: 6 }, { nombre: "IDIOMA EXTRANJERO O LENGUA NATIVA EN NIVEL INTERMEDIO", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "GESTIÓN INTEGRADA EN LA CONSTRUCCIÓN", creditos: 0, ciclo: 7 }, { nombre: "EVALUACIÓN DE IMPACTO AMBIENTAL", creditos: 0, ciclo: 7 }, { nombre: "CONCRETO ARMADO Ι", creditos: 0, ciclo: 7 }, { nombre: "GEOLOGIA APLICADA", creditos: 0, ciclo: 7 }, { nombre: "HIDROLOGIA GENERAL", creditos: 0, ciclo: 7 }, { nombre: "DISEÑO VIAL", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "GESTIÓN DE PROYECTOS DE CONSTRUCCIÓN I", creditos: 0, ciclo: 8 }, { nombre: "ACONDICIONAMIENTO TERRITORIAL I", creditos: 0, ciclo: 8 }, { nombre: "INSTALACIONES SANITARIAS Y ELÉCTRICAS", creditos: 0, ciclo: 8 }, { nombre: "INGENIERIA SISMORRESISTENTE Y PREVENCIÓN DE DESASTRES", creditos: 0, ciclo: 8 }, { nombre: "DISEÑO EN ACERO", creditos: 0, ciclo: 8 }, { nombre: "RECURSOS HIDRAULICOS", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "GESTIÓN DE PROYECTOS DE CONSTRUCCIÓN II", creditos: 0, ciclo: 9 }, { nombre: "PUENTES Y OBRAS DE ARTE", creditos: 0, ciclo: 9 }, { nombre: "ALBAÑILERIA, ADOBE Y MADERA", creditos: 0, ciclo: 9 }, { nombre: "ARQUITECTURA Y MODELOS ESTRUCTURALES", creditos: 0, ciclo: 9 }, { nombre: "ABASTECIMIENTO DE AGUA Y ALCANTARILLADO", creditos: 0, ciclo: 9 }, { nombre: "TALLER DE COMPETENCIA PROFESIONAL", creditos: 0, ciclo: 9 }, { nombre: "SEMINARIO DE TESIS", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "LEGISLACIÓN", creditos: 0, ciclo: 10 }, { nombre: "GESTIÓN EMPRESARIAL EN LA CONSTRUCCION I", creditos: 0, ciclo: 10 }, { nombre: "IRRIGACIÓN", creditos: 0, ciclo: 10 }, { nombre: "ACTIVIDADES EXTRACURRICULARES", creditos: 0, ciclo: 10 }, { nombre: "CURSO ELECTIVO DE ESPECIALIDAD", creditos: 0, ciclo: 10 }, { nombre: "CURSO ELECTIVO DE ESPECIALIDAD", creditos: 0, ciclo: 10 }, { nombre: "CURSO ELECTIVO DE ESPECIALIDAD", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["PROGRAMACIÓN DIGITAL APLICADA A LA INGENIERIA CIVIL", "TECNOLOGÍA DE LA CONSTRUCCIÓN I", "MÉTODOS NUMERICOS", "INGENIERIA SISMORRESISTENTE Y PREVENCIÓN DE DESASTRES"]
};

export const mallaIngenieriaCivilUTEC: MallaCurricular = {
  universidad: "UTEC",
  carrera: "Ingeniería Civil",
  creditosObligatorios: 212,
  cursosIA_BigData: 9, // Based on user's list
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Programación 1", creditos: 0, ciclo: 1 }, { nombre: "Cálculo de una Variable", creditos: 0, ciclo: 1 }, { nombre: "Química General", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Química General", creditos: 0, ciclo: 1 }, { nombre: "Introducción a la Ingeniería Civil", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Comunicación 1", creditos: 0, ciclo: 1 }, { nombre: "Proyectos Interdisciplinarios 1", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Programación II", creditos: 0, ciclo: 2 }, { nombre: "Introducción a la Mecánica", creditos: 0, ciclo: 2 }, { nombre: "Cálculo Vectorial", creditos: 0, ciclo: 2 }, { nombre: "Geometría Descriptiva", creditos: 0, ciclo: 2 }, { nombre: "Perú: Temas de la sociedad contemporánea", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de Comunicación 2", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Ecuaciones Diferenciales", creditos: 0, ciclo: 3 }, { nombre: "Fundamentos de Electricidad y Magnetismo", creditos: 0, ciclo: 3 }, { nombre: "Termodinámica", creditos: 0, ciclo: 3 }, { nombre: "Álgebra Lineal", creditos: 0, ciclo: 3 }, { nombre: "Introducción a la Mecánica de Sólidos", creditos: 0, ciclo: 3 }, { nombre: "Proyectos Interdisciplinarios 2", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Estadística y Probabilidades I", creditos: 0, ciclo: 4 }, { nombre: "Ciencia de los Materiales", creditos: 0, ciclo: 4 }, { nombre: "Geomática I", creditos: 0, ciclo: 4 }, { nombre: "Dinámica y Vibraciones", creditos: 0, ciclo: 4 }, { nombre: "Tecnologías Aplicadas en Ingeniería Civil", creditos: 0, ciclo: 4 }, { nombre: "Empresa y Consumidor", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Métodos Numéricos", creditos: 0, ciclo: 5 }, { nombre: "Mecánica Estructural", creditos: 0, ciclo: 5 }, { nombre: "Tecnología de los Materiales de Construcción", creditos: 0, ciclo: 5 }, { nombre: "Mecánica de Fluidos en Ingeniería Civil", creditos: 0, ciclo: 5 }, { nombre: "Geología", creditos: 0, ciclo: 5 }, { nombre: "Proyectos Interdisciplinarios 3", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Análisis Estructural", creditos: 0, ciclo: 6 }, { nombre: "Tecnología del Concreto", creditos: 0, ciclo: 6 }, { nombre: "Mecánica de Suelos", creditos: 0, ciclo: 6 }, { nombre: "Hidrología", creditos: 0, ciclo: 6 }, { nombre: "Planeamiento de Sistemas Urbanos", creditos: 0, ciclo: 6 }, { nombre: "Economía, gobernanza y relaciones de poder", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Ingeniería de Costos en la Construcción", creditos: 0, ciclo: 7 }, { nombre: "Ingeniería Geotécnica I", creditos: 0, ciclo: 7 }, { nombre: "Hidráulica Superficial", creditos: 0, ciclo: 7 }, { nombre: "Ingeniería de Transporte", creditos: 0, ciclo: 7 }, { nombre: "Finanzas Empresariales", creditos: 0, ciclo: 7 }, { nombre: "Ética y Tecnología", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Gestión de Proyectos de Construcción", creditos: 0, ciclo: 8 }, { nombre: "Proyecto Preprofesional", creditos: 0, ciclo: 8 }, { nombre: "Evaluación Financiera de Proyectos", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Ingeniería de Carreteras", creditos: 0, ciclo: 9 }, { nombre: "Electivo de carrera 1", creditos: 0, ciclo: 9 }, { nombre: "Electivo libre 1", creditos: 0, ciclo: 9 }, { nombre: "Arte y Tecnología", creditos: 0, ciclo: 9 }, { nombre: "Estrategia y Organizaciones", creditos: 0, ciclo: 9 }, { nombre: "Proyecto Final de Ingeniería Civil - Trabajo de Investigación I", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Electivo de carrera 2", creditos: 0, ciclo: 10 }, { nombre: "Electivo de carrera 3", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 2", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 3", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 4", creditos: 0, ciclo: 10 }, { nombre: "Trabajo de Investigación", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Programación 1", "Proyectos Interdisciplinarios 1", "Programación II", "Proyectos Interdisciplinarios 2", "Tecnologías Aplicadas en Ingeniería Civil", "Métodos Numéricos", "Proyectos Interdisciplinarios 3", "Tecnología del Concreto", "Ética y Tecnología"]
};

export const mallaIngenieriaCivilPUCP: MallaCurricular = {
  universidad: "PUCP",
  carrera: "Ingeniería Civil",
  creditosObligatorios: 216.75,
  cursosIA_BigData: 3, // Based on user's list
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Álgebra matricial y geometría analítica", creditos: 0, ciclo: 1 }, { nombre: "Comunicación académica", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de cálculo", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de física", creditos: 0, ciclo: 1 }, { nombre: "Química 1", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de química 1", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Cálculo diferencial", creditos: 0, ciclo: 2 }, { nombre: "Ciencia y filosofía", creditos: 0, ciclo: 2 }, { nombre: "Dibujo en ingeniería", creditos: 0, ciclo: 2 }, { nombre: "Física 1", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de física 1", creditos: 0, ciclo: 2 }, { nombre: "Trabajo académico", creditos: 0, ciclo: 2 }, { nombre: "Electivo", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Cálculo integral", creditos: 0, ciclo: 3 }, { nombre: "Cálculo en varias variables", creditos: 0, ciclo: 3 }, { nombre: "Física 2", creditos: 0, ciclo: 3 }, { nombre: "Laboratorio de física 2", creditos: 0, ciclo: 3 }, { nombre: "Introducción a la ingeniería civil", creditos: 0, ciclo: 3 }, { nombre: "Fundamentos de programación", creditos: 0, ciclo: 3 }, { nombre: "Electivo", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Cálculo aplicado", creditos: 0, ciclo: 4 }, { nombre: "Campo de topografía", creditos: 0, ciclo: 4 }, { nombre: "Estática", creditos: 0, ciclo: 4 }, { nombre: "Física 3", creditos: 0, ciclo: 4 }, { nombre: "Laboratorio de física 3", creditos: 0, ciclo: 4 }, { nombre: "Topografía", creditos: 0, ciclo: 4 }, { nombre: "Electivo", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Resistencia de Materiales 1", creditos: 0, ciclo: 5 }, { nombre: "Dinámica", creditos: 0, ciclo: 5 }, { nombre: "Tecnología del Concreto", creditos: 0, ciclo: 5 }, { nombre: "Fundamentos de Ingeniería Ambiental", creditos: 0, ciclo: 5 }, { nombre: "Laboratorio de Materiales", creditos: 0, ciclo: 5 }, { nombre: "Estadística para Ingeniería", creditos: 0, ciclo: 5 }, { nombre: "Electivo", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Resistencia de Materiales 2", creditos: 0, ciclo: 6 }, { nombre: "Procedimientos y Procesos de Construcción en Edificaciones", creditos: 0, ciclo: 6 }, { nombre: "Introducción al Análisis Estructural", creditos: 0, ciclo: 6 }, { nombre: "Materiales de Construcción", creditos: 0, ciclo: 6 }, { nombre: "Mecánica de Fluidos", creditos: 0, ciclo: 6 }, { nombre: "Laboratorio de Mecánica de Fluidos", creditos: 0, ciclo: 6 }, { nombre: "Electivo", creditos: 0, ciclo: 6 }, { nombre: "Electivo", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Análisis Estructural", creditos: 0, ciclo: 7 }, { nombre: "Hidráulica de Canales Abiertos", creditos: 0, ciclo: 7 }, { nombre: "Hidrología", creditos: 0, ciclo: 7 }, { nombre: "Evaluación Económica de Proyectos de Edificación", creditos: 0, ciclo: 7 }, { nombre: "Geología", creditos: 0, ciclo: 7 }, { nombre: "Laboratorio de Hidráulica de Canales Abiertos", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Ingeniería Geotécnica", creditos: 0, ciclo: 8 }, { nombre: "Ingeniería Sismorresistente", creditos: 0, ciclo: 8 }, { nombre: "Ingeniería de Transporte", creditos: 0, ciclo: 8 }, { nombre: "Planeamiento de Proyectos De Edificación", creditos: 0, ciclo: 8 }, { nombre: "Concreto Armado 1", creditos: 0, ciclo: 8 }, { nombre: "Laboratorio de Mecánica De Suelos", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Ética y Responsabilidad Social", creditos: 0, ciclo: 9 }, { nombre: "Plan de Tesis", creditos: 0, ciclo: 9 }, { nombre: "Proyecto Integrador en Ingenieria Civil", creditos: 0, ciclo: 9 }, { nombre: "Electivo", creditos: 0, ciclo: 9 }, { nombre: "Electivo", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Trabajo de Tesis", creditos: 0, ciclo: 10 }, { nombre: "Electivo", creditos: 0, ciclo: 10 }, { nombre: "Electivo", creditos: 0, ciclo: 10 }, { nombre: "Electivo", creditos: 0, ciclo: 10 }, { nombre: "Trabajo de Investigación para Bachillerato", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Fundamentos de programación", "Tecnología del Concreto", "Ingeniería Sismorresistente"]
};

export const puntajesComparativosIngenieriaCivil: PuntajeComparativo[] = [
  {
    categoria: "Créditos Totales",
    puntajes: { "UNI": 6.5, "UTEC": 8.5, "PUCP": 8.0 },
    justificacion: "La UNI presenta la carga académica más alta con 223 créditos, superando a UTEC (212) y PUCP (216.75). Una carga tan elevada puede ser una debilidad, indicando una posible falta de optimización y una mayor sobrecarga para el estudiante."
  },
  {
    categoria: "Base Matemática y de Ciencias",
    puntajes: { "UNI": 9.0, "UTEC": 8.0, "PUCP": 8.5 },
    justificacion: "Las tres universidades muestran una base sólida. Sin embargo, la UNI mantiene su tradicional rigor con cursos como 'Matemática III' y 'Matemática IV', lo que le confiere una ligera ventaja en profundidad teórica."
  },
  {
    categoria: "Cursos de IA, Big Data y tecnologías emergentes",
    puntajes: { "UNI": 6.0, "UTEC": 9.0, "PUCP": 7.0 },
    justificacion: "UTEC lidera claramente con 9 cursos orientados a la tecnología, como 'Programación I y II' y 'Tecnologías Aplicadas en Ingeniería Civil'. La UNI muestra una brecha significativa con solo 4 cursos, y la PUCP se encuentra en una posición intermedia."
  },
  {
    categoria: "Formación en Investigación",
    puntajes: { "UNI": 8.0, "UTEC": 8.5, "PUCP": 9.0 },
    justificacion: "La PUCP ofrece una estructura de investigación más robusta con 'Plan de Tesis' y 'Trabajo de Tesis'. UTEC también tiene un eje claro. La UNI, con 'Seminario de Tesis', parece tener un enfoque menos intensivo en comparación."
  },
  {
    categoria: "Cursos de Integración Interdisciplinaria",
    puntajes: { "UNI": 7.0, "UTEC": 9.5, "PUCP": 8.5 },
    justificacion: "UTEC es el claro ganador con su secuencia de 'Proyectos Interdisciplinarios'. La PUCP también destaca con su 'Proyecto Integrador'. El 'Taller de Competencia Profesional' de la UNI es un esfuerzo en esta dirección, pero no parece tener el mismo peso estructural."
  }
];

export const analisisFODAIngenieriaCivil: AnalisisFODA = {
  fortalezas: [
    "Reconocido rigor en ciencias básicas y matemáticas, con cursos como 'Matemática IV' y 'Estática', que construyen una base de ingeniería tradicional muy sólida.",
    "Prestigio histórico de la UNI que sigue siendo un activo importante en el mercado laboral tradicional de la construcción."
  ],
  oportunidades: [
    "Realizar una auditoría curricular para reducir los 223 créditos totales, buscando optimizar la malla y alinearla con los promedios de la competencia (212-217 créditos).",
    "Crear un nuevo eje de 'Ingeniería Civil Digital' con cursos en modelado BIM, gestión de datos de construcción (Construction Data Management) y uso de drones en topografía.",
    "Transformar el 'Taller de Competencia Profesional' en un verdadero proyecto integrador que se desarrolle en varias etapas a lo largo de la carrera."
  ],
  debilidades: [
    "La carga académica más alta (223 créditos) y la alta densidad de cursos por ciclo (hasta 7 en los ciclos 4, 6 y 9) representan una clara sobrecarga para el estudiante, lo que puede afectar negativamente la calidad del aprendizaje.",
    "Rezagado en la adopción de tecnologías: solo 4 cursos relacionados con la digitalización frente a los 9 de UTEC. Ausencia de cursos explícitos en BIM, una herramienta estándar en la industria hoy en día.",
    "Formación en investigación menos visible y estructurada ('Seminario de Tesis') en comparación con el eje de tesis de dos cursos de la PUCP.",
  ],
  amenazas: [
    "La competencia (UTEC y PUCP) está formando ingenieros civiles con un perfil más tecnológico y adaptado a las nuevas demandas de la industria de la construcción 4.0.",
    "Los egresados de la UNI podrían ser percibidos como menos competitivos para roles que requieren manejo de software avanzado, BIM y análisis de datos.",
    "Pérdida de atractivo para los nuevos talentos que buscan una formación más moderna, ágil y con menor carga académica."
  ]
};

export const planAccionIngenieriaCivil: PlanAccion[] = [
  {
    titulo: "Reducción y Optimización de la Carga Académica",
    descripcion: "Realizar una reingeniería de la malla para reducir el total de créditos a un número entre 215 y 220. Esto implica fusionar cursos introductorios y eliminar redundancias para aliviar la carga del estudiante.",
    prioridad: "Alta",
    plazo: "Largo"
  },
  {
    titulo: "Lanzamiento del Eje de Ingeniería Civil Digital",
    descripcion: "Introducir un mínimo de 3 nuevos cursos obligatorios: 'Modelado de Información de Construcción (BIM)', 'Automatización en Procesos Constructivos' y 'Análisis de Datos para Proyectos de Infraestructura'.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Fortalecimiento de la Línea de Investigación",
    descripcion: "Reestructurar la formación investigativa para incluir un 'Taller de Tesis I' en el 9no ciclo y el 'Taller de Tesis II' en el 10mo, asegurando un proceso de titulación más robusto y guiado.",
    prioridad: "Media",
    plazo: "Mediano"
  },

];
