'use client';

import { useState, useMemo } from 'react';
import { MOCK_IMOVEIS } from '@/data/mockImoveis';
import { ImoveisFilterBar } from '@/components/imoveis/ImoveisFilterBar';
import { ImovelCard } from '@/components/imoveis/ImovelCard';
import { ImoveisMapContainer } from '@/components/imoveis/ImoveisMapContainer';

export default function ImoveisPage() {
  const [transaction, setTransaction] = useState('todos');
  const [propertyType, setPropertyType] = useState('todos');
  const [neighborhood, setNeighborhood] = useState('todos');
  const [bedrooms, setBedrooms] = useState(0);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mobileViewMode, setMobileViewMode] = useState<'lista' | 'mapa'>('lista');

  // Filter Logic
  const filteredImoveis = useMemo(() => {
    return MOCK_IMOVEIS.filter((item) => {
      if (transaction !== 'todos' && item.transactionType !== transaction) return false;
      if (propertyType !== 'todos' && item.propertyType !== propertyType) return false;
      if (neighborhood !== 'todos' && item.neighborhood !== neighborhood) return false;
      if (bedrooms > 0 && item.bedrooms < bedrooms) return false;
      return true;
    });
  }, [transaction, propertyType, neighborhood, bedrooms]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Imóveis em Vitória da Conquista
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Apartamentos, casas, terrenos e pontos comerciais com dados técnicos de m² e corretores com CRECI.
          </p>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <ImoveisFilterBar
        transaction={transaction}
        setTransaction={setTransaction}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        neighborhood={neighborhood}
        setNeighborhood={setNeighborhood}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        resultsCount={filteredImoveis.length}
      />

      {/* Main Split View Container */}
      <div className="container mx-auto flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {/* Left Column: Properties List (Desktop: 7 cols) */}
        <div
          className={`lg:col-span-7 flex flex-col gap-4 ${
            mobileViewMode === 'mapa' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {filteredImoveis.length === 0 ? (
            /* Actionable Empty State */
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 my-8">
              <div className="text-4xl mb-3">🏡</div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                Nenhum imóvel encontrado com esses filtros
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Tente ajustar os critérios de bairro ou número de quartos para ver mais opções em Vitória da Conquista.
              </p>
              <button
                onClick={() => {
                  setTransaction('todos');
                  setPropertyType('todos');
                  setNeighborhood('todos');
                  setBedrooms(0);
                }}
                className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-xl"
              >
                Limpar Todos os Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredImoveis.map((imovel) => (
                <ImovelCard
                  key={imovel.id}
                  imovel={imovel}
                  isHovered={hoveredId === imovel.id}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Sticky Interactive Map (Desktop: 5 cols) */}
        <div
          className={`lg:col-span-5 sticky top-36 h-[calc(100vh-160px)] ${
            mobileViewMode === 'lista' ? 'hidden lg:block' : 'block'
          }`}
        >
          <ImoveisMapContainer
            imoveis={filteredImoveis}
            hoveredId={hoveredId}
            onHoverPin={setHoveredId}
          />
        </div>
      </div>

      {/* Mobile Floating View Toggle Button (Lista | Mapa) */}
      <div className="lg:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-slate-950 text-white rounded-full p-1 shadow-2xl border border-white/20 flex items-center gap-1">
          <button
            onClick={() => setMobileViewMode('lista')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              mobileViewMode === 'lista'
                ? 'bg-[var(--color-trust-blue)] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📋 Lista ({filteredImoveis.length})
          </button>
          <button
            onClick={() => setMobileViewMode('mapa')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              mobileViewMode === 'mapa'
                ? 'bg-[var(--color-trust-blue)] text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🗺️ Mapa
          </button>
        </div>
      </div>
    </div>
  );
}
