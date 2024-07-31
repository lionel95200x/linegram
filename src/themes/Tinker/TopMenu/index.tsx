import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import _ from 'lodash';

import logoUrl from '@/assets/images/logo.svg';
import Breadcrumb from '@/components/dashboard/Base/Breadcrumb';
import { FormInput } from '@/components/dashboard/Base/Form';
import { Menu, Popover } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import MobileMenu from '@/components/dashboard/MobileMenu';
import menu from '@/main/menu';
import fakerData from '@/utils/faker';
import { Transition } from '@headlessui/react';

import { FormattedMenu, linkTo, nestedMenu } from './top-menu';

import '@/assets/css/themes/tinker/top-nav.css';
import AccountMenu from '@/components/dashboard/AccountMenu';

function Main({ children }: { children: React.ReactNode }) {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const menuStore = menu;
  const topMenu = () => nestedMenu(menuStore, { pathname });

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [menuStore, pathname]);

  return (
    <div
      className={clsx([
        'tinker relative px-5 py-5 dark:bg-transparent sm:px-8 md:bg-black/[0.15] md:px-0 md:py-0',
        "after:fixed after:inset-0 after:z-[-2] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 after:content-[''] dark:after:from-darkmode-800 dark:after:to-darkmode-800",
      ])}
    >
      <MobileMenu />
      {/* BEGIN: Top Bar */}
      <div className='relative z-[51] -mx-3 mb-10 mt-12 h-[70px] border-b border-white/[0.08] px-4 sm:-mx-8 sm:px-8 md:mx-0 md:mb-8 md:mt-0 md:px-6'>
        <div className='flex h-full items-center'>
          {/* BEGIN: Logo */}
          <Link href='/' className='-intro-x hidden md:flex'>
            <Image alt='Linegram - Agent appel IA' className='w-6' src={logoUrl} />
            <span className='ml-3 text-lg text-white'> Tinker </span>
          </Link>
          {/* END: Logo */}
          {/* BEGIN: Breadcrumb */}
          <Breadcrumb light className='-intro-x mr-auto h-full border-white/[0.08] md:ml-10 md:border-l md:pl-10'>
            <Breadcrumb.Link to='/'>Application</Breadcrumb.Link>
            <Breadcrumb.Link to='/' active={true}>
              Dashboard
            </Breadcrumb.Link>
          </Breadcrumb>
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <div className='intro-x relative mr-3 sm:mr-6'>
            <div className='hidden sm:block'>
              <FormInput
                type='text'
                className='w-56 rounded-full border-transparent bg-slate-200 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400/70'
                placeholder='Search...'
                onFocus={showSearchDropdown}
                onBlur={hideSearchDropdown}
              />
              <Lucide
                icon='Search'
                className='absolute inset-y-0 right-0 my-auto mr-3 h-5 w-5 text-slate-600 dark:text-slate-500'
              />
            </div>
            <a className='relative text-white/70 sm:hidden' href=''>
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
          {/* END: Search */}
          {/* BEGIN: Notifications */}
          <Popover className='intro-x mr-4 sm:mr-6'>
            <Popover.Button
              className="
              relative block text-white/70 outline-none
              before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']
            "
            >
              <Lucide icon='Bell' className='h-5 w-5 dark:text-slate-500' />
            </Popover.Button>
            <Popover.Panel className='mt-2 w-[280px] p-5 sm:w-[350px]'>
              <div className='mb-5 font-medium'>Notifications</div>
              {_.take(fakerData, 5).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className={clsx(['relative flex cursor-pointer items-center', { 'mt-5': fakerKey }])}
                >
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
          {/* END: Notifications */}
          <AccountMenu />
        </div>
      </div>
      {/* END: Top Bar */}
      {/* BEGIN: Top Menu */}
      <nav className='top-nav relative z-50 -mt-[3px] hidden translate-y-[50px] opacity-0 md:block'>
        <ul className='flex h-[58px] flex-wrap px-6 xl:px-[50px]'>
          {formattedMenu.map(
            (menu, menuKey) =>
              menu != 'divider' && (
                <li key={menuKey}>
                  <a
                    href={menu.subMenu ? '#' : menu.pathname}
                    className={clsx([menu.active ? 'top-menu top-menu--active' : 'top-menu'])}
                    onClick={(event) => {
                      event.preventDefault();
                      linkTo(menu, redirect);
                    }}
                  >
                    <div className='top-menu__icon'>
                      <Lucide icon={menu.icon} />
                    </div>
                    <div className='top-menu__title'>
                      {menu.title}
                      {menu.subMenu && <Lucide className='top-menu__sub-icon' icon='ChevronDown' />}
                    </div>
                  </a>
                  {menu.subMenu && (
                    <ul>
                      {menu.subMenu.map((subMenu, subMenuKey) => (
                        <li key={subMenuKey}>
                          <a
                            href={subMenu.subMenu ? '#' : subMenu.pathname}
                            className='top-menu'
                            onClick={(event) => {
                              event.preventDefault();
                              linkTo(subMenu, redirect);
                            }}
                          >
                            <div className='top-menu__icon'>
                              <Lucide icon={subMenu.icon} />
                            </div>
                            <div className='top-menu__title'>
                              {subMenu.title}
                              {subMenu.subMenu && (
                                <Lucide v-if='subMenu.subMenu' className='top-menu__sub-icon' icon='ChevronDown' />
                              )}
                            </div>
                          </a>
                          {subMenu.subMenu && (
                            <ul
                              v-if='subMenu.subMenu'
                              className={clsx({
                                'side-menu__sub-open': subMenu.activeDropdown,
                              })}
                            >
                              {subMenu.subMenu.map((lastSubMenu, lastSubMenuKey) => (
                                <li key={lastSubMenuKey}>
                                  <a
                                    href={lastSubMenu.subMenu ? '#' : lastSubMenu.pathname}
                                    className='top-menu'
                                    onClick={(event) => {
                                      event.preventDefault();
                                      linkTo(lastSubMenu, redirect);
                                    }}
                                  >
                                    <div className='top-menu__icon'>
                                      <Lucide icon={lastSubMenu.icon} />
                                    </div>
                                    <div className='top-menu__title'>{lastSubMenu.title}</div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
          )}
        </ul>
      </nav>
      {/* END: Top Menu */}
      {/* BEGIN: Content */}
      <div
        className={clsx([
          'relative mt-8 min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 dark:bg-darkmode-700 md:max-w-none md:rounded-[35px_35px_0px_0px] md:px-6',
          "before:block before:h-px before:w-full before:content-['']",
          "after:absolute after:inset-y-0 after:left-0 after:right-0 after:z-[-1] after:mx-auto after:-mt-4 after:w-[97%] after:rounded-[40px_40px_0px_0px] after:bg-white/10 after:content-[''] after:dark:bg-darkmode-400/50",
        ])}
      >
        {children}
      </div>
      {/* END: Content */}
    </div>
  );
}

export default Main;
