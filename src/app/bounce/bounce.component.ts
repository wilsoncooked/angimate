import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { bounce, bounceDown, bounceLeft, bounceRight, bounceIn, bounceInOut }from 'ng-animation';

@Component({
  selector: 'app-bounce',
  animations: [ bounce,  bounceDown, bounceLeft, bounceRight, bounceIn, bounceInOut ],
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
  public bounceIn = false;
  public bounceInOut = false;
  public bounceDown = false;
  public bounceLeft = false;
  public bounceRight = false;

  bounceAnims = ['bounce', 'bounceDown', 'bounceLeft', 'bounceRight', 'bounceIn', 'bounceInOut' ]

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
