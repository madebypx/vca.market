import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MOCK_VEICULOS } from '@/data/mockVeiculos';
import { VeiculoGallery } from '@/components/veiculos/VeiculoGallery';
import { VeiculoFipeMeter } from '@/components/veiculos/VeiculoFipeMeter';
import { VeiculoMaintenanceLog } from '@/components/veiculos/VeiculoMaintenanceLog';
import { VeiculoSpecsGrid } from '@/components/veiculos/VeiculoSpecsGrid';
import { VeiculoContactSidebar } from '@/components/veiculos/VeiculoContactSidebar';
import { VeiculoCard } from '@/components/veiculos/VeiculoCard';

interface VeiculoDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function VeiculoDetailPage({ params }: VeiculoDetailPageProps) {
  const { id } = await params;
  const veiculo = MOCK_VEICULOS.find((v) => v.id === id);

  if (!veiculo) {
    notFound();
  }

  const similarVeiculos = MOCK_VEICULOS.filter(
    (v) => v.id !== veiculo.id && (v.brand === veiculo.brand || v.vehicleType === veiculo.vehicleType)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-3.5 px-4">
        <div className="container mx-auto max-w-6xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/veiculos" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Veículos em Conquista
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate max-w-[200px] sm:max-w-none">
            {veiculo.brand} {veiculo.model}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-6xl p-4 sm:p-6 md:p-8 space-y-8">
        {/* Vehicle Cockpit Title Block */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="font-extrabold uppercase px-3 py-1 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950">
              {veiculo.brand}
            </span>

            <span className="font-bold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              Ano {veiculo.yearModel}
            </span>

            <span className="font-bold px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {veiculo.mileageKm.toLocaleString('pt-BR')} km
            </span>

            {veiculo.plateEnd && (
              <span className="font-semibold text-slate-500 dark:text-slate-400">
                • {veiculo.plateEnd}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {veiculo.title}
          </h1>
        </div>

        {/* FIPE Opportunity Meter */}
        <VeiculoFipeMeter veiculo={veiculo} />

        {/* Content Grid (Gallery + Maintenance Log + Specs vs Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <VeiculoGallery veiculo={veiculo} />

            {/* Maintenance Log & Health Status Dossier */}
            <VeiculoMaintenanceLog veiculo={veiculo} />

            {/* Performance & Tech Specs Grid */}
            <VeiculoSpecsGrid veiculo={veiculo} />
          </div>

          {/* Right Negotiation Sidebar */}
          <div className="lg:col-span-1">
            <VeiculoContactSidebar veiculo={veiculo} />
          </div>
        </div>

        {/* Similar Vehicles in Conquista */}
        {similarVeiculos.length > 0 && (
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  Outros Veículos Semelhantes em Vitória da Conquista
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Opções da mesma marca ({veiculo.brand}) ou segmento em VCA.
                </p>
              </div>

              <Link
                href="/veiculos"
                className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline hidden sm:block"
              >
                Ver todos os veículos →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarVeiculos.map((v) => (
                <VeiculoCard key={v.id} veiculo={v} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
