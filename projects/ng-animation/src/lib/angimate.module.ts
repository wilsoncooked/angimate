import { NgModule } from '@angular/core';
import { HoverDirective } from './hover/hover.directive'

const directives = [
  HoverDirective
]

@NgModule({
  declarations: [ directives ],
  imports: [
  ],
  exports: [ directives ] 
})
export class NgAnimationModule { }
