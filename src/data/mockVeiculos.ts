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
}

export const MOCK_VEICULOS: VeiculoItem[] = [
  {
    id: 'vec-001',
    title: 'Toyota Corolla XEi 2.0 Flex 16V Automatico',
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
  },
  {
    id: 'vec-004',
    title: 'Fiat Strada Freedom 1.3 Flex Cabine Plus',
    vehicleType: 'utilitario',
    brand: 'Fiat',
    model: 'Strada',
    yearModel: '2022/2023',
    price: 78500,
    fipeReferencePrice: 81000,
    mileageKm: 52000,
    transmission: 'manual',
    fuel: 'flex',
    hasCautelarApproved: true,
    neighborhood: 'Recreio',
    sellerName: 'Auto Conquista Multimarcas',
    verificationTier: 'gold',
    sellerType: 'loja',
    imageUrl: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vec-005',
    title: 'Volkswagen Polo Comfortline 1.0 TSI Automático',
    vehicleType: 'carro',
    brand: 'Volkswagen',
    model: 'Polo',
    yearModel: '2020/2020',
    price: 68900,
    fipeReferencePrice: 68500,
    mileageKm: 61000,
    transmission: 'automatico',
    fuel: 'flex',
    hasCautelarApproved: false,
    neighborhood: 'Boa Vista',
    sellerName: 'Carlos Particular',
    verificationTier: 'silver',
    sellerType: 'particular',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
  },
];
