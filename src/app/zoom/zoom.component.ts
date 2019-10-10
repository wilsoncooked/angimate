import { Component, OnInit } from '@angular/core';
import { zoomFwd, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade, zoomFadeUp, zoomFadeDown, zoomFadeLeft, zoomFadeRight, zoomBack, zoomFwdBack, zoomBackFwd } from 'ng-animation'


@Component({
  selector: 'app-zoom',
  animations: [ zoomFwd, zoomUp, zoomDown, zoomRight, zoomLeft, zoomFade, zoomFadeUp, zoomFadeDown, zoomFadeLeft, zoomFadeRight, zoomBack, zoomFwdBack, zoomBackFwd  ],
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  checked = true;
  isVisible = true;
  text = true;
  selectedAnim: string; 
  public zoomFwd = true;
  public zoomUp = false;
  public zoomDown = false;
  public zoomLeft = false;
  public zoomRight = false;
  public zoomFade = false;
  public zoomFadeUp = false;
  public zoomFadeDown = false;
  public zoomFadeLeft =  false;
  public zoomFadeRight =  false;
  public zoomBack = false;
  public zoomFwdBack = false;
  public zoomBackFwd = false;


  zoomAnims = ['zoomFwd', 'zoomUp', 'zoomDown', 'zoomRight', 'zoomLeft', 'zoomFade', 'zoomFadeUp', 'zoomFadeDown', 'zoomFadeLeft', 'zoomFadeRight', 'zoomBack', 'zoomFwdBack' ,'zoomBackFwd']

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
  }
}
