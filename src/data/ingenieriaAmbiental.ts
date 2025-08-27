import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaIngenieriaAmbientalUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ingeniería Ambiental",
  creditosObligatorios: 227,
  cursosIA_BigData: 10, // Big Data (7) + tecnologías emergentes (3)
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Introducción a la Ingeniería Ambiental", creditos: 0, ciclo: 1 }, { nombre: "Introducción a la Computación", creditos: 0, ciclo: 1 }, { nombre: "Química I", creditos: 0, ciclo: 1 }, { nombre: "Cálculo Diferencial", creditos: 0, ciclo: 1 }, { nombre: "Álgebra Lineal", creditos: 0, ciclo: 1 }, { nombre: "Ética y Filosofía Política", creditos: 0, ciclo: 1 }, { nombre: "Redacción y Comunicación", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Biología General", creditos: 0, ciclo: 2 }, { nombre: "Dibujo Cartográfico", creditos: 0, ciclo: 2 }, { nombre: "Lenguaje de Programación", creditos: 0, ciclo: 2 }, { nombre: "Física I", creditos: 0, ciclo: 2 }, { nombre: "Química II", creditos: 0, ciclo: 2 }, { nombre: "Cálculo Integral", creditos: 0, ciclo: 2 }, { nombre: "Realidad Nacional, Constitución y Derechos Humanos", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Geología", creditos: 0, ciclo: 3 }, { nombre: "Ecología", creditos: 0, ciclo: 3 }, { nombre: "Bioestadística", creditos: 0, ciclo: 3 }, { nombre: "Física II", creditos: 0, ciclo: 3 }, { nombre: "Físico-Química Aplicada", creditos: 0, ciclo: 3 }, { nombre: "Cálculo Multivariable", creditos: 0, ciclo: 3 }, { nombre: "Economía General", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Geografía", creditos: 0, ciclo: 4 }, { nombre: "Bioquímica Ambiental", creditos: 0, ciclo: 4 }, { nombre: "Física III", creditos: 0, ciclo: 4 }, { nombre: "Meteorología y Climatología", creditos: 0, ciclo: 4 }, { nombre: "Diseño y Evaluación de Proyectos", creditos: 0, ciclo: 4 }, { nombre: "Ecuaciones Diferenciales", creditos: 0, ciclo: 4 }, { nombre: "Sociología Ambiental", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Cartografía Automatizada", creditos: 0, ciclo: 5 }, { nombre: "Mecánica de Fluidos", creditos: 0, ciclo: 5 }, { nombre: "Microbiología y Ambiente", creditos: 0, ciclo: 5 }, { nombre: "Contaminación y Modelamiento Atmosférico", creditos: 0, ciclo: 5 }, { nombre: "Gestión de Proyectos", creditos: 0, ciclo: 5 }, { nombre: "Hidrología", creditos: 0, ciclo: 5 }, { nombre: "Gestión Social", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Topografía", creditos: 0, ciclo: 6 }, { nombre: "Termodinámica General", creditos: 0, ciclo: 6 }, { nombre: "Manejo Ambiental de la Biodiversidad", creditos: 0, ciclo: 6 }, { nombre: "Edafología", creditos: 0, ciclo: 6 }, { nombre: "Hidrogeología", creditos: 0, ciclo: 6 }, { nombre: "Contaminación y Modelamiento Hidrológico", creditos: 0, ciclo: 6 }, { nombre: "Liderazgo y Negociación", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Sistema de Información Geográfica", creditos: 0, ciclo: 7 }, { nombre: "Ingeniería de Procesos y Producción más Limpia", creditos: 0, ciclo: 7 }, { nombre: "Contaminación del Suelo y Técnicas de Control", creditos: 0, ciclo: 7 }, { nombre: "Ecotoxicología", creditos: 0, ciclo: 7 }, { nombre: "Tratamiento de Efluentes Domésticos e Industriales", creditos: 0, ciclo: 7 }, { nombre: "Derecho Ambiental", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Vigilancia y Monitoreo del Ambiente", creditos: 0, ciclo: 8 }, { nombre: "Ingeniería de Residuos Sólidos", creditos: 0, ciclo: 8 }, { nombre: "Energía", creditos: 0, ciclo: 8 }, { nombre: "Simulación y Modelamiento Ambiental", creditos: 0, ciclo: 8 }, { nombre: "Diseño Experimental", creditos: 0, ciclo: 8 }, { nombre: "Ingeniería de la Calidad Ambiental Atmosférica", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Paisajismo y Servicios Ambientales", creditos: 0, ciclo: 9 }, { nombre: "Ordenamiento Territorial", creditos: 0, ciclo: 9 }, { nombre: "Innovación y Tesis I", creditos: 0, ciclo: 9 }, { nombre: "Sistemas de Gestión Ambiental", creditos: 0, ciclo: 9 }, { nombre: "Gestión e Ingeniería de Recursos Hídricos", creditos: 0, ciclo: 9 }, { nombre: "Sistemas de Evaluación de Impacto Ambiental", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Valoración Económica Ambiental", creditos: 0, ciclo: 10 }, { nombre: "Fiscalización y Auditoría Ambiental", creditos: 0, ciclo: 10 }, { nombre: "Gestión de Desastres", creditos: 0, ciclo: 10 }, { nombre: "Finanzas Ambientales", creditos: 0, ciclo: 10 }, { nombre: "Innovación y Tesis II", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Introducción a la Computación", "Lenguaje de Programación", "Contaminación y Modelamiento Atmosférico", "Contaminación y Modelamiento Hidrológico", "Cartografía Automatizada", "Sistema de Información Geográfica", "Simulación y Modelamiento Ambiental", "Ingeniería de Procesos y Producción más Limpia", "Innovación y Tesis I", "Innovación y Tesis II"]
};

