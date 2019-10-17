import { Component, OnInit } from '@angular/core';
// import { state, trigger, style, useAnimation, animation, transition, animate } from '@angular/animations';
import { fade, fadeUp, fadeDown, fadeRight, fadeLeft } from 'ng-animation'

@Component({
  selector: 'app-fade',
  animations: [ fade, fadeUp, fadeDown, fadeRight, fadeLeft ],
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.scss']
})
export class FadeComponent implements OnInit {

  checked = true;
  isVisible = true;
  public state = 'fade';


  fadeAnims = [ 'fade','fadeUp', 'fadeDown', 'fadeRight', 'fadeLeft']

  toggle() {  
    this.isVisible = !this.isVisible;
  }

next = '';

prepareNextAnimation(next: string) {
  this.state = '';
  this.next = next;
}
displayNextAnimation() {
  if (this.state) { return; }
  this.state = this.next;
  // console.log(this.next)
  console.log(this.state)
  this.next = '';
}
  
  constructor() { }

  ngOnInit() {
  }

  // animateText(anim:string) {
  //   // this.selectedAnim = animName;
  //   this.state = `${anim}`;
  //   console.log(this.state)
  //   // console.log(this[animName])
  // }

}
