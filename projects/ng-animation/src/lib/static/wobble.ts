import { style, animate, keyframes, transition, trigger, animation, state } from '@angular/animations';
import { Easing } from '../easing';

export const wobbleKeyframes = keyframes([
  style({
    transform: 'translate(0, 0)',
  }),
  style({
    transform: 'translateX(-30px)',
  }),
  style({
    transform: 'translateX(15px)',
  }),
  style({
    transform: 'translateX(-15px)',
  }),
  style({
    transform: 'translateX(9px)',
  }),
  style({
    transform: 'translateX(-3px)',
  }),
  style({
    transform: 'translate(0, 0)',
  }),
]);

export const wobble = trigger('wobble', [
  transition('* <=> *', animate(`800ms`, wobbleKeyframes)), 
]);


export const wobbleBottomKeyframes = keyframes([
  style({
    transform: 'translate(0, 0)',
    'transform-origin': 'bottom',
  }),
  style({
    transform: 'translateX(-30px) rotate(-6deg)',
  }),
  style({
    transform: 'translateX(15px) rotate(6deg)',
  }),
  style({
    transform: 'translateX(-15px) rotate(-3.6deg)',
  }),
  style({
    transform: 'translateX(9px) rotate(2.4deg)',
  }),
  style({
    transform: 'translateX(-3px) rotate(-1.2deg)',
  }),
  style({
    transform: 'translate(0, 0)',
    'transform-origin': 'bottom',
  }),
]);


export const wobbleBottom = trigger('wobbleBottom', [
  transition('* <=> *', animate(`800ms`, wobbleBottomKeyframes)), 
]);

export const wobbleTopKeyframes = keyframes([
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
    }),
    style({
      transform: 'translateX(-30px) rotate(6deg)',
    }),
    style({
      transform: 'translateX(15px) rotate(-6deg)',
    }),
    style({
      transform: 'translateX(-15px) rotate(3.6deg)',
    }),
    style({
      transform: 'translateX(9px) rotate(-2.4deg)',
    }),
    style({
      transform: 'translateX(-3px) rotate(1.2deg)',
    }),
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'top',
    }),
  ]);
  
  export const wobbleTop = trigger('wobbleTop', [
    transition('* <=> *', animate(`800ms`, wobbleTopKeyframes)), 
  ]);

  export const wobbleLeftKeyframes = keyframes([
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'left',
    }),
    style({
      transform: 'translateY(-30px) rotate(-6deg)',
    }),
    style({
      transform: 'translateY(15px) rotate(6deg)',
    }),
    style({
      transform: 'translateY(-15px) rotate(-3.6deg)',
    }),
    style({
      transform: 'translateY(9px) rotate(2.4deg)',
    }),
    style({
      transform: 'translateY(-3px) rotate(-1.2deg)',
    }),
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'left',
    }),
  ]);
  
  export const wobbleLeft = trigger('wobbleLeft', [
    transition('* <=> *', animate(`800ms`, wobbleLeftKeyframes)), 
  ]);

  export const wobbleRightKeyframes = keyframes([
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'right',
    }),
    style({
      transform: 'translateY(-30px) rotate(6deg)',
    }),
    style({
      transform: 'translateY(15px) rotate(-6deg)',
    }),
    style({
      transform: 'translateY(-15px) rotate(3.6deg)',
    }),
    style({
      transform: 'translateY(9px) rotate(-2.4deg)',
    }),
    style({
      transform: 'translateY(-3px) rotate(1.2deg)',
    }),
    style({
      transform: 'translate(0, 0)',
      'transform-origin': 'right',
    }),
  ]);
  
  export const wobbleRight = trigger('wobbleRight', [
    transition('* <=> *', animate(`800ms`, wobbleRightKeyframes)), 
  ]);
  export const noKeyFrames = keyframes([
    style({
      transform: 'translate(20px, 0px)'
    }),
  ]);
  