export const mallaIngenieriaAmbientalPUCP: MallaCurricular = {
  universidad: "PUCP",
  carrera: "Ingeniería Ambiental",
  creditosObligatorios: 209,
  cursosIA_BigData: 8, // Big Data (3) + tecnologías emergentes (5)
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Álgebra matricial y geometría analítica", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de cálculo", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de física", creditos: 0, ciclo: 1 }, { nombre: "Química 1", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de química 1", creditos: 0, ciclo: 1 }, { nombre: "Taller de innovación en ingeniería ambiental", creditos: 0, ciclo: 1 }, { nombre: "Comunicación académica", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Cálculo diferencial", creditos: 0, ciclo: 2 }, { nombre: "Física 1", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de física 1", creditos: 0, ciclo: 2 }, { nombre: "Química 2", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de química 2", creditos: 0, ciclo: 2 }, { nombre: "Taller de ingeniería ambiental y sostenible", creditos: 0, ciclo: 2 }, { nombre: "Trabajo académico", creditos: 0, ciclo: 2 }, { nombre: "Antropología", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Cálculo integral", creditos: 0, ciclo: 3 }, { nombre: "Cálculo en varias variables", creditos: 0, ciclo: 3 }, { nombre: "Física 2", creditos: 0, ciclo: 3 }, { nombre: "Laboratorio de física 2", creditos: 0, ciclo: 3 }, { nombre: "Química experimental para ingeniería ambiental", creditos: 0, ciclo: 3 }, { nombre: "Biología general", creditos: 0, ciclo: 3 }, { nombre: "Electivo de humanidades 1", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Cálculo aplicado", creditos: 0, ciclo: 4 }, { nombre: "Física 3", creditos: 0, ciclo: 4 }, { nombre: "Laboratorio de física 3", creditos: 0, ciclo: 4 }, { nombre: "Fundamentos de programación", creditos: 0, ciclo: 4 }, { nombre: "Biología funcional", creditos: 0, ciclo: 4 }, { nombre: "Ecología y biodiversidad", creditos: 0, ciclo: 4 }, { nombre: "Electivo de teología y religión", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Geología", creditos: 0, ciclo: 5 }, { nombre: "Filosofía Tecnología y Ambiente", creditos: 0, ciclo: 5 }, { nombre: "Taller de Innovación en Ingeniería Ambiental II", creditos: 0, ciclo: 5 }, { nombre: "Introducción a la Ciencia de Datos Espaciales", creditos: 0, ciclo: 5 }, { nombre: "Mecánica de Fluidos Ambientales", creditos: 0, ciclo: 5 }, { nombre: "Fundamentos de Ingeniería Ambiental", creditos: 0, ciclo: 5 }, { nombre: "Laboratorio de Mecánica de Fluidos", creditos: 0, ciclo: 5 }, { nombre: "Estadística para Ingeniería", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Instrumentación y Monitoreo", creditos: 0, ciclo: 6 }, { nombre: "Hidrología", creditos: 0, ciclo: 6 }, { nombre: "Ciencias del Suelo", creditos: 0, ciclo: 6 }, { nombre: "Introducción a la Ingeniería Sostenible", creditos: 0, ciclo: 6 }, { nombre: "Termodinámica General", creditos: 0, ciclo: 6 }, { nombre: "Ingeniería Económica", creditos: 0, ciclo: 6 }, { nombre: "Laboratorio de Termodinámica General", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Tecnología para el Tratamiento de Agua", creditos: 0, ciclo: 7 }, { nombre: "Fundamentos de Contaminación del Aire", creditos: 0, ciclo: 7 }, { nombre: "Microbiología Ambiental", creditos: 0, ciclo: 7 }, { nombre: "Laboratorio de Microbiología Ambiental", creditos: 0, ciclo: 7 }, { nombre: "Hidrogeología", creditos: 0, ciclo: 7 }, { nombre: "Procesos Industriales", creditos: 0, ciclo: 7 }, { nombre: "Cursos electivos (**)", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Evaluación y Gestión de Impactos Ambientales", creditos: 0, ciclo: 8 }, { nombre: "Manejo Sostenible de Residuos Sólidos", creditos: 0, ciclo: 8 }, { nombre: "Contaminación y Remediación de Suelos", creditos: 0, ciclo: 8 }, { nombre: "Trabajo de Tesis 1", creditos: 0, ciclo: 8 }, { nombre: "Ética Profesional", creditos: 0, ciclo: 8 }, { nombre: "Sustainable Energy", creditos: 0, ciclo: 8 }, { nombre: "Análisis de ciclo de vida de los productos", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Toxicología Ambiental y Salud Pública", creditos: 0, ciclo: 9 }, { nombre: "Tratamiento de Aguas Residuales", creditos: 0, ciclo: 9 }, { nombre: "Análisis de Riesgo Ambiental", creditos: 0, ciclo: 9 }, { nombre: "Minería y Medio Ambiente", creditos: 0, ciclo: 9 }, { nombre: "Cursos electivos (**)", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Environmental and Sustainable Engineering Seminar", creditos: 0, ciclo: 10 }, { nombre: "Proyecto Integrador en Ingeniería Ambiental y Sostenible", creditos: 0, ciclo: 10 }, { nombre: "Trabajo de Tesis 2", creditos: 0, ciclo: 10 }, { nombre: "Ecología Industrial", creditos: 0, ciclo: 10 }, { nombre: "Cursos electivos (**)", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Fundamentos de programación", "Introducción a la Ciencia de Datos Espaciales", "Tecnología para el Tratamiento de Agua", "Taller de innovación en ingeniería ambiental", "Filosofía Tecnología y Ambiente", "Taller de Innovación en Ingeniería Ambiental II", "Sustainable Energy", "Environmental and Sustainable Engineering Seminar"]
};

