import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'green');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'transparent');
  }
}
