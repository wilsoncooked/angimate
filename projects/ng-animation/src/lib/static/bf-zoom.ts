import { animation, animate, keyframes, style, useAnimation, transition, trigger } from '@angular/animations';

/** 
 * enter animation 
 * @example trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]) 
 */  
export const zoomInBF = animation(
  animate(
    '{{ timing }}s {{ delay }}s',
    keyframes([
      style({
        opacity: 0,
        transform: 'scale3d(.3, .3, .3)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'scale3d(1, 1, 1)',
        offset: 0.5
      })
    ])
  ),
  {
    params: { timing: 1, delay: 0 }
  }
);

/** 
 * leave animation 
 * @example trigger('zoomOut', [transition('* => *', useAnimation(zoomOut))]) 
 */  
export const zoomOutBF = animation(
  [
    animate(
      '{{ timing }}s {{ delay }}s',
      keyframes([
        style({
          opacity: 1,
          offset: 0
        }),
        style({
          opacity: 0,
          transform: 'scale3d(.3, .3, .3)',
          offset: 0.5
        }),
        style({
          opacity: 0,
          offset: 1
        })
      ])
    )
  ],
  {
    params: { timing: 1, delay: 0 }
  }
);

export const zoomInAnimBF = trigger('zoomIn', [transition(':enter', useAnimation(zoomInBF))]);
export const zoomOutAnimBF = trigger('zoomOut', [transition(':leave', useAnimation(zoomOutBF))]);