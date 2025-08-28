import { MallaCurricular, PuntajeComparativo, AnalisisFODA, PlanAccion } from '@/types';

export const mallaIngenieriaIndustrialUNI: MallaCurricular = {
  universidad: "UNI",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 210,
  cursosIA_BigData: 5,
  ciclos: [
    { 
      numero: 1, 
      creditosTotales: 22, 
      cursos: [
        { nombre: "Cálculo Diferencial", creditos: 5, ciclo: 1 }, 
        { nombre: "Química I", creditos: 5, ciclo: 1 }, 
        { nombre: "Redacción y Comunicación", creditos: 2, ciclo: 1 }, 
        { nombre: "Ética y Filosofía Política", creditos: 2, ciclo: 1 }, 
        { nombre: "Geometría Analítica", creditos: 3, ciclo: 1 }, 
        { nombre: "Dibujo de Ingeniería", creditos: 2, ciclo: 1 }, 
        { nombre: "Introducción a Ingeniería Industrial", creditos: 3, ciclo: 1 }
      ] 
    },
    { 
      numero: 2, 
      creditosTotales: 22, 
      cursos: [
        { nombre: "Algebra Lineal", creditos: 4, ciclo: 2 }, 
        { nombre: "Cálculo Integral", creditos: 5, ciclo: 2 }, 
        { nombre: "Introducción a la Computación", creditos: 2, ciclo: 2 }, 
        { nombre: "Realidad Nacional, Constitución y Derechos Humanos", creditos: 3, ciclo: 2 }, 
        { nombre: "Desarrollo Personal", creditos: 2, ciclo: 2 }, 
        { nombre: "Teoría General de Sistemas", creditos: 2, ciclo: 2 }, 
        { nombre: "Química II", creditos: 4, ciclo: 2 }
      ] 
    },
    { 
      numero: 3, 
      creditosTotales: 21, 
      cursos: [
        { nombre: "Física I", creditos: 5, ciclo: 3 }, 
        { nombre: "Metodología de la Investigación", creditos: 2, ciclo: 3 }, 
        { nombre: "Matematica Discreta", creditos: 3, ciclo: 3 }, 
        { nombre: "Cálculo Multivariable", creditos: 5, ciclo: 3 }, 
        { nombre: "Diseño Asistido por Computador", creditos: 3, ciclo: 3 }, 
        { nombre: "Termodinámica", creditos: 3, ciclo: 3 }
      ] 
    },
    { 
      numero: 4, 
      creditosTotales: 23, 
      cursos: [
        { nombre: "Economía General", creditos: 3, ciclo: 4 }, 
        { nombre: "Ecuaciones Diferenciales", creditos: 5, ciclo: 4 }, 
        { nombre: "Física II", creditos: 5, ciclo: 4 }, 
        { nombre: "Lenguaje de Programación", creditos: 3, ciclo: 4 }, 
        { nombre: "Estadística y Probabilidades", creditos: 3, ciclo: 4 }, 
        { nombre: "Física Química y Operaciones Unitarias", creditos: 4, ciclo: 4 }
      ] 
    },
    { 
      numero: 5, 
      creditosTotales: 22, 
      cursos: [
        { nombre: "Sociología", creditos: 2, ciclo: 5 }, 
        { nombre: "Contabilidad Financiera", creditos: 3, ciclo: 5 }, 
        { nombre: "Ingeniería de Materiales", creditos: 3, ciclo: 5 }, 
        { nombre: "Procesos Industriales I", creditos: 4, ciclo: 5 }, 
        { nombre: "Electricidad y Electrónica Industrial", creditos: 4, ciclo: 5 }, 
        { nombre: "Ingeniería del Trabajo I", creditos: 3, ciclo: 5 }, 
        { nombre: "Investigación de Operaciones I", creditos: 3, ciclo: 5 }
      ] 
    },
    { 
      numero: 6, 
      creditosTotales: 19, 
      cursos: [
        { nombre: "Administración y Organización", creditos: 3, ciclo: 6 }, 
        { nombre: "Procesos Industriales II", creditos: 4, ciclo: 6 }, 
        { nombre: "Control Estadístico de Procesos", creditos: 3, ciclo: 6 }, 
        { nombre: "Ingeniería del Trabajo II", creditos: 3, ciclo: 6 }, 
        { nombre: "Investigación de Operaciones II", creditos: 3, ciclo: 6 }, 
        { nombre: "Maquinaria e Instrumentación Industrial", creditos: 3, ciclo: 6 }
      ] 
    },
    { 
      numero: 7, 
      creditosTotales: 18, 
      cursos: [
        { nombre: "Ingeniería Económica", creditos: 3, ciclo: 7 }, 
        { nombre: "Logística Empresarial", creditos: 3, ciclo: 7 }, 
        { nombre: "Modelado Sistémico y Simulación", creditos: 3, ciclo: 7 }, 
        { nombre: "Análisis de Procesos de Manufactura", creditos: 3, ciclo: 7 }, 
        { nombre: "Ingeniería de Procesos", creditos: 3, ciclo: 7 }, 
        { nombre: "Contabilidad de Costos y Presupuestos", creditos: 3, ciclo: 7 }
      ] 
    },
    { 
      numero: 8, 
      creditosTotales: 15, 
      cursos: [
        { nombre: "Sistemas Integrados de Calidad", creditos: 3, ciclo: 8 }, 
        { nombre: "Automatización y Control de Procesos", creditos: 3, ciclo: 8 }, 
        { nombre: "Gestión de la Cadena de Suministro", creditos: 3, ciclo: 8 }, 
        { nombre: "Ingeniería del Producto", creditos: 3, ciclo: 8 }, 
        { nombre: "Mercadotecnia", creditos: 3, ciclo: 8 }
      ] 
    },
    { 
      numero: 9, 
      creditosTotales: 14, 
      cursos: [
        { nombre: "Seguridad y Salud Ocupacional", creditos: 3, ciclo: 9 }, 
        { nombre: "Gestión Financiera", creditos: 3, ciclo: 9 }, 
        { nombre: "Innovación y Emprendimiento de Negocios", creditos: 3, ciclo: 9 }, 
        { nombre: "Taller de proyecto de investigación", creditos: 2, ciclo: 9 }, 
        { nombre: "Planeamiento y Control de Operaciones", creditos: 3, ciclo: 9 }
      ] 
    },
    { 
      numero: 10, 
      creditosTotales: 11, 
      cursos: [
        { nombre: "Gestión del Talento Humano", creditos: 3, ciclo: 10 }, 
        { nombre: "Planeamiento y Gestión Estratégica", creditos: 3, ciclo: 10 }, 
        { nombre: "Diseño y Evaluación de Proyectos", creditos: 3, ciclo: 10 }, 
        { nombre: "Taller de Investigación", creditos: 2, ciclo: 10 }
      ] 
    }
  ],
  cursosRelacionados: ["Introducción a la Computación", "Diseño Asistido por Computador", "Lenguaje de Programación", "Modelado Sistémico y Simulación", "Automatización y Control de Procesos"]
};

