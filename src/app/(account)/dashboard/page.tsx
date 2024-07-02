import { PropsWithChildren, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createAgent } from '@/features/agents/controllers/get-agents';
import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';

export default async function DashboardPage() {
  async function createCustomAgent(p: FormData) {
    'use server';
    const supabase = createSupabaseServerClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log({ user });
    const { data, error } = await createAgent({
      user_id: user?.id,
      name: 'Mon vendeur preff',
      prompt: 'Je suis un agent cool qui vends des panneau',
      first_sentence: 'Hello les gars',
    });

    console.log({ data, error });
    return { data, error };
  }

  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <h1 className='mb-8 text-center'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
        <Card title='Your Plan'>
          Welcome on create caller page
          <form action={createCustomAgent}>
            <button type='submit'>Submit</button>
            <div>Voici la liste de vos agents</div>
            <Button>Creer votre premier agent</Button>
            <Input value={''} placeholder='Nom de votre agent'></Input>
            <Button type='submit'>Créer un agent</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  footer,
  children,
}: PropsWithChildren<{
  title: string;
  footer?: ReactNode;
}>) {
  return (
    <div className='m-auto w-full max-w-3xl rounded-md bg-zinc-900'>
      <div className='p-4'>
        <h2 className='mb-1 text-xl font-semibold'>{title}</h2>
        <div className='py-4'>{children}</div>
      </div>
      <div className='flex justify-end rounded-b-md border-t border-zinc-800 p-4'>{footer}</div>
    </div>
  );
}
