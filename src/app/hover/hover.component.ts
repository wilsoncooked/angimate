import { Component, OnInit } from '@angular/core';
import { 
  hGrow, 
  hShrink, 
  hGrowSlow, 
  hShrinkSlow, 
  hGrowQuick, 
  hShrinkQuick, 
  hRotate, 
  hDown, 
  hUp, 
  hLeft, 
  hRight, 
  hSkewRight, 
  hSkewLeft, 
  hBorderFade, 
  hBounceUp,
  hBounceFwd,
  hBounceBck,
  hPush,
  hPop
} from 'ng-animation';

@Component({
  selector: 'app-hover',
  animations: [ 
    hGrow, 
    hShrink, 
    hGrowSlow, 
    hShrinkSlow, 
    hGrowQuick, 
    hShrinkQuick, 
    hRotate, 
    hDown, 
    hUp, 
    hLeft, 
    hRight,  
    hSkewRight, 
    hSkewLeft, 
    hBorderFade,
    hBounceFwd(),
    hBounceUp(),
    hBounceBck(),
    hPush,
    hPop
  ],
  templateUrl: './hover.component.html',
  styleUrls: ['./hover.component.scss']
})
export class HoverComponent implements OnInit {

  public grow = false;
  public growSlow = false;
  public growQuick = false;
  public shrink = false;
  public shrinkSlow = false;
  public shrinkQuick = false;
  public rotate = false
  public down = false;
  public up = false;
  public left = false;
  public right = false;
  public skewRight = false;
  public skewLeft = false;
  public borderFade = false;
  public bounce = false;
  public bounceFwd = false;
  public bounceBck = false;
  public push = false;
  public pop = false;


  constructor() { }

  ngOnInit() {
  }

}
