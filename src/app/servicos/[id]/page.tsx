import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_SERVICOS } from '@/data/mockServicos';
import { ServicoCard } from '@/components/servicos/ServicoCard';
import { TrustBadge } from '@/components/common/TrustBadge';

interface ServicoDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServicoDetailPage({ params }: ServicoDetailPageProps) {
  const { id } = await params;
  const servico = MOCK_SERVICOS.find((s) => s.id === id);

  if (!servico) {
    notFound();
  }

  const similarServicos = MOCK_SERVICOS.filter(
    (s) => s.id !== servico.id && (s.categoryTag === servico.categoryTag || s.neighborhood === servico.neighborhood)
  ).slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Olá ${servico.providerName}! Vi seu perfil de "${servico.specialty}" no Conquista Market (vca.market) e gostaria de solicitar um orçamento/agendamento para Vitória da Conquista.`
  );
  const whatsappUrl = `https://wa.me/5577999998877?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-3.5 px-4">
        <div className="container mx-auto max-w-5xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/servicos" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Serviços em VCA
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate">
            {servico.providerName}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 space-y-8">
        {/* Header Block */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shrink-0 shadow-md">
              <Image src={servico.portfolioImage} alt={servico.providerName} fill className="object-cover" />
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {servico.categoryTag}
                </span>

                <TrustBadge type="verified_resident" customLabel={servico.verificationLabel} />
              </div>

              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                {servico.providerName}
              </h1>

              <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                {servico.specialty}
              </p>

              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-1">
                <span className="text-amber-500 font-bold">★ {servico.rating.toFixed(1)} ({servico.reviewCount} avaliações)</span>
                <span>•</span>
                <span>📍 Bairro {servico.neighborhood}</span>
              </div>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-2xl shadow-md hover:shadow-lg transition-all text-center whitespace-nowrap"
          >
            💬 Solicitar Orçamento no WhatsApp
          </a>
        </div>

        {/* Core Attributes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">🏡</span>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Atendimento em Domicílio</span>
              <span className="text-slate-500 dark:text-slate-400">
                {servico.homeServiceAvailable ? 'Disponível em todos os bairros de VCA' : 'Apenas no estabelecimento'}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">📋</span>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Orçamento sem Compromisso</span>
              <span className="text-slate-500 dark:text-slate-400">
                {servico.freeQuoteAvailable ? 'Avaliação grátis presencial ou foto' : 'Consulte taxas prévias'}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex items-center gap-3">
            <span className="text-2xl">💰</span>
            <div>
              <span className="block font-bold text-slate-900 dark:text-white">Valor Estimado</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">
                {servico.estimatedPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Portfolio & Description */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span>🖼️</span> Galeria do Portfólio & Trabalhos Realizados
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Fotos reais de serviços executados em residências e comércios de Vitória da Conquista.
            </p>
          </div>

          <div className="relative w-full h-[260px] sm:h-[340px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xs">
            <Image src={servico.portfolioImage} alt="Portfólio de Trabalho" fill className="object-cover" />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Sobre o Profissional</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              {servico.description}
            </p>
          </div>
        </div>

        {/* Similar Providers */}
        {similarServicos.length > 0 && (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Outros Prestadores de Serviços em Vitória da Conquista
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarServicos.map((s) => (
                <ServicoCard key={s.id} servico={s} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
