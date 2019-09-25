import { animation, trigger, transition, style } from '@angular/animations';
import { animIn, animOut, AnimeParams } from './anime';


// Params
export interface ZoomParams extends AnimeParams {
  opacity: number;
  scale: string;
  x: string;
  y: string;
}

// Z O O M   I N //

export const zoomStyle = animation(
  style({ 
      opacity: '{{ opacity }}',
      transform: 'scale({{ scale }})'
    }),    
    { 
      params: { 
        opacity: '0',
        scale: '0.1'       
        }
    }  
);

export const zoomInAnim = animation([ zoomStyle, animIn ]); 
export const zoomOutAnim = animation([ animOut, zoomStyle ]); 

export const zoomIn = trigger('zoomIn', [
  transition(':enter', zoomInAnim),
  transition(':leave', zoomOutAnim), 
]);

// Z O O M   U P //

export const zoomUpStyle = animation(
    style({ 
        opacity: '{{ opacity }}',
        transform: 'translate({{ x }}, {{ y }}) scale({{ scale }})',
      }),    
      { 
        params: { 
          opacity: '0',
          scale: '0.1',
          x: '0',
          y: '50px'      
          }
      }  
  );
  
  export const zoomUp = trigger('zoomUp', [
    transition(':enter', animation([ zoomUpStyle, animIn ])),
    transition(':leave', animation([ animOut, zoomUpStyle ])), 
  ]);

  // Animation


  // Z O O M   D O W N //

export const zoomDownStyle = animation(
    style({ 
        opacity: '{{ opacity }}',
        transform: 'translate({{ x }}, {{ y }}) scale({{ scale }})',
      }),    
      { 
        params: { 
          opacity: '0',
          scale: '0.1',
          x: '0',
          y: '-50px'      
          }
      }  
  );
  
  export const zoomDown = trigger('zoomDown', [
    transition(':enter', animation([ zoomDownStyle, animIn ])),
    transition(':leave', animation([ animOut, zoomDownStyle ])), 
  ]);

    // Z O O M   L E F T //

export const zoomLeftStyle = animation(
    style({ 
        opacity: '{{ opacity }}',
        transform: 'translate({{ x }}, {{ y }}) scale({{ scale }})',
      }),    
      { 
        params: { 
          opacity: '0',
          scale: '0.1',
          x: '-50px',
          y: '0'      
          }
      }  
  );
  
  export const zoomLeft = trigger('zoomLeft', [
    transition(':enter', animation([ zoomLeftStyle, animIn ])),
    transition(':leave', animation([ animOut, zoomLeftStyle ])), 
  ]);
  
    // Z O O M   R I G H T //

    export const zoomRightStyle = animation(
        style({ 
            opacity: '{{ opacity }}',
            transform: 'translate({{ x }}, {{ y }}) scale({{ scale }})',
          }),    
          { 
            params: { 
              opacity: '0',
              scale: '0.1',
              x: '50px',
              y: '0'      
              }
          }  
      );
      
      export const zoomRight = trigger('zoomRight', [
        transition(':enter', animation([ zoomRightStyle, animIn ])),
        transition(':leave', animation([ animOut, zoomRightStyle ])), 
      ]);
      
      