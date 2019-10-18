import { trigger, transition, useAnimation, state, style, animate, animation, query, keyframes } from '@angular/animations';
import { Easing } from '../easing';

export interface HoverOptionParams {
  opacity: number;
  transX: string;
  transY: string;
  transZ: string; 
  scaleX: number | string;
  scaleY: number | string;
  scaleZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  rotateAngle: string;
  skewX: string;
  skewY: string;
  perspective: string;
  origin: string;
  offset: number;
}

type AnimateTimings = {
  duration: number | string;
  delay: number | string;
  easing: string | null;
};

export function hoverStyle(option: Partial<HoverOptionParams> = {}){  
  return  style({
        opacity: `${option.opacity || 1}`,
        transform: `
            perspective(${option.perspective || 0})
            translate3d(${option.transX || 0}, ${option.transY || 0}, ${option.transZ || 0}) 
            scale3d(${option.scaleX || 1}, ${option.scaleY || 1}, ${option.scaleZ || 1}) 
            rotate3d(${option.rotateX || 0}, ${option.rotateY || 0}, ${option.rotateZ || 1}, ${option.rotateAngle || 0})
            skew(${option.skewX || 0}, ${option.skewY || 0})
            `,
        'transform-origin': `${option.origin || 'center'}`,
        offset: `${option.offset || 0}`,
        'backface-visibility': 'visible',
});
}

export function hover( name: string, paramsActive: Partial<HoverOptionParams> &  Partial<AnimateTimings>, paramsIdle: Partial<HoverOptionParams> = {} ) {
  return trigger(name, [
  state('true', hoverStyle(paramsActive)),
  state('false', hoverStyle(paramsIdle)),
  transition('false <=> true', animate(`${paramsActive.duration || '300ms'} ${paramsActive.delay || '0s'} ${paramsActive.easing || Easing.easeInOutCubic}`))
])
}

export const hGrow = hover('hGrow', { scaleX: '1.1', scaleY: '1.1'})
export const hGrowSlow = hover('hGrowSlow', { scaleX: '1.1', scaleY: '1.1', duration: '800ms'})
export const hGrowQuick = hover('hGrowQuick', { scaleX: '1.1', scaleY: '1.1', duration: '100ms'})
export const hShrink = hover('hShrink', { scaleX: '0.9', scaleY: '0.9', duration: '300ms'})
export const hShrinkSlow = hover('hShrinkSlow', { scaleX: '0.9', scaleY: '0.9', duration: '800ms'})
export const hShrinkQuick = hover('hShrinkQuick', { scaleX: '0.9', scaleY: '0.9', duration: '100ms'})

// R O T A T E //
export const hRotate = hover('hRotate', {rotateAngle: '-10deg'})

// T R A N S L A T E //
export const hDown = hover('hDown', { transY: '10px', duration: '200ms'})
export const hUp = hover('hUp', { transY: '-10px', duration: '200ms'})
export const hLeft = hover('hLeft', { transX: '-10px', duration: '200ms'})
export const hRight = hover('hRight', { transX: '10px', duration: '200ms'})

// S K E W //
export const hSkewRight = hover('hSkewRight', { skewX: '-10deg', duration: '200ms'})
export const hSkewLeft = hover('hSkewLeft', { skewX: '10deg', duration: '200ms'})


