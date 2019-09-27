import { Component, OnInit } from '@angular/core';
import { rainbowFlash, flash } from 'ng-animation'

@Component({
  selector: 'app-attention-seekers',
  animations: [ rainbowFlash, flash ],
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss']
})
export class AttentionSeekersComponent implements OnInit {

  delay = '2s'
  
  fadeParams = { params: {
     y: '200px', 
    opacity: 1  
  }
}

  constructor() { }

  ngOnInit() {
  }

}