export const mallaIngenieriaAmbientalUTEC: MallaCurricular = {
  universidad: "UTEC",
  carrera: "Ingeniería Ambiental",
  creditosObligatorios: 214,
  cursosIA_BigData: 9, // Big Data (4) + tecnologías emergentes (4) + IA (1)
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Programación I", creditos: 0, ciclo: 1 }, { nombre: "Cálculo de una Variable", creditos: 0, ciclo: 1 }, { nombre: "Química General", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Química General", creditos: 0, ciclo: 1 }, { nombre: "Introducción a la Ingeniería Ambiental", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Comunicación 1", creditos: 0, ciclo: 1 }, { nombre: "Proyectos Interdisciplinarios 1", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Programación II", creditos: 0, ciclo: 2 }, { nombre: "Cálculo Vectorial", creditos: 0, ciclo: 2 }, { nombre: "Álgebra Lineal", creditos: 0, ciclo: 2 }, { nombre: "Química Orgánica", creditos: 0, ciclo: 2 }, { nombre: "Biología, Ecología y Recursos Naturales", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de Comunicación 2", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Ecuaciones Diferenciales", creditos: 0, ciclo: 3 }, { nombre: "Estadística y Probabilidades I", creditos: 0, ciclo: 3 }, { nombre: "Introducción a la Mecánica", creditos: 0, ciclo: 3 }, { nombre: "Química Ambiental", creditos: 0, ciclo: 3 }, { nombre: "Introducción a SIG y Cartografía", creditos: 0, ciclo: 3 }, { nombre: "Proyectos Interdisciplinarios 2", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Métodos Numéricos", creditos: 0, ciclo: 4 }, { nombre: "Ciencia de los Materiales", creditos: 0, ciclo: 4 }, { nombre: "Óptica y Ondas", creditos: 0, ciclo: 4 }, { nombre: "Geología", creditos: 0, ciclo: 4 }, { nombre: "Teledetección y Análisis Espacial", creditos: 0, ciclo: 4 }, { nombre: "Empresa y Consumidor", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Termodinámica", creditos: 0, ciclo: 5 }, { nombre: "Hidrología", creditos: 0, ciclo: 5 }, { nombre: "Mecánica de Fluidos Ambiental", creditos: 0, ciclo: 5 }, { nombre: "Microbiología Ambiental", creditos: 0, ciclo: 5 }, { nombre: "Perú: Temas de la sociedad contemporánea", creditos: 0, ciclo: 5 }, { nombre: "Proyectos Interdisciplinarios 3", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Hidrogeología", creditos: 0, ciclo: 6 }, { nombre: "Edafología y manejo de suelos", creditos: 0, ciclo: 6 }, { nombre: "Calidad del aire", creditos: 0, ciclo: 6 }, { nombre: "Monitoreo Ambiental", creditos: 0, ciclo: 6 }, { nombre: "Economía, gobernanza y relaciones de poder", creditos: 0, ciclo: 6 }, { nombre: "Finanzas Empresariales", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Leyes y Derechos Ambientales", creditos: 0, ciclo: 7 }, { nombre: "Estudios de Impacto Ambiental", creditos: 0, ciclo: 7 }, { nombre: "Gestión Ambiental", creditos: 0, ciclo: 7 }, { nombre: "Electivo de carrera 1", creditos: 0, ciclo: 7 }, { nombre: "Electivo libre 1", creditos: 0, ciclo: 7 }, { nombre: "Electivo libre 2", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Proyecto Preprofesional", creditos: 0, ciclo: 8 }, { nombre: "Arte y Tecnología", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Seminario de Ingeniería Ambiental", creditos: 0, ciclo: 9 }, { nombre: "Electivo de carrera 2", creditos: 0, ciclo: 9 }, { nombre: "Electivo libre 3", creditos: 0, ciclo: 9 }, { nombre: "Ética y Tecnología", creditos: 0, ciclo: 9 }, { nombre: "Evaluación Financiera de Proyectos", creditos: 0, ciclo: 9 }, { nombre: "Proyecto Final de Ingeniería Ambiental - Trabajo de Investigación I", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Aspectos Sociales de la Ingeniería Ambiental", creditos: 0, ciclo: 10 }, { nombre: "Electivo de carrera 3", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 4", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 5", creditos: 0, ciclo: 10 }, { nombre: "Estrategia y Organizaciones", creditos: 0, ciclo: 10 }, { nombre: "Trabajo de Investigación", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Programación I", "Programación II", "Teledetección y Análisis Espacial", "Monitoreo Ambiental", "Proyectos Interdisciplinarios 1", "Proyectos Interdisciplinarios 2", "Proyectos Interdisciplinarios 3", "Ética y Tecnología"]
};

