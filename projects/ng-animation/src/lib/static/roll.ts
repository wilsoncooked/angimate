import { animation, animate, trigger, transition, useAnimation } from '@angular/animations';
import { animIn, animOut, anim, animStyle } from './structure'
import { Easing } from '../easing'

export function rollParams ( rollName, transX, transY, rotateAngle ) {
  return trigger(rollName, [
  transition(':enter', useAnimation(animIn, { params: { transX, transY, rotateAngle } })),
  transition(':leave', useAnimation(animOut, { params: { transX, transY, rotateAngle } }))
]);
}

export const rollLeft = rollParams( 'rollLeft', '-100px', 0, -120 );
export const rollRight = rollParams( 'rollLeft', '100px', 0, 120 );

// Dynamic useAnimation structure //

export function rollDefaultParams ( movement, transX, transY, rotateAngle ) {
  return { params: { 
      timing: '300ms', 
      delay: '0s', 
      movement,
      opacity: 0, 
      transX, 
      transY, 
      transZ: 0, 
      scaleX: 1, 
      scaleY: 1, 
      scaleZ: 1, 
      rotateX: 0,
      rotateY: 0,
      rotateZ: 1,
      rotateAngle,
      skewX: 0,
      skewY: 0,
      perspective: 0,
      origin: 'center',
      offset: 0,
    }}
}

export const rollEnter = 
    animation([ animStyle,
    animate( anim )], 
    rollDefaultParams( Easing.easeOutCubic, '-100px', 0, -120  )
  );

export const rollLeave = 
    animation([
    animate( anim, animStyle )], 
    rollDefaultParams( Easing.easeInCubic, '100px', 0, 120)
  );

  
