import { style, animate, keyframes, transition, trigger, animation } from '@angular/animations';

export const jelloXKeyframes = keyframes([
    style({
      transform: 'scale3d(1, 1, 1)',
      offset: 0
    }),
    style({
      transform: 'scale3d(1.25, 0.75, 1)',
      offset: 0.3
    }),
    style({
      transform: 'scale3d(0.75, 1.25, 1)',
      offset: 0.4
    }),
    style({
      transform: 'scale3d(1.25, 0.85, 1)',
      offset: 0.5
    }),
    style({
      transform: 'scale3d(0.95, 1.05, 1)',
      offset: 0.65
    }),
    style({
      transform: 'scale3d(1.05, 0.95, 1)',
      offset: 0.75
    }),
    style({
      transform: 'scale3d(1, 1, 1)',
      offset: 1
    }),
  ]);

export const jelloYKeyframes = keyframes([
  style({
    transform: 'scale3d(1, 1, 1)',
    offset: 0
  }),
  style({
    transform: 'scale3d(0.75, 1.25, 1)',
    offset: 0.3
  }),
  style({
    transform: 'scale3d(1.25, 0.75, 1)',
    offset: 0.4
  }),
  style({
    transform: 'scale3d(0.85, 1.25, 1)',
    offset: 0.5
  }),
  style({
    transform: 'scale3d(1.05, 0.95, 1)',
    offset: 0.65
  }),
  style({
    transform: 'scale3d(0.95, 1.05, 1)',
    offset: 0.75
  }),
  style({
    transform: 'scale3d(1, 1, 1)',
    offset: 1
  }),
]);

export const jelloX = trigger('jelloX', [
  transition('* <=> *', animate('800ms', jelloXKeyframes)), 
]);

export const jelloY = trigger('jelloY', [
    transition('* <=> *', animate('800ms', jelloYKeyframes)), 
  ]);