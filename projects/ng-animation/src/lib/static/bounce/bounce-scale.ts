import { animation, trigger, transition, style, animate, useAnimation, query, stagger, keyframes } from '@angular/animations';
import { Easing } from '../../easing';


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
