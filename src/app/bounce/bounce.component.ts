import { Component, OnInit } from '@angular/core';
import { bounce, bounceIn }from 'ng-animation';

@Component({
  selector: 'app-bounce',
  animations: [ bounce, bounceIn],
  templateUrl: './bounce.component.html',
  styleUrls: ['./bounce.component.scss']
})
export class BounceComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public bounce = true;
  // public bounceIn = false;

  bounceAnims = ['bounce']

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
