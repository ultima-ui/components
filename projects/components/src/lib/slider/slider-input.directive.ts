import { Directive, ElementRef, HostListener, inject } from '@angular/core';
import { ULT_SLIDER } from "./types";

@Directive({
  selector: 'input[ultSliderInput]',
  exportAs: 'ultSliderInput',
  host: {
    'class': 'ult-slider-input',
    'type': 'range',
    '(change)': '_onChange()',
    '(input)': '_onInput()',
    '[attr.step]': 'step',
    '[attr.min]': 'min',
    '[attr.max]': 'max'
  }
})
export class SliderInputDirective {
  private _slider = inject<any>(ULT_SLIDER);
  private _elementRef = inject(ElementRef);

  max = this._slider.max;
  min = this._slider.min;
  step = this._slider.step;

  get nativeElement(): HTMLInputElement {
    return this._elementRef.nativeElement;
  }

  @HostListener('pointerdown')
  private _handleMouseDown() {
    this._slider._thumbFocused = true;
    this._slider.cdr.markForCheck();
  }

  @HostListener('pointerup')
  private _handleMouseUp() {
    this._slider._thumbFocused = false;
    this._slider.cdr.markForCheck();
  }

  _onInput() {
    const input = this.nativeElement;
    const value = +input.value;
    this._slider._setThumbPositionXByValue(value);
    this._slider._emitChangeEvent(value);
  }

  _onChange() {
  }
}
