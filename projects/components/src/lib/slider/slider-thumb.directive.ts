import { AfterContentInit, Directive, ElementRef, HostListener, inject } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { ULT_SLIDER } from "./types";

@Directive({
  selector: 'input[ultSliderThumb]',
  exportAs: 'ultSliderThumb',
  host: {
    'class': 'ult-slider-input',
    'type': 'range',
    '(change)': '_onChange()',
    '(input)': '_onInput()',
    '[attr.step]': 'step',
    '[attr.max]': 'max',
    '[attr.min]': 'min'
  }
})
export class SliderThumbDirective implements AfterContentInit {
  private _slider = inject<SliderComponent>(ULT_SLIDER);
  private _elementRef = inject(ElementRef);

  max: number;
  min: number;
  step: number;

  @HostListener('mousedown')
  private _handleMouseDown() {
    this._slider._thumbActivated = true;
    this._slider.cdr.markForCheck();
  }

  @HostListener('mouseup')
  private _handleMouseUp() {
    this._slider._thumbActivated = false;
    this._slider.cdr.markForCheck();
  }

  _onInput() {
    const input = this._elementRef.nativeElement as HTMLInputElement;
    const value = +input.value;
    this._slider._setThumbPositionXByValue(value);
    this._slider._emitChangeEvent(value);
  }

  _onChange() {
  }

  ngAfterContentInit() {
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
  }
}
