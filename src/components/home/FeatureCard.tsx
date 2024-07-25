import React from 'react';
import { LucideActivity, LucideEarOff } from 'lucide-react';

const FeatureCard = () => {
  return (
    <div className='relative z-10 grid grid-cols-1  py-10 md:grid-cols-2 lg:grid-cols-4'>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-b lg:border-l lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <LucideActivity />
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>Built for developers</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          Built for engineers, developers, dreamers, thinkers and doers.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-b lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <LucideEarOff />
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>Ease of use</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm  text-white'>
          It's as easy as using an Apple, and as expensive as buying one.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-b lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-currency-dollar '
          >
            <path d='M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2' />
            <path d='M12 3v3m0 12v3' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>Pricing like no other</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          Our prices are best in the market. No cap, no lock, no credit card required.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-b lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-cloud '
          >
            <path d='M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>100% Uptime guarantee</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          We just cannot be taken down by anyone.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-l lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-route-alt-left '
          >
            <path d='M8 3h-5v5' />
            <path d='M16 3h5v5' />
            <path d='M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93' />
            <path d='M18 6.01v-.01' />
            <path d='M16 8.02v-.01' />
            <path d='M14 10v.01' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>
            Multi-tenant Architecture
          </span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          You can simply share passwords instead of buying new seats
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-help '
          >
            <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
            <path d='M12 17l0 .01' />
            <path d='M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>24/7 Customer Support</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          We are available a 100% of the time. Atleast our AI Agents are.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-adjustments-bolt '
          >
            <path d='M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
            <path d='M6 4v4' />
            <path d='M6 12v8' />
            <path d='M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
            <path d='M12 4v10' />
            <path d='M19 16l-2 3h4l-2 3' />
            <path d='M12 18v2' />
            <path d='M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0' />
            <path d='M18 4v1' />
            <path d='M18 9v3' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>Money back guarantee</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          If you donot like EveryAI, we will convince you to like us.
        </p>
      </div>
      <div className='group relative flex flex-col py-10 dark:border-neutral-800 lg:border-r'>
        <div className='group pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover:opacity-100 dark:from-neutral-800' />
        <div className='relative z-10 mb-4 px-10'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className='tabler-icon tabler-icon-heart '
          >
            <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
          </svg>
        </div>
        <div className='relative z-10 mb-2 px-10 text-lg font-bold'>
          <div className='absolute inset-y-0 left-0 h-6 w-1 rounded-br-full rounded-tr-full bg-neutral-300 transition duration-200 group-hover:bg-blue-500 dark:bg-neutral-700' />
          <span className='inline-block transition duration-200 group-hover:translate-x-2'>And everything else</span>
        </div>
        <p className='dark:text-muted-dark relative z-10 mx-auto max-w-xs px-10 text-sm text-muted'>
          I just ran out of copy ideas. Accept my sincere apologies
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
