'use client';
import React from 'react';

import Alert from '@/components/dashboard/Base/Alert';
import Lucide from '@/components/dashboard/Base/Lucide';

const PromotionBanner = () => {
  return (
    <Alert variant='primary' dismissible className='intro-y box col-span-11 mb-6 dark:border-darkmode-600'>
      {({ dismiss }: any) => (
        <>
          <div className='flex items-center'>
            <span>
              <Lucide icon='Info' className='mr-2 h-4 w-4' />
            </span>
            <span>
              Bénéficiez d'une réduction de -30 % sur votre prochaine commande d'agent IA jusqu'au 31/12/2024.
              <a
                href='https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820'
                className='ml-1 underline'
                target='blank'
              >
                En savoir plus
              </a>
            </span>
            <Alert.DismissButton className='text-white' onClick={dismiss} aria-label='Close'>
              <Lucide icon='X' className='h-4 w-4' />
            </Alert.DismissButton>
          </div>
        </>
      )}
    </Alert>
  );
};

export default PromotionBanner;
