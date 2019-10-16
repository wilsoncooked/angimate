import { trigger, transition, useAnimation, query, state, style, animate, keyframes, stagger } from '@angular/animations';
import { animIn, animOut, queryAnimIn } from '../structure'
import { AnimOptionParams, QueryOptionAnim, enter, leave, enterLeave } from '../structure';

export function fadeList (name: string, option: Partial<AnimOptionParams> & QueryOptionAnim) {
    return trigger(name, [
    transition(':enter', 
      query(option.query, [
      useAnimation(queryAnimIn(option.stagger || '30ms'), { params: option })])),
    transition(':leave', 
      query(option.query, [
          stagger(option.stagger || '30ms', [useAnimation(animOut, { params: option })])])),
      ])
  }
  
  
  export const fadeStag = fadeList('fadeStag', { query: 'li', stagger: '300ms', transX: '40px', } );
  