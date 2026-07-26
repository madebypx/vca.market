'use client';

interface ServicosFilterBarProps {
  categoryTag: string;
  setCategoryTag: (val: string) => void;
  neighborhood: string;
  setNeighborhood: (val: string) => void;
  homeServiceOnly: boolean;
  setHomeServiceOnly: (val: boolean) => void;
  freeQuoteOnly: boolean;
  setFreeQuoteOnly: (val: boolean) => void;
  resultsCount: number;
}

const CATEGORIES = ['todos', 'Refrigeração', 'Eletricista', 'Pintura', 'TI & Celulares', 'Limpeza'];
const NEIGHBORHOODS = ['todos', 'Candeias', 'Recreio', 'Centro', 'Bairro Brasil', 'Boa Vista'];

export function ServicosFilterBar({
  categoryTag,
  setCategoryTag,
  neighborhood,
  setNeighborhood,
  homeServiceOnly,
  setHomeServiceOnly,
  freeQuoteOnly,
  setFreeQuoteOnly,
  resultsCount,
}: ServicosFilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 p-4 sticky top-16 z-40 shadow-xs">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryTag(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                categoryTag === cat
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat === 'todos' ? 'Todas Especialidades' : cat}
            </button>
          ))}
        </div>

        {/* Technical Facets */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Neighborhood Dropdown */}
          <select
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            {NEIGHBORHOODS.map((n) => (
              <option key={n} value={n}>
                {n === 'todos' ? 'Bairro (Todos)' : n}
              </option>
            ))}
          </select>

          {/* Home Service Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            homeServiceOnly
              ? 'bg-purple-500/10 border-purple-500/50 text-purple-600 dark:text-purple-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={homeServiceOnly}
              onChange={(e) => setHomeServiceOnly(e.target.checked)}
              className="hidden"
            />
            <span>🏠 Atende em Domicílio</span>
          </label>

          {/* Free Quote Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            freeQuoteOnly
              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600 dark:text-emerald-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={freeQuoteOnly}
              onChange={(e) => setFreeQuoteOnly(e.target.checked)}
              className="hidden"
            />
            <span>💬 Orçamento Grátis</span>
          </label>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-[var(--color-primary)] dark:text-white font-bold">{resultsCount}</span> profissionais encontrados
        </div>
      </div>
    </div>
  );
}
