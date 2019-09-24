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


@NgModule({
  declarations: [
    AppComponent,
    ColorTransitionComponent,
    SideNavigationComponent,
    ZoomComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
