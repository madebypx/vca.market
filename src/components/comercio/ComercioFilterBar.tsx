'use client';

interface ComercioFilterBarProps {
  category: string;
  setCategory: (val: string) => void;
  condition: string;
  setCondition: (val: string) => void;
  pickupOnly: boolean;
  setPickupOnly: (val: boolean) => void;
  physicalStoreOnly: boolean;
  setPhysicalStoreOnly: (val: boolean) => void;
  resultsCount: number;
}

const CATEGORIES = [
  { id: 'todos', name: 'Todas Ofertas' },
  { id: 'tech', name: '📱 Tech & Celulares' },
  { id: 'moda', name: '👕 Moda & Estilo' },
  { id: 'casa', name: '🏠 Casa & Móveis' },
  { id: 'esportes', name: '⚽ Esportes & Lazer' },
];

export function ComercioFilterBar({
  category,
  setCategory,
  condition,
  setCondition,
  pickupOnly,
  setPickupOnly,
  physicalStoreOnly,
  setPhysicalStoreOnly,
  resultsCount,
}: ComercioFilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 p-4 sticky top-16 z-40 shadow-xs">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                category === cat.id
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Technical Facets */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Condition Dropdown */}
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            <option value="todos">Estado do Item (Todos)</option>
            <option value="novo">Novo com Garantia</option>
            <option value="usado">Usado / Seminovo</option>
          </select>

          {/* Pickup Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            pickupOnly
              ? 'bg-amber-500/10 border-amber-500/50 text-amber-600 dark:text-amber-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={pickupOnly}
              onChange={(e) => setPickupOnly(e.target.checked)}
              className="hidden"
            />
            <span>🏬 Retirada Presencial em VCA</span>
          </label>

          {/* Physical Store Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            physicalStoreOnly
              ? 'bg-blue-500/10 border-blue-500/50 text-blue-600 dark:text-blue-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={physicalStoreOnly}
              onChange={(e) => setPhysicalStoreOnly(e.target.checked)}
              className="hidden"
            />
            <span>✓ Lojas Físicas Auditadas</span>
          </label>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-[var(--color-primary)] dark:text-white font-bold">{resultsCount}</span> ofertas encontradas
        </div>
      </div>
    </div>
  );
}
