import { Dialog } from '@/components/dashboard/Base/Headless';

import Button from '../../Base/Button';
import ProspectForm from '../ProspectForm/ProspectForm';
import { FORM_ID, ProspectFormValues } from '../ProspectForm/ProspectForm.utils';

const CreateEditProspectModal = ({
  open,
  onClose,
  onSave,
  texts,
  defaultValues,
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  onSave: (data: ProspectFormValues) => void;
  texts: {
    title: string;
    cta: string;
  };
  defaultValues?: Partial<ProspectFormValues>;
}) => {
  const onCreateProspect = (data: any) => {
    onSave(data);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className='mr-auto text-base font-medium'>{texts.title}</h2>
        </Dialog.Title>
        <Dialog.Description className='grid  gap-4 gap-y-3'>
          <ProspectForm onSubmit={onCreateProspect} defaultValues={defaultValues} />
        </Dialog.Description>
        <Dialog.Footer>
          <Button type='button' variant='outline-secondary' onClick={() => onClose(false)} className='mr-1 w-20'>
            Annulez
          </Button>
          <Button variant='primary' type='submit' form={FORM_ID} className='w-20'>
            {texts.cta}
          </Button>
        </Dialog.Footer>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CreateEditProspectModal;
