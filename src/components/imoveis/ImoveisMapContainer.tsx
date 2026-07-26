'use client';

import { ImovelItem } from '@/data/mockImoveis';

interface MapContainerProps {
  imoveis: ImovelItem[];
  hoveredId: string | null;
  onHoverPin: (id: string | null) => void;
}

export function ImoveisMapContainer({ imoveis, hoveredId, onHoverPin }: MapContainerProps) {
  return (
    <div className="w-full h-full bg-slate-900 text-white relative flex flex-col items-center justify-center p-6 overflow-hidden rounded-2xl border border-slate-800 shadow-inner min-h-[500px]">
      {/* Map Grid Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Simulated Map Header */}
      <div className="absolute top-4 left-4 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-semibold flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Mapa Interativo de Vitória da Conquista (VCA)</span>
      </div>

      {/* Map Content SVG / Vector Overlay */}
      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
        {/* Neighborhood Boundaries Graphic */}
        <svg className="w-full h-full text-slate-800 fill-current opacity-40" viewBox="0 0 500 500">
          <path d="M50 150 Q 120 80 250 100 T 450 120 T 420 380 T 200 450 T 80 320 Z" />
          <path d="M120 180 Q 200 140 320 190 T 380 320 T 180 380 Z" />
        </svg>

        {/* Interactive Property Pins */}
        {imoveis.map((item, index) => {
          const isHovered = hoveredId === item.id;
          // Position markers deterministically based on index for the mockup
          const positions = [
            { top: '30%', left: '60%' }, // Candeias
            { top: '45%', left: '35%' }, // Recreio
            { top: '25%', left: '40%' }, // Centro
            { top: '65%', left: '70%' }, // Boa Vista
            { top: '18%', left: '50%' }, // Alto Maron
          ];
          const pos = positions[index % positions.length];

          const formattedPrice = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0,
          }).format(item.price);

          return (
            <div
              key={item.id}
              style={{ top: pos.top, left: pos.left }}
              onMouseEnter={() => onHoverPin(item.id)}
              onMouseLeave={() => onHoverPin(null)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 z-20 ${
                isHovered ? 'scale-125 z-30' : 'hover:scale-110'
              }`}
            >
              <div
                className={`px-2.5 py-1 rounded-full text-xs font-extrabold shadow-lg flex items-center gap-1 border transition-all ${
                  isHovered
                    ? 'bg-[var(--color-trust-blue)] text-white border-white ring-4 ring-blue-500/30'
                    : 'bg-white text-slate-950 border-slate-300 dark:bg-slate-800 dark:text-white dark:border-slate-600'
                }`}
              >
                <span>📍</span>
                <span>{formattedPrice}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Footer Legend */}
      <div className="absolute bottom-4 right-4 z-10 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-[11px] text-slate-400 flex items-center gap-3">
        <span>📍 Passe o mouse nos valores para destacar</span>
      </div>
    </div>
  );
}
