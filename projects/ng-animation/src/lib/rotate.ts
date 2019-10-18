import { trigger, transition, useAnimation, animation, animate } from '@angular/animations';
import { AnimOptionParams, animIn, animOut, enterLeave } from './structure';
import { Easing } from './easing';


// WHAT
export function rotateIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function rotateOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

// Rotate //

export const rotateLeft = enterLeave('rotateLeft', rotateIn({ rotateAngle: '179.9deg' }), rotateOut({ rotateAngle: '-179.9deg'  }));
export const rotateRight = enterLeave('rotateRight', rotateIn({ rotateAngle: '-179.9deg' }), rotateOut({ rotateAngle: '179.9deg' }));
export const rotateLeftRight = enterLeave('rotateLeftRight', rotateIn({ rotateAngle: '179.9deg' }), rotateOut({ rotateAngle: '179.9deg'  }));
export const rotateRightLeft = enterLeave('rotateRightLeft', rotateIn({ rotateAngle: '-179.9deg' }), rotateOut({ rotateAngle: '-179.9deg'  }));
export const rotateLarge = enterLeave('rotateLarge',  rotateIn({ rotateAngle: '359.9deg' }), rotateOut({ rotateAngle: '359.9deg'  }));
export const rotateLargeSlow = enterLeave('rotateLargeSlow',  rotateIn({ duration: '600ms', rotateAngle: '359.9deg', opacity: 1 }), rotateOut({ duration: '600ms', rotateAngle: '-359.9deg', opacity: 1}));
export const rotateLeftZoom = enterLeave('rotateLeftZoom', rotateIn({ duration: '600ms', rotateAngle: '179.9deg', scaleX: 0, scaleY: 0 }), rotateOut({ duration: '600ms', rotateAngle: '-179.9deg',  scaleX: 0, scaleY: 0 }));
export const rotateRightZoom = enterLeave('rotateRightZoom', rotateIn({ duration: '600ms', rotateAngle: '-179.9deg', scaleX: 0, scaleY: 0 }), rotateOut({ duration: '600ms', rotateAngle: '179.9deg',  scaleX: 0, scaleY: 0 }));
export const rotateLeftRightZoom = enterLeave('rotateLeftRightZoom', rotateIn({ duration: '600ms', rotateAngle: '179.9deg', scaleX: 0, scaleY: 0 }), rotateOut({ duration: '600ms', rotateAngle: '179.9deg',  scaleX: 0, scaleY: 0 }));
export const rotateRightLeftZoom = enterLeave('rotateRightLeftZoom', rotateIn({ duration: '600ms', rotateAngle: '-179.9deg', scaleX: 0, scaleY: 0 }), rotateOut({ duration: '600ms', rotateAngle: '-179.9deg',  scaleX: 0, scaleY: 0 }));

