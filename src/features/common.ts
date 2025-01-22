import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export const getBaseQuery = async () => {
  const supabase = await createSupabaseServerClient();
  return supabase;
};
