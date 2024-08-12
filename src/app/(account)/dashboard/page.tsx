import clsx from 'clsx';

import AgentGrid from '@/components/dashboard/Agent/AgentGrid';
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
                <Lucide icon='RefreshCcw' className='mr-3 h-4 w-4' /> Reload Data
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
                  <div className='box p-5'>
                    <div className='flex'>
                      <Lucide icon='User' className='h-[28px] w-[28px] text-primary' />
                      <div className='ml-auto'>
                        <Tippy
                          as='div'
                          className='flex cursor-pointer items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white'
                          content='33% Higher than last month'
                        >
                          50%
                          <Lucide icon='ChevronUp' className='ml-0.5 h-4 w-4' />
                        </Tippy>
                      </div>
                    </div>
                    <div className='mt-6 text-3xl font-medium leading-8'>{agents.length}</div>
                    <div className='mt-1 text-base text-slate-500'>Agents</div>
                  </div>
                </div>
              </div>
              <div className='intro-y col-span-12 sm:col-span-6 xl:col-span-3'>
                <div
                  className={clsx([
                    'zoom-in relative',
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className='box p-5'>
                    <div className='flex'>
                      <Lucide icon='PhoneCall' className='h-[28px] w-[28px] text-pending' />
                      <div className='ml-auto'>
                        <Tippy
                          as='div'
                          className='flex cursor-pointer items-center rounded-full bg-danger py-[3px] pl-2 pr-1 text-xs font-medium text-white'
                          content='2% Lower than last month'
                        >
                          2%
                          <Lucide icon='ChevronDown' className='ml-0.5 h-4 w-4' />
                        </Tippy>
                      </div>
                    </div>
                    <div className='mt-6 text-3xl font-medium leading-8'>32</div>
                    <div className='mt-1 text-base text-slate-500'>Nombre d'appel passé</div>
                  </div>
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
