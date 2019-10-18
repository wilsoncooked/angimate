import { style, animate, keyframes, transition, trigger, animation } from '@angular/animations';
import { AnimOptionParams } from './structure'

// F L I P   I N //

export const flipInKeyframes = keyframes([
  style({
    opacity: 1,
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 90deg)',
    offset: 0
  }),
  style({
    opacity: 1,
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -20deg)',
    offset: 0.4
  }),
  style({
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 10deg)',
    offset: 0.6
  }),
  style({
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -5deg)',
    offset: 0.8
  }),
  style({
    transform: 'perspective({{perspective}})',
    offset: 1
  })
]);

// F L I P   O U T  //

export const flipOutKeyframes = keyframes([
  style({
    transform: 'perspective({{perspective}})',
    offset: 0
  }),
  style({
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -5deg)',
    offset: 0.2
  }),
  style({
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 10deg)',
    offset: 0.4
  }),

  style({
    opacity: 1,
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, -20deg)',
    offset: 0.6
  }),
  style({
    opacity: 1,
    transform:
      'perspective({{perspective}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, 90deg)',
    offset: 1
  })
]);

export const allFramesFlipStyle = ( style({ 'backface-visibility': 'visible' }))

// F L I P   I N   X //

const flipXParams = { perspective: '400px', rotateX: 1, rotateY: 0, rotateZ: 0};

export const flipX = trigger('flipX', [
  transition(':enter', animation([allFramesFlipStyle, animate('1s', flipInKeyframes)], 
    {params: flipXParams})),
  transition(':leave', animation([allFramesFlipStyle, animate('1s', flipOutKeyframes)
  ], {params: flipXParams}))
]);

// F L I P   I N   Y //

const flipYParams = { perspective: '400px', rotateX: 0, rotateY: 1, rotateZ: 0};

export const flipY = trigger('flipY', [
  transition(':enter', animation([allFramesFlipStyle, animate('1s', flipInKeyframes)], 
    {params: flipYParams})),
  transition(':leave', animation([allFramesFlipStyle, animate('1s', flipOutKeyframes)
  ], {params: flipYParams}))
]);


// export function revertKeyframes(keyframes: AnimationKeyframesSequenceMetadata) {
//   return {
//     steps: keyframes.steps.reverse(),
//     type: keyframes.type
//   }
// }
