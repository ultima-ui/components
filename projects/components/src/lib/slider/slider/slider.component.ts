import {
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
import { FORM_FIELD } from '../../forms/properties';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

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
  @Input({ transform: booleanAttribute }) showSteps = true;
  @Input({ transform: booleanAttribute }) disabled = false;

  @ViewChild('slider', { static: true }) private _slider: ElementRef<HTMLElement>;
  @ViewChild('thumb', { static: true }) private _thumb: ElementRef<HTMLElement>;

  @Output() readonly changed = new EventEmitter();

  _stepsPoints: number[] = [];

  private _sliderWidth = 0;
  private _thumbWidth = 0;
  private _moving = false;
  private _clientX = 0;
  private _offset = 0;
  private _tmpOffset = 0;

  _onChange: any = () => {};
  _onTouched: any = () => {};

  get id() {
    return this._formField?.id || null;
  }

  ngOnInit() {
    if (this.step > 0) {
      const pointsCount = Math.ceil((this.max - this.min) / this.step);

      for (let i = 1; i <= pointsCount; i++) {
        const width = 100 / pointsCount * i;
        this._stepsPoints.push(width);
      }
    }

    this._thumbWidth = this._thumb.nativeElement.getBoundingClientRect().width;
    this._tmpOffset = this._offset;

    fromEvent(this._thumb.nativeElement, 'mousedown')
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((event: any) => {
        this._moving = true;
        this._sliderWidth = this._slider.nativeElement.getBoundingClientRect().width;
        this._clientX = event.clientX;
      })
    ;
    fromEvent(this._document, 'mousemove')
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((event: any) => {
        if (this._moving) {
          let offset = this._offset + event.clientX - this._clientX;

          if (this._stepsPoints.length > 0) {
            const offsetPercents = Math.ceil(offset / this._sliderWidth * 100);
            const stepPercents = this.step / (this.max - this.min) * 100;
            const stepWidthPx = this._sliderWidth * this.step / (this.max - this.min);
            offset = Math.round(offsetPercents / stepPercents) * stepWidthPx - this._thumbWidth / 2;
          }

          if (offset <= 0) {
            offset = 0;
          }

          if (offset >= this._sliderWidth - this._thumbWidth) {
            offset = this._sliderWidth - this._thumbWidth;
          }

          this._renderer.setStyle(this._thumb.nativeElement, 'inset-inline-start', offset + 'px');
          this._tmpOffset = offset;
          this._emitChangeEvent(offset);
        }
      })
    ;
    fromEvent(this._document, 'mouseup')
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(event => {
        if (this._moving) {
          this._offset = this._tmpOffset;
          this._moving = false;
        }
      })
    ;

    this._calcOffsetByValue();
  }

  @HostListener('mousedown', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    this._sliderWidth = this._slider.nativeElement.getBoundingClientRect().width;
    this._clientX = event.clientX;

    if (target !== this._thumb.nativeElement) {
      let offset = event.clientX - this._slider.nativeElement.getBoundingClientRect().x - this._thumbWidth / 2;

      if (this._stepsPoints.length > 0) {
        const offsetPercents = Math.ceil(offset / this._sliderWidth * 100);
        const stepPercents = this.step / (this.max - this.min) * 100;
        const stepWidthPx = this._sliderWidth * this.step / (this.max - this.min);
        offset = Math.round(offsetPercents / stepPercents) * stepWidthPx - this._thumbWidth / 2;
      }

      if (offset <= 0) {
        offset = 0;
      }

      if (offset >= this._sliderWidth - this._thumbWidth) {
        offset = this._sliderWidth - this._thumbWidth;
      }

      this._renderer.setStyle(this._thumb.nativeElement, 'inset-inline-start', offset + 'px');
      this._offset = offset;
      this._moving = true;
      this._emitChangeEvent(offset);
    }
  }

  writeValue(value: any) {
    this.value = value;
    this._calcOffsetByValue();
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

  private _emitChangeEvent(offset: number) {
    const sliderWidth = this._sliderWidth - this._thumbWidth;

    if (offset <= 0) {
      offset = 0;
    }

    if (offset >= sliderWidth) {
      offset = sliderWidth;
    }

    let percent = offset / sliderWidth;
    let value = percent <= .5 ?
      Math.ceil(percent * (this.max - this.min) + this.min) :
      Math.floor(percent * (this.max - this.min) + this.min)
    ;

    if (value !== this.value) {
      this.value = value;
      this._onChange(this.value);
      this.changed.emit(this.value);
    }
  }

  private _calcOffsetByValue() {
    if (this.value) {
      const sliderWidth = this._slider.nativeElement.getBoundingClientRect().width;
      const percent = (this.value - this.min) / (this.max - this.min);
      let offset = sliderWidth * percent - this._thumbWidth / 2;

      if (offset <= 0) {
        offset = 0;
      }

      if (offset >= sliderWidth - this._thumbWidth / 2) {
        offset = sliderWidth - this._thumbWidth;
      }

      this._offset = offset;
      this._renderer.setStyle(this._thumb.nativeElement, 'inset-inline-start', offset + 'px');
    }
  }
}
