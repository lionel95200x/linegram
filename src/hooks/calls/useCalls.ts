import { useState } from 'react';

import { testCallAction } from '@/actions/agents/testCallAction';
import { toast } from '@/components/ui/use-toast';
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
        toast({
          variant: 'destructive',
          title: 'Erreur de mise à jour',
          description: payload.error,
        });
      } else {
        toast({
          title: 'Appel declenché avec succes',
          description: "Vous pourrez retrouvrez la retranscription ainsi que l'audio de l'appel",
        });
      }
    },
    onError: (error) => {
      toast({
        variant: 'destructive',
        title: "Erreur lors du déclenchement de l'appel",
        description: error.message,
      });
    },
  });
};
