import { Component, OnInit } from '@angular/core';
import { wobbleTop, wobbleBottom, wobbleLeft, wobbleRight } from 'ng-animation';

@Component({
  selector: 'app-wobble',
  animations: [ wobbleTop, wobbleBottom, wobbleLeft, wobbleRight ],
  templateUrl: './wobble.component.html',
  styleUrls: ['./wobble.component.scss']
})
export class WobbleComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public wobbleBottom = false;
  public wobbleTop = true;

  wobbleAnims = [ 'wobbleTop', 'wobbleBottom', 'wobbleLeft', 'wobbleRight' ]

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

