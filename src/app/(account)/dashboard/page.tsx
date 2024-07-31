import clsx from 'clsx';
import _ from 'lodash';
import Image from 'next/image';

import AgentGrid from '@/components/dashboard/Agent/AgentGrid';
import Button from '@/components/dashboard/Base/Button';
import { FormInput, FormSelect } from '@/components/dashboard/Base/Form';
import Lucide from '@/components/dashboard/Base/Lucide';
import Pagination, { PaginationLink } from '@/components/dashboard/Base/Pagination';
import Table, { TableBody, TableTd, TableTh, TableThead, TableTr } from '@/components/dashboard/Base/Table';
import Tippy from '@/components/dashboard/Base/Tippy';
import ReportDonutChart from '@/components/dashboard/ReportDonutChart';
import ReportDonutChart1 from '@/components/dashboard/ReportDonutChart1';
import ReportPieChart from '@/components/dashboard/ReportPieChart';
import SimpleLineChart1 from '@/components/dashboard/SimpleLineChart1';
import fakerData from '@/utils/faker';

function Main() {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12 2xl:col-span-9'>
        <div className='grid grid-cols-12 gap-6'>
          {/* BEGIN: General Report */}
          <div className='col-span-12 mt-8'>
            <div className='intro-y flex h-10 items-center'>
              <h2 className='mr-5 truncate text-lg font-medium'>Mes agents</h2>
              <a href='' className='ml-auto flex items-center text-primary'>
                <Lucide icon='RefreshCcw' className='mr-3 h-4 w-4' /> Reload Data
              </a>
            </div>
            <div className='mt-5 grid grid-cols-12 gap-6'>
              <div className='intro-y col-span-12 sm:col-span-6 xl:col-span-3'>
                <div
                  className={clsx([
                    'zoom-in relative',
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className='box p-5'>
                    <div className='flex'>
                      <Lucide icon='ShoppingCart' className='h-[28px] w-[28px] text-primary' />
                      <div className='ml-auto'>
                        <Tippy
                          as='div'
                          className='flex cursor-pointer items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white'
                          content='33% Higher than last month'
                        >
                          33%
                          <Lucide icon='ChevronUp' className='ml-0.5 h-4 w-4' />
                        </Tippy>
                      </div>
                    </div>
                    <div className='mt-6 text-3xl font-medium leading-8'>4.710</div>
                    <div className='mt-1 text-base text-slate-500'>Item Sales</div>
                  </div>
                </div>
              </div>
              <div className='intro-y col-span-12 sm:col-span-6 xl:col-span-3'>
                <div
                  className={clsx([
                    'zoom-in relative',
                    "before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']",
                  ])}
                >
                  <div className='box p-5'>
                    <div className='flex'>
                      <Lucide icon='CreditCard' className='h-[28px] w-[28px] text-pending' />
                      <div className='ml-auto'>
                        <Tippy
                          as='div'
                          className='flex cursor-pointer items-center rounded-full bg-danger py-[3px] pl-2 pr-1 text-xs font-medium text-white'
                          content='2% Lower than last month'
                        >
                          2%
                          <Lucide icon='ChevronDown' className='ml-0.5 h-4 w-4' />
                        </Tippy>
                      </div>
                    </div>
                    <div className='mt-6 text-3xl font-medium leading-8'>3.721</div>
                    <div className='mt-1 text-base text-slate-500'>New Orders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          <div className='col-span-12 '>
            <AgentGrid />
          </div>
          {/* BEGIN: Weekly Top Seller */}
          <div className='col-span-12 mt-8 sm:col-span-6 lg:col-span-3'>
            <div className='intro-y flex h-10 items-center'>
              <h2 className='mr-5 truncate text-lg font-medium'>Weekly Top Seller</h2>
              <a href='' className='ml-auto truncate text-primary'>
                Show More
              </a>
            </div>
            <div className='intro-y box mt-5 p-5'>
              <div className='mt-3'>
                <ReportPieChart height={213} />
              </div>
              <div className='mx-auto mt-8 w-52 sm:w-auto'>
                <div className='flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-primary'></div>
                  <span className='truncate'>17 - 30 Years old</span>
                  <span className='ml-auto font-medium'>62%</span>
                </div>
                <div className='mt-4 flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-pending'></div>
                  <span className='truncate'>31 - 50 Years old</span>
                  <span className='ml-auto font-medium'>33%</span>
                </div>
                <div className='mt-4 flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-warning'></div>
                  <span className='truncate'>&gt;= 50 Years old</span>
                  <span className='ml-auto font-medium'>10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Weekly Top Seller */}
          {/* BEGIN: Sales Report */}
          <div className='col-span-12 mt-8 sm:col-span-6 lg:col-span-3'>
            <div className='intro-y flex h-10 items-center'>
              <h2 className='mr-5 truncate text-lg font-medium'>Sales Report</h2>
              <a href='' className='ml-auto truncate text-primary'>
                Show More
              </a>
            </div>
            <div className='intro-y box mt-5 p-5'>
              <div className='mt-3'>
                <ReportDonutChart height={213} />
              </div>
              <div className='mx-auto mt-8 w-52 sm:w-auto'>
                <div className='flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-primary'></div>
                  <span className='truncate'>17 - 30 Years old</span>
                  <span className='ml-auto font-medium'>62%</span>
                </div>
                <div className='mt-4 flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-pending'></div>
                  <span className='truncate'>31 - 50 Years old</span>
                  <span className='ml-auto font-medium'>33%</span>
                </div>
                <div className='mt-4 flex items-center'>
                  <div className='mr-3 h-2 w-2 rounded-full bg-warning'></div>
                  <span className='truncate'>&gt;= 50 Years old</span>
                  <span className='ml-auto font-medium'>10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Official Store */}
          <div className='col-span-12 mt-6 xl:col-span-8'>
            <div className='intro-y block h-10 items-center sm:flex'>
              <h2 className='mr-5 truncate text-lg font-medium'>Official Store</h2>
              <div className='relative mt-3 text-slate-500 sm:ml-auto sm:mt-0'>
                <Lucide icon='MapPin' className='absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4' />
                <FormInput type='text' className='!box pl-10 sm:w-56' placeholder='Filter by city' />
              </div>
            </div>
            <div className='intro-y box mt-12 p-5 sm:mt-5'>
              <div>250 Official stores in 21 countries, click the marker to see location details.</div>
            </div>
          </div>
          {/* END: Official Store */}
          {/* BEGIN: Weekly Best Sellers */}
          <div className='col-span-12 mt-6 xl:col-span-4'>
            <div className='intro-y flex h-10 items-center'>
              <h2 className='mr-5 truncate text-lg font-medium'>Weekly Best Sellers</h2>
            </div>
            <div className='mt-5'>
              {_.take(fakerData, 4).map((faker, fakerKey) => (
                <div key={fakerKey} className='intro-y'>
                  <div className='box zoom-in mb-3 flex items-center px-4 py-4'>
                    <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-md'>
                      <Image alt='Linegram - Agent appel IA' src={faker.photos[0]} />
                    </div>
                    <div className='ml-4 mr-auto'>
                      <div className='font-medium'>{faker.users[0].name}</div>
                      <div className='mt-0.5 text-xs text-slate-500'>{faker.dates[0]}</div>
                    </div>
                    <div className='cursor-pointer rounded-full bg-success px-2 py-1 text-xs font-medium text-white'>
                      137 Sales
                    </div>
                  </div>
                </div>
              ))}
              <a
                href=''
                className='intro-y block w-full rounded-md border border-dotted border-slate-400 py-4 text-center text-slate-500 dark:border-darkmode-300'
              >
                View More
              </a>
            </div>
          </div>
          {/* END: Weekly Best Sellers */}
          {/* BEGIN: General Report */}
          <div className='col-span-12 mt-8 grid grid-cols-12 gap-6'>
            <div className='intro-y col-span-12 sm:col-span-6 2xl:col-span-3'>
              <div className='box zoom-in p-5'>
                <div className='flex items-center'>
                  <div className='w-2/4 flex-none'>
                    <div className='truncate text-lg font-medium'>Target Sales</div>
                    <div className='mt-1 text-slate-500'>300 Sales</div>
                  </div>
                  <div className='relative ml-auto flex-none'>
                    <ReportDonutChart1 width={90} height={90} />
                    <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center font-medium'>
                      20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='intro-y col-span-12 sm:col-span-6 2xl:col-span-3'>
              <div className='box zoom-in p-5'>
                <div className='flex'>
                  <div className='mr-3 truncate text-lg font-medium'>Social Media</div>
                  <div className='ml-auto flex cursor-pointer items-center truncate rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-darkmode-400'>
                    320 Followers
                  </div>
                </div>
                <div className='mt-1'>
                  <SimpleLineChart1 height={58} className='-ml-1' />
                </div>
              </div>
            </div>
            <div className='intro-y col-span-12 sm:col-span-6 2xl:col-span-3'>
              <div className='box zoom-in p-5'>
                <div className='flex items-center'>
                  <div className='w-2/4 flex-none'>
                    <div className='truncate text-lg font-medium'>New Products</div>
                    <div className='mt-1 text-slate-500'>1450 Products</div>
                  </div>
                  <div className='relative ml-auto flex-none'>
                    <ReportDonutChart1 width={90} height={90} />
                    <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center font-medium'>
                      45%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='intro-y col-span-12 sm:col-span-6 2xl:col-span-3'>
              <div className='box zoom-in p-5'>
                <div className='flex'>
                  <div className='mr-3 truncate text-lg font-medium'>Posted Ads</div>
                  <div className='ml-auto flex cursor-pointer items-center truncate rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-darkmode-400'>
                    180 Campaign
                  </div>
                </div>
                <div className='mt-1'>
                  <SimpleLineChart1 height={58} className='-ml-1' />
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Weekly Top Products */}
          <div className='col-span-12 mt-6'>
            <div className='intro-y block h-10 items-center sm:flex'>
              <h2 className='mr-5 truncate text-lg font-medium'>Weekly Top Products</h2>
              <div className='mt-3 flex items-center sm:ml-auto sm:mt-0'>
                <Button className='!box flex items-center text-slate-600 dark:text-slate-300'>
                  <Lucide icon='FileText' className='mr-2 hidden h-4 w-4 sm:block' />
                  Export to Excel
                </Button>
                <Button className='!box ml-3 flex items-center text-slate-600 dark:text-slate-300'>
                  <Lucide icon='FileText' className='mr-2 hidden h-4 w-4 sm:block' />
                  Export to PDF
                </Button>
              </div>
            </div>
            <div className='intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible'>
              <Table className='border-separate border-spacing-y-[10px] sm:mt-2'>
                <TableThead>
                  <TableTr>
                    <TableTh className='whitespace-nowrap border-b-0'>IMAGES</TableTh>
                    <TableTh className='whitespace-nowrap border-b-0'>PRODUCT NAME</TableTh>
                    <TableTh className='whitespace-nowrap border-b-0 text-center'>STOCK</TableTh>
                    <TableTh className='whitespace-nowrap border-b-0 text-center'>STATUS</TableTh>
                    <TableTh className='whitespace-nowrap border-b-0 text-center'>ACTIONS</TableTh>
                  </TableTr>
                </TableThead>
                <TableBody>
                  {_.take(fakerData, 4).map((faker, fakerKey) => (
                    <TableTr key={fakerKey} className='intro-x'>
                      <TableTd className='box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                        <div className='flex'>
                          <div className='image-fit zoom-in h-10 w-10'>
                            <Tippy
                              as='img'
                              alt='Linegram - Agent appel IA'
                              className='rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]'
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <div className='image-fit zoom-in -ml-5 h-10 w-10'>
                            <Tippy
                              as='img'
                              alt='Linegram - Agent appel IA'
                              className='rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]'
                              src={faker.images[1]}
                              content={`Uploaded at ${faker.dates[1]}`}
                            />
                          </div>
                          <div className='image-fit zoom-in -ml-5 h-10 w-10'>
                            <Tippy
                              as='img'
                              alt='Linegram - Agent appel IA'
                              className='rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]'
                              src={faker.images[2]}
                              content={`Uploaded at ${faker.dates[2]}`}
                            />
                          </div>
                        </div>
                      </TableTd>
                      <TableTd className='box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                        <a href='' className='whitespace-nowrap font-medium'>
                          {faker.products[0].name}
                        </a>
                        <div className='mt-0.5 whitespace-nowrap text-xs text-slate-500'>
                          {faker.products[0].category}
                        </div>
                      </TableTd>
                      <TableTd className='box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                        {faker.stocks[0]}
                      </TableTd>
                      <TableTd className='box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600'>
                        <div
                          className={clsx([
                            'flex items-center justify-center',
                            { 'text-success': faker.trueFalse[0] },
                            { 'text-danger': !faker.trueFalse[0] },
                          ])}
                        >
                          <Lucide icon='CheckSquare' className='mr-2 h-4 w-4' />
                          {faker.trueFalse[0] ? 'Active' : 'Inactive'}
                        </div>
                      </TableTd>
                      <TableTd
                        className={clsx([
                          'box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600',
                          'before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400',
                        ])}
                      >
                        <div className='flex items-center justify-center'>
                          <a className='mr-3 flex items-center' href=''>
                            <Lucide icon='CheckSquare' className='mr-1 h-4 w-4' />
                            Edit
                          </a>
                          <a className='flex items-center text-danger' href=''>
                            <Lucide icon='Trash2' className='mr-1 h-4 w-4' /> Delete
                          </a>
                        </div>
                      </TableTd>
                    </TableTr>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className='intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap'>
              <Pagination className='w-full sm:mr-auto sm:w-auto'>
                <PaginationLink>
                  <Lucide icon='ChevronsLeft' className='h-4 w-4' />
                </PaginationLink>
                <PaginationLink>
                  <Lucide icon='ChevronLeft' className='h-4 w-4' />
                </PaginationLink>
                <PaginationLink>...</PaginationLink>
                <PaginationLink>1</PaginationLink>
                <PaginationLink active>2</PaginationLink>
                <PaginationLink>3</PaginationLink>
                <PaginationLink>...</PaginationLink>
                <PaginationLink>
                  <Lucide icon='ChevronRight' className='h-4 w-4' />
                </PaginationLink>
                <PaginationLink>
                  <Lucide icon='ChevronsRight' className='h-4 w-4' />
                </PaginationLink>
              </Pagination>
              <FormSelect className='!box mt-3 w-20 sm:mt-0'>
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </FormSelect>
            </div>
          </div>
          {/* END: Weekly Top Products */}
        </div>
      </div>
      <div className='col-span-12 2xl:col-span-3'>
        <div className='-mb-10 pb-10 2xl:border-l'>
          <div className='grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6'>
            {/* BEGIN: Transactions */}
            <div className='col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8'>
              <div className='intro-x flex h-10 items-center'>
                <h2 className='mr-5 truncate text-lg font-medium'>Transactions</h2>
              </div>
              <div className='mt-5'>
                {_.take(fakerData, 5).map((faker, fakerKey) => (
                  <div key={fakerKey} className='intro-x'>
                    <div className='box zoom-in mb-3 flex items-center px-5 py-3'>
                      <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-full'>
                        <Image alt='Linegram - Agent appel IA' src={faker.photos[0]} />
                      </div>
                      <div className='ml-4 mr-auto'>
                        <div className='font-medium'>{faker.users[0].name}</div>
                        <div className='mt-0.5 text-xs text-slate-500'>{faker.dates[0]}</div>
                      </div>
                      <div
                        className={clsx({
                          'text-success': faker.trueFalse[0],
                          'text-danger': !faker.trueFalse[0],
                        })}
                      >
                        {faker.trueFalse[0] ? '+' : '-'}${faker.totals[0]}
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=''
                  className='intro-x block w-full rounded-md border border-dotted border-slate-400 py-3 text-center text-slate-500 dark:border-darkmode-300'
                >
                  View More
                </a>
              </div>
            </div>
            {/* END: Transactions */}
            {/* BEGIN: Recent Activities */}
            <div className='col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12'>
              <div className='intro-x flex h-10 items-center'>
                <h2 className='mr-5 truncate text-lg font-medium'>Recent Activities</h2>
                <a href='' className='ml-auto truncate text-primary'>
                  Show More
                </a>
              </div>
              <div className='relative mt-5 before:absolute before:ml-5 before:mt-5 before:block before:h-[85%] before:w-px before:bg-slate-200 before:dark:bg-darkmode-400'>
                <div className='intro-x relative mb-3 flex items-center'>
                  <div className='before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400'>
                    <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-full'>
                      <Image alt='Linegram - Agent appel IA' src={fakerData[9].photos[0]} />
                    </div>
                  </div>
                  <div className='box zoom-in ml-4 flex-1 px-5 py-3'>
                    <div className='flex items-center'>
                      <div className='font-medium'>{fakerData[9].users[0].name}</div>
                      <div className='ml-auto text-xs text-slate-500'>07:00 PM</div>
                    </div>
                    <div className='mt-1 text-slate-500'>Has joined the team</div>
                  </div>
                </div>
                <div className='intro-x relative mb-3 flex items-center'>
                  <div className='before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400'>
                    <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-full'>
                      <Image alt='Linegram - Agent appel IA' src={fakerData[8].photos[0]} />
                    </div>
                  </div>
                  <div className='box zoom-in ml-4 flex-1 px-5 py-3'>
                    <div className='flex items-center'>
                      <div className='font-medium'>{fakerData[8].users[0].name}</div>
                      <div className='ml-auto text-xs text-slate-500'>07:00 PM</div>
                    </div>
                    <div className='text-slate-500'>
                      <div className='mt-1'>Added 3 new photos</div>
                      <div className='mt-2 flex'>
                        <Tippy
                          as='div'
                          className='image-fit zoom-in mr-1 h-8 w-8'
                          content={fakerData[0].products[0].name}
                        >
                          <Image
                            alt='Linegram - Agent appel IA'
                            className='rounded-md border border-white'
                            src={fakerData[8].images[0]}
                          />
                        </Tippy>
                        <Tippy
                          as='div'
                          className='image-fit zoom-in mr-1 h-8 w-8'
                          content={fakerData[1].products[0].name}
                        >
                          <Image
                            alt='Linegram - Agent appel IA'
                            className='rounded-md border border-white'
                            src={fakerData[8].images[1]}
                          />
                        </Tippy>
                        <Tippy
                          as='div'
                          className='image-fit zoom-in mr-1 h-8 w-8'
                          content={fakerData[2].products[0].name}
                        >
                          <Image
                            alt='Linegram - Agent appel IA'
                            className='rounded-md border border-white'
                            src={fakerData[8].images[2]}
                          />
                        </Tippy>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='intro-x my-4 text-center text-xs text-slate-500'>12 November</div>
                <div className='intro-x relative mb-3 flex items-center'>
                  <div className='before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400'>
                    <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-full'>
                      <Image alt='Linegram - Agent appel IA' src={fakerData[7].photos[0]} />
                    </div>
                  </div>
                  <div className='box zoom-in ml-4 flex-1 px-5 py-3'>
                    <div className='flex items-center'>
                      <div className='font-medium'>{fakerData[7].users[0].name}</div>
                      <div className='ml-auto text-xs text-slate-500'>07:00 PM</div>
                    </div>
                    <div className='mt-1 text-slate-500'>
                      Has changed{' '}
                      <a className='text-primary' href=''>
                        {fakerData[7].products[0].name}
                      </a>{' '}
                      price and description
                    </div>
                  </div>
                </div>
                <div className='intro-x relative mb-3 flex items-center'>
                  <div className='before:absolute before:ml-5 before:mt-5 before:block before:h-px before:w-20 before:bg-slate-200 before:dark:bg-darkmode-400'>
                    <div className='image-fit h-10 w-10 flex-none overflow-hidden rounded-full'>
                      <Image alt='Linegram - Agent appel IA' src={fakerData[6].photos[0]} />
                    </div>
                  </div>
                  <div className='box zoom-in ml-4 flex-1 px-5 py-3'>
                    <div className='flex items-center'>
                      <div className='font-medium'>{fakerData[6].users[0].name}</div>
                      <div className='ml-auto text-xs text-slate-500'>07:00 PM</div>
                    </div>
                    <div className='mt-1 text-slate-500'>
                      Has changed{' '}
                      <a className='text-primary' href=''>
                        {fakerData[6].products[0].name}
                      </a>{' '}
                      description
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Recent Activities */}
            {/* BEGIN: Schedules */}
            <div className='col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto'>
              <div className='intro-x flex h-10 items-center'>
                <h2 className='mr-5 truncate text-lg font-medium'>Schedules</h2>
                <a href='' className='ml-auto flex items-center truncate text-primary'>
                  <Lucide icon='Plus' className='mr-1 h-4 w-4' /> Add New Schedules
                </a>
              </div>
              <div className='mt-5'>
                <div className='intro-x box'>
                  <div className='p-5'>
                    <div className='flex'>
                      <Lucide icon='ChevronLeft' className='h-5 w-5 text-slate-500' />
                      <div className='mx-auto text-base font-medium'>April</div>
                      <Lucide icon='ChevronRight' className='h-5 w-5 text-slate-500' />
                    </div>
                    <div className='mt-5 grid grid-cols-7 gap-4 text-center'>
                      <div className='font-medium'>Su</div>
                      <div className='font-medium'>Mo</div>
                      <div className='font-medium'>Tu</div>
                      <div className='font-medium'>We</div>
                      <div className='font-medium'>Th</div>
                      <div className='font-medium'>Fr</div>
                      <div className='font-medium'>Sa</div>
                      <div className='relative rounded py-0.5 text-slate-500'>29</div>
                      <div className='relative rounded py-0.5 text-slate-500'>30</div>
                      <div className='relative rounded py-0.5 text-slate-500'>31</div>
                      <div className='relative rounded py-0.5'>1</div>
                      <div className='relative rounded py-0.5'>2</div>
                      <div className='relative rounded py-0.5'>3</div>
                      <div className='relative rounded py-0.5'>4</div>
                      <div className='relative rounded py-0.5'>5</div>
                      <div className='relative rounded bg-success/20 py-0.5 dark:bg-success/30'>6</div>
                      <div className='relative rounded py-0.5'>7</div>
                      <div className='relative rounded bg-primary py-0.5 text-white'>8</div>
                      <div className='relative rounded py-0.5'>9</div>
                      <div className='relative rounded py-0.5'>10</div>
                      <div className='relative rounded py-0.5'>11</div>
                      <div className='relative rounded py-0.5'>12</div>
                      <div className='relative rounded py-0.5'>13</div>
                      <div className='relative rounded py-0.5'>14</div>
                      <div className='relative rounded py-0.5'>15</div>
                      <div className='relative rounded py-0.5'>16</div>
                      <div className='relative rounded py-0.5'>17</div>
                      <div className='relative rounded py-0.5'>18</div>
                      <div className='relative rounded py-0.5'>19</div>
                      <div className='relative rounded py-0.5'>20</div>
                      <div className='relative rounded py-0.5'>21</div>
                      <div className='relative rounded py-0.5'>22</div>
                      <div className='relative rounded bg-pending/20 py-0.5 dark:bg-pending/30'>23</div>
                      <div className='relative rounded py-0.5'>24</div>
                      <div className='relative rounded py-0.5'>25</div>
                      <div className='relative rounded py-0.5'>26</div>
                      <div className='relative rounded bg-primary/10 py-0.5 dark:bg-primary/50'>27</div>
                      <div className='relative rounded py-0.5'>28</div>
                      <div className='relative rounded py-0.5'>29</div>
                      <div className='relative rounded py-0.5'>30</div>
                      <div className='relative rounded py-0.5 text-slate-500'>1</div>
                      <div className='relative rounded py-0.5 text-slate-500'>2</div>
                      <div className='relative rounded py-0.5 text-slate-500'>3</div>
                      <div className='relative rounded py-0.5 text-slate-500'>4</div>
                      <div className='relative rounded py-0.5 text-slate-500'>5</div>
                      <div className='relative rounded py-0.5 text-slate-500'>6</div>
                      <div className='relative rounded py-0.5 text-slate-500'>7</div>
                      <div className='relative rounded py-0.5 text-slate-500'>8</div>
                      <div className='relative rounded py-0.5 text-slate-500'>9</div>
                    </div>
                  </div>
                  <div className='border-t border-slate-200/60 p-5'>
                    <div className='flex items-center'>
                      <div className='mr-3 h-2 w-2 rounded-full bg-pending'></div>
                      <span className='truncate'>UI/UX Workshop</span>
                      <span className='font-medium xl:ml-auto'>23th</span>
                    </div>
                    <div className='mt-4 flex items-center'>
                      <div className='mr-3 h-2 w-2 rounded-full bg-primary'></div>
                      <span className='truncate'>VueJs Frontend Development</span>
                      <span className='font-medium xl:ml-auto'>10th</span>
                    </div>
                    <div className='mt-4 flex items-center'>
                      <div className='mr-3 h-2 w-2 rounded-full bg-warning'></div>
                      <span className='truncate'>Laravel Rest API</span>
                      <span className='font-medium xl:ml-auto'>31th</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Schedules */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
