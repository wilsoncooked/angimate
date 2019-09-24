import { animation, trigger, transition, style, query, animate, group, animateChild } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1,
          backgroundColor: 'red',
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('2s ease-out', style({ left: '100%', opacity: 0}))
        ]),
        query(':enter', [
          animate('2s ease-out', style({ left: '0%', opacity: 1, backgroundColor: 'blue'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

  // need to have relative and absolute positioning for the pages to stack upon eachother in a set predictable way

  // the transition style is the first state
  // the animate style is at the end state
