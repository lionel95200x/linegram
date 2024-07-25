'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { Slideover } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import { ColorSchemes, selectColorScheme, setColorScheme } from '@/stores/colorSchemeSlice';
import { selectDarkMode, setDarkMode } from '@/stores/darkModeSlice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectTheme, setLayout, setTheme, Themes } from '@/stores/themeSlice';

import sideMenu from '/src/assets/images/layouts/side-menu.png';
import simpleMenu from '/src/assets/images/layouts/simple-menu.png';
import topMenu from '/src/assets/images/layouts/top-menu.png';
import enigma from '/src/assets/images/themes/enigma.png';
import icewall from '/src/assets/images/themes/icewall.png';
import rubick from '/src/assets/images/themes/rubick.png';
import tinker from '/src/assets/images/themes/tinker.png';

const themeImages = [
  {
    name: 'enigma',
    image: enigma,
  },
  {
    name: 'icewall',
    image: icewall,
  },
  {
    name: 'rubick',
    image: rubick,
  },
  {
    name: 'tinker',
    image: tinker,
  },
];

const layoutImages = [
  {
    name: 'side-menu',
    image: sideMenu,
  },
  {
    name: 'simple-menu',
    image: simpleMenu,
  },
  {
    name: 'top-menu',
    image: topMenu,
  },
];

