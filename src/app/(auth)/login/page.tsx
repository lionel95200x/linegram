import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';

import { signInWithEmail, signInWithOAuth } from '../auth-actions';

import LoginClient from './page-client';

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    redirect('/dashboard');
  }

  return <LoginClient signInWithOAuth={signInWithOAuth} signInWithEmail={signInWithEmail} />;
}
