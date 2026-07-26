export type VerificationTier = 'basic' | 'resident' | 'business' | 'partner_pro';
export type ListingStatus = 'draft' | 'active' | 'paused' | 'sold' | 'flagged';
export type CategoryId = 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';

export interface Profile {
  id: string;
  full_name: string;
  phone_whatsapp?: string;
  cpf_cnpj?: string;
  verification_tier: VerificationTier;
  created_at: string;
  updated_at: string;
}

export interface StoreProfile {
  id: string;
  owner_id: string;
  store_name: string;
  slug: string;
  neighborhood: string;
  address_street?: string;
  has_physical_store: boolean;
  business_hours?: Record<string, string>;
  created_at: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  attribute_schema?: Record<string, unknown>;
}

export interface ImoveisAttributes {
  property_type: 'apartamento' | 'casa' | 'terreno' | 'comercial';
  transaction_type: 'venda' | 'aluguel';
  usable_area_m2: number;
  bedrooms: number;
  bathrooms: number;
  parking_spots: number;
  condo_fee?: number;
  creci_number?: string;
}

export interface VeiculosAttributes {
  brand: string;
  model: string;
  year: number;
  mileage_km: number;
  transmission: 'automatico' | 'manual';
  fuel: 'flex' | 'gasolina' | 'diesel' | 'eletrico';
  fipe_price_reference?: number;
  has_cautelar_approved?: boolean;
}

export interface ServicosAttributes {
  specialty: string;
  home_service_available: boolean;
  pricing_model: 'orcamento_gratis' | 'valor_fixo' | 'por_hora';
  estimated_price?: number;
  portfolio_images?: string[];
}

export interface ComercioAttributes {
  condition: 'novo' | 'seminovo' | 'usado';
  has_warranty?: boolean;
  pickup_location?: string;
  delivery_available?: boolean;
}

export interface VagasAttributes {
  job_title: string;
  work_model: 'presencial' | 'hibrido' | 'remoto';
  contract_type: 'clt' | 'pj' | 'estagio';
  salary_range?: string;
}

export type CategoryAttributes =
  | ImoveisAttributes
  | VeiculosAttributes
  | ServicosAttributes
  | ComercioAttributes
  | VagasAttributes;

export interface Listing<T = CategoryAttributes> {
  id: string;
  user_id: string;
  store_id?: string;
  category_id: CategoryId;
  title: string;
  description?: string;
  price: number;
  neighborhood: string;
  images: string[];
  status: ListingStatus;
  is_featured: boolean;
  category_attributes: T;
  created_at: string;
  updated_at: string;
}

export interface LeadEvent {
  id: string;
  listing_id: string;
  buyer_id?: string;
  lead_type: 'whatsapp' | 'call' | 'quote_request';
  created_at: string;
}
