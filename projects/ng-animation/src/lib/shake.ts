import { style, animate, keyframes, transition, trigger, animation } from '@angular/animations';
import { Easing } from './easing'

export const shakeKeyframes = keyframes([
  style({
    transform: 'translate(0, 0)',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate(0, 0)',
  }),
]);

const shakeXParams = { x1: '8px', x2: '-8px', y1: 0, y2: 0 };

export const shakeX = trigger('shakeX', [
  transition('* <=> *', animate(`500ms ${Easing.easeInOutQuad}`, shakeKeyframes),
  {params: shakeXParams}), 
]);

const shakeYParams = { x1: 0, x2: 0, y1: '8px', y2: '-8px' };

export const shakeY = trigger('shakeY', [
  transition('* <=> *', animate(`350ms ${Easing.easeInOutSine}`, shakeKeyframes),
  {params: shakeYParams}), 
]);


export const shakeLongerKeyframes = keyframes([
  style({
    transform: 'translateX(0)',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translate({{ x1 }}, {{ y1 }})',
  }),
  style({
    transform: 'translate({{ x2 }}, {{ y2 }})',
  }),
  style({
    transform: 'translateX(0)',
  }),
]);

const shakeXLongerParams = { x1: '10px', x2: '-10px', y1: 0, y2: 0 };

export const shakeXLonger = trigger('shakeXLonger', [
  transition('* <=> *', animate(`800ms ${Easing.easeInSine}`, shakeLongerKeyframes),
  {params: shakeXLongerParams}), 
]);

const shakeYLongerParams = { x1: 0, x2: 0, y1: '10px', y2: '-10px' };

export const shakeYLonger = trigger('shakeYLonger', [
  transition('* <=> *', animate(`800ms ${Easing.easeInSine}`, shakeLongerKeyframes),
  {params: shakeYLongerParams}), 
]);

export const shakePivotKeyframes = keyframes([
  style({
    transform: 'rotate(0deg)',
    'transform-origin': '{{ origin }}',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate(0deg)',
    'transform-origin': '{{ origin }}',
  }),
]);

export function shakePivotParams (shakeName, deg1, deg2, origin) { 
  return trigger(shakeName, [
  transition('* <=> *', animate(`500ms ${Easing.easeInOutQuad}`, shakePivotKeyframes),
  {params: { deg1, deg2, origin }}), 
]);
}



export const shakePivot = shakePivotParams( 'shakePivot', 8, -8, 'center' );
export const shakeBottom = shakePivotParams( 'shakeBottom', 8, -8, 'bottom' );
export const shakeTop = shakePivotParams( 'shakeTop', 8, -8, 'top' );

export const shakePivotLongerKeyframes = keyframes([
  style({
    transform: 'rotate(0deg)',
    'transform-origin': '{{ origin }}',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg1 }}deg)',
  }),
  style({
    transform: 'rotate({{ deg2 }}deg)',
  }),
  style({
    transform: 'rotate(0deg)',
    'transform-origin': '{{ origin }}',
  }),
]);

const shakePivotLongerParams = { deg1: 8, deg2: -8, origin: 'center' };

export const shakePivotLonger = trigger('shakePivotLonger', [
  transition('* <=> *', animate(`800ms ${Easing.easeInSine}`, shakePivotLongerKeyframes),
  {params: shakePivotLongerParams}), 
]);
