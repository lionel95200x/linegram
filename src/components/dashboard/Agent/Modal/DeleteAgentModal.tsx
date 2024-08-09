import React, { useRef } from 'react';

import Button from '../../Base/Button';
import { Dialog } from '../../Base/Headless';
import Lucide from '../../Base/Lucide';

const DeleteAgentModal = ({
  open,
  onClose,
  onDelete,
}: {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}) => {
  const deleteButtonRef = useRef(null);

  return (
    <Dialog open={open} onClose={onClose} initialFocus={deleteButtonRef}>
      <Dialog.Panel>
        <div className='p-5 text-center'>
          <Lucide icon='XCircle' className='mx-auto mt-3 h-16 w-16 text-danger' />
          <div className='mt-5 text-3xl'>Voulez vous supprimer cet agent ?</div>
          <div className='mt-2 text-slate-500'>
            Cette action est irréversible, toutes les informations ainsi que les historiques d'appel seront effacé .
          </div>
        </div>
        <div className='px-5 pb-8 text-center'>
          <Button variant='outline-secondary' type='button' onClick={onClose} className='mr-1 w-24'>
            Annulez
          </Button>
          <Button variant='danger' type='button' className='w-24' ref={deleteButtonRef} onClick={onDelete}>
            Supprimez
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DeleteAgentModal;
