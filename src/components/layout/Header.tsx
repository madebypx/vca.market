import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white dark:bg-[#0F172A] dark:border-slate-800 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="text-xl font-bold tracking-tight text-[var(--color-primary)] dark:text-white">
            Conquista<span className="text-[var(--color-accent-green)]">Market</span>
          </Link>
          
          {/* Neighborhood Selector - Hidden on very small screens */}
          <div className="hidden md:flex items-center text-sm bg-slate-100 dark:bg-slate-800 rounded-md px-3 py-1.5 cursor-pointer hover:bg-slate-200 transition-colors">
            <span className="text-slate-600 dark:text-slate-300 font-medium truncate max-w-[150px]">Todo Vitória da Conquista</span>
            <svg className="w-4 h-4 ml-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Global Search - Hidden on mobile, shown on tablet+ */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Buscar em VCA..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-[var(--color-trust-blue)] outline-none"
            />
            <button className="absolute right-3 top-1.5 text-slate-400 hover:text-[var(--color-trust-blue)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </div>
        </div>

        {/* Navigation & CTA */}
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link href="/imoveis" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Imóveis</Link>
            <Link href="/veiculos" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Veículos</Link>
            <Link href="/servicos" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Serviços</Link>
            <Link href="/comercio" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Comércio</Link>
            <Link href="/vagas" className="hover:text-[var(--color-primary)] dark:hover:text-white transition-colors">Vagas</Link>
          </nav>

          <ThemeToggle />

          <Link href="/anunciar" className="hidden md:flex bg-[var(--color-primary)] hover:bg-slate-800 text-white dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-200 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
            + Anunciar
          </Link>

          {/* User Menu Link */}
          <Link href="/perfil" className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

