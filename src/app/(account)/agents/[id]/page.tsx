import React from 'react';

import { getAgent } from '@/features/agents/controllers/get-agents';
import { getVoices } from '@/features/elevenlabs';

import AgentPage from './page-client';

export default async function Page({ params }: { params: { id: string } }) {
  const [agent, voices] = await Promise.all([getAgent(params.id), getVoices()]);

  return <AgentPage agent={agent} />;
}
