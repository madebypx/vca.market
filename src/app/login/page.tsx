'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendOtpToPhone } from '@/app/actions/auth';

export default function LoginPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('otp');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitting(true);
    setMessage(null);

    try {
      await sendOtpToPhone(phone);
      setOtpSent(true);
      setMessage('Código de verificação enviado para o seu WhatsApp com sucesso!');
    } catch {
      setMessage('Código simulado gerado para ambiente local. Digite 123456 para acessar.');
      setOtpSent(true);
    } finally {
      setSubmitting(false);
    }
  };


  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulação de login bem-sucedido
    setTimeout(() => {
      setSubmitting(false);
      router.push('/perfil');
    }, 800);
  };

  const handlePasswordLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      router.push('/perfil');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Conquista<span className="text-emerald-500">Market</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Acessar sua Conta
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Conecte-se para gerenciar seus anúncios e responder a leads em Vitória da Conquista.
          </p>
        </div>

        {/* Method Selector Tabs */}
        <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setAuthMethod('otp');
              setMessage(null);
            }}
            className={`py-2 rounded-lg transition-all ${
              authMethod === 'otp'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            💬 Código WhatsApp / OTP
          </button>

          <button
            type="button"
            onClick={() => {
              setAuthMethod('password');
              setMessage(null);
            }}
            className={`py-2 rounded-lg transition-all ${
              authMethod === 'password'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
            }`}
          >
            🔑 E-mail & Senha
          </button>
        </div>

        {/* OTP Auth Form */}
        {authMethod === 'otp' && (
          <>
            {!otpSent ? (
              <form onSubmit={handleSendOTP} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Número do WhatsApp (DDD 77)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(77) 99988-7766"
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-sm disabled:opacity-50 text-xs"
                >
                  {submitting ? 'Enviando Código...' : 'Receber Código no WhatsApp'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Digite o Código de 6 Dígitos
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="123456"
                    className="w-full p-3 text-center tracking-widest text-lg font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-sm text-xs"
                >
                  {submitting ? 'Verificando...' : 'Confirmar e Entrar'}
                </button>
              </form>
            )}
          </>
        )}

        {/* E-mail & Password Form */}
        {authMethod === 'password' && (
          <form onSubmit={handlePasswordLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                E-mail Cadastrado
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Sua Senha
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-sm text-xs"
            >
              {submitting ? 'Entrando...' : 'Entrar na Conta'}
            </button>
          </form>
        )}

        {message && (
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 text-center">
            {message}
          </p>
        )}

        {/* Footer Link to Signup */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          Ainda não tem conta?{' '}
          <Link
            href="/cadastro"
            className="font-bold text-slate-900 dark:text-white hover:underline"
          >
            Cadastrar-se Gratuitamente
          </Link>
        </div>
      </div>
    </div>
  );
}
