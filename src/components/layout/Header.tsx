'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { HeaderSearchModal } from '@/components/layout/HeaderSearchModal';
import { HeaderProfileDropdown } from '@/components/layout/HeaderProfileDropdown';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white dark:bg-[#0F172A] dark:border-slate-800 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-primary)] dark:text-white">
              Conquista<span className="text-[var(--color-accent-green)]">Market</span>
            </Link>
            
            {/* Neighborhood Selector */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center text-xs font-semibold bg-slate-100 dark:bg-slate-800 rounded-xl px-3 py-1.5 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-slate-600 dark:text-slate-300 truncate max-w-[150px]">📍 Vitória da Conquista</span>
            </button>
          </div>

          {/* Global Search Input Trigger */}
          <div className="flex flex-1 max-w-md mx-4 md:mx-8">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="w-full text-left bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-full py-2 px-4 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-between transition-colors"
            >
              <span>Buscar em VCA (Imóveis, Veículos, Serviços...)</span>
              <span className="text-slate-400">🔍</span>
            </button>
          </div>

          {/* Navigation & CTA */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <Link href="/imoveis" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Imóveis</Link>
              <Link href="/veiculos" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Veículos</Link>
              <Link href="/servicos" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Serviços</Link>
              <Link href="/comercio" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Comércio</Link>
              <Link href="/vagas" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Vagas</Link>
            </nav>

            <ThemeToggle />

            <Link href="/anunciar" className="hidden md:flex bg-[var(--color-primary)] hover:bg-slate-800 text-white dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
              + Anunciar
            </Link>

            {/* User Profile Dropdown */}
            <HeaderProfileDropdown />
          </div>
        </div>
      </header>

      {isSearchOpen && <HeaderSearchModal onClose={() => setIsSearchOpen(false)} />}
    </>
  );
}


