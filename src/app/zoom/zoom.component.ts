import { Component, OnInit } from '@angular/core';
import { zoomIn, zoomUp, zoomDown, zoomRight, zoomLeft } from 'ng-animation'


@Component({
  selector: 'app-zoom',
  animations: [ zoomIn,
    zoomUp, zoomDown, zoomRight, zoomLeft ],
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
