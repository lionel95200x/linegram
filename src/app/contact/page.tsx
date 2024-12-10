'use client';
import PublicLayout from '@/components/layout/publicLayout';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Schéma de validation Zod
const contactSchema = z.object({
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  company: z.string().min(2, "Le nom de l'entreprise doit contenir au moins 2 caractères"),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone français invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  acceptPolicy: z.boolean().refine((val) => val === true, 'Vous devez accepter la politique de confidentialité'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);
    reset(); // Reset du formulaire

    // Faire disparaître le message après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <PublicLayout>
      <div className='isolate bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div
          className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
          aria-hidden='true'
        >
          <div
            className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed right-4 top-4 z-50'
          >
            <div className='max-w-md rounded-lg border-l-4 border-teal-500 bg-white p-6 shadow-xl'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <svg className='h-8 w-8 text-teal-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-semibold text-gray-900'>Message envoyé avec succès !</p>
                  <p className='text-sm text-gray-600'>Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mx-auto max-w-2xl text-center'
        >
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Contactez notre équipe</h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
            Optimisez votre service client avec nos solutions innovantes de chatbot et d'assistant vocal IA.
            Disponibilité 24/7, réponses instantanées et personnalisation garantie.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label htmlFor='firstName' className='block text-sm font-semibold leading-6 text-gray-900'>
                Prénom
              </label>
              <div className='mt-2.5'>
                <input
                  {...register('firstName')}
                  type='text'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.firstName && <p className='mt-1 text-sm text-red-600'>{errors.firstName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor='lastName' className='block text-sm font-semibold leading-6 text-gray-900'>
                Nom
              </label>
              <div className='mt-2.5'>
                <input
                  {...register('lastName')}
                  type='text'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.lastName && <p className='mt-1 text-sm text-red-600'>{errors.lastName.message}</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='company' className='block text-sm font-semibold leading-6 text-gray-900'>
                Entreprise
              </label>
              <div className='mt-2.5'>
                <input
                  {...register('company')}
                  type='text'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.company && <p className='mt-1 text-sm text-red-600'>{errors.company.message}</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  {...register('email')}
                  type='email'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.email && <p className='mt-1 text-sm text-red-600'>{errors.email.message}</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='phone' className='block text-sm font-semibold leading-6 text-gray-900'>
                Téléphone
              </label>
              <div className='mt-2.5'>
                <input
                  {...register('phone')}
                  type='tel'
                  placeholder='06 12 34 56 78'
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.phone && <p className='mt-1 text-sm text-red-600'>{errors.phone.message}</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block text-sm font-semibold leading-6 text-gray-900'>
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  {...register('message')}
                  rows={4}
                  className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
                />
                {errors.message && <p className='mt-1 text-sm text-red-600'>{errors.message.message}</p>}
              </div>
            </div>

            <div className='sm:col-span-2'>
              <div className='flex gap-x-4'>
                <input
                  {...register('acceptPolicy')}
                  type='checkbox'
                  className='h-6 w-6 rounded border-gray-300 text-teal-600 focus:ring-teal-600'
                />
                <label className='text-sm leading-6 text-gray-600'>
                  En soumettant ce formulaire, j'accepte la{' '}
                  <a href='#' className='font-semibold text-teal-600 hover:text-teal-500'>
                    politique de confidentialité
                  </a>
                </label>
              </div>
              {errors.acceptPolicy && <p className='mt-1 text-sm text-red-600'>{errors.acceptPolicy.message}</p>}
            </div>
          </div>

          <motion.div className='mt-10' whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <button
              type='submit'
              className='block w-full rounded-xl bg-indigo-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            >
              <span className='flex items-center justify-center gap-2'>
                Envoyer votre message
                <svg className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                </svg>
              </span>
            </button>
          </motion.div>
        </motion.form>
      </div>
    </PublicLayout>
  );
};

export default Contact;
