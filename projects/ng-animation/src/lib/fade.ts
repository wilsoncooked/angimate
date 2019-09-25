import { animation, trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { animIn, animOut, AnimeParams, animInParams, animOutParams } from './anime';
import { Easing } from './easing';

// Params
export interface FadeParams extends AnimeParams {
  opacity: number;
}


// Default params
const fadeParams = { opacity: 0 };
const fadeInParams = { ...fadeParams, ...animInParams };
const fadeOutParams = { ...fadeParams, ...animOutParams };

// Style
const fadeStyle = style({ opacity: '{{ opacity }}' });

// Animations
export const fadeInAnim = animation([ fadeStyle, animate('100ms') ], { params: fadeInParams });
export const fadeOutAnim = animation([ animate('500ms', fadeStyle) ], { params: fadeOutParams })

// Trigger with transition
export const fadeIn = trigger('fadeIn', [
  transition(':enter', fadeInAnim),     // When <element @fade> enters the page
  transition(':leave', fadeOutAnim),    // When <element @fade> leaves the page
]);

