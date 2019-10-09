import { animate, animation, keyframes, style, useAnimation, transition, trigger } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';
import { animIn, animOut } from './structure'

export function lightSpeedParams ( animName, opacity, transX, transY, skewX, skewY) {
  return trigger(animName, [
  transition(':enter', useAnimation(animIn, { params: {  opacity, transX, transY, skewX, skewY } })),
  transition(':leave', useAnimation(animOut, { params: { opacity, transX, transY, skewX, skewY } }))
]);
}

// FADE //

export const lightSpeedRight = lightSpeedParams('lightSpeedRight', 0, '100px', 0, '-30deg', 0);
export const lightSpeedLeft = lightSpeedParams('lightSpeedLeft', 0, '-100px', 0, '30deg', 0);

     