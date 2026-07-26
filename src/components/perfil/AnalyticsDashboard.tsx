'use client';

import React from 'react';

export const AnalyticsDashboard: React.FC = () => {
  const metrics = [
    { label: 'Leads no WhatsApp', value: '48', change: '+18% este mês', icon: '💬', color: 'text-emerald-500' },
    { label: 'Visualizações de Anúncios', value: '1.240', change: '+24% este mês', icon: '👁️', color: 'text-blue-500' },
    { label: 'Taxa de Conversão em Lead', value: '3.87%', change: 'Excelente', icon: '📈', color: 'text-amber-500' },
  ];

  const neighborhoodDistribution = [
    { neighborhood: 'Candeias', leads: 18, percentage: 38 },
    { neighborhood: 'Recreio', leads: 12, percentage: 25 },
    { neighborhood: 'Centro', leads: 9, percentage: 19 },
    { neighborhood: 'Bairro Brasil', leads: 6, percentage: 12 },
    { neighborhood: 'Alto Maron', leads: 3, percentage: 6 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Painel Analítico Conquista Pro
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Relatório de desempenho e inteligência geográfica de leads recebidos em Vitória da Conquista.
          </p>
        </div>

        <span className="self-start px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full">
          Selo Parceiro Oficial Pro
        </span>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{m.label}</span>
              <span className="text-xl">{m.icon}</span>
            </div>

            <div className="mt-3">
              <div className={`text-3xl font-extrabold ${m.color}`}>{m.value}</div>
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-1 block">
                {m.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Origem dos Leads por Bairro */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
          📍 Origem Geográfica dos Leads por Bairro de Vitória da Conquista
        </h3>

        <div className="space-y-3">
          {neighborhoodDistribution.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-slate-700 dark:text-slate-300">{item.neighborhood}</span>
                <span className="text-slate-500 dark:text-slate-400">
                  {item.leads} leads ({item.percentage}%)
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
