import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import {AnimationBuilder, style, trigger, transition, useAnimation, animate, query, stagger, animation } from '@angular/animations';

const fade = ({child, delay}) => animation(
  query(child, [
    //but this seems to be the first state?
    style({ opacity: '{{ opacity }}', transform: 'translateY({{ y }})', color: '{{ color }}' }),
    stagger(delay, [ animate('0.5s') ])
  ])
);

const zoom = ({child}) => animation(
  query(child, animate('{{ duration }}',
    style({ color: '{{ color }}', opacity: '{{ opacity }}', transform: 'scale({{ scale }})' }),
  )
)
)

// <h1 fade></h1>

// @Directive({
//   selector: 'fade',
// })
// export class FadeAnimationDirective {

//   constructor(private el: ElementRef, private builder: AnimationBuilder) {}

//   ngOnInit() {}
// }

@Component({
  selector: 'fade-player',
  templateUrl: './fade-player.component.html',
  styleUrls: ['./fade-player.component.scss'],
  animations: []
})
export class FadePlayerComponent implements OnInit {

  // @ViewChild is a property decorator that configures a view query
  @ViewChild('myAnimation', { static: true }) myAnimation: ElementRef;
  @ViewChild('myOtherAnimation', { static: true }) myOtherAnimation: ElementRef;

  constructor(public builder: AnimationBuilder) {}

  ngOnInit() {
    // const params = {
    //   opacity: 0,
    //   y: 50,
    //   duration: 400,
    // };
    const animation1 = fade({ child: 'h1', delay: '300ms' });
    const player1 = this.builder.build(animation1).create(this.myAnimation.nativeElement, 
      { params: 
        { 
          y: '100px', 
          color: 'orange', 
          opacity: 0.5 
        }});
    const animation2 = zoom({ child: 'h2'});
    // factory = this.builder.build()
    // creates the animation = .create
    const player2 = this.builder.build(animation2).create(this.myOtherAnimation.nativeElement, 
      { params: 
        { 
          color: 'blue', 
          opacity: 1, 
          scale: '1', 
          duration: '1000ms' 
        }});
    player1.play();
    player2.play();
    // player1.onDone(() => player1.play())
  }
}

// Isnt a child of the router animation so animation starts at same time as the router instead of waiting to start after router is finished
// If people have router animations they need to account for the delay
// Or is there a way for angular to listen to the end of the router animation and send a boolean to then be recieved by the animation player

// Make a directive per animation
//web animation player