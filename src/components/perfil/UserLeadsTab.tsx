'use client';

import { UserRole } from '@/types/user';

interface UserLeadsTabProps {
  role: UserRole;
}

export function UserLeadsTab({ role }: UserLeadsTabProps) {
  const isPro = role === 'pro';

  const leadHistory = [
    {
      id: 'ld-101',
      senderName: 'Juliana Ferreira',
      senderPhone: '(77) 99912-3344',
      itemTitle: 'Apartamento de Alto Padrão no Candeias',
      date: 'Hoje, às 14:32',
      channel: 'WhatsApp Direct',
      status: 'Respondido',
    },
    {
      id: 'ld-102',
      senderName: 'Roberto Alves',
      senderPhone: '(77) 98844-5566',
      itemTitle: 'Toyota Corolla 2.0 XEi 2022',
      date: 'Ontem, às 18:15',
      channel: 'WhatsApp Direct',
      status: 'Pendente',
    },
  ];

  return (
    <div className="flex flex-col gap-6 my-4">
      {/* Metrics Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-xs">
          <div className="text-xs text-slate-400 font-extrabold uppercase tracking-wider mb-1">
            Total de Leads Recebidos
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            87 <span className="text-xs font-semibold text-emerald-500">+14% este mês</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-xs">
          <div className="text-xs text-slate-400 font-extrabold uppercase tracking-wider mb-1">
            Taxa de Conversão WhatsApp
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
            8.2%
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-xs">
          <div className="text-xs text-slate-400 font-extrabold uppercase tracking-wider mb-1">
            Bairro Mais Procurado
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            Candeias <span className="text-xs font-semibold text-slate-400">(42% dos leads)</span>
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            Histórico de Contatos Recebidos no WhatsApp
          </h3>
          {isPro && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ✓ Exportação de Relatórios Libera (Pro)
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-extrabold uppercase tracking-wider">
                <th className="pb-3">Cliente / Interessado</th>
                <th className="pb-3">Anúncio Alvo</th>
                <th className="pb-3">Data / Hora</th>
                <th className="pb-3">Canal</th>
                <th className="pb-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {leadHistory.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="py-3.5 font-bold text-slate-900 dark:text-white">
                    {lead.senderName}
                    <div className="text-[11px] font-normal text-slate-400">{lead.senderPhone}</div>
                  </td>
                  <td className="py-3.5 font-medium text-slate-700 dark:text-slate-300 max-w-[200px] truncate">
                    {lead.itemTitle}
                  </td>
                  <td className="py-3.5 text-slate-500 dark:text-slate-400 font-medium">
                    {lead.date}
                  </td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]">
                      {lead.channel}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <a
                      href={`https://wa.me/55${lead.senderPhone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-[11px] transition-colors"
                    >
                      Recontatar no WhatsApp
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
