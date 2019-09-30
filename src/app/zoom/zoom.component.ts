import { Component, OnInit } from '@angular/core';
import { zoomIn, zoomUp, zoomDown, zoomRight, zoomLeft, pulse } from 'ng-animation'


@Component({
  selector: 'app-zoom',
  animations: [ zoomIn,
    zoomUp, zoomDown, zoomRight, zoomLeft, pulse ],
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  isVisible = true;

  toggle() {
    this.isVisible = !this.isVisible;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
