import { trigger, transition, useAnimation, state, style, animate, animation } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from './structure';
import { Easing } from '../easing';
import { AnimOptionParams, QueryOptionAnim, enter, leave, enterLeave } from './structure';

// WHAT
export function zoomIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function zoomOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

export const zoomUp = enterLeave('zoomUp', zoomIn({ transY: '100px', opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ transY: '100px', opacity: 1, scaleX: 0, scaleY: 0 }));
export const zoomDown = enterLeave('zoomDown', zoomIn({ transY: '-100px', opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ transY: '-100px', opacity: 1, scaleX: 0, scaleY: 0 }));
export const zoomLeft = enterLeave('zoomLeft', zoomIn({ transX: '-100px', opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ transX: '-100px', opacity: 1, scaleX: 0, scaleY: 0 }));
export const zoomRight = enterLeave('zoomRight', zoomIn({ transX: '100px', opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ transX: '100px', opacity: 1, scaleX: 0, scaleY: 0 }));

export const zoomFade = enterLeave('zoomFade', zoomIn({ scaleX: 0, scaleY: 0 }), zoomOut({ scaleX: 0, scaleY: 0 }));
export const zoomFadeUp = enterLeave('zoomFadeUp', zoomIn({ transY: '100px', scaleX: 0, scaleY: 0 }), zoomOut({ transY: '100px', scaleX: 0, scaleY: 0 }));
export const zoomFadeDown = enterLeave('zoomFadeDown', zoomIn({ transY: '-100px', scaleX: 0, scaleY: 0 }), zoomOut({ transY: '-100px', scaleX: 0, scaleY: 0 }));
export const zoomFadeLeft = enterLeave('zoomFadeLeft', zoomIn({ transX: '-100px', scaleX: 0, scaleY: 0 }), zoomOut({ transX: '-100px', scaleX: 0, scaleY: 0 }));
export const zoomFadeRight = enterLeave('zoomFadeRight', zoomIn({ transX: '100px', scaleX: 0, scaleY: 0 }), zoomOut({ transX: '100px', scaleX: 0, scaleY: 0 }));

export const zoomFwd = enterLeave('zoomFwd', zoomIn({ opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ opacity: 1, scaleX: 2, scaleY: 2 }))
export const zoomBack = enterLeave('zoomBack', zoomIn({ opacity: 1, scaleX: 2, scaleY: 2 }), zoomOut({ opacity: 1, scaleX: 0, scaleY: 0 }))
export const zoomFwdBack = enterLeave('zoomFwdBack', zoomIn({ opacity: 1, scaleX: 0, scaleY: 0 }), zoomOut({ opacity: 1, scaleX: 0, scaleY: 0 }));
export const zoomBackFwd = enterLeave('zoomBackFwd', zoomIn({ opacity: 1, scaleX: 2, scaleY: 2 }), zoomOut({ opacity: 1, scaleX: 2, scaleY: 2 }));
