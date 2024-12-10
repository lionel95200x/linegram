'use client';
import { Content } from '@/components/home/Content/Content';
import FeatureCard from '@/components/home/FeatureCard/FeatureCard';
import { KeyPointContent } from '@/components/home/KeyPointContent/KeyPointContent';
import PublicLayout from '@/components/layout/publicLayout';
import { routes } from '@/utils/route';
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import {
  FiPhoneCall,
  FiSettings,
  FiBarChart,
  FiUsers,
  FiCheckCircle,
  FiDatabase,
  FiShield,
  FiTrendingUp,
} from 'react-icons/fi';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: BenefitProps[] = [
  {
    icon: <FiPhoneCall className='h-6 w-6' />,
    title: 'Disponibilité 24/7',
    description: 'Notre robot IA gère vos appels à toute heure, sans interruption',
  },
  {
    icon: <FiBarChart className='h-6 w-6' />,
    title: 'Analyse détaillée',
    description: 'Obtenez des insights précieux sur chaque interaction',
  },
  {
    icon: <FiUsers className='h-6 w-6' />,
    title: 'Personnalisation avancée',
    description: 'Adaptez le robot à votre image de marque et vos besoins',
  },
  {
    icon: <FiShield className='h-6 w-6' />,
    title: 'Sécurité maximale',
    description: 'Protection des données et conformité RGPD garanties',
  },
];

const steps: StepProps[] = [
  {
    number: 1,
    title: 'Analyse de vos besoins',
    description: 'Nous étudions vos processus actuels et définissons ensemble vos objectifs',
    icon: <FiDatabase className='h-6 w-6' />,
  },
  {
    number: 2,
    title: 'Configuration personnalisée',
    description: 'Notre équipe configure le robot selon vos spécifications',
    icon: <FiSettings className='h-6 w-6' />,
  },
  {
    number: 3,
    title: 'Phase de test',
    description: "Période d'essai pour affiner les paramètres et optimiser les performances",
    icon: <FiCheckCircle className='h-6 w-6' />,
  },
  {
    number: 4,
    title: 'Déploiement & Suivi',
    description: 'Mise en production et accompagnement continu',
    icon: <FiTrendingUp className='h-6 w-6' />,
  },
];

const Benefit = ({ icon, title, description }: BenefitProps) => (
  <motion.div whileHover={{ scale: 1.05 }} className='flex flex-col items-center rounded-xl bg-white p-6 shadow-lg'>
    <div className='mb-4 rounded-full bg-teal-50 p-3'>{icon}</div>
    <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
    <p className='text-center text-gray-600'>{description}</p>
  </motion.div>
);

const Step = ({ number, title, description, icon }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: number * 0.2 }}
    className='flex items-start gap-4'
  >
    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-teal-500 font-bold text-white'>
      {number}
    </div>
    <div>
      <div className='mb-2 flex items-center gap-2'>
        {icon}
        <h3 className='text-xl font-semibold'>{title}</h3>
      </div>
      <p className='text-gray-600'>{description}</p>
    </div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <PublicLayout>
      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='bg-gradient-to-b from-teal-50 to-white py-20'>
          <div className='container mx-auto px-4  pt-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='mx-auto max-w-3xl text-center'
            >
              <h1 className='mb-6 text-4xl font-bold md:text-5xl'>
                Transformez vos appels avec l'Intelligence Artificielle
              </h1>
              <p className='mb-8 text-xl text-gray-600'>
                Découvrez comment notre solution de robot d'appel IA peut révolutionner votre relation client
              </p>
              <motion.a
                href={routes.contact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='rounded-full bg-teal-500 px-8 py-3 font-medium text-white transition-colors hover:bg-teal-600'
              >
                Commencer maintenant
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className='bg-gray-50 py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-12 text-center text-3xl font-bold'>Pourquoi choisir notre solution ?</h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {benefits.map((benefit, index) => (
                <Benefit key={index} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        <KeyPointContent />
        {/* Steps Section */}
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <h2 className='mb-12 text-center text-3xl font-bold'>Comment ça marche ?</h2>
            <div className='mx-auto max-w-3xl space-y-12'>
              {steps.map((step) => (
                <Step key={step.number} {...step} />
              ))}
            </div>
          </div>
        </section>

        <FeatureCard />
        <Content />

        {/* CTA Section */}
        <section className='bg-primary py-20 text-white'>
          <div className='container mx-auto px-4'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className='mx-auto max-w-3xl text-center'
            >
              <h2 className='mb-6 text-3xl font-bold'>Prêt à moderniser votre service client ?</h2>
              <p className='mb-8 text-xl'>
                Rejoignez les entreprises qui ont déjà transformé leur approche avec notre solution IA
              </p>
              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='rounded-full bg-white px-8 py-3 font-medium text-primary transition-colors hover:bg-gray-100'
                >
                  Demander une démo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='rounded-full border-2 border-white bg-transparent px-8 py-3 font-medium text-white transition-colors hover:bg-white/10'
                >
                  Nous contacter
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
