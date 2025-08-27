'use client';

import { PlanAccion } from '@/types';

interface ActionPlanProps {
  plan: PlanAccion[];
}

export default function ActionPlan({ plan }: ActionPlanProps) {
  const getPriorityColor = (prioridad: string) => {
    switch (prioridad) {
      case 'Alta': return 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg';
      case 'Media': return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg';
      case 'Baja': return 'bg-gradient-to-r from-green-400 to-emerald-400 text-white shadow-lg';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg';
    }
  };

  const getTimeframeColor = (plazo: string) => {
    switch (plazo) {
      case 'Corto': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg';
      case 'Mediano': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg';
      case 'Largo': return 'bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg';
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl border border-emerald-300/50 mb-8 overflow-hidden">
      <div className="bg-white/95 backdrop-blur-sm m-1 rounded-3xl">
        <div className="p-8 border-b-4 border-emerald-200">
          <div className="text-center">
            <h3 className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-700 text-transparent bg-clip-text mb-2">
              🎯 Plan de Acción Estratégico
            </h3>
            <div className="w-48 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-lg font-semibold">🚀 Propuestas de mejora priorizadas para el Vicerrectorado UNI</p>
          </div>
        </div>
        
        <div className="p-8">
          <div className="space-y-8">
            {plan.map((accion, index) => (
              <div key={index} className="bg-gradient-to-r from-white to-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <h4 className="text-2xl font-black text-gray-800">🏆 {accion.titulo}</h4>
                  <div className="flex flex-wrap gap-3">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold transform hover:scale-105 transition-all ${getPriorityColor(accion.prioridad)}`}>
                      ⚡ {accion.prioridad} Prioridad
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold transform hover:scale-105 transition-all ${getTimeframeColor(accion.plazo)}`}>
                      🕰️ {accion.plazo} Plazo
                    </span>
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed bg-blue-50 p-4 rounded-xl border border-blue-200">{accion.descripcion}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl">
            <h4 className="font-black text-white mb-4 text-xl text-center">📊 Recomendación Estratégica</h4>
            <p className="text-white font-medium leading-relaxed">
              🎯 Se recomienda implementar las acciones de <strong>alta prioridad y corto plazo</strong> primero, 
              especialmente la <strong>modernización de nomenclatura</strong> y el <strong>fortalecimiento de vínculos 
              industria-academia</strong>, ya que pueden generar <strong>impacto inmediato</strong> en la percepción 
              y competitividad del programa. 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}