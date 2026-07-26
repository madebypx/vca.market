'use client';

import React, { useState } from 'react';
import { MOCK_DEMANDAS, DemandaItem } from '@/data/mockDemandas';
import { DemandaCard } from '@/components/demandas/DemandaCard';
import { CreateDemandaModal } from '@/components/demandas/CreateDemandaModal';

export default function DemandasPage() {
  const [demandas, setDemandas] = useState<DemandaItem[]>(MOCK_DEMANDAS);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('Todos os Bairros');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDemandas = demandas.filter((item) => {
    const matchBairro =
      selectedNeighborhood === 'Todos os Bairros' || item.neighborhood === selectedNeighborhood;
    const matchCategory = selectedCategory === 'todas' || item.category === selectedCategory;
    return matchBairro && matchCategory;
  });

  const handleAddDemanda = (newD: {
    title: string;
    category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
    neighborhood: string;
    budgetText: string;
    description: string;
  }) => {
    const created: DemandaItem = {
      id: `dmd-${Date.now()}`,
      title: newD.title,
      category: newD.category,
      neighborhood: newD.neighborhood,
      budgetText: newD.budgetText || 'A combinar',
      requesterName: 'Morador de Conquista',
      requesterPhone: '5577999887766',
      verificationBadge: 'Morador Verificado',
      createdAt: new Date().toISOString().split('T')[0],
      expiresInDays: 7,
      description: newD.description,
    };
    setDemandas([created, ...demandas]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Block */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Inovação Hiperlocal — Procuro em VCA
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Mural de Pedidos & Necessidades Abertas
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Moradores de Vitória da Conquista publicam o que precisam comprar ou contratar, e lojas/profissionais credenciados respondem direto no WhatsApp.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold rounded-2xl text-xs hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md shrink-0"
          >
            + Publicar Meu Pedido no Mural
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
            {[
              { id: 'todas', label: 'Todas as Categorias' },
              { id: 'imoveis', label: '🏡 Imóveis' },
              { id: 'veiculos', label: '🚗 Veículos' },
              { id: 'servicos', label: '🛠️ Serviços' },
              { id: 'comercio', label: '🛍️ Comércio' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white'
                    : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <select
            value={selectedNeighborhood}
            onChange={(e) => setSelectedNeighborhood(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="Todos os Bairros">Todos os Bairros de VCA</option>
            <option value="Candeias">Candeias</option>
            <option value="Recreio">Recreio</option>
            <option value="Centro">Centro</option>
            <option value="Bairro Brasil">Bairro Brasil</option>
            <option value="Alto Maron">Alto Maron</option>
          </select>
        </div>

        {/* Demanda Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDemandas.map((demanda) => (
            <DemandaCard key={demanda.id} demanda={demanda} />
          ))}
        </div>

        {filteredDemandas.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
            <span className="text-4xl">🔍</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Nenhum pedido encontrado neste filtro
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Seja o primeiro a publicar um pedido no bairro {selectedNeighborhood}.
            </p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <CreateDemandaModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleAddDemanda}
        />
      )}
    </div>
  );
}
