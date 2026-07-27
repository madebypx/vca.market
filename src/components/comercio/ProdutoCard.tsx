'use client';

import Link from 'next/link';
import { ProdutoItem } from '@/data/mockComercio';

interface ProdutoCardProps {
  produto: ProdutoItem;
}

export function ProdutoCard({ produto }: ProdutoCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(produto.price);

  const formattedOriginalPrice = produto.originalPrice
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
      }).format(produto.originalPrice)
    : null;

  // WhatsApp Pre-Formatted Lead Dispatcher
  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto "${produto.title}" (Ref: #${produto.id}) anunciado no Conquista Market (vca.market). Está disponível para entrega/retirada?`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Product Image Container */}
        <Link href={`/comercio/${produto.id}`} className="relative block aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={produto.imageUrl}
            alt={produto.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Condition Tag (Top Left) */}
          <div className="absolute top-3 left-3">
            <span
              className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md backdrop-blur-md ${
                produto.condition === 'novo'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-900/80 text-slate-200 border border-white/10'
              }`}
            >
              {produto.condition === 'novo' ? '✨ Novo' : 'Usado'}
            </span>
          </div>

          {/* Pickup Tag (Bottom Left) */}
          <div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
            🏬 Retirada em {produto.pickupLocation}
          </div>
        </Link>

        {/* Content Body */}
        <div className="p-4">
          {/* Spec Pill */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1 rounded-md mb-2">
            <span>{produto.hasWarranty ? '🛡️ Com Garantia' : 'Sem Garantia'}</span>
            {produto.hasDeliveryMotoboy && <span>• 🛵 Motoboy VCA</span>}
          </div>

          {/* Title */}
          <Link href={`/comercio/${produto.id}`}>
            <h3 className="font-bold text-slate-900 dark:text-white text-sm leading-snug line-clamp-2 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors">
              {produto.title}
            </h3>
          </Link>


          {/* Price Tag */}
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-extrabold text-[var(--color-primary)] dark:text-emerald-400">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formattedOriginalPrice}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Seller & WhatsApp Sales CTA */}
      <div className="p-4 pt-3 border-t border-slate-100 dark:border-slate-700/40 bg-slate-50/50 dark:bg-slate-800/50 flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-slate-600 dark:text-slate-300 truncate max-w-[140px]">
            {produto.storeName}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              produto.verificationTier === 'gold' || produto.verificationTier === 'platinum'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            {produto.verificationLabel}
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
          <span>Comprar no WhatsApp da Loja</span>
        </a>
      </div>
    </div>
  );
}
