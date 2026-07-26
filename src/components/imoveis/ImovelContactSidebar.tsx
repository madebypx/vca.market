'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ImovelItem } from '@/data/mockImoveis';
import { ReportListingModal } from '@/components/common/ReportListingModal';

interface ImovelContactSidebarProps {
  imovel: ImovelItem;
}

export function ImovelContactSidebar({ imovel }: ImovelContactSidebarProps) {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const formattedPrice = `R$ ${imovel.price.toLocaleString('pt-BR')}`;
  const isRent = imovel.transactionType === 'aluguel';

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse em agendar uma visita para o imóvel "${imovel.title}" (Ref: #${imovel.id}) no valor de ${formattedPrice} anunciado no Conquista Market (vca.market). Podem me ajudar?`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-lg flex flex-col gap-6 sticky top-24">
        {/* Price Header */}
        <div>
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">
            Valor de {isRent ? 'Aluguel / Mês' : 'Venda'}
          </div>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {formattedPrice}
          </div>
          {imovel.condoFee && (
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
              + R$ {imovel.condoFee} condomínio
            </div>
          )}
        </div>

        <hr className="border-slate-200 dark:border-slate-700/60" />

        {/* Agency & CRECI Info */}
        <div className="flex flex-col gap-3">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
            Anunciante & Imobiliária
          </div>
          <Link
            href="/anunciante/usr-003"
            className="flex items-start justify-between gap-3 group/seller p-2.5 -mx-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover/seller:text-[var(--color-trust-blue)] transition-colors">
                {imovel.agencyName}
              </h4>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1 font-semibold">
                <span className="text-amber-500">✓</span> {imovel.creciNumber}
              </div>
              <div className="text-[11px] font-bold text-[var(--color-trust-blue)] mt-1">
                Ver perfil completo do anunciante →
              </div>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              Selo VCA Pro
            </span>
          </Link>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-extrabold py-3.5 px-4 rounded-2xl text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg scale-100 hover:scale-[1.02] active:scale-95"
          >
            <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
            </svg>
            <span>Agendar Visita no WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setIsReportOpen(true)}
            className="w-full text-center text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline pt-1"
          >
            🚩 Denunciar Anúncio Suspeito
          </button>
        </div>
      </div>

      {isReportOpen && (
        <ReportListingModal
          listingTitle={imovel.title}
          onClose={() => setIsReportOpen(false)}
        />
      )}
    </>
  );
}

