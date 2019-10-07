import { animate, animation, keyframes, style, useAnimation, transition, trigger } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';

// Params
export interface LightSpeedParams extends AnimateParams {
    opacity: number;
    x: string | number;
    y: string | number;
    skewX: string;
  }

export const lightSpeedStyle = 
    style({ 
    transform: 'translate({{ x }}, {{ y }}) skewX({{ skewX }})',
    opacity: '{{ opacity }}'
});


// L I G H T S P E E D   R I G H T //
const lightSpeedRightParams = { opacity: 0, x: '100px', y: 0, skewX: '-30deg' };

export const lightSpeedRight = trigger('lightSpeedRight', [
transition(':enter', animation([lightSpeedStyle, animate(enterAnime)], { params: lightSpeedRightParams })),     
transition(':leave', animation([animate(leaveAnime, lightSpeedStyle)], { params: lightSpeedRightParams })),     
]);
     
// L I G H T S P E E D   R I G H T //

const lightSpeedLeftParams = { opacity: 0, x: '-100px', y: 0, skewX: '30deg' };

export const lightSpeedLeft = trigger('lightSpeedLeft', [
    transition(':enter', animation([lightSpeedStyle, animate(enterAnime)], { params: lightSpeedLeftParams })),     
    transition(':leave', animation([animate(leaveAnime, lightSpeedStyle)], { params: lightSpeedLeftParams })),     
    ]);