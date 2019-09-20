import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorTransitionComponent } from './color-transition/color-transition.component';


const routes: Routes = [
  { path: 'color-transition', component: ColorTransitionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ColorTransitionComponent, 
]
