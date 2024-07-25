import React from 'react';

import { getAgents } from '@/features/agents/controllers/get-agents';

import AgentGridClient from './AgentGrid.client';

const AgentGrid = async () => {
  const [agents] = await Promise.all([getAgents()]);

  return <AgentGridClient agents={agents} />;
};

export default AgentGrid;
