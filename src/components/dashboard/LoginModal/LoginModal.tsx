'use client';

import LoginClient from '@/app/(auth)/login/page-client';
import { Dialog } from '@/components/dashboard/Base/Headless';
import { DialogPanel } from '@headlessui/react';
import React from 'react';

const LoginModal = () => {
  return (
    <Dialog open={false} onClose={() => {}}>
      <Dialog.Panel>
        <LoginClient />
      </Dialog.Panel>
    </Dialog>
  );
};

export default LoginModal;
