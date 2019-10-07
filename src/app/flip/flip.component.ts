import { Component, OnInit } from '@angular/core';
import { flipX, flipY } from 'ng-animation'

@Component({
  selector: 'app-flip',
  animations: [ flipX, flipY ],
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.scss']
})
export class FlipComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public flipX = true;
  public flipUpY = false;


  flipAnims = ['flipX', 'flipY']

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
    console.log(this[animName])
    // console.log(flip)
  }
}
