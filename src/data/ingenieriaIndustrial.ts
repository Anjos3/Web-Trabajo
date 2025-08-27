import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaIngenieriaIndustrialUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 210,
  cursosIA_BigData: 5,
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Cálculo Diferencial", creditos: 0, ciclo: 1 }, { nombre: "Química I", creditos: 0, ciclo: 1 }, { nombre: "Redacción y Comunicación", creditos: 0, ciclo: 1 }, { nombre: "Ética y Filosofía Política", creditos: 0, ciclo: 1 }, { nombre: "Geometría Analítica", creditos: 0, ciclo: 1 }, { nombre: "Dibujo de Ingeniería", creditos: 0, ciclo: 1 }, { nombre: "Introducción a Ingeniería Industrial", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Algebra Lineal", creditos: 0, ciclo: 2 }, { nombre: "Cálculo Integral", creditos: 0, ciclo: 2 }, { nombre: "Introducción a la Computación", creditos: 0, ciclo: 2 }, { nombre: "Realidad Nacional, Constitución y Derechos Humanos", creditos: 0, ciclo: 2 }, { nombre: "Desarrollo Personal", creditos: 0, ciclo: 2 }, { nombre: "Teoría General de Sistemas", creditos: 0, ciclo: 2 }, { nombre: "Química II", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Física I", creditos: 0, ciclo: 3 }, { nombre: "Metodología de la Investigación", creditos: 0, ciclo: 3 }, { nombre: "Matematica Discreta", creditos: 0, ciclo: 3 }, { nombre: "Cálculo Multivariable", creditos: 0, ciclo: 3 }, { nombre: "Diseño Asistido por Computador", creditos: 0, ciclo: 3 }, { nombre: "Física Química y Operaciones Unitarias", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Economía General", creditos: 0, ciclo: 4 }, { nombre: "Ecuaciones Diferenciales", creditos: 0, ciclo: 4 }, { nombre: "Física II", creditos: 0, ciclo: 4 }, { nombre: "Lenguaje de Programación", creditos: 0, ciclo: 4 }, { nombre: "Estadística y Probabilidades", creditos: 0, ciclo: 4 }, { nombre: "Termodinámica", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Sociología", creditos: 0, ciclo: 5 }, { nombre: "Estadística Aplicada", creditos: 0, ciclo: 5 }, { nombre: "Resistencia de Materiales", creditos: 0, ciclo: 5 }, { nombre: "Procesos Industriales I", creditos: 0, ciclo: 5 }, { nombre: "Electricidad y Electrónica Industrial", creditos: 0, ciclo: 5 }, { nombre: "Ingeniería del Trabajo I", creditos: 0, ciclo: 5 }, { nombre: "Investigación de Operaciones I", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Administración y Organización", creditos: 0, ciclo: 6 }, { nombre: "Procesos Industriales II", creditos: 0, ciclo: 6 }, { nombre: "Contabilidad Financiera", creditos: 0, ciclo: 6 }, { nombre: "Ingeniería del Trabajo II", creditos: 0, ciclo: 6 }, { nombre: "Investigación de Operaciones II", creditos: 0, ciclo: 6 }, { nombre: "Ingeniería de Materiales", creditos: 0, ciclo: 6 }, { nombre: "Electivo", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Ingeniería Económica", creditos: 0, ciclo: 7 }, { nombre: "Logística Empresarial", creditos: 0, ciclo: 7 }, { nombre: "Modelado Sistémico y Simulación", creditos: 0, ciclo: 7 }, { nombre: "Análisis de Procesos de Manufactura", creditos: 0, ciclo: 7 }, { nombre: "Ingeniería de Procesos", creditos: 0, ciclo: 7 }, { nombre: "Contabilidad de Costos y Presupuestos", creditos: 0, ciclo: 7 }, { nombre: "Electivo", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Sistemas de Calidad", creditos: 0, ciclo: 8 }, { nombre: "Automatización y Control de Procesos", creditos: 0, ciclo: 8 }, { nombre: "Gestión de la Cadena de Suministro", creditos: 0, ciclo: 8 }, { nombre: "Ingeniería del Producto", creditos: 0, ciclo: 8 }, { nombre: "Mercadotecnia", creditos: 0, ciclo: 8 }, { nombre: "Electivo", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Seguridad y Salud Ocupacional", creditos: 0, ciclo: 9 }, { nombre: "Finanzas", creditos: 0, ciclo: 9 }, { nombre: "Innovación y Emprendimiento de Negocios", creditos: 0, ciclo: 9 }, { nombre: "Proyecto de Tesis en Ingeniería Industrial I", creditos: 0, ciclo: 9 }, { nombre: "Planeamiento y Control de Operaciones", creditos: 0, ciclo: 9 }, { nombre: "Electivo", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Gestión del Talento Humano", creditos: 0, ciclo: 10 }, { nombre: "Planeamiento y Gestión Estratégica", creditos: 0, ciclo: 10 }, { nombre: "Diseño y Evaluación de Proyectos", creditos: 0, ciclo: 10 }, { nombre: "Proyecto de Tesis en Ingeniería Industrial II", creditos: 0, ciclo: 10 }, { nombre: "Electivo", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Introducción a la Computación", "Diseño Asistido por Computador", "Lenguaje de Programación", "Modelado Sistémico y Simulación", "Automatización y Control de Procesos"]
};

