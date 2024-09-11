'use client';
import Image from 'next/image';

import Button from '@/components/dashboard/Base/Button';
import { Menu } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import fakerData from '@/utils/faker';

const LeftText = () => (
  <div className='float-left mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
    <div className='image-fit relative mr-5 hidden h-10 w-10 flex-none sm:block'>
      <Image alt='Midone Tailwind HTML Admin Template' className='rounded-full' src={fakerData[0].photos[0]} />
    </div>
    <div className='rounded-r-md rounded-t-md bg-slate-100 px-4 py-3 text-slate-500 dark:bg-darkmode-400'>
      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
      <div className='mt-1 text-xs text-slate-500'>10 secs ago</div>
    </div>
  </div>
);

const RightText = () => (
  <div className='float-right mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
    <div className='rounded-l-md rounded-t-md bg-primary px-4 py-3 text-white'>
      Lorem ipsum
      <div className='mt-1 text-xs text-white text-opacity-80'>1 secs ago</div>
    </div>
    <div className='image-fit relative ml-5 hidden h-10 w-10 flex-none sm:block'>
      <Image alt='Midone Tailwind HTML Admin Template' className='rounded-full' src={fakerData[1].photos[0]} />
    </div>
  </div>
);

const ChatView = () => {
  const chatBox = true;
  return (
    <div className='scrollbar-hidden flex-1 overflow-y-scroll px-5 pt-5'>
      <Button variant='primary' className='mr-2 shadow-md'>
        Lancez un nouvel appel
      </Button>
      <div className='intro-y mt-5 flex  gap-5'>
        {/* BEGIN: Chat Side Menu */}

        <div className='pr-1'>
          <div className='box  px-5 py-10'>
            <div className='image-fit mx-auto h-20 w-20 flex-none overflow-hidden rounded-full'>
              <Image alt='Midone Tailwind HTML Admin Template' src={fakerData[0].photos[0]} />
            </div>
            <div className='mt-3 text-center'>
              <div className='text-lg font-medium'>{fakerData[0]['users'][0]['name']}</div>
              <div className='mt-1 text-slate-500'>Tailwind HTML Admin Template</div>
            </div>
          </div>
          <div className='box  p-5'>
            <div className='flex items-center border-b border-slate-200/60 pb-5 dark:border-darkmode-400'>
              <div>
                <div className='text-slate-500'>Country</div>
                <div className='mt-1'>New York City, USA</div>
              </div>
              <Lucide icon='Globe' className='ml-auto h-4 w-4 text-slate-500' />
            </div>
            <div className='flex items-center border-b border-slate-200/60 py-5 dark:border-darkmode-400'>
              <div>
                <div className='text-slate-500'>Phone</div>
                <div className='mt-1'>+32 19 23 62 24 34</div>
              </div>
              <Lucide icon='Mic' className='ml-auto h-4 w-4 text-slate-500' />
            </div>
            <div className='flex items-center border-b border-slate-200/60 py-5 dark:border-darkmode-400'>
              <div>
                <div className='text-slate-500'>Email</div>
                <div className='mt-1'>{fakerData[0]['users'][0]['email']}</div>
              </div>
              <Lucide icon='Mail' className='ml-auto h-4 w-4 text-slate-500' />
            </div>
            <div className='flex items-center pt-5'>
              <div>
                <div className='text-slate-500'>Joined Date</div>
                <div className='mt-1'>{fakerData[0]['dates'][0]}</div>
              </div>
              <Lucide icon='Clock' className='ml-auto h-4 w-4 text-slate-500' />
            </div>
          </div>
        </div>

        {/* END: Chat Side Menu */}
        {/* BEGIN: Chat Content */}
        <div className='intro-y col-span-12 lg:col-span-8 2xl:col-span-9'>
          <div className='box h-[782px]'>
            {/* BEGIN: Chat Active */}
            {chatBox && (
              <div className='flex h-full flex-col'>
                <div className='flex flex-col border-b border-slate-200/60 px-5 py-4 dark:border-darkmode-400 sm:flex-row'>
                  <div className='flex items-center'>
                    <div className='image-fit relative h-10 w-10 flex-none sm:h-12 sm:w-12'>
                      <Image
                        alt='Midone Tailwind HTML Admin Template'
                        className='rounded-full'
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className='ml-3 mr-auto'>
                      <div className='text-base font-medium'>{fakerData[0]['users'][0]['name']}</div>
                      <div className='text-xs text-slate-500 sm:text-sm'>
                        Conversation avec l'agent <span className='mx-1'>•</span>
                      </div>
                    </div>
                  </div>
                  <div className='-mx-5 mt-5 flex items-center border-t border-slate-200/60 px-5 pt-3 sm:mx-0 sm:ml-auto sm:mt-0 sm:border-0 sm:px-0 sm:pt-0'>
                    <a href='#' className='h-5 w-5 text-slate-500'>
                      <Lucide icon='Search' className='h-5 w-5' />
                    </a>
                    <a href='#' className='ml-5 h-5 w-5 text-slate-500'>
                      <Lucide icon='UserPlus' className='h-5 w-5' />
                    </a>
                    <Menu className='ml-auto sm:ml-3'>
                      <Menu.Button as='a' href='#' className='h-5 w-5 text-slate-500'>
                        <Lucide icon='MoreVertical' className='h-5 w-5' />
                      </Menu.Button>
                      <Menu.Items className='w-40'>
                        <Menu.Item>
                          <Lucide icon='Share2' className='mr-2 h-4 w-4' />
                          Share Contact
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon='Settings' className='mr-2 h-4 w-4' />
                          Settings
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>
                <div className='scrollbar-hidden flex-1 overflow-y-scroll px-5 pt-5'>
                  <div className='mb-10 mt-5 text-center text-xs text-slate-400 dark:text-slate-500'>12 June 2020</div>

                  <div className='float-left mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
                    <div className='image-fit relative mr-5 hidden h-10 w-10 flex-none sm:block'>
                      <Image
                        alt='Midone Tailwind HTML Admin Template'
                        className='rounded-full'
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className='rounded-r-md rounded-t-md bg-slate-100 px-4 py-3 text-slate-500 dark:bg-darkmode-400'>
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                      <div className='mt-1 text-xs text-slate-500'>2 mins ago</div>
                    </div>
                    <Menu className='my-auto ml-3 hidden sm:block'>
                      <Menu.Button as='a' href='#' className='h-4 w-4 text-slate-500'>
                        <Lucide icon='MoreVertical' className='h-4 w-4' />
                      </Menu.Button>
                      <Menu.Items className='w-40'>
                        <Menu.Item>
                          <Lucide icon='CornerUpLeft' className='mr-2 h-4 w-4' />
                          Reply
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon='Trash' className='mr-2 h-4 w-4' /> Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className='clear-both'></div>
                  <div className='float-right mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
                    <Menu className='my-auto mr-3 hidden sm:block'>
                      <Menu.Button as='a' href='#' className='h-4 w-4 text-slate-500'>
                        <Lucide icon='MoreVertical' className='h-4 w-4' />
                      </Menu.Button>
                      <Menu.Items className='w-40'>
                        <Menu.Item>
                          <Lucide icon='CornerUpLeft' className='mr-2 h-4 w-4' />
                          Reply
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon='Trash' className='mr-2 h-4 w-4' /> Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                    <div className='rounded-l-md rounded-t-md bg-primary px-4 py-3 text-white'>
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                      <div className='mt-1 text-xs text-white text-opacity-80'>1 mins ago</div>
                    </div>
                    <div className='image-fit relative ml-5 hidden h-10 w-10 flex-none sm:block'>
                      <Image
                        alt='Midone Tailwind HTML Admin Template'
                        className='rounded-full'
                        src={fakerData[1].photos[0]}
                      />
                    </div>
                  </div>
                  <div className='clear-both'></div>
                  <div className='float-right mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
                    <Menu className='my-auto mr-3 hidden sm:block'>
                      <Menu.Button as='a' href='#' className='h-4 w-4 text-slate-500'>
                        <Lucide icon='MoreVertical' className='h-4 w-4' />
                      </Menu.Button>
                      <Menu.Items className='w-40'>
                        <Menu.Item>
                          <Lucide icon='CornerUpLeft' className='mr-2 h-4 w-4' />
                          Reply
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon='Trash' className='mr-2 h-4 w-4' /> Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                    <div className='rounded-l-md rounded-t-md bg-primary px-4 py-3 text-white'>
                      Lorem ipsum sit amen dolor, lorem ipsum sit amen dolor
                      <div className='mt-1 text-xs text-white text-opacity-80'>59 secs ago</div>
                    </div>
                    <div className='image-fit relative ml-5 hidden h-10 w-10 flex-none sm:block'>
                      <Image
                        alt='Midone Tailwind HTML Admin Template'
                        className='rounded-full'
                        src={fakerData[1].photos[0]}
                      />
                    </div>
                  </div>
                  <div className='clear-both'></div>

                  <LeftText />
                  <div className='clear-both'></div>
                  <RightText />
                  <div className='clear-both'></div>
                  <div className='float-left mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
                    <div className='image-fit relative mr-5 hidden h-10 w-10 flex-none sm:block'>
                      <Image
                        alt='Midone Tailwind HTML Admin Template'
                        className='rounded-full'
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className='rounded-r-md rounded-t-md bg-slate-100 px-4 py-3 text-slate-500 dark:bg-darkmode-400'>
                      {fakerData[0]['users'][0]['name']} is typing
                      <span className='typing-dots ml-1'>
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* END: Chat Active */}
            {/* BEGIN: Chat Default */}
            {!true && (
              <div className='flex h-full items-center'>
                <div className='mx-auto text-center'>
                  <div className='image-fit mx-auto h-16 w-16 flex-none overflow-hidden rounded-full'>
                    <Image alt='Midone Tailwind HTML Admin Template' src={fakerData[0].photos[0]} />
                  </div>
                  <div className='mt-3'>
                    <div className='font-medium'>Hey, {fakerData[0]['users'][0]['name']}!</div>
                    <div className='mt-1 text-slate-500'>Please select a chat to start messaging.</div>
                  </div>
                </div>
              </div>
            )}
            {/* END: Chat Default */}
          </div>
        </div>
        {/* END: Chat Content */}
      </div>
    </div>
  );
};

export default ChatView;
