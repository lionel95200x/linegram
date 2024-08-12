import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { signOut } from '@/app/(auth)/auth-actions';
import { Menu } from '@/components/dashboard/Base/Headless';
import { toast } from '@/components/ui/use-toast';
import fakerData from '@/utils/faker';
import { routes } from '@/utils/route';

import Lucide from '../Base/Lucide';

export default function AccountMenu() {
  const router = useRouter();

  async function handleLogoutClick() {
    const response = await signOut();

    if (response?.error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred while logging out. Please try again or contact support.',
      });
    } else {
      router.refresh();

      toast({
        description: 'Vous avez bien ete deconnecté.',
      });
      router.push(routes.home);
    }
  }

  return (
    <Menu>
      <Menu.Button className='image-fit intro-x zoom-in block h-8 w-8 overflow-hidden rounded-full shadow-lg'>
        <Image alt='Linegram - Agent appel IA' src={fakerData[9].photos[0]} />
      </Menu.Button>
      <Menu.Items className='mt-px w-56 bg-primary text-white'>
        <Menu.Header className='font-normal'>
          <div className='font-medium'>{fakerData[0].users[0].name}</div>
          <div className='mt-0.5 text-xs text-white/70 dark:text-slate-500'>{fakerData[0].jobs[0]}</div>
        </Menu.Header>
        <Menu.Divider className='bg-white/[0.08]' />
        <Menu.Item className='hover:bg-white/5'>
          <Link href={routes.profile} className='flex items-center'>
            <Lucide icon='User' className='mr-2 h-4 w-4' /> Profile
          </Link>
        </Menu.Item>

        <Menu.Item className='hover:bg-white/5'>
          <Lucide icon='Lock' className='mr-2 h-4 w-4' /> Reinitialiser le mot de passe
        </Menu.Item>
        <Menu.Item className='hover:bg-white/5'>
          <Lucide icon='HelpCircle' className='mr-2 h-4 w-4' /> Aide
        </Menu.Item>
        <Menu.Divider className='bg-white/[0.08]' />
        <Menu.Item className='hover:bg-white/5' onClick={handleLogoutClick}>
          <Lucide icon='ToggleRight' className='mr-2 h-4 w-4' />
          Deconnexion
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
