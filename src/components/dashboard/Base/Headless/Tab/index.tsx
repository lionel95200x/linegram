'use client';
import { createContext, Fragment, useContext } from 'react';
import { twMerge } from 'tailwind-merge';

import { Tab as HeadlessTab, Transition } from '@headlessui/react';

type Variant = 'tabs' | 'pills' | 'boxed-tabs' | 'link-tabs';

const tabContext = createContext<{
  selected: boolean;
  disabled: boolean;
}>({
  selected: false,
  disabled: false,
});

const listContext = createContext<{
  variant: Variant;
}>({
  variant: 'tabs',
});

export function Tab({
  children,
  className,
  fullWidth = true,
  ...props
}: Omit<
  ExtractProps<typeof HeadlessTab> & {
    fullWidth?: boolean;
  },
  'ref'
>) {
  const list = useContext(listContext);
  return (
    <HeadlessTab as={Fragment}>
      {({ selected, disabled }) => (
        <li
          className={twMerge(['focus-visible:outline-none', fullWidth && 'flex-1', list.variant == 'tabs' && '-mb-px'])}
          {...props}
        >
          <tabContext.Provider
            value={{
              selected: selected,
              disabled: disabled,
            }}
          >
            {typeof children === 'function'
              ? children({
                  selected: selected,
                  disabled: disabled,
                } as any)
              : children}
          </tabContext.Provider>
        </li>
      )}
    </HeadlessTab>
  );
}

export const TabButton = <C extends React.ElementType = 'a'>({
  children,
  className,
  as,
  ...props
}: {
  as?: C;
} & React.PropsWithChildren &
  React.ComponentPropsWithoutRef<C>) => {
  const tab = useContext(tabContext);
  const list = useContext(listContext);
  const Component = as || 'a';

  return (
    <Component
      className={twMerge([
        'block cursor-pointer appearance-none border border-transparent px-5 py-2.5 text-slate-700 dark:text-slate-400',
        tab.selected && 'text-slate-800 dark:text-white',

        // Default
        list.variant == 'tabs' && 'block rounded-t-md border-transparent dark:border-transparent',
        list.variant == 'tabs' &&
          tab.selected &&
          'border-slate-200 border-b-transparent bg-white font-medium dark:border-x-darkmode-400 dark:border-b-darkmode-600 dark:border-t-darkmode-400 dark:bg-transparent',
        list.variant == 'tabs' &&
          !tab.selected &&
          'hover:bg-slate-100 dark:hover:border-transparent dark:hover:bg-darkmode-400',

        // Pills
        list.variant == 'pills' && 'rounded-md border-0',
        list.variant == 'pills' && tab.selected && 'bg-primary font-medium text-white',

        // Boxed tabs
        list.variant == 'boxed-tabs' && 'rounded-md shadow-[0px_3px_20px_#0000000b]',
        list.variant == 'boxed-tabs' && tab.selected && 'bg-primary font-medium text-white',

        // Link tabs
        list.variant == 'link-tabs' && 'border-b-2 border-transparent dark:border-transparent',
        list.variant == 'link-tabs' && tab.selected && 'border-b-primary font-medium dark:border-b-primary',

        className,
      ])}
      {...props}
    >
      {children}
    </Component>
  );
};

export const TabGroup = ({ children, ...props }: ExtractProps<typeof HeadlessTab.Group>) => {
  return (
    <HeadlessTab.Group as='div' {...props}>
      {children}
    </HeadlessTab.Group>
  );
};

export const TabList = ({
  children,
  className,
  variant = 'tabs',
  ...props
}: ExtractProps<typeof HeadlessTab.List> & {
  variant?: Variant;
}) => {
  return (
    <listContext.Provider
      value={{
        variant: variant,
      }}
    >
      <HeadlessTab.List
        as='ul'
        className={twMerge([
          variant == 'tabs' && 'border-b border-slate-200 dark:border-darkmode-400',
          'flex w-full',
          className,
        ])}
        {...props}
      >
        {children}
      </HeadlessTab.List>
    </listContext.Provider>
  );
};

export const TabPanels = ({ children, className, ...props }: ExtractProps<typeof HeadlessTab.Panels>) => {
  return (
    <HeadlessTab.Panels as='div' className={className} {...props}>
      {children}
    </HeadlessTab.Panels>
  );
};

export const TabPanel = ({ children, className, ...props }: ExtractProps<typeof HeadlessTab.Panel>) => {
  return (
    <HeadlessTab.Panel as={Fragment}>
      {({ selected }) => (
        <Transition
          appear
          as='div'
          show={selected}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className={className}
          {...props}
        >
          <>
            {typeof children === 'function'
              ? children({
                  selected: selected,
                } as any)
              : children}
          </>
        </Transition>
      )}
    </HeadlessTab.Panel>
  );
};

export default Tab;
