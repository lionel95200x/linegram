import Table, { TableBody } from '@/components/dashboard/Base/Table';
import { TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDate } from '@/utils/to-date-time';
import React from 'react';

const TableView = ({ metadata }: { metadata: { type: string; text: string; createdAt: string }[] }) => {
  console.log({ metadata });
  return (
    <Table>
      <TableCaption>Résume de la conversation</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className=''>Type</TableHead>
          <TableHead>Text</TableHead>
          <TableHead className='text-right'>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metadata?.map((call) => (
          <TableRow key={call.type}>
            <TableCell className='font-medium'>{call.type}</TableCell>
            <TableCell className='font-medium'>{call.text}</TableCell>
            <TableCell className='text-right'>{formatDate(call.createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
