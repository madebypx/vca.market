import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MOCK_IMOVEIS } from '@/data/mockImoveis';
import { ImovelGallery } from '@/components/imoveis/ImovelGallery';
import { ImovelSpecs } from '@/components/imoveis/ImovelSpecs';
import { ImovelContactSidebar } from '@/components/imoveis/ImovelContactSidebar';
import { ImovelCard } from '@/components/imoveis/ImovelCard';

interface ImovelDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ImovelDetailPage({ params }: ImovelDetailPageProps) {
  const { id } = await params;
  const imovel = MOCK_IMOVEIS.find((item) => item.id === id);

  if (!imovel) {
    notFound();
  }

  // Similar properties in VCA
  const similarImoveis = MOCK_IMOVEIS.filter(
    (item) => item.id !== imovel.id && (item.neighborhood === imovel.neighborhood || item.propertyType === imovel.propertyType)
  ).slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Navigation Bar */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800/80 py-3.5 px-4">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/imoveis" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Imóveis em VCA
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate max-w-[200px] sm:max-w-none">
            {imovel.neighborhood}
          </span>
          <span>/</span>
          <span className="text-slate-400 dark:text-slate-500 truncate max-w-[150px] sm:max-w-none">
            {imovel.title}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 md:p-8 flex flex-col gap-8">
        {/* Title Header Block */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              {imovel.propertyType.toUpperCase()}
            </span>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              {imovel.transactionType === 'venda' ? 'Venda' : 'Aluguel'}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              📍 {imovel.address}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            {imovel.title}
          </h1>
        </div>

        {/* Content Layout (Main Details + Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Gallery, Specs & Description */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Gallery */}
            <ImovelGallery imovel={imovel} />

            {/* Technical Specs */}
            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col gap-6">
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>📋</span> Especificações Técnicas
              </h2>
              <ImovelSpecs imovel={imovel} />
            </div>

            {/* Description */}
            {imovel.description && (
              <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col gap-4">
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                  <span>📝</span> Descrição do Imóvel
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal whitespace-pre-line">
                  {imovel.description}
                </p>
              </div>
            )}

            {/* Location & Neighborhood Context */}
            <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col gap-4">
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span>📍</span> Localização & Bairro em Conquista
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Endereço aproximado: <strong className="text-slate-700 dark:text-slate-200">{imovel.address}</strong>
              </p>
              <div className="w-full h-48 rounded-2xl bg-slate-200 dark:bg-slate-700 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 gap-2 border border-slate-300 dark:border-slate-600">
                <span className="text-3xl">🗺️</span>
                <span className="text-xs font-bold">Bairro {imovel.neighborhood} — Vitória da Conquista</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">Coordenadas: ({imovel.lat}, {imovel.lng})</span>
              </div>
            </div>
          </div>

          {/* Right Column: Negotiation Sidebar */}
          <div className="lg:col-span-1">
            <ImovelContactSidebar imovel={imovel} />
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarImoveis.length > 0 && (
          <div className="flex flex-col gap-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Imóveis Semelhantes em Vitória da Conquista
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Outras opções disponíveis no bairro {imovel.neighborhood} ou da mesma categoria.
                </p>
              </div>
              <Link
                href="/imoveis"
                className="text-xs font-bold text-[var(--color-trust-blue)] hover:underline hidden sm:block"
              >
                Ver todos os imóveis →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarImoveis.map((item) => (
                <ImovelCard key={item.id} imovel={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
