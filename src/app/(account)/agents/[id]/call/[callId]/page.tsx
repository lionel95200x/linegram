import CustomBreadcrumb from '@/components/admin-panel/breadcrumb';
import { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { getCall } from '@/features/calls/controllers/get-calls';

export default async function AccountPage({ params }: { params: { id: string; callId: string } }) {
  const [call] = await Promise.all([getCall(params.callId)]);

  const metadata = call.metadata as { type: string; text: string; createdAt: string }[];

  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <CustomBreadcrumb />
      <h3 className='mb-8 text-center'>Compte rendu de l&apos;appel</h3>

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
            <TableCell className='text-right'>{call.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </section>
  );
}
