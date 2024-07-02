import { Agents } from '@/features/pricing/types';
import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function getAgent(id: string): Promise<Agents> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('agents').select('*').eq('id', id).single();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getAgents(): Promise<Agents[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('agents').select('*');

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function createAgent(agent: { user_id?: string; name: string; prompt: string; first_sentence: string }) {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('agents').upsert({
    ...agent,
    metadata: {
      user_id: agent.user_id,
    },
    created: new Date(),
  });

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
