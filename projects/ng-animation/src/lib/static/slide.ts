import { trigger, transition, useAnimation, style, animate} from '@angular/animations';
import { animIn, animOut } from './structure'
import { AnimOptionParams, QueryOptionAnim, enter, leave, enterLeave } from './structure';

// WHAT
export function slideIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function slideOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

export const slideUp = enterLeave('slideUp', slideIn({ opacity: 1, transY: '50px' }), slideOut({ opacity: 1, transY: '50px' }));
export const slideDown = enterLeave('slideDown', slideIn({ opacity: 1, transY: '-50px' }), slideOut({ opacity: 1, transY: '-50px' }));
export const slideLeft = enterLeave('slideLeft', slideIn({ opacity: 1, transX: '-50px' }), slideOut({ opacity: 1, transX: '-50px' }));
export const slideRight = enterLeave('slideRight', slideIn({ opacity: 1, transX: '50px' }), slideOut({ opacity: 1, transX: '50px' }));