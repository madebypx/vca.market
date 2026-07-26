export interface ProdutoItem {
  id: string;
  title: string;
  category: 'tech' | 'moda' | 'casa' | 'esportes' | 'outros';
  condition: 'novo' | 'usado';
  hasWarranty: boolean;
  price: number;
  originalPrice?: number;
  pickupLocation: string;
  hasDeliveryMotoboy: boolean;
  storeName: string;
  isPhysicalStore: boolean;
  verificationTier: 'gold' | 'silver' | 'platinum';
  verificationLabel: string;
  imageUrl: string;
}

export const MOCK_PRODUTOS: ProdutoItem[] = [
  {
    id: 'prd-001',
    title: 'iPhone 13 128GB Estelar Seminovo com Nota e Garantia',
    category: 'tech',
    condition: 'usado',
    hasWarranty: true,
    price: 3200,
    originalPrice: 3800,
    pickupLocation: 'Centro / Bairro Brasil',
    hasDeliveryMotoboy: true,
    storeName: 'CellTech Conquista',
    isPhysicalStore: true,
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Conquistense',
    imageUrl: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prd-002',
    title: 'Cadeira Gamer Ergonômica Reclinável Preta e Azul',
    category: 'casa',
    condition: 'novo',
    hasWarranty: true,
    price: 890,
    originalPrice: 1100,
    pickupLocation: 'Bairro Brasil',
    hasDeliveryMotoboy: true,
    storeName: 'Móveis & Cia VCA',
    isPhysicalStore: true,
    verificationTier: 'gold',
    verificationLabel: '✓ Loja Física Verificada',
    imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prd-003',
    title: 'Tênis Esportivo Running Amortecimento Pro',
    category: 'esportes',
    condition: 'novo',
    hasWarranty: true,
    price: 299,
    pickupLocation: 'Centro',
    hasDeliveryMotoboy: true,
    storeName: 'Conquista Sports',
    isPhysicalStore: true,
    verificationTier: 'platinum',
    verificationLabel: '✓ Parceiro Oficial Pro',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prd-004',
    title: 'Smart TV 50" 4K UHD Wi-Fi HDR10+ Com Controle Smart',
    category: 'tech',
    condition: 'novo',
    hasWarranty: true,
    price: 2150,
    originalPrice: 2490,
    pickupLocation: 'Shopping Conquista Sul',
    hasDeliveryMotoboy: false,
    storeName: 'Eletro VCA Megastore',
    isPhysicalStore: true,
    verificationTier: 'gold',
    verificationLabel: '✓ Empresa Conquistense',
    imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'prd-005',
    title: 'Jaqueta de Couro Legítimo Masculina Estilo Motoqueiro',
    category: 'moda',
    condition: 'usado',
    hasWarranty: false,
    price: 180,
    pickupLocation: 'Candeias',
    hasDeliveryMotoboy: true,
    storeName: 'Lucas Desapegos VCA',
    isPhysicalStore: false,
    verificationTier: 'silver',
    verificationLabel: '✓ Morador Verificado',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
  },
];
