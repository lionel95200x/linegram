import { DialogPanel } from '@headlessui/react';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import React from 'react';
import Button from '../../Base/Button';
import Lucide from '../../Base/Lucide';
import { FormInput, FormLabel } from '../../Base/Form';
import { Dialog } from '@/components/dashboard/Base/Headless';

const CreateAgentModal = ({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  onSave: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>
          <h2 className='mr-auto text-base font-medium'>Créer mon agent</h2>
          <Button variant='outline-secondary' className='hidden sm:flex'>
            <Lucide icon='File' className='mr-2 h-4 w-4' /> Download Docs
          </Button>
        </Dialog.Title>
        <Dialog.Description className='grid grid-cols-12 gap-4 gap-y-3'>
          <div className='col-span-12 sm:col-span-6'>
            <FormLabel htmlFor='modal-form-1'>Nom de l'agent</FormLabel>
            <FormInput id='modal-form-1' type='text' placeholder='Mon Super agent' />
          </div>
        </Dialog.Description>
        <Dialog.Footer>
          <Button type='button' variant='outline-secondary' onClick={() => onClose(false)} className='mr-1 w-20'>
            Annulez
          </Button>
          <Button variant='primary' type='button' className='w-20' onClick={onSave}>
            Créer
          </Button>
        </Dialog.Footer>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CreateAgentModal;
