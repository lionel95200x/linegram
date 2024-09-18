import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export const getBaseQuery = () => {
  const supabase = createSupabaseServerClient();
  return supabase;
};