export const mallaIngenieriaIndustrialPUCP: MallaCurricular = {
  universidad: "PUCP",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 214.05,
  cursosIA_BigData: 8,
  ciclos: [
    { 
      numero: 1, 
      creditosTotales: 18, 
      cursos: [
        { nombre: "Álgebra matricial y geometría analítica", creditos: 4.5, ciclo: 1 }, 
        { nombre: "Fundamentos de cálculo", creditos: 4.5, ciclo: 1 }, 
        { nombre: "Fundamentos de física", creditos: 3.5, ciclo: 1 }, 
        { nombre: "Taller de ingeniería industrial", creditos: 2.5, ciclo: 1 }, 
        { nombre: "Comunicación académica", creditos: 3, ciclo: 1 }
      ] 
    },
    { 
      numero: 2, 
      creditosTotales: 20, 
      cursos: [
        { nombre: "Cálculo diferencial", creditos: 4.5, ciclo: 2 }, 
        { nombre: "Física 1", creditos: 4.5, ciclo: 2 }, 
        { nombre: "Laboratorio de física 1", creditos: 0.5, ciclo: 2 }, 
        { nombre: "Dibujo en ingeniería", creditos: 4.5, ciclo: 2 }, 
        { nombre: "Trabajo académico", creditos: 3, ciclo: 2 }, 
        { nombre: "Ciencia y filosofía", creditos: 3, ciclo: 2 }
      ] 
    },
    { 
      numero: 3, 
      creditosTotales: 23.5, 
      cursos: [
        { nombre: "Cálculo integral", creditos: 4.5, ciclo: 3 }, 
        { nombre: "Física 2", creditos: 4.5, ciclo: 3 }, 
        { nombre: "Laboratorio de física 2", creditos: 0.5, ciclo: 3 }, 
        { nombre: "Química 1", creditos: 3.5, ciclo: 3 }, 
        { nombre: "Seguridad y ergonomía", creditos: 3.5, ciclo: 3 }, 
        { nombre: "Mecánica para ingenieros", creditos: 3.5, ciclo: 3 },
        { nombre: "Electivo", creditos: 3, ciclo: 3 },
        { nombre: "Electivo", creditos: 4.5, ciclo: 3 }
      ] 
    },
    { 
      numero: 4, 
      creditosTotales: 17.25, 
      cursos: [
        { nombre: "Cálculo vectorial", creditos: 4.5, ciclo: 4 }, 
        { nombre: "Física 3", creditos: 0.5, ciclo: 4 }, 
        { nombre: "Laboratorio de física 3", creditos: 4.5, ciclo: 4 }, 
        { nombre: "Estadística", creditos: 0.75, ciclo: 4 }, 
        { nombre: "Laboratorio de química 1", creditos: 4, ciclo: 4 }, 
        { nombre: "Estudio del trabajo", creditos: 3.5, ciclo: 4 }
      ] 
    },
    { 
      numero: 5, 
      creditosTotales: 22.5, 
      cursos: [
        { nombre: "Análisis Cuantitativo para la Toma de Decisiones", creditos: 2.75, ciclo: 5 }, 
        { nombre: "Gestión Empresarial", creditos: 3.5, ciclo: 5 }, 
        { nombre: "Control Estadístico de Calidad", creditos: 3.5, ciclo: 5 }, 
        { nombre: "Introducción a la programación", creditos: 3, ciclo: 5 }, 
        { nombre: "Introducción a la Termodinámica", creditos: 2.5, ciclo: 5 }, 
        { nombre: "Economía General", creditos: 4.5, ciclo: 5 }, 
        { nombre: "Dibujo Mecánico", creditos: 2.75, ciclo: 5 }
      ] 
    },
    { 
      numero: 6, 
      creditosTotales: 21.5, 
      cursos: [
        { nombre: "Habilidades Directivas", creditos: 3, ciclo: 6 }, 
        { nombre: "Modelos Determinísticos", creditos: 3.5, ciclo: 6 }, 
        { nombre: "Analytics 1", creditos: 3, ciclo: 6 }, 
        { nombre: "Fundamentos de la cadena de suministros y operaciones", creditos: 4, ciclo: 6 }, 
        { nombre: "Ingeniería Económica", creditos: 3.5, ciclo: 6 }, 
        { nombre: "Resistencia de Materiales 1A", creditos: 3.5, ciclo: 6 }, 
        { nombre: "Laboratorio de Termodinámica General", creditos: 1, ciclo: 6 }
      ] 
    },
    { 
      numero: 7, 
      creditosTotales: 21.5, 
      cursos: [
        { nombre: "Gestión del Talento Humano", creditos: 3, ciclo: 7 }, 
        { nombre: "Analytics 2", creditos: 3, ciclo: 7 }, 
        { nombre: "Diseño de la Cadena de Suministros y Operaciones", creditos: 4, ciclo: 7 }, 
        { nombre: "Ingeniería de Materiales", creditos: 3, ciclo: 7 }, 
        { nombre: "Taller de Procesos de Manufactura", creditos: 1, ciclo: 7 }, 
        { nombre: "Procesos Industriales", creditos: 3, ciclo: 7 }, 
        { nombre: "Control de Gestión Industrial", creditos: 4.5, ciclo: 7 }
      ] 
    },
    { 
      numero: 8, 
      creditosTotales: 21, 
      cursos: [
        { nombre: "Dinámica de la Cadena de Suministro Esbelta", creditos: 4, ciclo: 8 }, 
        { nombre: "Simulación", creditos: 3.5, ciclo: 8 }, 
        { nombre: "Procesos de Manufactura", creditos: 3, ciclo: 8 }, 
        { nombre: "Electricidad Industrial", creditos: 2.5, ciclo: 8 }, 
        { nombre: "Laboratorio de Procesos Industriales", creditos: 1, ciclo: 8 }, 
        { nombre: "Mercadotecnia Industrial", creditos: 3.5, ciclo: 8 }, 
        { nombre: "Finanzas Industriales", creditos: 3.5, ciclo: 8 }
      ] 
    },
    { 
      numero: 9, 
      creditosTotales: 18.25, 
      cursos: [
        { nombre: "Automatización e Industria 4.0", creditos: 4, ciclo: 9 }, 
        { nombre: "Proyecto de Mejora", creditos: 2, ciclo: 9 }, 
        { nombre: "Proyecto de Ingeniería Industrial 1", creditos: 2, ciclo: 9 }, 
        { nombre: "Análisis y Diseño de Sistemas", creditos: 3, ciclo: 9 }, 
        { nombre: "Elaboración y Evaluación de Proyectos", creditos: 3.75, ciclo: 9 }, 
        { nombre: "Gestión Ambiental", creditos: 3.5, ciclo: 9 }
      ] 
    },
    { 
      numero: 10, 
      creditosTotales: 12, 
      cursos: [
        { nombre: "Gestión de la Innovación", creditos: 3, ciclo: 10 }, 
        { nombre: "Proyecto de Ingeniería Industrial 2", creditos: 3, ciclo: 10 }, 
        { nombre: "Ética Profesional en Ingeniería Industrial", creditos: 3, ciclo: 10 }, 
        { nombre: "Gestión de Proyectos", creditos: 3, ciclo: 10 }
      ] 
    }
  ],
  cursosRelacionados: ["Análisis Cuantitativo para la Toma de Decisiones", "Introducción a la programación", "Analytics 1", "Analytics 2", "Simulación", "Automatización e Industria 4.0", "Proyecto de Mejora", "Gestión de la Innovación"]
};

