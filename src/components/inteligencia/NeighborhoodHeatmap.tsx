'use client';

import React from 'react';

export const NeighborhoodHeatmap: React.FC = () => {
  const neighborhoodData = [
    { name: 'Candeias', priceM2: 'R$ 5.200 / m²', demandIndex: 'Alta 🔥', topCategory: 'Imóveis & Gastronomia' },
    { name: 'Recreio', priceM2: 'R$ 4.850 / m²', demandIndex: 'Alta 🔥', topCategory: 'Imóveis & Serviços' },
    { name: 'Alto Maron', priceM2: 'R$ 3.400 / m²', demandIndex: 'Média 📈', topCategory: 'Comércio & Serviços' },
    { name: 'Bairro Brasil', priceM2: 'R$ 3.100 / m²', demandIndex: 'Alta 🔥', topCategory: 'Comércio & Veículos' },
    { name: 'Centro', priceM2: 'R$ 4.100 / m²', demandIndex: 'Muito Alta ⚡', topCategory: 'Vagas & Comércio' },
    { name: 'Boa Vista', priceM2: 'R$ 3.800 / m²', demandIndex: 'Em Crescimento 🚀', topCategory: 'Residencial' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {neighborhoodData.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Bairro {item.name}
              </h3>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                {item.demandIndex}
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="block text-slate-400 font-semibold">Valor Médio do m²:</span>
                <strong className="text-base text-slate-900 dark:text-white font-extrabold">
                  {item.priceM2}
                </strong>
              </div>

              <div>
                <span className="block text-slate-400 font-semibold">Principal Foco do Bairro:</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.topCategory}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
