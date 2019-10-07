import { Component, OnInit } from '@angular/core';
import { rollInLeft, rollInRight, lightSpeedRight, lightSpeedLeft, flash, pulse } from 'ng-animation';

@Component({
  selector: 'app-attention-seekers',
  animations: [ rollInLeft, rollInRight, lightSpeedRight, lightSpeedLeft, flash, pulse ],
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss']
})
export class AttentionSeekersComponent implements OnInit {

  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public rollInLeft = true; 
  public rollInRight = false; 
  public lightSpeedRight = false; 
  public lightSpeedLeft = false;

  attentionAnims = ['rollInLeft', 'rollInRight', 'lightSpeedRight', 'lightSpeedLeft', 'flash', 'pulse']

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