import { style, animate, keyframes, transition, trigger, animation } from '@angular/animations';
import { Easing } from '../easing'

export const swingLeftKeyframes = keyframes([
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
      offset: 0,
    }),
    style({
      transform: 'rotate(15deg)',
      offset: 0.3,
    }),
    style({
      transform: 'rotate(-12deg)',
      offset: 0.45,
    }),
    style({
      transform: 'rotate(9deg)',
      offset: 0.68,
    }),
    style({
      transform: 'rotate(-6deg)',
      offset: 0.85,
      }),    
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
      offset: 1,
    }),
  ]);
  
  export const swingLeft = trigger('swingLeft', [
    transition('* <=> *', animate(`800ms`, swingLeftKeyframes)), 
  ]);

  export const swingRightKeyframes = keyframes([
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
      offset: 0,
    }),
    style({
      transform: 'rotate(-15deg)',
      offset: 0.3,
    }),
    style({
      transform: 'rotate(12deg)',
      offset: 0.45,
    }),
    style({
      transform: 'rotate(-9deg)',
      offset: 0.68,
    }),
    style({
      transform: 'rotate(6deg)',
      offset: 0.85,
      }),    
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
      offset: 1,
    }),
  ]);
  
  export const swingRight = trigger('swingRight', [
    transition('* <=> *', animate(`800ms`, swingRightKeyframes)), 
  ]);