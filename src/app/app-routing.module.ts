import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorTransitionComponent } from './color-transition/color-transition.component';
import { ZoomComponent } from './zoom/zoom.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  // { path: '/', component: ColorTransitionComponent, data: {animation: 'fade'} },
  { path: 'color-transition', component: ColorTransitionComponent, data: {animation: 'fade'} },
  { path: 'zoom', component: ZoomComponent,  data: {animation: 'zoom'} },
  { path: 'slide', component: SlideComponent,  data: {animation: 'slide'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ColorTransitionComponent, ZoomComponent
]
