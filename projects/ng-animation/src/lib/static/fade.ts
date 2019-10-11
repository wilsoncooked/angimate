import { trigger, transition, useAnimation, query } from '@angular/animations';
import { animIn, animOut } from './structure'

export const fadeIn = animIn;
export const fadeOut = animOut;


export function fadeParams (fadeName, transX, transY) {
  return trigger(fadeName, [
  transition(':enter', useAnimation(fadeIn, { params: { transX, transY } })),
  transition(':leave', useAnimation(fadeOut, { params: { transX, transY } }))
]);
}

// FADE //

export const fadeL = fadeParams('fadeL', 0, 0);
export const fadeUp = fadeParams('fadeUp', 0, '50px');
export const fadeDown = fadeParams('fadeDown', 0, '-50px');
export const fadeLeft = fadeParams('fadeLeft', '-50px', 0);
export const fadeRight = fadeParams('fadeRight', '50px', 0);

export const fadeUpLarge = fadeParams('fadeUp', 0, '1000px');
export const fadeDownLarge = fadeParams('fadeDown', 0, '-1000px');
export const fadeLeftLarge = fadeParams('fadeLeft', '-1000px', 0);
export const fadeRightLarge = fadeParams('fadeRight', '1000px', 0);

export function fadeQuery(child: string) {
  return trigger('fadeTry', [
    transition(':enter', query(child, useAnimation(animIn))
  )])
}



// // animation player

// export interface FadePlayerParams extends AnimeParams {
//   opacity: number;
//   y: string | number;
//   duration: number;
// }

// const fadePlayerStyle = style({ opacity: '{{ opacity }}', transform: 'translateY({{ y }}px)' });
// const animateIn = animate('{{ duration }}ms cubic-bezier(0.23, 1, 0.32, 1)');

// // Function is used for list
// export const fadeFn = (FadePlayerParams) => animation(
//   query(FadePlayerParams.selector, [fadePlayerStyle, stagger(FadePlayerParams.stagger, animateIn)])
// );
// // Constante is used for single element
// export const fade = animation([fadePlayerStyle, animateIn]);