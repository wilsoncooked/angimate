import { trigger, transition, useAnimation, query, state, style, animate, keyframes, stagger } from '@angular/animations';
import { animIn, animOut, queryAnimIn, QueryOptionAnim, AnimOptionParams } from './structure'

export function queryChild (name: string, option: Partial<AnimOptionParams> & QueryOptionAnim) {
    return trigger(name, [
    transition(':enter', 
      query(option.query, [
      useAnimation(queryAnimIn(option.stagger || '30ms'), { params: option })])),
    transition(':leave', 
      query(option.query, [
          stagger(option.stagger || '30ms', [useAnimation(animOut, { params: option })])])),
      ])
  }
  
  
  export const qsfade = queryChild('qsfade', { query: 'li', stagger: '1s'});
  export const qsfadeLeft = queryChild('qsfadeLeft', { query: 'li', transX: '-50px' });
  export const qsfadeRight = queryChild('qsfadeRight', { query: 'li', transX: '50px' });
  export const qsfadeUp = queryChild('qsfadeUp', { query: 'li', transY: '50px' });
  export const qsfadeDown = queryChild('qsfadeDown', { query: 'li', transY: '-50px' });