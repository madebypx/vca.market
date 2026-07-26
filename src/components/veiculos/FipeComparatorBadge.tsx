'use client';

import React, { useState } from 'react';
import { FipeComparisonModal } from './FipeComparisonModal';

interface FipeComparatorBadgeProps {
  price: number;
  fipePrice: number;
  vehicleTitle: string;
}

export const FipeComparatorBadge: React.FC<FipeComparatorBadgeProps> = ({
  price,
  fipePrice,
  vehicleTitle,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const discount = fipePrice - price;
  if (discount <= 0) return null;

  const percentage = Math.round((discount / fipePrice) * 100);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold hover:bg-amber-500/20 transition-colors"
        title="Clique para ver a comparação de Tabela FIPE"
      >
        <span>🔥</span>
        <span>{formatCurrency(discount)} abaixo da FIPE (-{percentage}%)</span>
      </button>

      {isModalOpen && (
        <FipeComparisonModal
          price={price}
          fipePrice={fipePrice}
          vehicleTitle={vehicleTitle}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
