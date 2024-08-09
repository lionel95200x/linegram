import { Calls } from '@/features/pricing/types';
import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export async function getCalls(): Promise<Calls[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('calls').select('*');

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getCall(id: string): Promise<Calls> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('calls').select('*').eq('id', id).single();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function createCall({
  agentId,
  prospectId,
}: {
  agentId: string;
  prospectId: string;
}): Promise<Calls | { error: string }> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from('calls')
    .insert({
      user_id: '0c7dae01-2ab6-4f44-8da0-eb903a26069b',
      agent_id: agentId,
      prospect_id: prospectId,
      conversation: 'Start conversation from front',
      metadata: [],
    })
    .select()
    .single();

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }

  return data ?? [];
}
