import ChatView from '@/components/call/ChatView/ChatView';
import { Tab, TabButton, TabGroup, TabList, TabPanel, TabPanels } from '@/components/dashboard/Base/Headless';
import InfoCard from '@/components/dashboard/Base/InfoCard/InfoCard';
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getCall } from '@/features/calls/controllers/get-calls';

export default async function CallDetailPage({ params }: { params: { id: string; callId: string } }) {
  const [call] = await Promise.all([getCall(params.callId)]);

  const metadata = call.metadata as { type: string; text: string; createdAt: string }[];

  return (
    <section className='rounded-lg  px-4 py-16'>
      <InfoCard
        icon='PhoneCall'
        title='Duré appel'
        value={1}
        percentage={50}
        percentageText='33% Higher than last month'
      />
      <h3 className='mb-8 text-center'>Compte rendu de l&apos;appel</h3>

      <TabGroup className='col-span-12 lg:col-span-4 2xl:col-span-3'>
        <div className='intro-y pr-1'>
          <div className='box p-2'>
            <TabList variant='pills'>
              <Tab>
                <TabButton className='w-full py-2' as='button'>
                  Chat
                </TabButton>
              </Tab>
              <Tab>
                <TabButton className='w-full py-2' as='button'>
                  Tableau
                </TabButton>
              </Tab>
            </TabList>
          </div>
        </div>

        <TabPanels>
          <TabPanel>
            <ChatView />
          </TabPanel>
          <TabPanel>
            <TableCaption>Résume de la conversation</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className=''>Type</TableHead>
                <TableHead>Text</TableHead>
                <TableHead className='text-right'>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {metadata?.map((call) => (
                <TableRow key={call.type}>
                  <TableCell className='font-medium'>{call.type}</TableCell>
                  <TableCell className='font-medium'>{call.text}</TableCell>
                  <TableCell className='text-right'>{call.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  );
}
