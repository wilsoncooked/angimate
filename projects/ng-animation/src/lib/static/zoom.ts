import { animation, trigger, transition, style, animate } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';

// Params
export interface ZoomAnimParams extends AnimateParams {
  opacity: number;
  transX: string | number;
  transY: string | number;
  scaleX: string | number;
  scaleY: string | number;
}

// zoom Style
export const zoomStyle = (style({
  opacity: '{{ opacity }}',
  transform: 'translate({{ transX }}, {{ transY }}) scale({{ scaleX }}, {{ scaleY }})'
}))


// Z O O M  //
export const zoomParams = { opacity: 1, transX: 0, transY: 0, scaleX: 0, scaleY: 0 };

export const zoom = trigger('zoom', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomParams })),     
]);

export const zoomFadeParams = { opacity: 0, transX: 0, transY: 0, scaleX: 0, scaleY: 0};

export const zoomFade = trigger('zoomFade', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomFadeParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomFadeParams })),     
]);


// // Z O O M  U P //
export const zoomUpParams = { opacity: 1, transX: 0, transY: '100px', scaleX: 0, scaleY: 0};

export const zoomUp = trigger('zoomUp', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomUpParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomUpParams })),     
]);


// // Z O O M   D O W N //
export const zoomDownParams = { opacity: 1, transX: 0, transY: '-100px', scaleX: 0, scaleY: 0};

export const zoomDown = trigger('zoomDown', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomDownParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomDownParams })),     
]);


// // Z O O M   F R O M   L E F T //
export const zoomLeftParams = { opacity: 1, transX: '-100px', transY: 0, scaleX: 0, scaleY: 0};

export const zoomLeft = trigger('zoomLeft', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomLeftParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomLeftParams })),     
]);


// // Z O O M   F R O M   R I G H T //
export const zoomRightParams = { opacity: 1, transX: '100px', transY: 0, scaleX: 0, scaleY: 0};

export const zoomRight = trigger('zoomRight', [
transition(':enter', animation([zoomStyle, animate(enterAnime)], { params: zoomRightParams })),     
transition(':leave', animation([animate(leaveAnime, zoomStyle)], { params: zoomRightParams })),     
]);