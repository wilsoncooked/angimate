import { useAnimation, trigger, transition } from '@angular/animations';
import { fadeInAnim, FadeParams, SlideParams, slideUpAnim } from 'ng-animation';

// Custom parameters
const fadeParams: Partial<FadeParams> = {
  duration: '3s',
  opacity: 0,
}

// Custom animation
const useFadeIn = useAnimation(fadeInAnim, { params: fadeParams })
export const fadeIn = trigger('fadeIn', [
  transition(':enter', useFadeIn)
]);

const slideParams: Partial<SlideParams> = {
    duration: '6s',
    y: '-100px',
}

const useSlideUp = useAnimation(slideUpAnim, { params: slideParams })
export const slideUp = trigger('slideUp', [
  transition(':enter', useSlideUp)
]);

