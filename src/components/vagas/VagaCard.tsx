'use client';

import React, { useState } from 'react';
import { VagaItem } from '@/data/mockVagas';
import { CurriculoQuickGeneratorModal } from './CurriculoQuickGeneratorModal';

interface VagaCardProps {
  vaga: VagaItem;
}

export function VagaCard({ vaga }: VagaCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
          >
            <span>💬 Criar Mini-Currículo e Candidatar-se</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <CurriculoQuickGeneratorModal
          jobTitle={vaga.title}
          companyName={vaga.companyName}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

