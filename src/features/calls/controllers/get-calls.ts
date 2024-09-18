import { getBaseQuery } from '@/features/common';
import { Calls } from '@/features/pricing/types';

const TABLE_NAME = 'calls';

const getBaseCallQuery = () => getBaseQuery().from(TABLE_NAME);

export async function getCalls(): Promise<Calls[]> {
  const { data, error } = await getBaseCallQuery().select('*');

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getCall(id: string): Promise<Calls> {
  const { data, error } = await getBaseCallQuery().select('*').eq('id', id).single();

  if (error) {
    console.error(error.message);
  }

  return data ?? [];
}

export async function getCallByProspect(prospectId: string): Promise<Calls[]> {
  const { data, error } = await getBaseCallQuery().select('*').eq('prospect_id', prospectId);

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
  const { data, error } = await getBaseCallQuery()
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
