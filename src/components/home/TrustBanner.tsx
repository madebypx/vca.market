export function TrustBanner() {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden">
          {/* Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-blue-500 to-emerald-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header Column */}
            <div className="lg:col-span-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-badge-gold)] mb-2 block">
                Segurança & Profissionalização
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-3 leading-tight">
                Confiança Real no Comércio Conquistense
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Eliminamos perfis anônimos e anúncios fraudulentos através de auditoria de selos locais.
              </p>
            </div>

            {/* Right 3 Trust Pillars Column */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Gold Badge Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 002.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.681-.056-1.35-.166-2.001A11.954 11.954 0 0010 1.944zm3.707 6.763a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Empresa Conquistense</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Lojas e empresas com CNPJ ativo e endereço físico auditado no Centro, Bairro Brasil ou shoppings.
                </p>
              </div>

              {/* Silver Badge Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-slate-200 font-bold text-sm mb-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Morador Verificado</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pessoas físicas com validação de CPF e telefone comercial com histórico ativo em VCA.
                </p>
              </div>

              {/* Platinum / Blue Badge Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-2">
                  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Parceiro Pro / CRECI</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Corretores e agentes credenciados com registro CRECI-BA ativo e garantia de procedência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
