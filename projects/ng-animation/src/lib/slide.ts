import { animation, trigger, transition, style } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';

// Params
export interface SlideParams extends AnimeParams {
    opacity: number;
    x: string;
    y: string;
  }

// Style
export const slideUpStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: {                         //default 
        opacity: 0,
        x: '0',
        y: '50px'
      }
    }
  )

// Animation
export const slideUpAnim = animation([ slideUpStyle, animIn ]);   // slideStyle => *
export const slideDownAnim = animation([ animOut, slideUpStyle ]); // * => slideStyle


// Trigger with transition
export const slideUp = trigger('slideUp', [
    transition(':enter', slideUpAnim),     // When <element @fade> enters the page
    transition(':leave', slideDownAnim),    // When <element @fade> leaves the page
  ]);

// SLIDE LEFT

export const slideLeftStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: {
        opacity: 0,
        x: '-50px',
        y: '0',
      }
    }
  )

export const slideLeftEnter = animation([ slideLeftStyle, animIn ]);
export const slideLeftLeave = animation([ animOut, slideLeftStyle ]);

export const slideLeft = trigger('slideLeft', [
    transition(':enter', slideLeftEnter),
    transition(':leave', slideLeftLeave),
  ]);

  // SLIDE RIGHT 

  export const slideRightStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: { 
        opacity: 0,
        x: '50px',
        y: '0',
      }
    }
  )

export const slideRightEnter = animation([ slideRightStyle, animIn ]); 
export const slideRightLeave = animation([ animOut, slideRightStyle ]); 

export const slideRight = trigger('slideRight', [
    transition(':enter', slideRightEnter),   
    transition(':leave', slideRightLeave),   
  ]);

// SLIDE DOWN

export const slideDownStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: {                          
        opacity: 0,
        x: '0',
        y: '-50px',
      }
    }
  )

export const slideDownEnter = animation([ slideDownStyle, animIn ]);   
export const slideDownLeave = animation([ animOut, slideDownStyle ]); 

export const slideDown = trigger('slideDown', [
    transition(':enter', slideDownEnter),     
    transition(':leave', slideDownLeave),    
  ]);




