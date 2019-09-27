import { ElementRef, Directive, Input, OnInit } from '@angular/core';
import { AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { fadeTemplate } from './fadeTemplate'

@Directive({
  selector: '[fade]'
})
export class FadeDirective implements OnInit {

  private _player: AnimationPlayer;

  @Input() fadeTimingStyle: string;
  @Input() fadeChild: string;
  @Input('delayFade') fadeDelay: string;

    // before was fadeParams but threw and error???
  @Input('fade') set params(params: any) {
    if (this._player) {
        this._player.destroy();
        }
    }

  constructor(private el: ElementRef, private builder: AnimationBuilder) {}

  ngOnInit () {
    const timingStyle = this.fadeTimingStyle ?  this.fadeTimingStyle : '300ms' 
    const child = this.fadeChild ? this.fadeChild : 'h1'
    const delay = this.fadeDelay ? this.fadeDelay : '300ms'
    
    const fadeAnimation = fadeTemplate({ child, delay, timingStyle });
    const factory = this.builder.build(fadeAnimation);

    this._player = factory.create(this.el.nativeElement, this.params)
    this._player.play();
  }

  ngOnDestroy() {
      // this is when the whole com
    //   this._player.destroy()
  }

}

// AnimationBuilder is an injectible animation service

// Yeah of moo says = a player object is returned each time an animation is run and that player can be used to control the state of the animation.???

// eventually learn about set

// so far translates x & y, opacity, duration, option of a stagger, choose the child
// could add scale, repeat, timing function

// maybe the only unchangeable action is ngOnInit? 
// toggle
// onclick
// onhover
// ngOnDestroy for :leave
