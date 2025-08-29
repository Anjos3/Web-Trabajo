'use client';

import { useState } from 'react';
import * as XLSX from 'xlsx';
import { MallaCurricular, AnalisisFODA, PlanAccion, PuntajeComparativo } from '@/types';

interface ExcelExporterProps {
  carrera: string;
  mallas: MallaCurricular[];
  foda: AnalisisFODA;
  plan: PlanAccion[];
  puntajes?: PuntajeComparativo[];
}

export default function ExcelExporter({ carrera, mallas, foda, plan, puntajes }: ExcelExporterProps) {
  const [isExporting, setIsExporting] = useState(false);

  const exportToExcel = async () => {
    setIsExporting(true);
    
    try {
      const wb = XLSX.utils.book_new();

      // Función para calcular el ancho óptimo de una celda basado en su contenido
      const calculateColumnWidth = (text: string, isHeader: boolean = false): number => {
        if (!text) return 10;
        
        const baseCharWidth = 1.2; // Ancho promedio por carácter en Excel
        const padding = 2; // Padding adicional
        
        // Para encabezados, usar un factor ligeramente mayor
        const factor = isHeader ? 1.3 : 1.0;
        
        // Calcular ancho basado en el texto más largo en la celda
        const lines = text.toString().split('\n');
        const maxLineLength = Math.max(...lines.map(line => line.length));
        
        let width = (maxLineLength * baseCharWidth * factor) + padding;
        
        // Límites mínimo y máximo
        width = Math.max(width, 8);   // Mínimo
        width = Math.min(width, 80);  // Máximo para evitar columnas excesivamente anchas
        
        return width;
      };

      // Función para aplicar formato profesional con ajuste automático
      const applyFormatting = (ws: any, hasHeaders: boolean = true, customWidths?: number[]) => {
        const range = XLSX.utils.decode_range(ws['!ref'] || 'A1');
        
        // Configurar ancho de columnas automáticamente
        ws['!cols'] = [];
        
        if (customWidths) {
          // Usar anchos personalizados si se proporcionan
          customWidths.forEach((width, index) => {
            ws['!cols'][index] = { wch: width };
          });
        } else {
          // Calcular anchos automáticamente basados en el contenido
          for (let C = range.s.c; C <= range.e.c; C++) {
            let maxWidth = 10; // Ancho mínimo
            
            // Revisar todas las celdas de la columna para encontrar el texto más largo
            for (let R = range.s.r; R <= range.e.r; R++) {
              const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
              if (ws[cellAddress] && ws[cellAddress].v) {
                const cellText = ws[cellAddress].v.toString();
                const isHeaderCell = hasHeaders && R === range.s.r;
                const cellWidth = calculateColumnWidth(cellText, isHeaderCell);
                maxWidth = Math.max(maxWidth, cellWidth);
              }
            }
            
            ws['!cols'][C] = { wch: maxWidth };
          }
        }
        
        // Aplicar estilos a todas las celdas
        for (let R = range.s.r; R <= range.e.r; R++) {
          for (let C = range.s.c; C <= range.e.c; C++) {
            const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
            if (!ws[cellAddress]) continue;
            
            // Estilo base para todas las celdas
            ws[cellAddress].s = {
              font: { 
                name: 'Arial', 
                sz: 11,
                color: { rgb: '000000' }
              },
              alignment: { 
                vertical: 'top',
                horizontal: 'left',
                wrapText: true 
              },
              border: {
                top: { style: 'thin', color: { rgb: '333333' } },
                bottom: { style: 'thin', color: { rgb: '333333' } },
                left: { style: 'thin', color: { rgb: '333333' } },
                right: { style: 'thin', color: { rgb: '333333' } }
              }
            };
            
            // Estilo especial para encabezados
            if (hasHeaders && R === 0) {
              ws[cellAddress].s.font = {
                name: 'Arial',
                sz: 12,
                bold: true,
                color: { rgb: 'FFFFFF' }
              };
              ws[cellAddress].s.fill = {
                fgColor: { rgb: '366092' }
              };
              ws[cellAddress].s.alignment.horizontal = 'center';
            }
          }
        }
        
        // Configurar impresión
        ws['!printHeader'] = 1;
        ws['!margins'] = { left: 0.7, right: 0.7, top: 0.75, bottom: 0.75, header: 0.3, footer: 0.3 };
      };

      // Hoja 1: Portada y Resumen Ejecutivo
      const portadaData = [
        ['ANÁLISIS CURRICULAR COMPARATIVO'],
        [''],
        ['Carrera:', carrera],
        ['Fecha del Análisis:', new Date().toLocaleDateString('es-ES')],
        ['Generado por:', 'Sistema de Análisis UNI'],
        [''],
        ['RESUMEN EJECUTIVO'],
        [''],
        ['Universidades Analizadas:', mallas.map(m => m.universidad).join(', ')],
        ['Total de Mallas:', mallas.length.toString()],
        ['Criterios de Evaluación:', 'Créditos, Cursos IA/Big Data, FODA, Plan de Acción']
      ];
      
      const wsPortada = XLSX.utils.aoa_to_sheet(portadaData);
      // Formato especial para la portada
      wsPortada['A1'].s = {
        font: { name: 'Arial', sz: 18, bold: true, color: { rgb: '366092' } },
        alignment: { horizontal: 'center' }
      };
      wsPortada['A7'].s = {
        font: { name: 'Arial', sz: 14, bold: true, color: { rgb: '366092' } },
        alignment: { horizontal: 'left' }
      };
      wsPortada['!cols'] = [{ wch: 30 }, { wch: 40 }];
      XLSX.utils.book_append_sheet(wb, wsPortada, '1. Resumen Ejecutivo');

      // Hoja 2: Comparativo de Mallas
      const mallasComparativo = [
        ['Universidad', 'Carrera', 'Créditos Obligatorios', 'Cursos IA/Big Data', 'Total Ciclos', 'Promedio Créditos/Ciclo']
      ];
      
      mallas.forEach(malla => {
        const promedioCreditos = Math.round((malla.creditosObligatorios / malla.ciclos.length) * 100) / 100;
        mallasComparativo.push([
          malla.universidad,
          malla.carrera,
          malla.creditosObligatorios,
          malla.cursosIA_BigData,
          malla.ciclos.length,
          promedioCreditos
        ]);
      });
      
      const wsMallasComp = XLSX.utils.aoa_to_sheet(mallasComparativo);
      applyFormatting(wsMallasComp);
      XLSX.utils.book_append_sheet(wb, wsMallasComp, '2. Comparativo Mallas');

      // Hoja 3: Detalle Curricular por Universidad
      mallas.forEach((malla, index) => {
        const curriculumData = [
          [`MALLA CURRICULAR - ${malla.universidad}`],
          [''],
          ['Carrera:', malla.carrera],
          ['Créditos Obligatorios:', malla.creditosObligatorios.toString()],
          ['Cursos IA/Big Data:', malla.cursosIA_BigData.toString()],
          [''],
          ['DETALLE POR CICLOS'],
          [''],
          ['Ciclo', 'Curso', 'Créditos', 'Total Ciclo']
        ];
        
        malla.ciclos.forEach(ciclo => {
          ciclo.cursos.forEach((curso, cursoIndex) => {
            curriculumData.push([
              cursoIndex === 0 ? ciclo.numero.toString() : '',
              curso.nombre,
              curso.creditos.toString(),
              cursoIndex === 0 ? ciclo.creditosTotales.toString() : ''
            ]);
          });
          curriculumData.push(['', '', '', '']); // Línea en blanco entre ciclos
        });
        
        const wsCurriculum = XLSX.utils.aoa_to_sheet(curriculumData);
        
        // Formato especial para títulos
        wsCurriculum['A1'].s = {
          font: { name: 'Arial', sz: 16, bold: true, color: { rgb: '366092' } },
          alignment: { horizontal: 'center' }
        };
        wsCurriculum['A7'].s = {
          font: { name: 'Arial', sz: 14, bold: true, color: { rgb: '366092' } }
        };
        
        // Formato para encabezados de tabla
        const headerRow = 8;
        ['A', 'B', 'C', 'D'].forEach(col => {
          const cell = `${col}${headerRow + 1}`;
          if (wsCurriculum[cell]) {
            wsCurriculum[cell].s = {
              font: { name: 'Arial', sz: 11, bold: true, color: { rgb: 'FFFFFF' } },
              fill: { fgColor: { rgb: '366092' } },
              alignment: { horizontal: 'center' },
              border: {
                top: { style: 'medium', color: { rgb: '000000' } },
                bottom: { style: 'medium', color: { rgb: '000000' } },
                left: { style: 'thin', color: { rgb: '000000' } },
                right: { style: 'thin', color: { rgb: '000000' } }
              }
            };
          }
        });
        
        wsCurriculum['!cols'] = [
          { wch: 8 },   // Ciclo
          { wch: 45 },  // Curso
          { wch: 10 },  // Créditos
          { wch: 12 }   // Total Ciclo
        ];
        
        XLSX.utils.book_append_sheet(wb, wsCurriculum, `3.${index + 1} ${malla.universidad}`);
      });

      // Hoja 4: Análisis FODA Estructurado
      const fodaEstructurado = [
        ['ANÁLISIS FODA - MATRIZ ESTRATÉGICA'],
        [''],
        ['FORTALEZAS (F)'],
        ['Código', 'Descripción']
      ];
      
      foda.fortalezas.forEach((item, index) => {
        fodaEstructurado.push([`F${index + 1}`, item]);
      });
      
      fodaEstructurado.push(['']);
      fodaEstructurado.push(['OPORTUNIDADES (O)']);
      fodaEstructurado.push(['Código', 'Descripción']);
      
      foda.oportunidades.forEach((item, index) => {
        fodaEstructurado.push([`O${index + 1}`, item]);
      });
      
      fodaEstructurado.push(['']);
      fodaEstructurado.push(['DEBILIDADES (D)']);
      fodaEstructurado.push(['Código', 'Descripción']);
      
      foda.debilidades.forEach((item, index) => {
        fodaEstructurado.push([`D${index + 1}`, item]);
      });
      
      fodaEstructurado.push(['']);
      fodaEstructurado.push(['AMENAZAS (A)']);
      fodaEstructurado.push(['Código', 'Descripción']);
      
      foda.amenazas.forEach((item, index) => {
        fodaEstructurado.push([`A${index + 1}`, item]);
      });
      
      const wsFodaEst = XLSX.utils.aoa_to_sheet(fodaEstructurado);
      
      // Formato especial para FODA
      wsFodaEst['A1'].s = {
        font: { name: 'Arial', sz: 16, bold: true, color: { rgb: '366092' } },
        alignment: { horizontal: 'center' }
      };
      
      wsFodaEst['!cols'] = [{ wch: 8 }, { wch: 80 }];
      XLSX.utils.book_append_sheet(wb, wsFodaEst, '4. Análisis FODA');

      // Hoja 5: Plan de Acción Estratégico
      const planEstrategico = [
        ['PLAN DE ACCIÓN ESTRATÉGICO'],
        [''],
        ['N°', 'Título de la Acción', 'Descripción Detallada', 'Prioridad', 'Plazo de Ejecución']
      ];
      
      plan.forEach((accion, index) => {
        planEstrategico.push([
          (index + 1).toString(),
          accion.titulo,
          accion.descripcion,
          accion.prioridad,
          accion.plazo
        ]);
      });
      
      const wsPlanEst = XLSX.utils.aoa_to_sheet(planEstrategico);
      
      // Formato para plan estratégico
      wsPlanEst['A1'].s = {
        font: { name: 'Arial', sz: 16, bold: true, color: { rgb: '366092' } },
        alignment: { horizontal: 'center' }
      };
      
      // Encabezados
      ['A', 'B', 'C', 'D', 'E'].forEach(col => {
        const cell = `${col}3`;
        if (wsPlanEst[cell]) {
          wsPlanEst[cell].s = {
            font: { name: 'Arial', sz: 11, bold: true, color: { rgb: 'FFFFFF' } },
            fill: { fgColor: { rgb: '366092' } },
            alignment: { horizontal: 'center', wrapText: true },
            border: {
              top: { style: 'medium' },
              bottom: { style: 'medium' },
              left: { style: 'thin' },
              right: { style: 'thin' }
            }
          };
        }
      });
      
      wsPlanEst['!cols'] = [
        { wch: 5 },   // N°
        { wch: 35 },  // Título
        { wch: 60 },  // Descripción
        { wch: 12 },  // Prioridad
        { wch: 18 }   // Plazo
      ];
      
      XLSX.utils.book_append_sheet(wb, wsPlanEst, '5. Plan de Acción');

      // Hoja 6: Puntajes Comparativos (si existen)
      if (puntajes && puntajes.length > 0) {
        const puntajesEstructurado = [
          ['EVALUACIÓN COMPARATIVA POR CRITERIOS'],
          [''],
          ['Criterio de Evaluación', ...Object.keys(puntajes[0].puntajes), 'Justificación Técnica']
        ];
        
        puntajes.forEach(puntaje => {
          const row = [
            puntaje.categoria,
            ...Object.values(puntaje.puntajes),
            puntaje.justificacion
          ];
          puntajesEstructurado.push(row);
        });
        
        const wsPuntajesEst = XLSX.utils.aoa_to_sheet(puntajesEstructurado);
        
        wsPuntajesEst['A1'].s = {
          font: { name: 'Arial', sz: 16, bold: true, color: { rgb: '366092' } },
          alignment: { horizontal: 'center' }
        };
        
        applyFormatting(wsPuntajesEst);
        wsPuntajesEst['!cols'] = [
          { wch: 30 }, // Criterio
          { wch: 10 }, // UNI
          { wch: 10 }, // PUCP
          { wch: 10 }, // UTEC
          { wch: 60 }  // Justificación
        ];
        
        XLSX.utils.book_append_sheet(wb, wsPuntajesEst, '6. Evaluación Comparativa');
      }

      // Generar y descargar el archivo
      const fecha = new Date().toISOString().split('T')[0];
      const fileName = `Analisis_Curricular_${carrera.replace(/\s+/g, '_')}_${fecha}.xlsx`;
      XLSX.writeFile(wb, fileName);
      
    } catch (error) {
      console.error('Error al exportar a Excel:', error);
      alert('Error al generar el archivo Excel. Por favor, intente nuevamente.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={exportToExcel}
      disabled={isExporting}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
    >
      {isExporting ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          Generando Excel...
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          📊 Descargar Excel
        </>
      )}
    </button>
  );
}