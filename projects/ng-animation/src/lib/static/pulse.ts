import { animation, trigger, transition, style, animate, keyframes, useAnimation, query, stagger } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';

// // Params
// export interface pulseParams extends AnimateParams {
//   opacity: number;
// }

// pulse Style

export const pulseStyle = 
    keyframes([
        style({ transform: 'scale(1.3)', transformOrigin: 'center', offset: 0.5, }),
        style({ transform: 'scale(1)', transformOrigin: 'center', offset: 1 }),
    ])

// Trigger with transition & Animation
export const pulse = trigger('pulse', [
  transition(':enter', animation([ animate('700ms', pulseStyle) ])),     
  transition(':leave', animation([ animate('700ms', pulseStyle) ])),  
]);

