import { redirect } from 'next/navigation';

import { getSession } from '@/features/account/controllers/get-session';
import { getSubscription } from '@/features/account/controllers/get-subscription';

import { signInWithEmail, signInWithOAuth } from '../auth-actions';

import LoginClient from './page-client';

export default async function LoginPage() {
  const session = await getSession();
  const subscription = await getSubscription();

  if (session && subscription) {
    redirect('/account');
  }

  if (session && !subscription) {
    redirect('/pricing');
  }

  return <LoginClient signInWithOAuth={signInWithOAuth} signInWithEmail={signInWithEmail} />;
}
