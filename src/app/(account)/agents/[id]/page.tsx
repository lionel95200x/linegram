import Image from 'next/image';
import { LucidePen } from 'lucide-react';

import { testCallAction } from '@/actions/agents/testCallAction';
import { CallTable } from '@/components/call/call-table';
import ConfigureAgentForm from '@/components/dashboard/Agent/ConfigureAgentForm/ConfigureAgentForm';
import { Tab, TabButton, TabGroup, TabList, TabPanel, TabPanels } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import Prospects from '@/components/dashboard/Prospects';
import { Progress } from '@/components/ui/progress';
import { getAgent, updateAgent } from '@/features/agents/controllers/get-agents';
import { getCalls } from '@/features/calls/controllers/get-calls';
import { getVoices } from '@/features/elevenlabs';
import { getProspectByAgentId } from '@/features/prospects/prospects';
import fakerData from '@/utils/faker';

const DEFAULT_TAB = 2;

async function AgentPage({ params }: { params: { id: string } }) {
  const [agent, voices, prospects] = await Promise.all([
    getAgent(params.id),
    getVoices(),
    getProspectByAgentId(params.id),
  ]);
  const [calls] = await Promise.all([getCalls()]);

  async function updateAgentAction(p: { prompt: string; firstSentence: string; name: string }) {
    'use server';

    const prompt = p.prompt;
    const firstSentence = p.firstSentence;
    const name = p.name;

    const res = await updateAgent(params.id, {
      prompt,
      firstSentence,
      name,
    });

    console.log({ res });
    return { data: res?.data };
  }

  return (
    <>
      <div className='intro-y mt-8 flex items-center'>
        <h2 className='mr-auto text-lg font-medium'>Configuration de mon agent</h2>
      </div>
      <TabGroup defaultIndex={DEFAULT_TAB}>
        <div className='intro-y box mt-5 px-5 pt-5'>
          <div className='-mx-5 flex flex-col border-b border-slate-200/60 pb-5 dark:border-darkmode-400 lg:flex-row'>
            <div className='flex flex-1 items-center justify-center px-5 lg:justify-start'>
              <div className='image-fit relative h-20 w-20 flex-none sm:h-24 sm:w-24 lg:h-32 lg:w-32'>
                <Image alt='Linegram agent' className='rounded-full' src={fakerData[0].photos[0]} />
              </div>
              <div className='ml-5'>
                <div className='flex items-center'>
                  <div className='w-24 truncate text-lg font-medium sm:w-40 sm:whitespace-normal'>{agent.name}</div>
                </div>
                <div className='text-slate-500'>{fakerData[0].jobs[0]}</div>
              </div>
            </div>
            <div className='mt-6 flex-1 border-l border-r border-t border-slate-200/60 px-5 pt-5 dark:border-darkmode-400 lg:mt-0 lg:border-t-0 lg:pt-0'>
              <div className='text-center font-medium lg:mt-3 lg:text-left'>Etape de configuration</div>
              <div className='mt-4 flex flex-col items-center justify-center lg:items-start'>
                <Progress value={33} />
                <div className='mt-3 flex items-center truncate sm:whitespace-normal'>
                  <Lucide icon='Mail' className='mr-2 h-4 w-4' />
                  Ajout des informations de bases
                </div>
                <div className='mt-3 flex items-center truncate sm:whitespace-normal'>
                  <Lucide icon='Instagram' className='mr-2 h-4 w-4' />
                  Test d'appel effectué
                </div>
                <div className='mt-3 flex items-center truncate sm:whitespace-normal'>
                  <Lucide icon='Check' className='mr-2 h-4 w-4' />
                  Ajouter un prospect
                </div>
              </div>
            </div>
            <div className='mt-6 flex flex-1 items-center justify-center border-t border-slate-200/60 px-5 pt-5 dark:border-darkmode-400 lg:mt-0 lg:border-0 lg:pt-0'>
              <div className='w-20 rounded-md py-3 text-center'>
                <div className='text-xl font-medium text-primary'>{calls.length ?? 0}</div>
                <div className='text-slate-500'>Nombre d'appel</div>
              </div>
              <div className='w-20 rounded-md py-3 text-center'>
                <div className='text-xl font-medium text-primary'>{prospects.length ?? 0}</div>
                <div className='text-slate-500'>Nombre de prospect</div>
              </div>
              <div className='w-20 rounded-md py-3 text-center'>
                <div className='text-xl font-medium text-primary'>12</div>
                <div className='text-slate-500'>Prospect interessé</div>
              </div>
            </div>
          </div>
          <TabList variant='link-tabs' className='flex-col justify-center text-center sm:flex-row lg:justify-start'>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='User' className='mr-2 h-4 w-4' /> Configuration
              </TabButton>
            </Tab>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='Shield' className='mr-2 h-4 w-4' />
                Activité
              </TabButton>
            </Tab>
            <Tab fullWidth={false}>
              <TabButton className='flex cursor-pointer items-center py-4'>
                <Lucide icon='PhoneCall' className='mr-2 h-4 w-4' />
                Prospect
              </TabButton>
            </Tab>
          </TabList>
        </div>

        <TabPanels className='mt-5'>
          <TabPanel>
            <ConfigureAgentForm agent={agent} onSave={updateAgentAction} onTestCall={testCallAction} />
          </TabPanel>
          <TabPanel>
            <CallTable calls={calls} />
          </TabPanel>
          <TabPanel>
            <Prospects agentId={params.id} prospects={prospects} />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default AgentPage;