export const puntajesComparativosIngenieriaAmbiental: PuntajeComparativo[] = [
  {
    categoria: "Créditos Totales",
    puntajes: { "UNI": 6.0, "PUCP": 9.0, "UTEC": 8.0 },
    justificacion: "La UNI posee la malla más pesada con 227 créditos, muy por encima de PUCP (209) y UTEC (214). Esto representa una debilidad estructural, indicando una sobrecarga académica significativa y menor eficiencia curricular."
  },
  {
    categoria: "Base Matemática y de Ciencias",
    puntajes: { "UNI": 9.0, "PUCP": 8.5, "UTEC": 8.5 },
    justificacion: "Las tres universidades tienen una base científica sólida. La UNI destaca ligeramente por su tradicional rigor y la inclusión de tres físicas, además de cursos como Físico-Química Aplicada, que profundizan la base científica del ingeniero."
  },
  {
    categoria: "Cursos de IA, Big Data y tecnologías emergentes",
    puntajes: { "UNI": 9.0, "PUCP": 7.5, "UTEC": 8.0 },
    justificacion: "Sorprendentemente, la UNI lidera en este criterio con 10 cursos relevantes, incluyendo 'Simulación y Modelamiento Ambiental' y 'Sistema de Información Geográfica'. PUCP y UTEC tienen una oferta menor (8 cursos cada una) y más generalista."
  },
  {
    categoria: "Formación en Investigación",
    puntajes: { "UNI": 8.5, "PUCP": 8.5, "UTEC": 8.5 },
    justificacion: "Las tres instituciones presentan un esquema similar de dos cursos para el desarrollo de la tesis. No hay un diferenciador claro en este aspecto, mostrando un estándar competitivo en la formación para la investigación."
  },
  {
    categoria: "Cursos de Integración Interdisciplinaria",
    puntajes: { "UNI": 6.0, "PUCP": 8.5, "UTEC": 9.5 },
    justificacion: "UTEC es el líder indiscutible con su secuencia de 3 'Proyectos Interdisciplinarios'. La PUCP le sigue con su 'Proyecto Integrador' y talleres de innovación. La UNI carece completamente de este tipo de cursos, una debilidad crítica en la formación actual."
  }
];

