import {
  AfterViewInit,
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  inject, Input,
  OnDestroy, OnInit,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { isPlatformServer } from '@angular/common';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[ultContentEditableControl][formControlName],[ultContentEditableControl][formControl],[ultContentEditableControl][ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContentEditableControlDirective),
      multi: true,
    }
  ],
  host: {
    '[attr.contenteditable]': 'true'
  }
})
export class ContentEditableControlDirective implements ControlValueAccessor, AfterViewInit, OnDestroy {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input() contentType: 'html' | 'text' = 'text';

  private _observer = new MutationObserver(() => {
    setTimeout(() => {
      this._onChange(
        ContentEditableControlDirective.processValue(
          this.contentType === 'html' ?
            this._elementRef.nativeElement.innerHTML : this._elementRef.nativeElement.innerText,
        )
      );
    });
  });
  private _onTouched = () => {};
  private _onChange: (value: string) => void = () => {};

  @HostListener('blur')
  private _handleBlur() {
    this._onTouched();
  }

  ngAfterViewInit() {
    fromEvent(this._elementRef.nativeElement, 'paste')
      .subscribe((event: any) => {
        event.preventDefault();
        event.stopPropagation();
        this._renderer.setProperty(
          this._elementRef.nativeElement,
          'innerText',
          event.clipboardData.getData('text'),
        );
      })
    ;
    this._observer.observe(this._elementRef.nativeElement, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    this._observer.disconnect();
  }

  writeValue(value: string | null) {
    this._renderer.setProperty(
      this._elementRef.nativeElement,
      'innerHTML',
      ContentEditableControlDirective.processValue(value),
    );
  }

  registerOnChange(onChange: (value: string) => void) {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: () => void) {
    this._onTouched = onTouched;
  }

  setDisabledState(disabled: BooleanInput) {
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      'contenteditable',
      String(!coerceBooleanProperty(disabled)),
    );
  }

  private static processValue(value: unknown): string {
    const processed = String(value == null ? '' : value);

    return processed.trim() === '<br>' ? '' : processed;
  }
}
