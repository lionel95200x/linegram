import React from 'react';
import { icons, LucideProps } from 'lucide-react';

import Lucide from '../Lucide';
import Tippy from '../Tippy';

const InfoCard = ({
  icon,
  title,
  value,
  percentage,
  percentageText,
  isBox = true,
}: {
  icon: keyof typeof icons;
  title: string;
  value: number;
  percentage?: number;
  percentageText?: string;
  isBox?: boolean;
}) => {
  return (
    <div className={`${isBox && 'box'} p-5`}>
      <div className='flex'>
        <Lucide icon={icon} className='h-[28px] w-[28px] text-primary' />
        <div className='ml-auto'>
          <Tippy
            as='div'
            className='flex cursor-pointer items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white'
            content={percentageText}
          >
            {percentage}%
            <Lucide icon='ChevronUp' className='ml-0.5 h-4 w-4' />
          </Tippy>
        </div>
      </div>
      <div className='mt-6 text-3xl font-medium leading-8'>{value}</div>
      <div className='mt-1 text-base text-slate-500'>{title}</div>
    </div>
  );
};

export default InfoCard;
