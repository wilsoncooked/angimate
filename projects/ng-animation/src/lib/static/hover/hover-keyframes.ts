import { trigger, transition, useAnimation, state, style, animate, animation, query, keyframes, AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from '../structure';
import { Easing } from '../../easing';
import { wobbleKeyframes} from '../wobble';


// B O U N C E //
// Bounce Up //
export function hBounceUp(name='hBounceUp', duration='1s' ) {
    return trigger(name, [
        state('active', style({ opacity: 1 })),
        state('idle', style({ opacity: 1 })),
    transition('idle => active', animate(`${duration}`, 
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
    state('active', style({ transform: 'scale(1.15)' })),
    state('idle', style({ opacity: 1 })),
    transition('active => idle', animate(`${returnDuration} ${movement}`)),
    transition('idle => active', animate(`${duration}`, 
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
    state('active', style({ transform: 'scale(0.85)' })),
    state('idle', style({ opacity: 1 })),
    transition('active => idle', animate(`${returnDuration} ${movement}`)),
    transition('idle => active', animate(`${duration}`, 
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
    state('active', style({ transform: 'scale(1)' })),
    state('idle', style({ opacity: 1 })),
    transition('idle => active', animate(`${duration}`, 
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


// W O B B L E 

export const idleState =  { opacity: 1, transform: 'scale(1)' };

// export function hWob(name='hWob', transit='idle => active', anim='800ms', keyframesName=wobbleKeyframes ) {
//   return trigger(name, [
//   state('active', style( idleState )),
//   state('idle', style( idleState )),
//   transition(transit, animate(anim, keyframesName ))])
// }

// export interface HoverOptionAnim {
//     name: string;
//     transition?: string;
//     duration?: string;
//     delay?: string;
//     easing?: string;
//     keyframes: AnimationKeyframesSequenceMetadata;
// }

// const defaultTransition = 'idle <=> active'

// export function hWob(option: Partial<HoverOptionAnim>) {
//     return trigger(option.name, [
//         state('active', style( idleState )),
//         state('idle', style( idleState )),
//         transition(
//             option.transition || defaultTransition,
//             animate(
//                 `${option.duration || '300ms'} ${option.delay || '0s'} ${option.easing || Easing.easeInOutCubic}`,
//                 option.keyframes
//             )
//         )
//     ])
//   }

// export const hiHi = hWob({name: 'hiHi', keyframes: wobbleKeyframes})


