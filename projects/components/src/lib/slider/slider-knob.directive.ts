import { Directive, ElementRef, HostListener, inject, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[ultSliderKnob]',
  exportAs: 'ultSliderKnob'
})
export class SliderKnobDirective implements OnInit {
  private _elementRef = inject(ElementRef);
  private _moving = false;

  private _x = 0;
  private _y = 0;

  ngOnInit() {
  }

  @HostListener('pointerdown', ['$event'])
  private _handlePointerDown(e: PointerEvent) {
    this._x = e.clientX;
    this._y = e.clientY;
    this._moving = true;
  }

  @HostListener('pointermove', ['$event'])
  private _handlePointerMove(e: PointerEvent) {
    if (!this._moving) {
      return;
    }

    const dx = e.clientX - this._x;
    const dy = e.clientY - this._y;
    const containerWidth = this._elementRef.nativeElement.parentNode.parentNode.getBoundingClientRect().width;

  }

  @HostListener('pointerup', ['$event'])
  private _handlePointerUp(e: PointerEvent) {
    this._moving = false;
  }
}
