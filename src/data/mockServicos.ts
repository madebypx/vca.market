export interface ServicoItem {
  id: string;
  providerName: string;
  specialty: string;
  categoryTag: string;
  rating: number;
  reviewCount: number;
  homeServiceAvailable: boolean;
  freeQuoteAvailable: boolean;
  estimatedPrice: string;
  neighborhood: string;
  verificationTier: 'gold' | 'silver' | 'platinum';
  verificationLabel: string;
  portfolioImage: string;
  description: string;
}

export const MOCK_SERVICOS: ServicoItem[] = [
  {
    id: 'srv-001',
    providerName: 'Marcos Refrigeração & Climatização',
    specialty: 'Instalação, Limpeza e Manutenção de Ar Condicionado',
    categoryTag: 'Refrigeração',
    rating: 4.9,
    reviewCount: 42,
    homeServiceAvailable: true,
    freeQuoteAvailable: true,
    estimatedPrice: 'Sob Orçamento Grátis',
    neighborhood: 'Recreio',
    verificationTier: 'silver',
    verificationLabel: '✓ Morador Verificado',
    portfolioImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Mais de 8 anos de experiência em Vitória da Conquista com limpeza higienizadora e instalação de Split residencial e comercial.',
  },
  {
    id: 'srv-002',
    providerName: 'Conquista Elétrica & Automação',
    specialty: 'Instalações Elétricas Residenciadais e Comerciais',
    categoryTag: 'Eletricista',
    rating: 4.8,
    reviewCount: 35,
    homeServiceAvailable: true,
    freeQuoteAvailable: true,
    estimatedPrice: 'A partir de R$ 150',
    neighborhood: 'Candeias',
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa de Serviços',
    portfolioImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80',
    description: 'Instalação de quadros de distribuição, iluminação de LED, padrão Coelba e manutenção preventiva urgente.',
  },
  {
    id: 'srv-003',
    providerName: 'Studio Pinturas & Acabamentos VCA',
    specialty: 'Pintura Residencial, Texturas e Efeito Cimento Queimado',
    categoryTag: 'Pintura',
    rating: 5.0,
    reviewCount: 19,
    homeServiceAvailable: true,
    freeQuoteAvailable: true,
    estimatedPrice: 'Sob Orçamento',
    neighborhood: 'Centro',
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Conquistense',
    portfolioImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    description: 'Equipe especializada em finos acabamentos internos e externos, massa corrida, impermeabilização e cimento queimado.',
  },
  {
    id: 'srv-004',
    providerName: 'Doutor Celular & TI Conquista',
    specialty: 'Reparo Rápido de Smartphones, Notebooks e Placas',
    categoryTag: 'TI & Celulares',
    rating: 4.9,
    reviewCount: 58,
    homeServiceAvailable: false,
    freeQuoteAvailable: true,
    estimatedPrice: 'A partir de R$ 80',
    neighborhood: 'Bairro Brasil',
    verificationTier: 'platinum',
    verificationLabel: '✓ Loja Física Verificada',
    portfolioImage: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=800&q=80',
    description: 'Troca de tela, bateria e reparo de placa no mesmo dia no Bairro Brasil com garantia de 6 meses.',
  },
  {
    id: 'srv-005',
    providerName: 'Express Limpeza & Sanitização',
    specialty: 'Higienização de Sofás, Colchões e Estofados Automotivos',
    categoryTag: 'Limpeza',
    rating: 4.7,
    reviewCount: 29,
    homeServiceAvailable: true,
    freeQuoteAvailable: true,
    estimatedPrice: 'A partir de R$ 120',
    neighborhood: 'Boa Vista',
    verificationTier: 'silver',
    verificationLabel: '✓ Morador Verificado',
    portfolioImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description: 'Lavagem a seco profunda com eliminação de ácaros e bactérias. Atendimento em todos os bairros de VCA.',
  },
];
