'use client';

import { AnalisisFODA } from '@/types';

interface FODAAnalysisProps {
  foda: AnalisisFODA;
}

export default function FODAAnalysis({ foda }: FODAAnalysisProps) {
  const sections = [
    { title: 'Fortalezas', items: foda.fortalezas, icon: '💪', bgColor: 'bg-gradient-to-br from-green-400 to-emerald-500', textColor: 'text-white' },
    { title: 'Oportunidades', items: foda.oportunidades, icon: '🚀', bgColor: 'bg-gradient-to-br from-blue-400 to-cyan-500', textColor: 'text-white' },
    { title: 'Debilidades', items: foda.debilidades, icon: '⚠️', bgColor: 'bg-gradient-to-br from-orange-400 to-red-400', textColor: 'text-white' },
    { title: 'Amenazas', items: foda.amenazas, icon: '🛡️', bgColor: 'bg-gradient-to-br from-red-500 to-pink-500', textColor: 'text-white' },
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl border border-indigo-300/50 mb-8 overflow-hidden">
      <div className="bg-white/95 backdrop-blur-sm m-1 rounded-3xl">
        <div className="p-8 border-b-4 border-indigo-200">
          <div className="text-center">
            <h3 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text mb-2">
              🎯 Análisis FODA - UNI
            </h3>
            <div className="w-40 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-lg font-semibold">📈 Evaluación estratégica basada en el análisis comparativo</p>
          </div>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section) => (
              <div key={section.title} className={`${section.bgColor} rounded-2xl p-6 shadow-xl transform hover:scale-[1.02] transition-all duration-300`}>
                <h4 className={`text-2xl font-black ${section.textColor} mb-6 text-center`}>
                  {section.icon} {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-yellow-300 text-lg mr-3 flex-shrink-0 mt-0.5">⭐</span>
                      <span className="text-sm text-white font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}