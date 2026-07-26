'use client';

import Image from 'next/image';
import { UserProfile } from '@/types/user';

interface PublicProfileHeaderProps {
  user: UserProfile;
}

export function PublicProfileHeader({ user }: PublicProfileHeaderProps) {
  const isPro = user.role === 'pro';
  const isParticular = user.role === 'particular';

  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner / Cover Image */}
      <div className="relative w-full h-[180px] sm:h-[240px] md:h-[280px] rounded-3xl overflow-hidden bg-slate-900 shadow-md">
        {user.coverImageUrl ? (
          <Image
            src={user.coverImageUrl}
            alt="Capa do Perfil"
            fill
            priority
            className="object-cover opacity-80"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Centralized Avatar & Badges Box */}
      <div className="relative z-10 flex flex-col items-center text-center -mt-16 sm:-mt-20 px-4 max-w-3xl mx-auto">
        {/* Avatar */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-white dark:bg-slate-800 border-4 border-white dark:border-[#090D16] shadow-xl shrink-0">
          <Image
            src={user.avatarUrl}
            alt={user.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="mt-3 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {user.name}
            </h1>

            {/* Verification Badge */}
            {isPro && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1">
                <span>✓</span> {user.creciNumber || 'Imobiliária Credenciada'}
              </span>
            )}

            {isParticular && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-sm flex items-center gap-1">
                <span>👤</span> Particular Auditado (CPF)
              </span>
            )}
          </div>

          {user.title && (
            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 max-w-xl">
              {user.title}
            </p>
          )}

          {/* Location & Meta Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium mt-2">
            <span>📍 Bairro {user.neighborhood} • Vitória da Conquista - BA</span>
            <span>•</span>
            <span>Membro desde {user.memberSince}</span>
          </div>

          {/* Credibility Stats Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
            {user.rating && (
              <span className="font-extrabold px-3 py-1 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                ★ {user.rating.toFixed(1)} (Avaliações Excelentes)
              </span>
            )}
            {user.responseRate && (
              <span className="font-bold px-3 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                ⚡ {user.responseRate}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
