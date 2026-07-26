'use client';

interface VagasFilterBarProps {
  area: string;
  setArea: (val: string) => void;
  workModel: string;
  setWorkModel: (val: string) => void;
  contractType: string;
  setContractType: (val: string) => void;
  verifiedOnly: boolean;
  setVerifiedOnly: (val: boolean) => void;
  resultsCount: number;
}

const AREAS = [
  { id: 'todos', name: 'Todas as Áreas' },
  { id: 'vendas', name: '💼 Vendas & Comercial' },
  { id: 'atendimento', name: '🎧 Atendimento & Caixa' },
  { id: 'ti', name: '💻 TI & Tecnologia' },
  { id: 'admin', name: '📊 Administrativo' },
  { id: 'saude', name: '🩺 Saúde' },
  { id: 'logistica', name: '🚚 Logística' },
];

export function VagasFilterBar({
  area,
  setArea,
  workModel,
  setWorkModel,
  contractType,
  setContractType,
  verifiedOnly,
  setVerifiedOnly,
  resultsCount,
}: VagasFilterBarProps) {
  return (
    <div className="w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 p-4 sticky top-16 z-40 shadow-xs">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Area Pills */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
          {AREAS.map((a) => (
            <button
              key={a.id}
              onClick={() => setArea(a.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                area === a.id
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {a.name}
            </button>
          ))}
        </div>

        {/* Technical Facets */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Work Model Dropdown */}
          <select
            value={workModel}
            onChange={(e) => setWorkModel(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            <option value="todos">Modelo (Todos)</option>
            <option value="presencial">Presencial</option>
            <option value="hibrido">Híbrido</option>
            <option value="remoto">Remoto</option>
          </select>

          {/* Contract Type Dropdown */}
          <select
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
            className="bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 outline-none focus:ring-2 focus:ring-[var(--color-trust-blue)]"
          >
            <option value="todos">Contrato (Todos)</option>
            <option value="clt">CLT</option>
            <option value="pj">PJ</option>
            <option value="estagio">Estágio</option>
          </select>

          {/* Verified Checkbox Pill */}
          <label className={`flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            verifiedOnly
              ? 'bg-blue-500/10 border-blue-500/50 text-blue-600 dark:text-blue-400'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent text-slate-600 dark:text-slate-400'
          }`}>
            <input
              type="checkbox"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
              className="hidden"
            />
            <span>✓ Empresas Verificadas em VCA</span>
          </label>
        </div>

        {/* Results Counter */}
        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span className="text-[var(--color-primary)] dark:text-white font-bold">{resultsCount}</span> vagas abertas
        </div>
      </div>
    </div>
  );
}
