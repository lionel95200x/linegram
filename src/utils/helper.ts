import { parseColor } from "tailwindcss/lib/util/color"

const slideUp = (el: HTMLElement, duration = 300, callback = (el: HTMLElement) => {}) => {
  el.style.transitionProperty = 'height, margin, padding';
  el.style.transitionDuration = duration + 'ms';
  el.style.height = el.offsetHeight + 'px';
  el.offsetHeight;
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';
  window.setTimeout(() => {
    el.style.display = 'none';
    el.style.removeProperty('height');
    el.style.removeProperty('padding-top');
    el.style.removeProperty('padding-bottom');
    el.style.removeProperty('margin-top');
    el.style.removeProperty('margin-bottom');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition-duration');
    el.style.removeProperty('transition-property');
    callback(el);
  }, duration);
};

const slideDown = (el: HTMLElement, duration = 300, callback = (el: HTMLElement) => {}) => {
  el.style.removeProperty('display');
  let display = window.getComputedStyle(el).display;
  if (display === 'none') display = 'block';
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = 'hidden';
  el.style.height = '0';
  el.style.paddingTop = '0';
  el.style.paddingBottom = '0';
  el.style.marginTop = '0';
  el.style.marginBottom = '0';
  el.offsetHeight;
  el.style.transitionProperty = 'height, margin, padding';
  el.style.transitionDuration = duration + 'ms';
  el.style.height = height + 'px';
  el.style.removeProperty('padding-top');
  el.style.removeProperty('padding-bottom');
  el.style.removeProperty('margin-top');
  el.style.removeProperty('margin-bottom');
  window.setTimeout(() => {
    el.style.removeProperty('height');
    el.style.removeProperty('overflow');
    el.style.removeProperty('transition-duration');
    el.style.removeProperty('transition-property');
    callback(el);
  }, duration);
};

/** Converts HEX color to RGB */
export const toRGB = (value: string) => {
  return parseColor(value).color.join(' ');
};

export { slideDown, slideUp };
