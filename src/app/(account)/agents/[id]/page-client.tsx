'use client';
import { voices } from 'elevenlabs/api';
import _ from 'lodash';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Alert from '@/components/dashboard/Base/Alert';
import Button from '@/components/dashboard/Base/Button';
import {
  FormCheck,
  FormHelp,
  FormInline,
  FormInput,
  FormLabel,
  FormSelect,
  FormSwitch,
  InputGroup,
} from '@/components/dashboard/Base/Form';
import Lucide from '@/components/dashboard/Base/Lucide';
import MultiSelect from '@/components/dashboard/Base/MultiSelect';
import { Textarea } from '@/components/ui/textarea';
import { Agents } from '@/features/pricing/types';
import fakerData from '@/utils/faker';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  prompt: z.string().min(1, { message: 'Required' }),
  firstSentence: z.string().min(1, { message: 'Required' }),
});

function AgentPage({ agent, onUpdate }: { agent: Agents; onUpdate: (data: any) => void }) {
  const defaultValues = {
    prompt,
    firstSentence: agent.first_sentence,
    name: agent.name,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <>
      <div className='intro-y mt-8 flex items-center'>
        <h2 className='mr-auto text-lg font-medium'>Configuration de mon agent</h2>
      </div>
      <div className='mt-5 grid grid-cols-11 gap-x-6 pb-20'>
        {/* BEGIN: Notification */}
        <Alert variant='primary' dismissible className='intro-y box col-span-11 mb-6 dark:border-darkmode-600'>
          {({ dismiss }: any) => (
            <>
              <div className='flex items-center'>
                <span>
                  <Lucide icon='Info' className='mr-2 h-4 w-4' />
                </span>
                <span>
                  Bénéficiez d'une réduction de -30 % sur votre prochaine commande d'agent IA jusqu'au 31/12/2024.
                  <a
                    href='https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820'
                    className='ml-1 underline'
                    target='blank'
                  >
                    En savoir plus
                  </a>
                </span>
                <Alert.DismissButton className='text-white' onClick={dismiss} aria-label='Close'>
                  <Lucide icon='X' className='h-4 w-4' />
                </Alert.DismissButton>
              </div>
            </>
          )}
        </Alert>
        {/* BEGIN: Notification */}
        <form
          className='intro-y col-span-11 2xl:col-span-9'
          onSubmit={handleSubmit((d) => {
            console.log(d);
            onUpdate(d);
          })}
        >
          {/* BEGIN: Product Information */}
          <div className='intro-y box mt-5 p-5'>
            <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
              <div className='flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400'>
                <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Product Information
              </div>
              <div className='mt-5'>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Nom de l'agent</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        Include min. 40 characters to make it more attractive and easy for buyers to find, consisting of
                        product type, brand, and information such as color, material, or type.
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
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Category</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <FormSelect id='category'>
                      {_.take(fakerData, 9).map((faker, fakerKey) => (
                        <option key={fakerKey} value={faker.categories[0].name}>
                          {faker.categories[0].name}
                        </option>
                      ))}
                    </FormSelect>
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Subcategory</div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        You can add a new subcategory or choose from the existing subcategory list.
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <MultiSelect />
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
                <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Product Detail
              </div>
              <div className='mt-5'>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Condition</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
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
                        <div className='font-medium'>Product Description</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        <div>
                          Make sure the product description provides a detailed explanation of your product so that it
                          is easy to understand and find your product.
                        </div>
                        <div className='mt-2'>
                          It is recommended not to enter info on mobile numbers, e-mails, etc. into the product
                          description to protect your personal data.
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <Textarea value={agent.prompt || ''} />
                    <FormHelp className='text-right'>Maximum character 0/2000</FormHelp>
                  </div>
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
                <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Product Management
              </div>
              <div className='mt-5'>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Product Status</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
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
                        <div className='font-medium'>Product Stock</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <FormInput id='product-stock' type='text' placeholder='Input Product Stock' />
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>SKU (Stock Keeping Unit)</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
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
          {/* BEGIN: Weight & Shipping */}
          <div className='intro-y box mt-5 p-5'>
            <div className='rounded-md border border-slate-200/60 p-5 dark:border-darkmode-400'>
              <div className='flex items-center border-b border-slate-200/60 pb-5 text-base font-medium dark:border-darkmode-400'>
                <Lucide icon='ChevronDown' className='mr-2 h-4 w-4' /> Weight & Shipping
              </div>
              <div className='mt-5'>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Product Weight</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        Enter the weight by weighing the product after it is
                        <span className='font-medium text-slate-600 dark:text-slate-300'>packaged</span>.
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <div className='grid-cols-4 gap-2 sm:grid'>
                      <FormSelect>
                        <option value='Gram (g)'>Gram (g)</option>
                        <option value='Kilogram (kg)'>Kilogram (kg)</option>
                      </FormSelect>
                      <FormInput type='text' id='product-weight' className='mt-2 sm:mt-0' placeholder='Stock' />
                    </div>
                    <Alert
                      variant='outline-warning'
                      dismissible
                      className='mt-5 bg-warning/20 dark:border-darkmode-400 dark:bg-darkmode-400'
                    >
                      {({ dismiss }: any) => (
                        <>
                          <div className='flex items-center'>
                            <span>
                              <Lucide icon='AlertTriangle' className='mr-3 h-6 w-6' />
                            </span>
                            <span className='text-slate-800 dark:text-slate-500'>
                              Pay close attention to the weight of the product so that there is no difference in data
                              with the shipping courier.{' '}
                              <a className='font-medium text-primary' href=''>
                                Learn More
                              </a>
                            </span>
                            <Alert.DismissButton className='btn-close dark:text-white' onClick={dismiss}>
                              <Lucide icon='X' className='h-4 w-4' />
                            </Alert.DismissButton>
                          </div>
                        </>
                      )}
                    </Alert>
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Product Size</div>
                        <div className='ml-2 rounded-md bg-slate-200 px-2 py-0.5 text-xs text-slate-600 dark:bg-darkmode-300 dark:text-slate-400'>
                          Required
                        </div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        Enter the product size after packing to calculate the volume weight.
                        <a className='font-medium text-primary' href=''>
                          Learn Volume Weight
                        </a>
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <div className='grid-cols-3 gap-2 sm:grid'>
                      <InputGroup>
                        <FormInput type='text' placeholder='Width' />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                      <InputGroup className='mt-2 sm:mt-0'>
                        <FormInput type='text' placeholder='Height' />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                      <InputGroup className='mt-2 sm:mt-0'>
                        <FormInput type='text' placeholder='Length' />
                        <InputGroup.Text>cm</InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <div className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Shipping Insurance</div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        Refund product & postage for the seller and buyer in case of damage / loss during shipping.
                        <a className='font-medium text-primary' href=''>
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <div className='flex flex-col sm:flex-row'>
                      <FormCheck className='mr-4'>
                        <FormCheck.Input
                          id='shipping-insurance-required'
                          type='radio'
                          name='horizontal_radio_button'
                          value='horizontal-radio-chris-evans'
                        />
                        <FormCheck.Label>
                          <div>Required</div>
                          <div className='mt-1 w-56 text-xs leading-relaxed text-slate-500'>
                            You <span className='font-medium text-slate-600 dark:text-slate-300'>require</span> the
                            buyer to activate shipping insurance
                          </div>
                        </FormCheck.Label>
                      </FormCheck>
                      <FormCheck className='mr-4 mt-2 sm:mt-0'>
                        <FormCheck.Input
                          id='shipping-insurance-optional'
                          type='radio'
                          name='horizontal_radio_button'
                          value='horizontal-radio-liam-neeson'
                        />
                        <FormCheck.Label>
                          <div>Optional</div>
                          <div className='mt-1 w-56 text-xs leading-relaxed text-slate-500'>
                            You{' '}
                            <span className='font-medium text-slate-600 dark:text-slate-300'>
                              give the buyer the option
                            </span>{' '}
                            to activate shipping insurance
                          </div>
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>Shipping Service</div>
                      </div>
                      <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                        Configure shipping services according to your product type.
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <div className='flex flex-col sm:flex-row'>
                      <FormCheck className='mr-4'>
                        <FormCheck.Input
                          id='shipping-service-standard'
                          type='radio'
                          name='horizontal_radio_button'
                          value='horizontal-radio-chris-evans'
                        />
                        <FormCheck.Label htmlFor='shipping-service-standard'>Standard</FormCheck.Label>
                      </FormCheck>
                      <FormCheck className='mr-4 mt-2 sm:mt-0'>
                        <FormCheck.Input
                          id='shipping-service-custom'
                          type='radio'
                          name='horizontal_radio_button'
                          value='horizontal-radio-liam-neeson'
                        />
                        <FormCheck.Label htmlFor='shipping-service-custom'>Custom</FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className='mt-3 text-xs leading-relaxed text-slate-500'>
                      The delivery service for this product will be the same as in the{' '}
                      <a className='font-medium text-primary' href=''>
                        Shipping Settings.
                      </a>
                    </div>
                  </div>
                </FormInline>
                <FormInline className='mt-5 flex-col items-start pt-5 first:mt-0 first:pt-0 xl:flex-row'>
                  <FormLabel className='xl:!mr-10 xl:w-64'>
                    <div className='text-left'>
                      <div className='flex items-center'>
                        <div className='font-medium'>PreOrder</div>
                      </div>
                    </div>
                  </FormLabel>
                  <div className='mt-3 w-full flex-1 xl:mt-0'>
                    <FormSwitch>
                      <FormSwitch.Input id='preorder-active' type='checkbox' />
                      <FormSwitch.Label className='text-xs leading-relaxed text-slate-500' htmlFor='preorder-active'>
                        Activate PreOrder if you need a longer shipping process.
                        <a className='font-medium text-primary' href=''>
                          Learn more.
                        </a>
                      </FormSwitch.Label>
                    </FormSwitch>
                  </div>
                </FormInline>
              </div>
            </div>
          </div>
          {/* END: Weight & Shipping */}
          <div className='mt-5 flex flex-col justify-end gap-2 md:flex-row'>
            <Button
              type='button'
              className='w-full border-slate-300 py-3 text-slate-500 dark:border-darkmode-400 md:w-52'
            >
              Cancel
            </Button>
            <Button
              type='button'
              className='w-full border-slate-300 py-3 text-slate-500 dark:border-darkmode-400 md:w-52'
            >
              Save & Add New Product
            </Button>
            <Button variant='primary' type='button' className='w-full py-3 md:w-52'>
              Save
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
                  Select product photos or drag and drop up to 5 photos at once here. Include min. 3 attractive photos
                  to make the product more attractive to buyers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentPage;
