'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { signOutUser } from '@/app/actions/auth';
import { SwitchAccountModal } from '@/components/perfil/SwitchAccountModal';
import type { User } from '@supabase/supabase-js';

export function HeaderProfileDropdown() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitchOpen, setIsSwitchOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ─── Load Supabase session ──────────────────────────────────────────────────
  const loadUser = useCallback(async () => {
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    loadUser();

    // Re-fetch on auth state change (login/logout from another tab)
    const supabase = createClient();
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      loadUser();
    });

    return () => subscription.unsubscribe();
  }, [loadUser]);

  // ─── Outside click ──────────────────────────────────────────────────────────
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ─── Sign out ───────────────────────────────────────────────────────────────
  const handleSignOut = async () => {
    setSigningOut(true);
    setIsOpen(false);
    await signOutUser();
    setUser(null);
    setSigningOut(false);
    router.push('/');
    router.refresh();
  };

  // ─── Derived display data ───────────────────────────────────────────────────
  const displayName = user?.user_metadata?.full_name
    || user?.email?.split('@')[0]
    || 'Usuário VCA';

  const initials = displayName
    .split(' ')
    .slice(0, 2)
    .map((n: string) => n[0])
    .join('')
    .toUpperCase();

  const neighborhood = user?.user_metadata?.neighborhood || 'Vitória da Conquista';
  const tier = user?.user_metadata?.verification_tier || 'community';

  const tierBadge =
    tier === 'pro'
      ? { text: '★ Conquista Pro', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10' }
      : tier === 'verified'
      ? { text: '✓ Verificado', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10' }
      : { text: 'Morador VCA', color: 'text-slate-500 dark:text-slate-400', bg: 'bg-slate-100 dark:bg-slate-800' };

  // ─── Guest state ────────────────────────────────────────────────────────────
  if (!user) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-[var(--color-primary)] hover:bg-slate-800 dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-200 text-white transition-colors"
      >
        Entrar
      </Link>
    );
  }

  return (
    <>
      <div ref={dropdownRef} className="relative">
        {/* Avatar Trigger */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          disabled={signingOut}
          className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
          aria-label="Menu de Perfil"
        >
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-trust-blue)] to-emerald-500 flex items-center justify-center text-white text-xs font-extrabold shadow-sm">
            {initials}
            {tier === 'pro' && (
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-400 rounded-full border-2 border-white dark:border-[#0F172A] flex items-center justify-center text-[6px]">
                ★
              </span>
            )}
          </div>
          <svg
            className={`w-3.5 h-3.5 text-slate-500 hidden sm:block transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-50">
            {/* User Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-trust-blue)] to-emerald-500 flex items-center justify-center text-white text-sm font-extrabold shrink-0 shadow-sm">
                  {initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{displayName}</p>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${tierBadge.bg} ${tierBadge.color}`}>
                    {tierBadge.text}
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">📍 {neighborhood}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="py-1.5">
              {[
                { href: '/perfil', emoji: '📊', label: 'Meu Painel & Anúncios' },
                { href: '/anunciar', emoji: '➕', label: 'Publicar Novo Anúncio' },
                { href: '/perfil/configuracoes', emoji: '⚙️', label: 'Configurações da Conta' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="w-6 text-center text-base">{item.emoji}</span>
                  <span>{item.label}</span>
                </Link>
              ))}

              <button
                type="button"
                onClick={() => { setIsOpen(false); setIsSwitchOpen(true); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="w-6 text-center text-base">👥</span>
                <span>Trocar de Conta</span>
              </button>

              <Link
                href="/ajuda"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="w-6 text-center text-base">❓</span>
                <span>Central de Ajuda & FAQ</span>
              </Link>

              <Link
                href="/admin/moderacao"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 transition-colors"
              >
                <span className="w-6 text-center text-base">🛡️</span>
                <span>Painel Admin — Moderação</span>
              </Link>

              <div className="border-t border-slate-100 dark:border-slate-800 mt-1 pt-1">
                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={signingOut}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
                >
                  <span className="w-6 text-center text-base">🚪</span>
                  <span>{signingOut ? 'Saindo...' : 'Sair da Conta'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isSwitchOpen && <SwitchAccountModal onClose={() => setIsSwitchOpen(false)} />}
    </>
  );
}
