'use server';

import { getBaseQuery } from '../common';
import { Prospects } from '../pricing/types';

const getBaseProspectQuery = () => getBaseQuery().from('prospects');

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
  try {
    const { data, error } = await getBaseProspectQuery()
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
  try {
    const { data, error } = await getBaseProspectQuery()
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

export async function getProspectByAgentId(agent_id: string): Promise<Prospects[]> {
  const { data, error } = await getBaseProspectQuery().select('*').eq('agent_id', agent_id);

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getProspect(id: string): Promise<Prospects> {
  const { data, error } = await getBaseProspectQuery().select('*').eq('id', id).single();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
