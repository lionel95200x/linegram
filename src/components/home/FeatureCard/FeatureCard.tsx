import { HREF_PHONE } from '@/utils/constant';
import Link from 'next/link';
import React from 'react';

const FeatureCard = () => {
  return (
    <section className='bg-white py-24 '>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 flex flex-col items-center justify-center gap-x-0 gap-y-6 max-md:mx-auto max-md:max-w-lg lg:mb-16 lg:flex-row lg:justify-between lg:gap-y-0'>
          <div className='relative w-full text-center lg:w-2/4 lg:text-left'>
            <h2 className='mx-auto max-w-max text-4xl font-bold leading-[3.25rem] text-gray-900 lg:mx-0 lg:mb-6 lg:max-w-md'>
              Enjoy the finest features with our products
            </h2>
          </div>
          <div className='relative w-full text-center  lg:w-2/4 lg:text-left'>
            <p className='mb-5 text-lg font-normal text-gray-500'>
              We provide all the advantages that can simplify all your financial transactions without any further
              requirements
            </p>
            <Link
              href={HREF_PHONE}
              className='flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 hover:text-indigo-700 lg:justify-start '
            >
              Démarrez maintenant
              <svg width={20} height={20} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5'
                  stroke='#4F46E5'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className='flex flex-wrap items-center  justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0'>
          <div className='group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7'>
            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white '>
              <svg width={30} height={30} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z'
                  stroke='#4F46E5'
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h4 className='mb-3 text-xl font-semibold capitalize text-gray-900 transition-all duration-500 group-hover:text-white'>
              Easy Payment
            </h4>
            <p className='text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white'>
              We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances
            </p>
          </div>
          <div className='group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7'>
            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white '>
              <svg width={30} height={30} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z'
                  stroke='#4F46E5'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h4 className='mb-3 text-xl font-semibold capitalize text-gray-900 transition-all duration-500 group-hover:text-white'>
              Safe Transaction
            </h4>
            <p className='text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white'>
              We have the most up-to-date security to support the security of all our customers in carrying out all
              transactions.
            </p>
          </div>
          <div className='group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7'>
            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white '>
              <svg width={30} height={30} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
                  stroke='#4F46E5'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h4 className='mb-3 text-xl font-semibold capitalize text-gray-900 transition-all duration-500 group-hover:text-white'>
              Fast Customer Service{' '}
            </h4>
            <p className='text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white'>
              Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week
            </p>
          </div>
          <div className='group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7'>
            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white '>
              <svg width={30} height={30} viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z'
                  stroke='#4F46E5'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h4 className='mb-3 text-xl font-semibold capitalize text-gray-900 transition-all duration-500 group-hover:text-white'>
              Quick Transaction
            </h4>
            <p className='text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white'>
              We provide faster transaction speeds than competitors, so money arrives and is received faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
