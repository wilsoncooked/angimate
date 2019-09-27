import { animation, trigger, transition, style, animate, keyframes, useAnimation, query, stagger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from './anime';

// Params
// export interface pulseParams extends AnimeParams {
//   opacity: number;
// }

// pulse Style
export const pulseStyle = 
    keyframes([
        style({ transform: 'scale(0.5)', offset: 0.5  }),
        style({ transform: 'scale(1)', offset: 0.9 }),
    ])

// Trigger with transition & Animation
export const pulse = trigger('pulse', [
  transition(':enter', animation([ animate('1000ms', pulseStyle) ])),     
  transition(':leave', animation([ animate('1000ms', pulseStyle) ])),  
]);


