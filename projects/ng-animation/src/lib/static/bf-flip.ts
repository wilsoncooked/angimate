import { useAnimation, animation, style, animate, keyframes, transition, trigger } from '@angular/animations';

/** 
 * enter animation 
 * @example trigger('flipIn', [transition('* => *', useAnimation(flipIn))]) 
 * @param rotateX describing the x-coordinate of the vector denoting the axis of rotation which could between 0 and 1
 * @param rotateY describing the y-coordinate of the vector denoting the axis of rotation which could between 0 and 1
 */  
export const flipInBF = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ timing }}s {{ delay }}s {{ ease }}',
      keyframes([
        style({
          opacity: 0,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)', //'0' is for z-axis & '90deg' represent the angle of the rotation
          offset: 0
        }),
        style({
          opacity: 1,
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',
          offset: 0.4
        }),
        style({
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 10deg)',
          offset: 0.6
        }),
        style({
          transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -5deg)',
          offset: 0.8
        }),
        style({
          transform: 'perspective(400px) rotate3d(0, 0, 0, 0)',
          offset: 1
        })
      ])
    )
  ],
  { params: { timing: 1, delay: 0, ease: 'ease-in', rotateY: 0, rotateX: 1 } }
);
  
/** 
 * leave animation 
 * @example trigger('flipOut', [transition('* => *', useAnimation(flipOut))]) 
 * @param rotateX describing the x-coordinate of the vector denoting the axis of rotation which could between 0 and 1
 * @param rotateY describing the y-coordinate of the vector denoting the axis of rotation which could between 0 and 1*/  
export const flipOutBF = animation(
  [
    style({ 'backface-visibility': 'visible' }),
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
            transform: 'perspective(400px)',
            offset: 0
        }),
        style({
            opacity: 1,
            transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, -20deg)',//'0' is for z-axis & '-20deg' represent the angle of the rotation
            offset: 0.3
        }),
        style({
            opacity: 0,
            transform:
            'perspective(400px) rotate3d({{ rotateX }}, {{ rotateY }}, 0, 90deg)',
            offset: 1
        })
      ])
    )
  ],
  { params: { timing: 1, delay: 0, rotateX: 1, rotateY: 0 } }
);

//params will override the default parameters 
export const flipInXBF = useAnimation(flipInBF, {params: {rotateX: 1, rotateY: 0}});
export const flipInYBF = useAnimation(flipInBF, {params: {rotateX: 0, rotateY: 1}});
export const flipOutXBF = useAnimation(flipOutBF, {params: {rotateX: 1, rotateY: 0}});
export const flipOutYBF = useAnimation(flipOutBF, {params: {rotateX: 0, rotateY: 1}});

export const flipInAnimBF = trigger('flipIn', [transition(':enter', useAnimation(flipInBF))]);
export const flipOutAnimBF = trigger('flipOut', [transition(':leave', useAnimation(flipOutBF))]);