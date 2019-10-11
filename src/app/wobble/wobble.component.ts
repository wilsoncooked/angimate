import { Component, OnInit } from '@angular/core';
import { wobbleTop, wobbleBottom, wobbleLeft, wobbleRight, swingLeft, swingRight } from 'ng-animation';

@Component({
  selector: 'app-wobble',
  animations: [ wobbleTop, wobbleBottom, wobbleLeft, wobbleRight, swingLeft, swingRight ],
  templateUrl: './wobble.component.html',
  styleUrls: ['./wobble.component.scss']
})
export class WobbleComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public wobbleBottom = false;
  public wobbleTop = true;
  public wobbleLeft = false;
  public wobbleRight = false;
  public swingLeft = false;
  public swingRight = false;

  wobbleAnims = [ 'wobbleTop', 'wobbleBottom', 'wobbleLeft', 'wobbleRight', 'swingLeft', 'swingRight' ]

  toggle() { 
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

} 

