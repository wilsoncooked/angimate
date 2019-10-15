import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { bounce, bounceIn,  }from 'ng-animation';

@Component({
  selector: 'app-bounce',
  animations: [ bounce, bounceIn ],
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

  bounceAnims = ['bounce']

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  
  constructor(public el: ElementRef<HTMLElement>) { }
  
  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

}
