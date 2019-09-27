import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ColorTransitionComponent } from './color-transition/color-transition.component'
import { SideNavigationComponent } from './navigation/side-navigation/side-navigation.component';
import { ZoomComponent } from './zoom/zoom.component';
import { SlideComponent } from './slide/slide.component';
import { FadePlayerComponent } from './fade-player/fade-player.component';
import { FadeComponent } from './fade/fade.component';
import { AttentionSeekersComponent } from './attention-seekers/attention-seekers.component';
import { NgAnimationModule } from 'ng-animation';



@NgModule({
  declarations: [
    AppComponent,
    ColorTransitionComponent,
    SideNavigationComponent,
    ZoomComponent,
    SlideComponent,
    FadePlayerComponent,
    FadeComponent,
    AttentionSeekersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgAnimationModule // Import your NgAnimationModule here to make the directive available to all Components declared in this Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
