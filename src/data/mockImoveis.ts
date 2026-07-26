export interface ImovelItem {
  id: string;
  title: string;
  transactionType: 'venda' | 'aluguel';
  propertyType: 'apartamento' | 'casa' | 'terreno' | 'comercial';
  price: number;
  condoFee?: number;
  neighborhood: string;
  address: string;
  usableAreaM2: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpots: number;
  creciNumber: string;
  agencyName: string;
  verificationTier: 'gold' | 'platinum' | 'silver';
  imageUrl: string;
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
    neighborhood: 'Candeias',
    address: 'Av. Olivia Flores - Candeias',
    usableAreaM2: 92,
    bedrooms: 3,
    bathrooms: 2,
    parkingSpots: 2,
    creciNumber: 'CRECI-BA 4921',
    agencyName: 'VCA Imóveis Credenciados',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    lat: -14.8642,
    lng: -40.8351,
  },
  {
    id: 'imv-002',
    title: 'Casa Duplex no Recreio com Suíte Master e Quintal Amplo',
    transactionType: 'venda',
    propertyType: 'casa',
    price: 720000,
    neighborhood: 'Recreio',
    address: 'Rua Recreio - Recreio',
    usableAreaM2: 180,
    bedrooms: 4,
    bathrooms: 3,
    parkingSpots: 3,
    creciNumber: 'CRECI-BA 8820',
    agencyName: 'Imobiliária Conquista Prime',
    verificationTier: 'gold',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
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
    address: 'Praça Barão do Rio Branco - Centro',
    usableAreaM2: 65,
    bedrooms: 2,
    bathrooms: 1,
    parkingSpots: 1,
    creciNumber: 'CRECI-BA 1042',
    agencyName: 'Central de Imóveis VCA',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
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
    address: 'Loteamento Boa Vista',
    usableAreaM2: 360,
    bedrooms: 0,
    bathrooms: 0,
    parkingSpots: 0,
    creciNumber: 'CRECI-BA 7712',
    agencyName: 'Solidez Terrenos & Construções',
    verificationTier: 'silver',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
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
    address: 'Av. São Geraldo - Alto Maron',
    usableAreaM2: 45,
    bedrooms: 0,
    bathrooms: 1,
    parkingSpots: 1,
    creciNumber: 'CRECI-BA 4921',
    agencyName: 'VCA Imóveis Credenciados',
    verificationTier: 'platinum',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    lat: -14.8480,
    lng: -40.8320,
  },
];
