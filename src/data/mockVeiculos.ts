export interface VeiculoItem {
  id: string;
  title: string;
  vehicleType: 'carro' | 'moto' | 'utilitario';
  brand: string;
  model: string;
  yearModel: string;
  price: number;
  fipeReferencePrice: number;
  mileageKm: number;
  transmission: 'automatico' | 'manual';
  fuel: 'flex' | 'gasolina' | 'diesel' | 'eletrico';
  hasCautelarApproved: boolean;
  neighborhood: string;
  sellerName: string;
  verificationTier: 'gold' | 'silver' | 'platinum';
  sellerType: 'loja' | 'particular';
  imageUrl: string;

  // Atributos Estendidos para Experiência Automotiva Dedicada
  color?: string;
  plateEnd?: string;
  ipvaStatus?: string;
  singleOwner?: boolean;
  dealerWarranty?: boolean;

  // Dossiê de Manutenção & Saúde do Veículo
  lastOilChange?: {
    date: string;
    km: number;
    specification: string;
  };
  lastRevision?: {
    date: string;
    km: number;
    location: string;
    specification?: string;
  };

  tiresCondition?: string;
  batteryStatus?: string;

  // Desempenho & Recursos de Série
  engineSpec?: string;
  horsepower?: string;
  urbanConsumption?: string;
  highwayConsumption?: string;
  featuresList?: string[];
  galleryImages?: string[];
}

export const MOCK_VEICULOS: VeiculoItem[] = [
  {
    id: 'vec-001',
    title: 'Toyota Corolla XEi 2.0 Flex 16V Automático',
    vehicleType: 'carro',
    brand: 'Toyota',
    model: 'Corolla',
    yearModel: '2022/2022',
    price: 112000,
    fipeReferencePrice: 115500,
    mileageKm: 45000,
    transmission: 'automatico',
    fuel: 'flex',
    hasCautelarApproved: true,
    neighborhood: 'Centro',
    sellerName: 'Conquista Seminovos',
    verificationTier: 'gold',
    sellerType: 'loja',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    color: 'Prata Nevoa',
    plateEnd: 'Final 8 — IPVA 2026 Pago',
    singleOwner: true,
    dealerWarranty: true,
    lastOilChange: {
      date: '10/05/2026',
      km: 42500,
      specification: 'Óleo 5W30 Sintético Toyota + Filtro de Ar e Lubrificante',
    },
    lastRevision: {
      date: '15/03/2026',
      km: 40000,
      specification: 'Revisão dos 40k realizada na Concessionária Toyota VCA',
      location: 'Concessionária Diamantina VCA',
    },
    tiresCondition: 'Pneus Michelin 85% de borracha útil (Trocados em Jan/2026)',
    batteryStatus: 'Bateria Moura 60Ah na Garantia de Fábrica até Mar/2027',
    engineSpec: '2.0 Dual VVT-iE 16V Flex',
    horsepower: '177 cv (Etanol) / 169 cv (Gasolina)',
    urbanConsumption: '11,6 km/l (Gasolina)',
    highwayConsumption: '13,9 km/l (Gasolina)',
    featuresList: [
      'Câmbio Direct Shift CVT 10 Marchas',
      'Central Multimídia Toyota Play 8" com CarPlay/Android Auto',
      '7 Airbags de Série & Controle de Estabilidade VSC',
      'Ar-Condicionado Digital Automático',
      'Rodas de Liga Leve Aro 17 Dual Tone',
      'Faróis em LED com DRL Diurno',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'vec-002',
    title: 'Jeep Compass Longitude 1.3 Turbo Flex Automático',
    vehicleType: 'carro',
    brand: 'Jeep',
    model: 'Compass',
    yearModel: '2023/2023',
    price: 139900,
    fipeReferencePrice: 144000,
    mileageKm: 28000,
    transmission: 'automatico',
    fuel: 'flex',
    hasCautelarApproved: true,
    neighborhood: 'Candeias',
    sellerName: 'VCA Motors VIP',
    verificationTier: 'platinum',
    sellerType: 'loja',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    color: 'Preto Carbon',
    plateEnd: 'Final 5 — IPVA 2026 Pago',
    singleOwner: true,
    dealerWarranty: true,
    lastOilChange: {
      date: '20/06/2026',
      km: 27000,
      specification: 'Óleo 0W20 Mopar + Filtros de Cabine e Motor',
    },
    lastRevision: {
      date: '20/06/2026',
      km: 27000,
      specification: 'Revisão dos 30k antecipada na Jeep Conquista',
      location: 'Jeep Conquista VIP',
    },
    tiresCondition: 'Pneus Pirelli Scorpion 90% de borracha (Originais)',
    batteryStatus: 'Bateria Heliar EFB Start-Stop na Garantia',
    engineSpec: 'T270 1.3 Turbo Flex 185 cv',
    horsepower: '185 cv (Etanol)',
    urbanConsumption: '10,5 km/l (Gasolina)',
    highwayConsumption: '12,8 km/l (Gasolina)',
    featuresList: [
      'Painel 100% Digital HD 10.25"',
      'Central Multimídia Uconnect 10.1" Sem Fio',
      'Bancos em Couro Preto de Fábrica',
      'Rodas de Liga Leve Aro 18"',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'vec-003',
    title: 'Honda CB 500F ABS Vermelha Conservadíssima',
    vehicleType: 'moto',
    brand: 'Honda',
    model: 'CB 500F',
    yearModel: '2021/2021',
    price: 34500,
    fipeReferencePrice: 36000,
    mileageKm: 12500,
    transmission: 'manual',
    fuel: 'gasolina',
    hasCautelarApproved: true,
    neighborhood: 'Bairro Brasil',
    sellerName: 'Rodrigo Motos VCA',
    verificationTier: 'silver',
    sellerType: 'particular',
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    color: 'Vermelho Victory',
    plateEnd: 'Final 2 — IPVA 2026 Pago',
    singleOwner: true,
    lastOilChange: {
      date: '02/07/2026',
      km: 12000,
      specification: 'Óleo Honda 10W30 + Filtro de Óleo Magnetron',
    },
    tiresCondition: 'Pneus Pirelli Diablo Rosso II Novíssimos',
    engineSpec: '471cc Bi-cilíndrico DOHC 50,4 cv',
    horsepower: '50,4 cv',
    urbanConsumption: '23,5 km/l',
    highwayConsumption: '27,0 km/l',
    featuresList: [
      'Freios ABS de Duplo Canal',
      'Painel Digital LCD com Shift Light',
      'Iluminação Full LED',
      'Embreagem Deslizante e Assistida',
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];
