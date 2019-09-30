import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { rainbowFlash, flash, FadeDirective, pulse } from 'ng-animation';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-attention-seekers',
  animations: [ rainbowFlash, flash, pulse ],
  templateUrl: './attention-seekers.component.html',
  styleUrls: ['./attention-seekers.component.scss']
})
export class AttentionSeekersComponent implements OnInit, AfterViewInit {
  //cast element into the directive
  // hepls access the play - property of fade directive
  @ViewChild(FadeDirective, { static: true }) fade: FadeDirective; 

  fadeParams = {
    child: 'h1',
    debounce: '30ms',
    y: '200px', 
    opacity: 1  
  }

  constructor(private router: Router) { }

  // Hook triggered when component is built (Inputs && Viewchild are not yet ready)
  ngOnInit() {
  }

  // Hook triggerd when view is built (Inputs && Viewchild are ready)
  ngAfterViewInit() {
    this.fade.player.play();
  }

  goTo() {
    const subject = new Subject();
    subject.asObservable().subscribe(() => {
      subject.complete()
      this.router.navigate(['/fade']);
    })
    this.fade.player.onDone(() => subject.next())
    this.fade.player.play();
  }


  play() {
    this.fade.player.play();
  }

  pause() {
    this.fade.player.pause()
  }
}
