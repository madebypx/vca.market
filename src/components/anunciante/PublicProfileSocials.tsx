'use client';

import { UserProfile } from '@/types/user';

interface PublicProfileSocialsProps {
  user: UserProfile;
}

export function PublicProfileSocials({ user }: PublicProfileSocialsProps) {
  const socials = user.socials;

  const whatsappMessage = encodeURIComponent(
    `Olá ${user.name}! Vi seu perfil no Conquista Market (vca.market) e gostaria de tirar algumas dúvidas sobre seus anúncios.`
  );
  const whatsappUrl = socials?.whatsapp || `https://wa.me/5577999999999?text=${whatsappMessage}`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/60 shadow-xs flex flex-col items-center text-center gap-6 max-w-3xl mx-auto w-full my-6">
      {/* Bio Section */}
      {user.bio && (
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
            Sobre o Anunciante
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal max-w-2xl">
            &quot;{user.bio}&quot;
          </p>
        </div>
      )}

      {/* Social & Contact Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 w-full pt-2 border-t border-slate-100 dark:border-slate-700/50">
        {/* Primary CTA WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--color-accent-green)] hover:bg-emerald-600 text-slate-950 font-extrabold py-2.5 px-5 rounded-2xl text-xs flex items-center gap-2 transition-all shadow-xs scale-100 hover:scale-105"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.018-1.055z" />
          </svg>
          <span>Falar no WhatsApp</span>
        </a>

        {/* Instagram */}
        {socials?.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500/10 hover:bg-pink-500/20 text-pink-600 dark:text-pink-400 font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center gap-1.5 border border-pink-500/20 transition-all"
          >
            <span>📷 Instagram</span>
          </a>
        )}

        {/* LinkedIn */}
        {socials?.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center gap-1.5 border border-blue-500/20 transition-all"
          >
            <span>💼 LinkedIn</span>
          </a>
        )}

        {/* Website */}
        {socials?.website && (
          <a
            href={socials.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-bold py-2.5 px-4 rounded-2xl text-xs flex items-center gap-1.5 transition-all"
          >
            <span>🌐 Website Oficial</span>
          </a>
        )}
      </div>
    </div>
  );
}
