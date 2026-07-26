'use client';

import Image from 'next/image';
import { UserListing, UserRole } from '@/types/user';

interface UserListingsTabProps {
  listings: UserListing[];
  role: UserRole;
}

export function UserListingsTab({ listings, role }: UserListingsTabProps) {
  const isCommon = role === 'common';
  const isParticular = role === 'particular';
  const isPro = role === 'pro';

  // Limits rules
  const activeImoveisCount = listings.filter((l) => l.category === 'imoveis' && l.status === 'active').length;
  const imoveisLimit = isParticular ? 1 : isPro ? 'Ilimitado' : 0;

  return (
    <div className="flex flex-col gap-6 my-4">
      {/* Limits & Status Banner */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            Seus Anúncios Publicados em Vitória da Conquista
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {isCommon && 'Contas de Consumidor não possuem anúncios ativos. Alterne para Particular ou Pro para publicar.'}
            {isParticular && `Nível Particular: Limite de ${imoveisLimit} anúncio de Imóvel ativo simultâneo.`}
            {isPro && 'Nível Conquista Pro: Anúncios ilimitados com prioridade algorítmica de destaque.'}
          </p>
        </div>

        {/* Action / Limit Indicator Pill */}
        <div className="flex items-center gap-3 shrink-0">
          {isParticular && (
            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              Imóveis Ativos: {activeImoveisCount} / {imoveisLimit}
            </div>
          )}

          {isPro && (
            <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              ⚡ Plano Conquista Pro (Ilimitado)
            </div>
          )}

          <button
            disabled={isCommon || (isParticular && activeImoveisCount >= 1)}
            className="bg-[var(--color-accent-green)] hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs"
          >
            + Criar Novo Anúncio
          </button>
        </div>
      </div>

      {/* Listings Items */}
      {isCommon ? (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center border border-slate-200 dark:border-slate-700/60">
          <div className="text-4xl mb-3">📢</div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
            Você é um Usuário Consumidor
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 max-w-md mx-auto">
            Para anunciar seu imóvel, veículo, serviço ou empresa no Conquista Market, ative a verificação de CPF (Particular) ou cadastre seu registro profissional (Conquista Pro CRECI).
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {/* Item Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 shrink-0">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                        item.status === 'active'
                          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                          : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      }`}
                    >
                      {item.status === 'active' ? '● Ativo' : '⏸ Pausado'}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.priceOrSalary} • 📍 {item.neighborhood}
                  </div>
                </div>
              </div>

              {/* Metrics & Quick Actions */}
              <div className="flex items-center gap-6 shrink-0 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-700/50">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <div title="Visualizações">👁️ {item.viewsCount}</div>
                  <div title="Cliques no WhatsApp" className="text-emerald-600 dark:text-emerald-400 font-bold">
                    💬 {item.whatsappClicks} leads
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors">
                    Editar
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors">
                    {item.status === 'active' ? 'Pausar' : 'Ativar'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
