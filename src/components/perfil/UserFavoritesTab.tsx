'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SavedFavorite } from '@/types/user';

interface UserFavoritesTabProps {
  favorites: SavedFavorite[];
}

export function UserFavoritesTab({ favorites }: UserFavoritesTabProps) {
  if (favorites.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 text-center border border-slate-200 dark:border-slate-700/60 my-6">
        <div className="text-4xl mb-3">⭐</div>
        <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
          Nenhum favorito salvo ainda
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 max-w-md mx-auto">
          Ao navegar pelas verticais de imóveis, veículos, serviços e vagas em Conquista, clique na estrela para guardar seus anúncios favoritos aqui.
        </p>
        <Link
          href="/imoveis"
          className="inline-block bg-[var(--color-primary)] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-colors"
        >
          Explorar Imóveis em VCA
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {favorites.map((fav) => (
        <div
          key={fav.id}
          className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col justify-between group hover:shadow-md transition-all"
        >
          <div>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
              <Image
                src={fav.imageUrl}
                alt={fav.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-white/10">
                {fav.category}
              </span>
            </div>

            <div className="p-4">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                📍 {fav.neighborhood}
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 mt-1 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors">
                {fav.title}
              </h4>
              <div className="text-base font-extrabold text-[var(--color-primary)] dark:text-emerald-400">
                {fav.priceOrSalary}
              </div>
            </div>
          </div>

          <div className="p-4 pt-0">
            <Link
              href={fav.link}
              className="w-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <span>Ver Anúncio Detalhado</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
