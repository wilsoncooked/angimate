import { animation, trigger, transition, style, animate, keyframes, useAnimation, query, stagger } from '@angular/animations';
import { AnimeParams, animInParams, animOutParams } from './anime';

// Params
// export interface FlashParams extends AnimeParams {
//   opacity: number;
// }

// Flash Style
export const flashStyle = 
    keyframes([
        style({ opacity: 0, offset: 0.25 }),
        style({ opacity: 1, offset: 0.5  }),
        style({ opacity: 0, offset: 0.75 }),
    ])

// R A I N B O W   F L A S H  //

// Default params
// const flashParams = { opacity: 0 };
// const flashInParams = { ...flashParams, ...animInParams };
// const flashOutParams = { ...flashParams, ...animOutParams };

// Trigger with transition & Animation
export const flash = trigger('flash', [
  transition(':enter', animation([ animate('1000ms', flashStyle) ])),     
  transition(':leave', animation([ animate('1000ms', flashStyle) ])),  
]);



// Rainbow flash Style
export const rainbowFlashStyle = 
    keyframes([
        style({ color: "red", offset: 0 }),
        style({ color: "pink", offset: 0.1  }),
        style({ color: "blue", offset: 0.2 }),
        style({ color: "yellow", offset: 0.3 }),
        style({ color: "green", offset: 0.4 }),
        style({ color: "cyan", offset: 0.5 }),
        style({ color: "blue", offset: 0.7 }),
        style({ color: "orange", offset: 0.8 }),
        style({ color: "black", offset: 1 })
    ])

// R A I N B O W   F L A S H  //

// Default params
// const flashParams = { opacity: 0 };
// const flashInParams = { ...flashParams, ...animInParams };
// const flashOutParams = { ...flashParams, ...animOutParams };

// Trigger with transition & Animation
export const rainbowFlash = trigger('rainbowFlash', [
  transition(':enter', animation([ animate('1000ms', rainbowFlashStyle) ])),     
  transition(':leave', animation([ animate('1000ms', rainbowFlashStyle) ])),  
]);


