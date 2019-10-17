import { trigger, transition, useAnimation, query, state, style, animate, keyframes, stagger } from '@angular/animations';
import { animIn, animOut, queryAnimIn } from '../structure'
import { AnimOptionParams, QueryOptionAnim } from '../structure';

export function queryList (name: string, option: Partial<AnimOptionParams> & QueryOptionAnim) {
    return trigger(name, [
    transition(':enter', 
      query(option.query, [
      useAnimation(queryAnimIn(option.stagger || '30ms'), { params: option })])),
    transition(':leave', 
      query(option.query, [
          stagger(option.stagger || '30ms', [useAnimation(animOut, { params: option })])])),
      ])
  }
  
  
  export const qsfade = queryList('qsfade', { query: 'li', stagger: '1s'});
  export const qsfadeLeft = queryList('qsfadeLeft', { query: 'li', transX: '-50px' });
  export const qsfadeRight = queryList('qsfadeRight', { query: 'li', transX: '50px' });
  export const qsfadeUp = queryList('qsfadeUp', { query: 'li', transY: '50px' });
  export const qsfadeDown = queryList('qsfadeDown', { query: 'li', transY: '-50px' });