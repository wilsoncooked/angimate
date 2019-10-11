import { trigger, transition, useAnimation, state, style, animate, animation, query } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from '../structure';
import { Easing } from '../../easing';


export function hover(name='hoverTest', scaleXActive=1.2, scaleYActive=1.2, scaleXIdle=1, scaleYIdle=1, duration='1s', movement='ease' ) {
    return trigger(name, [
    state('active', style({ transform: `scale(${scaleXActive}, ${scaleYActive})` })),
    state('idle', style({ transform: `scale(${scaleXIdle}, ${scaleYIdle})` })),
    transition('idle <=> active', animate(`${duration} ${movement}`))
  ])
}

// export const hoverGrow = hover('hoverGrow', '1.2', '1.2', '1', '1', '1s', Easing.easeOutCubic )

