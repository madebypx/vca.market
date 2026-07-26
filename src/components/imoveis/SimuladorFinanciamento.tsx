'use client';

import React, { useState } from 'react';

interface SimuladorFinanciamentoProps {
  propertyPrice: number;
  listingTitle: string;
  sellerPhone?: string;
}

export const SimuladorFinanciamento: React.FC<SimuladorFinanciamentoProps> = ({
  propertyPrice,
  listingTitle,
  sellerPhone = '5577999999999',
}) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [termMonths, setTermMonths] = useState<number>(360); // 30 anos (360 meses)
  const [systemType, setSystemType] = useState<'SAC' | 'PRICE'>('SAC');

  // Cálculos de Financiamento
  const downPaymentValue = (propertyPrice * downPaymentPercent) / 100;
  const financedValue = Math.max(0, propertyPrice - downPaymentValue);

  // Taxa de juros anual estimada Caixa (8.9% a.a. = ~0.714% a.m.)
  const monthlyRate = 0.089 / 12;

  let initialInstallment = 0;

  if (systemType === 'SAC') {
    const principalAmortization = financedValue / termMonths;
    const firstMonthInterest = financedValue * monthlyRate;
    initialInstallment = principalAmortization + firstMonthInterest;
  } else {
    // Tabela Price: R = P * [i / (1 - (1+i)^-n)]
    initialInstallment =
      (financedValue * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
      (Math.pow(1 + monthlyRate, termMonths) - 1);
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  const handleSendSimulationToWhatsapp = () => {
    const cleanPhone = sellerPhone.replace(/\D/g, '');
    const phone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

    const text = `Olá! Fiz uma simulação de financiamento imobiliário para o anúncio "${listingTitle}":
- Valor do Imóvel: ${formatCurrency(propertyPrice)}
- Entrada (${downPaymentPercent}%): ${formatCurrency(downPaymentValue)}
- Financiado (${termMonths} meses - ${systemType}): ${formatCurrency(financedValue)}
- Parcela Inicial Estimada: ${formatCurrency(initialInstallment)}/mês.

Gostaria de agendar uma visita e analisar as condições de aprovação!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Simulador de Crédito Imobiliário Caixa / SFH
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Simular Parcela para Este Imóvel
          </h3>
        </div>

        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg self-start">
          <button
            type="button"
            onClick={() => setSystemType('SAC')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              systemType === 'SAC'
                ? 'bg-emerald-500 text-slate-950'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tabela SAC (Decrescente)
          </button>
          <button
            type="button"
            onClick={() => setSystemType('PRICE')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
              systemType === 'PRICE'
                ? 'bg-emerald-500 text-slate-950'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Tabela Price (Fixa)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Controles da Simulação */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Entrada Inicial ({downPaymentPercent}%)</span>
              <span className="font-bold text-emerald-400">{formatCurrency(downPaymentValue)}</span>
            </div>
            <input
              type="range"
              min={10}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300 font-medium">Prazo de Financiamento</span>
              <span className="font-bold text-white">{termMonths / 12} Anos ({termMonths} Meses)</span>
            </div>
            <input
              type="range"
              min={120}
              max={420}
              step={60}
              value={termMonths}
              onChange={(e) => setTermMonths(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Resumo & Resultado */}
        <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs text-slate-400">1ª Parcela Estimada ({systemType})</span>
            <div className="text-3xl font-extrabold text-emerald-400 mt-0.5">
              {formatCurrency(initialInstallment)}
              <span className="text-xs text-slate-400 font-normal"> / mês</span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-700/60 text-xs text-slate-300">
              <div>
                <span className="block text-slate-400">Valor Financiado:</span>
                <strong className="text-white">{formatCurrency(financedValue)}</strong>
              </div>
              <div>
                <span className="block text-slate-400">Taxa Estimada:</span>
                <strong className="text-white">8.9% a.a. + TR</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSendSimulationToWhatsapp}
            className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <span>💬 Enviar Simulação ao Corretor via WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
