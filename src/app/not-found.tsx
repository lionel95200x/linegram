import Image from 'next/image';
import Link from 'next/link';

import errorIllustration from '@/assets/images/error-illustration.svg';
import Button from '@/components/dashboard/Base/Button';

function Main() {
  return (
    <>
      <div className='bg-gradient-to-b from-theme-1 to-theme-2 py-2 dark:from-darkmode-800 dark:to-darkmode-800'>
        <div className='container'>
          {/* BEGIN: Error Page */}
          <div className='error-page flex h-screen flex-col items-center justify-center text-center lg:flex-row lg:text-left'>
            <div className='-intro-x lg:mr-20'>
              <Image alt='Linegram - Agent appel IA' className='h-48 w-[450px] lg:h-auto' src={errorIllustration} />
            </div>
            <div className='mt-10 text-white lg:mt-0'>
              <div className='intro-x text-8xl font-medium'>404</div>
              <div className='intro-x mt-5 text-xl font-medium lg:text-3xl'>Oops. Cette page n'existe pas.</div>
              <div className='intro-x mt-3 text-lg'>
                Vous avez peut-être tapé l'adresse ou la page a peut-être été déplacée.
              </div>
              <Button className='intro-x mt-10 border-white px-4 py-3 text-white dark:border-darkmode-400 dark:text-slate-200'>
                <Link href='/'>Retour à l'accueil</Link>
              </Button>
            </div>
          </div>
          {/* END: Error Page */}
        </div>
      </div>
    </>
  );
}

export default Main;
