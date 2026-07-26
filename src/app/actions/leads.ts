'use server';

import { createClient } from '@/lib/supabase/server';

export async function logAndGetWhatsAppLeadUrl(params: {
  listingId: string;
  listingTitle: string;
  sellerPhone: string;
  buyerUserId?: string;
  customMessage?: string;
}) {
  const { listingId, listingTitle, sellerPhone, buyerUserId, customMessage } = params;

  // Tenta registrar o lead no Supabase se disponível
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (supabaseUrl && !supabaseUrl.includes('placeholder')) {
      const supabase = await createClient();
      await supabase.from('lead_events').insert([
        {
          listing_id: listingId,
          buyer_id: buyerUserId || null,
          lead_type: 'whatsapp',
        },
      ]);
    }
  } catch (err) {
    console.error('Falha ao registrar evento de lead:', err);
  }

  // Higieniza o número de telefone (apenas dígitos)
  const cleanPhone = sellerPhone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

  // Monta a mensagem pré-formatada no canal oficial WhatsApp
  const defaultText = `Olá! Vi o seu anúncio "${listingTitle}" (Ref: ${listingId}) no vca.market e gostaria de mais informações.`;
  const textPayload = encodeURIComponent(customMessage || defaultText);

  return `https://wa.me/${formattedPhone}?text=${textPayload}`;
}