export const mallaIngenieriaIndustrialPUCP: MallaCurricular = {
  universidad: "PUCP",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 214.5,
  cursosIA_BigData: 8,
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Álgebra matricial y geometría analítica", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de cálculo", creditos: 0, ciclo: 1 }, { nombre: "Fundamentos de física", creditos: 0, ciclo: 1 }, { nombre: "Taller de ingeniería industrial", creditos: 0, ciclo: 1 }, { nombre: "Comunicación académica", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Cálculo diferencial", creditos: 0, ciclo: 2 }, { nombre: "Física 1", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de física 1", creditos: 0, ciclo: 2 }, { nombre: "Dibujo en ingeniería", creditos: 0, ciclo: 2 }, { nombre: "Trabajo académico", creditos: 0, ciclo: 2 }, { nombre: "Ciencia y filosofía", creditos: 0, ciclo: 2 }, { nombre: "Electivo", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Cálculo integral", creditos: 0, ciclo: 3 }, { nombre: "Física 2", creditos: 0, ciclo: 3 }, { nombre: "Laboratorio de física 2", creditos: 0, ciclo: 3 }, { nombre: "Química 1", creditos: 0, ciclo: 3 }, { nombre: "Seguridad y ergonomía", creditos: 0, ciclo: 3 }, { nombre: "Mecánica para ingenieros", creditos: 0, ciclo: 3 }, { nombre: "Electivo", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Cálculo vectorial", creditos: 0, ciclo: 4 }, { nombre: "Física 3", creditos: 0, ciclo: 4 }, { nombre: "Laboratorio de física 3", creditos: 0, ciclo: 4 }, { nombre: "Estadística", creditos: 0, ciclo: 4 }, { nombre: "Laboratorio de química 1", creditos: 0, ciclo: 4 }, { nombre: "Estudio del trabajo", creditos: 0, ciclo: 4 }, { nombre: "Electivo", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Análisis Cuantitativo para la Toma de Decisiones", creditos: 0, ciclo: 5 }, { nombre: "Gestión Empresarial", creditos: 0, ciclo: 5 }, { nombre: "Control Estadístico de Calidad", creditos: 0, ciclo: 5 }, { nombre: "Introducción a la programación", creditos: 0, ciclo: 5 }, { nombre: "Introducción a la Termodinámica", creditos: 0, ciclo: 5 }, { nombre: "Economía General", creditos: 0, ciclo: 5 }, { nombre: "Dibujo Mecánico", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Habilidades Directivas", creditos: 0, ciclo: 6 }, { nombre: "Modelos Determinísticos", creditos: 0, ciclo: 6 }, { nombre: "Analytics 1", creditos: 0, ciclo: 6 }, { nombre: "Fundamentos de la cadena de suministros y operaciones", creditos: 0, ciclo: 6 }, { nombre: "Ingeniería Económica", creditos: 0, ciclo: 6 }, { nombre: "Resistencia de Materiales 1A", creditos: 0, ciclo: 6 }, { nombre: "Laboratorio de Termodinámica General", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Gestión del Talento Humano", creditos: 0, ciclo: 7 }, { nombre: "Analytics 2", creditos: 0, ciclo: 7 }, { nombre: "Diseño de la Cadena de Suministros y Operaciones", creditos: 0, ciclo: 7 }, { nombre: "Ingeniería de Materiales", creditos: 0, ciclo: 7 }, { nombre: "Taller de Procesos de Manufactura", creditos: 0, ciclo: 7 }, { nombre: "Procesos Industriales", creditos: 0, ciclo: 7 }, { nombre: "Control de Gestión Industrial", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Dinámica de la Cadena de Suministro Esbelta", creditos: 0, ciclo: 8 }, { nombre: "Simulación", creditos: 0, ciclo: 8 }, { nombre: "Procesos de Manufactura", creditos: 0, ciclo: 8 }, { nombre: "Electricidad Industrial", creditos: 0, ciclo: 8 }, { nombre: "Laboratorio de Procesos Industriales", creditos: 0, ciclo: 8 }, { nombre: "Mercadotecnia Industrial", creditos: 0, ciclo: 8 }, { nombre: "Finanzas Industriales", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Automatización e Industria 4.0", creditos: 0, ciclo: 9 }, { nombre: "Proyecto de Mejora", creditos: 0, ciclo: 9 }, { nombre: "Proyecto de Ingeniería Industrial 1", creditos: 0, ciclo: 9 }, { nombre: "Análisis y Diseño de Sistemas", creditos: 0, ciclo: 9 }, { nombre: "Elaboración y Evaluación de Proyectos", creditos: 0, ciclo: 9 }, { nombre: "Gestión Ambiental", creditos: 0, ciclo: 9 }, { nombre: "Electivo", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Gestión de la Innovación", creditos: 0, ciclo: 10 }, { nombre: "Proyecto de Ingeniería Industrial 2", creditos: 0, ciclo: 10 }, { nombre: "Ética Profesional en Ingeniería Industrial", creditos: 0, ciclo: 10 }, { nombre: "Gestión de Proyectos", creditos: 0, ciclo: 10 }, { nombre: "Electivo", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Análisis Cuantitativo para la Toma de Decisiones", "Introducción a la programación", "Analytics 1", "Analytics 2", "Simulación", "Automatización e Industria 4.0", "Proyecto de Mejora", "Gestión de la Innovación"]
};

