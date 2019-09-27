import { animation, trigger, transition, style, animate, useAnimation, query, stagger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from './anime';

// Params
export interface FadeParams extends AnimeParams {
  opacity: number;
  x: string | number;
  y: string | number;
}

// Fade Style
export const fadeStyle = 
  style({
    opacity: '{{ opacity }}',
    transform: 'translate({{ x }}, {{ y }})'
  })


// F A D E  //

// Default params
const fadeParams = { opacity: 0, x: 0, y: 0 };
const fadeInParams = { ...fadeParams, ...animInParams };
const fadeOutParams = { ...fadeParams, ...animOutParams };

// Trigger with transition & Animation
export const fade = trigger('fade', [
  transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInParams })),     
  transition(':leave', animation([ animate('300ms', fadeStyle) ], { params: fadeOutParams })),  
]);


// F A D E  U P //

// Default Params
const fadeUpParams = { opacity: 0, x: 0, y: '50px' };
const fadeInUpParams = { ...fadeUpParams, ...animInParams };
const fadeOutUpParams = { ...fadeUpParams, ...animOutParams };

// Trigger with transition & animation
export const fadeUp = trigger('fadeUp', [
  transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInUpParams})),
  transition(':leave', animation([ animate('300ms', fadeStyle)], { params: fadeOutUpParams})), 
]);


// F A D E   D O W N //

// Default Params
const fadeDownParams = { opacity: 0, x: 0, y: '-50px' };
const fadeInDownParams = { ...fadeDownParams, ...animInParams };
const fadeOutDownParams = { ...fadeDownParams, ...animOutParams };

// Trigger with transition & animation
export const fadeDown = trigger('fadeDown', [
  transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInDownParams})),
  transition(':leave', animation([ animate('300ms', fadeStyle)], { params: fadeOutDownParams})), 
]);


// F A D E   F R O M   L E F T //

// Default Params
const fadeLeftParams = { opacity: 0, x: '-50px', y: 0 };
const fadeInLeftParams = { ...fadeLeftParams, ...animInParams };
const fadeOutLeftParams = { ...fadeLeftParams, ...animOutParams };

// Trigger with transition & animation
export const fadeLeft = trigger('fadeLeft', [
  transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInLeftParams})),
  transition(':leave', animation([ animate('300ms', fadeStyle)], { params: fadeOutLeftParams})), 
]);


// F A D E   F R O M   R I G H T //

// Default Params
const fadeRightParams = { opacity: 0, x: '50px', y: 0 };
const fadeInRightParams = { ...fadeRightParams, ...animInParams };
const fadeOutRightParams = { ...fadeRightParams, ...animOutParams };

// Trigger with transition & animation
export const fadeRight = trigger('fadeRight', [
  transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInRightParams})),
  transition(':leave', animation([ animate('300ms', fadeStyle)], { params: fadeOutRightParams})), 
]);


// Animations
export const fadeInAnim = animation([ fadeStyle, animate('100ms') ], { params: fadeInParams });
export const fadeOutAnim = animation([ animate('500ms', fadeStyle) ], { params: fadeOutParams })



// // animation player

// export interface FadePlayerParams extends AnimeParams {
//   opacity: number;
//   y: string | number;
//   duration: number;
// }

// const fadePlayerStyle = style({ opacity: '{{ opacity }}', transform: 'translateY({{ y }}px)' });
// const animateIn = animate('{{ duration }}ms cubic-bezier(0.23, 1, 0.32, 1)');

// // Function is used for list
// export const fadeFn = (FadePlayerParams) => animation(
//   query(FadePlayerParams.selector, [fadePlayerStyle, stagger(FadePlayerParams.stagger, animateIn)])
// );
// // Constante is used for single element
// export const fade = animation([fadePlayerStyle, animateIn]);