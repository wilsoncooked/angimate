import { animation, animate, useAnimation } from '@angular/animations';
import { Easing } from './easing';


export interface AnimeParams {
  duration: string | number;
  delay: string | number;
  easing: string;
}

export const anim = animation(
  animate('{{ duration }} {{ delay }} {{ easing }}'), // Animation
  {
    params: {
      duration: '2s',
      delay: '0s',
      easing: Easing.easeInOutcubic,
    }
  }
);

/** Animation something in the page */
export const animIn = useAnimation(anim, { params: { easing: Easing.easeOutcubic }})
export const animOut = useAnimation(anim, { params: { easing: Easing.easeIncubic }})
