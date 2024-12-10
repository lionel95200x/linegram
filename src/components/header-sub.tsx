'use client';
import { HREF_PHONE } from '@/utils/constant';
import Link from 'next/link';
import React, { useState } from 'react';

const HeaderSub = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='relative' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <button
          type='button'
          className='inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900'
          aria-expanded={isOpen}
        >
          <span>Nos solutions</span>
          <svg
            className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </button>

        {isOpen && <DropdownMenu />}
      </div>
    </div>
  );
};

const DropdownMenu = () => (
  <>
    <div className='absolute -bottom-5 left-0 right-0 h-5' />
    <div className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
      <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5'>
        <div className='p-4'>
          {solutions.map((solution) => (
            <MenuSolutionItem key={solution.id} solution={solution} />
          ))}
        </div>

        <FooterActions />
      </div>
    </div>
  </>
);

const FooterActions = () => (
  <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
    <a
      href='#'
      className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
    >
      <svg className='size-5 h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z'
          clipRule='evenodd'
        />
      </svg>
      Voir la démo
    </a>
    <Link
      href={HREF_PHONE}
      className='flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100'
    >
      <svg className='size-5  h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z'
          clipRule='evenodd'
        />
      </svg>
      Contacter un commercial
    </Link>
  </div>
);

interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const solutions: Solution[] = [
  {
    id: 'analytics',
    title: 'ChatBot IA',
    description: 'Nos robots qui répondents a vos clients',
    icon: (
      <svg
        className='size-5 text-gray-600 group-hover:text-indigo-600'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z' />
        <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z' />
      </svg>
    ),
  },
  {
    id: 'engagement',
    title: 'Call Bot IA',
    description: 'Agent IA pour vos appels entrants/sortants',
    icon: (
      <svg
        className='size-6 text-gray-600 group-hover:text-indigo-600'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59'
        />
      </svg>
    ),
  },
  // ... autres solutions
];

interface MenuSolutionItemProps {
  solution: Solution;
}

const MenuSolutionItem = ({ solution }: MenuSolutionItemProps) => (
  <div className='group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50'>
    <div className='size-11 mt-1 flex flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
      {solution.icon}
    </div>
    <div>
      <a href='#' className='font-semibold text-gray-900'>
        {solution.title}
        <span className='absolute inset-0' />
      </a>
      <p className='mt-1 text-gray-600'>{solution.description}</p>
    </div>
  </div>
);

export default HeaderSub;
