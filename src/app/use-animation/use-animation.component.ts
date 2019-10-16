import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
// import {  fadeUp } from 'ng-animation';


@Component({
  selector: 'app-use-animation',
  // animations: [ fadeUp ],
  templateUrl: './use-animation.component.html',
  styleUrls: ['./use-animation.component.scss']
})
export class UseAnimationComponent implements OnInit {

  isVisible = true;

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
