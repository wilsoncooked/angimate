import { trigger, transition, state, style, animate, keyframes } from '@angular/animations';
import { Easing } from '../easing';

// B O U N C E //
// Bounce Up //
export function hBounceUp(name='hBounceUp', duration='1s' ) {
    return trigger(name, [
        state('true', style({ opacity: 1 })),
        state('false', style({ opacity: 1 })),
    transition('false => true', animate(`${duration}`, 
    keyframes([  
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.2,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, -17px, 0)',
        offset: 0.3,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, -17px, 0)',
        offset: 0.43,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.53,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, -7px, 0)',
        offset: 0.7,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.8,
      }),
      style({
          transform: 'translate3d(0, -2px, 0)',
          offset: 0.9,
      })
    ])))
    ])
  }
  
// Bounce Forward //
  export function hBounceFwd(name='hBounceFwd', duration='1s', returnDuration='200ms', movement=Easing.easeOutCubic ) {
    return trigger(name, [
    state('true', style({ transform: 'scale(1.15)' })),
    state('false', style({ opacity: 1 })),
    transition('true => false', animate(`${returnDuration} ${movement}`)),
    transition('false => true', animate(`${duration}`, 
    keyframes([  
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1)',
        offset: 0,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1)',
        offset: 0.2,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(1.15)',
        offset: 0.3,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(1.17))',
        offset: 0.43,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1.05)',
        offset: 0.53,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(1.15)',
        offset: 0.7,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1.13)',
        offset: 0.8,
      }),
      style({
          transform: 'scale(1.15)',
          offset: 0.9,
      })
    ])))
    ])
  }
  
  export function hBounceBck(name='hBounceBck', duration='1s', returnDuration='200ms', movement=Easing.easeOutCubic ) {
    return trigger(name, [
    state('true', style({ transform: 'scale(0.85)' })),
    state('false', style({ opacity: 1 })),
    transition('true => false', animate(`${returnDuration} ${movement}`)),
    transition('false => true', animate(`${duration}`, 
    keyframes([  
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1)',
        offset: 0,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1)',
        offset: 0.2,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(0.85)',
        offset: 0.3,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(0.85))',
        offset: 0.43,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(0.95)',
        offset: 0.53,
      }),
      style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'scale(0.85)',
        offset: 0.7,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(0.87)',
        offset: 0.8,
      }),
      style({
          transform: 'scale(0.85)',
          offset: 0.9,
      })
    ])))
    ])
  }


// B O P S //

export function hBop(name='hBop', size=0.9, duration='300ms' ) {
    return trigger(name, [
    state('true', style({ transform: 'scale(1)' })),
    state('false', style({ opacity: 1 })),
    transition('false => true', animate(`${duration}`, 
    keyframes([  
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: `scale(${size})`,
        offset: 0.5,
      }),
      style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'scale(1)',
        offset: 1,
      }),
    ])))
    ])
  }

export const hPush = hBop('hPush')
export const hPop = hBop('hPop', 1.1)

