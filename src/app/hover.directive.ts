import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit{

  @Input() color: string = 'green';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element);
   }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "white");
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "white");
  }


}
