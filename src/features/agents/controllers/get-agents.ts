import { getAuthUser } from '@/features/account/controllers/get-user';
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

export async function createAgent(agent: { name: string; prompt?: string; first_sentence?: string }) {
  const supabase = createSupabaseServerClient();

  const user = await getAuthUser();

  if (!user) {
    throw new Error('User not found');
  }

  const { data, error } = await supabase
    .from('agents')
    .upsert({
      ...agent,
      metadata: {
        user_id: user?.id,
      },
      user_id: user?.id,
      created: new Date(),
    })
    .select();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function updateAgent(id: string, agent: { name?: string; prompt?: string; firstSentence?: string }) {
  const supabase = createSupabaseServerClient();

  try {
    const { data } = await supabase
      .from('agents')
      .update({
        prompt: agent.prompt,
        first_sentence: agent.firstSentence,
        name: agent.name,
      })
      .eq('id', id)
      .select();
    return data ?? [];
  } catch (error) {
    console.error(error);
  }
}
