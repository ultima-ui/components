import {
  DestroyRef,
  Directive,
  ElementRef, HostListener,
  inject,
  Input, NgZone,
  OnInit
} from '@angular/core';
import { SliderInputDirective } from './slider-input.directive';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ULT_SLIDER } from './types';
import { SliderComponent } from './slider/slider.component';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[ultSliderKnob]',
  exportAs: 'ultSliderKnob'
})
export class SliderKnobDirective implements OnInit {
  private _slider = inject<SliderComponent>(ULT_SLIDER);
  private _elementRef = inject(ElementRef);
  private _destroyRef = inject(DestroyRef);
  private _document = inject(DOCUMENT);

  @Input()
  input: SliderInputDirective;

  private _x = 0;
  private _moving = false;

  ngOnInit() {
    let _value: number;
    const stepNumbers = Math.ceil((this._slider.max - this._slider.min) / this._slider.step);
    let stepWidth = 0;

    fromEvent(this._elementRef.nativeElement, 'mousedown')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((e: PointerEvent) => {
        this._x = e.clientX;
        this._moving = true;
        _value = this._slider._value;
        stepWidth = this._slider.actualSliderWidth / stepNumbers;
        this._slider._thumbFocused = true;
      })
    ;
    fromEvent(this._document, 'mousemove')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((e: PointerEvent) => {
        if (!this._moving) {
          return;
        }

        let value = _value;
        const thumbElement = (this._elementRef.nativeElement as HTMLElement).parentElement;
        let rect = thumbElement.parentElement.getBoundingClientRect();
        const sliderCursorPosition = e.clientX - rect.left - thumbElement.getBoundingClientRect().width;
        value = this._slider.min + Math.round(sliderCursorPosition / stepWidth) * this._slider.step;

        if (e.clientX > this._x) {
          if (value > this._slider.max) {
            _value = this._slider.max;
            this._slider._setThumbPositionXByValue(_value);
            this._slider._emitChangeEvent(_value);
            return;
          }
        } else {
          if (value < this._slider.min) {
            _value = this._slider.min;
            this._slider._setThumbPositionXByValue(_value);
            this._slider._emitChangeEvent(_value);
            return;
          }
        }

        if (_value !== value) {
          _value = value;
          this._slider._setThumbPositionXByValue(_value);
          this._slider._emitChangeEvent(_value);
        }
      })
    ;
    fromEvent(this._document, 'mouseup')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(e => {
        this._moving = false;
        this._slider._thumbFocused = false;
      })
    ;
  }

  @HostListener('contextmenu', ['$event'])
  private _handleContextMenu(e: PointerEvent) {
    e.preventDefault();
    e.stopPropagation();
  }
}
