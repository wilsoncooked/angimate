import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZoomComponent } from './zoom/zoom.component';
import { SlideComponent } from './slide/slide.component';
import { FadePlayerComponent} from './fade-player/fade-player.component'
import { FadeComponent } from './fade/fade.component'
import { AttentionSeekersComponent } from './attention-seekers/attention-seekers.component'
import { PausePlayComponent } from './pause-play/pause-play.component'

const routes: Routes = [
  { path: 'fade', component: FadeComponent, data: {animation: 'fade'} },
  { path: 'zoom', component: ZoomComponent,  data: {animation: 'zoom'} },
  { path: 'slide', component: SlideComponent,  data: {animation: 'slide'} },
  { path: 'fade-player', component: FadePlayerComponent,  data: {animation: 'fade-player'} },
  { path: 'attention-seekers', component: AttentionSeekersComponent },
  { path: 'svg-icons', component: PausePlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ZoomComponent, FadePlayerComponent, FadeComponent, AttentionSeekersComponent, PausePlayComponent
]
