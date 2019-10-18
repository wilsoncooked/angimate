import { style, animate, keyframes, transition, trigger } from '@angular/animations';

export const flickerKeyframes = keyframes([
  style({
    opacity: 1,
    offset: 0
  }),
  style({
    opacity: 1,
    offset: 0.23
  }),
  style({
    opacity: 0,
    offset: 0.231
  }),
  style({
    opacity: 1,
    offset: 0.235
  }),
  style({
    opacity: 1,
    offset: 0.41
  }),
  style({
    opacity: 0,
    offset: 0.42
  }),
  style({
    opacity: 1,
    offset: 0.44
  }),
  style({
    opacity: 1,
    offset: 0.83
  }),
  style({
    opacity: 0,
    offset: 0.84
  }),
  style({
    opacity: 1,
    offset: 0.843
  }),
  style({
    opacity: 1,
    offset: 0.91
  }),
  style({
    opacity: 0,
    offset: 0.92
  }),
  style({
    opacity: 1,
    offset: 0.93
  }),
  style({
    opacity: 1,
    offset: 1
  }),
]);


export const flicker = trigger('flicker', [
  transition('* <=> *', animate('2s', flickerKeyframes)), 
]);

