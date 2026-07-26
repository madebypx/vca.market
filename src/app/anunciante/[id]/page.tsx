import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MOCK_USER_PROFILES, MOCK_USER_LISTINGS } from '@/data/mockUser';
import { PublicProfileHeader } from '@/components/anunciante/PublicProfileHeader';
import { PublicProfileSocials } from '@/components/anunciante/PublicProfileSocials';
import { PublicProfileListings } from '@/components/anunciante/PublicProfileListings';

interface AnuncianteProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AnuncianteProfilePage({ params }: AnuncianteProfilePageProps) {
  const { id } = await params;

  // Search user profile by ID across MOCK_USER_PROFILES
  const user = Object.values(MOCK_USER_PROFILES).find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800/80 py-3.5 px-4">
        <div className="container mx-auto max-w-5xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/imoveis" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Anunciantes de VCA
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate">
            {user.name}
          </span>
        </div>
      </div>

      {/* Main Public Profile Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 flex flex-col gap-6">
        {/* Header Centralizado */}
        <PublicProfileHeader user={user} />

        {/* Bio & Social Networks */}
        <PublicProfileSocials user={user} />

        {/* Active Listings Grid */}
        <PublicProfileListings listings={MOCK_USER_LISTINGS} userName={user.name} />
      </div>
    </div>
  );
}
