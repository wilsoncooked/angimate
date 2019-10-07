import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut, fadeUp } from 'ng-animation';


@Component({
  selector: 'app-use-animation',
  animations: [trigger('fadeOutLeft', 
    [transition(':enter', useAnimation(fadeIn, {params: { timing: '2s', tx: '400px' } })),
    transition(':leave', useAnimation(fadeOut))]
  ), fadeUp ],
  templateUrl: './use-animation.component.html',
  styleUrls: ['./use-animation.component.scss']
})
export class UseAnimationComponent implements OnInit {

  isVisible = true;

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
