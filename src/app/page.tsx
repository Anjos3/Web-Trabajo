'use client';

import { useState } from 'react';
import CareerSelector from '@/components/CareerSelector';
import CurriculumGrid from '@/components/CurriculumGrid';
import RadarChart from '@/components/RadarChart';
import FODAAnalysis from '@/components/FODAAnalysis';
import ActionPlan from '@/components/ActionPlan';
import ExcelExporter from '@/components/ExcelExporter';
import { 
  mallaCienciaComputacionUNI, 
  mallaCienciaComputacionUTEC,
  puntajesComparativos,
  analisisFODA,
  planAccion
} from '@/data/cienciaComputacion';
import {
  mallaIngenieriaCivilUNI,
  mallaIngenieriaCivilUTEC,
  mallaIngenieriaCivilPUCP,
  puntajesComparativosIngenieriaCivil,
  analisisFODAIngenieriaCivil,
  planAccionIngenieriaCivil
} from '@/data/ingenieriaCivil';
import {
  mallaIngenieriaSistemasUNI,
  mallaIngenieriaSistemasPUCP,
  puntajesComparativosIngenieriaSistemas,
  analisisFODAUNI as analisisFODASistemas,
  planAccionUNI as planAccionSistemas
} from '@/data/ingenieriaSistemas';
import {
  mallaIngenieriaAmbientalUNI,
  mallaIngenieriaAmbientalPUCP,
  mallaIngenieriaAmbientalUTEC,
  puntajesComparativosIngenieriaAmbiental,
  analisisFODAUNI as analisisFODAAmbiental,
  planAccionUNI as planAccionAmbiental
} from '@/data/ingenieriaAmbiental';
import {
  mallaIngenieriaIndustrialUNI,
  mallaIngenieriaIndustrialPUCP,
  mallaIngenieriaIndustrialUTEC,
  puntajesComparativosIngenieriaIndustrial,
  analisisFODAUNI as analisisFODAIndustrial,
  planAccionUNI as planAccionIndustrial
} from '@/data/ingenieriaIndustrial';

export default function Home() {
  const [selectedCareer, setSelectedCareer] = useState('Ingeniería Industrial');
  const careers = ['Ingeniería Industrial', 'Ingeniería de Sistemas', 'Ciencia de la Computación', 'Ingeniería Civil', 'Ingeniería Ambiental'];

  const getCurrentData = () => {
    switch (selectedCareer) {
      case 'Ciencia de la Computación':
        return {
          mallas: [mallaCienciaComputacionUNI, mallaCienciaComputacionUTEC],
          puntajes: puntajesComparativos,
          foda: analisisFODA,
          plan: planAccion
        };
      case 'Ingeniería Civil':
        return {
          mallas: [mallaIngenieriaCivilUNI, mallaIngenieriaCivilUTEC, mallaIngenieriaCivilPUCP],
          puntajes: puntajesComparativosIngenieriaCivil,
          foda: analisisFODAIngenieriaCivil,
          plan: planAccionIngenieriaCivil
        };
      case 'Ingeniería de Sistemas':
        return {
          mallas: [mallaIngenieriaSistemasUNI, mallaIngenieriaSistemasPUCP],
          puntajes: puntajesComparativosIngenieriaSistemas,
          foda: analisisFODASistemas,
          plan: planAccionSistemas
        };
      case 'Ingeniería Ambiental':
        return {
          mallas: [mallaIngenieriaAmbientalUNI, mallaIngenieriaAmbientalPUCP, mallaIngenieriaAmbientalUTEC],
          puntajes: puntajesComparativosIngenieriaAmbiental,
          foda: analisisFODAAmbiental,
          plan: planAccionAmbiental
        };
      case 'Ingeniería Industrial':
        return {
          mallas: [mallaIngenieriaIndustrialUNI, mallaIngenieriaIndustrialPUCP, mallaIngenieriaIndustrialUTEC],
          puntajes: puntajesComparativosIngenieriaIndustrial,
          foda: analisisFODAIndustrial,
          plan: planAccionIndustrial
        };
      default:
        return null;
    }
  };

  const currentData = getCurrentData();

  if (!currentData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay datos disponibles para la carrera seleccionada.</p>
      </div>
    );
  }

  return (
    <main>
      <CareerSelector 
        careers={careers}
        selectedCareer={selectedCareer}
        onCareerChange={setSelectedCareer}
      />
      
      {/* Botón de descarga Excel */}
      <div className="text-center mb-8">
        <ExcelExporter 
          carrera={selectedCareer}
          mallas={currentData.mallas}
          foda={currentData.foda}
          plan={currentData.plan}
          puntajes={currentData.puntajes}
        />
      </div>
      
      <div className="space-y-12">
        <section>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text mb-4">
              📋 Mallas Curriculares
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 max-w-2xl mx-auto">
              <div className="flex justify-center items-center gap-6 text-white">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🤖</span>
                  <span className="text-sm font-semibold">Cursos de IA/Big Data/Ciencia de datos</span>
                  <span className="text-xs bg-cyan-600 text-white px-2 py-1 rounded-full">IA/Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg">📚</span>
                  <span className="text-sm font-semibold">Cursos Generales</span>
                </div>
              </div>
            </div>
          </div>
          <CurriculumGrid mallas={currentData.mallas} />
        </section>

        {/* <section>
          <RadarChart puntajes={currentData.puntajes} />
        </section> */}

        <section>
          <FODAAnalysis foda={currentData.foda} />
        </section>

        <section>
          <ActionPlan plan={currentData.plan} />
        </section>
      </div>

      <footer className="text-center py-12 mt-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
          <p className="text-white text-lg font-bold mb-2">
            🎓 Análisis desarrollado para el Vicerrectorado UNI - {new Date().getFullYear()}
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
            <span className="text-yellow-300 text-2xl">⭐</span>
            <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
          </div>
          <p className="text-blue-200 text-sm mt-4 font-medium">
            🚀 Impulsando la excelencia académica del futuro
          </p>
        </div>
      </footer>
    </main>
  );
}