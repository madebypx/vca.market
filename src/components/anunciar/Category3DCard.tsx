'use client';

import React from 'react';
import { CategoryId } from '@/types/database';

interface Category3DCardProps {
  id: CategoryId;
  title: string;
  subtitle: string;
  imageSrc: string;
  badge: string;
  accentGradient: string;
  accentColor: string;
  tags: string[];
  isSelected: boolean;
  onSelect: (id: CategoryId) => void;
}

export const Category3DCard: React.FC<Category3DCardProps> = ({
  id,
  title,
  subtitle,
  imageSrc,
  badge,
  accentGradient,
  accentColor,
  tags,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`group relative cursor-pointer h-[440px] w-full rounded-[2.5rem] transition-all duration-500 select-none ${
        isSelected
          ? 'scale-[1.02] ring-4 ring-emerald-400 shadow-[0_25px_60px_rgba(16,185,129,0.3)]'
          : 'hover:-translate-y-2 hover:shadow-2xl'
      }`}
    >
      {/* Outer Glassmorphism Container */}
      <div
        className={`absolute inset-0 rounded-[2.5rem] backdrop-blur-2xl border overflow-hidden transition-all duration-500 ${
          isSelected
            ? 'bg-slate-900/90 border-emerald-400/80'
            : 'bg-slate-900/75 border-white/10 group-hover:border-white/25 group-hover:bg-slate-900/85'
        }`}
      >
        {/* Dynamic Background Glow Splash */}
        <div
          className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-80 ${accentGradient}`}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Tag / Badge */}
      <div className="absolute top-6 left-6 z-20">
        <span
          className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border backdrop-blur-md transition-colors ${
            isSelected
              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-400/40'
              : 'bg-white/10 text-slate-300 border-white/15'
          }`}
        >
          {badge}
        </span>
      </div>

      {/* 3D REAL OBJECT IMAGE (Preenche a parte superior do card e flutua/escala ao passar o mouse) */}
      <div className="relative z-20 w-full h-[230px] pt-8 px-4 flex items-center justify-center pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.85)] transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-6 group-hover:-rotate-6 group-active:scale-125 group-active:-translate-y-6"
        />
      </div>

      {/* Bottom Content Area (Title, Spec Pills & Action Button) */}
      <div className="relative z-20 p-6 pt-0 flex flex-col justify-between h-[170px] text-center">
        <div>
          <h3 className="text-2xl font-black text-white tracking-tight">{title}</h3>
          <p className="text-xs text-slate-400 mt-1 line-clamp-1">{subtitle}</p>
        </div>

        {/* Spec / Option Pills (Estilo SIZE / COLOR da referência da Nike) */}
        <div className="flex items-center justify-center gap-1.5 my-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white/10 dark:bg-white/5 border border-white/10 text-slate-300 backdrop-blur-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Pill Action Button (Estilo BUY NOW / ADD TO CART da foto) */}
        <button
          type="button"
          className={`w-full py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-xl ${
            isSelected
              ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30 scale-[1.02]'
              : 'bg-white text-slate-950 hover:bg-emerald-400 hover:text-slate-950 group-hover:shadow-white/20'
          }`}
        >
          {isSelected ? '✓ SELECIONADO' : 'SELECIONAR'}
        </button>
      </div>
    </div>
  );
};
