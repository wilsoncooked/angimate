import { animation, trigger, transition, style, animate, useAnimation, query, stagger, keyframes } from '@angular/animations';
import { Easing } from '../../easing';


export const bounceKeyframes = keyframes([
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
        transform: 'translate3d(0, -30px, 0)',
        offset: 0.3,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, -30px, 0)',
        offset: 0.43,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.53,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, -15px, 0)',
        offset: 0.7,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.8,
    }),
    style({
        transform: 'translate3d(0, -4px, 0)',
        offset: 0.9,
    }),
  ]);

export const allbounceKeyframes = (style({ 'transform-origin': 'center bottom' }))

// B O U N C E //

export const bounce = trigger('bounce', [
  transition(':enter', animation([allbounceKeyframes, animate('1s', bounceKeyframes)]))
    // {params: flipXParams})),
//   transition(':leave', animation([allFramesBounceStyle, animate('2s', bounceKeyframes)
//   ], {params: flipXParams}))
]);
