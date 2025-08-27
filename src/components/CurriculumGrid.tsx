'use client';

import { MallaCurricular } from '@/types';

interface CurriculumGridProps {
  mallas: MallaCurricular[];
}

const isCursoTecnologico = (nombreCurso: string, cursosRelacionados: string[]): boolean => {
  return cursosRelacionados.some(curso => curso.toLowerCase().includes(nombreCurso.toLowerCase()));
};

export default function CurriculumGrid({ mallas }: CurriculumGridProps) {
  return (
    <div className={`grid gap-8 mb-8 ${mallas.length === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 xl:grid-cols-3'}`}>
      {mallas.map((malla) => (
        <div key={malla.universidad} className={`rounded-3xl shadow-2xl border-2 overflow-hidden transform hover:scale-[1.02] transition-all duration-300 ${
          malla.universidad === 'UNI' 
            ? 'bg-gradient-to-br from-red-500 to-orange-500 border-red-300/50' 
            : malla.universidad === 'UTEC'
            ? 'bg-gradient-to-br from-green-500 to-emerald-500 border-green-300/50'
            : 'bg-gradient-to-br from-purple-500 to-indigo-500 border-purple-300/50'
        }`}>
          <div className="bg-white/95 backdrop-blur-sm m-1 rounded-3xl">
            <div className="p-6 border-b-4 border-purple-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-3xl font-black ${
                  malla.universidad === 'UNI' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text' 
                    : malla.universidad === 'UTEC'
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text'
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text'
                }`}>
                  🏛️ {malla.universidad}
                </h3>
                <div className="text-sm text-gray-600 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                  {malla.carrera}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-4 rounded-2xl text-white shadow-lg">
                  <div className="text-3xl font-black">📊 {malla.creditosObligatorios}</div>
                  <div className="text-sm font-semibold opacity-90">Créditos Totales</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-4 rounded-2xl text-white shadow-lg">
                  <div className="text-3xl font-black">🤖 {malla.cursosIA_BigData}</div>
                  <div className="text-sm font-semibold opacity-90">Cursos relacionados a IA, Big Data y tecnologías emergentes</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {malla.ciclos.map((ciclo) => (
                  <div key={ciclo.numero} className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-4 hover:shadow-lg transition-all duration-200">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-black text-gray-800 text-lg">🔥 Ciclo {ciclo.numero}</h4>
                      <span className="text-sm bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold px-3 py-1 rounded-full shadow-md">
                        ⚡ {ciclo.creditosTotales} créditos
                      </span>
                    </div>
                    <div className="space-y-2">
                      {ciclo.cursos.map((curso, index) => {
                        const esTecnologico = isCursoTecnologico(curso.nombre, malla.cursosRelacionados);
                        return (
                          <div key={index} className={`flex justify-between items-center text-sm p-2 rounded-lg transition-colors duration-150 ${
                            esTecnologico 
                              ? 'bg-gradient-to-r from-cyan-100 to-blue-100 border-2 border-cyan-300 hover:from-cyan-200 hover:to-blue-200' 
                              : 'bg-white/70 hover:bg-white/90'
                          }`}>
                            <span className={`font-semibold ${esTecnologico ? 'text-cyan-800' : 'text-gray-800'}`}>
                              {esTecnologico ? '🤖' : '📚'} {curso.nombre}
                              {esTecnologico && <span className="ml-2 text-xs bg-cyan-600 text-white px-2 py-1 rounded-full">IA/Data</span>}
                            </span>
                            <span className={`font-bold px-2 py-1 rounded-full ${
                              esTecnologico 
                                ? 'text-cyan-700 bg-cyan-200' 
                                : 'text-purple-600 bg-purple-100'
                            }`}>
                              {curso.creditos}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}