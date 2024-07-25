import ConfigureAgentForm from '@/components/agents/ConfigureAgentForm';
import TestAgentButton from '@/components/agents/TestAgentButton';
import { CallTable } from '@/components/call/call-table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAgent, updateAgent } from '@/features/agents/controllers/get-agents';
import { getVoices } from '@/features/elevenlabs';

export default async function AccountPage({ params }: { params: { id: string } }) {
  async function updateAgentAction(p: { prompt: string; firstSentence: string; name: string }) {
    'use server';

    const prompt = p.prompt;
    const firstSentence = p.firstSentence;
    const name = p.name;

    const { data, error } = await updateAgent(params.id, {
      prompt,
      firstSentence,
      name,
    });

    return { data, error };
  }

  const [agent, voices] = await Promise.all([getAgent(params.id), getVoices()]);

  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <h1 className='mb-8 text-center'>Mon agent</h1>

      <Tabs defaultValue='information' className=''>
        <TabsList>
          <TabsTrigger value='information'>Informations</TabsTrigger>
          <TabsTrigger value='call'>Appel</TabsTrigger>
        </TabsList>
        <TabsContent value='information'>
          <h3>{agent.name}</h3>

          <div className='grid w-full gap-1.5'>
            <ConfigureAgentForm
              voices={voices}
              name={agent.name ?? ''}
              prompt={agent.prompt ?? ''}
              firstSentence={agent.first_sentence ?? ''}
              onSubmit={updateAgentAction}
            />
          </div>

          <TestAgentButton agentId={agent.id} />
        </TabsContent>
        <TabsContent value='call'>
          <CallTable />
        </TabsContent>
      </Tabs>
    </section>
  );
}
