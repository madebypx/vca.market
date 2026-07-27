import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PRODUTOS } from '@/data/mockComercio';
import { ProdutoCard } from '@/components/comercio/ProdutoCard';

interface CommerceDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CommerceDetailPage({ params }: CommerceDetailPageProps) {
  const { id } = await params;
  const produto = MOCK_PRODUTOS.find((p) => p.id === id);

  if (!produto) {
    notFound();
  }

  const similarProdutos = MOCK_PRODUTOS.filter(
    (p) => p.id !== produto.id && (p.category === produto.category || p.pickupLocation === produto.pickupLocation)
  ).slice(0, 3);

  const formattedPrice = `R$ ${produto.price.toLocaleString('pt-BR')}`;
  const formattedOriginal = produto.originalPrice
    ? `R$ ${produto.originalPrice.toLocaleString('pt-BR')}`
    : null;

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no produto "${produto.title}" (Ref: #${produto.id}) no valor de ${formattedPrice} anunciado no Conquista Market (vca.market). Está disponível para entrega/retirada em Vitória da Conquista?`
  );
  const whatsappUrl = `https://wa.me/5577999991122?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 py-3.5 px-4">
        <div className="container mx-auto max-w-5xl flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 overflow-x-auto">
          <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/comercio" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Comércio & Produtos em VCA
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate">
            {produto.title}
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Gallery & Product Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 shadow-md">
              <Image src={produto.imageUrl} alt={produto.title} fill priority className="object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border border-white/20">
                  {produto.condition === 'novo' ? '✨ Produto Novo' : '🔄 Usado em Ótimo Estado'}
                </span>
                {produto.hasWarranty && (
                  <span className="bg-emerald-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                    ✓ Com Garantia
                  </span>
                )}
              </div>
            </div>

            {/* Logistics & Pickup Details */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 space-y-4 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>🚚</span> Entrega & Polo de Retirada em Vitória da Conquista
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Polo de Retirada Física</span>
                  <strong className="text-slate-900 dark:text-white font-extrabold">
                    📍 Bairro {produto.pickupLocation}
                  </strong>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <span className="block text-[10px] font-bold uppercase text-slate-400">Entrega via Motoboy</span>
                  <strong className="text-slate-900 dark:text-white font-extrabold">
                    {produto.hasDeliveryMotoboy ? '🛵 Disponível em toda VCA' : 'Apenas Retirada'}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Price & Negotiation Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                  {produto.storeName}
                </span>
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mt-1">
                  {produto.title}
                </h1>
              </div>

              <div className="space-y-1">
                {formattedOriginal && (
                  <span className="text-xs text-slate-400 line-through block">
                    De: {formattedOriginal}
                  </span>
                )}
                <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                  {formattedPrice}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block pt-0.5">
                  Pagamento à vista via PIX ou em até 12x no cartão de crédito em VCA
                </span>
              </div>

              <hr className="border-slate-100 dark:border-slate-800" />

              {/* Seller Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="flex items-center justify-between font-bold">
                  <span className="text-slate-900 dark:text-white">{produto.storeName}</span>
                  <span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                    {produto.verificationLabel}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                  {produto.isPhysicalStore ? '🏬 Loja Física em Vitória da Conquista' : '👤 Vendedor Particular Auditado'}
                </p>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-4 rounded-2xl text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg text-center"
              >
                <span>💬 Comprar / Reservar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProdutos.length > 0 && (
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white tracking-tight">
              Outros Produtos no Comércio de Vitória da Conquista
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarProdutos.map((p) => (
                <ProdutoCard key={p.id} produto={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

