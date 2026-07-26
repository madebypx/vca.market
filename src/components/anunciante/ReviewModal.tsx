'use client';

import React, { useState } from 'react';

interface ReviewModalProps {
  sellerName: string;
  onClose: () => void;
  onSubmitSuccess: (newReview: { rating: number; comment: string; reviewerName: string }) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  sellerName,
  onClose,
  onSubmitSuccess,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim() || !reviewerName.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      onSubmitSuccess({
        rating,
        comment,
        reviewerName,
      });
      setSubmitting(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
              Avaliação Comunitária VCA
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Avaliar Atendimento de {sellerName}
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

        <div className="space-y-4 text-xs">
          {/* Star Selection */}
          <div className="text-center space-y-1">
            <span className="block font-semibold text-slate-700 dark:text-slate-300">
              Sua Nota para a Negociação
            </span>
            <div className="flex items-center justify-center gap-2 text-2xl cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`transition-transform hover:scale-125 ${
                    star <= rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
              {rating} de 5 Estrelas
            </p>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Seu Nome *
            </label>
            <input
              type="text"
              required
              value={reviewerName}
              onChange={(e) => setReviewerName(e.target.value)}
              placeholder="Ex: Fernanda Lima (Moradora de VCA)"
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Seu Depoimento sobre o Atendimento / Produto *
            </label>
            <textarea
              rows={3}
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Descreva como foi o atendimento no WhatsApp, pontualidade ou qualidade do produto..."
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
            />
          </div>
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
            className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs disabled:opacity-50"
          >
            {submitting ? 'Enviando...' : 'Publicar Avaliação'}
          </button>
        </div>
      </form>
    </div>
  );
};
