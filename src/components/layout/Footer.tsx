import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 pb-20 md:pb-8 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-[var(--color-primary)] dark:text-white mb-4">ConquistaMarket</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              O ecossistema digital hiperlocal de comércio e serviços de Vitória da Conquista, Bahia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Verticais</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/imoveis" className="hover:text-[var(--color-primary)] dark:hover:text-white">Imóveis em VCA</Link></li>
              <li><Link href="/veiculos" className="hover:text-[var(--color-primary)] dark:hover:text-white">Veículos Seminovos</Link></li>
              <li><Link href="/servicos" className="hover:text-[var(--color-primary)] dark:hover:text-white">Profissionais e Serviços</Link></li>
              <li><Link href="/comercio" className="hover:text-[var(--color-primary)] dark:hover:text-white">Lojas do Centro e Bairros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/sobre" className="hover:text-[var(--color-primary)] dark:hover:text-white">Sobre a Plataforma</Link></li>
              <li><Link href="/planos" className="hover:text-[var(--color-primary)] dark:hover:text-white">Assine o Conquista Pro</Link></li>
              <li><Link href="/seguranca" className="hover:text-[var(--color-primary)] dark:hover:text-white">Dicas Anti-Golpe</Link></li>
              <li><Link href="/termos" className="hover:text-[var(--color-primary)] dark:hover:text-white">Termos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-4">Confiança Local</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-[var(--color-badge-gold)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Empresas Verificadas
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <svg className="w-5 h-5 text-[var(--color-trust-blue)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                Corretores com CRECI
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Conquista Market (vca.market). Feito para Vitória da Conquista.</p>
        </div>
      </div>
    </footer>
  );
}
