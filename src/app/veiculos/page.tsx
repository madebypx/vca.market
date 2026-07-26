'use client';

import { useState, useMemo } from 'react';
import { MOCK_VEICULOS } from '@/data/mockVeiculos';
import { VeiculosFilterBar } from '@/components/veiculos/VeiculosFilterBar';
import { VeiculoCard } from '@/components/veiculos/VeiculoCard';

export default function VeiculosPage() {
  const [vehicleType, setVehicleType] = useState('todos');
  const [brand, setBrand] = useState('todos');
  const [transmission, setTransmission] = useState('todos');
  const [belowFipeOnly, setBelowFipeOnly] = useState(false);
  const [cautelarOnly, setCautelarOnly] = useState(false);

  // Filter Logic
  const filteredVeiculos = useMemo(() => {
    return MOCK_VEICULOS.filter((item) => {
      if (vehicleType !== 'todos' && item.vehicleType !== vehicleType) return false;
      if (brand !== 'todos' && item.brand !== brand) return false;
      if (transmission !== 'todos' && item.transmission !== transmission) return false;
      if (belowFipeOnly && item.price >= item.fipeReferencePrice) return false;
      if (cautelarOnly && !item.hasCautelarApproved) return false;
      return true;
    });
  }, [vehicleType, brand, transmission, belowFipeOnly, cautelarOnly]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-4">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Veículos Seminovos e Usados em Vitória da Conquista
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Carros, motos e utilitários com comparação da Tabela FIPE de referência e selo de laudo cautelar aprovado.
          </p>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <VeiculosFilterBar
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
        brand={brand}
        setBrand={setBrand}
        transmission={transmission}
        setTransmission={setTransmission}
        belowFipeOnly={belowFipeOnly}
        setBelowFipeOnly={setBelowFipeOnly}
        cautelarOnly={cautelarOnly}
        setCautelarOnly={setCautelarOnly}
        resultsCount={filteredVeiculos.length}
      />

      {/* Main Grid Container */}
      <div className="container mx-auto flex-1 p-4 md:p-6">
        {filteredVeiculos.length === 0 ? (
          /* Actionable Empty State */
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 max-w-lg mx-auto my-12 shadow-xs">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Nenhum veículo encontrado com esses critérios
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Tente desmarcar os filtros de Tabela FIPE ou Laudo Cautelar para ver todos os seminovos disponíveis em Vitória da Conquista.
            </p>
            <button
              onClick={() => {
                setVehicleType('todos');
                setBrand('todos');
                setTransmission('todos');
                setBelowFipeOnly(false);
                setCautelarOnly(false);
              }}
              className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Limpar Filtros Automotivos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVeiculos.map((veiculo) => (
              <VeiculoCard key={veiculo.id} veiculo={veiculo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
