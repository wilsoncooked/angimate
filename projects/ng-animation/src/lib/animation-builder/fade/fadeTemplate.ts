import { style, animate, query, stagger, animation } from '@angular/animations';

// Fade Animation with default params

export const fadeTemplate = ({child, delay, timingStyle}) => animation(
    query(child, [
      style({ opacity: '{{ opacity }}', transform: 'translate({{ x }}, {{ y }})'}),
      stagger(delay, [ animate(timingStyle) ])
    ]), {
    params: { 
      x: '0px',
      y: '200px', 
      opacity: 0 
    }
  });