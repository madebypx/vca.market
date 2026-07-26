'use client';

import { useState, useMemo } from 'react';
import { MOCK_VAGAS } from '@/data/mockVagas';
import { VagasFilterBar } from '@/components/vagas/VagasFilterBar';
import { VagaCard } from '@/components/vagas/VagaCard';

export default function VagasPage() {
  const [area, setArea] = useState('todos');
  const [workModel, setWorkModel] = useState('todos');
  const [contractType, setContractType] = useState('todos');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  // Filter Logic
  const filteredVagas = useMemo(() => {
    return MOCK_VAGAS.filter((item) => {
      if (area !== 'todos' && item.area !== area) return false;
      if (workModel !== 'todos' && item.workModel !== workModel) return false;
      if (contractType !== 'todos' && item.contractType !== contractType) return false;
      if (verifiedOnly && item.verificationTier === 'silver') return false;
      return true;
    });
  }, [area, workModel, contractType, verifiedOnly]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Vagas de Emprego em Vitória da Conquista
          </h1>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Oportunidades de trabalho em empresas, escritórios e comércio local com envio direto de currículo via WhatsApp.
          </p>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <VagasFilterBar
        area={area}
        setArea={setArea}
        workModel={workModel}
        setWorkModel={setWorkModel}
        contractType={contractType}
        setContractType={setContractType}
        verifiedOnly={verifiedOnly}
        setVerifiedOnly={setVerifiedOnly}
        resultsCount={filteredVagas.length}
      />

      {/* Main Qualified List Container */}
      <div className="container mx-auto max-w-5xl flex-1 p-4 md:p-6">
        {filteredVagas.length === 0 ? (
          /* Actionable Empty State */
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center border border-slate-200 dark:border-slate-700 max-w-lg mx-auto my-12 shadow-xs">
            <div className="text-4xl mb-3">💼</div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
              Nenhuma vaga encontrada para esses filtros
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Tente selecionar &quot;Todas as Áreas&quot; ou ajustar os modelos de contratação para ver mais oportunidades em VCA.
            </p>
            <button
              onClick={() => {
                setArea('todos');
                setWorkModel('todos');
                setContractType('todos');
                setVerifiedOnly(false);
              }}
              className="bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Limpar Filtros de Vagas
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredVagas.map((vaga) => (
              <VagaCard key={vaga.id} vaga={vaga} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
