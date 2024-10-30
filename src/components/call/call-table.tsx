'use client';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Calls } from '@/features/pricing/types';

import Button from '../dashboard/Base/Button';
import { FormCheck, FormInput, FormSelect } from '../dashboard/Base/Form';
import { Menu } from '../dashboard/Base/Headless';
import Lucide from '../dashboard/Base/Lucide';
import { TableTd, TableTh, TableThead, TableTr } from '../dashboard/Base/Table';
import Link from 'next/link';
import { routes } from '@/utils/route';
import { getFirstSentence, Metadata } from '@/utils/call/call';
import EmptyTable from '../dashboard/Table/EmptyTable';

const CallLine = ({ call }: { call: Calls }) => {
  const pathname = usePathname();

  const metadata = call.metadata as Metadata[];
  const findFirstSentenceOfUser = getFirstSentence(metadata);

  return (
    <TableTr key={call.id} className='intro-x'>
      <TableTd className='box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
        <FormCheck.Input type='checkbox' />
      </TableTd>
      <TableTd className='box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
        <Link
          href={`${pathname}${routes.prospect_detail.replace(':id', call.prospect_id)}`}
          className='whitespace-nowrap underline decoration-dotted'
        >
          {call.id.substring(0, 10)}
        </Link>
      </TableTd>
      <TableTd className='box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
        <div
          className={clsx({
            'flex items-center justify-center whitespace-nowrap': true,
            'text-success': call.user_id,
            'text-danger': !call.user_id,
          })}
        >
          <Lucide icon='CheckSquare' className='mr-2 h-4 w-4' />
          {call.user_id ? 'Active' : 'Inactive'}
        </div>
      </TableTd>
      <TableTd className='box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
        {findFirstSentenceOfUser?.text ? (
          <>
            <div className='whitespace-nowrap'>{findFirstSentenceOfUser?.text}</div>
            <div className='mt-0.5 whitespace-nowrap text-xs text-slate-500'>{findFirstSentenceOfUser?.createdAt}</div>
          </>
        ) : (
          <>
            <div className='whitespace-nowrap'>Pas de premiere phrase</div>
            <div className='mt-0.5 whitespace-nowrap text-xs text-slate-500'>{call.created}</div>
          </>
        )}
      </TableTd>
      <TableTd className='box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 text-right shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
        <div className='pr-16'>{call.created}</div>
      </TableTd>
      <TableTd
        className={clsx([
          'box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600',
          'before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400',
        ])}
      >
        <div className='flex items-center justify-center'>
          <a className='mr-5 flex items-center whitespace-nowrap text-primary' href='#'>
            <Lucide icon='CheckSquare' className='mr-1 h-4 w-4' />
            Voir la conversation
          </a>
        </div>
      </TableTd>
    </TableTr>
  );
};

export function CallTable({ calls }: { calls: Calls[] }) {
  const pathname = usePathname();

  return (
    <div>
      <h2 className='intro-y mt-10 text-lg font-medium'>Liste d'appel</h2>
      <div className='flex w-full sm:w-auto'>
        <div className='relative w-48 text-slate-500'>
          <FormInput type='text' className='!box w-48 pr-10' placeholder="Recherche dans la liste d'appel..." />
          <Lucide icon='Search' className='absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4' />
        </div>
        <FormSelect className='!box ml-2 w-48'>
          <option>Status</option>
          <option>Waiting Payment</option>
          <option>Confirmed</option>
          <option>Packing</option>
          <option>Delivered</option>
          <option>Completed</option>
        </FormSelect>
      </div>
      <div className='mt-5 grid grid-cols-12 gap-6'>
        <div className='intro-y col-span-12 mt-2 flex flex-wrap items-center xl:flex-nowrap'>
          <div className='mx-auto hidden text-slate-500 xl:block'>Affichage de {calls.length} appel</div>
          <div className='mt-3 flex w-full items-center xl:mt-0 xl:w-auto'>
            <Button variant='primary' className='mr-2 shadow-md'>
              <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Export to PDF
            </Button>
            <Menu>
              <Menu.Button as={Button} className='!box px-2'>
                <span className='flex h-5 w-5 items-center justify-center'>
                  <Lucide icon='Plus' className='h-4 w-4' />
                </span>
              </Menu.Button>
              <Menu.Items className='w-40'>
                <Menu.Item>
                  <Lucide icon='Printer' className='mr-2 h-4 w-4' /> Print
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Export to Excel
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Export to PDF
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className='intro-y col-span-12 overflow-auto 2xl:overflow-visible'>
          <Table className='-mt-2 border-separate border-spacing-y-[10px]'>
            <TableThead>
              <TableTr>
                <TableTh className='whitespace-nowrap border-b-0'>
                  <FormCheck.Input type='checkbox' />
                </TableTh>
                <TableTh className='whitespace-nowrap border-b-0'>Identifiant</TableTh>
                <TableTh className='whitespace-nowrap border-b-0 text-center'>STATUS</TableTh>
                <TableTh className='whitespace-nowrap border-b-0'>Phrase du prospect</TableTh>
                <TableTh className='whitespace-nowrap border-b-0 text-right'>
                  <div className='pr-16'>Date d'appel</div>
                </TableTh>
                <TableTh className='whitespace-nowrap border-b-0 text-center'>ACTIONS</TableTh>
              </TableTr>
            </TableThead>
            <TableBody>
              {calls.length ? (
                calls.map((call) => <CallLine key={call.id} call={call} />)
              ) : (
                <EmptyTable text="Cet agent n'as pas encore passé d'appel" />
              )}
            </TableBody>
          </Table>
        </div>
        {/* END: Data List */}
      </div>
    </div>
  );
}
