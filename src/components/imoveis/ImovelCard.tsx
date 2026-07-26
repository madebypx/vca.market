'use client';

import { ImovelItem } from '@/data/mockImoveis';

interface ImovelCardProps {
  imovel: ImovelItem;
  isHovered?: boolean;
  onHover?: (id: string | null) => void;
}

export function ImovelCard({ imovel, isHovered, onHover }: ImovelCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(imovel.price);

  // WhatsApp Pre-Formatted Lead Dispatcher
  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o seu imóvel "${imovel.title}" (Ref: #${imovel.id}) no Conquista Market (vca.market) e gostaria de agendar uma visita.`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div
      onMouseEnter={() => onHover?.(imovel.id)}
      onMouseLeave={() => onHover?.(null)}
      className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border transition-all duration-200 flex flex-col justify-between ${
        isHovered
          ? 'border-[var(--color-trust-blue)] shadow-lg -translate-y-1'
          : 'border-slate-200 dark:border-slate-700/60 shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        {/* Image Header Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imovel.imageUrl}
            alt={imovel.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Transaction Tag (Venda/Aluguel) */}
          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-white/10">
            {imovel.transactionType === 'venda' ? 'Venda' : 'Aluguel'}
          </div>

          {/* Neighborhood Pill */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
            📍 {imovel.neighborhood}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4">
          {/* Technical Spec Pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3 py-1.5 rounded-lg mb-3">
            <span>📐 {imovel.usableAreaM2} m²</span>
            {imovel.bedrooms > 0 && <span>• 🛏️ {imovel.bedrooms} qts</span>}
            {imovel.bathrooms > 0 && <span>• 🚿 {imovel.bathrooms} ban</span>}
            {imovel.parkingSpots > 0 && <span>• 🚗 {imovel.parkingSpots} vag</span>}
          </div>

          {/* Title */}
          <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors">
            {imovel.title}
          </h3>

          {/* Price & Condo Fee */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg font-extrabold text-[var(--color-primary)] dark:text-emerald-400">
              {formattedPrice}
            </span>
            {imovel.condoFee && (
              <span className="text-xs text-slate-500 dark:text-slate-400">
                + R$ {imovel.condoFee}/mês cond.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Seller & CRECI Footer */}
      <div className="p-4 pt-3 border-t border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-slate-600 dark:text-slate-300 truncate max-w-[150px]">
            {imovel.agencyName}
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            {imovel.creciNumber}
          </span>
        </div>

        {/* Primary CTA (WhatsApp Lead Dispatcher) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
          </svg>
          <span>Agendar Visita no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
