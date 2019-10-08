import { trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut } from './structure'

export const rotateIn = animIn;
export const rotateOut = animOut;


export function rotateEnterParams ( timing,  opacity, rotateAngle, scaleX, scaleY ) {
  return transition(':enter', useAnimation(rotateIn, { params: { opacity, rotateAngle } }))
}

export function rotateExitParams (timing,  opacity, rotateAngle, scaleX, scaleY ) {
  return  transition(':leave', useAnimation(rotateOut, { params: { opacity, rotateAngle } }))
}

export function rotateParams (rotateName, timing,  opacity, rotateAngle, scaleX, scaleY ) {
  return trigger(rotateName, [
    transition(':enter', useAnimation(rotateIn, { params: { opacity, timing, rotateAngle, scaleX, scaleY } })),
    transition(':leave', useAnimation(rotateOut, { params: { opacity, timing, rotateAngle, scaleX, scaleY } }))
  ]);
}


// ROTATE //

export const rotateLeft = trigger('rotateLeft', [
  rotateEnterParams('300ms', 0, 179.9, 1, 1),
 rotateExitParams('300ms', 0, -179.9, 1, 1)
]);

export const rotateRight = trigger('rotateRight', [
  rotateEnterParams('300ms', 0, -179.9, 1, 1),
 rotateExitParams('300ms', 0, 179.9, 1, 1),
]);

export const rotateLeftRight = rotateParams('rotateLeftRight', '300ms', 0, 179.9, 1, 1);

export const rotateRightLeft = rotateParams('rotateRightLeft', '300ms', 0, -179.9, 1, 1);

export const rotateLarge = trigger('rotateLarge', [
  rotateEnterParams('300ms', 0, -359.9, 1, 1),
  rotateExitParams('300ms', 0, 359.9, 1, 1),
]);

export const rotateLargeSlow = trigger('rotateLargeSlow', [
  rotateEnterParams('600ms', 0, 359.9, 1, 1),
  rotateExitParams('600ms', 0, -359.9, 1, 1),
]);

export const rotateLeftZoom = trigger('rotateLeftZoom', [
  rotateEnterParams('400ms', 0, -179.9, 0, 0),
 rotateExitParams('400ms', 0, 179.9, 0, 0),
]);

export const rotateRightZoom = trigger('rotateRightZoom', [
  rotateEnterParams('400ms', 0, 179.9, 0, 0),
 rotateExitParams('400ms', 0, -179.9, 0, 0),
]);
export const rotateLeftRightZoom = rotateParams('rotateLeftRightZoom', '400ms', 0, 179.9, 0, 0);

export const rotateRightLeftZoom = rotateParams('rotateRightLeftZoom', '400ms', 0, -179.9, 0, 0);


