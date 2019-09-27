// import { animation, trigger, transition, style, animate, useAnimation, query, stagger } from '@angular/animations';
// import { AnimeParams, animInParams, animOutParams } from './anime';

// // Params
// export interface FadeParams extends AnimeParams {
//   opacity: number;
//   x: string | number;
//   y: string | number;
// }

// // Fade Style
// export const fadeStyle = 
//   style({
//     opacity: '{{ opacity }}',
//     transform: 'translate({{ x }}, {{ y }})'
//   })


// // F A D E  //

// // Default params
// const fadeParams = { opacity: 0, x: 0, y: 0 };
// const fadeInParams = { ...fadeParams, ...animInParams };
// const fadeOutParams = { ...fadeParams, ...animOutParams };

// // Trigger with transition & Animation
// export const fade = trigger('fade', [
//   transition(':enter', animation([ fadeStyle, animate('300ms') ], { params: fadeInParams })),     
//   transition(':leave', animation([ animate('300ms', fadeStyle) ], { params: fadeOutParams })),  
// ]);

  



//     export const bulseStyle = 
//     keyframes([
//         style({ transform: 'scale(0.5)', offset: 0.2  }),
//         style({ transform: 'scale(0.5)', offset: 0.53  }),
//         style({ transform: 'scale(0.5)', offset: 0.8  }),
//         style({ transform: 'scale(1)', offset: 0.9 }),
//     ])
//     from,
//     20%,
//     53%,
//     80%,
//     to {
//       animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
//       transform: translate3d(0, 0, 0);
//     }
  
//     40%,
//     43% {
//       animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
//       transform: translate3d(0, -30px, 0);
//     }
  
//     70% {
//       animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
//       transform: translate3d(0, -15px, 0);
//     }
  
//     90% {
//       transform: translate3d(0, -4px, 0);
//     }
//   }
  
//   .bounce {
//     animation-name: bounce;
//     transform-origin: center bottom;
//   }