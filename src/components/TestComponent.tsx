'use client';

import { useEffect, useState } from 'react';

export default function TestComponent() {
  const [tailwindWorking, setTailwindWorking] = useState<boolean | null>(null);

  useEffect(() => {
    // Verificar si Tailwind está funcionando después de la hidratación
    const body = document.body;
    const computedStyle = getComputedStyle(body);
    setTailwindWorking(computedStyle.background.includes('gradient'));
  }, []);

  return (
    <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
      <h2 className="text-2xl font-bold">⚡ Estado de Tailwind</h2>
      <p className="mb-4">
        {tailwindWorking === null 
          ? '🔄 Verificando Tailwind CSS...' 
          : tailwindWorking 
            ? '✅ Tailwind CSS está funcionando correctamente!' 
            : '❌ Tailwind CSS NO está funcionando'
        }
      </p>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded">
        <p>🎨 Este gradiente debería ser azul → púrpura</p>
      </div>
    </div>
  );
}