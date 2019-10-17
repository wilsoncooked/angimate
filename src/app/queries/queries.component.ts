import { Component, OnInit } from '@angular/core';
import { qsfade, qsfadeLeft, qsfadeRight, qsfadeUp, qsfadeDown } from 'ng-animation';

@Component({
  selector: 'app-queries',
  animations: [ qsfade, qsfadeLeft, qsfadeRight, qsfadeUp, qsfadeDown ],
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {


  checked = true;
  isVisible = true;
  selectedAnim: string; 
  public qsfade = true;
  public qsfadeLeft = false;
  public qsfadeRight = false;
  public qsfadeUp = false;
  public qsfadeDown = false;

  queryAnims = ['qsfade', 'qsfadeLeft', 'qsfadeRight', 'qsfadeUp', 'qsfadeDown' ]

  toggle() { 
    this.isVisible = !this.isVisible;
  }
  
  constructor() { }

  ngOnInit() {
  }

  animate(animName:string) {
    // this.selectedAnim = animName;
    this[animName] = !this[animName];
  }

}
