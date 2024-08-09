import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';

import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/utils/cn';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';

export const dynamic = 'force-dynamic';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const montserratAlternates = Montserrat_Alternates({
  variable: '--font-montserrat-alternates',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Linegram - Créateur d'Agent Téléphonique IA",
  description:
    "Linegram - Votre solution intelligente pour créer des agents téléphoniques personnalisés. Améliorez l'efficacité de votre communication avec notre technologie d'IA avancée.",
  keywords: 'agent téléphonique, IA, intelligence artificielle, communication, automatisation, service client',
  authors: [{ name: 'Linegram', url: 'https://linegram.com' }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en' className='theme-2'>
      <body className={cn('font-sans antialiased', montserrat.variable, montserratAlternates.variable)}>
        <div className='m-auto flex h-full max-w-[1440px] flex-col'>
          <main className='relative flex-1'>
            <div className='relative h-full'>{children}</div>
          </main>
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
