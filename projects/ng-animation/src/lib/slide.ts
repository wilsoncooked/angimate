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
      params: {                         //default 
        opacity: 0,
        x: '-50px',
        y: '0',
      }
    }
  )

export const slideLeftEnter = animation([ slideLeftStyle, animIn ]);   // slideStyle => *
export const slideLeftLeave = animation([ animOut, slideLeftStyle ]); // * => slideStyle

export const slideLeft = trigger('slideLeft', [
    transition(':enter', slideLeftEnter),     // When <element @fade> enters the page
    transition(':leave', slideLeftLeave),    // When <element @fade> leaves the page
  ]);

  // SLIDE RIGHT 

  export const slideRightStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: {                         //default 
        opacity: 0,
        x: '50px',
        y: '0',
      }
    }
  )

export const slideRightEnter = animation([ slideRightStyle, animIn ]);   // slideStyle => *
export const slideRightLeave = animation([ animOut, slideRightStyle ]); // * => slideStyle

export const slideRight = trigger('slideRight', [
    transition(':enter', slideRightEnter),     // When <element @fade> enters the page
    transition(':leave', slideRightLeave),    // When <element @fade> leaves the page
  ]);

// SLIDE DOWN

export const slideDownStyle = animation(
    style({ 
      opacity: '{{ opacity }}',
      transform: 'translate({{ x }}, {{ y }})'
    }),
    {
      params: {                         //default 
        opacity: 0,
        x: '0',
        y: '-50px',
      }
    }
  )

export const slideDownEnter = animation([ slideDownStyle, animIn ]);   // slideStyle => *
export const slideDownLeave = animation([ animOut, slideDownStyle ]); // * => slideStyle

export const slideDown = trigger('slideDown', [
    transition(':enter', slideDownEnter),     // When <element @fade> enters the page
    transition(':leave', slideDownLeave),    // When <element @fade> leaves the page
  ]);




