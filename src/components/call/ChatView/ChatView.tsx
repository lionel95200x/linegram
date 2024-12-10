'use client';
import Image from 'next/image';

import { Menu, Tab, TabButton, TabGroup, TabList } from '@/components/dashboard/Base/Headless';
import Lucide from '@/components/dashboard/Base/Lucide';
import fakerData from '@/utils/faker';
import { Calls } from '@/features/pricing/types';
import { formatDate } from '@/utils/to-date-time';
import { useState } from 'react';
import { getMetadataAsConversation } from '@/utils/call/call';
import { TabPanel, TabPanels } from '@headlessui/react';
import TableView from './TableView';

const LeftText = ({ text, isTyping }: { text: string; isTyping?: boolean }) => (
  <div className='float-left mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
    <div className='image-fit relative mr-5 hidden h-10 w-10 flex-none sm:block'>
      <Image alt='Midone Tailwind HTML Admin Template' className='rounded-full' src={fakerData[0].photos[0]} />
    </div>
    <div className='rounded-r-md rounded-t-md bg-slate-100 px-4 py-3 text-slate-500 dark:bg-darkmode-400'>
      {text}
      {isTyping && (
        <span className='typing-dots ml-1'>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      )}
      <div className='mt-1 text-xs text-slate-500'>10 secs ago</div>
    </div>
  </div>
);

const RightText = ({ text }: { text: string }) => (
  <div className='float-right mb-4 flex max-w-[90%] items-end sm:max-w-[49%]'>
    <div className='rounded-l-md rounded-t-md bg-primary px-4 py-3 text-white'>
      {text}
      <div className='mt-1 text-xs text-white text-opacity-80'>1 secs ago</div>
    </div>
    <div className='image-fit relative ml-5 hidden h-10 w-10 flex-none sm:block'>
      <Image alt='Midone Tailwind HTML Admin Template' className='rounded-full' src={fakerData[1].photos[0]} />
    </div>
  </div>
);

const CallBlock = ({
  call,
  index,
  onClick,
  isActive,
}: {
  call: Calls;
  index: number;
  onClick: () => void;
  isActive?: boolean;
}) => (
  <div
    className={`intro-x box relative my-2 flex cursor-pointer items-center p-5 ${isActive && 'border-primary'}`}
    onClick={onClick}
  >
    <div className='image-fit mr-1 h-12 w-12 flex-none'>
      <div className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-success dark:border-darkmode-600'></div>
    </div>
    <div className='ml-2 overflow-hidden'>
      <div className='flex items-center'>
        <a href='#' className='font-medium'>
          Appel {index}
        </a>
        <div className='ml-auto text-xs text-slate-400'>{formatDate(call.created)}</div>
      </div>
      <div className='mt-0.5 w-full truncate text-slate-500'>Nombre d'échange {(call.metadata as any)?.length}</div>
    </div>
  </div>
);

const ChatView = ({ calls, agentName }: { calls: Calls[]; agentName: string }) => {
  const [selectedCall, setselectedCall] = useState(calls[0]);

  const conversation = getMetadataAsConversation(selectedCall.metadata as any);

  console.log({ conversation, calls, selectedCall });
  const chatBox = true;
  return (
    <div className='mt-5 flex gap-2'>
      {/* BEGIN: Chat Side Menu */}

      <div className='flex basis-1/4 flex-col gap-2'>
        <div className=''>
          {calls
            .sort((a, b) => Number(b.created) - Number(a.created))
            .map((call, idx) => (
              <CallBlock
                key={call.id}
                call={call}
                index={idx}
                onClick={() => setselectedCall(call)}
                isActive={call.id === selectedCall.id}
              />
            ))}
        </div>
      </div>

      <div className='intro-y basis-3/4'>
        <div className='box h-[782px]'>
          <TabGroup className='col-span-12 lg:col-span-4 2xl:col-span-3'>
            <div className='intro-y box p-2 pr-1'>
              <TabList variant='pills'>
                <Tab>
                  <TabButton className='w-full py-2' as='button'>
                    Chat
                  </TabButton>
                </Tab>
                <Tab>
                  <TabButton className='w-full py-2' as='button'>
                    Tableau
                  </TabButton>
                </Tab>
              </TabList>
            </div>
            <TabPanels>
              <TabPanel>
                {/* BEGIN: Chat Active */}
                {chatBox && (
                  <div className='flex h-full max-h-screen	 flex-col'>
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
                          <div className='text-base font-medium'>{agentName}</div>
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
                        </Menu>
                      </div>
                    </div>
                    <div className='scrollbar-hidden flex-1 overflow-y-scroll px-5 pt-5'>
                      <div className='mb-10 mt-5 text-center text-xs text-slate-400 dark:text-slate-500'>
                        {formatDate(new Date(selectedCall.created))}
                      </div>
                      {conversation.length > 0 ? (
                        conversation.map((c, idx) => {
                          return (
                            <>
                              {c.type === 'prospect' ? (
                                <LeftText text={c.text} isTyping={idx === 0} />
                              ) : (
                                <RightText text={c.text} />
                              )}
                              <div className='clear-both' />
                            </>
                          );
                        })
                      ) : (
                        <div className='text-center'>Cet appel ne contiens aucun échange</div>
                      )}
                    </div>
                  </div>
                )}
              </TabPanel>
              <TabPanel>
                <TableView metadata={selectedCall.metadata as any} />
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      {/* END: Chat Content */}
    </div>
  );
};

export default ChatView;
