import { trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut } from './structure'

export const slideIn = animIn;
export const slideOut = animOut;


export function slideParams (slideName, opacity, transX, transY) {
  return trigger(slideName, [
  transition(':enter', useAnimation(slideIn, { params: { transX, transY } })),
  transition(':leave', useAnimation(slideOut, { params: { transX, transY } }))
]);
}

// slide //

export const slideUp = slideParams('slideUp', 1, 0, '50px');
export const slideDown = slideParams('slideDown', 1, 0, '-50px');
export const slideLeft = slideParams('slideLeft', 1, '-50px', 0);
export const slideRight = slideParams('slideRight', 1, '50px', 0);

export const slideUpLarge = slideParams('slideUp', 1, 0, '1000px');
export const slideDownLarge = slideParams('slideDown', 1, 0, '-1000px');
export const slideLeftLarge = slideParams('slideLeft', 1, '-1000px', 0);
export const slideRightLarge = slideParams('slideRight', 1, '1000px', 0);


