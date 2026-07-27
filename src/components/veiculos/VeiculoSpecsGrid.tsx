'use client';

import React from 'react';
import { VeiculoItem } from '@/data/mockVeiculos';

interface VeiculoSpecsGridProps {
  veiculo: VeiculoItem;
}

export const VeiculoSpecsGrid: React.FC<VeiculoSpecsGridProps> = ({ veiculo }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>⚙️</span> Ficha Técnica de Desempenho & Consumo
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Atributos mecânicos oficiais e autonomia média.
        </p>
      </div>

      {/* Engine & Performance Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="block text-[10px] font-semibold text-slate-400 uppercase">Motorização</span>
          <strong className="text-sm font-bold text-slate-900 dark:text-white">
            {veiculo.engineSpec || '2.0 16V Flex'}
          </strong>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="block text-[10px] font-semibold text-slate-400 uppercase">Potência</span>
          <strong className="text-sm font-bold text-slate-900 dark:text-white">
            {veiculo.horsepower || '177 cv'}
          </strong>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="block text-[10px] font-semibold text-slate-400 uppercase">Consumo Urbano</span>
          <strong className="text-sm font-bold text-slate-900 dark:text-white">
            {veiculo.urbanConsumption || '11,6 km/l'}
          </strong>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
          <span className="block text-[10px] font-semibold text-slate-400 uppercase">Consumo Rodoviário</span>
          <strong className="text-sm font-bold text-slate-900 dark:text-white">
            {veiculo.highwayConsumption || '13,9 km/l'}
          </strong>
        </div>
      </div>

      {/* Features & Equipment Chips */}
      {veiculo.featuresList && veiculo.featuresList.length > 0 && (
        <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">
            Equipamentos & Itens de Série
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {veiculo.featuresList.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-slate-800 dark:text-slate-200 font-medium"
              >
                <span className="text-emerald-500 font-bold">✓</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
