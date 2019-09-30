import { Component, OnInit } from '@angular/core';
import { slideUp, slideDown, slideLeft, slideRight, flipInX, flipInY } from 'ng-animation'

@Component({
  selector: 'app-slide',
  animations: [ slideUp, slideDown, slideLeft, slideRight, flipInX, flipInY ],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
