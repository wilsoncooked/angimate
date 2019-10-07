import { Component, OnInit } from '@angular/core';
import { zoom, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade } from 'ng-animation'


@Component({
  selector: 'app-zoom',
  animations: [ zoom, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade ],
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public zoom = true;
  public zoomUp = false;
  public zoomDown = false;
  public zoomLeft = false;
  public zoomRight = false;


  zoomAnims = ['zoom', 'zoomUp', 'zoomDown', 'zoomRight', 'zoomLeft', 'zoomFade']

  toggle() { 
    this.isVisible = !this.isVisible;
    this.text = !this.text;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
    console.log(this[animName])
    console.log(zoom)
  }
}
