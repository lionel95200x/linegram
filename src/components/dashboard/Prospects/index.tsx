'use client';
import React from 'react';

import { Prospects as ProspectsType } from '@/features/pricing/types';
import { useProspects } from '@/hooks/prospects/useProspects';

import { List } from './List/List';
import SetupFirst from './SetupFirst/SetupFirst';

const Prospects = ({ agentId, prospects }: { agentId: string; prospects: ProspectsType[] }) => {
  const { data } = useProspects({ agentId, prospects });

  return data.length > 0 ? <List prospects={prospects} agentId={agentId} /> : <SetupFirst agentId={agentId} />;
};

export default Prospects;
