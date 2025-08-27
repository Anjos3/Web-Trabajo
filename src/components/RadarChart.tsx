'use client';

import { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar, type ChartJSOrUndefined } from 'react-chartjs-2';
import { PuntajeComparativo } from '@/types';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  puntajes: PuntajeComparativo[];
}

const universityColors: { [key: string]: { background: string; border: string, badge: string } } = {
  'UNI': { background: 'rgba(239, 68, 68, 0.2)', border: 'rgba(239, 68, 68, 1)', badge: 'bg-gradient-to-r from-red-500 to-orange-500' },
  'UTEC': { background: 'rgba(16, 185, 129, 0.2)', border: 'rgba(16, 185, 129, 1)', badge: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  'PUCP': { background: 'rgba(99, 102, 241, 0.2)', border: 'rgba(99, 102, 241, 1)', badge: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
  'default': { background: 'rgba(107, 114, 128, 0.2)', border: 'rgba(107, 114, 128, 1)', badge: 'bg-gray-500' }
};

const getUniversityStyle = (uni: string) => universityColors[uni] || universityColors.default;

export default function RadarChart({ puntajes }: RadarChartProps) {
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const chartRef = useRef<ChartJSOrUndefined<"radar", number[], string>>(null);

  const labels = puntajes.map(p => p.categoria);
  const universities = puntajes.length > 0 ? Object.keys(puntajes[0].puntajes) : [];

  const datasets = universities.map(uni => {
    const style = getUniversityStyle(uni);
    return {
      label: uni,
      data: puntajes.map(p => p.puntajes[uni]),
      backgroundColor: style.background,
      borderColor: style.border,
      borderWidth: 3,
      pointBackgroundColor: style.border,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: style.border,
      pointRadius: 8,
      pointHoverRadius: 12,
      pointHitRadius: 15,
    };
  });

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 14,
            weight: 'bold' as const
          }
        }
      },
      tooltip: {
        enabled: false,
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
        pointLabels: {
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: 20,
          callback: function(label: string) {
            const words = label.split(' ');
            if (words.length > 2) {
              const mid = Math.ceil(words.length / 2);
              return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
            }
            return label;
          }
        }
      },
    },
    onClick: (event: MouseEvent, elements: Array<{index: number}>) => {
      if (elements.length > 0) {
        const pointIndex = elements[0].index;
        setSelectedPoint(pointIndex === selectedPoint ? null : pointIndex);
      } else {
        setSelectedPoint(null);
      }
    },
    interaction: {
      intersect: false,
      mode: 'nearest' as const,
    },
    onHover: (event: {native?: {target?: HTMLElement}}, elements: Array<unknown>) => {
      if (event.native?.target) {
        event.native.target.style.cursor = elements.length > 0 ? 'pointer' : 'default';
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-2xl border border-purple-300/50 mb-8 overflow-hidden">
      <div className="bg-white/95 backdrop-blur-sm m-1 rounded-3xl">
        <div className="p-8 border-b-4 border-purple-200">
          <div className="text-center mb-4">
            <h3 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
              📊 Análisis Radar Comparativo
            </h3>
            <div className="w-48 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-lg font-semibold">🎯 Puntuación basada en datos objetivos de las mallas curriculares (escala 1-10)</p>
          </div>
        </div>
      <div className="p-8">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <div style={{ width: '600px', height: '600px' }}>
              <Radar ref={chartRef} data={data} options={options} />
            </div>
          </div>
          
          {selectedPoint === null && (
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300 rounded-2xl p-6 max-w-2xl text-center">
              <h4 className="text-xl font-black text-indigo-800 mb-3">🖱️ Interacción Disponible</h4>
              <p className="text-indigo-700 font-semibold">
                Haz clic en cualquier punto del polígono para ver el análisis detallado de esa dimensión
              </p>
            </div>
          )}
          
          {selectedPoint !== null && (
            <div className="w-full max-w-4xl slide-in-up">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl p-8 shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-black text-gray-800">🔍 Análisis Detallado</h4>
                  <button 
                    onClick={() => setSelectedPoint(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h5 className="font-black text-gray-800 text-xl mb-2 md:mb-0">
                      ⚡ {puntajes[selectedPoint].categoria}
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(puntajes[selectedPoint].puntajes).map(([uni, score]) => {
                        const style = getUniversityStyle(uni);
                        return (
                          <span key={uni} className={`text-sm ${style.badge} text-white font-bold px-4 py-2 rounded-full shadow-md`}>
                            🏛️ {uni}: {score}/10
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed text-base">
                    {puntajes[selectedPoint].justificacion}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
