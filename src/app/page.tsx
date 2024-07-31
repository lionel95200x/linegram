import Image from 'next/image';

import imgBackgroundDashboard from '@/assets/img/banner-dashboard.webp';
import { Features } from '@/components/bento-grid/bento-grid';
import FeatureCard from '@/components/home/FeatureCard';
import TopBadge from '@/components/home/topBadge';
import PublicLayout from '@/components/layout/publicLayout';
import { PricingSection } from '@/features/pricing/components/pricing-section';

export default async function HomePage() {
  return (
    <PublicLayout>
      <div className='flex flex-col gap-8 '>
        <HeroSection />
        <Features />
        <FeatureCard />
        <PricingSection />
      </div>
    </PublicLayout>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden pt-20 lg:overflow-visible'>
      <div className='container-default p-20 text-center'>
        {/* Hero Area */}
        {/* Hero Content Block */}
        <TopBadge />
        <h1 className='font-ClashDisplay text-ColorOil xxl:text-[90px] my-6 font-medium leading-[1.06] lg:text-[60px] xl:text-7xl'>
          Votre agent d'appel personnalisé
        </h1>
        <p className='text-ColorOil mb-8 lg:mb-[50px]'>
          Notre robot d'appel personnalisé utilise l'intelligence artificielle pour offrir une expérience de
          communication fluide et efficace. Il est conçu pour répondre à vos besoins spécifiques et améliorer la
          productivité de votre entreprise.
        </p>
        <div className='flex flex-wrap justify-center gap-6'>
          <div className='group relative inline-flex'>
            <div className='transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200'></div>
            <a
              href='#'
              title='Get quote now'
              className='font-pj relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
              role='button'
            >
              Demarrez maintenant
            </a>
          </div>
        </div>
        <div className='relative mt-20 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800'>
          <div className='rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black'>
            <Image
              alt='header'
              loading='lazy'
              width={1920}
              height={1080}
              decoding='async'
              data-nimg={1}
              className='rounded-[20px]'
              style={{ color: 'transparent' }}
              src={imgBackgroundDashboard}
            />
          </div>
        </div>

        {/* Hero Area */}
      </div>
    </section>
  );
}
