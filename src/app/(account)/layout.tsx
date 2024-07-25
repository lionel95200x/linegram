import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';

import Layout from './layout-client';

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const [session] = await Promise.all([getSession()]);

  if (!session) {
    redirect('/login');
  }

  return <Layout>{children}</Layout>;
}
