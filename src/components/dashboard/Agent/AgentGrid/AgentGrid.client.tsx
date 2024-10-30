'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import phoneAgent from '@/assets/images/dashboard/phone-agent.png';
import Button from '@/components/dashboard/Base/Button';
import { FormInput } from '@/components/dashboard/Base/Form';
import Lucide from '@/components/dashboard/Base/Lucide';
import { Agents } from '@/features/pricing/types';

import CreateAgentModal from '../CreateAgentModal';
import DeleteAgentModal from '../Modal/DeleteAgentModal';
import EmptyTable from '../../Table/EmptyTable';

function AgentGridClient({ agents, createAgent }: { agents: Agents[]; createAgent: (name: string) => any }) {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const [searchAgent, setSearchAgent] = useState('');
  const onSave = (name: string) => {
    createAgent(name);
    setIsCreateModalOpen(false);
  };

  const filteredAgent = agents.filter(
    (agent) =>
      agent.name?.toLowerCase().includes(searchAgent.toLowerCase()) ||
      agent.first_sentence?.toLowerCase().includes(searchAgent.toLowerCase())
  );

  return (
    <>
      <h2 className='intro-y mt-10 text-lg font-medium'>Mes agents</h2>
      <div className='mt-5 grid grid-cols-12 gap-6'>
        <div className='intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap'>
          <Button variant='primary' className='mr-2 shadow-md' onClick={() => setIsCreateModalOpen(true)}>
            Créer un nouvel agent
          </Button>
          <CreateAgentModal open={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSave={onSave} />
          <div className='mx-auto hidden text-slate-500 md:block'>Mes agents ({filteredAgent.length})</div>
          <div className='mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0'>
            <div className='relative w-56 text-slate-500'>
              <FormInput
                value={searchAgent}
                type='text'
                className='!box w-56 pr-10'
                placeholder='Recherche...'
                onChange={(e) => setSearchAgent(e.target.value)}
              />
              <Lucide icon='Search' className='absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4' />
            </div>
          </div>
        </div>
        {/* BEGIN: Users Layout */}
        {filteredAgent ? (
          filteredAgent.map((agent, fakerKey) => (
            <div key={fakerKey} className='intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4'>
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
                    <div>Phras d'accroche</div>
                    <div className='mt-2 flex items-center'>
                      <Lucide icon='MessageCircle' className='mr-2 h-4 w-4' />
                      {agent.first_sentence ? agent.first_sentence.slice(0, 100) : ''}
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-center border-t border-slate-200/60 p-5 dark:border-darkmode-400 lg:justify-end'>
                  <Link className='mr-3 flex items-center' href={`/agents/${agent.id}`}>
                    <Lucide icon='CheckSquare' className='mr-1 h-4 w-4' />
                    Configurer
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
          ))
        ) : (
          <EmptyTable text="Cet agent n'as pas encore passé d'appel" />
        )}
        {/* END: Users Layout */}

        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <DeleteAgentModal
        open={deleteConfirmationModal}
        onClose={() => setDeleteConfirmationModal(false)}
        onDelete={() => {}}
      />
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default AgentGridClient;
