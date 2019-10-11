import { trigger, transition, useAnimation, state, style, animate, animation } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from '../structure';
import { Easing } from '../../easing';


export function hover(name, scaleXActive, scaleYActive, scaleXIdle, scaleYIdle, duration, movement ) {
    return trigger(name, [
    state('active', style({ transform: `scale(${scaleXActive}, ${scaleYActive})` })),
    state('idle', style({ transform: `scale(${scaleXIdle}, ${scaleYIdle})` })),
    transition('idle <=> active', animate(`${duration} ${movement}`))
  ])
}

export const hoverGrow = hover('hoverGrow', '1.2', '1.2', '1', '1', '1s', Easing.easeOutCubic )