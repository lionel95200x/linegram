'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Calls } from '@/features/pricing/types';

import { TableCell, TableRow } from '../ui/table';

const CallTableLine = ({ call }: { call: Calls }) => {
  const pathname = usePathname();

  const metadata = call.metadata as { type: string; text: string; createdAt: string }[];
  const findFirstSentenceOfUser = metadata.find((m) => m.type === 'Interaction 0 – STT -> GPT');
  console.log(findFirstSentenceOfUser);
  return (
    <TableRow key={call.id}>
      <TableCell className='font-medium'>
        <a href={`${pathname}/call/${call.id}`}>{call.id}</a>
      </TableCell>
      <TableCell>{findFirstSentenceOfUser?.text ?? 'Pas de premiere phrase'}</TableCell>
      <TableCell className='text-right'>{call.created}</TableCell>
    </TableRow>
  );
};

export default CallTableLine;
