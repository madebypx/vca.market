import React from 'react';
import { NeighborhoodHeatmap } from '@/components/inteligencia/NeighborhoodHeatmap';

export default function InteligenciaVcaPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            Inteligência Regional de Mercado — Vitória da Conquista
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dados de Valorização & Demanda por Bairro em VCA
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            Acompanhe em tempo real o preço médio do m² imobiliário, variação comercial e bairros de maior atratividade em Vitória da Conquista.
          </p>
        </div>

        {/* Heatmap Grid */}
        <NeighborhoodHeatmap />
      </div>
    </div>
  );
}
