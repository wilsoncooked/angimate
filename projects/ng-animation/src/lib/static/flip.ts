import { useAnimation, animation, style, animate, keyframes, transition, trigger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from '../anime';


export interface FlipParams extends AnimeParams {
  perspective: string;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
}

// F L I P   I N //

export const flipInStyle = 
animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '1s linear',
      keyframes([
  style({
    opacity: 1,
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
    
// F L I P   I N   X //

const flipInXParams = { perspective: '400px', rotateX: 1, rotateY: 0, rotateZ: 0};
export const flipInX = trigger('flipInX', [
  transition(':enter', animation(flipInStyle, {params: flipInXParams})),
  transition(':leave', animation(flipInStyle, {params: flipInXParams})),
]);

// F L I P   I N   Y //

const flipInYParams = { perspective: '400px', rotateX: 0, rotateY: 1, rotateZ: 0};
export const flipInY = trigger('flipInY', [
  transition(':enter', animation(flipInStyle, {params: flipInYParams})),
  transition(':leave', animation(flipInStyle, {params: flipInYParams})),
]);



