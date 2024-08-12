'use client';
import { useState } from 'react';
import clsx from 'clsx';
import Avatar, { genConfig } from 'react-nice-avatar';

import Button from '@/components/dashboard/Base/Button';
import { FormSelect } from '@/components/dashboard/Base/Form';
import Lucide from '@/components/dashboard/Base/Lucide';
import Pagination, { PaginationLink } from '@/components/dashboard/Base/Pagination';
import Table, { TableBody, TableTd, TableTh, TableThead, TableTr } from '@/components/dashboard/Base/Table';
import { toast } from '@/components/ui/use-toast';
import { Prospects } from '@/features/pricing/types';
import { useCreateCall } from '@/hooks/calls/useCalls';
import { useCreateProspect, useUpdateProspect } from '@/hooks/prospects/useProspects';

import { Menu } from '../../Base/Headless';
import CreateEditProspectModal from '../Modal/CreateEditProspectModal';
import { ProspectFormValues } from '../ProspectForm/ProspectForm.utils';

export const List = ({ prospects, agentId }: { prospects: Prospects[]; agentId: string }) => {
  const [showCreateProspectModal, setShowCreateProspectModal] = useState(false);
  const [showEditProspectModal, setShowEditProspectModal] = useState(false);
  const { mutate: createProspectClient } = useCreateProspect({ agentId });
  const { mutate: updateProspectClient } = useUpdateProspect({ agentId });
  const { mutate: createCall } = useCreateCall();
  const [selectedProspect, setSelectedProspect] = useState<Prospects>();

  const onSubmit = (data: ProspectFormValues) => {
    createProspectClient(data);
    setShowCreateProspectModal(false);
  };

  const onUpdate = (data: ProspectFormValues) => {
    if (!selectedProspect) return;
    updateProspectClient({ ...data, prospectId: selectedProspect.id });
    setShowEditProspectModal(false);
  };

  const onCall = (prospect: Prospects) => {
    createCall({ agentId, prospectId: prospect.id });
    toast({
      title: 'Appel declenché avec succes',
      description: "Vous pourrez retrouvrez la retranscription ainsi que l'audio de l'appel",
    });
  };

  const onClickModify = (prospect: Prospects) => {
    setSelectedProspect(prospect);
    setShowEditProspectModal(true);
  };

  return (
    <div className='col-span-12 mt-6'>
      <div className='intro-y block h-10 items-center sm:flex'>
        <CreateEditProspectModal
          texts={{
            title: 'Créer un prospect',
            cta: 'Créer',
          }}
          open={showCreateProspectModal}
          onClose={() => setShowCreateProspectModal(false)}
          onSave={onSubmit}
        />
        {selectedProspect && (
          <CreateEditProspectModal
            texts={{
              title: 'Modifier un prospect',
              cta: 'Modifier',
            }}
            open={showEditProspectModal}
            onClose={() => setShowEditProspectModal(false)}
            onSave={onUpdate}
            defaultValues={{
              ...selectedProspect,
              phone: selectedProspect?.phone ?? undefined,
              firstName: selectedProspect?.firstName ?? undefined,
              lastName: selectedProspect?.lastName ?? undefined,
              extraInfo: selectedProspect?.extraInfo ?? undefined,
            }}
          />
        )}
        <h2 className='mr-5 truncate text-lg font-medium'>Mes prospects</h2>
        <div className='mt-3 flex items-center sm:ml-auto sm:mt-0'>
          <Button className='!box flex items-center text-slate-600 dark:text-slate-300'>
            <Lucide icon='FileText' className='mr-2 hidden h-4 w-4 sm:block' />
            Import Excel
          </Button>
          <Button className='!box ml-3 flex items-center text-slate-600 dark:text-slate-300'>
            <Lucide icon='FileText' className='mr-2 hidden h-4 w-4 sm:block' />
            Export Excel
          </Button>
          <Button
            variant='primary'
            className='ml-3 flex items-center '
            onClick={() => setShowCreateProspectModal(true)}
          >
            <Lucide icon='UserPlus' className='mr-2 hidden h-4 w-4 sm:block' />
            Ajouter un prospect
          </Button>
        </div>
      </div>
      <div className='intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible'>
        <Table className='border-separate border-spacing-y-[10px] sm:mt-2'>
          <TableThead>
            <TableTr>
              <TableTh className='whitespace-nowrap border-b-0'>IMAGES</TableTh>
              <TableTh className='whitespace-nowrap border-b-0'>Nom du Prospect</TableTh>
              <TableTh className='whitespace-nowrap border-b-0 text-center'>Telephone</TableTh>
              <TableTh className='whitespace-nowrap border-b-0 text-center'>STATUS</TableTh>
              <TableTh className='whitespace-nowrap border-b-0 text-center'>ACTIONS</TableTh>
            </TableTr>
          </TableThead>
          <TableBody>
            {prospects.map((p) => (
              <TableTr key={p.id} className='intro-x'>
                <TableTd className='box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                  <Avatar className='h-16 w-16' {...genConfig(`${p.firstName || p.lastName || p.phone}`)} />
                </TableTd>
                <TableTd className='box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                  <a href='' className='whitespace-nowrap font-medium'>
                    {p.firstName} {p.lastName}
                  </a>
                  <div className='mt-0.5 whitespace-nowrap text-xs text-slate-500'>{p.lastName}</div>
                </TableTd>
                <TableTd className='box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                  {p.phone}
                </TableTd>
                <TableTd className='box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                  <div
                    className={clsx([
                      'flex items-center justify-center',
                      { 'text-success': p.call_id },
                      { 'text-danger': !p.call_id },
                    ])}
                  >
                    <Lucide icon='CheckSquare' className='mr-2 h-4 w-4' />
                    {p.call_id ? 'Appelé' : 'Non appelé'}
                  </div>
                </TableTd>
                <TableTd
                  className={clsx([
                    'box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600',
                    'before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400',
                  ])}
                >
                  <div className='flex items-center justify-center'>
                    <Menu>
                      <Menu.Button as={Button} className='!box px-2'>
                        <span className='flex  items-center justify-center'>Gérer</span>
                      </Menu.Button>
                      <Menu.Items className='w-40'>
                        <Menu.Item onClick={() => onClickModify(p)}>
                          <Lucide icon='CheckSquare' className='mr-1 h-4 w-4' />
                          Modifier
                        </Menu.Item>
                        <Menu.Item>
                          <a className='flex items-center text-danger' href=''>
                            <Lucide icon='Trash2' className='mr-1 h-4 w-4' />
                            Supprimer
                          </a>
                        </Menu.Item>
                        <Menu.Item onClick={() => onCall(p)}>
                          <Lucide icon='Phone' className='mr-2 h-4 w-4' /> Test appel
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </TableTd>
              </TableTr>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap'>
        <Pagination className='w-full sm:mr-auto sm:w-auto'>
          <PaginationLink>
            <Lucide icon='ChevronsLeft' className='h-4 w-4' />
          </PaginationLink>
          <PaginationLink>
            <Lucide icon='ChevronLeft' className='h-4 w-4' />
          </PaginationLink>
          <PaginationLink>...</PaginationLink>
          <PaginationLink>1</PaginationLink>
          <PaginationLink active>2</PaginationLink>
          <PaginationLink>3</PaginationLink>
          <PaginationLink>...</PaginationLink>
          <PaginationLink>
            <Lucide icon='ChevronRight' className='h-4 w-4' />
          </PaginationLink>
          <PaginationLink>
            <Lucide icon='ChevronsRight' className='h-4 w-4' />
          </PaginationLink>
        </Pagination>
        <FormSelect className='!box mt-3 w-20 sm:mt-0'>
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </FormSelect>
      </div>
    </div>
  );
};
