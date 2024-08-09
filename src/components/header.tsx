import React from 'react';
import Link from 'next/link';

import LogoSvg from '@/assets/svg/logo';
import { getSession } from '@/features/account/controllers/get-session';

const Header = async () => {
  const session = await getSession();

  return (
    <header className='fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg'>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex shrink-0'>
            <Link className=' flex items-center gap-1' href='/'>
              <LogoSvg />
            </Link>
          </div>
          <div className='hidden md:flex md:items-center md:justify-center md:gap-5' />
          <div className='flex items-center justify-end sm:gap-3'>
            <span className='hidden cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:inline-block'>
              Comment ca marche ?
            </span>
            <span className='hidden cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:inline-block'>
              Nos tarifs
            </span>

            <button
              className='
undefined inline-flex items-center justify-center gap-2 rounded-xl bg-[#20B2AA] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#168b86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
            >
              <Link href={session ? '/dashboard' : '/signup'}>{session ? 'Dashboard' : "S'inscrire"}</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
