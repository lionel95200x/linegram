import { useState } from 'react';
import { toast } from 'sonner';

import { testCallAction } from '@/actions/agents/testCallAction';
import { useMutation } from '@tanstack/react-query';

export const useCreateCall = () => {
  const [dynamicMutationKey, setDynamicMutationKey] = useState(['updateProspect']);
  return useMutation({
    mutationFn: (data: { agentId: string; prospectId: string }) => {
      setDynamicMutationKey(['updateProspect', data.agentId, data.prospectId]);
      return testCallAction(data.agentId, data.prospectId);
    },
    mutationKey: dynamicMutationKey,
    onSuccess: (payload) => {
      console.log({ payload });
      if (payload?.error) {
        toast.error('Erreur de mise à jour');
      } else {
        toast.success('Appel declenché avec succes');
      }
    },
    onError: (error) => {
      toast.error("Erreur lors du déclenchement de l'appel");
    },
  });
};
