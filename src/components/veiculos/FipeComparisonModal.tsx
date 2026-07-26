'use client';

import React from 'react';

interface FipeComparisonModalProps {
  price: number;
  fipePrice: number;
  vehicleTitle: string;
  onClose: () => void;
}

export const FipeComparisonModal: React.FC<FipeComparisonModalProps> = ({
  price,
  fipePrice,
  vehicleTitle,
  onClose,
}) => {
  const discount = fipePrice - price;
  const percentage = Math.round((discount / fipePrice) * 100);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-500">
              Análise de Oportunidade VCA
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Comparativo Tabela FIPE
            </h3>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Veículo: <strong className="text-slate-800 dark:text-slate-200">{vehicleTitle}</strong>
          </p>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="block text-[11px] text-slate-500 dark:text-slate-400">Preço Anunciado</span>
              <strong className="text-base text-slate-900 dark:text-white font-extrabold">
                {formatCurrency(price)}
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <span className="block text-[11px] text-slate-500 dark:text-slate-400">Ref. Tabela FIPE</span>
              <strong className="text-base text-slate-900 dark:text-white font-extrabold">
                {formatCurrency(fipePrice)}
              </strong>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300 space-y-1">
            <div className="flex items-center justify-between font-bold text-sm">
              <span>Economia Estimada:</span>
              <span className="text-base text-amber-600 dark:text-amber-400">
                {formatCurrency(discount)} ({percentage}%)
              </span>
            </div>
            <p className="text-[11px] text-amber-700 dark:text-amber-400">
              Este veículo está anunciado abaixo do valor médio de referência do mercado local de Vitória da Conquista.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold rounded-lg text-xs"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};
