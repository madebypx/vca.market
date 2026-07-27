'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { MOCK_VAGAS } from '@/data/mockVagas';
import { VagaCard } from '@/components/vagas/VagaCard';
import { CurriculoQuickGeneratorModal } from '@/components/vagas/CurriculoQuickGeneratorModal';
import { TrustBadge } from '@/components/common/TrustBadge';

interface VagaDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function VagaDetailPage({ params }: VagaDetailPageProps) {
  const { id } = use(params);
  const vaga = MOCK_VAGAS.find((v) => v.id === id);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  if (!vaga) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Vaga não encontrada</h2>
          <Link href="/vagas" className="text-xs font-bold text-blue-600 dark:text-blue-400 underline">
            ← Voltar para Vagas em VCA
          </Link>
        </div>
      </div>
    );
  }

  const similarVagas = MOCK_VAGAS.filter(
    (v) => v.id !== vaga.id && (v.area === vaga.area || v.neighborhood === vaga.neighborhood)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-3.5 px-4">
        <div className="container mx-auto max-w-5xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/vagas" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Vagas em VCA
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate">
            {vaga.title}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 space-y-8">
        {/* Header Block */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {vaga.area.toUpperCase()}
              </span>

              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 uppercase">
                {vaga.contractType}
              </span>

              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 capitalize">
                Modelo {vaga.workModel}
              </span>
            </div>

            <TrustBadge type="verified_resident" customLabel={vaga.verificationLabel} />
          </div>

          <div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {vaga.companyName} • Publicada {vaga.postedDate}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-1">
              {vaga.title}
            </h1>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
              📍 Bairro {vaga.neighborhood} • Vitória da Conquista - BA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
            <div>
              <span className="block text-[10px] font-extrabold uppercase text-slate-400">Faixa Salarial Prevista</span>
              <strong className="text-2xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                {vaga.salaryRange}
              </strong>
            </div>

            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-extrabold text-xs rounded-2xl shadow-md hover:bg-slate-800 dark:hover:bg-slate-100 transition-all text-center"
            >
              📄 Candidatar-se com Mini-Currículo Rápido →
            </button>
          </div>
        </div>

        {/* Requirements & Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Requirements */}
          <div className="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <span>📋</span> Descrição & Responsabilidades
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {vaga.description}
            </p>

            <h3 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider pt-2">
              Requisitos Obrigatórios
            </h3>

            <div className="space-y-2 text-xs">
              {vaga.requirements.map((req, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 font-semibold text-slate-800 dark:text-slate-200">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Benefits & Fast Apply Sidebar */}
          <div className="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-6 shadow-xl">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Benefícios & Vantagens
              </h3>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4 font-medium">
                <li>Vale Transporte (VT) ou Auxílio Combustível em VCA</li>
                <li>Vale Refeição (VR) ou Alimentação</li>
                <li>Plano de Saúde e Odontológico</li>
                <li>Plano de Carreira na Empresa</li>
              </ul>
            </div>

            <hr className="border-slate-100 dark:border-slate-800" />

            <div className="space-y-3 text-center">
              <span className="text-2xl block">⚡</span>
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                Candidatura Instantânea via WhatsApp
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Gere seu resumo profissional em 30 segundos e envie direto para o RH de Vitória da Conquista.
              </p>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-2xl text-xs transition-all shadow-md"
              >
                Gerar Mini-Currículo Agora
              </button>
            </div>
          </div>
        </div>

        {/* Similar Jobs */}
        {similarVagas.length > 0 && (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Outras Vagas em Vitória da Conquista
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarVagas.map((v) => (
                <VagaCard key={v.id} vaga={v} />
              ))}
            </div>
          </div>
        )}
      </div>

      {isResumeModalOpen && (
        <CurriculoQuickGeneratorModal
          jobTitle={vaga.title}
          companyName={vaga.companyName}
          onClose={() => setIsResumeModalOpen(false)}
        />
      )}

    </div>
  );
}
