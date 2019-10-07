import { Component, OnInit } from '@angular/core';
import { fadeL, fadeUp, fadeDown, fadeRight, fadeLeft } from 'ng-animation'

const  fadeAnimations = [ fadeL, fadeUp, fadeDown, fadeRight, fadeLeft]

@Component({
  selector: 'app-fade',
  animations: [ fadeAnimations ],
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.scss']
})
export class FadeComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public fadeL = true;
  public fadeUp = false;
  public fadeDown = false;
  public fadeLeft = false;
  public fadeRight = false;


  fadeAnims = ['fadeL', 'fadeUp', 'fadeDown', 'fadeRight', 'fadeLeft' ] 

  toggle() { 
    this.isVisible = !this.isVisible;
    this.text = !this.text;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

}
