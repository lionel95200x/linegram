import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';
import { routes } from '@/utils/route';

export async function getUser() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.from('users').select('*').single();

  if (error) {
    console.error(error);
  }

  return data;
}

export async function getAuthUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log({ user });

  /*
  if (!user) {
    redirect(routes.home);
  } */

  return user;
}
