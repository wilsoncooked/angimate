
import { animation, style, animate, trigger, transition, useAnimation, stagger } from '@angular/animations';
import { Easing } from './easing';


export interface OtherAnimateParams {
  durations: string;
  delay: string;
  movement: string;
}

export interface AnimationParams extends OtherAnimateParams {
    opacity: number;
    fromX: string | number;
    fromY: string | number;
    toX: string | number;
    toY: string | number;
    }
    
    export const anim = '{{ duration }} {{ delay }} {{ easing }}';
    export const animStyle =  
        style({
                opacity: '{{ opacity }}',
                transform: `
                    perspective({{ perspective }})
                    translate3d({{ transX }}, {{ transY }}, {{ transZ }}) 
                    scale3d({{ scaleX }}, {{ scaleY }}, {{ scaleZ }}) 
                    rotate3d({{ rotateX }}, {{ rotateY }}, {{ rotateZ }}, {{ rotateAngle }})
                    skew({{ skewX }}, {{ skewY }})
                    `,
                'transform-origin': '{{ origin }}',
                offset: '{{ offset }}',
                'backface-visibility': 'visible',
        });


    
    export function animActiveParams ( easing ) {
        return { params: { 
            duration: '300ms', 
            delay: '0s', 
            easing,
            opacity: 0, 
            transX: 0, 
            transY: 0, 
            transZ: 0, 
            scaleX: 1, 
            scaleY: 1, 
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

export interface AnimOptionParams {
  duration: string;
  delay: string;
  easing: string;
  opacity: number;
  transX: string;
  transY: string;
  transZ: string; 
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  rotateAngle: string;
  skewX: string;
  skewY: string;
  perspective: string;
  origin: string;
  offset: number;
}


export const animIn = 
    animation([ animStyle,
    animate( anim )], 
    animActiveParams( Easing.easeOutCubic)
  );

export const animOut = 
    animation([
    animate( anim, animStyle )], 
    animActiveParams( Easing.easeInCubic)
  );

export const animWildCard = 
  animation([ animStyle,
  animate( anim )], 
  animActiveParams( Easing.easeInOutCubic)
);

export function enter(name: string, what) {
  return trigger(name, [
    transition(':enter', what)])
}

export function leave(name: string, what) {
  return trigger(name, [
    transition(':leave', what)])
}

export function enterLeave(name: string, whatEnter, whatLeave ) {
  return trigger(name, [
    transition(':enter', whatEnter),
    transition(':leave', whatLeave)
  ])
}

export function wildCard(name: string, what) {
  return trigger(name, [
    transition('* <=> *', what)])
}

export function animEnter(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animIn, { params });
}

export function animLeave(params: Partial<AnimOptionParams> = {}) {
  return useAnimation(animOut, { params });
}

export interface QueryOptionAnim {
  query: string;
  stagger?: string;
}

export function queryAnimIn(staggerDelay: string) {
  return animation([ animStyle,
    stagger(staggerDelay, 
    animate( anim ))], 
    animActiveParams( Easing.easeOutCubic)
    );
}
