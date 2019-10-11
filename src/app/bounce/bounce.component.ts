import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { trigger, transition, useAnimation, state, style, animate, } from '@angular/animations';
import { bounce, bounceIn, zoom, hover, fadeQuery }from 'ng-animation';

@Component({
  selector: 'app-bounce',
  animations: [ bounce, bounceIn, hover(), fadeQuery('h3') ],
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.scss'],
})
export class BounceComponent implements OnInit {

  @HostBinding('@.disabled')
  public animationsDisabled = false;

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public bounce = true;
  public lala = false;
  public isActive = false;
  public fade = false;

  bounceAnims = ['bounce', 'zoom', 'lala', 'fade']

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  
  constructor(public el: ElementRef<HTMLElement>) { }

//  onAnimationEvent ( event: AnimationEvent ) {
//   this.zoom = !this.zoom
//   console.log(this.zoom);
//   console.log(event);
//   // console.warn(`From: ${event.triggerName}`);
//   // console.warn(`To: ${event.toState}`);

// }
  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

}
