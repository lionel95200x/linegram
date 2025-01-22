import { toast } from 'sonner';

import { Prospects } from '@/features/pricing/types';
import {
  createBulkProspect,
  createProspect,
  getProspectByAgentId,
  updateProspect,
} from '@/features/prospects/prospects';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useProspects = ({ agentId, prospects = [] }: { agentId: string; prospects?: Prospects[] }) => {
  return useQuery({
    queryKey: ['prospects', agentId],
    queryFn: () => getProspectByAgentId(agentId),
    initialData: prospects,
    staleTime: 5 * 1000,
  });
};

export const useCreateProspect = ({ agentId }: { agentId: string }) => {
  const { refetch } = useProspects({ agentId });

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

export const useCreateBulkProspect = ({ agentId }: { agentId: string }) => {
  const { refetch } = useProspects({ agentId });

  return useMutation({
    mutationFn: (prospects: Prospects[]) => createBulkProspect(prospects, agentId),
    onSuccess: () => {
      toast.success('Prospects importés avec succès');
      refetch();
    },
    onError: () => {
      toast.error("Erreur d'importation");
    },
  });
};

export const useUpdateProspect = ({ agentId }: { agentId: string }) => {
  const { refetch } = useProspects({ agentId });

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
