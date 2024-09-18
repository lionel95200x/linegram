'use client';
import { createRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';
import SimpleBar from 'simplebar';

import logoUrl from '@/assets/images/logo.svg';
import Lucide from '@/components/dashboard/Base/Lucide';
import menu2 from '@/main/menu';

import { enter, FormattedMenu, leave, linkTo, nestedMenu } from './mobile-menu';

import '@/assets/css/components/mobile-menu.css';
import '@/assets/css/vendors/simplebar.css';

function Main() {
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const menuStore = menu2;

  const menu = () => nestedMenu(menuStore, { pathname });
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const scrollableRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (scrollableRef.current) {
      new SimpleBar(scrollableRef.current);
    }
    setFormattedMenu(menu());
  }, [menuStore, pathname]);

  return (
    <>
      {/* BEGIN: Mobile Menu */}
      <div
        className={clsx([
          'mobile-menu group fixed inset-x-0 top-0 z-[60] border-b border-white/[0.08] bg-theme-1/90 dark:bg-darkmode-800/90 md:hidden',
          "before:fixed before:inset-x-0 before:z-10 before:h-screen before:w-full before:bg-black/90 before:transition-opacity before:duration-200 before:ease-in-out before:content-['']",
          'before:invisible before:opacity-0',
          '[&.mobile-menu--active]:before:visible [&.mobile-menu--active]:before:opacity-100',
          activeMobileMenu && 'mobile-menu--active',
        ])}
      >
        <div className='flex h-[70px] items-center px-3 sm:px-8'>
          <a href='' className='mr-auto flex'>
            <Image alt='Linegram - Agent appel IA' className='w-6' src={logoUrl} />
          </a>
          <a href='#' onClick={(e) => e.preventDefault()}>
            <Lucide
              icon='BarChart2'
              className='h-8 w-8 -rotate-90 transform text-white'
              onClick={() => {
                setActiveMobileMenu(!activeMobileMenu);
              }}
            />
          </a>
        </div>
        <div
          ref={scrollableRef}
          className={clsx([
            'left-0 top-0 z-20 -ml-[100%] h-screen w-[270px] bg-primary transition-all duration-300 ease-in-out dark:bg-darkmode-800',
            '[&[data-simplebar]]:fixed [&_.simplebar-scrollbar]:before:bg-black/50',
            'group-[.mobile-menu--active]:ml-0',
          ])}
        >
          <a
            href='#'
            onClick={(e) => e.preventDefault()}
            className={clsx([
              'fixed right-0 top-0 mr-4 mt-4 transition-opacity duration-200 ease-in-out',
              'invisible opacity-0',
              'group-[.mobile-menu--active]:visible group-[.mobile-menu--active]:opacity-100',
            ])}
          >
            <Lucide
              icon='XCircle'
              className='h-8 w-8 -rotate-90 transform text-white'
              onClick={() => {
                setActiveMobileMenu(!activeMobileMenu);
              }}
            />
          </a>
          <ul className='py-2'>
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              menu == 'divider' ? (
                <li className='menu__divider my-6' key={menuKey}></li>
              ) : (
                <li key={menuKey}>
                  <a
                    href={menu.subMenu ? '#' : menu.pathname}
                    className={clsx([menu.active ? 'menu menu--active' : 'menu'])}
                    onClick={(event) => {
                      event.preventDefault();
                      linkTo(menu, redirect, setActiveMobileMenu);
                      setFormattedMenu([...formattedMenu]);
                    }}
                  >
                    <div className='menu__icon'>
                      <Lucide icon={menu.icon} />
                    </div>
                    <div className='menu__title'>
                      {menu.title}
                      {menu.subMenu && (
                        <div className={clsx(['menu__sub-icon', menu.activeDropdown && 'rotate-180 transform'])}>
                          <Lucide icon='ChevronDown' />
                        </div>
                      )}
                    </div>
                  </a>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition in={menu.activeDropdown} onEnter={enter} onExit={leave} timeout={300}>
                      <ul
                        className={clsx({
                          'menu__sub-open': menu.activeDropdown,
                        })}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <a
                              href={subMenu.subMenu ? '#' : subMenu.pathname}
                              className={clsx([subMenu.active ? 'menu menu--active' : 'menu'])}
                              onClick={(event) => {
                                event.preventDefault();
                                linkTo(subMenu, redirect, setActiveMobileMenu);
                                setFormattedMenu([...formattedMenu]);
                              }}
                            >
                              <div className='menu__icon'>
                                <Lucide icon={subMenu.icon} />
                              </div>
                              <div className='menu__title'>
                                {subMenu.title}
                                {subMenu.subMenu && (
                                  <div
                                    className={clsx([
                                      'menu__sub-icon',
                                      subMenu.activeDropdown && 'rotate-180 transform',
                                    ])}
                                  >
                                    <Lucide icon='ChevronDown' />
                                  </div>
                                )}
                              </div>
                            </a>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition in={subMenu.activeDropdown} onEnter={enter} onExit={leave} timeout={300}>
                                <ul
                                  className={clsx({
                                    'menu__sub-open': subMenu.activeDropdown,
                                  })}
                                >
                                  {subMenu.subMenu.map((lastSubMenu, lastSubMenuKey) => (
                                    <li key={lastSubMenuKey}>
                                      <a
                                        href={lastSubMenu.subMenu ? '#' : lastSubMenu.pathname}
                                        className={clsx([lastSubMenu.active ? 'menu menu--active' : 'menu'])}
                                        onClick={(event) => {
                                          event.preventDefault();
                                          linkTo(lastSubMenu, redirect, setActiveMobileMenu);
                                          setFormattedMenu([...formattedMenu]);
                                        }}
                                      >
                                        <div className='menu__icon'>
                                          <Lucide icon={lastSubMenu.icon} />
                                        </div>
                                        <div className='menu__title'>{lastSubMenu.title}</div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </Transition>
                            )}
                            {/* END: Third Child */}
                          </li>
                        ))}
                      </ul>
                    </Transition>
                  )}
                  {/* END: Second Child */}
                </li>
              )
            )}
            {/* END: First Child */}
          </ul>
        </div>
      </div>
      {/* END: Mobile Menu */}
    </>
  );
}

export default Main;
