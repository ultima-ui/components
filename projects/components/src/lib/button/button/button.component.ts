import {
  booleanAttribute,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
import {
  ButtonSize,
  ButtonVariant
} from '../properties';

@Component({
  selector: '[ult-button],[ultButton]',
  exportAs: 'ultButton',
  templateUrl: './button.component.html',
  styleUrls: ['button.component.css'],
  host: {
    class: 'ult-button' ,
    '[class.is-icon-only]': 'iconOnly',
    '[class.is-disabled]': 'disabled || loading',
    '[class.is-loading]': 'loading',
    '[class.is-active]': 'active',
    '[attr.disabled]': 'disabled || null'
  }
})
export class ButtonComponent implements OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input()
  set variant(variant: ButtonVariant) {
    this._variant = variant;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'button-variant', this._variant);
  }
  private _variant: ButtonVariant = 'primary';

  @Input({ transform: booleanAttribute }) iconOnly = false;
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) roundedFull = false;
  @Input({ transform: booleanAttribute }) active = false;

  @Input()
  set size(size: ButtonSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'button-size', this._size);
  }
  private _size: ButtonSize = 'default';

  @Input({ transform: booleanAttribute }) loading = false;
  @Input() loadingText = '';

  ngOnInit() {
    if (!this._elementRef.nativeElement.hasAttribute('type')) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'type', 'button');
    }

    if (!this._elementRef.nativeElement.hasAttribute('button-variant')) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'button-variant', this._variant);
    }

    if (!this._elementRef.nativeElement.hasAttribute('button-size')) {
      this._renderer.setAttribute(this._elementRef.nativeElement, 'button-size', this._size);
    }
  }
}
