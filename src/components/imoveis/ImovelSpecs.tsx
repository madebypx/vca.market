'use client';

import { ImovelItem } from '@/data/mockImoveis';

interface ImovelSpecsProps {
  imovel: ImovelItem;
}

export function ImovelSpecs({ imovel }: ImovelSpecsProps) {
  const pricePerM2 = Math.round(imovel.price / imovel.usableAreaM2);

  const specCards = [
    {
      label: 'Área Útil',
      value: `${imovel.usableAreaM2} m²`,
      subtext: `~R$ ${pricePerM2.toLocaleString('pt-BR')}/m²`,
      icon: '📐',
    },
    {
      label: 'Quartos',
      value: imovel.bedrooms > 0 ? `${imovel.bedrooms} Quartos` : 'N/A',
      subtext: imovel.suites ? `${imovel.suites} suíte(s)` : 'Sem suíte',
      icon: '🛏️',
    },
    {
      label: 'Banheiros',
      value: imovel.bathrooms > 0 ? `${imovel.bathrooms} Banheiros` : 'N/A',
      subtext: 'Sociais & Privativos',
      icon: '🚿',
    },
    {
      label: 'Vagas de Garagem',
      value: imovel.parkingSpots > 0 ? `${imovel.parkingSpots} Vagas` : 'Sem Vaga',
      subtext: 'Coberta(s)',
      icon: '🚗',
    },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Spec Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {specCards.map((spec, i) => (
          <div
            key={i}
            className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col justify-between transition-all hover:border-[var(--color-trust-blue)]"
          >
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xl">{spec.icon}</span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 dark:text-slate-500">
                {spec.label}
              </span>
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                {spec.value}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                {spec.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Condominium & IPTU Pills if present */}
      {(imovel.condoFee || imovel.iptuAnnual) && (
        <div className="flex flex-wrap items-center gap-3 bg-slate-100 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/50 text-xs">
          {imovel.condoFee && (
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
              <span className="text-slate-400">🏢 Condomínio:</span>
              <span className="font-extrabold text-slate-900 dark:text-white">
                R$ {imovel.condoFee.toLocaleString('pt-BR')} / mês
              </span>
            </div>
          )}
          {imovel.condoFee && imovel.iptuAnnual && (
            <span className="text-slate-300 dark:text-slate-600">•</span>
          )}
          {imovel.iptuAnnual && (
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-semibold">
              <span className="text-slate-400">📄 IPTU Estimado:</span>
              <span className="font-extrabold text-slate-900 dark:text-white">
                R$ {imovel.iptuAnnual.toLocaleString('pt-BR')} / ano
              </span>
            </div>
          )}
        </div>
      )}

      {/* Features List */}
      {imovel.features && imovel.features.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
            Características do Imóvel & Condomínio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {imovel.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3.5 py-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-slate-200"
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
}
