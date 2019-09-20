import { animation, animate, useAnimation } from '@angular/animations';


export interface AnimeParams {
  duration: string | number;
  delay: string | number;
  easing: string;
}

export const anim = animation(
  animate('{{ duration }} {{ delay }} {{ easing }}'), // Animation
  {
    params: {
      duration: '300ms',
      delay: '0s',
      easing: 'ease-in-out'
    }
  }
);

/** Animation something in the page */
export const animIn = useAnimation(anim, { params: { easing: 'ease-out' }})
export const animOut = useAnimation(anim, { params: { easing: 'ease-in' }})
