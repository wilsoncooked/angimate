import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomComponent } from './zoom/zoom.component';
import { SlideComponent } from './slide/slide.component';
import { FadeComponent } from './fade/fade.component'
import { AttentionSeekersComponent } from './attention-seekers/attention-seekers.component'
import { RotateComponent } from './rotate/rotate.component'
import { BounceComponent } from './bounce/bounce.component'
import { FlipComponent } from './flip/flip.component'
import { UseAnimationComponent } from './use-animation/use-animation.component'
import { ShakeComponent } from './shake/shake.component';
import { WobbleComponent } from './wobble/wobble.component';
import { HoverComponent } from './hover/hover.component';
import { QueriesComponent } from './queries/queries.component'

const routes: Routes = [
  { path: 'fade', component: FadeComponent, data: {animation: 'fade'} },
  { path: 'zoom', component: ZoomComponent,  data: {animation: 'zoom'} },
  { path: 'slide', component: SlideComponent,  data: {animation: 'slide'} },
  { path: 'attention-seekers', component: AttentionSeekersComponent },
  { path: 'rotate', component: RotateComponent },
  { path: 'bounce', component: BounceComponent },
  { path: 'flip', component: FlipComponent },
  { path: 'use-animation', component: UseAnimationComponent },
  { path: 'shake', component: ShakeComponent },
  { path: 'wobble', component: WobbleComponent},
  { path: 'hover', component: HoverComponent },
  { path: 'queries', component: QueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ZoomComponent, 
  FadeComponent, 
  AttentionSeekersComponent, 
  RotateComponent, 
  UseAnimationComponent, 
  BounceComponent, 
  FlipComponent,
  ShakeComponent,
  WobbleComponent,
  HoverComponent,
  QueriesComponent
]
