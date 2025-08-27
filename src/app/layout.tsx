import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benchmarking Mallas Curriculares UNI',
  description: 'Análisis comparativo de mallas curriculares para el Vicerrectorado UNI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text">
              🏛️ Benchmarking UNI
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-2xl text-white font-semibold">
                🚀 Análisis Estratégico de Mallas Curriculares
              </p>
              <p className="text-lg text-blue-200 mt-2">
                Impulsando la Excelencia Académica del Futuro
              </p>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}