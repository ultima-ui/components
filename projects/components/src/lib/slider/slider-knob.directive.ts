import {
  DestroyRef,
  Directive,
  ElementRef,
  inject,
  Input,
  OnInit
} from '@angular/core';
import { SliderInputDirective } from './slider-input.directive';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ULT_SLIDER } from './types';
import { SliderComponent } from './slider/slider.component';

@Directive({
  selector: '[ultSliderKnob]',
  exportAs: 'ultSliderKnob'
})
export class SliderKnobDirective implements OnInit {
  private _slider = inject<SliderComponent>(ULT_SLIDER);
  private _elementRef = inject(ElementRef);
  private _destroyRef = inject(DestroyRef);

  @Input()
  input: SliderInputDirective;

  @Input('value')
  _value: number;

  private _x = 0;
  private _y = 0;
  private _moving = false;

  ngOnInit() {
    fromEvent(this._elementRef.nativeElement, 'mousedown')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((e: PointerEvent) => {
        this._x = e.clientX;
        this._y = e.clientY;
        this._moving = true;
      })
    ;
    fromEvent(document, 'mousemove')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe((e: PointerEvent) => {
        if (!this._moving) {
          return;
        }

        const oldValue = +this._value;
        const thumbElement = (this._elementRef.nativeElement as HTMLElement).parentElement;
        const thumbLeftPosition = parseInt((this._elementRef.nativeElement as HTMLElement).parentElement.style.left);
        let rect = thumbElement.parentElement.getBoundingClientRect();
        const sliderCursorPosition = e.clientX - rect.left - thumbElement.getBoundingClientRect().width;

        if ((sliderCursorPosition < 0 && thumbLeftPosition <= 0) || sliderCursorPosition - thumbElement.getBoundingClientRect().width > this._slider.actualSliderWidth) {
          return;
        }

        const prevValue = this._value - this._slider.step;
        const nextValue = this._value + this._slider.step;
        const prevValuePosition = this._slider._calculatePositionXByValue(prevValue);
        const nextValuePosition = this._slider._calculatePositionXByValue(nextValue);
        const stepNumbers = Math.ceil(this._slider.max / this._slider.step);
        const stepWidth = this._slider.actualSliderWidth / stepNumbers;

        if (sliderCursorPosition > nextValuePosition - stepWidth / 2) {
          this._value = nextValue;
        } else if (sliderCursorPosition < prevValuePosition - stepWidth / 2) {
          this._value = prevValue;
        }

        if (oldValue !== this._value) {
          this._slider._setThumbPositionXByValue(nextValue);
          this._slider._emitChangeEvent(nextValue);
        }
      })
    ;
    fromEvent(document, 'mouseup')
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      )
      .subscribe(e => {
        this._moving = false;
      })
    ;
  }

  // @HostListener('contextmenu', ['$event'])
  // private _handleContextMenu(e: PointerEvent) {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }
}
