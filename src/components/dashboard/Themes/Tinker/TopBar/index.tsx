import { Fragment, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import _ from 'lodash';

import AccountMenu from '@/components/dashboard/AccountMenu';
import Breadcrumb from '@/components/dashboard/Base/Breadcrumb';
import { FormInput } from '@/components/dashboard/Base/Form';
import { Popover } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import fakerData from '@/utils/faker';
import { Transition } from '@headlessui/react';

function Main() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className='relative z-[51] flex h-[67px] items-center border-b border-slate-200'>
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className='-intro-x mr-auto hidden sm:flex'>
          <Breadcrumb.Link to='/'>Application</Breadcrumb.Link>
          <Breadcrumb.Link to='/' active={true}>
            Dashboard
          </Breadcrumb.Link>
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Search */}
        <div className='intro-x relative mr-3 sm:mr-6'>
          <div className='relative hidden sm:block'>
            <FormInput
              type='text'
              className='w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400/70'
              placeholder='Search...'
              onFocus={showSearchDropdown}
              onBlur={hideSearchDropdown}
            />
            <Lucide
              icon='Search'
              className='absolute inset-y-0 right-0 my-auto mr-3 h-5 w-5 text-slate-600 dark:text-slate-500'
            />
          </div>
          <a className='relative text-slate-600 sm:hidden' href=''>
            <Lucide icon='Search' className='h-5 w-5 dark:text-slate-500' />
          </a>
          <Transition
            as={Fragment}
            show={searchDropdown}
            enter='transition-all ease-linear duration-150'
            enterFrom='mt-5 invisible opacity-0 translate-y-1'
            enterTo='mt-[3px] visible opacity-100 translate-y-0'
            leave='transition-all ease-linear duration-150'
            leaveFrom='mt-[3px] visible opacity-100 translate-y-0'
            leaveTo='mt-5 invisible opacity-0 translate-y-1'
          >
            <div className='absolute right-0 z-10 mt-[3px]'>
              <div className='box w-[450px] p-5'>
                <div className='mb-2 font-medium'>Pages</div>
                <div className='mb-5'>
                  <a href='' className='flex items-center'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success dark:bg-success/10'>
                      <Lucide icon='Inbox' className='h-4 w-4' />
                    </div>
                    <div className='ml-3'>Mail Settings</div>
                  </a>
                  <a href='' className='mt-2 flex items-center'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-pending/10 text-pending'>
                      <Lucide icon='Users' className='h-4 w-4' />
                    </div>
                    <div className='ml-3'>Users & Permissions</div>
                  </a>
                  <a href='' className='mt-2 flex items-center'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary/80 dark:bg-primary/20'>
                      <Lucide icon='CreditCard' className='h-4 w-4' />
                    </div>
                    <div className='ml-3'>Transactions Report</div>
                  </a>
                </div>
                <div className='mb-2 font-medium'>Users</div>
                <div className='mb-5'>
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <a key={fakerKey} href='' className='mt-2 flex items-center'>
                      <div className='image-fit h-8 w-8'>
                        <Image alt='Linegram - Agent appel IA' className='rounded-full' src={faker.photos[0]} />
                      </div>
                      <div className='ml-3'>{faker.users[0].name}</div>
                      <div className='ml-auto w-48 truncate text-right text-xs text-slate-500'>
                        {faker.users[0].email}
                      </div>
                    </a>
                  ))}
                </div>
                <div className='mb-2 font-medium'>Products</div>
                {_.take(fakerData, 4).map((faker, fakerKey) => (
                  <a key={fakerKey} href='' className='mt-2 flex items-center'>
                    <div className='image-fit h-8 w-8'>
                      <Image alt='Linegram - Agent appel IA' className='rounded-full' src={faker.images[0]} />
                    </div>
                    <div className='ml-3'>{faker.products[0].name}</div>
                    <div className='ml-auto w-48 truncate text-right text-xs text-slate-500'>
                      {faker.products[0].category}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Transition>
        </div>
        {/* END: Search  */}
        {/* BEGIN: Notifications */}
        <Popover className='intro-x mr-auto sm:mr-6'>
          <Popover.Button
            className="
              relative block text-slate-600 outline-none
              before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']
            "
          >
            <Lucide icon='Bell' className='h-5 w-5 dark:text-slate-500' />
          </Popover.Button>
          <Popover.Panel className='mt-2 w-[280px] p-5 sm:w-[350px]'>
            <div className='mb-5 font-medium'>Notifications</div>
            {_.take(fakerData, 5).map((faker, fakerKey) => (
              <div key={fakerKey} className={clsx(['relative flex cursor-pointer items-center', { 'mt-5': fakerKey }])}>
                <div className='image-fit relative mr-1 h-12 w-12 flex-none'>
                  <Image alt='Linegram - Agent appel IA' className='rounded-full' src={faker.photos[0]} />
                  <div className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600'></div>
                </div>
                <div className='ml-2 overflow-hidden'>
                  <div className='flex items-center'>
                    <a href='' className='mr-5 truncate font-medium'>
                      {faker.users[0].name}
                    </a>
                    <div className='ml-auto whitespace-nowrap text-xs text-slate-400'>{faker.times[0]}</div>
                  </div>
                  <div className='mt-0.5 w-full truncate text-slate-500'>{faker.news[0].shortContent}</div>
                </div>
              </div>
            ))}
          </Popover.Panel>
        </Popover>
        {/* END: Notifications  */}
        {/* BEGIN: Account Menu */}
        <AccountMenu />
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
