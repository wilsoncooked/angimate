import { Component, OnInit } from '@angular/core';
import { fadeIn, slideUp, slideDown, slideRight, slideLeft, zoomIn, zoomUp, zoomDown } from 'ng-animation'
import { staggerFadeIn } from './animation'

@Component({
  selector: 'color-transition',
  animations: [ fadeIn, slideUp, slideDown, slideRight, slideLeft, staggerFadeIn, zoomIn,
    zoomUp, zoomDown ],
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
