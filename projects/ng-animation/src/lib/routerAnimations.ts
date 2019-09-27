import { animation, trigger, transition, style, query, animate, group, animateChild,  } from '@angular/animations';
import { animIn, animOut, AnimeParams, animInParams, animOutParams } from './anime';

export interface routerFadeParams extends AnimeParams {
  opacity: number;
  x: string | number;
  y: string | number;
}

export const routerFadeIn = 
style({
  opacity: '{{ opacity }}',
  transform: 'scale( {{ x }}, {{ y }} )'
})

// Default Params
const routerFadeParams = { opacity: 0, x: '0.5', y: '0.5' };
const routerFadeInParams = { ...routerFadeParams, ...animInParams };
const routerFadeOutParams = { ...routerFadeParams, ...animOutParams };

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
          animate('300ms ease-out', style({opacity: 0}))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({opacity: 1, transform: 'scale(1, 1)'}))
        ], { optional: true }),
      ]),
      query('@*', animateChild(), {optional: true}),

      // query(':enter', animateChild(), { optional: true }),
    ])
  ]);





// S L I D E   U P //

// const slideUpParams = { x: 0, y: '50px' };
// const slideInUpParams = { ...slideUpParams, ...animInParams };
// const slideOutUpParams = { ...slideUpParams, ...animOutParams };

// // Trigger with transition & animation
// export const slideUp = trigger('slideUp', [
// transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInUpParams})),
// transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutUpParams})), 
// ]);


