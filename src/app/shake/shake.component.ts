import { Component, OnInit } from '@angular/core';
import { shakeX, shakeXLonger, shakeY, shakeYLonger, shakePivot, shakeTop, shakeBottom, shakePivotLonger } from 'ng-animation';

@Component({
  selector: 'app-shake',
  animations: [ shakeX, shakeXLonger, shakeY, shakeYLonger, shakePivot, shakeTop, shakeBottom, shakePivotLonger ],
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.scss']
})
export class ShakeComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public shakeX = true;
  public shakeXLonger = false;
  public shakeY = false;


  shakeAnims = ['shakeX', 'shakeY', 'shakeXLonger', 'shakeYLonger', 'shakePivot', 'shakeTop', 'shakeBottom', 'shakePivotLonger']

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

