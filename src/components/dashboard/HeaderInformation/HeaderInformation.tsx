import { icons, LucidePen } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Lucide from '../Base/Lucide';
import fakerData from '@/utils/faker';

const ItemInfoProspect = ({ text, value, icon }: { text: string; value: string; icon: keyof typeof icons }) => (
  <div className={`flex items-center border-b border-slate-200/60 py-3 dark:border-darkmode-400`}>
    <div>
      <div className='text-slate-500'>{text}</div>
      <div className='mt-1'>{value}</div>
    </div>
    <Lucide icon={icon} className='ml-auto h-4 w-4 text-slate-500' />
  </div>
);

const InfoIcon = ({ text, icon }: { text: string; icon: keyof typeof icons }) => (
  <div className='mt-3 flex items-center truncate sm:whitespace-normal'>
    <Lucide icon={icon} className='mr-2 h-4 w-4' />
    {text}
  </div>
);

const HeaderInformation = ({
  name,
  description,
  canEditName = false,
  children,
  infos,
}: {
  name: string;
  description?: string;
  canEditName?: boolean;
  children?: React.ReactNode;
  infos?: { text?: string | null; icon: keyof typeof icons }[];
}) => {
  return (
    <div className='-mx-5 flex flex-col border-b border-slate-200/60 pb-5 dark:border-darkmode-400 lg:flex-row'>
      <div className='flex flex-1 items-center justify-center px-5 lg:justify-start'>
        <div className='image-fit relative h-20 w-20 flex-none sm:h-24 sm:w-24 lg:h-32 lg:w-32'>
          <Image alt='Linegram agent' className='rounded-full' src={fakerData[0].photos[0]} />
        </div>

        <div className='ml-5'>
          <div className='flex items-center'>
            <div>
              <div className='w-24 truncate text-lg font-medium sm:w-40 sm:whitespace-normal'>{name ?? 'No name'}</div>
              <div className='mt-1 text-slate-500'>{description}</div>
            </div>

            {canEditName && <LucidePen />}
          </div>
        </div>
      </div>
      <div className='mt-6 flex-1 border-l border-r border-t border-slate-200/60 px-5 pt-5 dark:border-darkmode-400 lg:mt-0 lg:border-t-0 lg:pt-0'>
        <div className='text-center font-medium lg:mt-3 lg:text-left'>Informations principal</div>
        <div className='mt-4 flex flex-col items-center justify-center lg:items-start'>
          {infos?.map((i) => (
            <InfoIcon key={i.text} text={i.text as string} icon={i.icon} />
          ))}
        </div>
      </div>
      {children && (
        <div className='mt-6 flex-1 border-l border-r border-t border-slate-200/60 px-5 pt-5 dark:border-darkmode-400 lg:mt-0 lg:border-t-0 lg:pt-0'>
          {children}
        </div>
      )}
    </div>
  );
};

export default HeaderInformation;
