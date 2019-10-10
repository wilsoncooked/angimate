import { trigger, transition, useAnimation, animation, animate } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from './structure';
import { Easing } from '../easing';

export const rotateIn = animIn;
export const rotateOut = animOut;


export function rotateParams (rotateName, opacity, angleEnter, angleLeave ) {
  return trigger(rotateName, [
    transition(':enter', useAnimation(rotateIn, { params: { opacity, rotateAngle: `${angleEnter}` } })),
    transition(':leave', useAnimation(rotateOut, { params: { opacity, rotateAngle: `${angleLeave}` } }))
  ]);
}

export function rotateExtendedParams (rotateName, timing, opacity, angleEnter, angleLeave, scaleX, scaleY ) {
    return trigger(rotateName, [
    transition(':enter', useAnimation(rotateIn, { params: { opacity, timing, rotateAngle: `${angleEnter}`, scaleX, scaleY } })),
    transition(':leave', useAnimation(rotateOut, { params: { opacity, timing, rotateAngle: `${angleLeave}`, scaleX, scaleY } }))
  ]);
}

// ROTATE //

export const rotateLeft = rotateParams('rotateLeft', 0, 179.9, -179.9);
export const rotateRight = rotateParams('rotateRight', 0, -179.9, 179.9);
export const rotateLeftRight = rotateParams('rotateLeftRight', 0, 179.9, 179.9);
export const rotateRightLeft = rotateParams('rotateRightLeft', 0, -179.9, -179.9);
export const rotateLarge = rotateParams('rotateLarge', 0,  359.9, - 359.9);
export const rotateLargeSlow = rotateExtendedParams('rotateLargeSlow', '600ms', 1,  359.9, -359.9, 1, 1);
export const rotateLeftZoom = rotateExtendedParams('rotateLeftZoom', '600ms', 0,  179.9, -179.9, 0, 0);
export const rotateRightZoom = rotateExtendedParams('rotateRightZoom', '600ms', 0,  -179.9, 179.9, 0, 0);
export const rotateLeftRightZoom = rotateExtendedParams('rotateLeftRightZoom', '600ms', 0,  179.9, 179.9, 0, 0);
export const rotateRightLeftZoom = rotateExtendedParams('rotateRightLeftZoom', '600ms', 0,  -179.9, -179.9, 0, 0);

// ZOOM structure for useAnimation //
   
export function zoomDefaultParams ( movement, opacity, scaleX, scaleY ) {
  return { params: { 
      timing: '300ms', 
      delay: '0s', 
      movement,
      opacity,
      transX: 0, 
      transY: 0, 
      transZ: 0, 
      scaleX,
      scaleY,
      scaleZ: 1, 
      rotateX: 0,
      rotateY: 0,
      rotateZ: 1,
      rotateAngle: 0,
      skewX: 0,
      skewY: 0,
      perspective: 0,
      origin: 'center',
      offset: 0,
    }}
}

export const zoom = 
animation([ animStyle,
animate( anim )], 
zoomDefaultParams( Easing.easeInOutCubic, 0, 0, 0 )
);

export const zoomEnter = 
animation([ animStyle,
animate( anim )], 
zoomDefaultParams( Easing.easeInCubic, 0, 0, 0 )
);

export const zoomLeave = 
animation([
animate( anim, animStyle )], 
zoomDefaultParams( Easing.easeOutCubic, 0, 0, 0 )
);