export const mallaIngenieriaIndustrialUTEC: MallaCurricular = {
  universidad: "UTEC",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 212,
  cursosIA_BigData: 10,
  ciclos: [
    { numero: 1, creditosTotales: 0, cursos: [{ nombre: "Programación I", creditos: 0, ciclo: 1 }, { nombre: "Cálculo de una Variable", creditos: 0, ciclo: 1 }, { nombre: "Química General", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Química General", creditos: 0, ciclo: 1 }, { nombre: "Introducción a la Ingeniería Industrial", creditos: 0, ciclo: 1 }, { nombre: "Laboratorio de Comunicación 1", creditos: 0, ciclo: 1 }, { nombre: "Proyectos Interdisciplinarios 1", creditos: 0, ciclo: 1 }] },
    { numero: 2, creditosTotales: 0, cursos: [{ nombre: "Cálculo Vectorial", creditos: 0, ciclo: 2 }, { nombre: "Ciencia de los Materiales", creditos: 0, ciclo: 2 }, { nombre: "Introducción a la Mecánica", creditos: 0, ciclo: 2 }, { nombre: "Estadística y Probabilidades I", creditos: 0, ciclo: 2 }, { nombre: "Perú: Temas de la sociedad contemporánea", creditos: 0, ciclo: 2 }, { nombre: "Laboratorio de Comunicación 2", creditos: 0, ciclo: 2 }] },
    { numero: 3, creditosTotales: 0, cursos: [{ nombre: "Ecuaciones Diferenciales", creditos: 0, ciclo: 3 }, { nombre: "Álgebra Lineal", creditos: 0, ciclo: 3 }, { nombre: "Programación II", creditos: 0, ciclo: 3 }, { nombre: "Estadística Aplicada", creditos: 0, ciclo: 3 }, { nombre: "Fundamentos de Operaciones", creditos: 0, ciclo: 3 }, { nombre: "Empresa y Consumidor", creditos: 0, ciclo: 3 }] },
    { numero: 4, creditosTotales: 0, cursos: [{ nombre: "Métodos Numéricos", creditos: 0, ciclo: 4 }, { nombre: "Fundamentos de Electricidad y Magnetismo", creditos: 0, ciclo: 4 }, { nombre: "Investigación de Operaciones I: Modelos Determinísticos", creditos: 0, ciclo: 4 }, { nombre: "Gestión de Costos", creditos: 0, ciclo: 4 }, { nombre: "Economía, gobernanza y relaciones de poder", creditos: 0, ciclo: 4 }, { nombre: "Proyectos Interdisciplinarios 2", creditos: 0, ciclo: 4 }] },
    { numero: 5, creditosTotales: 0, cursos: [{ nombre: "Investigación de Operaciones II: Modelos Probabilísticos", creditos: 0, ciclo: 5 }, { nombre: "Planificación y Control de Operaciones", creditos: 0, ciclo: 5 }, { nombre: "Principios de Diseño de Productos y Servicios", creditos: 0, ciclo: 5 }, { nombre: "Salud y Seguridad Ocupacional", creditos: 0, ciclo: 5 }, { nombre: "Ingeniería Financiera", creditos: 0, ciclo: 5 }, { nombre: "Finanzas Empresariales", creditos: 0, ciclo: 5 }] },
    { numero: 6, creditosTotales: 0, cursos: [{ nombre: "Gestión de la Calidad", creditos: 0, ciclo: 6 }, { nombre: "Simulación de Operaciones", creditos: 0, ciclo: 6 }, { nombre: "Gestión de la Cadena de Suministros", creditos: 0, ciclo: 6 }, { nombre: "Análisis y Diseño de Sistemas", creditos: 0, ciclo: 6 }, { nombre: "Sistemas de Información para Operaciones", creditos: 0, ciclo: 6 }] },
    { numero: 7, creditosTotales: 0, cursos: [{ nombre: "Lean Six Sigma", creditos: 0, ciclo: 7 }, { nombre: "Data Analytics", creditos: 0, ciclo: 7 }, { nombre: "Gestión de Proyectos de Ingeniería", creditos: 0, ciclo: 7 }, { nombre: "Electivo de carrera 1", creditos: 0, ciclo: 7 }, { nombre: "Arte y Tecnología", creditos: 0, ciclo: 7 }, { nombre: "Proyectos Interdisciplinarios 3", creditos: 0, ciclo: 7 }] },
    { numero: 8, creditosTotales: 0, cursos: [{ nombre: "Proyecto Preprofesional", creditos: 0, ciclo: 8 }, { nombre: "Electivo de carrera 2", creditos: 0, ciclo: 8 }, { nombre: "Evaluación Financiera de Proyectos", creditos: 0, ciclo: 8 }] },
    { numero: 9, creditosTotales: 0, cursos: [{ nombre: "Ciencia de la Decisión y Dinámica de Sistemas", creditos: 0, ciclo: 9 }, { nombre: "Electivo de carrera 3", creditos: 0, ciclo: 9 }, { nombre: "Electivo libre 1", creditos: 0, ciclo: 9 }, { nombre: "Ética y Tecnología", creditos: 0, ciclo: 9 }, { nombre: "Estrategia y Organizaciones", creditos: 0, ciclo: 9 }, { nombre: "Proyecto Final de Ingeniería Industrial - Trabajo de Investigación I", creditos: 0, ciclo: 9 }] },
    { numero: 10, creditosTotales: 0, cursos: [{ nombre: "Comportamiento Organizacional", creditos: 0, ciclo: 10 }, { nombre: "Estrategia de Operaciones", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 2", creditos: 0, ciclo: 10 }, { nombre: "Electivo libre 3", creditos: 0, ciclo: 10 }, { nombre: "Trabajo de Investigación", creditos: 0, ciclo: 10 }] }
  ],
  cursosRelacionados: ["Programación I", "Proyectos Interdisciplinarios 1", "Programación II", "Proyectos Interdisciplinarios 2", "Simulación de Operaciones", "Sistemas de Información para Operaciones", "Lean Six Sigma", "Data Analytics", "Ciencia de la Decisión y Dinámica de Sistemas", "Ética y Tecnología"]
};

export const puntajesComparativosIngenieriaIndustrial: PuntajeComparativo[] = [
  {
    categoria: "Créditos Totales",
    puntajes: { "UNI": 8.5, "PUCP": 8.0, "UTEC": 8.5 },
    justificacion: "Las tres universidades tienen un creditaje similar (UNI: 210, UTEC: 212, PUCP: 214.5). La UNI es ligeramente más ligera, pero la diferencia no es significativa. El foco del análisis debe estar en la distribución de la carga y la composición de las mallas."
  },
  {
    categoria: "Base Matemática y de Ciencias",
    puntajes: { "UNI": 9.0, "PUCP": 8.5, "UTEC": 8.0 },
    justificacion: "La UNI mantiene su tradicional fortaleza en ciencias básicas, con una secuencia robusta de Cálculo, Física y Química, lo que le otorga una base de ingeniería clásica muy sólida."
  },
  {
    categoria: "Cursos de IA,Big data y tecnologías emergentes",
    puntajes: { "UNI": 6.0, "PUCP": 8.5, "UTEC": 9.0 },
    justificacion: "UTEC y PUCP muestran una clara superioridad. UTEC lidera con 10 cursos relevantes, incluyendo 'Data Analytics'. PUCP le sigue con 8, destacando su secuencia de 'Analytics 1 y 2'. La UNI está visiblemente rezagada con solo 5 cursos y una nomenclatura menos actual."
  },
  {
    categoria: "Formación en Investigación",
    puntajes: { "UNI": 8.5, "PUCP": 8.5, "UTEC": 8.5 },
    justificacion: "Las tres universidades proponen un esquema estándar y competitivo de dos cursos para desarrollar el proyecto de tesis o investigación. No se observan diferencias estructurales significativas en este criterio."
  },
  {
    categoria: "Cursos de Integración Interdisciplinaria",
    puntajes: { "UNI": 6.0, "PUCP": 8.0, "UTEC": 9.5 },
    justificacion: "UTEC es el referente con su eje de 3 'Proyectos Interdisciplinarios'. PUCP presenta cursos como 'Proyecto de Mejora' y 'Proyecto de Ingeniería Industrial'. La UNI carece de estos espacios, una debilidad recurrente que limita la aplicación práctica de conocimientos."
  }
];

export const analisisFODAUNI: AnalisisFODA = {
  fortalezas: [
    "Sólida formación en procesos de manufactura y operaciones, visible en cursos como 'Procesos Industriales I y II' e 'Ingeniería del Trabajo I y II'.",
    "Currículo con una base científica y matemática rigurosa, fiel al prestigio histórico de la UNI."
  ],
  oportunidades: [
    "Crear un eje de especialización en 'Ciencia de Datos para la Industria', modernizando cursos como 'Investigación de Operaciones' para incluir optimización y analítica avanzada.",
    "Rediseñar la malla para balancear la carga académica, que actualmente concentra 7 cursos en varios ciclos (1ro, 2do, 5to, 6to, 7mo), y así permitir una mayor profundización.",
    "Implementar un 'Proyecto Integrador de Ingeniería Industrial' en el último año, donde los estudiantes resuelvan un problema real de una empresa."
  ],
  debilidades: [
    "Grave déficit en la formación en ciencia de datos: solo 5 cursos relacionados, frente a los 10 de UTEC y 8 de PUCP. Ausencia de términos clave como 'Analytics' o 'Data Science'.",
    "Carga académica excesiva y mal distribuida, con múltiples ciclos de 7 cursos, lo que genera una alta presión sobre el estudiante y dificulta el aprendizaje profundo.",
    "Nula presencia de proyectos integradores o interdisciplinarios, una desventaja competitiva que aísla al estudiante de la experiencia de resolver problemas complejos.",
    "Nomenclatura de cursos tradicional. Asignaturas como 'Investigación de Operaciones' podrían modernizarse a 'Modelado Analítico y Optimización'."
  ],
  amenazas: [
    "La competencia está egresando ingenieros industriales con un perfil marcadamente más tecnológico y orientado a datos (ej. 'Analytics' en PUCP, 'Data Analytics' en UTEC).",
    "El mercado laboral para ingenieros industriales demanda cada vez más competencias en Industria 4.0, automatización y ciencia de datos, áreas donde la malla de la UNI es débil.",
    "La percepción de que el programa es tradicional y poco innovador puede reducir su atractivo para los nuevos talentos que buscan una formación de vanguardia."
  ]
};

export const planAccionUNI: PlanAccion[] = [
  {
    titulo: "Lanzamiento del Minor en Analítica Industrial",
    descripcion: "Crear un conjunto de 3-4 cursos electivos de especialidad en temas como 'Business Analytics', 'Ingeniería de Datos para la Industria' y 'Modelos de Machine Learning para la Optimización'.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Reestructuración de la Carga Académica",
    descripcion: "Realizar una auditoría para fusionar contenidos y reducir la cantidad de cursos por ciclo a un máximo de 6, aliviando la carga estudiantil y permitiendo mayor dedicación a cada materia.",
    prioridad: "Alta",
    plazo: "Largo"
  },
  {
    titulo: "Creación del Proyecto de Consultoría Industrial",
    descripcion: "Reemplazar los electivos del último año por un 'Proyecto de Consultoría Industrial' de 8-10 créditos, donde los equipos de estudiantes resuelvan un problema real para una empresa aliada.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Modernización de Cursos Clave de Operaciones",
    descripcion: "Actualizar el contenido y nombre de cursos como 'Investigación de Operaciones I y II' para reflejar el uso de software y herramientas de analítica modernas en la optimización de procesos.",
    prioridad: "Media",
    plazo: "Corto"
  }
];
