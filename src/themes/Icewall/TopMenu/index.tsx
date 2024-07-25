import { useEffect, useState } from 'react';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';

import Lucide from '@/components/dashboard/Base/Lucide';
import MobileMenu from '@/components/dashboard/MobileMenu';
import TopBar from '@/components/dashboard/Themes/Icewall/TopBar';
import menu from '@/main/menu';

import { FormattedMenu, linkTo, nestedMenu } from './top-menu';

import '@/assets/css/themes/icewall/top-nav.css';

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const topMenu = () => nestedMenu(menu, { pathname });

  useEffect(() => {
    setFormattedMenu(topMenu());
  }, [menu, pathname]);

  return (
    <div
      className={clsx([
        'icewall relative px-5 py-5 sm:px-8',
        "after:fixed after:inset-0 after:z-[-2] after:bg-gradient-to-b after:from-theme-1 after:to-theme-2 after:content-[''] dark:after:from-darkmode-800 dark:after:to-darkmode-800",
      ])}
    >
      <MobileMenu />
      <TopBar />
      {/* BEGIN: Top Menu */}
      <nav className='top-nav relative z-50 -mt-2 hidden translate-y-[35px] opacity-0 md:block xl:-mt-[3px] xl:px-6 xl:pt-[12px]'>
        <ul className='flex h-[50px] flex-wrap'>
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
          'wrapper relative',
          "before:absolute before:inset-x-0 before:z-[-1] before:mx-auto before:-mt-4 before:h-full before:w-[95%] before:translate-y-[35px] before:rounded-[1.3rem] before:bg-transparent before:opacity-0 before:content-[''] before:dark:bg-darkmode-400/50 xl:before:bg-white/10",
        ])}
      >
        <div
          className={clsx([
            'wrapper-box -mt-[7px] flex translate-y-[35px] rounded-[1.3rem] bg-transparent dark:bg-transparent md:-mt-[67px] md:pt-[80px] xl:-mt-[62px] xl:bg-theme-1 xl:dark:bg-darkmode-400',
            'before:absolute before:inset-0 before:z-[-1] before:hidden before:rounded-[1.3rem] before:bg-black/[0.15] xl:before:block',
          ])}
        >
          {/* BEGIN: Content */}
          <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
            {children}
          </div>
          {/* END: Content */}
        </div>
      </div>
      {/* END: Content */}
    </div>
  );
}

export default Main;
