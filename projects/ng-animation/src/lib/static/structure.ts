
import { animation, style, animate, } from '@angular/animations';
import { OtherAnimateParams, enterAnime, leaveAnime } from '../anime';
import { Easing } from '../easing';

export interface AnimationParams extends OtherAnimateParams {
    opacity: number;
    fromX: string | number;
    fromY: string | number;
    toX: string | number;
    toY: string | number;
    }
    
    export const anim = '{{ timing }} {{ delay }} {{ movement }}';
    export const animStyle =  
        style({
                opacity: '{{ opacity }}',
                transform: `
                    translate3d({{ transX }}, {{ transY }}, {{ transZ }}) 
                    scale3d({{ scaleX }}, {{ scaleY }}, {{ scaleZ }}) 
                    rotate3d({{ rotateX }}, {{ rotateY }}, {{ rotateZ }}, {{rotateAngle}}deg)
                    skew({{ skewX }}, {{ skewY }})
                     perspective({{ perspective }})
                    `,
                'transform-origin': '{{ origin }}'
            });

    
    export function animDefaultParams ( movement ) {
        return { params: { 
            timing: '300ms', 
            delay: '0s', 
            movement,
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
          }}
      }


export const animIn = 
    animation([ animStyle,
    animate( anim )], 
    animDefaultParams( Easing.easeOutCubic)
  );

export const animOut = 
    animation([
    animate( anim, animStyle )], 
    animDefaultParams( Easing.easeInCubic)
  );

