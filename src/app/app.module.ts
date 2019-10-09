import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SideNavigationComponent } from './navigation/side-navigation/side-navigation.component';
import { ZoomComponent } from './zoom/zoom.component';
import { SlideComponent } from './slide/slide.component';
import { FadePlayerComponent } from './fade-player/fade-player.component';
import { FadeComponent } from './fade/fade.component';
import { AttentionSeekersComponent } from './attention-seekers/attention-seekers.component';
import { NgAnimationModule } from 'ng-animation';
import { PausePlayComponent } from './pause-play/pause-play.component';
import { RotateComponent } from './rotate/rotate.component';
import { FlipComponent } from './flip/flip.component';
import { BounceComponent } from './bounce/bounce.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { UseAnimationComponent } from './use-animation/use-animation.component';
import { ShakeComponent } from './shake/shake.component';
import { WobbleComponent } from './wobble/wobble.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    ZoomComponent,
    SlideComponent,
    FadePlayerComponent,
    FadeComponent,
    AttentionSeekersComponent,
    PausePlayComponent,
    RotateComponent,
    FlipComponent,
    BounceComponent,
    DynamicComponent,
    UseAnimationComponent,
    ShakeComponent,
    WobbleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgAnimationModule, // Import your NgAnimationModule here to make the directive available to all Components declared in this Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }







