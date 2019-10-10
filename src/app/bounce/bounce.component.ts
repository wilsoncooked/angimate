import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceIn, zoom }from 'ng-animation';

@Component({
  selector: 'app-bounce',
  animations: [ bounce, bounceIn, trigger('zoom', [transition('* <=> *', useAnimation(zoom))]) ],
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.scss']
})
export class BounceComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public bounce = true;
  public zoom = false;
  // public bounceIn = false;

  bounceAnims = ['bounce', 'zoom']

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
    console.log(this[animName])
  }

}
