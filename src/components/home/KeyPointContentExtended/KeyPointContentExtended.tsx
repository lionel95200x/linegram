import React from 'react';

const keyPoints = [
  {
    id: 1,
    title: 'Disponibilité 24/7',
    description:
      'Notre Chat Bot IA est toujours disponible pour répondre aux questions de vos clients, améliorant ainsi leur satisfaction et fidélité.',
  },
  {
    id: 2,
    title: 'Intégration fluide',
    description:
      'Connecté à vos systèmes existants, notre Chat Bot IA fournit des réponses précises et contextualisées, optimisant vos processus internes.',
  },
  {
    id: 3,
    title: 'Amélioration continue',
    description:
      "Grâce à l'apprentissage automatique, notre Chat Bot IA s'adapte et s'améliore constamment pour offrir des interactions toujours plus pertinentes.",
  },
];

const KeyPointItem = ({ title, description }: { title: string; description: string }) => (
  <li className='flex gap-x-3'>
    <svg
      className='size-5 mt-1 h-5 w-5 flex-none text-indigo-600'
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path
        fillRule='evenodd'
        d='M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z'
        clipRule='evenodd'
      />
    </svg>
    <span>
      <strong className='font-semibold text-gray-900'>{title}</strong> {description}
    </span>
  </li>
);

const KeyPointContentExtended = () => {
  return (
    <div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <svg
          className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='e813992c-7d03-4cc4-a2bd-151760b470a0'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M100 200V.5M.5 .5H200' fill='none' />
            </pattern>
          </defs>
          <rect width='100%' height='100%' strokeWidth={0} fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' />
        </svg>
      </div>
      <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='lg:max-w-lg'>
              <p className='text-base/7 font-semibold text-indigo-600'>Chat Bot IA</p>
              <h1 className='text-pretty mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                Transformez votre relation client
              </h1>
              <p className='mt-6 text-xl/8 text-gray-700'>
                Notre Chat Bot IA comprend les besoins de vos clients et se connecte à vos systèmes pour offrir des
                réponses optimales.
              </p>
            </div>
          </div>
        </div>
        <div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
          <img
            className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
            src='https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png'
            alt='Chat Bot IA'
          />
        </div>
        <div className='lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:pr-4'>
            <div className='max-w-xl text-base/7 text-gray-700 lg:max-w-lg'>
              <ul role='list' className='mt-8 space-y-8 text-gray-600'>
                {keyPoints.map((point) => (
                  <KeyPointItem key={point.id} title={point.title} description={point.description} />
                ))}
              </ul>
              <h2 className='mt-16 text-2xl font-bold tracking-tight text-gray-900'>
                Pas de serveur ? Pas de problème.
              </h2>
              <p className='mt-6'>
                Notre solution s'adapte à vos besoins, que vous ayez ou non une infrastructure serveur dédiée. Profitez
                d'une intégration rapide et efficace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPointContentExtended;
