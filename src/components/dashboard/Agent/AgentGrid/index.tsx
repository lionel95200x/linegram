import React from 'react';

import { createAgent, getAgents, updateAgent } from '@/features/agents/controllers/get-agents';

import AgentGridClient from './AgentGrid.client';

const AgentGrid = async () => {
  const [agents] = await Promise.all([getAgents()]);

  async function createAgentAction(name: string) {
    'use server';

    const { data, error } = await createAgent({ name });

    console.log({ data, error });
    return { data, error };
  }

  return <AgentGridClient agents={agents} createAgent={createAgentAction} />;
};

export default AgentGrid;
