'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { ImovelItem } from '@/data/mockImoveis';

const RealLeafletMap = dynamic(
  () => import('./RealLeafletMap').then((mod) => mod.RealLeafletMap),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[500px] bg-slate-900 rounded-2xl flex flex-col items-center justify-center text-slate-400 gap-2 border border-slate-800">
        <span className="text-3xl animate-bounce">🗺️</span>
        <span className="text-xs font-bold text-slate-300">Carregando Mapa Real de Vitória da Conquista...</span>
      </div>
    ),
  }
);

interface MapContainerProps {
  imoveis: ImovelItem[];
  hoveredId: string | null;
  onHoverPin: (id: string | null) => void;
}

export function ImoveisMapContainer({ imoveis, hoveredId, onHoverPin }: MapContainerProps) {
  return (
    <div className="w-full h-full relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg min-h-[500px]">
      {/* Real Interactive Map Component */}
      <RealLeafletMap imoveis={imoveis} hoveredId={hoveredId} onHoverPin={onHoverPin} />

      {/* Floating Info Overlay Header */}
      <div className="absolute top-3 left-3 z-[1000] bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-2 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>📍 Mapa Interativo de Vitória da Conquista ({imoveis.length} imóveis)</span>
      </div>
    </div>
  );
}
