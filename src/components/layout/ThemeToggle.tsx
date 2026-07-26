'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 animate-pulse" />;
  }

  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80">
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Modo Claro"
        className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
          theme === 'light'
            ? 'bg-white text-amber-600 shadow-xs'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        ☀️
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Modo Escuro"
        className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
          theme === 'dark'
            ? 'bg-slate-900 text-blue-400 shadow-xs'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        🌙
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        title="Tema do Sistema"
        className={`p-1.5 rounded-lg text-xs font-bold transition-all ${
          theme === 'system'
            ? 'bg-white dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 shadow-xs'
            : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
        }`}
      >
        💻
      </button>
    </div>
  );
};
