import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pause-play',
  templateUrl: './pause-play.component.html',
  styleUrls: ['./pause-play.component.scss']
})
export class PausePlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  play: boolean = false;
  clickEvent(){
      this.play = !this.play;       
  }

}
