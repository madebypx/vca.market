'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserRole, UserProfile } from '@/types/user';
import { MOCK_USER_PROFILES, MOCK_USER_LISTINGS, MOCK_SAVED_FAVORITES } from '@/data/mockUser';
import { UserProfileHeader } from '@/components/perfil/UserProfileHeader';
import { UserFavoritesTab } from '@/components/perfil/UserFavoritesTab';
import { UserListingsTab } from '@/components/perfil/UserListingsTab';
import { UserLeadsTab } from '@/components/perfil/UserLeadsTab';
import { AnalyticsDashboard } from '@/components/perfil/AnalyticsDashboard';
import { createClient } from '@/lib/supabase/client';

export default function PerfilPage() {
  const router = useRouter();
  const [activeRole, setActiveRole] = useState<UserRole>('particular');
  const [activeTab, setActiveTab] = useState<'favorites' | 'listings' | 'leads' | 'settings'>('listings');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (user) {
          const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Usuário VCA';
          const neighborhood = user.user_metadata?.neighborhood || 'Candeias';
          const phone = user.user_metadata?.phone || user.phone || '(77) 99999-0000';
          const creciNumber = user.user_metadata?.creci_number;

          const profile: UserProfile = {
            id: user.id,
            name,
            email: user.email || '',
            phone,
            avatarUrl: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`,
            neighborhood,
            role: (user.user_metadata?.role as UserRole) || 'particular',
            cpfVerified: true,
            creciNumber,
            memberSince: 'Julho 2026',
            rating: 4.9,
          };
          setUserProfile(profile);
        } else {
          setUserProfile(MOCK_USER_PROFILES['particular']);
        }
      } catch {
        setUserProfile(MOCK_USER_PROFILES['particular']);
      } finally {
        setLoading(false);
      }
    }
    loadSession();
  }, []);

  const currentUser = userProfile || MOCK_USER_PROFILES[activeRole];

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
        <p className="text-xs font-semibold text-slate-500 animate-pulse">Carregando painel do perfil...</p>
      </div>
    );
  }

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
            onClick={() => router.push('/perfil/configuracoes')}
            className="px-4 py-2.5 font-bold text-xs rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all whitespace-nowrap"
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
      </div>
    </div>
  );
}
