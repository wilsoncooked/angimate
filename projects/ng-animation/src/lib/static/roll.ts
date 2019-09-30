import { animation, animate, keyframes, style, trigger, transition, useAnimation } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from '../anime';


export interface RollParams extends AnimeParams {
  opacity: number;
  translateX: string | number;
  translateY: string | number;
  rotateX: string | number;
  rotateY: string | number;
  rotateZ: string | number;
  rotateA: string | number;
}
// 0, 1, -120deg

export const rollStyle = 
  style({
    opacity: '{{opacity}}',
    transform: 'translate({{translateX}}, {{translateY}}) rotate3d({{rotateX}}, {{rotateY}}, {{rotateZ}}, {{rotateA}})',
  })

// R O L L   I N //
const rollInLeftParams = { opacity: 0, translateX: '-100%', translateY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '-120deg' };
const rollInLeftEnterParams = { ...rollInLeftParams, ...animInParams };
const rollOutLeftLeaveParams = { ...rollInLeftParams, ...animOutParams };

export const rollInLeft = trigger('rollInLeft', [
  transition(':enter', animation([ rollStyle, animate('1s') ], { params: rollInLeftEnterParams})),
  transition(':leave', animation([ animate('1s', rollStyle)], { params: rollOutLeftLeaveParams})), 
]);

// R O L L   O U T //

const rollRightParams = { opacity: 0, translateX: '100%', translateY: 0, rotateX: 0, rotateY: 0, rotateZ: 1, rotateA: '120deg' };
const rollRightEnterParams = { ...rollRightParams, ...animInParams };
const rollRightLeaveParams = { ...rollRightParams, ...animOutParams };

export const rollInRight = trigger('rollInRight', [
  transition(':enter', animation([ rollStyle, animate('1s') ], { params: rollRightEnterParams})),
  transition(':leave', animation([ animate('1s', rollStyle)], { params: rollRightLeaveParams})), 
]);
