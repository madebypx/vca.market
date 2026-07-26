'use client';

interface VeiculosFilterBarProps {
  vehicleType: string;
  setVehicleType: (val: string) => void;
  brand: string;
  setBrand: (val: string) => void;
  transmission: string;
  setTransmission: (val: string) => void;
  belowFipeOnly: boolean;
  setBelowFipeOnly: (val: boolean) => void;
  cautelarOnly: boolean;
  setCautelarOnly: (val: boolean) => void;
  resultsCount: number;
}

const BRANDS = ['todos', 'Toyota', 'Jeep', 'Honda', 'Fiat', 'Volkswagen'];

export function VeiculosFilterBar({
  vehicleType,
  setVehicleType,
  brand,
  setBrand,
  transmission,
  setTransmission,
  belowFipeOnly,
  setBelowFipeOnly,
  cautelarOnly,
  setCautelarOnly,
  resultsCount,
}: VeiculosFilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 p-4 sticky top-16 z-40 shadow-xs">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Type Toggle (Carro / Moto / Utilitário) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
          <button
            onClick={() => setVehicleType('todos')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              vehicleType === 'todos'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setVehicleType('carro')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              vehicleType === 'carro'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            🚗 Carros
          </button>
          <button
            onClick={() => setVehicleType('moto')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              vehicleType === 'moto'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            🏍️ Motos
          </button>
          <button
            onClick={() => setVehicleType('utilitario')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              vehicleType === 'utilitario'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            🛻 Utilitários
          </button>
        </div>

        {/* Technical Facets */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Brand Dropdown */}
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            {BRANDS.map((b) => (
              <option key={b} value={b}>
                {b === 'todos' ? 'Marca (Todas)' : b}
              </option>
            ))}
          </select>

          {/* Transmission Dropdown */}
          <select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            <option value="todos">Câmbio (Todos)</option>
            <option value="automatico">Automático</option>
            <option value="manual">Manual</option>
          </select>

          {/* FIPE Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            belowFipeOnly
              ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600 dark:text-emerald-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={belowFipeOnly}
              onChange={(e) => setBelowFipeOnly(e.target.checked)}
              className="hidden"
            />
            <span>🏷️ Abaixo da FIPE</span>
          </label>

          {/* Cautelar Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            cautelarOnly
              ? 'bg-blue-500/10 border-blue-500/50 text-blue-600 dark:text-blue-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={cautelarOnly}
              onChange={(e) => setCautelarOnly(e.target.checked)}
              className="hidden"
            />
            <span>🛡️ Laudo Cautelar Aprovado</span>
          </label>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-[var(--color-primary)] dark:text-white font-bold">{resultsCount}</span> veículos encontrados
        </div>
      </div>
    </div>
  );
}
