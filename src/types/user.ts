export type UserRole = 'common' | 'particular' | 'pro';

export interface UserSocials {
  instagram?: string;
  linkedin?: string;
  website?: string;
  whatsapp?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  title?: string;
  bio?: string;
  email: string;
  phone: string;
  neighborhood: string;
  avatarUrl: string;
  coverImageUrl?: string;
  role: UserRole;
  cpfVerified?: boolean;
  creciNumber?: string;
  companyName?: string;
  cnpj?: boolean;
  memberSince: string;
  rating?: number;
  responseRate?: string;
  socials?: UserSocials;
}

export interface UserListing {
  id: string;
  title: string;
  category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
  priceOrSalary: string;
  neighborhood: string;
  status: 'active' | 'paused' | 'pending';
  viewsCount: number;
  whatsappClicks: number;
  createdAt: string;
  imageUrl: string;
}

export interface SavedFavorite {
  id: string;
  title: string;
  category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
  priceOrSalary: string;
  neighborhood: string;
  imageUrl: string;
  link: string;
}
