'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { VeiculoItem } from '@/data/mockVeiculos';
import { ReportListingModal } from '@/components/common/ReportListingModal';

interface VeiculoContactSidebarProps {
  veiculo: VeiculoItem;
}

export const VeiculoContactSidebar: React.FC<VeiculoContactSidebarProps> = ({ veiculo }) => {
  const [isReportOpen, setIsReportOpen] = useState(false);
  const formattedPrice = `R$ ${veiculo.price.toLocaleString('pt-BR')}`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de agendar um test-drive para o veículo "${veiculo.title}" (Ref: #${veiculo.id}) no valor de ${formattedPrice} anunciado no Conquista Market (vca.market). Estão disponíveis em Vitória da Conquista?`
  );
  const whatsappUrl = `https://wa.me/5577999887766?text=${whatsappMessage}`;

  return (
    <>
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-6 sticky top-24">
        {/* Price & Highlight Header */}
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Valor de Venda
          </span>
          <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {formattedPrice}
          </div>
          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
            {veiculo.mileageKm.toLocaleString('pt-BR')} km • {veiculo.yearModel}
          </div>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        {/* Seller Info */}
        <div className="space-y-3 text-xs">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
            Vendedor & Localização
          </span>
          <Link
            href="/anunciante/usr-002"
            className="flex items-start justify-between gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {veiculo.sellerName}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                📍 Bairro {veiculo.neighborhood} • Conquista
              </p>
              <span className="inline-block text-[10px] font-bold text-blue-600 dark:text-blue-400 mt-1">
                Ver vitrine da loja →
              </span>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
              {veiculo.sellerType === 'loja' ? 'Loja Auditada' : 'CPF Auditado'}
            </span>
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
          >
            <span>💬 Agendar Test-Drive no WhatsApp</span>
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
          listingTitle={veiculo.title}
          onClose={() => setIsReportOpen(false)}
        />
      )}
    </>
  );
};
