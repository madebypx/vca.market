'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { signOutUser } from '@/app/actions/auth';

interface SwitchAccountModalProps {
  onClose: () => void;
}

export function SwitchAccountModal({ onClose }: SwitchAccountModalProps) {
  const [currentUser, setCurrentUser] = useState<{
    name: string;
    email: string;
    initials: string;
    neighborhood: string;
    tier: string;
  } | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Usuário VCA';
          const initials = name
            .split(' ')
            .slice(0, 2)
            .map((n: string) => n[0])
            .join('')
            .toUpperCase();

          setCurrentUser({
            name,
            email: user.email || '',
            initials,
            neighborhood: user.user_metadata?.neighborhood || 'Vitória da Conquista',
            tier: user.user_metadata?.verification_tier || 'community',
          });
        }
      } catch {
        // Fallback
      }
    }
    loadUser();
  }, []);

  const handleSignOutAndSwitch = async () => {
    onClose();
    await signOutUser();
  };

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
              Sessão & Troca de Conta
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

        {/* Current Active Account */}
        <div className="p-4 space-y-3">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Conta Conectada Agora</p>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-sm font-extrabold text-white shrink-0 shadow-sm">
              {currentUser?.initials || 'VCA'}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                {currentUser?.name || 'Sessão Ativa'}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                {currentUser?.email || 'Bairro Candeias • VCA'}
              </p>
            </div>

            <span className="text-[10px] font-extrabold text-blue-600 dark:text-blue-400 shrink-0">
              ✓ Ativo
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <button
            type="button"
            onClick={handleSignOutAndSwitch}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-extrabold hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
          >
            <span>🚪 Sair e Entrar com outra Conta</span>
          </button>

          <Link
            href="/perfil/configuracoes"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span>⚙️ Gerenciar Perfis / Solicitou Selo Pro</span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors py-1"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
