import {
  afterNextRender,
  booleanAttribute,
  Component, DestroyRef,
  ElementRef,
  EventEmitter, forwardRef, HostListener,
  inject,
  Input,
  numberAttribute,
  OnInit,
  Output, Renderer2,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FORM_FIELD } from '../../forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ULT_SLIDER } from "../types";

@Component({
  selector: 'ult-slider',
  exportAs: 'ultSlider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true
    },
    {
      provide: ULT_SLIDER,
      useExisting: forwardRef(() => SliderComponent),
      multi: false
    }
  ],
  host: {
    'class': 'ult-slider',
    '[class.is-disabled]': 'disabled',
  }
})
export class SliderComponent implements OnInit, ControlValueAccessor {
  readonly _formField = inject<any>(FORM_FIELD, { optional: true });
  private _destroyRef = inject(DestroyRef);
  private _renderer = inject(Renderer2);
  private _document= inject(DOCUMENT);

  @Input({ transform: numberAttribute, required: true }) max: number;
  @Input({ transform: numberAttribute, required: true }) min: number;
  @Input({ transform: numberAttribute }) step: number;
  @Input({ transform: numberAttribute }) value: number;
  @Input({ transform: booleanAttribute }) showTickMarks = false;
  @Input({ transform: booleanAttribute }) disabled = false;

  @ViewChild('slider', { static: true }) private _slider: ElementRef<HTMLElement>;
  @ViewChild('thumb', { static: true }) private _thumb: ElementRef<HTMLElement>;

  @Output() readonly changed = new EventEmitter();
  @Output() readonly valueChange = new EventEmitter();

  _tickMarks: number[] = [];

  private _sliderWidth = 0;
  private _thumbWidth = 0;
  private _moving = false;
  private _clientX = 0;
  private _offset = 0;
  private _tmpOffset = 0;
  private _halfOfThumbWidth = 0;
  private _actualSliderWidth = 0;

  _onChange: any = () => {};
  _onTouched: any = () => {};

  get id() {
    return this._formField?.id || null;
  }

  get actualSliderWidth(): number {
    return this._actualSliderWidth;
  }

  get thumbElement(): HTMLElement {
    return this._thumb.nativeElement;
  }

  constructor() {
    afterNextRender(() => {
      this._sliderWidth = this._slider.nativeElement.getBoundingClientRect().width;
      this._thumbWidth = this._thumb.nativeElement.getBoundingClientRect().width;
      this._halfOfThumbWidth = this._thumbWidth / 2;
      this._actualSliderWidth = this._sliderWidth - this._thumbWidth;
      this._setThumbPositionXByValue(this.value);
    });
  }

  ngOnInit() {
  }

  writeValue(value: any) {
    this.value = +value;
    // this._calcOffsetByValue();
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {
    this._onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  _emitChangeEvent(value: number) {
    if (value === this.value) {
      return;
    }

    this.valueChange.emit(value);
    this.changed.emit(value);
  }

  _setThumbPositionXByValue(value: number) {
    const positionX = this._calculatePositionXByValue(value);
    this._renderer.setStyle(this.thumbElement, 'left', positionX);
  }

  private _calculatePositionXByValue(value: number): string {
    const actualSliderWidth = this.actualSliderWidth;
    const distance = this.max - this.min;
    const percent = value / distance;

    return Math.ceil(actualSliderWidth * percent) + 'px';
  }
}
