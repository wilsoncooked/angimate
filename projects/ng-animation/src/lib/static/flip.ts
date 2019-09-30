import { useAnimation, animation, style, animate, keyframes, transition, trigger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from '../anime';


export interface FlipParams extends AnimeParams {
  perspective: string;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}



export const flipStyle = 
animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '800ms linear',
      keyframes([
  style({
    opacity: 0,
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 90deg)',
    offset: 0
  }),
  style({
    opacity: 1,
    transform:
      'perspective(400px) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -20deg)',
    offset: 0.4
  }),
  style({
    transform:
      'perspective(400px) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 10deg)',
    offset: 0.6
  }),
  style({
    transform:
      'perspective(400px) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -5deg)',
    offset: 0.8
  }),
  style({
    transform: 'perspective(400px)',
    offset: 1
  })
  ])
)],
);
    

const flipInXParams = { perspective: '400px', rotateX: 0, rotateY: 1, rotateZ: 0 };
// const flipInXEnterParams = { ...flipInXParams, ...animInParams };
// const rollOutLeftLeaveParams = { ...rollInLeftParams, ...animOutParams };

export const flipInX = trigger('flipInX', [transition(':enter', useAnimation(flipStyle, {params: flipInXParams}))]);
// export const flipIn = trigger('flipIn', [transition(':enter', useAnimation(flipInBF))]);
// //   transition(':enter', animation([ rollStyle, animate('1s') ], { params: rollRightEnterParams})),



// export const flipInBF = animation(
//   [
//     style({ 'backface-visibility': 'visible' }),
//     animate(
//       '{{ timing }}s {{ delay }}s {{ ease }}',
//       keyframes([
//         style({
//           opacity: 0,
//           transform:
//             'perspective(400px) rotate3d(0, 1, 0, 90deg)', //'0' is for z-axis & '90deg' represent the angle of the rotation
//           offset: 0
//         }),
//         style({
//           opacity: 1,
//           transform:
//             'perspective(400px) rotate3d(0, 1, 0, -20deg)',
//           offset: 0.4
//         }),
//         style({
//           transform:
//             'perspective(400px) rotate3d(0, 1, 0, 10deg)',
//           offset: 0.6
//         }),
//         style({
//           transform:
//             'perspective(400px) rotate3d(0, 1, 0, -5deg)',
//           offset: 0.8
//         }),
//         style({
//           transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
//           offset: 1
//         })
//       ])
//     )
//   ],
//   { params: { timing: 3, delay: 0, ease: 'ease-in', rotateX: 1, rotateY: 0, } }
// );

  
// /** 
//  * leave animation 
//  * @example trigger('flipOut', [transition('* => *', useAnimation(flipOut))]) 
//  * @param rotateX describing the x-coordinate of the vector denoting the axis of rotation which could between 0 and 1
//  * @param rotateY describing the y-coordinate of the vector denoting the axis of rotation which could between 0 and 1*/  
// export const flipOutBF = animation(
//   [
//     style({ 'backface-visibility': 'visible' }),
//     animate(
//       '{{ timing }}s {{ delay }}s',
//       keyframes([
//         style({
//             transform: 'perspective(400px)',
//             offset: 0
//         }),
//         style({
//             opacity: 1,
//             transform:
//             'perspective(400px) rotate3d(0, 1, 0, -20deg)',//'0' is for z-axis & '-20deg' represent the angle of the rotation
//             offset: 0.3
//         }),
//         style({
//             opacity: 0,
//             transform:
//             'perspective(400px) rotate3d(0, 1, 0, 90deg)',
//             offset: 1
//         })
//       ])
//     )
//   ],
//   { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }
// );

// //params will override the default parameters 
// export const flipInXBF = useAnimation(flipInBF, {params: {rotateX: 1, rotateY: 0}});
// export const flipInYBF = useAnimation(flipInBF, {params: {rotateX: 0, rotateY: 1}});
// export const flipOutXBF = useAnimation(flipOutBF, {params: {rotateX: 1, rotateY: 0}});
// export const flipOutYBF = useAnimation(flipOutBF, {params: {rotateX: 0, rotateY: 1}});

// export const flipIn = trigger('flipIn', [transition(':enter', useAnimation(flipInBF))]);
// export const flipOut = trigger('flipOut', [transition(':leave', useAnimation(flipOutBF))]);

// // 0, 1, -120deg

// // export const rollStyle = 
// //   style({
// //     opacity: '{{opacity}}',
// //     transform: 'translate({{translateX}}, {{translateY}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, {{rotateA}})',
// //   })

// // // R O L L   I N //
// // const rollInLeftParams = { opacity: 0, translateX: '-100%', translateY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '-120deg' };
// // const rollInLeftEnterParams = { ...rollInLeftParams, ...animInParams };
// // const rollOutLeftLeaveParams = { ...rollInLeftParams, ...animOutParams };

// // export const rollInLeft = trigger('rollInLeft', [
// //   transition(':enter', animation([ rollStyle, animate('1s') ], { params: rollInLeftEnterParams})),
// //   transition(':leave', animation([ animate('1s', rollStyle)], { params: rollOutLeftLeaveParams})), 
// // ]);

// // // R O L L   O U T //

// // const rollRightParams = { opacity: 0, translateX: '100%', translateY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '120deg' };
// // const rollRightEnterParams = { ...rollRightParams, ...animInParams };
// // const rollRightLeaveParams = { ...rollRightParams, ...animOutParams };

// // export const rollInRight = trigger('rollInRight', [
// //   transition(':enter', animation([ rollStyle, animate('1s') ], { params: rollRightEnterParams})),
// //   transition(':leave', animation([ animate('1s', rollStyle)], { params: rollRightLeaveParams})), 
// // ]);