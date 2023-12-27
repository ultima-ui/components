import { AfterContentInit, Directive, ElementRef, inject, Renderer2 } from '@angular/core';
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