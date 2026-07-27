'use client';

import Link from 'next/link';
import { VeiculoItem } from '@/data/mockVeiculos';

interface VeiculoCardProps {
  veiculo: VeiculoItem;
}

export function VeiculoCard({ veiculo }: VeiculoCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(veiculo.price);

  const formattedFipe = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(veiculo.fipeReferencePrice);

  const fipeDiff = veiculo.fipeReferencePrice - veiculo.price;
  const isBelowFipe = fipeDiff > 0;
  const formattedDiff = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(Math.abs(fipeDiff));

  // WhatsApp Pre-Formatted Lead Dispatcher
  const whatsappMessage = encodeURIComponent(
    `Olá! Vi o veículo "${veiculo.title}" (Ano ${veiculo.yearModel} - Ref: #${veiculo.id}) no Conquista Market (vca.market) e gostaria de informações/simulação.`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Image Container */}
        <Link href={`/veiculos/${veiculo.id}`} className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={veiculo.imageUrl}
            alt={veiculo.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* FIPE Comparison Badge Overlay (Top Left) */}
          <div className="absolute top-3 left-3">
            {isBelowFipe ? (
              <span className="bg-emerald-500 text-slate-950 font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                🔥 {formattedDiff} abaixo da FIPE
              </span>
            ) : (
              <span className="bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-white/10">
                FIPE: {formattedFipe}
              </span>
            )}
          </div>

          {/* Neighborhood Pill (Bottom Left) */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
            📍 {veiculo.neighborhood}
          </div>

          {/* Cautelar Approved Badge (Top Right) */}
          {veiculo.hasCautelarApproved && (
            <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-md flex items-center gap-1">
              🛡️ Cautelar OK
            </div>
          )}
        </Link>

        {/* Content Body */}
        <div className="p-4">
          {/* Technical Spec Pill */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3 py-1.5 rounded-lg mb-3">
            <span>📅 {veiculo.yearModel}</span>
            <span>• 🛣️ {veiculo.mileageKm.toLocaleString('pt-BR')} km</span>
            <span className="capitalize">• 🕹️ {veiculo.transmission}</span>
            <span className="capitalize">• ⛽ {veiculo.fuel}</span>
          </div>

          {/* Title */}
          <Link href={`/veiculos/${veiculo.id}`}>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors">
              {veiculo.title}
            </h3>
          </Link>

          {/* Price */}
          <div className="text-xl font-extrabold text-[var(--color-primary)] dark:text-emerald-400 mb-3">
            {formattedPrice}
          </div>
        </div>
      </div>

      {/* Seller & WhatsApp CTA Footer */}
      <div className="p-4 pt-3 border-t border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-slate-600 dark:text-slate-300 truncate max-w-[150px]">
            {veiculo.sellerName}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              veiculo.sellerType === 'loja'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            {veiculo.sellerType === 'loja' ? '✓ Loja de Autos' : 'Particular'}
          </span>
        </div>

        {/* Primary CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
          </svg>
          <span>Falar com Vendedor / Simular</span>
        </a>
      </div>
    </div>
  );
}

