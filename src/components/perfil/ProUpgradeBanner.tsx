'use client';

export function ProUpgradeBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white border border-slate-700/80 shadow-xl my-6">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400 text-slate-950">
              ★ Conquista Pro
            </span>
            <span className="text-xs text-slate-300 font-semibold">
              Para Corretores (CRECI), Lojas Físicas & Empresas em VCA
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug mb-2">
            Multiplique os leads do seu negócio em Vitória da Conquista
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            Seja um parceiro oficial credenciado. Ganhe o selo de confiança Ouro/Platina, publique anúncios ilimitados, apareça no topo das buscas da cidade e tenha um hotsite exclusivo da sua imobiliária ou loja.
          </p>
        </div>

        <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
          <a
            href="https://wa.me/5577999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Conquista%20Pro%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-2xl text-xs sm:text-sm transition-all shadow-md hover:scale-105"
          >
            Falar com Consultor Pro no WhatsApp →
          </a>
          <span className="text-[11px] text-slate-400 font-medium">
            Planos sem fidelidade a partir de R$ 99/mês
          </span>
        </div>
      </div>
    </div>
  );
}
