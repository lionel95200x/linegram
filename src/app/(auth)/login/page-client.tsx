'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { IoLogoGoogle } from 'react-icons/io5';

import illustrationUrl from '@/assets/images/illustration.svg';
import logoUrl from '@/assets/images/logo.svg';
import Button from '@/components/dashboard/Base/Button';
import { FormCheck, FormInput } from '@/components/dashboard/Base/Form';
import { toast } from '@/components/ui/use-toast';
import { ActionResponse } from '@/types/action-response';

function LoginClient({
  signInWithOAuth,
  signInWithEmail,
}: {
  signInWithOAuth: (provider: 'github' | 'google') => Promise<ActionResponse>;
  signInWithEmail: (email: string) => Promise<ActionResponse>;
}) {
  const [pending, setPending] = useState(false);

  async function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    const form = event.target as HTMLFormElement;
    const email = form['email'].value;
    const response = await signInWithEmail(email);

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'Une erreur est survenue lors de la connexion. Veuillez réessayer.',
      });
    } else {
      toast({
        description: `Pour continuer, cliquez sur le lien dans l'email envoyé à: ${email}`,
      });
    }

    form.reset();
    setPending(false);
  }

  async function handleOAuthClick(provider: 'google' | 'github') {
    setPending(true);
    const response = await signInWithOAuth(provider);

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'Une erreur est survenue lors de la connexion. Veuillez réessayer.',
      });
      setPending(false);
    }
  }
  return (
    <>
      <div
        className={clsx([
          'relative h-screen bg-primary p-3 dark:bg-darkmode-800 sm:px-8 lg:overflow-hidden xl:bg-white xl:dark:bg-darkmode-600',
          "before:absolute before:inset-y-0 before:left-0 before:-mb-[16%] before:-ml-[13%] before:-mt-[28%] before:hidden before:w-[57%] before:rotate-[-4.5deg] before:transform before:rounded-[100%] before:bg-primary/20 before:content-[''] before:dark:bg-darkmode-400 before:xl:block",
          "after:absolute after:inset-y-0 after:left-0 after:-mb-[13%] after:-ml-[13%] after:-mt-[20%] after:hidden after:w-[57%] after:rotate-[-4.5deg] after:transform after:rounded-[100%] after:bg-primary after:content-[''] after:dark:bg-darkmode-700 after:xl:block",
        ])}
      >
        <div className='container relative z-10 sm:px-10'>
          <div className='block grid-cols-2 gap-4 xl:grid'>
            {/* BEGIN: Login Info */}
            <div className='hidden min-h-screen flex-col xl:flex'>
              <a href='' className='-intro-x flex items-center pt-5'>
                <Image alt='Linegram - Agent appel IA' className='w-6' src={logoUrl} />
                <span className='ml-3 text-lg text-white'> Rubick </span>
              </a>
              <div className='my-auto'>
                <Image alt='Linegram - Agent appel IA' className='-intro-x -mt-16 w-1/2' src={illustrationUrl} />
                <div className='-intro-x mt-10 text-xl font-medium leading-tight text-white'>
                  Découvrez la puissance de notre robot d'appel IA <br />
                  et transformez votre manière de communiquer.
                </div>
                <div className='-intro-x mt-5 max-w-md text-sm text-white text-opacity-70 dark:text-slate-400'>
                  Optimisez vos interactions et boostez votre productivité avec une gestion intelligente de vos appels.
                </div>
              </div>
            </div>
            {/* END: Login Info */}
            {/* BEGIN: Login Form */}
            <div className='my-10 flex h-screen py-5 xl:my-0 xl:h-auto xl:py-0'>
              <div className='mx-auto my-auto w-full rounded-md bg-white px-5 py-8 shadow-md dark:bg-darkmode-600 sm:w-3/4 sm:px-8 lg:w-2/4 xl:ml-20 xl:w-auto xl:bg-transparent xl:p-0 xl:shadow-none'>
                <h2 className='intro-x text-center text-2xl font-bold text-primary xl:text-left xl:text-3xl'>
                  Connexion
                </h2>
                <div className='intro-x mt-2 text-center text-slate-800 xl:hidden'>
                  Créer rapidement et facilement votre Robot d'appel Intelligents
                </div>
                <form onSubmit={handleEmailSubmit}>
                  <div className='intro-x mt-8'>
                    <FormInput
                      type='email'
                      name='email'
                      className='intro-x block min-w-full px-4 py-3 xl:min-w-[350px]'
                      placeholder='Email'
                    />
                  </div>
                  <div className='intro-x mt-5 text-center xl:mt-8 xl:text-left'>
                    <Button variant='primary' type='submit' className='w-full px-4 py-3 align-top xl:mr-3 xl:w-32'>
                      Connexion
                    </Button>

                    <Button
                      onClick={() => handleOAuthClick('google')}
                      disabled={pending}
                      variant='google'
                      className='mt-3 w-full px-4 py-3 align-top xl:mt-0 xl:w-32'
                    >
                      <IoLogoGoogle size={20} />
                      Google
                    </Button>
                  </div>
                </form>
                <div className='intro-x mt-10 text-center text-slate-600 dark:text-slate-500 xl:mt-24 xl:text-left'>
                  En vous inscrivant, vous acceptez nos{' '}
                  <a className='text-primary dark:text-slate-200' href=''>
                    Conditions d'utilisation
                  </a>{' '}
                  &{' '}
                  <a className='text-primary dark:text-slate-200' href=''>
                    Politique de confidentialité
                  </a>
                </div>
              </div>
            </div>
            {/* END: Login Form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginClient;
