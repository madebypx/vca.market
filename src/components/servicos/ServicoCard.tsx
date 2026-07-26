'use client';

import { ServicoItem } from '@/data/mockServicos';

interface ServicoCardProps {
  servico: ServicoItem;
}

export function ServicoCard({ servico }: ServicoCardProps) {
  // WhatsApp Pre-Formatted Lead Dispatcher
  const whatsappMessage = encodeURIComponent(
    `Olá ${servico.providerName}! Vi o seu perfil de serviço em "${servico.specialty}" (Ref: #${servico.id}) no Conquista Market (vca.market) e gostaria de solicitar um orçamento.`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Portfolio Cover Image Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={servico.portfolioImage}
            alt={servico.providerName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Rating Badge Overlay (Top Left) */}
          <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-amber-400 text-xs font-extrabold px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 shadow-md">
            <span>★ {servico.rating.toFixed(1)}</span>
            <span className="text-slate-300 font-normal text-[10px]">({servico.reviewCount})</span>
          </div>

          {/* Home Service Badge (Top Right) */}
          {servico.homeServiceAvailable && (
            <div className="absolute top-3 right-3 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1">
              🏠 Domicílio
            </div>
          )}

          {/* Neighborhood Tag (Bottom Left) */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
            📍 {servico.neighborhood}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4">
          {/* Spec Pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3 py-1.5 rounded-lg mb-3">
            <span className="text-[var(--color-trust-blue)] font-bold">{servico.categoryTag}</span>
            <span>• {servico.estimatedPrice}</span>
          </div>

          {/* Provider Name & Specialty */}
          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1 group-hover:text-[var(--color-trust-blue)] transition-colors">
            {servico.providerName}
          </h3>

          <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-3">
            {servico.specialty}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-3">
            {servico.description}
          </p>
        </div>
      </div>

      {/* Verification Footer & WhatsApp CTA */}
      <div className="p-4 pt-3 border-t border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400 text-[11px]">
            Base em {servico.neighborhood}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              servico.verificationTier === 'gold' || servico.verificationTier === 'platinum'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            {servico.verificationLabel}
          </span>
        </div>

        {/* Primary CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
          </svg>
          <span>Solicitar Orçamento Grátis</span>
        </a>
      </div>
    </div>
  );
}
