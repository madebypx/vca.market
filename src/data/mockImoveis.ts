export interface ImovelItem {
  id: string;
  title: string;
  transactionType: 'venda' | 'aluguel';
  propertyType: 'apartamento' | 'casa' | 'terreno' | 'comercial';
  price: number;
  condoFee?: number;
  iptuAnnual?: number;
  neighborhood: string;
  address: string;
  usableAreaM2: number;
  bedrooms: number;
  suites?: number;
  bathrooms: number;
  parkingSpots: number;
  creciNumber: string;
  agencyName: string;
  verificationTier: 'gold' | 'platinum' | 'silver';
  imageUrl: string;
  galleryImages?: string[];
  description?: string;
  features?: string[];
  lat: number;
  lng: number;
}

export const MOCK_IMOVEIS: ImovelItem[] = [
  {
    id: 'imv-001',
    title: 'Apartamento de Alto Padrão no Candeias com Varanda Gourmet',
    transactionType: 'venda',
    propertyType: 'apartamento',
    price: 480000,
    condoFee: 550,
    iptuAnnual: 1200,
    neighborhood: 'Candeias',
    address: 'Av. Olívia Flores - Candeias, Vitória da Conquista - BA',
    usableAreaM2: 92,
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parkingSpots: 2,
    creciNumber: 'CRECI-BA 4921',
    agencyName: 'VCA Imóveis Credenciados',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Espetacular apartamento localizado no coração do bairro Candeias, próximo às melhores faculdades e à Avenida Olívia Flores. Conta com finíssimo acabamento em porcelanato, sala integrada em 2 ambientes, ampla varanda gourmet com churrasqueira a carvão e vista panorâmica para a cidade.',
    features: [
      'Varanda Gourmet com Churrasqueira',
      'Piso em Porcelanato 80x80',
      'Armários Planejados na Cozinha e Suíte',
      'Portaria 24h com Reconhecimento Facial',
      'Salão de Festas Climatizado',
      '2 Vagas Cobertas e Soltas',
    ],
    lat: -14.8642,
    lng: -40.8351,
  },
  {
    id: 'imv-002',
    title: 'Casa Duplex no Recreio com Suíte Master e Quintal Amplo',
    transactionType: 'venda',
    propertyType: 'casa',
    price: 720000,
    iptuAnnual: 1800,
    neighborhood: 'Recreio',
    address: 'Rua Recreio - Recreio, Vitória da Conquista - BA',
    usableAreaM2: 180,
    bedrooms: 4,
    suites: 2,
    bathrooms: 3,
    parkingSpots: 3,
    creciNumber: 'CRECI-BA 8820',
    agencyName: 'Imobiliária Conquista Prime',
    verificationTier: 'gold',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Linda casa duplex em rua estritamente residencial no Recreio. Possui quintal privativo ideal para instalação de piscina ou área gourmet personalizada, suíte master com closet e varanda privativa.',
    features: [
      'Quintal Privativo de 60m²',
      'Suíte Master com Closet',
      'Cozinha Americana com Ilha',
      'Portão Eletrônico e Cerca Elétrica',
      'Área de Serviço Separada',
    ],
    lat: -14.8598,
    lng: -40.8410,
  },
  {
    id: 'imv-003',
    title: 'Apartamento Comercial/Residencial no Centro de VCA',
    transactionType: 'aluguel',
    propertyType: 'apartamento',
    price: 1800,
    condoFee: 220,
    neighborhood: 'Centro',
    address: 'Praça Barão do Rio Branco - Centro, Vitória da Conquista - BA',
    usableAreaM2: 65,
    bedrooms: 2,
    suites: 0,
    bathrooms: 1,
    parkingSpots: 1,
    creciNumber: 'CRECI-BA 1042',
    agencyName: 'Central de Imóveis VCA',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Ótima localização no centro comercial de Vitória da Conquista, ideal tanto para residência quanto para escritório ou consultório.',
    features: [
      'Localização Estratégica no Centro',
      'Condomínio Barato',
      'Vaga de Garagem Coberta',
      'Interfone e Segurança',
    ],
    lat: -14.8510,
    lng: -40.8390,
  },
  {
    id: 'imv-004',
    title: 'Terreno Plano Pronto para Construir no Boa Vista',
    transactionType: 'venda',
    propertyType: 'terreno',
    price: 195000,
    neighborhood: 'Boa Vista',
    address: 'Loteamento Boa Vista, Vitória da Conquista - BA',
    usableAreaM2: 360,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpots: 0,
    creciNumber: 'CRECI-BA 7712',
    agencyName: 'Solidez Terrenos & Construções',
    verificationTier: 'silver',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Excelente terreno estritamente plano com 12m de frente por 30m de fundos no loteamento Boa Vista, com asfalto, água, luz e esgoto na porta.',
    features: [
      'Topografia 100% Plana',
      'Rua Asfaltada e Iluminada',
      'Documentação 100% Escriturada',
      'Pronto para Financiamento',
    ],
    lat: -14.8720,
    lng: -40.8290,
  },
  {
    id: 'imv-005',
    title: 'Sala Comercial Pronta para Consultório no Alto Maron',
    transactionType: 'aluguel',
    propertyType: 'comercial',
    price: 2200,
    condoFee: 350,
    neighborhood: 'Alto Maron',
    address: 'Av. São Geraldo - Alto Maron, Vitória da Conquista - BA',
    usableAreaM2: 45,
    bedrooms: 0,
    bathrooms: 1,
    parkingSpots: 1,
    creciNumber: 'CRECI-BA 4921',
    agencyName: 'VCA Imóveis Credenciados',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Sala comercial pronta para uso médico, odontológico ou escritório advocatício em prédio empresarial com recepção e elevadores.',
    features: [
      'Prédio Empresarial com Recepção',
      '2 Elevadores de Alta Velocidade',
      'Piso Elevado para Cabeamento',
      'Ponto de Água Extra na Sala',
    ],
    lat: -14.8480,
    lng: -40.8320,
  },
];
