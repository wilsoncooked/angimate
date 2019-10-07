import { animation, animate, useAnimation } from '@angular/animations';
import { Easing } from './easing';



export interface AnimateParams {
  animationParams: string;
}

export interface OtherAnimateParams {
  durations: string;
  delay: string;
  movement: string;
}

export const enterAnime = `300ms ${Easing.easeOutCubic}`;
export const leaveAnime = `300ms ${Easing.easeInCubic}`;

export const enterAnimeMd = `600ms ${Easing.easeOutCubic}`;
export const leaveAnimeMd = `600ms ${Easing.easeInCubic}`;

export const enterAnimeSl = `900ms ${Easing.easeOutCubic}`;
export const leaveAnimeSl = `900ms ${Easing.easeInCubic}`;

export const anim = animation(
  animate('{{ duration }} {{ delay }} {{ easing }}'), // Animation
  {
    params: {
      duration: '2s',
      delay: '0s',
      easing: Easing.easeInOutCubic,
    }
  }
);


/** Animation something in the page */
export const animIn = useAnimation(anim, { params: { easing: Easing.easeOutCubic }})
export const animOut = useAnimation(anim, { params: { easing: Easing.easeInCubic }})

