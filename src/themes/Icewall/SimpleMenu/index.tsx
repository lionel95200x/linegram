import clsx from 'clsx';
import { redirect, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';

import Lucide from '@/components/dashboard/Base/Lucide';
import Tippy from '@/components/dashboard/Base/Tippy';
import MobileMenu from '@/components/dashboard/MobileMenu';
import TopBar from '@/components/dashboard/Themes/Icewall/TopBar';
import menu from '@/main/menu';

import { enter, FormattedMenu, leave, linkTo, nestedMenu } from './simple-menu';

import '@/assets/css/themes/icewall/side-nav.css';

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const menus = () => nestedMenu(menu, { pathname });

  useEffect(() => {
    setFormattedMenu(menus());
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
      <div
        className={clsx([
          'wrapper relative',
          "before:absolute before:inset-x-0 before:z-[-1] before:mx-auto before:-mt-4 before:h-full before:w-[95%] before:translate-y-[35px] before:rounded-[1.3rem] before:bg-white/10 before:opacity-0 before:content-[''] before:dark:bg-darkmode-400/50",
        ])}
      >
        <div
          className={clsx([
            'wrapper-box -mt-[7px] flex translate-y-[35px] rounded-[1.3rem] bg-gradient-to-b from-theme-1 to-theme-2 dark:from-darkmode-400 dark:to-darkmode-400 md:mt-0',
            'before:absolute before:inset-0 before:z-[-1] before:block before:rounded-[1.3rem] before:bg-black/[0.15]',
          ])}
        >
          {/* BEGIN: Simple Menu */}
          <nav className='side-nav side-nav--simple hidden w-[100px] overflow-x-hidden px-5 pb-16 pt-8 md:block'>
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
          <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[1.3rem] bg-slate-100 px-4 pb-10 shadow-sm before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
            {children}
          </div>
          {/* END: Content */}
        </div>
      </div>
    </div>
  );
}

export default Main;
