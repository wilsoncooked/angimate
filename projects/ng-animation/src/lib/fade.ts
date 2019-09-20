import { animation, trigger, transition, style } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';


// Params
export interface FadeParams extends AnimeParams {
  opacity: number;
}

// Style
export const fadeStyle = animation(
  style({ opacity: '{{ opacity }}' }),    // State
  { params: { opacity: '0' }}             // Default params
);


// Animation
export const fadeInAnim = animation([ fadeStyle, animIn ]);   // fadeStyle => *
export const fadeOutAnim = animation([ animOut, fadeStyle ]); // * => fadeStyle


// Trigger with transition
export const fadeIn = trigger('fadeIn', [
  transition(':enter', fadeInAnim),     // When <element @fade> enters the page
  transition(':leave', fadeOutAnim),    // When <element @fade> leaves the page
]);
