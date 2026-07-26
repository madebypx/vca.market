'use client';

import { useState } from 'react';
import Link from 'next/link';

const NEIGHBORHOODS = [
  'Todo VCA',
  'Candeias',
  'Centro',
  'Recreio',
  'Bairro Brasil',
  'Boa Vista',
  'Alto Maron',
];

export function HeroSearch() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Todo VCA');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white py-16 md:py-24 px-4 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[var(--color-trust-blue)]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Value Prop Heading */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold tracking-wide text-emerald-400 mb-6 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse" />
          O Centro de Gravidade Econômico de Vitória da Conquista
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white leading-tight">
          Compre, venda e contrate em <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
            Vitória da Conquista com Confiança
          </span>
        </h1>

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Centralizamos imóveis, veículos, serviços e o comércio local em uma única plataforma hiperlocal com selos reais de verificação.
        </p>

        {/* Search Bar Container */}
        <div className="bg-white dark:bg-slate-900 p-2 md:p-3 rounded-2xl shadow-2xl border border-slate-200/20 max-w-3xl mx-auto mb-6">
          <div className="flex flex-col md:flex-row items-center gap-2">
            {/* Input Search */}
            <div className="relative flex-1 w-full">
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você procura hoje em Conquista? (ex: apartamento, técnico, carro)"
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl text-sm outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)] transition-all"
              />
            </div>

            {/* Action Button */}
            <Link
              href={`/imoveis?bairro=${encodeURIComponent(selectedNeighborhood)}&q=${encodeURIComponent(searchQuery)}`}
              className="w-full md:w-auto bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 shrink-0"
            >
              <span>Buscar Agora</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Neighborhood Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium mr-1">Filtrar por Bairro:</span>
          {NEIGHBORHOODS.map((neighborhood) => {
            const isSelected = selectedNeighborhood === neighborhood;
            return (
              <button
                key={neighborhood}
                onClick={() => setSelectedNeighborhood(neighborhood)}
                className={`px-3 py-1.5 rounded-full font-medium transition-all ${
                  isSelected
                    ? 'bg-[var(--color-trust-blue)] text-white shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {neighborhood}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
