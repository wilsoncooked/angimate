import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'ng-animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'side-navigation',
  animations: [
    slideInAnimation
  ],
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  opened = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
