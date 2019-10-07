//                                                 alias 
import { animation, trigger, transition, style, query as q, animate, group, animateChild,  } from '@angular/animations';
import { AnimateParams, animIn, animOut } from './anime';

export interface RouterFadeParams extends AnimateParams {
  opacity: number;
  x: string | number;
  y: string | number;
}

export const routerFadeIn = 
style({
  opacity: '{{ opacity }}',
  transform: 'scale( {{ x }}, {{ y }} )'
})

export const pageSetup = (style({ position: 'relative' }),
query(':enter, :leave', [
  style({
    position: 'absolute',
    top: 0,
    left: 0
  })
])
);

// Default Params
export const routerFadeStyle = (style({
  opacity: '{{ opacity }}',
  transform: 'translate({{ x }}, {{ y }})'
}))

// const routerFadeParams = { opacity: 0, x: 0.5, y: 0.5 };

// when * <=> * must add {optional: true} to all. 


export function query(state: string, anim: any) {
  return q(state, anim, {optional: true});
}


export const slideInAnimation =
  trigger('slideInAnimation', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      // state of page before entering
      query(':enter', [
        style({ left: '-100%'})
      ]),
      group([
        //end state of page after exiting
        query(':leave', [
          animate('1s ease-out', style({ left: '100%'}))
        ]),
        //end state of page after entering
        query(':enter', [
          animate('1s ease-out', style({ left: '0%'}))
        ])
      ]),
      query('@*', animateChild()),
    ]),
  ]);


// export const fadeRouterAnimation =
//   trigger('fadeRouterAnimation', [
//     transition('* <=> *', [
//       style({ position: 'relative' }),
//       query(':enter, :leave', [
//         style({
//           position: 'absolute',
//           top: 0,
//           left: 0
//         })], { optional: true }),
//         query(':enter', [
//           style({ opacity: 0, transform: 'translate(0.5, 0.5)' })
//         ], { optional: true }),
//       group([
//         query(':leave', [
//           animate('1s linear', style({ opacity: 0, transform: 'translate(0.5, 0.5)' }))
//         ], { optional: true }),
//         query(':enter', [
//           animate('1s linear', style({ opacity: 1, transform: 'translate(1, 1)' }))
//         ], { optional: true }),
//       ]),
//       query('@*', animateChild(), {optional: true}),

//       // query(':enter', animateChild(), { optional: true }),
//     ])
//   ])


  
  // F A D E  //
  
  // export const fade = trigger('fade', [
  // transition(':enter', animation([fadeStyle, animate(enterAnime)], { params: fadeParams })),     
  // transition(':leave', animation([animate(leaveAnime, fadeStyle)], { params: fadeParams })),     
  // ]);




// S L I D E   U P //

// const slideUpParams = { x: 0, y: '50px' };
// const slideInUpParams = { ...slideUpParams, ...animInParams };
// const slideOutUpParams = { ...slideUpParams, ...animOutParams };

// // Trigger with transition & animation
// export const slideUp = trigger('slideUp', [
// transition(':enter', animation([ slideStyle, animate('300ms') ], { params: slideInUpParams})),
// transition(':leave', animation([ animate('300ms', slideStyle)], { params: slideOutUpParams})), 
// ]);


