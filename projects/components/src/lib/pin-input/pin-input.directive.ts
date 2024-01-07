import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[ultPinInput]'
})
export class PinInputDirective implements OnInit {
  private _elementRef = inject(ElementRef);
  private _renderer = inject(Renderer2);
  private _placeholder: string;

  @Input()
  index: number;

  @Input()
  acceptOnly: RegExp;

  get api() {
    return {
      focus: () => {
        this._elementRef.nativeElement.focus();
      },
      nativeElement: this._elementRef.nativeElement
    }
  }

  ngOnInit() {
    this._placeholder = (this._elementRef.nativeElement as HTMLInputElement).getAttribute('placeholder');
  }

  @HostListener('focus', ['$event'])
  private _handleFocus() {
    this._renderer.removeAttribute(this._elementRef.nativeElement, 'placeholder');
  }

  @HostListener('blur', ['$event'])
  private _handleBlur() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'placeholder', this._placeholder);
  }
}
