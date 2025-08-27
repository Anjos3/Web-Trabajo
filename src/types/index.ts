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
  prioridad: 'Crítica' | 'Alta' | 'Media' | 'Baja';
  plazo: 'Inmediato (6 meses)' | 'Corto (1 año)' | 'Corto (8 meses)' | 'Inmediato (4 meses)' | 'Mediano (1.5 años)' | 'Mediano (2 años)' | 'Corto' | 'Mediano' | 'Largo';
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