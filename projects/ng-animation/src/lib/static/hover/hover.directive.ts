import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover]'
})
  export class HoverDirective {
    constructor() { }
  
    private isHover = false;
  
    get over(): boolean {
      return this.isHover;
    }
  
    @Input() set hover(isHover: boolean) {
      this.isHover = isHover;
    }
  
    @HostListener('mouseenter') onMouseEnter() {
      this.isHover = true;
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.isHover = false;
    }
  
  }

