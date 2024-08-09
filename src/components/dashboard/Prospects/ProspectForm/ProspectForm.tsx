import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { FormInput, FormLabel } from '../../Base/Form';

import { FORM_ID, ProspectFormValues, prospectSchema } from './ProspectForm.utils';

const ProspectForm = ({
  onSubmit,
  defaultValues,
}: {
  onSubmit: (data: ProspectFormValues) => void;
  defaultValues?: Partial<ProspectFormValues>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProspectFormValues>({
    resolver: zodResolver(prospectSchema),
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} id={FORM_ID}>
      <div className='mt-5 grid grid-cols-12 gap-4 gap-y-5'>
        <div className='intro-y col-span-12 sm:col-span-6'>
          <FormLabel htmlFor='firstName'>Nom</FormLabel>
          <FormInput id='firstName' type='text' placeholder='John' {...register('firstName')} />
          {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
        </div>
        <div className='intro-y col-span-12 sm:col-span-6'>
          <FormLabel htmlFor='lastName'>Prénom</FormLabel>
          <FormInput id='lastName' type='text' placeholder='Doe' {...register('lastName')} />
          {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
        </div>
        <div className='intro-y col-span-12 sm:col-span-6'>
          <FormLabel htmlFor='phone'>Téléphone</FormLabel>
          <FormInput id='phone' type='text' placeholder='06 06 06 06 06' {...register('phone')} />
          {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
        </div>
        <div className='intro-y col-span-12 sm:col-span-6'>
          <FormLabel htmlFor='email'>Email</FormLabel>
          <FormInput id='email' type='email' placeholder='john.doe@example.com' {...register('email')} />
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='intro-y col-span-12 sm:col-span-6'>
          <FormLabel htmlFor='extraInfo'>Information additionnelles</FormLabel>
          <FormInput
            id='extraInfo'
            type='text'
            placeholder='Avez déja souscrit a une de nos offres ..'
            {...register('extraInfo')}
          />
          {errors.extraInfo && <p className='text-red-500'>{errors.extraInfo.message}</p>}
        </div>
      </div>
    </form>
  );
};

export default ProspectForm;
