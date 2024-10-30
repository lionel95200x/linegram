'use client';
import React from 'react';
import { FormInput, FormLabel, FormSelect, FormTextarea } from '../Base/Form';
import fakerData from '@/utils/faker';
import Button from '../Base/Button';
import Tippy from '../Base/Tippy';
import Lucide from '../Base/Lucide';

const ProfileView = () => {
  return (
    <div className='col-span-12 lg:col-span-8 2xl:col-span-9'>
      {/* BEGIN: Display Information */}
      <div className='intro-y box lg:mt-5'>
        <div className='flex items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400'>
          <h2 className='mr-auto text-base font-medium'>Display Information</h2>
        </div>
        <div className='p-5'>
          <div className='flex flex-col xl:flex-row'>
            <div className='mt-6 flex-1 xl:mt-0'>
              <div className='grid grid-cols-12 gap-x-5'>
                <div className='col-span-12 2xl:col-span-6'>
                  <div>
                    <FormLabel htmlFor='update-profile-form-1'>Display Name</FormLabel>
                    <FormInput
                      id='update-profile-form-1'
                      type='text'
                      placeholder='Input text'
                      value={fakerData[0].users[0].name}
                      onChange={() => {}}
                      disabled
                    />
                  </div>
                  <div className='mt-3'>
                    <FormLabel htmlFor='update-profile-form-2'>Nearest MRT Station</FormLabel>
                  </div>
                </div>
                <div className='col-span-12 2xl:col-span-6'>
                  <div className='mt-3 2xl:mt-0'>
                    <FormLabel htmlFor='update-profile-form-3'>Postal Code</FormLabel>
                  </div>
                  <div className='mt-3'>
                    <FormLabel htmlFor='update-profile-form-4'>Phone Number</FormLabel>
                    <FormInput
                      id='update-profile-form-4'
                      type='text'
                      placeholder='Input text'
                      value='65570828'
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className='col-span-12'>
                  <div className='mt-3'>
                    <FormLabel htmlFor='update-profile-form-5'>Address</FormLabel>
                    <FormTextarea
                      id='update-profile-form-5'
                      placeholder='Adress'
                      value='10 Anson Road, International Plaza, #10-11, 079903
                       Singapore, Singapore'
                      onChange={() => {}}
                    ></FormTextarea>
                  </div>
                </div>
              </div>
              <Button variant='primary' type='button' className='mt-3 w-20'>
                Save
              </Button>
            </div>
            <div className='mx-auto w-52 xl:ml-6 xl:mr-0'>
              <div className='rounded-md border-2 border-dashed border-slate-200/60 p-5 shadow-sm dark:border-darkmode-400'>
                <div className='image-fit zoom-in relative mx-auto h-40 cursor-pointer'>
                  <img className='rounded-md' alt='Midone Tailwind HTML Admin Template' src={fakerData[0].photos[0]} />
                  <Tippy
                    as='div'
                    content='Remove this profile photo?'
                    className='absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white'
                  >
                    <Lucide icon='X' className='h-4 w-4' />
                  </Tippy>
                </div>
                <div className='relative mx-auto mt-5 cursor-pointer'>
                  <Button variant='primary' type='button' className='w-full'>
                    Change Photo
                  </Button>
                  <FormInput type='file' className='absolute left-0 top-0 h-full w-full opacity-0' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END: Display Information */}
      {/* BEGIN: Personal Information */}
      <div className='intro-y box mt-5'>
        <div className='flex items-center border-b border-slate-200/60 p-5 dark:border-darkmode-400'>
          <h2 className='mr-auto text-base font-medium'>Personal Information</h2>
        </div>
        <div className='p-5'>
          <div className='grid grid-cols-12 gap-x-5'>
            <div className='col-span-12 xl:col-span-6'>
              <div>
                <FormLabel htmlFor='update-profile-form-6'>Email</FormLabel>
                <FormInput
                  id='update-profile-form-6'
                  type='text'
                  placeholder='Input text'
                  value={fakerData[0].users[0].email}
                  onChange={() => {}}
                  disabled
                />
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-7'>Name</FormLabel>
                <FormInput
                  id='update-profile-form-7'
                  type='text'
                  placeholder='Input text'
                  value={fakerData[0].users[0].name}
                  onChange={() => {}}
                  disabled
                />
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-8'>ID Type</FormLabel>
                <FormSelect id='update-profile-form-8'>
                  <option>IC</option>
                  <option>FIN</option>
                  <option>Passport</option>
                </FormSelect>
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-9'>ID Number</FormLabel>
                <FormInput
                  id='update-profile-form-9'
                  type='text'
                  placeholder='Input text'
                  value='357821204950001'
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className='col-span-12 xl:col-span-6'>
              <div className='mt-3 xl:mt-0'>
                <FormLabel htmlFor='update-profile-form-10'>Phone Number</FormLabel>
                <FormInput
                  id='update-profile-form-10'
                  type='text'
                  placeholder='Input text'
                  value='65570828'
                  onChange={() => {}}
                />
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-11'>Address</FormLabel>
                <FormInput
                  id='update-profile-form-11'
                  type='text'
                  placeholder='Input text'
                  value='10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore'
                  onChange={() => {}}
                />
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-12'>Bank Name</FormLabel>
              </div>
              <div className='mt-3'>
                <FormLabel htmlFor='update-profile-form-13'>Bank Account</FormLabel>
                <FormInput
                  id='update-profile-form-13'
                  type='text'
                  placeholder='Input text'
                  value='DBS Current 011-903573-0'
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className='mt-4 flex justify-end'>
            <Button variant='primary' type='button' className='mr-auto w-20'>
              Save
            </Button>
            <a href='' className='flex items-center text-danger'>
              <Lucide icon='Trash2' className='mr-1 h-4 w-4' /> Delete Account
            </a>
          </div>
        </div>
      </div>
      {/* END: Personal Information */}
    </div>
  );
};

export default ProfileView;
