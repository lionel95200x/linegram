import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';
import { getAuthUser } from '@/features/account/controllers/get-user';

import Layout from './layout-client';

import '@/assets/css/app.css';

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const [session, user] = await Promise.all([getSession(), getAuthUser()]);

  console.log({ session, user });

  return <Layout>{children}</Layout>;
}
