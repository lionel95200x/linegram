import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { PricingCard } from '@/features/pricing/components/price-card';
import { Price, ProductWithPrices, Subscription } from '@/features/pricing/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

export default function SubscriptionView({
  subscription,
  userProduct,
  userPrice,
}: {
  subscription: Subscription;
  userProduct?: ProductWithPrices;
  userPrice?: Price;
}) {
  return (
    <section className='rounded-lg bg-white px-4 py-16'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          Plan et abonnements
          <Button size='sm' variant='secondary' asChild>
            <Link href='/manage-subscription'>Gérer mon abonnement</Link>
          </Button>
        </div>
        <hr />

        <div className='mt-3 flex items-center justify-between gap-4'>
          Plan actuel
          <Button size='sm' variant='secondary' asChild>
            <Link href='/manage-subscription'>Changez de plan</Link>
          </Button>
        </div>
        <div className='mt-3 flex items-center justify-between gap-4'>
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Plan menusel</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge>Active</Badge>
            </CardContent>
          </Card>
        </div>
        <Card title='Votre plan actif'>
          {userProduct && userPrice ? (
            <PricingCard product={userProduct} price={userPrice} />
          ) : (
            <p>Vous n'avez pas d'abonnement actif</p>
          )}
          <CardFooter>
            {subscription ? (
              <Button size='sm' variant='secondary' asChild>
                <Link href='/manage-subscription'>Gerez mon abonnement</Link>
              </Button>
            ) : (
              <Button size='sm' variant='secondary' asChild>
                <Link href='/pricing'>S'abonnez</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
