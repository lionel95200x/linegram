'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { User } from 'elevenlabs/api/resources/user/client/Client';
import { Provider } from 'react-redux';

import ThemeSwitcher from '@/components/dashboard/ThemeSwitcher';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { store } from '@/stores/store';
import { getTheme, selectTheme, setTheme, Themes, themes } from '@/stores/themeSlice';

import '@/assets/css/app.css';

export default function Layout({ children, user }: { children: React.ReactNode; user: User }) {
  return (
    <Provider store={store}>
      <AccountLayout user={user}>{children}</AccountLayout>
    </Provider>
  );
}

function AccountLayout({ children, user }: { children: React.ReactNode; user: User }) {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const Component = getTheme(theme).component;

  const path = usePathname();
  const queryParams = new URLSearchParams(path);

  const switchTheme = (theme: Themes['name']) => {
    dispatch(setTheme(theme));
  };

  useEffect(() => {
    if (queryParams.get('theme')) {
      const selectedTheme = themes.find((theme) => theme.name === queryParams.get('theme'));

      if (selectedTheme) {
        switchTheme(selectedTheme.name);
      }
    }
  }, [queryParams]);

  return (
    <div>
      <ThemeSwitcher />
      <Component user={user}>{children}</Component>
    </div>
  );
}
