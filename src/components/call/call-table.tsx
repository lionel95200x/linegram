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
import { getCalls } from '@/features/calls/controllers/get-calls';

import { Input } from '../ui/input';
import { Label } from '../ui/label';

import CallTableLine from './call-table-line';

export async function CallTable() {
  const [calls] = await Promise.all([getCalls()]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='email'>Recherchez parmis vos appel</Label>
        <Input type='email' id='email' placeholder='Rechercher par texte, nom, conversation, ...' />
      </div>

      <Table>
        <TableCaption>Les dernier appel de votre robot.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Id de l&apos;appel</TableHead>
            <TableHead>Conversation</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {calls.map((call) => (
            <CallTableLine key={call.user_id} call={call} />
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Nombre d&apos;appels</TableCell>
            <TableCell className='text-right'>{calls.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
