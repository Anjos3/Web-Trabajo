export interface Curso {
  nombre: string;
  creditos: number;
  ciclo: number;
}

export interface MallaCurricular {
  universidad: string;
  carrera: string;
  ciclos: {
    numero: number;
    cursos: Curso[];
    creditosTotales: number;
  }[];
  creditosObligatorios: number;
  cursosIA_BigData: number;
  cursosRelacionados: string[];
}

export interface AnalisisFODA {
  fortalezas: string[];
  oportunidades: string[];
  debilidades: string[];
  amenazas: string[];
}

export interface PlanAccion {
  titulo: string;
  descripcion: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  plazo: 'Corto' | 'Mediano' | 'Largo';
}

export interface PuntajeComparativo {
  categoria: string;
  puntajes: { [key: string]: number };
  justificacion: string;
}

export interface CarreraBenchmarking {
  carrera: string;
  mallas: MallaCurricular[];
  puntajes: PuntajeComparativo[];
  foda: AnalisisFODA;
  planAccion: PlanAccion[];
}