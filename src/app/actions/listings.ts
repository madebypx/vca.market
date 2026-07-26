'use server';

import { createClient } from '@/lib/supabase/server';
import { Listing, CategoryId } from '@/types/database';
import { MOCK_IMOVEIS } from '@/data/mockImoveis';
import { MOCK_VEICULOS } from '@/data/mockVeiculos';
import { MOCK_SERVICOS } from '@/data/mockServicos';
import { MOCK_PRODUTOS } from '@/data/mockComercio';
import { MOCK_VAGAS } from '@/data/mockVagas';
import { revalidatePath } from 'next/cache';

export async function getListings(params?: {
  category?: CategoryId;
  neighborhood?: string;
  query?: string;
}): Promise<Listing[]> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      return getMockListings(params?.category);
    }

    const supabase = await createClient();
    let query = supabase.from('listings').select('*').eq('status', 'active');

    if (params?.category) {
      query = query.eq('category_id', params.category);
    }

    if (params?.neighborhood && params.neighborhood !== 'Todo Vitória da Conquista') {
      query = query.eq('neighborhood', params.neighborhood);
    }

    if (params?.query) {
      query = query.ilike('title', `%${params.query}%`);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      return getMockListings(params?.category);
    }

    return data as Listing[];
  } catch {
    return getMockListings(params?.category);
  }
}

export async function getListingById(id: string): Promise<Listing | null> {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
      const allMocks = getMockListings();
      return allMocks.find((item) => item.id === id) || null;
    }

    const supabase = await createClient();
    const { data, error } = await supabase
      .from('listings')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !data) {
      const allMocks = getMockListings();
      return allMocks.find((item) => item.id === id) || null;
    }

    return data as Listing;
  } catch {
    const allMocks = getMockListings();
    return allMocks.find((item) => item.id === id) || null;
  }
}

export async function createListing(listingData: Omit<Listing, 'id' | 'created_at' | 'updated_at'>) {
  const supabase = await createClient();
  const { data, error } = await supabase.from('listings').insert([listingData]).select().single();

  if (error) {
    throw new Error(`Erro ao criar anúncio: ${error.message}`);
  }

  revalidatePath('/[category]', 'page');
  revalidatePath('/');
  return data as Listing;
}

export async function updateListingStatus(id: string, status: 'active' | 'paused' | 'sold') {
  const supabase = await createClient();
  const { error } = await supabase.from('listings').update({ status }).eq('id', id);

  if (error) {
    throw new Error(`Erro ao atualizar status do anúncio: ${error.message}`);
  }

  revalidatePath('/perfil');
  revalidatePath('/');
}

export async function updateListing(id: string, listingData: Partial<Listing>) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('listings')
    .update(listingData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw new Error(`Erro ao editar anúncio: ${error.message}`);
  }

  revalidatePath('/perfil');
  revalidatePath('/[category]', 'page');
  return data as Listing;
}

export async function deleteListing(id: string) {
  const supabase = await createClient();
  const { error } = await supabase.from('listings').delete().eq('id', id);

  if (error) {
    throw new Error(`Erro ao deletar anúncio: ${error.message}`);
  }

  revalidatePath('/perfil');
  revalidatePath('/');
}


function getMockListings(category?: CategoryId): Listing[] {
  const adaptImoveis = MOCK_IMOVEIS.map((item) => ({
    id: item.id,
    user_id: 'usr-mock-001',
    category_id: 'imoveis' as CategoryId,
    title: item.title,
    description: item.description,
    price: item.price,
    neighborhood: item.neighborhood,
    images: [item.imageUrl, ...(item.galleryImages || [])],
    status: 'active' as const,
    is_featured: true,
    category_attributes: {
      property_type: item.propertyType,
      transaction_type: item.transactionType,
      usable_area_m2: item.usableAreaM2,
      bedrooms: item.bedrooms,
      bathrooms: item.bathrooms,
      parking_spots: item.parkingSpots,
      condo_fee: item.condoFee,
      creci_number: item.creciNumber,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  const adaptVeiculos = MOCK_VEICULOS.map((item) => ({
    id: item.id,
    user_id: 'usr-mock-002',
    category_id: 'veiculos' as CategoryId,
    title: item.title,
    description: item.title,
    price: item.price,
    neighborhood: item.neighborhood,
    images: [item.imageUrl],
    status: 'active' as const,
    is_featured: item.sellerType === 'loja',
    category_attributes: {
      brand: item.brand,
      model: item.model,
      year: parseInt(item.yearModel, 10) || 2022,
      mileage_km: item.mileageKm,
      transmission: item.transmission as 'automatico' | 'manual',
      fuel: item.fuel as 'flex' | 'gasolina' | 'diesel' | 'eletrico',
      fipe_price_reference: item.fipeReferencePrice,
      has_cautelar_approved: item.hasCautelarApproved,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  const adaptServicos = MOCK_SERVICOS.map((item) => ({
    id: item.id,
    user_id: 'usr-mock-003',
    category_id: 'servicos' as CategoryId,
    title: item.providerName,
    description: item.description,
    price: 0,
    neighborhood: item.neighborhood,
    images: [item.portfolioImage],
    status: 'active' as const,
    is_featured: item.verificationTier === 'gold',
    category_attributes: {
      specialty: item.specialty,
      home_service_available: item.homeServiceAvailable,
      pricing_model: 'orcamento_gratis' as const,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  const adaptComercio = MOCK_PRODUTOS.map((item) => ({
    id: item.id,
    user_id: 'usr-mock-004',
    category_id: 'comercio' as CategoryId,
    title: item.title,
    description: item.title,
    price: item.price,
    neighborhood: item.pickupLocation,
    images: [item.imageUrl],
    status: 'active' as const,
    is_featured: false,
    category_attributes: {
      condition: item.condition as 'novo' | 'seminovo' | 'usado',
      has_warranty: item.hasWarranty,
      pickup_location: item.pickupLocation,
      delivery_available: item.hasDeliveryMotoboy,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  const adaptVagas = MOCK_VAGAS.map((item) => ({
    id: item.id,
    user_id: 'usr-mock-005',
    category_id: 'vagas' as CategoryId,
    title: item.title,
    description: item.description,
    price: 0,
    neighborhood: item.neighborhood,
    images: [],
    status: 'active' as const,
    is_featured: false,
    category_attributes: {
      job_title: item.title,
      work_model: item.workModel as 'presencial' | 'hibrido' | 'remoto',
      contract_type: item.contractType as 'clt' | 'pj' | 'estagio',
      salary_range: item.salaryRange,
    },
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }));

  const all = [...adaptImoveis, ...adaptVeiculos, ...adaptServicos, ...adaptComercio, ...adaptVagas];

  if (category) {
    return all.filter((item) => item.category_id === category);
  }

  return all;
}
