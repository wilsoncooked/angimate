import { trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut } from './structure'

export const zoomIn = animIn;
export const zoomOut = animOut;


export function zoomParams (zoomName, opacity, transX, transY, scaleX, scaleY, origin) {
  return trigger(zoomName, [
  transition(':enter', useAnimation(animIn, { params: { transX, opacity, transY, scaleX, scaleY, origin } })),
  transition(':leave', useAnimation(animOut, { params: { transX, opacity, transY, scaleX, scaleY, origin  } }))
]);
}

export const zoom = zoomParams('zoom', 1, 0, 0, 0, 0, 'center');
export const zoomUp = zoomParams('zoomUp', 1, 0, '100px', 0, 0, 'center');
export const zoomDown = zoomParams('zoomDown', 1, 0, '-100px', 0, 0, 'center');
export const zoomLeft = zoomParams('zoomLeft', 1, '-100px', 0, 0, 0, 'center');
export const zoomRight = zoomParams('zoomRight', 1, '100px', 0, 0, 0, 'center');

export const zoomFade = zoomParams('zoomFade', 0, 0, 0, 0, 0, 'center');
export const zoomFadeUp = zoomParams('zoomFadeUp', 0, 0, '100px', 0, 0, 'center');
export const zoomFadeDown = zoomParams('zoomFadeDown', 0, 0, '-100px', 0, 0, 'center');
export const zoomFadeLeft = zoomParams('zoomFadeLeft', 0, '-100px', 0, 0, 0, 'center');
export const zoomFadeRight = zoomParams('zoomFadeRight', 0, '100px', 0, 0, 0, 'center');
