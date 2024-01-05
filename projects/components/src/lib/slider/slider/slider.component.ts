import {
  afterNextRender,
  booleanAttribute, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter, forwardRef,
  inject,
  Input,
  numberAttribute,
  OnInit,
  Output, Renderer2,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FORM_FIELD } from '../../forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { LABEL_DISPLAY, ULT_SLIDER } from "../types";

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
    '[class.has-label]': 'showLabel',
    '[class.hover]': '_hovered || _thumbActivated',
  }
})
export class SliderComponent implements OnInit, ControlValueAccessor {
  readonly _formField = inject<any>(FORM_FIELD, { optional: true });
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);
  readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('slider', { static: true })
  private _slider: ElementRef<HTMLElement>;

  @ViewChild('thumb', { static: true })
  private _thumb: ElementRef<HTMLElement>;

  @ViewChild('trackActive', { static: true })
  private _trackActive: ElementRef<HTMLElement>;

  @Input({ transform: booleanAttribute })
  showLabel = false;

  @Input()
  set labelDisplay(labelDisplay: LABEL_DISPLAY) {
    this._labelDisplay = labelDisplay;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-slider-label-display', labelDisplay);
  }
  _labelDisplay: LABEL_DISPLAY = 'hover';

  @Input({ transform: numberAttribute, required: true })
  max: number;

  @Input({ transform: numberAttribute, required: true })
  min: number;

  @Input({ transform: numberAttribute })
  step: number;

  @Input({ transform: numberAttribute })
  value: number;

  @Input({ transform: booleanAttribute })
  showTickMarks = false;

  @Input({ transform: booleanAttribute })
  disabled = false;

  @Output()
  readonly changed = new EventEmitter();

  @Output()
  readonly valueChange = new EventEmitter();

  _tickMarks: number[] = [];
  _hovered = false;
  _thumbActivated = false;

  private _sliderWidth = 0;
  private _thumbWidth = 0;
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

  get trackActive(): HTMLElement {
    return this._trackActive.nativeElement;
  }

  constructor() {
    afterNextRender(() => {
      this._sliderWidth = this._slider.nativeElement.getBoundingClientRect().width;
      this._thumbWidth = this._thumb.nativeElement.getBoundingClientRect().width;
      this._actualSliderWidth = this._sliderWidth - this._thumbWidth;
      this._setThumbPositionXByValue(this.value);
    });
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-slider-label-display', this._labelDisplay);

    if (this.step > 1) {
      const tickMarksCount = Math.ceil((this.max - this.min) / this.step);

      for (let i = 1; i <= tickMarksCount; i++) {
        const width = 100 / tickMarksCount * i;
        this._tickMarks.push(width);
      }
    }
  }

  writeValue(value: any) {
    if (+value === this.value) {
      return;
    }

    this.value = +value;
    this._setThumbPositionXByValue(this.value);
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
    this.value = value;
    this.valueChange.emit(value);
    this.changed.emit(value);
    this._onChange(value);
  }

  _setThumbPositionXByValue(value: number) {
    const positionX = this._calculatePositionXByValue(value);
    this._renderer.setStyle(this.thumbElement, 'left', positionX + 'px');
    this._renderer.setStyle(this.trackActive, 'width', (positionX + this._thumbWidth / 2) + 'px');
  }

  private _calculatePositionXByValue(value: number): number {
    const actualSliderWidth = this.actualSliderWidth;
    const distance = this.max - this.min;
    const percent = (value - this.min) / distance;

    return Math.ceil(actualSliderWidth * percent);
  }

  _thumbMouseEnter() {
    this._hovered = true;
  }

  _thumbMouseLeave() {
    if (this._thumbActivated) {
      return;
    }

    this._hovered = false;
  }
}
