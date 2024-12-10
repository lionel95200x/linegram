'use client';
import clsx from 'clsx';
import _ from 'lodash';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/dashboard/Base/Button';
import { FormInput, FormLabel, FormSwitch, FormTextarea } from '@/components/dashboard/Base/Form';
import { Menu, Tab, TabButton, TabGroup, TabList, TabPanel, TabPanels } from '@/components/dashboard/Base/Headless';
import Litepicker from '@/components/dashboard/Base/Litepicker';
import Lucide from '@/components/dashboard/Base/Lucide';
import MultiSelect from '@/components/dashboard/Base/MultiSelect';
import Tippy from '@/components/dashboard/Base/Tippy';
import fakerData from '@/utils/faker';

function Main() {
  const [categories, setCategories] = useState(['1', '2']);
  const [tags, setTags] = useState(['1', '2']);
  const [salesReportFilter, setSalesReportFilter] = useState<string>();

  return (
    <>
      <div className='intro-y mt-8 flex flex-col items-center sm:flex-row'>
        <h2 className='mr-auto text-lg font-medium'>Créer un agent</h2>
        <div className='mt-4 flex w-full sm:mt-0 sm:w-auto'>
          <Menu className='mr-2'>
            <Menu.Button as={Button} className='!box flex items-center'>
              English <Lucide icon='ChevronDown' className='ml-2 h-4 w-4' />
            </Menu.Button>
          </Menu>
          <Button type='button' className='!box ml-auto mr-2 flex items-center sm:ml-0'>
            <Lucide icon='Eye' className='mr-2 h-4 w-4' /> Preview
          </Button>
          <Menu>
            <Menu.Button as={Button} variant='primary' className='flex items-center shadow-md'>
              Save <Lucide icon='ChevronDown' className='ml-2 h-4 w-4' />
            </Menu.Button>
          </Menu>
        </div>
      </div>
      <div className='intro-y mt-5 grid grid-cols-12 gap-5'>
        {/* BEGIN: Post Content */}
        <div className='intro-y col-span-12 lg:col-span-8'>
          <FormInput type='text' className='intro-y !box px-4 py-3 pr-10' placeholder='Title' />
          <TabGroup className='intro-y box mt-5 overflow-hidden'>
            <TabList className='flex-col border-transparent bg-slate-200 dark:border-transparent dark:bg-darkmode-800 sm:flex-row'>
              <Tab fullWidth={false}>
                {({ selected }: any) => (
                  <TabButton
                    className={clsx([
                      'flex w-full items-center justify-center px-0 py-0 text-slate-500 sm:w-40',
                      !selected &&
                        'hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300',
                      selected &&
                        'border-transparent text-primary dark:border-x-transparent dark:border-t-transparent dark:bg-darkmode-600 dark:text-white',
                    ])}
                    as='button'
                  >
                    <Tippy
                      content='Fill in the article content'
                      className='flex w-full items-center justify-center py-4'
                      aria-controls='content'
                      aria-selected='true'
                    >
                      <Lucide icon='FileText' className='mr-2 h-4 w-4' /> Content
                    </Tippy>
                  </TabButton>
                )}
              </Tab>
              <Tab fullWidth={false}>
                {({ selected }: any) => (
                  <TabButton
                    className={clsx([
                      'flex w-full items-center justify-center px-0 py-0 text-slate-500 sm:w-40',
                      !selected &&
                        'hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300',
                      selected &&
                        'border-transparent text-primary dark:border-x-transparent dark:border-t-transparent dark:bg-darkmode-600 dark:text-white',
                    ])}
                    as='button'
                  >
                    <Tippy
                      content='Adjust the meta title'
                      className='flex w-full items-center justify-center py-4'
                      aria-selected='false'
                    >
                      <Lucide icon='Code' className='mr-2 h-4 w-4' /> Meta Title
                    </Tippy>
                  </TabButton>
                )}
              </Tab>
              <Tab fullWidth={false}>
                {({ selected }: any) => (
                  <TabButton
                    className={clsx([
                      'flex w-full items-center justify-center px-0 py-0 text-slate-500 sm:w-40',
                      !selected &&
                        'hover:border-transparent hover:bg-transparent hover:text-slate-600 hover:dark:bg-transparent hover:dark:text-slate-300',
                      selected &&
                        'border-transparent text-primary dark:border-x-transparent dark:border-t-transparent dark:bg-darkmode-600 dark:text-white',
                    ])}
                    as='button'
                  >
                    <Tippy
                      content='Use search keywords'
                      className='flex w-full items-center justify-center py-4'
                      aria-selected='false'
                    >
                      <Lucide icon='AlignLeft' className='mr-2 h-4 w-4' /> Keywords
                    </Tippy>
                  </TabButton>
                )}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel className='p-5'>
                <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
                  <div className='flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400'>
                    <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Text Content
                  </div>
                  <div className='mt-5'>
                    <FormTextarea />
                  </div>
                </div>
                <div className='mt-5 rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
                  <div className='flex items-center border-b border-slate-200/60 pb-5 font-medium dark:border-darkmode-400'>
                    <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Caption & Images
                  </div>
                  <div className='mt-5'>
                    <div>
                      <FormLabel htmlFor='post-form-7'>Caption</FormLabel>
                      <FormInput id='post-form-7' type='text' placeholder='Write caption' />
                    </div>
                    <div className='mt-3'>
                      <FormLabel>Upload Image</FormLabel>
                      <div className='rounded-md border-2 border-dashed pt-4 dark:border-darkmode-400'>
                        <div className='flex flex-wrap px-4'>
                          {_.take(fakerData, 4).map((faker, fakerKey) => (
                            <div
                              key={fakerKey}
                              className='image-fit zoom-in relative mb-5 mr-5 h-24 w-24 cursor-pointer'
                            >
                              <Image className='rounded-md' alt='Linegram - Agent appel IA' src={faker.images[0]} />
                              <Tippy
                                as='div'
                                content='Remove this image?'
                                className='absolute right-0 top-0 -mr-2 -mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger text-white'
                              >
                                <Lucide icon='X' className='h-4 w-4' />
                              </Tippy>
                            </div>
                          ))}
                        </div>
                        <div className='relative flex cursor-pointer items-center px-4 pb-4'>
                          <Lucide icon='Image' className='mr-2 h-4 w-4' />
                          <span className='mr-1 text-primary'>Upload a file</span> or drag and drop
                          <FormInput type='file' className='absolute left-0 top-0 h-full w-full opacity-0' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        {/* END: Post Content */}
        {/* BEGIN: Post Info */}
        <div className='col-span-12 lg:col-span-4'>
          <div className='intro-y box p-5'>
            <div>
              <FormLabel>Written By</FormLabel>
              <Menu className='[&>div:nth-child(2)]:w-full'>
                <Menu.Button
                  as={Button}
                  variant='outline-secondary'
                  className='flex w-full items-center justify-start dark:border-darkmode-800 dark:bg-darkmode-800'
                  role='button'
                >
                  <div className='image-fit mr-3 h-6 w-6'>
                    <Image className='rounded' alt='Linegram - Agent appel IA' src={fakerData[0].photos[0]} />
                  </div>
                  <div className='truncate'>{fakerData[0].users[0].name}</div>
                  <Lucide icon='ChevronDown' className='ml-auto h-4 w-4' />
                </Menu.Button>
              </Menu>
            </div>
            <div className='mt-3'>
              <FormLabel htmlFor='post-form-2'>Post Date</FormLabel>
              <Litepicker
                value={salesReportFilter}
                onChange={(e) => {
                  setSalesReportFilter(e.target.value);
                }}
                options={{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
              />
            </div>
            <div className='mt-3'>
              <FormLabel htmlFor='post-form-3'>Categories</FormLabel>
              <MultiSelect />
            </div>
            <div className='mt-3'>
              <FormLabel htmlFor='post-form-4'>Tags</FormLabel>
              <MultiSelect />
            </div>
            <FormSwitch className='mt-3 flex flex-col items-start'>
              <FormSwitch.Label htmlFor='post-form-5' className='mb-2 ml-0'>
                Published
              </FormSwitch.Label>
              <FormSwitch.Input id='post-form-5' type='checkbox' />
            </FormSwitch>
            <FormSwitch className='mt-3 flex flex-col items-start'>
              <FormSwitch.Label htmlFor='post-form-6' className='mb-2 ml-0'>
                Show Author Name
              </FormSwitch.Label>
              <FormSwitch.Input id='post-form-6' type='checkbox' />
            </FormSwitch>
          </div>
        </div>
        {/* END: Post Info */}
      </div>
    </>
  );
}

export default Main;
