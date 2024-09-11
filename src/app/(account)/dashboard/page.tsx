import clsx from 'clsx';

import AgentGrid from '@/components/dashboard/Agent/AgentGrid';
import InfoCard from '@/components/dashboard/Base/InfoCard/InfoCard';
import Lucide from '@/components/dashboard/Base/Lucide';
import Tippy from '@/components/dashboard/Base/Tippy';
import { getAgents } from '@/features/agents/controllers/get-agents';

async function Main() {
  const [agents] = await Promise.all([getAgents()]);

  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 2xl:col-span-9'>
        <div className='grid grid-cols-12 gap-6'>
          {/* BEGIN: General Report */}
          <div className='col-span-12 mt-8'>
            <div className='intro-y flex h-10 items-center'>
              <h2 className='mr-5 truncate text-lg font-medium'>Mes agents</h2>
              <a href='' className='ml-auto flex items-center text-primary'>
                <Lucide icon='RefreshCcw' className='mr-3 h-4 w-4' /> Rechargez les données
              </a>
            </div>
            <div className='mt-5 grid grid-cols-12 gap-6'>
              <div className='intro-y col-span-12 sm:col-span-6 xl:col-span-3'>
                <div
                  className={clsx([
                    'zoom-in relative',
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <InfoCard
                    icon='User'
                    title='Agents'
                    value={agents.length}
                    percentage={50}
                    percentageText='33% Higher than last month'
                  />
                </div>
              </div>
              <div className='intro-y col-span-12 sm:col-span-6 xl:col-span-3'>
                <div
                  className={clsx([
                    'zoom-in relative',
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <InfoCard
                    icon='PhoneCall'
                    title='Calls'
                    value={0}
                    percentage={50}
                    percentageText='33% Higher than last month'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          <div className='col-span-12 '>
            <AgentGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
