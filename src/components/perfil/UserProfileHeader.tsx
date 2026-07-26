'use client';

import Image from 'next/image';
import { UserProfile, UserRole } from '@/types/user';

interface UserProfileHeaderProps {
  user: UserProfile;
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export function UserProfileHeader({ user, activeRole, onRoleChange }: UserProfileHeaderProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col gap-6">
      {/* Top Bar: Profile Details & Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Avatar Frame */}
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 shrink-0">
            <Image
              src={user.avatarUrl}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Identity & Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {user.name}
              </h1>

              {/* Dynamic Badge per Role */}
              {activeRole === 'pro' && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                  <span>✓</span> {user.creciNumber || 'Imobiliária Credenciada'}
                </span>
              )}

              {activeRole === 'particular' && (
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1">
                  <span>👤</span> Particular Auditado (CPF)
                </span>
              )}

              {activeRole === 'common' && (
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                  Consumidor
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <span>📍 Bairro {user.neighborhood} • Vitória da Conquista</span>
              <span>•</span>
              <span>Membro desde {user.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Prototype Role Switcher */}
        <div className="bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700/60 flex flex-col gap-1 shrink-0">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-0.5 text-center">
            🧪 Modos de Teste (Simulador de Nível)
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onRoleChange('common')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeRole === 'common'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              1. Comum
            </button>
            <button
              onClick={() => onRoleChange('particular')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeRole === 'particular'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              2. Particular (CPF)
            </button>
            <button
              onClick={() => onRoleChange('pro')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeRole === 'pro'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              3. Conquista Pro (CRECI)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
