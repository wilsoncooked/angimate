import { Component, OnInit } from '@angular/core';
import { lightSpeedRight, lightSpeedLeft, pulse, flash, rollLeft, rollRight, vibrate, flicker, jelloX, jelloY } from 'ng-animation';

@Component({
  selector: 'app-attention-seekers',
  animations: [ lightSpeedRight, lightSpeedLeft, pulse, flash, rollLeft, rollRight, vibrate, flicker, jelloX, jelloY ],
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss']
})
export class AttentionSeekersComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public rollLeft = true; 
  public rollRight = false; 
  public lightSpeedRight = false; 
  public lightSpeedLeft = false;
  public vibrate = false;
  public flash = false;
  public pulse = false;
  public flicker = false;
  public jelloX = false;
  public yelloY = false;

  attentionAnims = ['rollLeft', 'rollRight', 'lightSpeedRight', 'lightSpeedLeft', 'flash', 'pulse', 'vibrate', 'flicker', 'jelloX', 'jelloY']

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
    console.log(this[animName])
  }

}