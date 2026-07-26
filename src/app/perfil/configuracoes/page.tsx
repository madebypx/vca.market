'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AccountSettingsPage() {
  const [fullName, setFullName] = useState('Matheus Oliveira');
  const [phone, setPhone] = useState('(77) 99988-7766');
  const [email, setEmail] = useState('matheus@exemplo.com');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [creciNumber, setCreciNumber] = useState('CRECI-BA 12345');
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMessage(null);

    setTimeout(() => {
      setSaving(false);
      setSuccessMessage('Configurações salvas e solicitação de verificação enviada com sucesso!');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] py-8 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Central da Conta
            </span>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Configurações & Selos de Confiança
            </h1>
          </div>

          <Link
            href="/perfil"
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            ← Voltar ao Perfil
          </Link>
        </div>

        {/* Main Settings Card */}
        <form
          onSubmit={handleSave}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6"
        >
          <div className="space-y-4 text-xs">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              1. Dados Pessoais & Contato
            </h2>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nome Exibido nos Anúncios *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  WhatsApp Principal *
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Bairro de Residência em VCA
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
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                E-mail Notificação
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>
          </div>

          {/* Verification Badges Section */}
          <div className="space-y-4 text-xs pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
              2. Solicitação de Selo de Confiança VCA
            </h2>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Registro Profissional CRECI-BA / CNPJ (Opcional para Pro)
              </label>
              <input
                type="text"
                value={creciNumber}
                onChange={(e) => setCreciNumber(e.target.value)}
                placeholder="Ex: CRECI-BA 12345 ou CNPJ da Loja"
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Comprovante de Residência ou Carteira Profissional (PDF ou Foto)
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs"
              />
              {documentFile && (
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1">
                  ✓ Documento selecionado: {documentFile.name}
                </p>
              )}
            </div>
          </div>

          {successMessage && (
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 text-center bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
              {successMessage}
            </p>
          )}

          <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-xs rounded-xl shadow-sm hover:bg-slate-800 dark:hover:bg-slate-100 disabled:opacity-50 transition-all"
            >
              {saving ? 'Salvando...' : 'Salvar Alterações e Solicitar Selo'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
