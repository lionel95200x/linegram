import { Bookmark, LayoutGrid, Settings, SquarePen, Tag, Users } from 'lucide-react';

import { routes } from '@/utils/route';

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Posts',
          active: pathname.includes('/posts'),
          icon: SquarePen,
          submenus: [
            {
              href: '/posts',
              label: 'All Posts',
              active: pathname === '/posts',
            },
            {
              href: '/posts/new',
              label: 'New Post',
              active: pathname === '/posts/new',
            },
          ],
        },
        {
          href: routes.agents,
          label: 'Agents',
          active: pathname.includes('/agents'),
          icon: Bookmark,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Réglages',
      menus: [
        {
          href: '/users',
          label: 'Profil',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/account',
          label: 'Mon compte',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
        {
          href: '/billing',
          label: 'Facturation',
          active: pathname.includes('/billing'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
