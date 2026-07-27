'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  href: string;
  imageUrl?: string;
}

interface HeaderSearchModalProps {
  onClose: () => void;
}

export const HeaderSearchModal: React.FC<HeaderSearchModalProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <span className="text-lg text-slate-400">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite o que procura em Vitória da Conquista (ex: Corolla, Candeias, Pintura, iPhone...)"
            className="w-full text-sm font-semibold bg-transparent text-slate-900 dark:text-white outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 dark:hover:text-white"
            >
              Limpar
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-base font-bold pl-2 border-l border-slate-200 dark:border-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-2">
          {loading && (
            <div className="text-center py-8 text-xs font-semibold text-slate-400">
              Buscando em Vitória da Conquista...
            </div>
          )}

          {!loading && query.length >= 2 && results.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-500 dark:text-slate-400 space-y-1">
              <span className="text-2xl block">🔎</span>
              <p className="font-bold">Nenhum resultado encontrado para "{query}"</p>
              <p className="text-[11px]">Tente buscar por bairro (ex: Recreio) ou por categoria (ex: Imóveis).</p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="space-y-1">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 px-2 tracking-wider">
                Sugestões Encontradas ({results.length})
              </span>

              {results.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    {item.imageUrl ? (
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                        <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center text-sm shrink-0">
                        💼
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                    {item.category}
                  </span>
                </Link>
              ))}
            </div>
          )}

          {!query && (
            <div className="py-4 px-2 space-y-3">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Busca Rápida por Bairro em Conquista
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Candeias', 'Recreio', 'Centro', 'Bairro Brasil', 'Alto Maron', 'Boa Vista'].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setQuery(b)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    📍 Bairro {b}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
