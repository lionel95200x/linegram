import { PricingCard } from '@/features/pricing/components/price-card';
import { getProducts } from '@/features/pricing/controllers/get-products';

import { createCheckoutAction } from '../actions/create-checkout-action';

export async function PricingSection({ isPricingPage }: { isPricingPage?: boolean }) {
  const products = await getProducts();

  const HeadingLevel = isPricingPage ? 'h1' : 'h2';

  console.log({ products });
  return (
    <section className='relative rounded-lg bg-black py-8'>
      <div className='bg-gray-900 pt-5' id='pricing'>
        <div className='mx-auto mt-4 max-w-7xl px-6 pb-20 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <h1 className='text-base font-semibold leading-7 text-indigo-400'>Pricing</h1>
            <p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
              Selectionnez des maintenant un forfait qui vous convient
            </p>
          </div>
          <p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300'>
            Choisissez le modele de robot d'appel qui vous convient le mieux
          </p>
          {products.map((product: any) => {
            return <PricingCard key={product.id} product={product} createCheckoutAction={createCheckoutAction} />;
          })}
          <div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {/* First Product */}
            <div className='rounded-3xl p-8 ring-1 ring-white/10 xl:p-10'>
              <div className='flex items-center justify-between gap-x-4'>
                <h2 id='product1' className='text-lg font-semibold leading-8 text-white'>
                  Product Type 1
                </h2>
              </div>
              <p className='mt-4 text-sm leading-6 text-gray-300'>Product details for Product Type 1</p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight text-white'>€ 10 / unit</span>
                <span className='text-sm font-semibold leading-6 text-gray-300' />
              </p>
              <a
                href='/order'
                aria-describedby='product1'
                className='mt-6 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Order Now
              </a>
              <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  40 units
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  1 feature
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Agent configuré en 5 minutes
                </li>
              </ul>
            </div>
            {/* Second Product */}
            <div className='rounded-3xl bg-white/5 p-8 ring-2 ring-indigo-500 xl:p-10'>
              <div className='flex items-baseline justify-between gap-x-4'>
                <h2 id='product2' className='text-lg font-semibold leading-8 text-white'>
                  Product Type 2
                </h2>
                <p className='rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white'>
                  Most popular
                </p>
              </div>
              <p className='mt-4 text-sm leading-6 text-gray-300'>
                The most popular choice. Product details for Product Type 2
              </p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight text-white'>€ 20 / unit</span>
                <span className='text-sm font-semibold leading-6 text-gray-300' />
              </p>
              <a
                href='/order'
                aria-describedby='product2'
                className='mt-6 block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              >
                Order Now
              </a>
              <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  120 units
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  3 different features
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Fast delivery
                </li>
              </ul>
            </div>
            {/* Third Product */}
            <div className='rounded-3xl p-8 ring-1 ring-white/10 xl:p-10'>
              <div className='flex items-center justify-between gap-x-4'>
                <h2 id='product3' className='text-lg font-semibold leading-8 text-white'>
                  Product Type 3
                </h2>
              </div>
              <p className='mt-4 text-sm leading-6 text-gray-300'>Product details for Product Type 3</p>
              <p className='mt-6 flex items-baseline gap-x-1'>
                <span className='text-4xl font-bold tracking-tight text-white'>€ 50 / unit</span>
                <span className='text-sm font-semibold leading-6 text-gray-300' />
              </p>
              <a
                href='/order'
                aria-describedby='product3'
                className='mt-6 block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                Order Now
              </a>
              <ul role='list' className='mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10'>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  240 units
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  6 different features
                </li>
                <li className='flex gap-x-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'
                    className='h-6 w-5 flex-none text-white'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                  Fast delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
