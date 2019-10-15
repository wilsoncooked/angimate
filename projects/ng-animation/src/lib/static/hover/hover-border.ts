import { trigger, transition, useAnimation, state, style, animate, animation, query } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from '../structure';
import { Easing } from '../../easing';


export function hBorder(name='hBorder', borderWeight=1, borderStyle='solid', borderColor='#ee0c0c', radius='5px', borderIdle='0 solid white', duration='300ms', movement='ease-out' ) {
    return trigger(name, [
    state('active', style({ 
        border: `${borderWeight}px ${borderStyle} ${borderColor}`,
        'border-radius': `${radius}`
    })),
    state('idle', style({ outline: `${borderIdle}` })),
    transition('idle <=> active', animate(`${duration} ${movement}`))
  ])
}

export const hBorderFade = hBorder('hBorderFade')