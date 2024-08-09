import { useCallback, useEffect, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';

import Lucide from '@/components/dashboard/Base/Lucide';
import MobileMenu from '@/components/dashboard/MobileMenu';
import TopBar from '@/components/dashboard/Themes/Enigma/TopBar';
import menu from '@/main/menu';

import { FormattedMenu, linkTo, nestedMenu } from './top-menu';

import '@/assets/css/themes/enigma/top-nav.css';

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const topMenu = useCallback(() => nestedMenu(menu, { pathname }), [pathname]);

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [pathname, topMenu]);

  return (
    <div
      className={clsx([
        'enigma px-5 py-5 sm:px-8 md:px-0 md:py-0',
        "before:fixed before:inset-0 before:z-[-1] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:content-[''] dark:before:from-darkmode-800 dark:before:to-darkmode-800 md:bg-slate-200 md:before:bg-none md:dark:bg-darkmode-800",
      ])}
    >
      <MobileMenu />
      <TopBar layout='top-menu' />
      {/* BEGIN: Top Menu */}
      <nav className='top-nav relative z-50 -mt-4 hidden pt-32 md:block'>
        <ul className='flex flex-wrap px-6 xl:px-[50px]'>
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
          'relative mt-5 min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 dark:bg-darkmode-700 md:max-w-none md:rounded-[35px_35px_0_0] md:px-[22px]',
          "before:block before:h-px before:w-full before:content-['']",
        ])}
      >
        {children}
      </div>
      {/* END: Content */}
    </div>
  );
}

export default Main;
