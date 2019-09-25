import { animation, trigger, transition, style, query, animate, group, animateChild,  } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';

const preparePage = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      left: 0
    })
  ], { optional: true }),
];

export const slideInAnimation =
  trigger('slideInAnimation', [
    transition('* <=> *', [
      ...preparePage,
      query(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.5, 0.5)',
        })
      ], { optional: true }),
      group([
        query(':leave', [
          animate('1s ease-out', style({opacity: 0}))
        ], { optional: true }),
        query(':enter', [
          animate('1s ease-out', style({opacity: 1, transform: 'scale(1, 1)'}))
        ], { optional: true }),
      ]),
      query('@*', animateChild(), {optional: true}),

      // query(':enter', animateChild(), { optional: true }),
    ])
  ]);

