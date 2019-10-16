// export interface FadeOptionAnim {
//   name: string;
//   transition?: string;
//   duration?: string;
//   delay?: string;
//   easing?: string;
// }

// const defaultTransition = 'idle <=> active';
// const defaultDuration = '300ms';
// const defaultDelay = '0s';
// const defaultEasing = Easing.easeInOutCubic;


// export function fadeFade(option: Partial<FadeOptionAnim>) {
//   return trigger(option.name, [
//       state('active', style( activeState )),
//       state('idle', style( idleState )),
//       transition(
//           option.transition || defaultTransition,
//           animate(
//               `${option.duration || defaultDuration} ${option.delay || defaultDelay} ${option.easing || defaultEasing}`
//           )
//       )
//   ])
// }

// export const hiHi = fadeFade({name: 'fadeFade'})



// hover('fade', fadeIn({ x: '360', duration: '300ms' }));
// list('fade', 'li', fadeIn({ x: '30'}))
// enter('fade', fadeIn({ x: '360' }))
// io('fade', fade({ angle: 360 }))


// export function fadeIn(para1) {
//   return useAnimation(animIn, { params:  para1  });
// }

// export function fadeOut( para2 ) {
//   return useAnimation(animOut, { params:  para2 });
// }

// export function enter(para3) {
//   return transition(':enter', fadeIn( para3 ))
// }

// export function leave(para4) {
//   return transition(':leave', fadeOut( para4 ))
// }


// export function trig(name: string, when) {
//   return trigger(name, [ when ])
// }

// interface fadeParams {
//   opacity: number;
//   transX: string;
//   transY: string;
// }

// export const fadeFade = 
//     trig('fadeFade', [
//       enter({ opacity: 0, transX: '50px', transY: '0px' })
//     ]);