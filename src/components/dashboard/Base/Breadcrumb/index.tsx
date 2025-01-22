'use client';

import { createContext, useContext } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface BreadcrumbProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'nav'> {
  light?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const breadcrumbContext = createContext<{
  light?: boolean;
}>({
  light: undefined,
});

function Breadcrumb({ className, light, children }: BreadcrumbProps) {
  console.log({ light, children });
  return (
    <breadcrumbContext.Provider
      value={{
        light: light,
      }}
    >
      <nav className={clsx(['flex', className])} aria-label='breadcrumb'>
        <ol className={clsx(['flex items-center text-primary dark:text-slate-300', { 'text-white/90': light }])}>
          {Array.isArray(children)
            ? children.map((item, key) => {
                return {
                  ...item,
                  props: {
                    ...item.props,
                    key: key,
                  },
                };
              })
            : children}
        </ol>
      </nav>
    </breadcrumbContext.Provider>
  );
}

interface LinkProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'li'> {
  to?: string;
  active?: boolean;
  key?: number;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
Breadcrumb.Link = ({ className, to = '', active = false, children, key = 0, ...attr }: LinkProps) => {
  const breadcrumb = useContext(breadcrumbContext);
  return (
    <li
      className={clsx([
        className,
        key > 0 && 'relative ml-5 pl-0.5',
        !breadcrumb.light &&
          key > 0 &&
          "before:bg-chevron-black before:absolute before:inset-y-0 before:my-auto before:-ml-[1.125rem] before:h-[14px] before:w-[14px] before:rotate-[-90deg] before:transform before:bg-[length:100%] before:content-['']",
        breadcrumb.light &&
          key > 0 &&
          "before:bg-chevron-white before:absolute before:inset-y-0 before:my-auto before:-ml-[1.125rem] before:h-[14px] before:w-[14px] before:rotate-[-90deg] before:transform before:bg-[length:100%] before:content-['']",
        key > 0 && 'dark:before:bg-bredcrumb-chevron-darkmode',
        !breadcrumb.light && active && 'cursor-text text-slate-600 dark:text-slate-400',
        breadcrumb.light && active && 'text-white/70',
      ])}
      {...attr}
    >
      <Link href={to}>{children}</Link>
    </li>
  );
};

export default Breadcrumb;
