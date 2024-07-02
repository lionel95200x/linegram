import AdminPanelLayout from '@/components/admin-panel/admin-panel-layout';
import { getSession } from '@/features/account/controllers/get-session';
import { redirect } from 'next/navigation';

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  const [session] = await Promise.all([getSession()]);

  if (!session) {
    redirect('/login');
  }

  return <AdminPanelLayout>{children}</AdminPanelLayout>;
}
