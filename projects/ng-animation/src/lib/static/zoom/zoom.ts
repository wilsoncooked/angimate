import { animation, trigger, transition, style, animate } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from '../../anime';


// Params
export interface ZoomParams extends AnimeParams {
  opacity: number;
  scale: string | number;
  x: string | number;
  y: string | number;
}

// Zoom Style
export const zoomStyle = 
  style({ 
    transform: 'translate({{ x }}, {{ y }}) scale({{ scale }})',
    transformOrigin: 'center',
    });


// Z O O M   I N //

// Default Params
const zoomParams = { scale: 0.2, x: 0, y: 0 };
const zoomInParams = { ...zoomParams, ...animInParams };
const zoomOutParams = { ...zoomParams, ...animOutParams };

// Trigger with transition & animation
export const zoomIn = trigger('zoomIn', [
  transition(':enter', animation([ zoomStyle, animate('300ms') ], { params: zoomInParams})),
  transition(':leave', animation([ animate('300ms', zoomStyle)], { params: zoomOutParams})), 
]);


// Z O O M   U P //

const zoomUpParams = { scale: '0.2', x: '0', y: '50px' };
const zoomInUpParams = { ...zoomUpParams, ...animInParams };
const zoomOutUpParams = { ...zoomUpParams, ...animOutParams };

// Trigger with transition & animation
export const zoomUp = trigger('zoomUp', [
  transition(':enter', animation([ zoomStyle, animate('300ms') ], { params: zoomInUpParams})),
  transition(':leave', animation([ animate('300ms', zoomStyle)], { params: zoomOutUpParams})), 
]);


// Z O O M   D O W N //

const zoomDownParams = { scale: '0.2', x: '0', y: '-50px' };
const zoomInDownParams = { ...zoomDownParams, ...animInParams };
const zoomOutDownParams = { ...zoomDownParams, ...animOutParams };

// Trigger with transition & animation
export const zoomDown = trigger('zoomDown', [
  transition(':enter', animation([ animate('300ms', zoomStyle) ], { params: zoomInDownParams})),
  transition(':leave', animation([ animate('300ms', zoomStyle)], { params: zoomOutDownParams})), 
]);


// Z O O M   L E F T //

const zoomLeftParams = { opacity: 0, scale: '0.2', x: '-50px', y: '0' };
const zoomInLeftParams = { ...zoomLeftParams, ...animInParams };
const zoomOutLeftParams = { ...zoomLeftParams, ...animOutParams };
  
export const zoomLeft = trigger('zoomLeft', [
  transition(':enter', animation([ zoomStyle, animate('300ms') ], { params: zoomInLeftParams})),
  transition(':leave', animation([ animate('300ms', zoomStyle)], { params: zoomOutLeftParams})), 
]);
  
// Z O O M   R I G H T //

const zoomRightParams = { scale: '0.2', x: '-50px', y: '0' };
const zoomInRightParams = { ...zoomRightParams, ...animInParams };
const zoomOutRightParams = { ...zoomRightParams, ...animOutParams };
  
export const zoomRight = trigger('zoomRight', [
  transition(':enter', animation([ zoomStyle, animate('300ms') ], { params: zoomInRightParams})),
  transition(':leave', animation([ animate('300ms', zoomStyle)], { params: zoomOutRightParams})), 
]);
