import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function getUser() {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('users').select('*').single();

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getAuthUser() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}
