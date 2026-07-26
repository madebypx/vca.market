import Link from 'next/link';

interface ListingMock {
  id: string;
  category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
  title: string;
  price: string;
  neighborhood: string;
  specPill: string;
  sellerName: string;
  verificationType: 'gold' | 'silver' | 'blue';
  verificationLabel: string;
  imageUrl: string;
}

const MOCK_LISTINGS: ListingMock[] = [
  {
    id: 'vca-101',
    category: 'imoveis',
    title: 'Apartamento 3Q (1 Suíte) com Varanda Gourmet',
    price: 'R$ 450.000',
    neighborhood: 'Candeias',
    specPill: '85 m² • 3 qts • 2 vagas',
    sellerName: 'VCA Imóveis Credenciados',
    verificationType: 'blue',
    verificationLabel: '✓ CRECI-BA 4921',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vca-102',
    category: 'veiculos',
    title: 'Toyota Corolla XEi 2.0 Flex Automático',
    price: 'R$ 112.000',
    neighborhood: 'Centro',
    specPill: 'FIPE R$ 115k • 45.000 km • 2022',
    sellerName: 'Conquista Seminovos',
    verificationType: 'gold',
    verificationLabel: '✓ Loja Física Centro',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vca-103',
    category: 'servicos',
    title: 'Instalação e Manutenção Preventiva de Ar Condicionado',
    price: 'Sob Orçamento',
    neighborhood: 'Recreio',
    specPill: '★ 4.9 (38 avaliações) • Atende em Domicílio',
    sellerName: 'Marcos Refrigeração VCA',
    verificationType: 'silver',
    verificationLabel: '✓ Morador Verificado',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vca-104',
    category: 'comercio',
    title: 'iPhone 13 128GB Estelar Seminovo na Caixa',
    price: 'R$ 3.200',
    neighborhood: 'Bairro Brasil',
    specPill: 'Retirada no Bairro Brasil • Gar. 6 Meses',
    sellerName: 'CellTech Conquista',
    verificationType: 'gold',
    verificationLabel: '✓ Empresa Conquistense',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80',
  },
];

export function RecentListings() {
  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-trust-blue)] uppercase tracking-wider mb-1">
              <span>Vitrine Hiperlocal</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Anúncios em Destaque em Vitória da Conquista
            </h2>
          </div>
          <Link
            href="/buscar"
            className="text-xs font-bold text-[var(--color-trust-blue)] hover:underline inline-flex items-center gap-1"
          >
            Ver todos os anúncios &rarr;
          </Link>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_LISTINGS.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Neighborhood Badge (Top Left) */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                    📍 {item.neighborhood}
                  </div>

                  {/* Category Pill Tag (Top Right) */}
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shadow-sm">
                    {item.category}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4">
                  {/* Spec Pill */}
                  <div className="inline-block bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 text-[11px] font-medium px-2.5 py-1 rounded-md mb-2">
                    {item.specPill}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-2 mb-2 group-hover:text-[var(--color-trust-blue)] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Price */}
                  <div className="text-base font-extrabold text-[var(--color-primary)] dark:text-emerald-400 mb-3">
                    {item.price}
                  </div>
                </div>
              </div>

              {/* Seller Identity Footer */}
              <div className="p-4 pt-0 border-t border-slate-100 dark:border-slate-700/40 mt-auto flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 truncate max-w-[130px] font-medium">
                  {item.sellerName}
                </span>

                {/* Verification Badge */}
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                    item.verificationType === 'gold'
                      ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                      : item.verificationType === 'blue'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {item.verificationLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
