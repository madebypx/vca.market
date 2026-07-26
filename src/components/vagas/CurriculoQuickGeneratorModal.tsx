'use client';

import React, { useState } from 'react';

interface CurriculoQuickGeneratorModalProps {
  jobTitle: string;
  companyName: string;
  recruiterPhone?: string;
  onClose: () => void;
}

export const CurriculoQuickGeneratorModal: React.FC<CurriculoQuickGeneratorModalProps> = ({
  jobTitle,
  companyName,
  recruiterPhone = '5577999887766',
  onClose,
}) => {
  const [candidateName, setCandidateName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [experienceText, setExperienceText] = useState('');
  const [educationText, setEducationText] = useState('');
  const [availability, setAvailability] = useState('Imediata');

  const handleSendCurriculo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim()) return;

    const cleanPhone = recruiterPhone.replace(/\D/g, '');
    const phone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

    const text = `📄 *Candidatura VCA Market — ${jobTitle}* (${companyName})

👤 *Candidato:* ${candidateName}
📍 *Bairro:* ${neighborhood} — Vitória da Conquista
⏱️ *Disponibilidade:* ${availability}

🎓 *Formação / Cursos:*
${educationText || 'Ensino Médio Completo / Cursos Profissionalizantes'}

💼 *Experiência Profissional Recente:*
${experienceText || 'Experiência em atendimento e vendas no comércio de Conquista.'}

---
_Candidatura gerada via Conquista Market (vca.market)_`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <form
        onSubmit={handleSendCurriculo}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-2xl space-y-4"
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Gerador de Currículo Rápido
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Candidatar-se a: {jobTitle}
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
              Seu Nome Completo *
            </label>
            <input
              type="text"
              required
              value={candidateName}
              onChange={(e) => setCandidateName(e.target.value)}
              placeholder="Ex: João da Silva Santos"
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Seu Bairro em VCA
              </label>
              <input
                type="text"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                placeholder="Ex: Candeias"
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Disponibilidade
              </label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              >
                <option value="Imediata">Imediata</option>
                <option value="Turno da Manhã">Turno da Manhã</option>
                <option value="Turno da Tarde/Noite">Turno Tarde/Noite</option>
                <option value="Em 15 Dias">Em 15 Dias</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Formação / Cursos Principais
            </label>
            <textarea
              rows={2}
              value={educationText}
              onChange={(e) => setEducationText(e.target.value)}
              placeholder="Ex: Ensino Médio Completo + Curso de Atendimento Comercial e Informática"
              className="w-full p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Experiência Profissional Recente
            </label>
            <textarea
              rows={3}
              value={experienceText}
              onChange={(e) => setExperienceText(e.target.value)}
              placeholder="Ex: 2 anos como vendedor interno em loja de calçados no Centro de Vitória da Conquista."
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
            💬 Enviar Currículo no WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};
