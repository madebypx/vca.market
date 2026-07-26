'use client';

interface FilterBarProps {
  transaction: string;
  setTransaction: (val: string) => void;
  propertyType: string;
  setPropertyType: (val: string) => void;
  neighborhood: string;
  setNeighborhood: (val: string) => void;
  bedrooms: number;
  setBedrooms: (val: number) => void;
  resultsCount: number;
}

const NEIGHBORHOODS = ['todos', 'Candeias', 'Recreio', 'Centro', 'Boa Vista', 'Alto Maron'];

export function ImoveisFilterBar({
  transaction,
  setTransaction,
  propertyType,
  setPropertyType,
  neighborhood,
  setNeighborhood,
  bedrooms,
  setBedrooms,
  resultsCount,
}: FilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 p-4 sticky top-16 z-40 shadow-xs">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Transaction Toggle (Venda / Aluguel) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          <button
            onClick={() => setTransaction('todos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              transaction === 'todos'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setTransaction('venda')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              transaction === 'venda'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Comprar
          </button>
          <button
            onClick={() => setTransaction('aluguel')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              transaction === 'aluguel'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Alugar
          </button>
        </div>

        {/* Technical Facets */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Property Type Dropdown */}
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            <option value="todos">Tipo de Imóvel (Todos)</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="terreno">Terreno</option>
            <option value="comercial">Comercial</option>
          </select>

          {/* Neighborhood Dropdown */}
          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            {NEIGHBORHOODS.map((n) => (
              <option key={n} value={n}>
                {n === 'todos' ? 'Bairro (Todos em VCA)' : n}
              </option>
            ))}
          </select>

          {/* Bedrooms Selector */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl px-2 py-1">
            <span className="text-[11px] font-semibold text-slate-500 px-1">Quartos:</span>
            {[0, 1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setBedrooms(num)}
                className={`w-6 h-6 rounded-lg text-xs font-bold transition-all ${
                  bedrooms === num
                    ? 'bg-[var(--color-trust-blue)] text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {num === 0 ? 'T' : `${num}+`}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-[var(--color-primary)] dark:text-white font-bold">{resultsCount}</span> imóveis encontrados
        </div>
      </div>
    </div>
  );
}
