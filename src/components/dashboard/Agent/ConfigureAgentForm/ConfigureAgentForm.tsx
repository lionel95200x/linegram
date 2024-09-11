'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import PromotionBanner from '@/components/dashboard/Agent/PromotionBanner/PromotionBanner';
import Button from '@/components/dashboard/Base/Button';
import { FormCheck, FormHelp, FormInline, FormInput, FormLabel, FormSwitch } from '@/components/dashboard/Base/Form';
import Lucide from '@/components/dashboard/Base/Lucide';
import { Textarea } from '@/components/ui/textarea';
import { Agents } from '@/features/pricing/types';
import { DEFAULT_TEMPLATE } from '@/utils/defaultPrompt';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';

const schema = z.object({
  name: z.string().min(1, { message: 'Requis' }),
  prompt: z.string().min(1, { message: 'Requis' }),
  firstSentence: z.string().min(1, { message: 'Requis' }),
});

const ConfigureAgentForm = ({ agent, onSave, onTestCall }: { agent: Agents; onSave: any; onTestCall: any }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE[0]);

  const { mutate: updateAgent } = useMutation({
    mutationFn: (p: any) => onSave(p),
    onSuccess: () => {
      toast.success('Agent updated successfully!');
    },
    onError: () => {
      toast.error('Failed to update agent.');
    },
  });

  const handleTestCall = async () => {
    await onTestCall(agent.id);

    toast.success('Apple lancé avec succes!');
  };

  const defaultValues = {
    prompt: agent.prompt,
    firstSentence: agent.first_sentence,
    name: agent.name,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <div className='mt-5 grid grid-cols-11 gap-x-6 pb-20'>
      <PromotionBanner />

      <form className='intro-y col-span-11 2xl:col-span-9' onSubmit={handleSubmit(updateAgent)}>
        <div className='intro-y col-span-12 mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap'>
          <Button disabled={!isDirty} variant='primary' className='mr-2 shadow-md' type='submit'>
            Sauvegarder
          </Button>
          <Button onClick={handleTestCall}>Appel</Button>
        </div>
        {/* BEGIN: Product Information */}
        <div className='intro-y box mt-5 p-5'>
          <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
            <div className='flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400'>
              <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' />
              Informations de l'agent
            </div>
            <div className='mt-5'>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>Nom de l'agent</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                    <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                      Spécifiez un nom pour retrouvez votre agent facilement parmis votre liste d'agents
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <FormInput
                    id='agent-name'
                    type='text'
                    placeholder='Spécifiez un nom pour retrouvez votre agent'
                    {...register('name')}
                  />
                  <FormHelp className='text-right'>Nombre max 70 caractères</FormHelp>
                </div>
              </FormInline>
            </div>
          </div>
        </div>
        {/* END: Product Information */}
        {/* BEGIN: Product Detail */}
        <div className='intro-y box mt-5 p-5'>
          <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
            <div className='flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400'>
              <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' />
              Comportement de l'agent
            </div>
            <div className='mt-5'>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>Premiere phrase d'appel</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <FormInput
                    type='text'
                    placeholder='Bonjour, je suis votre agent dédié, je suis là pour vous aider'
                    {...register('firstSentence')}
                  />
                </div>
                {errors.firstSentence && <div className='mt-2 text-danger'>Veuillez renseignez la premiere phrase</div>}
              </FormInline>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>Instructions de l'agent</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                    <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                      <div>
                        Essayez d'etre le plus descriptif possible dans le détail de votre agent, de quel facon il doit
                        répondre au question
                      </div>
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-5 grid grid-cols-12 gap-5'>
                  {DEFAULT_TEMPLATE.map((template) => (
                    <div
                      key={template}
                      className={`box zoom-in col-span-12 cursor-pointer p-3 text-center sm:col-span-4 2xl:col-span-3 ${
                        selectedTemplate === template ? 'bg-primary' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className={selectedTemplate === template ? 'text-white' : 'text-slate-500'}>{template}</div>
                    </div>
                  ))}
                </div>

                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <Textarea {...register('prompt')} />
                  <FormHelp className='text-right'>Nombre max de caracteres 0/2000</FormHelp>
                </div>
                {errors.prompt && <div className='mt-2 text-danger'>Veuillez renseignez les instructions</div>}
              </FormInline>
            </div>
          </div>
        </div>
        {/* END: Product Detail */}

        {/* END: Product Variant */}
        {/* BEGIN: Product Management */}
        <div className='intro-y box mt-5 p-5'>
          <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
            <div className='flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400'>
              <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' />
              Gestion de la voix
            </div>
            <div className='mt-5'>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>Condition</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <div className='flex flex-col sm:flex-row'>
                    <FormCheck className='mr-4'>
                      <FormCheck.Input
                        id='condition-new'
                        type='radio'
                        name='horizontal_radio_button'
                        value='horizontal-radio-chris-evans'
                      />
                      <FormCheck.Label htmlFor='condition-new'>New</FormCheck.Label>
                    </FormCheck>
                    <FormCheck className='mr-4 mt-2 sm:mt-0'>
                      <FormCheck.Input
                        id='condition-second'
                        type='radio'
                        name='horizontal_radio_button'
                        value='horizontal-radio-liam-neeson'
                      />
                      <FormCheck.Label htmlFor='condition-second'>Second</FormCheck.Label>
                    </FormCheck>
                  </div>
                </div>
              </FormInline>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>Product Status</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                    <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                      If the status is active, your product can be searched for by potential buyers.
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <FormSwitch>
                    <FormSwitch.Input id='product-status-active' type='checkbox' />
                    <FormSwitch.Label htmlFor='product-status-active'>Active</FormSwitch.Label>
                  </FormSwitch>
                </div>
              </FormInline>
              <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                <FormLabel className='xl:!mr-10 xl:w-64'>
                  <div className='text-left'>
                    <div className='flex items-center'>
                      <div className='font-medium'>SKU (Stock Keeping Unit)</div>
                      <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                        Requis
                      </div>
                    </div>
                    <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                      Use a unique SKU code if you want to mark your product.
                    </div>
                  </div>
                </FormLabel>
                <div className='mt-3 w-full flex-1 xl:mt-0'>
                  <FormInput id='sku' type='text' placeholder='Input SKU' />
                </div>
              </FormInline>
            </div>
          </div>
        </div>
        {/* END: Product Management */}

        <div className='mt-5 flex flex-col justify-end gap-2 md:flex-row'>
          <Button
            type='button'
            className='w-full border-slate-300 py-3 text-slate-500 dark:border-darkmode-400 md:w-52'
          >
            <Link href='/agents'>Retournez a mes agents</Link>
          </Button>

          <Button variant='danger' type='button' className='w-full py-3 md:w-52'>
            Supprimez
          </Button>
        </div>
      </form>
      <div className='intro-y col-span-2 hidden 2xl:block'>
        <div className='sticky top-0 pt-10'>
          <ul className="relative text-slate-500 before:absolute before:left-0 before:z-[-1] before:h-full before:w-[2px] before:bg-slate-200 before:content-[''] before:dark:bg-darkmode-600">
            <li className='mb-4 border-l-2 border-primary pl-5 font-medium text-primary dark:border-primary'>
              <a href=''>Upload Product</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Product Information</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Product Detail</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Product Variant</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Product Variant (Details)</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Product Management</a>
            </li>
            <li className='mb-4 border-l-2 border-transparent pl-5 dark:border-transparent'>
              <a href=''>Weight & Shipping</a>
            </li>
          </ul>
          <div className='relative mt-10 rounded-md border border-warning bg-warning/20 p-5 dark:border-0 dark:bg-darkmode-600'>
            <Lucide icon='Lightbulb' className='absolute right-0 top-0 mr-3 mt-5 h-12 w-12 text-warning/80' />
            <h2 className='text-lg font-medium'>Tips</h2>
            <div className='mt-5 font-medium'>Price</div>
            <div className='mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-500'>
              <div>
                The image format is .jpg .jpeg .png and a minimum size of 300 x 300 pixels (For optimal images use a
                minimum size of 700 x 700 pixels).
              </div>
              <div className='mt-2'>
                Select product photos or drag and drop up to 5 photos at once here. Include min. 3 attractive photos to
                make the product more attractive to buyers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigureAgentForm;
