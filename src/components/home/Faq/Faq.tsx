import React from 'react';
import FaqItem from './FaqItem';
import chatPhone from '@/assets/img/chatbot-phone-ia.webp';
import Image from 'next/image';

const faqData = [
  {
    id: 1,
    question: "Quels sont les avantages d'un chatbot IA pour mon entreprise ?",
    answer:
      "Un chatbot IA offre une disponibilité 24/7, réduit jusqu'à 80% les coûts du service client, traite instantanément plusieurs demandes simultanées et assure une cohérence dans les réponses. Il permet également de collecter des données précieuses sur les besoins de vos clients.",
  },
  {
    id: 2,
    question: "Comment l'IA améliore-t-elle l'expérience client ?",
    answer:
      "L'IA personnalise chaque interaction en fonction de l'historique du client, propose des réponses instantanées et pertinentes, et peut communiquer en plusieurs langues. Elle apprend continuellement des interactions pour s'améliorer et offrir un service toujours plus adapté.",
  },
  {
    id: 3,
    question: "Quel est le retour sur investissement d'un assistant virtuel ?",
    answer:
      "Les entreprises constatent en moyenne une réduction de 30% des coûts de service client, une augmentation de 25% de la satisfaction client, et une amélioration de 35% du taux de conversion. L'automatisation permet également à vos équipes de se concentrer sur des tâches à plus forte valeur ajoutée.",
  },
  {
    id: 4,
    question: "Comment intégrer l'IA à notre stratégie commerciale existante ?",
    answer:
      "L'intégration est progressive et personnalisée. Notre solution s'adapte à vos outils existants (CRM, site web, réseaux sociaux) et peut être déployée en quelques semaines. Nous assurons la formation de vos équipes et un accompagnement continu pour une transition en douceur.",
  },
];
const Faq = () => {
  return (
    <section className='bg-gradient-to-b from-white to-gray-50 py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-full flex-col items-center justify-center gap-x-16 gap-y-12 max-lg:max-w-2xl lg:flex-row lg:justify-between xl:gap-28'>
          <div className='w-full lg:w-1/2'>
            <div className='relative'>
              <div className='absolute -inset-4 rounded-xl bg-gradient-to-r from-indigo-100 to-indigo-50 opacity-50 blur-lg'></div>
              <Image
                src={chatPhone}
                alt='FAQ section'
                className='relative w-full rounded-xl object-cover shadow-lg transition-all duration-300 hover:shadow-xl'
              />
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <div className='rounded-2xl bg-white p-8 shadow-lg lg:max-w-xl'>
              <FaqHeader />
              <div className='accordion-group min-h-[500px]' data-accordion='default-accordion'>
                {faqData.map((item) => (
                  <FaqItem key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqHeader = () => (
  <div className='mb-8 lg:mb-12'>
    <h6 className='mb-3 text-center text-lg font-medium text-indigo-600 lg:text-left'>Foire aux questions</h6>
    <h2 className='mb-5 text-center text-4xl font-bold leading-[3.25rem] text-gray-900 lg:text-left'>
      Des questions ?
    </h2>
    <p className='text-center text-gray-600 lg:text-left'>
      Découvrez comment notre IA peut transformer votre relation client
    </p>
  </div>
);

export default Faq;
