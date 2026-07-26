'use client';

import React, { useState } from 'react';

interface CreateDemandaModalProps {
  onClose: () => void;
  onSuccess: (newDemanda: {
    title: string;
    category: 'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas';
    neighborhood: string;
    budgetText: string;
    description: string;
  }) => void;
}

export const CreateDemandaModal: React.FC<CreateDemandaModalProps> = ({
  onClose,
  onSuccess,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<'imoveis' | 'veiculos' | 'servicos' | 'comercio' | 'vagas'>('imoveis');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [budgetText, setBudgetText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSuccess({
      title,
      category,
      neighborhood,
      budgetText,
      description,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Procuro em Vitória da Conquista
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Publicar Novo Pedido no Mural
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-base font-bold"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              O que você está procurando? *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Procuro casa de 3 quartos no Candeias ou Recreio"
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Categoria
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as unknown as 'imoveis')}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="imoveis">🏡 Imóveis</option>
                <option value="veiculos">🚗 Veículos</option>
                <option value="servicos">🛠️ Serviços</option>
                <option value="comercio">🛍️ Comércio</option>
                <option value="vagas">💼 Vagas</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Bairro em Conquista
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Candeias">Candeias</option>
                <option value="Recreio">Recreio</option>
                <option value="Centro">Centro</option>
                <option value="Bairro Brasil">Bairro Brasil</option>
                <option value="Alto Maron">Alto Maron</option>
                <option value="Boa Vista">Boa Vista</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Orçamento Limite Estimado
            </label>
            <input
              type="text"
              value={budgetText}
              onChange={(e) => setBudgetText(e.target.value)}
              placeholder="Ex: Até R$ 2.000 / mês ou Orçamento até R$ 500"
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Detalhes Adicionais
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Descreva detalhes específicos da sua necessidade..."
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-xs"
          >
            Publicar Pedido
          </button>
        </div>
      </form>
    </div>
  );
};
