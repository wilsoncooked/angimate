import { animation, animate, keyframes, style, trigger, transition, useAnimation } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';


export interface RollParams extends AnimateParams {
  opacity: number;
  transX: string | number;
  transY: string | number;
  rotateX: string | number;
  rotateY: string | number;
  rotateZ: string | number;
  rotateA: string | number;
  offset: number;
}

export const rollStyle = 
  style({
    opacity: '{{opacity}}',
    transform: 'translate({{ transX }}, {{ transY }}) rotate3d({{ rotateX }}, {{ rotateY }}, {{ rotateZ }}, {{ rotateA }})',
    offset: '{{ offset }}',
  })

  // R O L L   I N //
const rollLeftParams = { opacity: 0, transX: '-100px', transY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '-120deg', offset: 1 };

export const rollInLeft = trigger('rollInLeft', [
transition(':enter', animation([rollStyle, animate(enterAnime)], { params: rollLeftParams })),     
transition(':leave', animation([animate(leaveAnime, rollStyle)], { params: rollLeftParams })),     
]);

// R O L L   O U T //
const rollRightParams = { opacity: 0, transX: '100px', transY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '120deg', offset: 1 };

export const rollInRight = trigger('rollInRight', [
transition(':enter', animation([rollStyle, animate(enterAnime)], { params: rollRightParams })),     
transition(':leave', animation([animate(leaveAnime, rollStyle)], { params: rollRightParams })),     
]);

