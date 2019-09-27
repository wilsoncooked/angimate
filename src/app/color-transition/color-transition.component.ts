import { Component, OnInit } from '@angular/core';
import { staggerFadeIn } from './animation'

@Component({
  selector: 'color-transition',
  animations: [ staggerFadeIn ],
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
