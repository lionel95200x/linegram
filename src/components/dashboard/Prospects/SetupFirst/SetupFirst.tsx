'use client';

import { useCreateProspect } from '@/hooks/prospects/useProspects';

import Button from '../../Base/Button';
import ProspectForm from '../ProspectForm/ProspectForm';
import { ProspectFormValues } from '../ProspectForm/ProspectForm.utils';

const SetupFirst = ({ agentId }: { agentId: string }) => {
  const { mutate: createProspectClient } = useCreateProspect({ agentId });

  const onSubmit = (data: ProspectFormValues) => {
    createProspectClient(data);
  };

  return (
    <div className='intro-y box mt-5 py-10 sm:py-20'>
      <div className='flex justify-center'>
        <Button variant='primary' className='intro-y mx-2 h-10 w-10 rounded-full'>
          1
        </Button>
        <Button className='intro-y mx-2 h-10 w-10 rounded-full bg-slate-100 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400'>
          2
        </Button>
        <Button className='intro-y mx-2 h-10 w-10 rounded-full bg-slate-100 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400'>
          3
        </Button>
      </div>
      <div className='mt-10 px-5'>
        <div className='text-center text-lg font-medium'>Ajoutez un premier prospect</div>
        <div className='mt-2 text-center text-slate-500'>
          Vous pourrez ici gerez la liste de vos prospects, voir leurs informations, faire en sorte que le robot les
          appel, et retrouvez les clients interessés.
        </div>
      </div>
      <div className='mt-10 border-t border-slate-200/60 px-5 pt-10 dark:border-darkmode-400 sm:px-20'>
        <div className='text-base font-medium'>Informations du prospect</div>
        <ProspectForm onSubmit={onSubmit} />
        <div className='intro-y col-span-12 mt-5 flex items-center justify-center sm:justify-end'>
          <Button variant='primary' className='ml-2 w-24' type='submit' form='prospect-form'>
            Enregistrer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SetupFirst;
