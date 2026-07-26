'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function sendOtpToPhone(phone: string) {
  const supabase = await createClient();

  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

  const { data, error } = await supabase.auth.signInWithOtp({
    phone: `+${formattedPhone}`,
  });

  if (error) {
    throw new Error(`Erro ao enviar código OTP: ${error.message}`);
  }

  return data;
}

export async function verifyOtpCode(phone: string, token: string) {
  const supabase = await createClient();

  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') ? cleanPhone : `55${cleanPhone}`;

  const { data, error } = await supabase.auth.verifyOtp({
    phone: `+${formattedPhone}`,
    token,
    type: 'sms',
  });

  if (error) {
    throw new Error(`Código inválido: ${error.message}`);
  }

  revalidatePath('/perfil');
  return data;
}

export async function getCurrentProfile() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    return profile || null;
  } catch {
    return null;
  }
}

export async function signOutUser() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/');
}
