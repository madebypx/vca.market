'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sendOtpToPhone, verifyOtpCode, sendMagicLinkEmail, signInWithEmail } from '@/app/actions/auth';

type AuthMethod = 'otp' | 'magic' | 'password';

export default function LoginPage() {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<AuthMethod>('otp');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [magicSent, setMagicSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isDemo, setIsDemo] = useState(false);

  // ─── OTP via Phone ──────────────────────────────────────────────────────────

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;
    setSubmitting(true);
    setMessage(null);

    const result = await sendOtpToPhone(phone);
    setSubmitting(false);
    setOtpSent(true);

    if (result.isDemo) {
      setIsDemo(true);
      setMessage({
        text: 'Modo demo ativo: use o código 123456 para acessar.',
        type: 'success',
      });
    } else if (result.success) {
      setMessage({
        text: 'Código enviado para o seu WhatsApp! Verifique as mensagens.',
        type: 'success',
      });
    } else {
      setMessage({ text: result.error || 'Erro ao enviar código. Tente novamente.', type: 'error' });
      setOtpSent(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const result = await verifyOtpCode(phone, otpCode);
    setSubmitting(false);

    if (result.success) {
      router.push('/perfil');
    } else {
      setMessage({ text: result.error || 'Código inválido. Tente novamente.', type: 'error' });
    }
  };

  // ─── Magic Link via Email ───────────────────────────────────────────────────

  const handleSendMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitting(true);
    setMessage(null);

    const result = await sendMagicLinkEmail(email);
    setSubmitting(false);

    if (result.isDemo) {
      setIsDemo(true);
      setMagicSent(true);
      setMessage({
        text: 'Modo demo: em produção, um link de acesso seria enviado para o seu e-mail.',
        type: 'success',
      });
    } else if (result.success) {
      setMagicSent(true);
      setMessage({
        text: 'Link de acesso enviado! Verifique sua caixa de entrada e clique no link.',
        type: 'success',
      });
    } else {
      setMessage({ text: result.error || 'Erro ao enviar link. Tente novamente.', type: 'error' });
    }
  };

  // ─── Email + Password ───────────────────────────────────────────────────────

  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const result = await signInWithEmail(email, password);
    setSubmitting(false);

    if (result.success) {
      router.push('/perfil');
    } else {
      setMessage({ text: result.error || 'Credenciais inválidas. Tente novamente.', type: 'error' });
    }
  };

  const resetForm = () => {
    setOtpSent(false);
    setMagicSent(false);
    setMessage(null);
    setOtpCode('');
    setIsDemo(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Conquista<span className="text-emerald-500">Market</span>
          </Link>
          <h1 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Acessar sua Conta
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Conecte-se para gerenciar seus anúncios em Vitória da Conquista.
          </p>
        </div>

        {/* Method Selector */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold">
          {(
            [
              { id: 'otp', label: '💬 WhatsApp' },
              { id: 'magic', label: '✉️ E-mail' },
              { id: 'password', label: '🔑 Senha' },
            ] as { id: AuthMethod; label: string }[]
          ).map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => { setAuthMethod(m.id); resetForm(); }}
              className={`py-2 rounded-lg transition-all ${
                authMethod === m.id
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* ── OTP Form ── */}
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
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Enviando Código...' : 'Receber Código no WhatsApp'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Código de 6 Dígitos {isDemo && <span className="text-amber-500">(Demo: use 123456)</span>}
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="w-full p-3 text-center tracking-widest text-lg font-bold rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting || otpCode.length < 6}
                  className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Verificando...' : 'Confirmar e Entrar'}
                </button>
                <button type="button" onClick={resetForm} className="w-full text-xs text-slate-400 hover:text-slate-600 pt-1">
                  ← Usar outro número
                </button>
              </form>
            )}
          </>
        )}

        {/* ── Magic Link Form ── */}
        {authMethod === 'magic' && (
          <>
            {!magicSent ? (
              <form onSubmit={handleSendMagicLink} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Seu E-mail de Acesso
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com.br"
                    className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {submitting ? 'Enviando Link...' : 'Enviar Link Mágico de Acesso'}
                </button>
                <p className="text-[11px] text-slate-400 text-center">
                  Você receberá um link seguro por e-mail. Não é necessário criar senha.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-3 py-4">
                <span className="text-4xl block">📬</span>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {isDemo ? 'Demo: link seria enviado para' : 'Link enviado para'}
                </p>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 break-all">{email}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Verifique sua caixa de entrada e a pasta de spam. O link expira em 1 hora.
                </p>
                <button type="button" onClick={resetForm} className="text-xs text-slate-400 hover:text-slate-600">
                  Tentar com outro e-mail
                </button>
              </div>
            )}
          </>
        )}

        {/* ── Email + Password Form ── */}
        {authMethod === 'password' && (
          <form onSubmit={handlePasswordLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                E-mail
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com.br"
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Senha
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
              className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
            >
              {submitting ? 'Entrando...' : 'Entrar na Conta'}
            </button>
          </form>
        )}

        {/* Feedback Message */}
        {message && (
          <p className={`text-xs font-semibold text-center px-3 py-2 rounded-xl ${
            message.type === 'error'
              ? 'bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400'
              : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400'
          }`}>
            {message.text}
          </p>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
          Ainda não tem conta?{' '}
          <Link href="/cadastro" className="font-bold text-slate-900 dark:text-white hover:underline">
            Cadastrar-se Gratuitamente
          </Link>
        </div>
      </div>
    </div>
  );
}
