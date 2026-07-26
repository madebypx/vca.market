-- Initial Schema Migration for VCA Market (vca.market)

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Verification Tier Enum
CREATE TYPE verification_tier_enum AS ENUM ('basic', 'resident', 'business', 'partner_pro');

-- 3. Listing Status Enum
CREATE TYPE listing_status_enum AS ENUM ('draft', 'active', 'paused', 'sold', 'flagged');

-- 4. Profiles Table (extending auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone_whatsapp TEXT,
    cpf_cnpj TEXT,
    verification_tier verification_tier_enum DEFAULT 'basic',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Store Profiles Table
CREATE TABLE IF NOT EXISTS public.store_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    store_name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    neighborhood TEXT NOT NULL,
    address_street TEXT,
    has_physical_store BOOLEAN DEFAULT false,
    business_hours JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY, -- 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas'
    name TEXT NOT NULL,
    attribute_schema JSONB DEFAULT '{}'::jsonb
);

-- Seed Categories
INSERT INTO public.categories (id, name) VALUES
('imoveis', 'Imóveis'),
('veiculos', 'Veículos'),
('servicos', 'Serviços'),
('comercio', 'Comércio e Produtos'),
('vagas', 'Vagas de Emprego')
ON CONFLICT (id) DO NOTHING;

-- 7. Listings Table
CREATE TABLE IF NOT EXISTS public.listings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    store_id UUID REFERENCES public.store_profiles(id) ON DELETE SET NULL,
    category_id TEXT NOT NULL REFERENCES public.categories(id),
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(12, 2) DEFAULT 0.00,
    neighborhood TEXT NOT NULL,
    images TEXT[] DEFAULT '{}',
    status listing_status_enum DEFAULT 'active',
    is_featured BOOLEAN DEFAULT false,
    category_attributes JSONB DEFAULT '{}'::jsonb NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Lead Events Table
CREATE TABLE IF NOT EXISTS public.lead_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    listing_id UUID NOT NULL REFERENCES public.listings(id) ON DELETE CASCADE,
    buyer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    lead_type TEXT NOT NULL, -- 'whatsapp' | 'call' | 'quote_request'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 9. Favorites Table
CREATE TABLE IF NOT EXISTS public.favorites (
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    listing_id UUID NOT NULL REFERENCES public.listings(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    PRIMARY KEY (user_id, listing_id)
);

-- 10. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_listings_neighborhood ON public.listings(neighborhood);
CREATE INDEX IF NOT EXISTS idx_listings_cat_status ON public.listings(category_id, status) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS idx_listings_attributes ON public.listings USING GIN (category_attributes);
CREATE INDEX IF NOT EXISTS idx_listings_price ON public.listings(price);

-- 11. Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lead_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Public Read Policies
CREATE POLICY "Public read listings" ON public.listings FOR SELECT USING (status = 'active');
CREATE POLICY "Public read store profiles" ON public.store_profiles FOR SELECT USING (true);
CREATE POLICY "Public read categories" ON public.categories FOR SELECT USING (true);

-- User Authenticated Policies
CREATE POLICY "Users can manage own profile" ON public.profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "Store owners can manage own store" ON public.store_profiles FOR ALL USING (auth.uid() = owner_id);
CREATE POLICY "Users can manage own listings" ON public.listings FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own favorites" ON public.favorites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Any authenticated user can create lead events" ON public.lead_events FOR INSERT WITH CHECK (true);
