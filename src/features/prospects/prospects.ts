'use server';

import { getBaseQuery } from '../common';
import { Prospects } from '../pricing/types';

const getBaseProspectQuery = async () => (await getBaseQuery()).from('prospects');

export async function createBulkProspect(prospects: Prospects[], agent_id: string) {
  const baseQuery = await getBaseProspectQuery();
  const { data, error } = await baseQuery.upsert(prospects.map((prospect) => ({ ...prospect, agent_id })));

  if (error) {
    throw new Error(error.message);
  }
  return data ?? [];
}

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
    const baseQuery = await getBaseProspectQuery();
    const { data, error } = await baseQuery
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

export async function updateProspect(prospect: Partial<Prospects>, agent_id: string, prospect_id: string) {
  try {
    const prospectData = {
      ...(prospect.firstName && { firstName: prospect.firstName }),
      ...(prospect.lastName && { lastName: prospect.lastName }),
      ...(prospect.phone && { phone: prospect.phone }),
      ...(prospect.email && { email: prospect.email }),
      ...(prospect.extraInfo && { extraInfo: prospect.extraInfo }),
      ...(prospect.call_id && { call_id: prospect.call_id }),
    };

    const baseQuery = await getBaseProspectQuery();
    const { data, error } = await baseQuery
      .update(prospectData)
      .eq('id', prospect_id)
      .eq('agent_id', agent_id)
      .select();

    if (error) {
      return { error: error.message };
    }
    return data ?? [];
  } catch (error) {
    return { error: (error as Error)?.message };
  }
}

export async function getProspectByAgentId(agent_id: string): Promise<Prospects[]> {
  const baseQuery = await getBaseProspectQuery();
  const { data, error } = await baseQuery.select('*').eq('agent_id', agent_id);

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getProspect(id: string): Promise<Prospects> {
  const baseQuery = await getBaseProspectQuery();
  const { data, error } = await baseQuery.select('*').eq('id', id).single();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}
