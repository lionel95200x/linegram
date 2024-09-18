import EmptyCall from '@/assets/svg/EmptyCall';
import React from 'react';

const EmptyTable = ({ text }: { text: string }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <EmptyCall />
      <div className='mt-2 text-center text-xs text-slate-400 dark:text-slate-500'>{text}</div>
    </div>
  );
};

export default EmptyTable;
