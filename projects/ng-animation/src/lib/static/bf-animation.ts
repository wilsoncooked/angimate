import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, keyframes, state, useAnimation, stagger
  } from '@angular/animations';
  
export const top = 'translateY(-100%)';
export const bot = 'translateY(150%)';
export const left = 'translateX(-100%)';
export const right = 'translateX(100%)';

export const pulseAnimationBF = animation([
  style({ transform: 'scale(1)' }),
  animate(
    '{{ timings }}',
    keyframes([
      style({ transform: 'scale(1)', offset: 0 }),
      style({ transform: 'scale({{ scale }})', offset: 0.5 }),
      style({ transform: 'scale(1)', offset: 1 })
    ])
  )
]);

export const slideInBF = animation([
  style({ transform: '{{translate}}', opacity: 0 }),
  animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
]);

export const slideOutBF = animation([
  animate('500ms ease-in', style({ transform: '{{translate}}', opacity: 1 }))
]);


export const slide = (side: string) => trigger('slideIn', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0 })),
  transition(':enter', [ 
    useAnimation(slideInBF, {
      params: {
        translate: side
      }
    })
  ]),
  transition(':leave', [
    useAnimation(slideOutBF, {
      
      })
  ])
]);

export const slideCalendar = () => trigger('direction', [
  state('in', style({ opacity: 1 })),
  state('out', style({ opacity: 0 })),
  transition('void => left', [ 
    style({ transform: 'translateX(-350%)', opacity: 0 }),
    animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),
  transition('void => right', [ 
    style({ transform: 'translateX(350%)', opacity: 0 }),
    animate('300ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
  ]),

  transition('left => void', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ]),
  transition('right => void', [
    animate('300ms ease-in', style({ opacity: 0 }))
  ])
]);

export const slideTopBF = slide(top);
export const slideBotBF = slide(bot);
export const slideLeftBF = slide(left);
export const slideRightBF = slide(right);
export const slideTestBF = slideCalendar();