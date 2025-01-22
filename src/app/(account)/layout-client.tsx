'use client';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';

import ThemeSwitcher from '@/components/dashboard/ThemeSwitcher';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { store } from '@/stores/store';
import { getTheme, selectTheme, setTheme, Themes, themes } from '@/stores/themeSlice';
import Providers from '@/utils/provider';

export default function Layout({ children }: { children: React.ReactNode }) {
  console.log('Layout');
  return (
    <Provider store={store}>
      <AccountLayout>{children}</AccountLayout>
    </Provider>
  );
}

function AccountLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const Component = getTheme(theme).component;

  const path = usePathname();
  const queryParams = useMemo(() => new URLSearchParams(path), [path]);

  const switchTheme = useCallback(
    (theme: Themes['name']) => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  useEffect(() => {
    if (queryParams.get('theme')) {
      const selectedTheme = themes.find((theme) => theme.name === queryParams.get('theme'));

      if (selectedTheme) {
        switchTheme(selectedTheme.name);
      }
    }
  }, [queryParams, switchTheme]);

  return (
    <div>
      <ThemeSwitcher />
      <Providers>
        <Component>{children}</Component>
      </Providers>
    </div>
  );
}
