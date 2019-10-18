import { animate, animation, keyframes, style, useAnimation, transition, trigger } from '@angular/animations';
import { AnimOptionParams, animIn, animOut, QueryOptionAnim, enter, leave, enterLeave } from './structure';


// WHAT
export function lightSpeedIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function lightSpeedOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

// FADE //

export const lightSpeedRight = enterLeave('lightSpeedRight', lightSpeedIn({transX: '100px', skewX: '-30deg' }), lightSpeedOut({transX: '100px', skewX: '-30deg' }));
export const lightSpeedLeft = enterLeave('lightSpeedLeft', lightSpeedIn({transX: '-100px', skewX: '30deg' }), lightSpeedOut({transX: '-100px', skewX: '30deg' }));

     