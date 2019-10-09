import { Component, OnInit } from '@angular/core';
import { zoom, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade, zoomFadeUp, zoomFadeDown, zoomFadeLeft, zoomFadeRight } from 'ng-animation'


@Component({
  selector: 'app-zoom',
  animations: [ zoom, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade, zoomFadeUp, zoomFadeDown, zoomFadeLeft, zoomFadeRight  ],
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
  public zoomFade = false;
  public zoomFadeUp = false;
  public zoomFadeDown = false;
  public zoomFadeLeft =  false;
  public zoomFadeRight =  false;


  zoomAnims = ['zoom', 'zoomUp', 'zoomDown', 'zoomRight', 'zoomLeft', 'zoomFade', 'zoomFadeUp', 'zoomFadeDown', 'zoomFadeLeft', 'zoomFadeRight']

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
