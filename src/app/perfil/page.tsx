'use client';

import { useState } from 'react';
import { UserRole } from '@/types/user';
import { MOCK_USER_PROFILES, MOCK_USER_LISTINGS, MOCK_SAVED_FAVORITES } from '@/data/mockUser';
import { UserProfileHeader } from '@/components/perfil/UserProfileHeader';
import { UserFavoritesTab } from '@/components/perfil/UserFavoritesTab';
import { UserListingsTab } from '@/components/perfil/UserListingsTab';
import { UserLeadsTab } from '@/components/perfil/UserLeadsTab';
import { ProUpgradeBanner } from '@/components/perfil/ProUpgradeBanner';
import { AnalyticsDashboard } from '@/components/perfil/AnalyticsDashboard';


export default function PerfilPage() {
  const [activeRole, setActiveRole] = useState<UserRole>('particular');
  const [activeTab, setActiveTab] = useState<'favorites' | 'listings' | 'leads' | 'settings'>('listings');

  // Select profile data dynamically based on activeRole
  const currentUser = MOCK_USER_PROFILES[activeRole];

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Page Header Container */}
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 md:p-8 flex flex-col gap-6">
        {/* User Header with Role Switcher */}
        <UserProfileHeader
          user={currentUser}
          activeRole={activeRole}
          onRoleChange={(newRole) => {
            setActiveRole(newRole);
            if (newRole === 'common' && activeTab === 'listings') {
              setActiveTab('favorites');
            }
          }}
        />

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none pb-1">
          {activeRole !== 'common' && (
            <button
              onClick={() => setActiveTab('listings')}
              className={`px-4 py-2.5 font-bold text-xs rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'listings'
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              📋 Meus Anúncios ({MOCK_USER_LISTINGS.length})
            </button>
          )}

          <button
            onClick={() => setActiveTab('favorites')}
            className={`px-4 py-2.5 font-bold text-xs rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'favorites'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ⭐ Favoritos Salvos ({MOCK_SAVED_FAVORITES.length})
          </button>

          {activeRole !== 'common' && (
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2.5 font-bold text-xs rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'leads'
                  ? 'bg-[var(--color-primary)] text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              💬 Leads & Desempenho (WhatsApp)
            </button>
          )}

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 font-bold text-xs rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'settings'
                ? 'bg-[var(--color-primary)] text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            ⚙️ Configurações da Conta
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'listings' && activeRole !== 'common' && (
          <UserListingsTab listings={MOCK_USER_LISTINGS} role={activeRole} />
        )}

        {activeTab === 'favorites' && (
          <UserFavoritesTab favorites={MOCK_SAVED_FAVORITES} />
        )}

        {activeTab === 'leads' && activeRole !== 'common' && (
          <div className="space-y-8">
            {activeRole === 'pro' && <AnalyticsDashboard />}
            <UserLeadsTab role={activeRole} />
          </div>
        )}


        {activeTab === 'settings' && (
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col gap-4 my-4">
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Dados da Conta & Preferências em Vitória da Conquista
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Nome Completo</label>
                <input
                  type="text"
                  readOnly
                  value={currentUser.name}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">E-mail Cadastrado</label>
                <input
                  type="text"
                  readOnly
                  value={currentUser.email}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">WhatsApp de Contato</label>
                <input
                  type="text"
                  readOnly
                  value={currentUser.phone}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 font-bold mb-1">Bairro de Residência</label>
                <input
                  type="text"
                  readOnly
                  value={`Bairro ${currentUser.neighborhood}`}
                  className="w-full bg-slate-100 dark:bg-slate-700 border-none rounded-xl px-3 py-2 text-slate-800 dark:text-slate-200 font-medium"
                />
              </div>
            </div>
          </div>
        )}

        {/* Upgrade Banner for Non-Pro accounts */}
        {activeRole !== 'pro' && <ProUpgradeBanner />}
      </div>
    </div>
  );
}
