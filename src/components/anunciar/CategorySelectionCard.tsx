'use client';

import React from 'react';
import { CategoryId } from '@/types/database';

interface CategorySelectionCardProps {
  id: CategoryId;
  title: string;
  subtitle: string;
  icon: string;
  badges: string[];
  isSelected: boolean;
  onSelect: (id: CategoryId) => void;
}

export const CategorySelectionCard: React.FC<CategorySelectionCardProps> = ({
  id,
  title,
  subtitle,
  icon,
  badges,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={() => onSelect(id)}
      className={`group relative cursor-pointer p-5 rounded-2xl border transition-all duration-200 select-none flex flex-col justify-between h-full ${
        isSelected
          ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-950 dark:border-white shadow-md'
          : 'bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-slate-100 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 hover:shadow-sm'
      }`}
    >
      <div className="space-y-3">
        {/* Header Icon + Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-base font-bold tracking-tight">{title}</h3>
          </div>

          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
              isSelected
                ? 'bg-emerald-500 border-emerald-500 text-slate-950'
                : 'border-slate-300 dark:border-slate-700 text-transparent group-hover:border-slate-400'
            }`}
          >
            ✓
          </div>
        </div>

        {/* Subtitle Description */}
        <p
          className={`text-xs leading-relaxed ${
            isSelected ? 'text-slate-300 dark:text-slate-700' : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Trust & Category Specs Badges */}
      <div className="flex flex-wrap gap-1.5 pt-4">
        {badges.map((badge, idx) => (
          <span
            key={idx}
            className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border transition-colors ${
              isSelected
                ? 'bg-white/10 dark:bg-slate-900/10 border-white/20 dark:border-slate-900/20 text-slate-200 dark:text-slate-800'
                : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
};
