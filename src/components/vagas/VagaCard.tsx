'use client';

import { VagaItem } from '@/data/mockVagas';

interface VagaCardProps {
  vaga: VagaItem;
}

export function VagaCard({ vaga }: VagaCardProps) {
  // WhatsApp Pre-Formatted Lead Dispatcher for CV
  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de me candidatar à vaga de "${vaga.title}" (Ref: #${vaga.id}) na empresa ${vaga.companyName} divulgada no Conquista Market (vca.market). Segue meu currículo em anexo.`
  );
  const whatsappUrl = `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/60 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Left Column: Job Info */}
      <div className="flex-1">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {/* Work Model Badge */}
          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
            {vaga.workModel === 'presencial' ? '🏢 Presencial' : vaga.workModel === 'hibrido' ? '💻 Híbrido' : '🌐 Remoto'}
          </span>

          {/* Contract Type */}
          <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            {vaga.contractType.toUpperCase()}
          </span>

          {/* Neighborhood Pill */}
          <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
            📍 {vaga.neighborhood} • {vaga.postedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-slate-900 dark:text-white text-base md:text-lg leading-snug mb-1 group-hover:text-[var(--color-trust-blue)] transition-colors">
          {vaga.title}
        </h3>

        {/* Company & Verification */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-slate-700 dark:text-slate-300 text-xs">
            {vaga.companyName}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
              vaga.verificationTier === 'gold' || vaga.verificationTier === 'platinum'
                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
            }`}
          >
            {vaga.verificationLabel}
          </span>
        </div>

        {/* Salary & Requirements Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-extrabold text-[var(--color-primary)] dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
            💰 {vaga.salaryRange}
          </span>
          {vaga.requirements.slice(0, 2).map((req, i) => (
            <span key={i} className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded-md text-[11px]">
              • {req}
            </span>
          ))}
        </div>
      </div>

      {/* Right Column: CTA Button */}
      <div className="shrink-0 flex items-center md:justify-end">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
          </svg>
          <span>Enviar Currículo / Candidatar-se</span>
        </a>
      </div>
    </div>
  );
}
