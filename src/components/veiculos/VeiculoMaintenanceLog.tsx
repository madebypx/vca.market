'use client';

import React from 'react';
import { VeiculoItem } from '@/data/mockVeiculos';

interface VeiculoMaintenanceLogProps {
  veiculo: VeiculoItem;
}

export const VeiculoMaintenanceLog: React.FC<VeiculoMaintenanceLogProps> = ({ veiculo }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xs space-y-5">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🛠️</span>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Dossiê de Manutenção & Histórico de Saúde
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Registro auditado de trocas de óleo, revisões e componentes mecânicos.
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          ✓ Veículo Inspecionado
        </span>
      </div>

      {/* Grid of Maintenance Log Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {/* 🛢️ Última Troca de Óleo */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🛢️</span> Última Troca de Óleo
            </span>
            {veiculo.lastOilChange?.date && (
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                {veiculo.lastOilChange.date}
              </span>
            )}
          </div>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            {veiculo.lastOilChange?.specification || 'Troca sintética realizada rigorosamente no prazo.'}
          </p>
          {veiculo.lastOilChange?.km && (
            <span className="inline-block text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
              Realizada aos {veiculo.lastOilChange.km.toLocaleString('pt-BR')} km
            </span>
          )}
        </div>

        {/* 🔧 Última Revisão Geral */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>🔧</span> Última Revisão Geral
            </span>
            {veiculo.lastRevision?.date && (
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                {veiculo.lastRevision.date}
              </span>
            )}
          </div>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            {veiculo.lastRevision?.specification || 'Revisão periódica de freios, suspensão e alinhamento.'}
          </p>
          {veiculo.lastRevision?.location && (
            <span className="inline-block text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
              📍 {veiculo.lastRevision.location}
            </span>
          )}
        </div>

        {/* 🛞 Pneus & Freios */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🛞</span> Estado dos Pneus & Freios
          </span>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            {veiculo.tiresCondition || 'Pneus em excelente estado de conservação e pastilhas revisadas.'}
          </p>
        </div>

        {/* ⚡ Bateria & Elétrica */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>⚡</span> Bateria & Sistema Elétrico
          </span>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            {veiculo.batteryStatus || 'Bateria testada com alternador em plena carga de operação.'}
          </p>
        </div>
      </div>
    </div>
  );
};
