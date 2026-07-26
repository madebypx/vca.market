'use client';

import { useState, useMemo } from 'react';
import { MOCK_SERVICOS } from '@/data/mockServicos';
import { ServicosFilterBar } from '@/components/servicos/ServicosFilterBar';
import { ServicoCard } from '@/components/servicos/ServicoCard';

export default function ServicosPage() {
  const [categoryTag, setCategoryTag] = useState('todos');
  const [neighborhood, setNeighborhood] = useState('todos');
  const [homeServiceOnly, setHomeServiceOnly] = useState(false);
  const [freeQuoteOnly, setFreeQuoteOnly] = useState(false);

  // Filter Logic
  const filteredServicos = useMemo(() => {
    return MOCK_SERVICOS.filter((item) => {
      if (categoryTag !== 'todos' && item.categoryTag !== categoryTag) return false;
      if (neighborhood !== 'todos' && item.neighborhood !== neighborhood) return false;
      if (homeServiceOnly && !item.homeServiceAvailable) return false;
      if (freeQuoteOnly && !item.freeQuoteAvailable) return false;
      return true;
    });
  }, [categoryTag, neighborhood, homeServiceOnly, freeQuoteOnly]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Serviços & Profissionais em Vitória da Conquista
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Encontre eletricistas, técnicos de refrigeração, pintores e especialistas com portfólio visual e avaliações locais.
          </p>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <ServicosFilterBar
        categoryTag={categoryTag}
        setCategoryTag={setCategoryTag}
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
        homeServiceOnly={homeServiceOnly}
        setHomeServiceOnly={setHomeServiceOnly}
        freeQuoteOnly={freeQuoteOnly}
        setFreeQuoteOnly={setFreeQuoteOnly}
        resultsCount={filteredServicos.length}
      />

      {/* Main Portfolio Grid Container */}
      <div className="container mx-auto flex-1 p-4 md:p-6">
        {filteredServicos.length === 0 ? (
          /* Actionable Empty State */
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 max-w-lg mx-auto my-12 shadow-xs">
            <div className="text-4xl mb-3">🛠️</div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Nenhum profissional encontrado para esses filtros
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Tente selecionar a opção &quot;Todas Especialidades&quot; ou buscar em outros bairros de Vitória da Conquista.
            </p>
            <button
              onClick={() => {
                setCategoryTag('todos');
                setNeighborhood('todos');
                setHomeServiceOnly(false);
                setFreeQuoteOnly(false);
              }}
              className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Limpar Filtros de Serviços
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServicos.map((servico) => (
              <ServicoCard key={servico.id} servico={servico} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
