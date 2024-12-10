'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import LogoSvg from '@/assets/svg/logo';
import { getSession } from '@/features/account/controllers/get-session';
import { routes } from '@/utils/route';
import HeaderSub from './header-sub';

const Header = () => {
  // const session = await getSession();
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
            <div
              className='relative'
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span className='hidden cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:inline-block'>
                <Link href='/services'>Services</Link>
              </span>

              {isServicesOpen && (
                <div className='absolute left-0 top-[calc(100%-0.5rem)] z-50 w-56 pt-2'>
                  <div className='rounded-xl bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5'>
                    <ul className='space-y-1'>
                      <li>
                        <Link
                          href='/service1'
                          className='flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900'
                        >
                          <svg className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M13 10V3L4 14h7v7l9-11h-7z'
                            />
                          </svg>
                          Service 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/service2'
                          className='flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900'
                        >
                          <svg className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                          Service 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href='/service3'
                          className='flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900'
                        >
                          <svg className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
                            />
                          </svg>
                          Service 3
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <span className='hidden cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:inline-block'>
              Comment ca marche ?
            </span>
            <span className='hidden cursor-pointer rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 sm:inline-block'>
              Nos tarifs
            </span>
            <HeaderSub />

            <button className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-[#168b86] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'>
              <Link href={true ? routes.dashboard : routes.login}>{true ? 'Dashboard' : "S'inscrire"}</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
