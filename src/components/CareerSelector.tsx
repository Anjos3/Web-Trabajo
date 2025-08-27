'use client';


interface CareerSelectorProps {
  careers: string[];
  selectedCareer: string;
  onCareerChange: (career: string) => void;
}

export default function CareerSelector({ careers, selectedCareer, onCareerChange }: CareerSelectorProps) {
  const getCareerIcon = (careerName: string) => {
    if (careerName.includes('Computación')) {
      return '💻';
    }
    if (careerName.includes('Sistemas')) {
      return '⚙️';
    }
    if (careerName.includes('Civil')) {
      return '🏗️';
    }
    return '🎓';
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl shadow-2xl border border-cyan-300/50 mb-8 overflow-hidden">
      <div className="bg-white/95 backdrop-blur-sm m-1 rounded-3xl">
        <div className="p-8 border-b-4 border-cyan-200">
          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
            🎯 Seleccionar Carrera
          </h2>
          <p className="text-gray-700 mt-2 text-lg font-medium">Elige la carrera para visualizar el análisis comparativo</p>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careers.map((career) => (
              <button
                key={career}
                onClick={() => onCareerChange(career)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 text-left shadow-lg ${
                  selectedCareer === career
                    ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-cyan-50 text-emerald-800'
                    : 'border-gray-300 hover:border-blue-400 text-gray-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50'
                }`}
              >
                <div className="font-black text-xl mb-2">{getCareerIcon(career)} {career}</div>
                <div className="text-sm font-medium opacity-75 mt-1">🔍 Ver análisis detallado</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}