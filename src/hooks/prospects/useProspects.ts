import { toast } from 'sonner';

import { Prospects } from '@/features/pricing/types';
import { createProspect, getProspect, updateProspect } from '@/features/prospects/prospects';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useProspects = ({ agentId, prospects = [] }: { agentId: string; prospects?: Prospects[] }) => {
  return useQuery({
    queryKey: ['prospects', agentId],
    queryFn: () => getProspect(agentId),
    initialData: prospects,
    staleTime: 5 * 1000,
  });
};

export const useCreateProspect = ({ agentId }: { agentId: string }) => {
  const { refetch } = useProspects({ agentId, prospects: [] });

  return useMutation({
    mutationFn: (data: { firstName?: string; lastName?: string; phone: string; email?: string; extraInfo?: string }) =>
      createProspect(data, agentId),
    mutationKey: ['createProspect'],
    onSuccess: () => {
      toast.success('Prospect créé avec succès');
      refetch();
    },
    onError: () => {
      toast.error('Erreur de création');
    },
  });
};

export const useUpdateProspect = ({ agentId }: { agentId: string }) => {
  const { refetch } = useProspects({ agentId, prospects: [] });

  return useMutation({
    mutationFn: (data: {
      firstName?: string;
      lastName?: string;
      phone: string;
      email?: string;
      extraInfo?: string;
      prospectId: string;
    }) => updateProspect(data, agentId, data.prospectId),
    mutationKey: ['updateProspect'],
    onSuccess: (payload) => {
      if (payload.error) {
        toast.error('Erreur de mise à jour');
      } else {
        toast.success('Prospect mis à jour avec succès');
        refetch();
      }
    },
  });
};
