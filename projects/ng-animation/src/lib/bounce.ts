import { animation, trigger, transition, style, animate, useAnimation, query, stagger, keyframes } from '@angular/animations';
import { Easing } from './easing';


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
  transition(':enter', animation([allbounceKeyframes, animate('1s', bounceKeyframes)])),
  transition(':leave', animation([allbounceKeyframes, animate('1s', bounceKeyframes)]))
]);


export const bounceDownKeyframes = keyframes([
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
        transform: 'translate3d(0, 30px, 0)',
        offset: 0.3,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, 30px, 0)',
        offset: 0.43,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.53,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(0, 15px, 0)',
        offset: 0.7,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.8,
    }),
    style({
        transform: 'translate3d(0, 4px, 0)',
        offset: 0.9,
    }),
  ]);

  export const bounceDown = trigger('bounceDown', [
    transition(':enter', animation([allbounceKeyframes, animate('1s', bounceDownKeyframes)])),
    transition(':leave', animation([allbounceKeyframes, animate('1s', bounceDownKeyframes)]))
  ]);

  export const bounceLeftKeyframes = keyframes([
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
        transform: 'translate3d(-30px, 0, 0)',
        offset: 0.3,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(-30px, 0, 0)',
        offset: 0.43,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.53,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(-15px, 0, 0)',
        offset: 0.7,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.8,
    }),
    style({
        transform: 'translate3d(-4px, 0, 0)',
        offset: 0.9,
    }),
  ]);

  export const bounceLeft = trigger('bounceLeft', [
    transition(':enter', animation([allbounceKeyframes, animate('1s', bounceLeftKeyframes)])),
    transition(':leave', animation([allbounceKeyframes, animate('1s', bounceLeftKeyframes)]))
  ]);

  export const bounceRightKeyframes = keyframes([
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
        transform: 'translate3d(30px, 0, 0)',
        offset: 0.3,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(30px, 0, 0)',
        offset: 0.43,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.53,
    }),
    style({
        'animation-timing-function': Easing.easeInQuint,
        transform: 'translate3d(15px, 0, 0)',
        offset: 0.7,
    }),
    style({
        'animation-timing-function': Easing.easeOutQuint,
        transform: 'translate3d(0, 0, 0)',
        offset: 0.8,
    }),
    style({
        transform: 'translate3d(4px, 0, 0)',
        offset: 0.9,
    }),
  ]);

  export const bounceRight = trigger('bounceRight', [
    transition(':enter', animation([allbounceKeyframes, animate('1s', bounceRightKeyframes)])),
    transition(':leave', animation([allbounceKeyframes, animate('1s', bounceRightKeyframes)]))
  ]);

  // BOUNCE SCALE //

  export const bounceInKeyframes = keyframes([
    style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
        offset: 0,
    }),
    style({
        transform: 'scale3d(1.1, 1.1, 1.1)',
        offset: 0.2,
    }),
    style({
        transform: 'scale3d(0.9, 0.9, 0.9)',
        offset: 0.4,
    }),
    style({
        transform: 'scale3d(1.03, 1.03, 1.03)',
        offset: 0.6,
    }),
    style({
        transform: 'scale3d(0.97, 0.97, 0.97)',
        offset: 0.8,
    }),
    style({
        transform: 'scale3d(1, 1, 1)',
        offset: 1,
    }),
  ]);

  export const bounceOutKeyframes = keyframes([
    style({
        transform: 'scale3d(0.7, 0.7, 0.7)',
        offset: 0,
    }),
    style({
        transform: 'scale3d(0, 0, 0)',
        offset: 0.2,
    }),
    style({
        transform: 'scale3d(0.3, 0.3, 0.3)',
        offset: 0.4,
    }),
    style({
        transform: 'scale3d(.03, .03, .03)',
        offset: 0.6,
    }),
    style({
        transform: 'scale3d(0.1, 0.1, 0.1)',
        offset: 0.8,
    }),
    style({
        transform: 'scale3d(0, 0, 0)',
        offset: 1,
    }),
  ]);

  export const allBounceKeyframes = (style({ 'animation-timing-function': Easing.easeOutQuint, 'transform-origin': 'center' }))


  export const bounceIn = trigger('bounceIn', [
    transition(':enter', animation([allBounceKeyframes, animate('1s', bounceInKeyframes)])),
  ]);

  export const bounceInOut = trigger('bounceInOut', [
    transition(':enter', animation([allBounceKeyframes, animate('1s', bounceInKeyframes)])),
    transition(':leave', animation([allBounceKeyframes, animate('1s', bounceOutKeyframes)]))
  ]);