export const analisisFODAUNI: AnalisisFODA = {
  fortalezas: [
    "Liderazgo en cantidad de cursos de modelamiento y simulación ambiental (10), con asignaturas clave como 'Contaminación y Modelamiento Atmosférico' y 'Simulación y Modelamiento Ambiental'.",
    "Sólida y reconocida formación en ciencias básicas (Química, Física, Biología) que provee una base robusta para la ingeniería."
  ],
  oportunidades: [
    "Capitalizar la fortaleza en modelamiento para crear un Minor o Mención en 'Modelado y Simulación de Sistemas Ambientales', un diferenciador único en el mercado.",
    "Realizar una reingeniería curricular para reducir la carga de créditos (de 227 a ~215) y de cursos por ciclo, fusionando contenidos introductorios.",
    "Introducir un eje de proyectos integradores que apliquen la capacidad de modelamiento en problemas reales, conectando con la industria."
  ],
  debilidades: [
    "Carga académica insostenible: 227 créditos totales y 7 cursos por ciclo durante seis semestres consecutivos. Es la malla más pesada y densa, lo que atenta contra la profundización del aprendizaje.",
    "Ausencia total de cursos de proyectos integradores o interdisciplinarios, una desventaja severa frente a UTEC y PUCP que sí los tienen.",
    "Aunque fuerte en modelamiento, la malla carece de cursos explícitos en temas de vanguardia como 'Economía Circular', 'Soluciones Basadas en la Naturaleza' o 'Análisis de Ciclo de Vida', presentes en la competencia."
  ],
  amenazas: [
    "La competencia forma ingenieros ambientales con experiencia demostrable en proyectos (UTEC, PUCP), lo que los hace más atractivos para el mercado laboral.",
    "El enfoque excesivamente teórico y la sobrecarga académica pueden llevar a que los egresados de la UNI sean percibidos como menos prácticos y con menor capacidad de ejecución.",
    "La falta de modernización en ciertos temas puede hacer que la carrera pierda atractivo frente a programas más ágiles y enfocados en la sostenibilidad y la innovación."
  ]
};

export const planAccionUNI: PlanAccion[] = [
  {
    titulo: "Auditoría y Reducción Curricular Estratégica",
    descripcion: "Iniciar un plan de auditoría para reducir la malla de 227 a 215 créditos, identificando y eliminando redundancias. La meta es no superar los 6 cursos por ciclo para mejorar la calidad educativa.",
    prioridad: "Alta",
    plazo: "Largo"
  },
  {
    titulo: "Creación del Eje de Proyectos de Ingeniería Ambiental",
    descripcion: "Diseñar e implementar una secuencia de dos cursos obligatorios: 'Proyecto Ambiental I' y 'Proyecto Ambiental II', donde se apliquen las herramientas de modelado y simulación en casos de estudio reales.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Lanzamiento de la Mención en Modelado y Simulación Ambiental",
    descripcion: "Oficializar y potenciar la fortaleza actual de la malla creando una mención o especialidad. Esto implica renombrar y modernizar cursos como 'Cartografía Automatizada' a 'Geomática Aplicada' y añadir un electivo de 'Análisis de Datos Espaciales'.",
    prioridad: "Media",
    plazo: "Mediano"
  },
  {
    titulo: "Incorporación de Tópicos de Sostenibilidad y Economía Circular",
    descripcion: "Actualizar el sílabo de cursos como 'Ingeniería de Residuos Sólidos' y 'Diseño y Evaluación de Proyectos' para incluir explícitamente los principios de economía circular, análisis de ciclo de vida y soluciones basadas en la naturaleza.",
    prioridad: "Alta",
    plazo: "Corto"
  }
];
