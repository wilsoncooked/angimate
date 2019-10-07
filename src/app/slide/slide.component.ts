import { Component, OnInit } from '@angular/core';
import { slideUp, slideDown, slideRight, slideLeft } from 'ng-animation';

@Component({
  selector: 'app-slide',
  animations: [ slideUp, slideDown, slideRight, slideLeft ],
   templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public slideUp = true;
  public slideDown = false;
  public slideLeft = false;
  public slideRight = false;


  slideAnims = ['slideUp', 'slideDown', 'slideRight', 'slideLeft']

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
