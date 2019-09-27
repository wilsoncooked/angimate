import { animation, trigger, transition, style, animate } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from './anime';

// Params
export interface SlideParams extends AnimeParams {
  opacity: number;
  x: string | number;
  y: string | number;
}

// Slide Style
export const slideStyle = 
  style({
    transform: 'translate({{ x }}, {{ y }})'
  })


// S L I D E   U P //

// Default Params
const slideUpParams = { x: 0, y: '50px' };
const slideInUpParams = { ...slideUpParams, ...animInParams };
const slideOutUpParams = { ...slideUpParams, ...animOutParams };

// Trigger with transition & animation
export const slideUp = trigger('slideUp', [
  transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInUpParams})),
  transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutUpParams})), 
]);


// S L I D E   D O W N //

// Default Params
const slideDownParams = { x: 0, y: '-50px' };
const slideInDownParams = { ...slideDownParams, ...animInParams };
const slideOutDownParams = { ...slideDownParams, ...animOutParams };

// Trigger with transition & animation
export const slideDown = trigger('slideDown', [
  transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInDownParams})),
  transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutDownParams})), 
]);


// S L I D E   F R O M   L E F T //

// Default Params
const slideLeftParams = { x: '-50px', y: 0 };
const slideInLeftParams = { ...slideLeftParams, ...animInParams };
const slideOutLeftParams = { ...slideLeftParams, ...animOutParams };

// Trigger with transition & animation
export const slideLeft = trigger('slideLeft', [
  transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInLeftParams})),
  transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutLeftParams})), 
]);


// S L I D E   F R O M   R I G H T //

// Default Params
const slideRightParams = { x: '50px', y: 0 };
const slideInRightParams = { ...slideRightParams, ...animInParams };
const slideOutRightParams = { ...slideRightParams, ...animOutParams };

// Trigger with transition & animation
export const slideRight = trigger('slideRight', [
  transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInRightParams})),
  transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutRightParams})), 
]);

