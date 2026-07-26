'use client';

import React, { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { getListingById, updateListing } from '@/app/actions/listings';
import { Listing, ListingStatus } from '@/types/database';

export default function EditarAnuncioPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [status, setStatus] = useState<ListingStatus>('active');

  useEffect(() => {
    async function loadData() {
      const data = await getListingById(resolvedParams.id);
      if (data) {
        setTitle(data.title);
        setPrice(data.price.toString());
        setDescription(data.description || '');
        setNeighborhood(data.neighborhood || 'Candeias');
        setStatus(data.status);
      }
      setLoading(false);
    }
    loadData();
  }, [resolvedParams.id]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await updateListing(resolvedParams.id, {
        title,
        price: parseFloat(price) || 0,
        description,
        neighborhood,
        status,
      } as Partial<Listing>);

      router.push('/perfil');
    } catch {
      alert('Erro ao atualizar anúncio.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
        <div className="text-slate-500 font-semibold text-xs animate-pulse">
          Carregando dados do anúncio...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            Edição de Anúncio
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Atualizar Informações do Anúncio
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Título do Anúncio *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preço (R$) *
              </label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Status do Anúncio
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ListingStatus)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              >
                <option value="active">🟢 Ativo (Publicado)</option>
                <option value="paused">🟡 Pausado (Oculto)</option>
                <option value="sold">✅ Vendido (Finalizado)</option>
              </select>

            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Bairro em Vitória da Conquista
            </label>
            <select
              value={neighborhood}
              onChange={(e) => setNeighborhood(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
            >
              <option value="Candeias">Candeias</option>
              <option value="Recreio">Recreio</option>
              <option value="Centro">Centro</option>
              <option value="Bairro Brasil">Bairro Brasil</option>
              <option value="Alto Maron">Alto Maron</option>
              <option value="Boa Vista">Boa Vista</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Descrição
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => router.push('/perfil')}
              className="px-4 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="px-6 py-2.5 rounded-xl font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm disabled:opacity-50"
            >
              {submitting ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
