import { trigger, transition, useAnimation, state, style, animate, animation, query, keyframes } from '@angular/animations';
import { animIn, animOut, animWildCard, animStyle, anim,  } from '../structure';
import { Easing } from '../../easing';


export function hScale(name='hScale', scaleXActive=1.1, scaleYActive=1.1, scaleXIdle=1, scaleYIdle=1, duration='300ms', movement='ease-out' ) {
    return trigger(name, [
    state('active', style({ transform: `scale(${scaleXActive}, ${scaleYActive})` })),
    state('idle', style({ transform: `scale(${scaleXIdle}, ${scaleYIdle})` })),
    transition('idle <=> active', animate(`${duration} ${movement}`))
  ])
}

export const hGrow = hScale('hGrow')
export const hGrowSlow = hScale('hGrowSlow', 1.1, 1.1, 1, 1, '800ms')
export const hGrowQuick = hScale('hGrowQuick', 1.1, 1.1, 1, 1, '100ms')
export const hShrink = hScale('hShrink', 0.9, 0.9, 1, 1, '100ms')
export const hShrinkSlow = hScale('hShrinkSlow', 0.9, 0.9, 1, 1, '800ms')
export const hShrinkQuick = hScale('hShrinkQuick', 0.9, 0.9, 1, 1, '100ms')


// R O T A T E //
export function hAngle(name='hRotate', rotateActive=10,  rotateIdle=0, duration='300ms', movement='ease-out' ) {
  return trigger(name, [
  state('active', style({ transform: `rotate(${rotateActive}deg)` })),
  state('idle', style({ transform: `rotate(${rotateIdle}deg)` })),
  transition('idle <=> active', animate(`${duration} ${movement}`))
])
}

export const hRotate = hAngle()


// T R A N S L A T E //
export function hTranslate(name='hTranslate', transXActive='0', transYActive='0', transXIdle='0', transYIdle='0', duration='200ms', movement=Easing.easeOutQuad ) {
  return trigger(name, [
  state('active', style({ transform: `translate(${transXActive}, ${transYActive})` })),
  state('idle', style({ transform: `translate(${transXIdle}, ${transYIdle})` })),
  transition('idle <=> active', animate(`${duration} ${movement}`))
])
}

export const hDown = hTranslate('hDown', '0px', '10px' )
export const hUp = hTranslate('hUp', '0px', '-10px' )
export const hLeft = hTranslate('hLeft', '-10px' )
export const hRight = hTranslate('hRight', '10px' )


// S K E W //
export function hSkew(name='hSkew', skewActive=-10, skewIdle=0, duration='200ms', movement=Easing.easeOutQuad ) {
  return trigger(name, [
  state('active', style({ transform: `skew(${skewActive}deg)` })),
  state('idle', style({ transform: `skew(${skewIdle}deg)` })),
  transition('idle <=> active', animate(`${duration} ${movement}`))
])
}

export const hSkewRight = hSkew('hSkewRight')
export const hSkewLeft = hSkew('hSkewLeft', 10)


