'use client';

import { createRef, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { TinySliderInstance, TinySliderSettings } from 'tiny-slider/src/tiny-slider';

import { init, reInit } from './tiny-slider';

import '@/assets/css/vendors/tiny-slider.css';

export interface TinySliderElement extends HTMLDivElement {
  tns: TinySliderInstance;
}

export interface TinySliderProps extends React.PropsWithChildren, React.ComponentPropsWithoutRef<'div'> {
  getRef?: (el: TinySliderElement) => void;
  options?: TinySliderSettings;
}

function TinySlider({ options = {}, getRef = () => {}, className = '', children }: TinySliderProps) {
  const props = {
    options: options,
    getRef: getRef,
    className: className,
  };
  const initialRender = useRef(true);
  const sliderRef = createRef<TinySliderElement>();

  useEffect(() => {
    if (sliderRef.current) {
      props.getRef(sliderRef.current);

      if (initialRender.current) {
        init(sliderRef.current, props);
        initialRender.current = false;
      } else {
        reInit(sliderRef.current);
      }
    }
  }, [props.options, children]);

  return (
    <div ref={sliderRef} className={clsx(['tiny-slider', props.className])}>
      {children}
    </div>
  );
}

export default TinySlider;
