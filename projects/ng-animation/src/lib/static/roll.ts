import { animation, animate, trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut, anim, animStyle } from './structure'
import { Easing } from '../easing'
import { AnimOptionParams, QueryOptionAnim, enter, leave, enterLeave } from './structure';


// WHAT
export function rollIn(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function rollOut(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

// Roll //

export const rollLeft = enterLeave('rollLeft', rollIn({ transX: '-100px', rotateAngle: '-120' }), rollOut({ transX: '-100px', rotateAngle: '-120'  }));
export const rollRight = enterLeave('rollRight', rollIn({ transX: '100px', rotateAngle: '120' }), rollOut({ transX: '100px', rotateAngle: '120' }));


  
