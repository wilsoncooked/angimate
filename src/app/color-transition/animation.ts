import { useAnimation, trigger, transition, query, stagger } from '@angular/animations';
import { fadeInAnim, FadeParams } from 'ng-animation';

// Custom parameters
const fadeParams: Partial<FadeParams> = {
  duration: '3s',
  opacity: 0,
}

// Custom animation
const useFadeIn = useAnimation(fadeInAnim, { params: fadeParams })
const queryEnter = query('li', [
  stagger(300, useFadeIn)
]);

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition(':enter', queryEnter),
]);



// const slideParams: Partial<SlideParams> = {
//     duration: '6s',
//     y: '-100px',
// }

// const useSlideUp = useAnimation(slideUpAnim, { params: slideParams })
// export const slideUp = trigger('slideUp', [
//   transition(':enter', useSlideUp)
// ]);

