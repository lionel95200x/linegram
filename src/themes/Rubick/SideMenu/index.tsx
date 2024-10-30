import { useEffect, useState } from 'react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Transition } from 'react-transition-group';

import Lucide from '@/components/dashboard/Base/Lucide';
import Tippy from '@/components/dashboard/Base/Tippy';
import MobileMenu from '@/components/dashboard/MobileMenu';
import TopBar from '@/components/dashboard/Themes/Rubick/TopBar';
import menu from '@/main/menu';

import { enter, FormattedMenu, leave, linkTo, nestedMenu } from './side-menu';

import '@/assets/css/themes/rubick/side-nav.css';
import LogoTsx from '@/assets/svg/logo';

function Main({ children }: { children: React.ReactNode }) {
  const location = usePathname();
  const [formattedMenu, setFormattedMenu] = useState<Array<FormattedMenu | 'divider'>>([]);
  const sideMenu = () => nestedMenu(menu, { pathname: location });
  const [windowWidth, setWindowWidth] = useState((typeof window !== 'undefined' && window.innerWidth) || 0);

  useEffect(() => {
    setFormattedMenu(sideMenu());

    window.addEventListener('resize', () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    });
  }, [menu, location]);

  return (
    <div
      className={clsx([
        'rubick px-5 py-5 sm:px-8',
        "before:fixed before:inset-0 before:z-[-1] before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:content-[''] dark:before:from-darkmode-800 dark:before:to-darkmode-800",
      ])}
    >
      <MobileMenu />
      <div className='mt-[4.7rem] flex md:mt-0'>
        {/* BEGIN: Side Menu */}
        <nav className='side-nav hidden w-[80px] overflow-x-hidden pb-16 pr-5 md:block xl:w-[230px]'>
          <Link href='/' className='intro-x flex items-center pl-5 pt-4'>
            <LogoTsx />
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
                      placement: 'right',
                    }}
                    disable={typeof window !== 'undefined' && window.innerWidth > 1260}
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
                        <div className={clsx(['side-menu__sub-icon', { 'rotate-180 transform': menu.activeDropdown }])}>
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
                            <Link href={subMenu.subMenu ? '#' : (subMenu.pathname as string)}>
                              <Tippy
                                as='a'
                                content={subMenu.title}
                                options={{
                                  placement: 'right',
                                }}
                                disable={windowWidth > 1260}
                                href={subMenu.subMenu ? '#' : subMenu.pathname}
                                onClick={(event: React.MouseEvent) => {
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
                                        {
                                          'rotate-180 transform': subMenu.activeDropdown,
                                        },
                                      ])}
                                    >
                                      <Lucide icon='ChevronDown' />
                                    </div>
                                  )}
                                </div>
                              </Tippy>
                            </Link>
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
                                          placement: 'right',
                                        }}
                                        disable={windowWidth > 1260}
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
        {/* END: Side Menu */}
        {/* BEGIN: Content */}
        <div className="md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]">
          <TopBar />
          {children}
        </div>
        {/* END: Content */}
      </div>
    </div>
  );
}

export default Main;
