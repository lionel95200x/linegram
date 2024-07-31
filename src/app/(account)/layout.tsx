import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';
import { getAuthUser } from '@/features/account/controllers/get-user';

import Layout from './layout-client';

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const [session, user] = await Promise.all([getSession(), getAuthUser()]);

  if (!session) {
    redirect('/login');
  }

  console.log({ user });

  return <Layout user={user}>{children}</Layout>;
}
