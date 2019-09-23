import { animation, trigger, transition, style } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';

// Params
export interface SlideParams extends AnimeParams {
  opacity: number;
  x: string;
  y: string;
}

// S L I D E   U P //

// Style
export const slideUpStyle = animation(
        style({ 
          opacity: '{{ opacity }}',
          transform: 'translate({{ x }}, {{ y }})'
        }),
        {
          params: {                          
            opacity: 0,
            x: '0',
            y: '50px'
          }
        }
      )

// Animation
export const slideUpInAnim = animation([ slideUpStyle, animIn ]); 
export const slideUpOutAnim = animation([ animOut, slideUpStyle ]); 

// Trigger with transition
export const slideUp = trigger('slideUp', [
  transition(':enter', slideUpInAnim),  
  transition(':leave', slideUpOutAnim), 
]);

// S L I D E   D O W N //

// Style
export const slideDownStyle = animation(
  style({ 
    opacity: '{{ opacity }}',
    transform: 'translate({{ x }}, {{ y }})'
  }),
  {
    params: {                          
      opacity: 0,
      x: '0',
      y: '-50px'
    }
  }
)

// Animation
export const slideDownInAnim = animation([ slideDownStyle, animIn ]); 
export const slideDownOutAnim = animation([ animOut, slideDownStyle ]); 

// Trigger with transition
export const slideDown = trigger('slideDown', [
transition(':enter', slideDownInAnim),  
transition(':leave', slideDownOutAnim), 
]);

// S L I D E   F R O M   L E F T //

// Style
export const slideLeftStyle = animation(
  style({ 
    opacity: '{{ opacity }}',
    transform: 'translate({{ x }}, {{ y }})'
  }),
  {
    params: {                          
      opacity: 0,
      x: '-50px',
      y: '0'
    }
  }
)

// Animation
export const slideLeftInAnim = animation([ slideLeftStyle, animIn ]); 
export const slideLeftOutAnim = animation([ animOut, slideLeftStyle ]); 

// Trigger with transition
export const slideLeft = trigger('slideLeft', [
transition(':enter', slideLeftInAnim),  
transition(':leave', slideLeftOutAnim), 
]);

// S L I D E   F R O M   R I G H T //

// Style
export const slideRightStyle = animation(
  style({ 
    opacity: '{{ opacity }}',
    transform: 'translate({{ x }}, {{ y }})'
  }),
  {
    params: {                          
      opacity: 0,
      x: '50px',
      y: '0'
    }
  }
)

// Animation
export const slideRightInAnim = animation([ slideRightStyle, animIn ]); 
export const slideRightOutAnim = animation([ animOut, slideRightStyle ]); 

// Trigger with transition
export const slideRight = trigger('slideRight', [
transition(':enter', slideRightInAnim),  
transition(':leave', slideRightOutAnim), 
]);

