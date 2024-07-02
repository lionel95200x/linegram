import React from 'react';

import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getAgent } from '@/features/agents/controllers/get-agents';

export default async function AccountPage({ params }: { params: { id: string } }) {
  console.log({ params });
  const [agent] = await Promise.all([getAgent(params.id)]);

  console.log(agent);
  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <h1 className='mb-8 text-center'>Mon agent</h1>

      <h3>{agent.name}</h3>

      <h4>Voice</h4>

      <h4>Prompt</h4>

      <div className='grid w-full gap-1.5'>
        <Label htmlFor='message-2'>Description de l&apos;agent</Label>
        <Textarea placeholder='Type your message here.' id='message-2' value={agent.prompt || ''} />
        <p className='text-sm text-muted-foreground'>Your message will be copied to the support team.</p>
      </div>
    </section>
  );
}
