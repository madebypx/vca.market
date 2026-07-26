'use client';

import React from 'react';

export type TrustBadgeType = 'gold_seller' | 'verified_resident' | 'pro_creci' | 'fast_response';

interface TrustBadgeProps {
  type: TrustBadgeType;
  customLabel?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ type, customLabel }) => {
  const badgeConfig: Record<TrustBadgeType, { icon: string; label: string; style: string }> = {
    gold_seller: {
      icon: '★',
      label: customLabel || 'Vendedor Ouro VCA',
      style: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    },
    verified_resident: {
      icon: '✓',
      label: customLabel || 'Morador Verificado',
      style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    },
    pro_creci: {
      icon: '🏢',
      label: customLabel || 'Conquista Pro CRECI',
      style: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    },
    fast_response: {
      icon: '⚡',
      label: customLabel || 'Resposta em < 15 min',
      style: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
    },
  };

  const config = badgeConfig[type];

  return (
    <span
      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${config.style}`}
    >
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </span>
  );
};
