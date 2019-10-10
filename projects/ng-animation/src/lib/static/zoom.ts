import { trigger, transition, useAnimation, state, style, animate, animation } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from './structure';
import { Easing } from '../easing';


export function zoomParams (zoomName, opacity, transX, transY, scaleX, scaleY) {
  return trigger(zoomName, [
  transition(':enter', useAnimation(animIn, { params: { transX, opacity, transY, scaleX, scaleY } })),
  transition(':leave', useAnimation(animOut, { params: { transX, opacity, transY, scaleX, scaleY  } })),
  transition('* <=> *', useAnimation(animWildCard, { params: { transX, opacity, transY, scaleX, scaleY  } }))
]);
}

export const zoomFwdBack = zoomParams('zoomFwdBack', 1, 0, 0, 0, 0);
export const zoomUp = zoomParams('zoomUp', 1, 0, '100px', 0, 0);
export const zoomDown = zoomParams('zoomDown', 1, 0, '-100px', 0, 0);
export const zoomLeft = zoomParams('zoomLeft', 1, '-100px', 0, 0, 0);
export const zoomRight = zoomParams('zoomRight', 1, '100px', 0, 0, 0);

export const zoomFade = zoomParams('zoomFade', 0, 0, 0, 0, 0);
export const zoomFadeUp = zoomParams('zoomFadeUp', 0, 0, '100px', 0, 0);
export const zoomFadeDown = zoomParams('zoomFadeDown', 0, 0, '-100px', 0, 0);
export const zoomFadeLeft = zoomParams('zoomFadeLeft', 0, '-100px', 0, 0, 0);
export const zoomFadeRight = zoomParams('zoomFadeRight', 0, '100px', 0, 0, 0);

export const zoomBackFwd = zoomParams('zoomBackFwd', 0, 0, 0, 3, 3)

export function zoomExtendedParams (zoomName, opacity, transX, transY, scaleXEnter, scaleYEnter, scaleXLeave, scaleYLeave ) {
  return trigger(zoomName, [
  transition(':enter', useAnimation(animIn, { params: { opacity, transX, transY, scaleX: `${scaleXEnter}`, scaleY: `${scaleYEnter}` } })),
  transition(':leave', useAnimation(animOut, { params: { opacity,  transX, transY, scaleX: `${scaleXLeave}`, scaleY: `${scaleYLeave}` } })),
]);
}
export const zoomFwd = zoomExtendedParams('zoomFwd', 0, 0, 0, 0, 0, 2, 2)
export const zoomBack = zoomExtendedParams('zoomBack', 0, 0, 0, 2, 2, 0, 0)


// export const zoomBack =
//   trigger('zoomBack', [
//     state('*', style({
//       opacity: 1,
//       transition: 'perspective(400px)'
//     })),
//   transition(':enter', [
//     style({
//       opacity: 0,
//       transform: 'perspective(400px) translateZ(410px)',
//     }),
//     animate(`500ms ${Easing.easeOutCubic}`)
//   ]),
//   transition(':leave', [
//     animate(`500ms ${Easing.easeInCubic}`, style({
//       opacity: 0,
//       transform: 'perspective(400px) translateZ(410px)',
//     }))
//   ])
// ]);


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


