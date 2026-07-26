import { NextRequest, NextResponse } from 'next/server';
import { typesenseClient } from '@/lib/supabase/../typesense/client';
import { getListings } from '@/app/actions/listings';
import { CategoryId } from '@/types/database';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const category = searchParams.get('category') as CategoryId | null;
  const neighborhood = searchParams.get('neighborhood');

  try {
    // Tenta busca ultra-rápida no Typesense se configurado
    const filterBy: string[] = ["status:=active"];

    if (category) {
      filterBy.push(`category_id:=${category}`);
    }

    if (neighborhood && neighborhood !== 'Todo Vitória da Conquista') {
      filterBy.push(`neighborhood:=${neighborhood}`);
    }

    const searchResults = await typesenseClient
      .collections('listings')
      .documents()
      .search({
        q: q || '*',
        query_by: 'title,neighborhood',
        filter_by: filterBy.join(' && '),
        per_page: 20,
      });

    return NextResponse.json({
      source: 'typesense',
      hits: searchResults.hits,
      found: searchResults.found,
      search_time_ms: searchResults.search_time_ms,
    });
  } catch {
    // Fallback gracioso para a consulta local do Supabase / Mocks
    const results = await getListings({
      category: category || undefined,
      neighborhood: neighborhood || undefined,
      query: q || undefined,
    });

    return NextResponse.json({
      source: 'fallback',
      hits: results.map((item) => ({ document: item })),
      found: results.length,
      search_time_ms: 5,
    });
  }
}