export const mallaIngenieriaIndustrialUTEC: MallaCurricular = {
  universidad: "UTEC",
  carrera: "Ingeniería Industrial",
  creditosObligatorios: 212,
  cursosIA_BigData: 10,
  ciclos: [
    { 
      numero: 1, 
      creditosTotales: 20, 
      cursos: [
        { nombre: "Programación I", creditos: 4, ciclo: 1 }, 
        { nombre: "Cálculo de una Variable", creditos: 4, ciclo: 1 }, 
        { nombre: "Química General", creditos: 3, ciclo: 1 }, 
        { nombre: "Laboratorio de Química General", creditos: 1, ciclo: 1 }, 
        { nombre: "Introducción a la Ingeniería Industrial", creditos: 2, ciclo: 1 }, 
        { nombre: "Laboratorio de Comunicación 1", creditos: 3, ciclo: 1 }, 
        { nombre: "Proyectos Interdisciplinarios 1", creditos: 3, ciclo: 1 }
      ] 
    },
    { 
      numero: 2, 
      creditosTotales: 20, 
      cursos: [
        { nombre: "Cálculo Vectorial", creditos: 3, ciclo: 2 }, 
        { nombre: "Ciencia de los Materiales", creditos: 3, ciclo: 2 }, 
        { nombre: "Introducción a la Mecánica", creditos: 4, ciclo: 2 }, 
        { nombre: "Estadística y Probabilidades I", creditos: 4, ciclo: 2 }, 
        { nombre: "Perú: Temas de la sociedad contemporánea", creditos: 3, ciclo: 2 }, 
        { nombre: "Laboratorio de Comunicación 2", creditos: 3, ciclo: 2 }
      ] 
    },
    { 
      numero: 3, 
      creditosTotales: 20, 
      cursos: [
        { nombre: "Ecuaciones Diferenciales", creditos: 3, ciclo: 3 }, 
        { nombre: "Álgebra Lineal", creditos: 2, ciclo: 3 }, 
        { nombre: "Programación II", creditos: 4, ciclo: 3 }, 
        { nombre: "Estadística Aplicada", creditos: 4, ciclo: 3 }, 
        { nombre: "Fundamentos de Operaciones", creditos: 4, ciclo: 3 }, 
        { nombre: "Empresa y Consumidor", creditos: 3, ciclo: 3 }
      ] 
    },
    { 
      numero: 4, 
      creditosTotales: 21, 
      cursos: [
        { nombre: "Métodos Numéricos", creditos: 3, ciclo: 4 }, 
        { nombre: "Fundamentos de Electricidad y Magnetismo", creditos: 4, ciclo: 4 }, 
        { nombre: "Investigación de Operaciones I: Modelos Determinísticos", creditos: 4, ciclo: 4 }, 
        { nombre: "Gestión de Costos", creditos: 4, ciclo: 4 }, 
        { nombre: "Economía, gobernanza y relaciones de poder", creditos: 3, ciclo: 4 }, 
        { nombre: "Proyectos Interdisciplinarios 2", creditos: 3, ciclo: 4 }
      ] 
    },
    { 
      numero: 5, 
      creditosTotales: 22, 
      cursos: [
        { nombre: "Investigación de Operaciones II: Modelos Probabilísticos", creditos: 4, ciclo: 5 }, 
        { nombre: "Planificación y Control de Operaciones", creditos: 4, ciclo: 5 }, 
        { nombre: "Principios de Diseño de Productos y Servicios", creditos: 4, ciclo: 5 }, 
        { nombre: "Salud y Seguridad Ocupacional", creditos: 3, ciclo: 5 }, 
        { nombre: "Ingeniería Financiera", creditos: 4, ciclo: 5 }, 
        { nombre: "Finanzas Empresariales", creditos: 3, ciclo: 5 }
      ] 
    },
    { 
      numero: 6, 
      creditosTotales: 20, 
      cursos: [
        { nombre: "Gestión de la Calidad", creditos: 4, ciclo: 6 }, 
        { nombre: "Simulación de Operaciones", creditos: 4, ciclo: 6 }, 
        { nombre: "Gestión de la Cadena de Suministros", creditos: 4, ciclo: 6 }, 
        { nombre: "Análisis y Diseño de Sistemas", creditos: 4, ciclo: 6 }, 
        { nombre: "Sistemas de Información para Operaciones", creditos: 4, ciclo: 6 }
      ] 
    },
    { 
      numero: 7, 
      creditosTotales: 18, 
      cursos: [
        { nombre: "Lean Six Sigma", creditos: 4, ciclo: 7 }, 
        { nombre: "Data Analytics", creditos: 4, ciclo: 7 }, 
        { nombre: "Gestión de Proyectos de Ingeniería", creditos: 4, ciclo: 7 }, 
        { nombre: "Arte y Tecnología", creditos: 3, ciclo: 7 }, 
        { nombre: "Proyectos Interdisciplinarios 3", creditos: 3, ciclo: 7 }
      ] 
    },
    { 
      numero: 8, 
      creditosTotales: 11, 
      cursos: [
        { nombre: "Proyecto Preprofesional", creditos: 8, ciclo: 8 }, 
        { nombre: "Evaluación Financiera de Proyectos", creditos: 3, ciclo: 8 }
      ] 
    },
    { 
      numero: 9, 
      creditosTotales: 18, 
      cursos: [
        { nombre: "Ciencia de la Decisión y Dinámica de Sistemas", creditos: 4, ciclo: 9 }, 
        { nombre: "Electivo de carrera 3", creditos: 4, ciclo: 9 }, 
        { nombre: "Ética y Tecnología", creditos: 3, ciclo: 9 }, 
        { nombre: "Estrategia y Organizaciones", creditos: 3, ciclo: 9 }, 
        { nombre: "Proyecto Final de Ingeniería Industrial - Trabajo de Investigación I", creditos: 4, ciclo: 9 }
      ] 
    },
    { 
      numero: 10, 
      creditosTotales: 10, 
      cursos: [
        { nombre: "Comportamiento Organizacional", creditos: 3, ciclo: 10 }, 
        { nombre: "Estrategia de Operaciones", creditos: 3, ciclo: 10 }, 
        { nombre: "Trabajo de Investigación", creditos: 4, ciclo: 10 }
      ] 
    }
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
    categoria: "Cursos de IA, Big Data y tecnologías emergentes",
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
    "Base científica y matemática excepcionalmente sólida con secuencia completa: 'Cálculo Diferencial', 'Cálculo Integral', 'Cálculo Multivariable', 'Ecuaciones Diferenciales', complementada con 'Física I-II', 'Química I-II' y 'Estadística y Probabilidades/Aplicada', proporcionando fundamentos analíticos superiores para optimización y modelado industrial avanzado.",
    "Formación robusta en procesos industriales y manufactura con cursos especializados: 'Procesos Industriales I' (ciclo 5), 'Procesos Industriales II' (ciclo 6), 'Análisis de Procesos de Manufactura' (ciclo 7), 'Ingeniería de Procesos' (ciclo 7), construyendo expertise profundo en operaciones de producción.",
    "Enfoque integral en ingeniería del trabajo con secuencia dedicada: 'Ingeniería del Trabajo I' (ciclo 5) e 'Ingeniería del Trabajo II' (ciclo 6), desarrollando competencias críticas en optimización de procesos y productividad humana.",
    "Equilibrio crediticio adecuado con 210 créditos, cumpliendo holgadamente el mínimo de 200 créditos establecido en los artículos 41 y 42 de la Ley Universitaria, sin excesos que generen sobrecarga, aunque requiere redistribución para optimizar carga por ciclo."
  ],
  oportunidades: [
    "Artículo 40 de la Ley Universitaria permite actualización curricular cada 3 años o cuando sea conveniente por avances científicos y tecnológicos, creando oportunidad legal para modernizar hacia Industry 4.0, IoT Industrial y Analytics sin modificar estructura crediticia total.",
    "Demanda creciente del mercado por ingenieros industriales con competencias en ciencia de datos, automatización y transformación digital, especialmente en sectores minero, manufactura y servicios financieros donde Perú muestra crecimiento sostenido.",
    "Posicionamiento único para liderar especialización en 'Ingeniería Industrial 4.0', integrando fortalezas tradicionales en procesos con tecnologías emergentes como IoT, Machine Learning aplicado a operaciones y automatización inteligente."
  ],
  debilidades: [
    "Severo rezago tecnológico en cursos de IA/Big Data: apenas 5 cursos relacionados (Introducción a la Computación, Diseño Asistido por Computador, Lenguaje de Programación, Modelado Sistémico y Simulación, Automatización y Control de Procesos) versus 10 en UTEC ('Data Analytics', 'Ciencia de la Decisión') y 8 en PUCP ('Analytics 1 y 2', 'Simulación'). Ausencia crítica de términos modernos como 'Business Intelligence', 'Machine Learning' o 'Data Science'.",
    "Sobrecarga académica estructural con distribución inadecuada: ciclos 2, 5, 6, 7 con 7 cursos cada uno, generando estrés académico excesivo que compromete el aprendizaje profundo. Esta carga excesiva, aunque respeta el mínimo de 200 créditos de los artículos 41 y 42 de la Ley Universitaria, vulnera principios de diseño curricular efectivo, afectando el rendimiento estudiantil y calidad formativa.",
    "Nomenclatura curricular desactualizada que no refleja estándares modernos de la industria: 'Investigación de Operaciones I-II' debería denominarse 'Analítica Avanzada para Operaciones', 'Lenguaje de Programación' carece de especificación tecnológica, 'Automatización y Control de Procesos' no menciona Industry 4.0 o IoT Industrial.",
    "Déficit en formación digital empresarial: ausencia de cursos como 'Transformación Digital', 'Sistemas ERP', 'Inteligencia de Negocios' que son estándar en programas competitivos y demandados por el mercado laboral actual."
  ],
  amenazas: [
    "Ventaja competitiva desvaneciente: UTEC forma profesionales con 10 cursos tecnológicos versus 5 de UNI, incluyendo 'Data Analytics', 'Automatización e Industria 4.0', 'Ciencia de la Decisión y Dinámica de Sistemas'. PUCP desarrolla competencias en 'Analytics 1 y 2', 'Simulación', 'Gestión de la Innovación'. Estos egresados acceden a posiciones mejor remuneradas en consultoría, banca de inversión y empresas multinacionales.",
    "Obsolescencia curricular acelerada: mercado laboral industrial demanda perfiles con dominio en Python/R para Analytics, conocimientos en IoT Industrial, Machine Learning aplicado a Supply Chain, y experiencia en proyectos multidisciplinarios. La brecha UNI versus mercado se amplía exponencialmente cada año académico.",
    "Deterioro del posicionamiento institucional: empleadores del sector industrial (minería, manufactura, servicios financieros) privilegian cada vez más egresados con portfolio de proyectos reales y competencias digitales comprobables. La ausencia de 'Proyectos Interdisciplinarios' en UNI versus 3 en UTEC genera desventaja tangible en procesos de selección.",
    "Fuga de talento estudiantil hacia competencia: estudiantes de alto rendimiento migran hacia programas que ofrecen formación en tecnologías emergentes, proyectos empresariales reales y mejor empleabilidad post-grado, debilitando progresivamente la calidad del pool estudiantil UNI."
  ]
};

