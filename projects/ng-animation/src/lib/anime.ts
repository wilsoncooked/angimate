import { animation, animate, useAnimation } from '@angular/animations';
import { Easing } from './easing';


export interface AnimeParams {
  duration: string | number;
  delay: string | number;
  easing: string;
}

/** Default params for entering and exiting */
export const animParams = {
  duration: '1s',
  delay: '0s',
  easing: Easing.easeInOutcubic,
}
/** Default params for entering animations */
export const animInParams = {
  ...animParams,
  easing: Easing.easeOutcubic
};
/** Default params for leaving animations */
export const animOutParams = {
  ...animParams,
  easing: Easing.easeIncubic
};


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

