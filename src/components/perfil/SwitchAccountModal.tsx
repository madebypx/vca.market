'use client';

import React from 'react';
import Link from 'next/link';

interface SwitchAccountModalProps {
  onClose: () => void;
}

const SAVED_ACCOUNTS = [
  {
    id: 'acc-1',
    name: 'Diego Pinto',
    initials: 'DP',
    subtitle: 'Perfil Particular • Bairro Candeias',
    tier: 'pro' as const,
    isActive: true,
  },
  {
    id: 'acc-2',
    name: 'Imóveis Conquista Sul',
    initials: 'IC',
    subtitle: 'Imobiliária • CRECI-BA 8820',
    tier: 'verified' as const,
    isActive: false,
  },
];

export function SwitchAccountModal({ onClose }: SwitchAccountModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-trust-blue)]">
              Conquista Market
            </span>
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Trocar de Conta
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Saved Accounts */}
        <div className="p-3 space-y-1.5">
          {SAVED_ACCOUNTS.map((acc) => (
            <button
              key={acc.id}
              type="button"
              onClick={onClose}
              className={`w-full flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all ${
                acc.isActive
                  ? 'bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold text-white shrink-0 shadow-sm ${
                  acc.tier === 'pro'
                    ? 'bg-gradient-to-br from-amber-400 to-orange-500'
                    : 'bg-gradient-to-br from-blue-500 to-emerald-500'
                }`}
              >
                {acc.initials}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{acc.name}</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{acc.subtitle}</p>
              </div>

              {acc.isActive && (
                <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 shrink-0">
                  ✓ Ativo
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <Link
            href="/login"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-extrabold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
          >
            <span>➕ Entrar com outro número ou e-mail</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="w-full text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors py-1"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
