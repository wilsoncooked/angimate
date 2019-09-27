import { NgModule } from '@angular/core';
import { FadeDirective } from './animation-builder/fade/fadeBuild.directive'

// Here it means that FadeAnimationDirective can be used on all components that are also declared by this module.
// In this case, no components are declared.
// To make the Directive available you need also to export it, and import NgAnimationModule into another Module

const directives = [
  FadeDirective, 
]

@NgModule({
  declarations: [ directives ],
  imports: [
  ],
  exports: [ directives ] 
})
export class NgAnimationModule { }
