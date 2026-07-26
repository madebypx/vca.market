'use client';

import React from 'react';
import { DemandaItem } from '@/data/mockDemandas';

interface DemandaCardProps {
  demanda: DemandaItem;
}

export const DemandaCard: React.FC<DemandaCardProps> = ({ demanda }) => {
  const formatCurrency = (val?: number) =>
    val ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val) : '';

  const handleRespondWhatsapp = () => {
    const cleanPhone = demanda.requesterPhone.replace(/\D/g, '');
    const phone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

    const text = `Olá ${demanda.requesterName}! Vi o seu pedido no Mural de Demandas ("${demanda.title}") do Conquista Market e posso te atender!`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const categoryIcons: Record<string, string> = {
    imoveis: '🏡 Imóveis',
    veiculos: '🚗 Veículos',
    servicos: '🛠️ Serviços',
    comercio: '🛍️ Comércio',
    vagas: '💼 Vagas',
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-400 dark:hover:border-slate-700 transition-all">
      <div className="space-y-2">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            {categoryIcons[demanda.category] || demanda.category}
          </span>

          <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
            📍 {demanda.neighborhood}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
          {demanda.title}
        </h3>

        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
          {demanda.description}
        </p>
      </div>

      {/* Budget & Action */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div>
          <span className="block text-[10px] font-semibold text-slate-400 uppercase">Orçamento Limite</span>
          <strong className="text-sm font-extrabold text-slate-900 dark:text-white">
            {demanda.budgetText || formatCurrency(demanda.maxBudget)}
          </strong>
        </div>

        <button
          type="button"
          onClick={handleRespondWhatsapp}
          className="py-2 px-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
        >
          <span>💬 Atender no WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
