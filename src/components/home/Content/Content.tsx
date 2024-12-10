import DotGrid from '@/components/ui/svg/DotGrid';

const features = [
  {
    id: 1,
    title: 'Assistant IA disponible 24/7',
    description:
      'Notre chatbot IA assure une présence continue, répondant instantanément à vos clients à tout moment, améliorant ainsi significativement votre taux de satisfaction client.',
  },
  {
    id: 2,
    title: 'Intégration transparente',
    description:
      "Connecté à vos systèmes existants (CRM, base de connaissances, outils internes), notre chatbot s'adapte parfaitement à votre infrastructure pour des réponses précises et contextualisées.",
  },
  {
    id: 3,
    title: 'Apprentissage continu',
    description:
      "Notre IA s'améliore en permanence grâce aux interactions avec vos clients, garantissant des réponses toujours plus pertinentes et personnalisées au fil du temps.",
  },
];

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <div className='mb-4 border-b pb-4 last:border-b-0 last:pb-0'>
    <h6 className='mb-2 font-semibold leading-5 text-primary'>{title}</h6>
    <p className='text-sm text-gray-900'>{description}</p>
  </div>
);

export const Content = () => {
  return (
    <div className='mx-auto bg-white px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20'>
      <div className='mb-10 max-w-xl sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl'>
        <div>
          <p className='bg-teal-accent-400 mb-4 inline-block rounded-full px-3 py-px text-xs font-semibold uppercase tracking-wider text-teal-900'>
            Innovation IA
          </p>
        </div>
        <h2 className='mb-6 max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <DotGrid />
            <span className='relative'>Transformez &nbsp;</span>
          </span>
          votre relation client grâce à notre chatbot IA intelligent
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          Un assistant virtuel qui comprend vos clients, s'adapte à vos processus et améliore continuellement votre
          service client.
        </p>
      </div>
      <div className='grid max-w-screen-lg gap-8 sm:mx-auto lg:grid-cols-2'>
        <div className='grid grid-cols-2 gap-5'>
          <img
            className='col-span-2 h-56 w-full rounded object-cover shadow-lg'
            src='https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
            alt='Interface du chatbot IA'
          />
          <img
            className='h-48 w-full rounded object-cover shadow-lg'
            src='https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
            alt='Analyse des conversations'
          />
          <img
            className='h-48 w-full rounded object-cover shadow-lg'
            src='https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
            alt='Dashboard des performances'
          />
        </div>
        <div className='flex flex-col justify-center'>
          {features.map((feature) => (
            <FeatureItem key={feature.id} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  );
};
