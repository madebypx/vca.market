import Link from 'next/link';

const VERTICALS = [
  {
    id: 'imoveis',
    title: 'Imóveis',
    count: '340+ ativos',
    description: 'Casas, apartamentos e terrenos com m² e CRECI auditado',
    href: '/imoveis',
    iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    borderColor: 'group-hover:border-blue-500/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0H9m3 0h3m-3 0v4m0 0H9m3 0h3" />
      </svg>
    ),
    badge: 'Com Mapa & CRECI',
  },
  {
    id: 'veiculos',
    title: 'Veículos',
    count: '180+ ativos',
    description: 'Seminovos e usados com comparação FIPE e laudo cautelar',
    href: '/veiculos',
    iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 9l2-4h14l2 4M3 9v7a1 1 0 001 1h1m16-8v7a1 1 0 01-1 1h-1M3 9h18" />
      </svg>
    ),
    badge: 'Tabela FIPE',
  },
  {
    id: 'servicos',
    title: 'Serviços & Profissionais',
    count: '210+ prestadores',
    description: 'Eletricistas, técnicos e especialistas com avaliações locais',
    href: '/servicos',
    iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    borderColor: 'group-hover:border-purple-500/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: 'Avaliações Reais',
  },
  {
    id: 'comercio',
    title: 'Comércio & Produtos',
    count: '520+ ofertas',
    description: 'Lojas do Centro, Bairro Brasil e particulares com retirada rápida',
    href: '/comercio',
    iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    borderColor: 'group-hover:border-amber-500/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    badge: 'Retirada em VCA',
  },
  {
    id: 'vagas',
    title: 'Vagas de Emprego',
    count: '65+ oportunidades',
    description: 'Oportunidades diretas com empresas verificadas da cidade',
    href: '/vagas',
    iconBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Empresas Locais',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Explore por Categoria
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Experiências totalmente verticalizadas e adaptadas para cada setor comercial de Conquista.
            </p>
          </div>
        </div>

        {/* 5-Column Grid on Large Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {VERTICALS.map((v) => (
            <Link
              key={v.id}
              href={v.href}
              className={`group bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between ${v.borderColor}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${v.iconBg}`}>{v.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {v.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-[var(--color-trust-blue)] transition-colors mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {v.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/40 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{v.count}</span>
                <span className="text-[var(--color-trust-blue)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Acessar &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