export const planAccionUNI: PlanAccion[] = [
  {
    titulo: "Implementación de Minor en Analítica Industrial 4.0",
    descripcion: "Desarrollar secuencia especializada de 4 cursos: 'Fundamentos de Data Science Industrial' (3 créditos, ciclo 6), 'Business Analytics y KPIs Operacionales' (3 créditos, ciclo 7), 'Machine Learning para Supply Chain' (3 créditos, ciclo 8), e 'IoT y Automatización Inteligente' (3 créditos, ciclo 9). Utilizar herramientas Python/R, Power BI, y plataformas cloud. Marco legal: Artículo 40 de la Ley Universitaria justifica esta actualización por avances tecnológicos, manteniendo 210 créditos que superan el mínimo de los artículos 41 y 42.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Reestructuración Integral de Carga Académica",
    descripcion: "Redistribuir cursos para eliminar sobrecarga: reducir ciclos 2, 5, 6, 7 de 7 a máximo 6 cursos mediante fusión de contenidos relacionados ('Procesos Industriales I-II' en curso único de 6 créditos, 'Ingeniería del Trabajo I-II' en curso integrado). Esta reestructuración respeta los artículos 41 y 42 de la Ley Universitaria manteniendo mínimo de 200 créditos, implementando sistema modular que optimice límites pedagógicos de 18-20 créditos/ciclo.",
    prioridad: "Alta",
    plazo: "Largo"
  },
  {
    titulo: "Creación del Eje de Proyectos Integradores Empresariales",
    descripcion: "Instaurar 3 'Proyectos de Ingeniería Industrial Aplicada': Ciclo 4 (2 créditos, diagnóstico empresarial), Ciclo 7 (4 créditos, proyecto de mejora), Ciclo 9 (6 créditos, consultoría integral). Partnering con empresas mineras, manufactureras y de servicios. Esta innovación curricular se fundamenta en el artículo 40 de la Ley Universitaria para actualización por avances tecnológicos, emulando modelo UTEC para generar portfolio estudiantil competitivo.",
    prioridad: "Alta",
    plazo: "Mediano"
  },
  {
    titulo: "Modernización Curricular con Nomenclatura Industria 4.0",
    descripcion: "Actualizar denominaciones y contenidos: 'Investigación de Operaciones I-II' → 'Analítica Avanzada y Optimización de Procesos', 'Lenguaje de Programación' → 'Programación Python para Ingeniería Industrial', 'Automatización y Control' → 'Industry 4.0 y Sistemas Ciber-físicos'. Incluir certificaciones industriales (Six Sigma, SAP, Microsoft Power Platform). Reforma amparada en artículo 40 de la Ley Universitaria por conveniencia de avances tecnológicos.",
    prioridad: "Media",
    plazo: "Corto"
  },
  {
    titulo: "Desarrollo del Laboratorio de Transformación Digital Industrial",
    descripcion: "Establecer espacio físico y virtual equipado con software ERP (SAP/Oracle), plataformas de simulación (Arena, AnyLogic), herramientas de Business Intelligence (Tableau, Power BI), y tecnologías IoT. Integrar con cursos existentes y nuevos proyectos. Inversión estimada necesaria pero estratégica para competitividad curricular.",
    prioridad: "Media",
    plazo: "Largo"
  },
  {
    titulo: "Programa de Actualización Docente en Tecnologías Emergentes",
    descripcion: "Capacitar 15 docentes clave en competencias digitales: certificaciones en Data Analytics, metodologías Agile, herramientas de simulación avanzada, y pedagogía por proyectos. Alianzas con Microsoft, Google Cloud, AWS Educate para acceso a plataformas y certificaciones internacionales. Esta actualización docente es crítica para implementar las modernizaciones curriculares sustentadas en el artículo 40 de la Ley Universitaria, garantizando transferencia efectiva de conocimientos actualizados a estudiantes.",
    prioridad: "Alta",
    plazo: "Corto"
  }
];
