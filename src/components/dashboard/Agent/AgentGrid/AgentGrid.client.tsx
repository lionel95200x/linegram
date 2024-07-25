'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';

import phoneAgent from '@/assets/images/dashboard/phone-agent.png';
import Button from '@/components/dashboard/Base/Button';
import { FormInput, FormSelect } from '@/components/dashboard/Base/Form';
import { Dialog, Menu } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import Pagination, { PaginationLink } from '@/components/dashboard/Base/Pagination';
import { Agents } from '@/features/pricing/types';

import CreateAgentModal from '../CreateAgentModal';

function AgentGridClient({ agents }: { agents: Agents[] }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const deleteButtonRef = useRef(null);

  return (
    <>
      <h2 className='intro-y mt-10 text-lg font-medium'>Mes agents</h2>
      <div className='mt-5 grid grid-cols-12 gap-6'>
        <div className='intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap'>
          <Button variant='primary' className='mr-2 shadow-md' onClick={() => setIsCreateModalOpen(true)}>
            Créer un nouvel agent
          </Button>
          <CreateAgentModal open={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSave={() => {}} />
          <Menu>
            <Menu.Button as={Button} className='!box px-2'>
              <span className='flex h-5 w-5 items-center justify-center'>
                <Lucide icon='Plus' className='h-4 w-4' />
              </span>
            </Menu.Button>
            <Menu.Items className='w-40'>
              <Menu.Item>
                <Lucide icon='Printer' className='mr-2 h-4 w-4' /> Print
              </Menu.Item>
              <Menu.Item>
                <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Export to Excel
              </Menu.Item>
              <Menu.Item>
                <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Export to PDF
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <div className='mx-auto hidden text-slate-500 md:block'>Mes agents ({agents.length})</div>
          <div className='mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0'>
            <div className='relative w-56 text-slate-500'>
              <FormInput type='text' className='!box w-56 pr-10' placeholder='Recherche...' />
              <Lucide icon='Search' className='absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4' />
            </div>
          </div>
        </div>
        {/* BEGIN: Users Layout */}
        {agents.map((agent, fakerKey) => (
          <div key={fakerKey} className='intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3'>
            <div className='box'>
              <div className='p-5'>
                <div className='image-fit h-40 overflow-hidden rounded-md before:absolute before:left-0 before:top-0 before:z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-black/10 2xl:h-56'>
                  <Image alt='Midone - HTML Admin Template' className='rounded-md' src={phoneAgent} />
                  {agent.isActive && (
                    <span className='absolute top-0 z-10 m-5 rounded bg-success/80 px-2 py-1 text-xs text-white'>
                      Actif
                    </span>
                  )}
                  <div className='absolute bottom-0 z-10 px-5 pb-6 text-white'>
                    <a href='' className='block text-base font-medium'>
                      {agent.name}
                    </a>
                    <span className='mt-3 text-xs text-white/90'>{agent.name}</span>
                  </div>
                </div>
                <div className='mt-5 text-slate-600 dark:text-slate-500'>
                  <div className='mt-2 flex items-center'>
                    <Lucide icon='Layers' className='mr-2 h-4 w-4' /> Remaining Stock:
                    {agent.prompt ? agent.prompt.slice(0, 100) : ''}
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center border-t border-slate-200/60 p-5 dark:border-darkmode-400 lg:justify-end'>
                <a className='mr-auto flex items-center text-primary' href='#'>
                  <Lucide icon='Eye' className='mr-1 h-4 w-4' /> Preview
                </a>
                <Link className='mr-3 flex items-center' href={`/agents/${agent.id}`}>
                  <Lucide icon='CheckSquare' className='mr-1 h-4 w-4' /> Modifiez
                </Link>
                <a
                  className='flex items-center text-danger'
                  href='#'
                  onClick={(event) => {
                    event.preventDefault();
                    setDeleteConfirmationModal(true);
                  }}
                >
                  <Lucide icon='Trash2' className='mr-1 h-4 w-4' /> Supprimez
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* END: Users Layout */}
        {/* BEGIN: Pagination */}
        <div className='intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap'>
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
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Dialog
        open={deleteConfirmationModal}
        onClose={() => {
          setDeleteConfirmationModal(false);
        }}
        initialFocus={deleteButtonRef}
      >
        <Dialog.Panel>
          <div className='p-5 text-center'>
            <Lucide icon='XCircle' className='mx-auto mt-3 h-16 w-16 text-danger' />
            <div className='mt-5 text-3xl'>Are you sure?</div>
            <div className='mt-2 text-slate-500'>
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className='px-5 pb-8 text-center'>
            <Button
              variant='outline-secondary'
              type='button'
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className='mr-1 w-24'
            >
              Cancel
            </Button>
            <Button variant='danger' type='button' className='w-24' ref={deleteButtonRef}>
              Delete
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default AgentGridClient;
