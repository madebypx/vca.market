'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    category: '🔐 Conta & Acesso',
    items: [
      {
        q: 'Como faço login no Conquista Market?',
        a: 'Acesse a página de Login e informe seu número de celular ou e-mail. Você receberá um código de acesso único (OTP) para entrar. Não é necessário criar senha.',
      },
      {
        q: 'Posso ter mais de um perfil na plataforma?',
        a: 'Sim! Você pode ter um perfil pessoal de morador e um perfil profissional (imobiliária, loja ou empresa). Alterne entre eles pelo menu de perfil no cabeçalho do site.',
      },
      {
        q: 'Como atualizo meu nome, foto ou bairro?',
        a: 'Acesse Configurações da Conta em /perfil/configuracoes e edite seus dados. Alterações em dados de verificação (CPF ou CRECI) passam por revisão da equipe VCA.',
      },
    ],
  },
  {
    category: '📢 Publicar Anúncios em VCA',
    items: [
      {
        q: 'Como publico meu primeiro anúncio?',
        a: 'Clique no botão "+ Anunciar" no cabeçalho e siga as 5 etapas do formulário: escolha a categoria (Imóvel, Veículo, Serviço, Produto ou Vaga), preencha os detalhes e envie. Seu anúncio passa por moderação automática e estará visível em até 24h.',
      },
      {
        q: 'Quantos anúncios posso publicar gratuitamente?',
        a: 'No plano gratuito, moradores verificados podem publicar até 3 anúncios ativos simultaneamente. Assinantes Conquista Pro têm anúncios ilimitados, destaque premium e acesso ao painel analítico de leads.',
      },
      {
        q: 'Posso editar ou excluir meu anúncio depois de publicado?',
        a: 'Sim! Acesse "Meu Painel & Anúncios" no menu de perfil, localize o anúncio e clique em Editar ou Excluir. Alterações de preço ficam registradas no histórico de variação de valor.',
      },
    ],
  },
  {
    category: '🛡️ Selos de Verificação (CRECI & CPF)',
    items: [
      {
        q: 'O que é o Selo Conquista Pro CRECI-BA?',
        a: 'É o selo de maior confiança da plataforma, exclusivo para corretores de imóveis credenciados com registro ativo no CRECI-BA. O corretor envia o número de registro e nossa equipe valida diretamente no portal do CRECI. O processo leva até 48h.',
      },
      {
        q: 'Como solicito o Selo Morador Verificado (CPF)?',
        a: 'Acesse Configurações da Conta e clique em "Solicitar Verificação de CPF". Você enviará uma foto do documento e o processo é feito de forma segura e criptografada. A aprovação leva até 24h.',
      },
      {
        q: 'Meu CPF ou CRECI ficam visíveis para os compradores?',
        a: 'Não. Apenas o número parcialmente mascarado e o status de verificação são exibidos publicamente. Os documentos completos são mantidos de forma privada e protegida pela nossa política de dados.',
      },
    ],
  },
  {
    category: '🚨 Segurança & Anti-Fraude',
    items: [
      {
        q: 'Como denuncio um anúncio suspeito ou golpe?',
        a: 'Em qualquer página de detalhe de anúncio, clique no botão "Denunciar Anúncio" (ícone de bandeira). Escolha o motivo (Golpe, Preço Irreal, Dados Falsos, Duplicado) e envie. Nossa equipe analisa em até 4 horas.',
      },
      {
        q: 'O Conquista Market garante as transações entre compradores e vendedores?',
        a: 'O Conquista Market é uma plataforma de conexão e não intermedia pagamentos. Recomendamos sempre realizar o primeiro contato pelo WhatsApp da plataforma, verificar os selos de confiança do anunciante e preferir transações presenciais em locais públicos em Vitória da Conquista.',
      },
    ],
  },
];

export default function AjudaPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--color-primary)] via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center space-y-4">
          <span className="text-3xl">❓</span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Como podemos ajudar você em<br />
            <span className="text-[var(--color-accent-green)]">Vitória da Conquista?</span>
          </h1>
          <p className="text-sm font-medium text-slate-300 max-w-xl mx-auto">
            Encontre respostas rápidas sobre o Conquista Market — publicar anúncios, verificação de documentos, segurança e muito mais.
          </p>

          {/* Support CTA */}
          <a
            href="https://wa.me/5577999991122?text=Olá!%20Preciso%20de%20ajuda%20com%20o%20Conquista%20Market%20(vca.market)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-accent-green)] hover:bg-emerald-500 text-slate-950 text-xs font-extrabold py-2.5 px-5 rounded-full shadow-lg transition-colors mt-2"
          >
            <span>💬 Falar com Suporte Humano no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto max-w-3xl px-4 py-10 space-y-8">
        {FAQ_ITEMS.map((section) => (
          <div key={section.category} className="space-y-3">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
              {section.category}
            </h2>

            <div className="space-y-2">
              {section.items.map((item, idx) => {
                const key = `${section.category}-${idx}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : key)}
                      className="w-full flex items-center justify-between gap-3 p-4 text-left"
                    >
                      <span className="text-xs font-bold text-slate-900 dark:text-white leading-snug">
                        {item.q}
                      </span>
                      <span
                        className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-6 text-center space-y-3">
          <p className="text-sm font-bold text-white">Não encontrou o que procurava?</p>
          <p className="text-xs text-slate-400">Nossa equipe em Vitória da Conquista está disponível de segunda a sábado das 8h às 18h.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-1">
            <a
              href="https://wa.me/5577999991122"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[var(--color-accent-green)] hover:bg-emerald-500 text-slate-950 text-xs font-extrabold rounded-xl transition-colors"
            >
              💬 WhatsApp Suporte VCA
            </a>
            <Link
              href="/anunciar"
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-colors"
            >
              ➕ Publicar Meu Anúncio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
