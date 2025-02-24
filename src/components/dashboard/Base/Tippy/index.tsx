'use client';
import { createRef, useEffect } from 'react';
import clsx from 'clsx';
import tippy, { animateFill as animateFillPlugin, PopperElement, Props, roundArrow } from 'tippy.js';

import '@/assets/css/vendors/tippy.css';

type TippyProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    getRef?: (el: PopperElement | null) => void;
    content: string;
    disable?: boolean;
    as?: C;
    options?: Partial<Props>;
  }
>;

const init = <C extends React.ElementType>(el: PopperElement, props: TippyProps<C>) => {
  tippy(el, {
    plugins: [animateFillPlugin],
    content: props.content,
    arrow: roundArrow,
    popperOptions: {
      modifiers: [
        {
          name: 'preventOverflow',
          options: {
            rootBoundary: 'viewport',
          },
        },
      ],
    },
    animateFill: false,
    animation: 'shift-away',
    ...props.options,
  });
};

const Tippy = <C extends React.ElementType = 'span'>(props: TippyProps<C>) => {
  const tippyRef = createRef<PopperElement>();
  const Component = props.as || 'span';

  const isDisabled = () => {
    if (tippyRef.current && tippyRef.current._tippy !== undefined) {
      props.disable ? tippyRef.current._tippy.disable() : tippyRef.current._tippy.enable();
    }
  };

  useEffect(() => {
    isDisabled();
  }, [props.disable]);

  useEffect(() => {
    if (props.getRef) {
      props.getRef && props.getRef(tippyRef.current);
    }

    if (tippyRef.current !== null) {
      init<C>(tippyRef.current, props);
    }

    isDisabled();
  }, [props.content]);

  const { content, as, options, getRef, disable, className, ...computedProps } = props;
  return (
    <Component ref={tippyRef} className={clsx(['cursor-pointer', className])} {...computedProps}>
      {props.children}
    </Component>
  );
};

export default Tippy;
