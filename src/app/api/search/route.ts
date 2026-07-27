import { NextResponse } from 'next/server';
import { MOCK_IMOVEIS } from '@/data/mockImoveis';
import { MOCK_VEICULOS } from '@/data/mockVeiculos';
import { MOCK_SERVICOS } from '@/data/mockServicos';
import { MOCK_PRODUTOS } from '@/data/mockComercio';
import { MOCK_VAGAS } from '@/data/mockVagas';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  // Filter across 5 verticals
  const imoveis = MOCK_IMOVEIS.filter(
    (i) =>
      i.title.toLowerCase().includes(query) ||
      i.neighborhood.toLowerCase().includes(query) ||
      i.propertyType.toLowerCase().includes(query)
  ).map((i) => ({
    id: i.id,
    title: i.title,
    subtitle: `📍 Bairro ${i.neighborhood} • R$ ${i.price.toLocaleString('pt-BR')}`,
    category: 'Imóveis',
    href: `/imoveis/${i.id}`,
    imageUrl: i.imageUrl,
  }));

  const veiculos = MOCK_VEICULOS.filter(
    (v) =>
      v.title.toLowerCase().includes(query) ||
      v.brand.toLowerCase().includes(query) ||
      v.model.toLowerCase().includes(query) ||
      v.neighborhood.toLowerCase().includes(query)
  ).map((v) => ({
    id: v.id,
    title: v.title,
    subtitle: `🚗 ${v.yearModel} • R$ ${v.price.toLocaleString('pt-BR')}`,
    category: 'Veículos',
    href: `/veiculos/${v.id}`,
    imageUrl: v.imageUrl,
  }));

  const servicos = MOCK_SERVICOS.filter(
    (s) =>
      s.providerName.toLowerCase().includes(query) ||
      s.specialty.toLowerCase().includes(query) ||
      s.neighborhood.toLowerCase().includes(query)
  ).map((s) => ({
    id: s.id,
    title: s.providerName,
    subtitle: `🛠️ ${s.specialty} • ${s.neighborhood}`,
    category: 'Serviços',
    href: `/servicos/${s.id}`,
    imageUrl: s.portfolioImage,
  }));

  const comercio = MOCK_PRODUTOS.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.storeName.toLowerCase().includes(query) ||
      p.pickupLocation.toLowerCase().includes(query)
  ).map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: `🛍️ ${p.storeName} • R$ ${p.price.toLocaleString('pt-BR')}`,
    category: 'Comércio',
    href: `/comercio/${p.id}`,
    imageUrl: p.imageUrl,
  }));

  const vagas = MOCK_VAGAS.filter(
    (v) =>
      v.title.toLowerCase().includes(query) ||
      v.companyName.toLowerCase().includes(query) ||
      v.neighborhood.toLowerCase().includes(query)
  ).map((v) => ({
    id: v.id,
    title: v.title,
    subtitle: `💼 ${v.companyName} • ${v.salaryRange}`,
    category: 'Vagas',
    href: `/vagas/${v.id}`,
    imageUrl: '',
  }));

  const results = [...imoveis, ...veiculos, ...servicos, ...comercio, ...vagas].slice(0, 8);

  return NextResponse.json({ results });
}
