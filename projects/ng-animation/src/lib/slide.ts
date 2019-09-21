import { animation, trigger, transition, style } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';

// Params
export interface SlideParams extends AnimeParams {
    opacity: number;
    x: string;
    y: string;
  }

// Style

export const slideStyle = (x, y) => {
    return animation(
        style({ 
          opacity: '{{ opacity }}',
          transform: 'translate({{ x }}, {{ y }})'
        }),
        {
          params: {                          
            opacity: 0,
            x,
            y,
          }
        }
      )
}

// Animation
export const transEnter = (styleName) => {
    return transition(':enter', animation([ styleName, animIn ]))
}

export const transExit = (styleName) => {
    return transition(':leave', animation([ animOut , styleName ]))
}

// SLIDE UP
export const slideUpStyle = slideStyle(0, '50px');

// Trigger with transition
export const slideUp = trigger('slideUp', [
    transEnter(slideUpStyle),    
    transExit(slideUpStyle),    
    ]); 

// SLIDE LEFT

export const slideLeftStyle = slideStyle('-50px', 0);


export const slideLeft = trigger('slideLeft', [
    transEnter(slideLeftStyle),    
    transExit(slideLeftStyle),    
    ]); 

  // SLIDE RIGHT 

  export const slideRightStyle = slideStyle('50px', 0);

  export const slideRight = trigger('slideRight', [
    transEnter(slideRightStyle),    
    transExit(slideRightStyle),    
    ]); 

// SLIDE DOWN

export const slideDownStyle = slideStyle(0, '-50px');

export const slideDown = trigger('slideDown', [
    transEnter(slideDownStyle),    
    transExit(slideDownStyle),    
    ]); 

