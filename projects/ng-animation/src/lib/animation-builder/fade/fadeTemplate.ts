import { style, animate, query, stagger, animation } from '@angular/animations';
import { anim } from '../../anime';
import { AnimationFactoryParams } from '../types';

// Fade Animation with default params

export const fadeTemplate = ({child, debounce}?: Partial<AnimationFactoryParams>) => animation(
  query(child || '*', [
    style({ opacity: '{{ opacity }}', transform: 'translate({{ x }}, {{ y }})'}),
    stagger(debounce || 50, [ anim ])
//animate params
  ]), {
  params: { 
    x: '0px',
    y: '200px', 
    opacity: 0 
  }
});

export const animIn = (styles, defaultParams = {}) => {

  let myAnimation: any = style(styles);

  if (styles.debounce) {
    const myStagger = stagger(styles.debounce, [anim])
  }

  if (styles.child) {
    myAnimation = query(styles.child, [myAnimation, myStagger])
  }

  return animation(myAnimation, { params: defaultParams })
}


const styles = {
  child: '*',
  debounce: '30ms',
  opacity: 0
}