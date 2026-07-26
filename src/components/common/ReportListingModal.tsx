'use client';

import React, { useState } from 'react';

interface ReportListingModalProps {
  listingTitle: string;
  onClose: () => void;
}

export const ReportListingModal: React.FC<ReportListingModalProps> = ({
  listingTitle,
  onClose,
}) => {
  const [reason, setReason] = useState('preco_irrealista');
  const [details, setDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
              Segurança & Moderação VCA
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Denunciar Anúncio Suspeito
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

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <p className="text-slate-600 dark:text-slate-400">
              Anúncio: <strong className="text-slate-900 dark:text-white">{listingTitle}</strong>
            </p>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Motivo da Denúncia *
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
              >
                <option value="preco_irrealista">🚨 Preço Suspeito / Tentativa de Golpe</option>
                <option value="telefone_falso">📞 Telefone / WhatsApp Inexistente ou Incorreto</option>
                <option value="dados_falsos">❌ Foto ou Informações Falsas</option>
                <option value="ja_vendido">✅ Produto/Imóvel já foi Vendido</option>
                <option value="duplicado">📑 Anúncio Duplicado</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Detalhes Adicionais (Opcional)
              </label>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Descreva observações para a equipe de moderação de Vitória da Conquista..."
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-xl shadow-xs disabled:opacity-50"
              >
                {submitting ? 'Enviando...' : 'Enviar Denúncia'}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <span className="text-4xl">🛡️</span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Denúncia Recebida com Sucesso
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
              Obrigado por ajudar a manter a comunidade de Vitória da Conquista segura! Nossa moderação analisará este anúncio em breve.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl"
            >
              Fechar Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
