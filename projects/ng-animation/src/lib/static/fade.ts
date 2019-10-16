import { trigger, transition, useAnimation, query, state, style, animate, keyframes, stagger } from '@angular/animations';
import { animIn, animOut, queryAnimIn } from './structure'
import { hScale } from './hover/hover-2d';
import { idleState } from './hover/hover-keyframes';
import { Easing } from '../easing';
import { AnimOptionParams, QueryOptionAnim, enter, leave, enterLeave } from './structure';


// WHAT
export function fadeIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function fadeOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}


export const fade = enterLeave('fade', fadeIn(), fadeOut());
export const fadeUp = enterLeave('fadeUp', fadeIn({ transY: '50px' }), fadeOut({ transY: '50px' }));
export const fadeDown = enterLeave('fadeDown', fadeIn({ transY: '-50px' }), fadeOut({ transY: '-50px' }));
export const fadeLeft = enterLeave('fadeLeft', fadeIn({ transX: '-50px' }), fadeOut({ transX: '-50px' }));
export const fadeRight = enterLeave('fadeRight', fadeIn({ transX: '50px' }), fadeOut({ transX: '50px' }));