function Main() {
  const dispatch = useAppDispatch();
  const [themeSwitcherSlideover, setThemeSwitcherSlideover] = useState(false);

  const activeTheme = useAppSelector(selectTheme);
  const activeColorScheme = useAppSelector(selectColorScheme);
  const activeDarkMode = useAppSelector(selectDarkMode);

  const switchTheme = (theme: Themes['name']) => {
    dispatch(setTheme(theme));
  };
  const switchLayout = (layout: Themes['layout']) => {
    dispatch(setLayout(layout));
  };

  const setColorSchemeClass = () => {
    if (typeof document !== 'undefined') {
      const el = document.querySelectorAll('html')[0];
      el.setAttribute('class', activeColorScheme);
      activeDarkMode && el.classList.add('dark');
    }
  };

  const switchColorScheme = (colorScheme: ColorSchemes) => {
    dispatch(setColorScheme(colorScheme));
    setColorSchemeClass();
  };
  setColorSchemeClass();

  const setDarkModeClass = () => {
    if (typeof document !== 'undefined') {
      const el = document.querySelectorAll('html')[0];
      activeDarkMode ? el.classList.add('dark') : el.classList.remove('dark');
    }
  };
  const switchDarkMode = (darkMode: boolean) => {
    dispatch(setDarkMode(darkMode));
    setDarkModeClass();
  };
  setDarkModeClass();

  const themes: Array<Themes['name']> = ['rubick', 'icewall', 'tinker', 'enigma'];
  const layouts: Array<Themes['layout']> = ['side-menu', 'simple-menu', 'top-menu'];
  const colorSchemes: Array<ColorSchemes> = ['default', 'theme-1', 'theme-2', 'theme-3', 'theme-4'];

  const imgSrc = themeImages.find((t) => t.name === activeTheme.name)?.image;
  const imgSrcLayout = layoutImages.find((l) => l.name === activeTheme.layout)?.image;

  return (
    <div>
      <Slideover
        open={themeSwitcherSlideover}
        onClose={() => {
          setThemeSwitcherSlideover(false);
        }}
      >
        <Slideover.Panel className='w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]'>
          <a
            href=''
            className='absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14'
            onClick={(e) => {
              e.preventDefault();
              setThemeSwitcherSlideover(false);
            }}
          >
            <Lucide className='h-3 w-3 stroke-[1] sm:h-8 sm:w-8' icon='X' />
          </a>
          <Slideover.Description className='p-0'>
            <div className='flex flex-col'>
              <div className='px-8 pb-8 pt-6'>
                <div className='text-base font-medium'>Templates</div>
                <div className='mt-0.5 text-slate-500'>Choose your templates</div>
                <div className='mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5'>
                  {themes.map((theme, themeKey) => (
                    <div key={themeKey}>
                      <div
                        onClick={() => switchTheme(theme)}
                        className={clsx([
                          'box h-28 cursor-pointer bg-slate-50 p-1',
                          activeTheme.name == theme && 'border-2 border-theme-1/60',
                        ])}
                      >
                        <div className='h-full w-full overflow-hidden rounded-md'>
                          {imgSrc !== undefined && <Image className='h-full w-full' src={imgSrc} alt={theme} />}
                        </div>
                      </div>
                      <div className='mt-2.5 text-center text-xs capitalize'>{theme}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='border-b border-dashed'></div>
              <div className='px-8 pb-8 pt-6'>
                <div className='text-base font-medium'>Layouts</div>
                <div className='mt-0.5 text-slate-500'>Choose your layout</div>
                <div className='mt-5 grid grid-cols-3 gap-x-5 gap-y-3.5'>
                  {layouts.map((layout, layoutKey) => (
                    <div key={layoutKey}>
                      <div
                        onClick={() => switchLayout(layout)}
                        className={clsx([
                          'box h-24 cursor-pointer bg-slate-50 p-1',
                          activeTheme.layout == layout && 'border-2 border-theme-1/60',
                        ])}
                      >
                        <div className='h-full w-full overflow-hidden rounded-md'>
                          {imgSrcLayout !== undefined && (
                            <Image alt={layout} className='h-full w-full' src={imgSrcLayout} />
                          )}
                        </div>
                      </div>
                      <div className='mt-2.5 text-center text-xs capitalize'>{layout.replace('-', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='border-b border-dashed'></div>
              <div className='px-8 pb-8 pt-6'>
                <div className='text-base font-medium'>Color Schemes</div>
                <div className='mt-0.5 text-slate-500'>Choose your color schemes</div>
                <div className='mt-5 grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-4'>
                  {colorSchemes.map((colorScheme, colorKey) => (
                    <div key={colorKey}>
                      <div
                        onClick={() => switchColorScheme(colorScheme)}
                        className={clsx([
                          'box h-12 cursor-pointer rounded-full border-slate-300/80 bg-slate-50 p-1',
                          activeColorScheme == colorScheme && 'border-2 border-theme-1/60',
                        ])}
                      >
                        <div className='h-full overflow-hidden rounded-full'>
                          <div className='-mx-2 flex h-full items-center gap-1'>
                            <div className={clsx(['h-[140%] w-1/2 rotate-12 bg-theme-1', colorScheme])}></div>
                            <div className={clsx(['h-[140%] w-1/2 rotate-12 bg-theme-2', colorScheme])}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='border-b border-dashed'></div>
              <div className='px-8 pb-8 pt-6'>
                <div className='text-base font-medium'>Appearance</div>
                <div className='mt-0.5 text-slate-500'>Choose your appearance</div>
                <div className='mt-5 grid grid-cols-2 gap-3.5'>
                  <div>
                    <a
                      onClick={() => switchDarkMode(false)}
                      className={clsx([
                        'box block h-12 cursor-pointer border-slate-300/80 bg-slate-50 p-1',
                        '[&.active]:border-2 [&.active]:border-theme-1/60',
                        !activeDarkMode ? 'active' : '',
                      ])}
                    >
                      <div className='h-full overflow-hidden rounded-md bg-slate-200'></div>
                    </a>
                    <div className='mt-2.5 text-center text-xs capitalize'>Light</div>
                  </div>
                  <div>
                    <a
                      onClick={() => switchDarkMode(true)}
                      className={clsx([
                        'box block h-12 cursor-pointer border-slate-300/80 bg-slate-50 p-1',
                        '[&.active]:border-2 [&.active]:border-theme-1/60',
                        activeDarkMode ? 'active' : '',
                      ])}
                    >
                      <div className='h-full overflow-hidden rounded-md bg-slate-900'></div>
                    </a>
                    <div className='mt-2.5 text-center text-xs capitalize'>Dark</div>
                  </div>
                </div>
              </div>
            </div>
          </Slideover.Description>
        </Slideover.Panel>
      </Slideover>
      <div
        onClick={(event: React.MouseEvent) => {
          event.preventDefault();
          setThemeSwitcherSlideover(true);
        }}
        className='fixed bottom-0 right-0 z-50 mb-5 mr-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-theme-1 text-white shadow-lg'
      >
        <Lucide className='h-5 w-5 animate-spin' icon='Settings' />
      </div>
    </div>
  );
}

export default Main;
