'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { updateUserProfile } from '@/app/actions/auth';

export default function AccountSettingsPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [creciNumber, setCreciNumber] = useState('');
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    async function loadUserData() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          router.push('/login');
          return;
        }

        setEmail(user.email || '');
        setFullName(user.user_metadata?.full_name || '');
        setPhone(user.user_metadata?.phone || user.phone || '');
        setNeighborhood(user.user_metadata?.neighborhood || 'Candeias');
        setCreciNumber(user.user_metadata?.creci_number || '');
      } catch {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    loadUserData();
  }, [router]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    const result = await updateUserProfile({
      fullName,
      phone,
      neighborhood,
      creciNumber,
    });

    setSaving(false);

    if (result.success) {
      setMessage({
        text: 'Configurações atualizadas com sucesso!',
        type: 'success',
      });
    } else {
      setMessage({
        text: result.error || 'Erro ao salvar alterações.',
        type: 'error',
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
        <p className="text-xs font-semibold text-slate-500 animate-pulse">Carregando configurações da conta...</p>
      </div>
    );
  }

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
                E-mail de Notificação (Somente Leitura)
              </label>
              <input
                type="email"
                disabled
                value={email}
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm cursor-not-allowed"
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

          {message && (
            <p className={`text-xs font-semibold text-center p-3 rounded-xl ${
              message.type === 'error'
                ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
                : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400'
            }`}>
              {message.text}
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
