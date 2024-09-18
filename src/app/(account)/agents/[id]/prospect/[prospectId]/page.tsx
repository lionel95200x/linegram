import EmptyCall from '@/assets/svg/EmptyCall';
import ChatView from '@/components/call/ChatView/ChatView';
import Button from '@/components/dashboard/Base/Button';
import { Tab, TabButton, TabGroup, TabList, TabPanel, TabPanels } from '@/components/dashboard/Base/Headless';
import InfoCard from '@/components/dashboard/Base/InfoCard/InfoCard';
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getAgent } from '@/features/agents/controllers/get-agents';
import { getCallByProspect } from '@/features/calls/controllers/get-calls';
import { getProspect } from '@/features/prospects/prospects';
import fakerData from '@/utils/faker';
import { icons } from 'lucide-react';
import Image from 'next/image';
import Lucide from '@/components/dashboard/Base/Lucide';
import HeaderInformation from '@/components/dashboard/HeaderInformation/HeaderInformation';
import { formatDate } from '@/utils/to-date-time';
import EmptyTable from '@/components/dashboard/Table/EmptyTable';

const ItemInfoProspect = ({ text, value, icon }: { text: string; value: string; icon: keyof typeof icons }) => (
  <div className={`flex items-center border-b border-slate-200/60 py-3 dark:border-darkmode-400`}>
    <div>
      <div className='text-slate-500'>{text}</div>
      <div className='mt-1'>{value}</div>
    </div>
    <Lucide icon={icon} className='ml-auto h-4 w-4 text-slate-500' />
  </div>
);

export default async function CallDetailPage({ params }: { params: { id: string; prospectId: string } }) {
  const { prospectId } = params;
  const [prospect, calls] = await Promise.all([getProspect(prospectId), getCallByProspect(prospectId)]);

  const [agent] = await Promise.all([getAgent(prospect.agent_id as string)]);

  return (
    <section className='rounded-lg  px-4 py-16'>
      <div className='box intro-y box mt-5 px-5 pt-5'>
        <HeaderInformation
          name={`${prospect.firstName} ${prospect.lastName}`}
          description={prospect.phone}
          canEditName={false}
          infos={[
            { text: prospect.email, icon: 'Mail' },
            { text: prospect.extraInfo, icon: 'Activity' },
            { text: formatDate(prospect.created_at), icon: 'Clock' },
          ]}
        >
          <InfoCard
            isBox={false}
            icon='PhoneCall'
            title='Nombre d appel'
            value={calls.length}
            percentage={50}
            percentageText='33% Higher than last month'
          />
        </HeaderInformation>
      </div>

      <div className='block py-7'>
        <Button variant='primary' className='mr-2 shadow-md'>
          Lancez un nouvel appel
        </Button>
      </div>
      <h3 className='mb-8 text-center'>
        {calls.length > 0
          ? `Compte rendu ${calls.length > 1 ? 'des appels' : "de l'appel"}`
          : "Le robot n'a pas encore passé d'appel a ce prospect"}
      </h3>

      {calls.length ? (
        <ChatView calls={calls} agentName={agent.name} />
      ) : (
        <EmptyTable text='Aucun détail sur cet appel' />
      )}
    </section>
  );
}
