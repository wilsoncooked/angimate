import { Component, OnInit } from '@angular/core';
import { animation, trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-pause-play',
  animations: [ 
    trigger('check', [
      transition(':enter', [
        style({ 'stroke-dasharray': 190, 'stroke-dashoffset': 190 }), animate('600ms cubic-bezier(.9,.24,.02,1.06)')
      ])])
  ],
  templateUrl: './pause-play.component.html',
  styleUrls: ['./pause-play.component.scss']
})
export class PausePlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // play: boolean = false;
  // clickEvent(){
  //     this.play = !this.play;       
  // }
  public isVisible = true;

  toggle() { 
    this.isVisible = !this.isVisible;
  }

}
