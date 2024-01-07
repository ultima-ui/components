import {
  afterNextRender,
  booleanAttribute,
  Component, ContentChild,
  ElementRef, HostListener,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';
import { FORM_FIELD, FormField, InputSize } from '../properties';
import { InputPrefixDirective } from '../input-prefix.directive';
import { InputSuffixDirective } from '../input-suffix.directive';

@Component({
  selector: 'ult-input,[ultInput]',
  exportAs: 'ultInput',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  host: {
    'class': 'ult-input',
    '[class.is-invalid]': 'invalid',
    '[class.is-focused]': 'focused',
    '[class.is-rounded-full]': 'roundedFull',
    '[class.is-disabled]': 'disabled',
  }
})
export class InputComponent  implements OnChanges {
  private _formField = inject<FormField>(FORM_FIELD, { optional: true });
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input()
  id = '';

  @Input({ transform: booleanAttribute })
  invalid = false;

  @Input({ transform: booleanAttribute })
  roundedFull = false;

  @Input({ transform: booleanAttribute })
  disabled = false;

  @Input({ transform: booleanAttribute }) focused = false;

  @Input()
  size: InputSize = 'default';

  @ContentChild(InputPrefixDirective) prefixRef!: InputPrefixDirective;
  @ContentChild(InputSuffixDirective) suffixRef!: InputSuffixDirective;

  constructor() {
    if (!this.id && this._formField) {
      this.id = this._formField.id;
    }

    afterNextRender(() => {
      if (this.id) {
        this._renderer.setAttribute(this._getInputElement(), 'id', this.id);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['size']?.currentValue) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-input-size', this.size);
    }
  }

  @HostListener('click')
  private _handleClick() {
    this._getInputElement().focus({ preventScroll: true });
  }

  private _getInputElement() {
    const input = this._elementRef.nativeElement.querySelector('input');

    if (input) {
      return input;
    }

    return this._elementRef.nativeElement;
  }
}
