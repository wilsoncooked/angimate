import { Component, OnInit } from '@angular/core';
import { fadeIn } from './animation';
import { slideUp, slideLeft, slideRight, slideDown } from 'ng-animation'

@Component({
  selector: 'color-transition',
  animations: [ fadeIn, slideUp, slideLeft, slideRight, slideDown ],
  templateUrl: './color-transition.component.html',
  styleUrls: ['./color-transition.component.scss']
})
export class ColorTransitionComponent implements OnInit {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }

  constructor() { }

  ngOnInit() {
  }

}
