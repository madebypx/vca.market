'use client';

import Image from 'next/image';
import Link from 'next/link';
import { UserListing } from '@/types/user';

interface PublicProfileListingsProps {
  listings: UserListing[];
  userName: string;
}

export function PublicProfileListings({ listings, userName }: PublicProfileListingsProps) {
  if (listings.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center border border-slate-200 dark:border-slate-700/60 my-6">
        <div className="text-4xl mb-3">📦</div>
        <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
          Nenhum anúncio ativo no momento
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Este anunciante ainda não publicou anúncios ativos nesta semana.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 my-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Anúncios Ativos de {userName}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {listings.length} oportunidade(s) disponível(is) em Vitória da Conquista.
          </p>
        </div>
      </div>

      {/* Grid of Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col justify-between group hover:shadow-md hover:border-[var(--color-trust-blue)] transition-all"
          >
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-white/10">
                  {item.category}
                </span>
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                  📍 {item.neighborhood}
                </span>
              </div>

              <div className="p-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors">
                  {item.title}
                </h4>
                <div className="text-base font-extrabold text-[var(--color-primary)] dark:text-emerald-400">
                  {item.priceOrSalary}
                </div>
              </div>
            </div>

            <div className="p-4 pt-0">
              <Link
                href={item.category === 'imoveis' ? `/imoveis/${item.id}` : `/${item.category}`}
                className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors"
              >
                <span>Ver Detalhes do Anúncio</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
