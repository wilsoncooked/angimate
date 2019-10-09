import { style, animate, keyframes, transition, trigger, animation } from '@angular/animations';

export const vibrateKeyframes = keyframes([
  style({
    transform: 'translate(0)',
    offset: 0
  }),
  style({
    transform: 'translate(2px, -2px)',
    offset: 0.2
  }),
  style({
    transform: 'translate(2px, 2px)',
    offset: 0.4
  }),
  style({
    transform: 'translate(-2px, -2px)',
    offset: 0.6
  }),  
  style({
    transform: 'translate(-2px, 2px)',

    offset: 0.8
  }),
  style({
    transform: 'translate(0)',
    offset: 1
  }),
]);


export const vibrate = trigger('vibrate', [
  transition('* <=> *', animate('300ms', vibrateKeyframes)), 
]);
