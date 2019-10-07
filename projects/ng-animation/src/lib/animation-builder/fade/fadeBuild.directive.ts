// import { ElementRef, Directive, Input, OnInit } from '@angular/core';
// import { AnimationBuilder, AnimationPlayer, AnimationFactory } from '@angular/animations';
// import { fadeTemplate } from './fadeTemplate';
// // import { FadeParams } from '../../static/fade';
// import { AnimationFactoryParams } from '../types';

// @Directive({
//   selector: '[fade]'
// })
// export class FadeDirective implements OnInit {

//   private factory: AnimationFactory;
//   public player: AnimationPlayer;

//   // @Input() set query(child: string) {
//   //   this.createFactory({ child });
//   //   this.createPlayer();
//   // }

//   // @Input() set stagger(debounce: any) {
//   //   this.createFactory({ debounce });
//   //   this.createPlayer();
//   // }

//     // before was fadeParams but threw and error???
//   @Input('fade') set params(params: any) {
//     // Partial<FadeParams> & Partial<AnimationFactoryParams> = {}) {
//     // const { child, debounce } = params;
//     // if (!this.factory || child || debounce) {
//     //   this.createFactory({ child, debounce });
//     // }
//     // this.createPlayer(params);
//   }

  
//   constructor(private el: ElementRef, private builder: AnimationBuilder) {}

//   ngOnInit () {
//   }

//   ngOnDestroy() {
//       // this is when the whole com
//     //   this.player.destroy()
//   }

//   private createFactory(params: any = {}) {
//     const animation = fadeTemplate(params);
//     this.factory = this.builder.build(animation);
//   }

// //   private createPlayer(params: Partial<FadeParams> = {}) {
// //     if (!this.factory) {
// //       throw new Error('No factory available. Build one first');
// //     }
// //     if (this.player) {
// //       this.player.destroy();
// //     }
// //     this.player = this.factory.create(this.el.nativeElement, { params });
// //   }
// }

// // AnimationBuilder is an injectible animation service

// // Yeah of moo says = a player object is returned each time an animation is run and that player can be used to control the state of the animation.???

// // eventually learn about set

// // so far translates x & y, opacity, duration, option of a stagger, choose the child
// // could add scale, repeat, timing function

// // maybe the only unchangeable action is ngOnInit? 
// // toggle
// // onclick
// // onhover
// // ngOnDestroy for :leave
