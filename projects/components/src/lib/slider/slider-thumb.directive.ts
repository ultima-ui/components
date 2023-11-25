import { Directive, ElementRef, inject } from '@angular/core';
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
export class SliderThumbDirective {
  private _slider = inject<SliderComponent>(ULT_SLIDER);
  private _elementRef = inject(ElementRef);

  max: number;
  min: number;
  step: number;

  constructor() {
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
  }

  _onInput() {
    const input = this._elementRef.nativeElement as HTMLInputElement;
    console.log(input.value);
  }

  _onChange() {
    const input = this._elementRef.nativeElement as HTMLInputElement;
    console.log(input.value);
  }
}