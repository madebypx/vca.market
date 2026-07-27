'use client';

import React, { useState } from 'react';
import { VeiculoItem } from '@/data/mockVeiculos';
import { FipeComparisonModal } from './FipeComparisonModal';

interface VeiculoFipeMeterProps {
  veiculo: VeiculoItem;
}

export const VeiculoFipeMeter: React.FC<VeiculoFipeMeterProps> = ({ veiculo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const diff = veiculo.fipeReferencePrice - veiculo.price;
  const isBelowFipe = diff > 0;
  const diffFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Math.abs(diff));

  return (
    <>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center text-xl font-extrabold shadow-sm shrink-0">
            📊
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                Tabela FIPE de Referência (Bahia)
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300">
                Oficial
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white mt-0.5">
              {isBelowFipe ? (
                <span className="text-emerald-600 dark:text-emerald-400">
                  🔥 Oportunidade: {diffFormatted} abaixo da Tabela FIPE!
                </span>
              ) : (
                <span>Preço alinhado à média praticada no mercado de Conquista</span>
              )}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Valor FIPE: R$ {veiculo.fipeReferencePrice.toLocaleString('pt-BR')} • Anunciado: R${' '}
              {veiculo.price.toLocaleString('pt-BR')}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all whitespace-nowrap self-start sm:self-center"
        >
          Ver Comparativo Detalhado FIPE →
        </button>
      </div>

      {isModalOpen && (
        <FipeComparisonModal
          vehicleTitle={veiculo.title}
          price={veiculo.price}
          fipePrice={veiculo.fipeReferencePrice}
          onClose={() => setIsModalOpen(false)}
        />
      )}

    </>
  );
};
