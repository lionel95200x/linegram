import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAgents } from '@/features/agents/controllers/get-agents';

export default async function AccountPage() {
  const [agents] = await Promise.all([getAgents()]);

  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <h1 className='mb-8 text-center'>Dashboard</h1>
      <div className='flex flex-col gap-4'>
        Voici les agents que vous avez deja configurés
        <div className='flex flex-row flex-wrap gap-4'>
          {agents.map((a) => (
            <Card key={a.id} className='w-[350px]'>
              <CardHeader>
                <CardTitle>Mon agent</CardTitle>
                <CardDescription>{a.name}</CardDescription>
              </CardHeader>
              <CardContent>{a.prompt?.substring(0, 100) + '...'}</CardContent>
              <CardFooter className='flex justify-between'>
                <Button variant='secondary'>Supprimez</Button>
                <Button asChild>
                  <Link href={`/agents/${a.id}`}>Configurer</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button>Creez un nouvel agent</Button>
      </div>
    </section>
  );
}
