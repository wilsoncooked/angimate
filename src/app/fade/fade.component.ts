import { Component, OnInit } from '@angular/core';
// import { state, trigger, style, useAnimation, animation, transition, animate } from '@angular/animations';
import { fade, fadeUp, fadeDown, fadeRight, fadeLeft, fadeStag } from 'ng-animation'

@Component({
  selector: 'app-fade',
  animations: [ fade, fadeUp, fadeDown, fadeRight, fadeLeft, fadeStag ],
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.scss']
})
export class FadeComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public fade = true;
  public fadeUp = false;
  public fadeDown = false;
  public fadeLeft = false;
  public fadeRight = false;
  public fadeStag = false;


  fadeAnims = [ 'fade','fadeUp', 'fadeDown', 'fadeRight', 'fadeLeft', 'fadeStag' ]

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
