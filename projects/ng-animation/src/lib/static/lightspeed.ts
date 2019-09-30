import { animate, animation, keyframes, style, useAnimation, transition, trigger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from '../anime';

// Params
export interface LightSpeedParams extends AnimeParams {
    opacity: number;
    x: string | number;
    y: string | number;
    skewX: string;
  }

  export const lightSpeedStyle = 
  style({ 
    transform: 'translate({{ x }}, {{ y }}) skewX({{ skewX }})',
    opacity: '{{ opacity }}'
    });

    // L I G H T S P E E D   R I G H T //

    const lightSpeedRightParams = { opacity: 0, x: '100px', y: 0, skewX: '-30deg' };
    const lightSpeedRightEnterParams = { ...lightSpeedRightParams, ...animInParams };
    const lightSpeedRightLeaveParams = { ...lightSpeedRightParams, ...animOutParams };
    
    // Trigger with transition & animation
    export const lightSpeedRight = trigger('lightSpeedRight', [
      transition(':enter', animation([ lightSpeedStyle, animate('300ms') ], { params: lightSpeedRightEnterParams})),
      transition(':leave', animation([ animate('300ms', lightSpeedStyle)], { params: lightSpeedRightLeaveParams})), 
    ]);
     
    // L I G H T S P E E D   R I G H T //

    const lightSpeedLeftParams = { opacity: 0, x: '-100px', y: 0, skewX: '30deg' };
    const lightSpeedLeftEnterParams = { ...lightSpeedLeftParams, ...animInParams };
    const lightSpeedLeftLeaveParams = { ...lightSpeedLeftParams, ...animOutParams };
    
    // Trigger with transition & animation
    export const lightSpeedLeft = trigger('lightSpeedLeft', [
      transition(':enter', animation([ lightSpeedStyle, animate('300ms') ], { params: lightSpeedLeftEnterParams})),
      transition(':leave', animation([ animate('300ms', lightSpeedStyle)], { params: lightSpeedLeftLeaveParams})), 
    ]);
