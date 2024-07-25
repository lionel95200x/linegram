import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';

import logoUrl from '@/assets/images/logo.svg';
import Lucide from '@/components/dashboard/Base/Lucide';
import Tippy from '@/components/dashboard/Base/Tippy';
import MobileMenu from '@/components/dashboard/MobileMenu';
import TopBar from '@/components/dashboard/Themes/Tinker/TopBar';
import menu from '@/main/menu';

import { enter, FormattedMenu, leave, linkTo, nestedMenu } from './simple-menu';

import '@/assets/css/themes/tinker/side-nav.css';

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const menus = () =>
    nestedMenu(menu, {
      forceActiveMenu: 'true',
      pathname: pathname,
    });

  useEffect(() => {
    setFormattedMenu(menus());
  }, [menu, pathname]);

  return (
    <div
      className={clsx([
        'tinker relative px-5 py-5 dark:bg-transparent sm:px-8 md:bg-black/[0.15] md:px-0 md:py-0',
        "after:fixed after:inset-0 after:z-[-2] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 after:content-[''] dark:after:from-darkmode-800 dark:after:to-darkmode-800",
      ])}
    >
      <MobileMenu />
      <div className='mt-[4.7rem] flex overflow-hidden md:mt-0'>
        {/* BEGIN: Simple Menu */}
        <nav className='side-nav side-nav--simple z-10 hidden overflow-x-hidden px-5 pb-16 md:block md:w-[100px] xl:w-[100px]'>
          <Link href='/' className='intro-x mt-3 flex items-center pl-5 pt-4'>
            <Image alt='Tinker Tailwind HTML Admin Template' className='w-6' src={logoUrl} />
          </Link>
          <div className='side-nav__divider my-6'></div>
          <ul>
            {/* BEGIN: First Child */}
            {formattedMenu.map((menu, menuKey) =>
              menu == 'divider' ? (
                <li className='side-nav__divider my-6' key={menuKey}></li>
              ) : (
                <li key={menuKey}>
                  <Tippy
                    as='a'
                    content={menu.title}
                    options={{
                      placement: 'left',
                    }}
                    href={menu.subMenu ? '#' : menu.pathname}
                    onClick={(event: React.MouseEvent) => {
                      event.preventDefault();
                      linkTo(menu, redirect);
                      setFormattedMenu([...formattedMenu]);
                    }}
                    className={clsx([menu.active ? 'side-menu side-menu--active' : 'side-menu'])}
                  >
                    <div className='side-menu__icon'>
                      <Lucide icon={menu.icon} />
                    </div>
                    <div className='side-menu__title'>
                      {menu.title}
                      {menu.subMenu && (
                        <div className={clsx(['side-menu__sub-icon', menu.activeDropdown && 'rotate-180 transform'])}>
                          <Lucide icon='ChevronDown' />
                        </div>
                      )}
                    </div>
                  </Tippy>
                  {/* BEGIN: Second Child */}
                  {menu.subMenu && (
                    <Transition in={menu.activeDropdown} onEnter={enter} onExit={leave} timeout={300}>
                      <ul
                        className={clsx({
                          'side-menu__sub-open': menu.activeDropdown,
                        })}
                      >
                        {menu.subMenu.map((subMenu, subMenuKey) => (
                          <li key={subMenuKey}>
                            <Tippy
                              as='a'
                              content={subMenu.title}
                              options={{
                                placement: 'left',
                              }}
                              href={subMenu.subMenu ? '#' : subMenu.pathname}
                              onClick={(event: React.MouseEvent) => {
                                event.preventDefault();
                                linkTo(subMenu, redirect);
                                setFormattedMenu([...formattedMenu]);
                              }}
                              className={clsx([subMenu.active ? 'side-menu side-menu--active' : 'side-menu'])}
                            >
                              <div className='side-menu__icon'>
                                <Lucide icon={subMenu.icon} />
                              </div>
                              <div className='side-menu__title'>
                                {subMenu.title}
                                {subMenu.subMenu && (
                                  <div
                                    className={clsx([
                                      'side-menu__sub-icon',
                                      subMenu.activeDropdown && 'rotate-180 transform',
                                    ])}
                                  >
                                    <Lucide icon='ChevronDown' />
                                  </div>
                                )}
                              </div>
                            </Tippy>
                            {/* BEGIN: Third Child */}
                            {subMenu.subMenu && (
                              <Transition in={subMenu.activeDropdown} onEnter={enter} onExit={leave} timeout={300}>
                                <ul
                                  className={clsx({
                                    'side-menu__sub-open': subMenu.activeDropdown,
                                  })}
                                >
                                  {subMenu.subMenu.map((lastSubMenu, lastSubMenuKey) => (
                                    <li key={lastSubMenuKey}>
                                      <Tippy
                                        as='a'
                                        content={lastSubMenu.title}
                                        options={{
                                          placement: 'left',
                                        }}
                                        href={lastSubMenu.subMenu ? '#' : lastSubMenu.pathname}
                                        onClick={(event: React.MouseEvent) => {
                                          event.preventDefault();
                                          linkTo(lastSubMenu, redirect);
                                          setFormattedMenu([...formattedMenu]);
                                        }}
                                        className={clsx([
                                          lastSubMenu.active ? 'side-menu side-menu--active' : 'side-menu',
                                        ])}
                                      >
                                        <div className='side-menu__icon'>
                                          <Lucide icon={lastSubMenu.icon} />
                                        </div>
                                        <div className='side-menu__title'>{lastSubMenu.title}</div>
                                      </Tippy>
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
        </nav>
        {/* END: Simple Menu */}
        {/* BEGIN: Content */}
        <div
          className={clsx([
            'relative min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 dark:bg-darkmode-700 md:ml-4 md:max-w-none md:rounded-[35px/50px_0px_0px_0px] md:px-6',
            "before:block before:h-px before:w-full before:content-['']",
            "after:absolute after:inset-y-0 after:left-0 after:z-[-1] after:-ml-4 after:mt-8 after:hidden after:w-full after:rounded-[40px_0px_0px_0px] after:bg-white/10 after:content-[''] after:dark:bg-darkmode-400/50 md:after:block",
          ])}
        >
          <TopBar />
          {children}
        </div>
        {/* END: Content */}
      </div>
    </div>
  );
}

export default Main;
