'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ReportedItem {
  id: string;
  listingTitle: string;
  reason: string;
  reporterName: string;
  date: string;
  status: 'pending' | 'resolved' | 'removed';
}

interface VerificationDoc {
  id: string;
  userName: string;
  documentType: 'CRECI-BA' | 'CPF Morador';
  documentNumber: string;
  dateSubmitted: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function AdminModerationPage() {
  const [activeTab, setActiveTab] = useState<'reports' | 'verifications'>('reports');

  const [reports, setReports] = useState<ReportedItem[]>([
    {
      id: 'rep-001',
      listingTitle: 'Toyota Corolla XEi 2.0 Flex 16V Automatico',
      reason: '🚨 Preço Irrealista / Suspeita de Golpe',
      reporterName: 'Fernando Alencar',
      date: 'Há 2 horas',
      status: 'pending',
    },
    {
      id: 'rep-002',
      listingTitle: 'Apartamento Comercial no Centro de VCA',
      reason: '📞 Telefone WhatsApp Inexistente',
      reporterName: 'Mariana Castro',
      date: 'Há 1 dia',
      status: 'pending',
    },
  ]);

  const [verifications, setVerifications] = useState<VerificationDoc[]>([
    {
      id: 'doc-001',
      userName: 'Carlos Imóveis Conquista',
      documentType: 'CRECI-BA',
      documentNumber: 'CRECI-BA 8820',
      dateSubmitted: 'Hoje às 14:20',
      status: 'pending',
    },
    {
      id: 'doc-002',
      userName: 'Juliana Silva',
      documentType: 'CPF Morador',
      documentNumber: 'CPF ***.458.125-**',
      dateSubmitted: 'Hoje às 11:05',
      status: 'pending',
    },
  ]);

  const handleReportAction = (id: string, newStatus: 'resolved' | 'removed') => {
    setReports((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleVerificationAction = (id: string, newStatus: 'approved' | 'rejected') => {
    setVerifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] pb-16">
      {/* Header Bar */}
      <div className="bg-slate-900 text-white py-6 px-4 border-b border-slate-800">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-400">
              Painel Interno Gestor
            </span>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight">
              Central de Moderação & Segurança Anti-Fraude VCA
            </h1>
          </div>

          <Link
            href="/"
            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            ← Voltar ao Site
          </Link>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('reports')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'reports'
                ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <span>🚩 Denúncias de Anúncios</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-rose-500/10 text-rose-600 font-extrabold">
              {reports.filter((r) => r.status === 'pending').length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('verifications')}
            className={`pb-3 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'verifications'
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <span>🛡️ Verificação de Selos (CPF/CRECI)</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-600 font-extrabold">
              {verifications.filter((v) => v.status === 'pending').length}
            </span>
          </button>
        </div>

        {/* Tab 1: Denúncias */}
        {activeTab === 'reports' && (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-rose-500">{report.reason}</span>
                    <span className="text-[10px] font-semibold text-slate-400">• {report.date}</span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {report.listingTitle}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Denunciado por: <strong className="text-slate-700 dark:text-slate-300">{report.reporterName}</strong>
                  </p>
                </div>

                {report.status === 'pending' ? (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleReportAction(report.id, 'resolved')}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      Manter Anúncio
                    </button>

                    <button
                      type="button"
                      onClick={() => handleReportAction(report.id, 'removed')}
                      className="px-3.5 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold shadow-xs transition-colors"
                    >
                      Suspender Anúncio
                    </button>
                  </div>
                ) : (
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-xl ${
                      report.status === 'removed'
                        ? 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {report.status === 'removed' ? '❌ Anúncio Removido' : '✓ Mantido Sem Alterações'}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Verificações */}
        {activeTab === 'verifications' && (
          <div className="space-y-4">
            {verifications.map((doc) => (
              <div
                key={doc.id}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {doc.documentType}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">• {doc.dateSubmitted}</span>
                  </div>

                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {doc.userName}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Registro / Documento enviado: <strong className="text-slate-700 dark:text-slate-300">{doc.documentNumber}</strong>
                  </p>
                </div>

                {doc.status === 'pending' ? (
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => handleVerificationAction(doc.id, 'rejected')}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition-colors"
                    >
                      Recusar Documento
                    </button>

                    <button
                      type="button"
                      onClick={() => handleVerificationAction(doc.id, 'approved')}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors"
                    >
                      Aprovar Selo Pro
                    </button>
                  </div>
                ) : (
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-xl ${
                      doc.status === 'approved'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-rose-500/10 text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {doc.status === 'approved' ? '✓ Selo Concedido' : '❌ Documento Recusado'}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
