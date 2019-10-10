import { animation, trigger, transition, style, animate, keyframes, useAnimation, query, stagger } from '@angular/animations';
import { AnimateParams, enterAnime, leaveAnime } from '../anime';


export const pulseFwdStyle = 
    keyframes([
        style({ transform: 'scale(1.3)', transformOrigin: 'center', offset: 0.5, }),
        style({ transform: 'scale(1)', transformOrigin: 'center', offset: 1 }),
    ])

export const pulseFwd = trigger('pulseFwd', [
  transition(':enter', animation([ animate('500ms', pulseFwdStyle) ])),     
  transition(':leave', animation([ animate('500ms', pulseFwdStyle) ])),  
]);


export const pulseBackStyle = 
    keyframes([
        style({ transform: 'scale(0.7)', transformOrigin: 'center', offset: 0.5, }),
        style({ transform: 'scale(1)', transformOrigin: 'center', offset: 1 }),
    ])

export const pulseBack = trigger('pulseBack', [
  transition(':enter', animation([ animate('500ms', pulseBackStyle) ])),     
  transition(':leave', animation([ animate('500ms', pulseBackStyle) ])),  
]);
