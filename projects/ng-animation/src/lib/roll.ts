import { animation, animate, trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut, anim, animStyle, AnimOptionParams, enterLeave } from './structure'
import { Easing } from './easing'


// WHAT
export function rollIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function rollOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

// Roll //
export const rollLeft = enterLeave('rollLeft', rollIn({ transX: '-100px', rotateAngle: '-120deg' }), rollOut({ transX: '-100px', rotateAngle: '-120deg' }));
export const rollRight = enterLeave('rollRight', rollIn({ transX: '100px', rotateAngle: '120deg' }), rollOut({ transX: '100px', rotateAngle: '120deg' }));


  
