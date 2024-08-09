'use server';
import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

import { Prospects } from '../pricing/types';

export async function createProspect(
  prospect: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    extraInfo?: string;
  },
  agent_id: string
) {
  const supabase = createSupabaseServerClient();

  try {
    const { data, error } = await supabase
      .from('prospects')
      .upsert({
        ...prospect,
        agent_id,
      })
      .select();

    if (error) {
      throw new Error(error.message);
    }
    return data ?? [];
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export async function updateProspect(
  prospect: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    extraInfo?: string;
  },
  agent_id: string,
  prospect_id: string
) {
  const supabase = createSupabaseServerClient();

  try {
    const { data, error } = await supabase
      .from('prospects')
      .update({
        firstName: prospect.firstName,
        lastName: prospect.lastName,
        phone: prospect.phone,
        email: prospect.email,
        extraInfo: prospect.extraInfo,
      })
      .eq('id', prospect_id)
      .eq('agent_id', agent_id)
      .select();

    console.log({ data, error });
    if (error) {
      return { error: error.message };
    }
    return data ?? [];
  } catch (error) {
    return { error: (error as Error)?.message };
  }
}

export async function getProspect(agent_id: string): Promise<Prospects[]> {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.from('prospects').select('*').eq('agent_id', agent_id);

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
