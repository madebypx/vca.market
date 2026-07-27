'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUpWithEmail } from '@/app/actions/auth';

export default function CadastroPage() {
  const router = useRouter();
  const [accountType, setAccountType] = useState<'particular' | 'pro'>('particular');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [neighborhood, setNeighborhood] = useState('Candeias');
  const [submitting, setSubmitting] = useState(false);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    const result = await signUpWithEmail(email, password, fullName, phone, neighborhood);
    setSubmitting(false);

    if (result.success) {
      router.push('/login?message=Conta+criada+com+sucesso!+Faça+login+agora.');
    } else {
      setErrorMsg(result.error || 'Erro ao criar conta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Conquista<span className="text-emerald-500">Market</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Criar sua Conta no Ecossistema de VCA
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Anuncie produtos, imóveis, veículos ou serviços para milhares de moradores.
          </p>
        </div>

        {/* Account Type Selector Cards */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div
            onClick={() => setAccountType('particular')}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              accountType === 'particular'
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white shadow-sm'
                : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700'
            }`}
          >
            <div className="text-xl mb-1">🏠</div>
            <h3 className="font-bold">Morador Particular</h3>
            <p className={`text-[11px] mt-0.5 ${accountType === 'particular' ? 'opacity-80' : 'text-slate-500 dark:text-slate-400'}`}>
              Para quem quer desapegar ou vender esporadicamente em VCA.
            </p>
          </div>

          <div
            onClick={() => setAccountType('pro')}
            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
              accountType === 'pro'
                ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white shadow-sm'
                : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700'
            }`}
          >
            <div className="text-xl mb-1">💼</div>
            <h3 className="font-bold">Conquista Pro</h3>
            <p className={`text-[11px] mt-0.5 ${accountType === 'pro' ? 'opacity-80' : 'text-slate-500 dark:text-slate-400'}`}>
              Corretores (CRECI), lojas, oficinas e prestadores de serviço.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Nome Completo / Razão Social *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex: Carlos Eduardo ou Imobiliária Candeias"
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                WhatsApp (DDD 77) *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(77) 99988-7766"
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Seu Bairro em VCA *
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
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
              E-mail *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu.email@exemplo.com"
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Crie sua Senha *
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-sm disabled:opacity-50 text-xs"
          >
            {submitting ? 'Criando Conta...' : 'Finalizar Cadastro Gratuito'}
          </button>
          
          {errorMsg && (
            <p className="text-xs font-semibold text-center px-3 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 mt-4">
              {errorMsg}
            </p>
          )}
        </form>

        {/* Footer Link to Login */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          Já possui uma conta?{' '}
          <Link
            href="/login"
            className="font-bold text-slate-900 dark:text-white hover:underline"
          >
            Fazer Login
          </Link>
        </div>
      </div>
    </div>
  );
}
