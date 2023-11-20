import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { ALERT, AlertVariant } from '../alert.properties';
import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { AlertIconDirective } from '../alert-icon.directive';

@Component({
  selector: 'ult-alert',
  exportAs: 'ultAlert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  providers: [
    {
      provide: ALERT,
      useExisting: AlertComponent
    }
  ],
  host: {
    'class': 'ult-alert',
    '[class.is-bordered]': 'bordered',
  }
})
export class AlertComponent implements  OnInit {
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @ContentChild(AlertIconDirective) iconRef!: AlertIconDirective;

  @Input() data: any;
  @Input()
  set autoClose(value: NumberInput) {
    clearTimeout(this._autoCloseTimeout);
    value = coerceNumberProperty(value);

    if (!value) {
      return;
    }

    clearTimeout(this._autoCloseTimeout);
    this._autoCloseTimeout = setTimeout(() => {
      this._close();
    }, value);
  }
  private _autoCloseTimeout: any;

  @Input()
  set variant(variant: AlertVariant) {
    this._variant = variant;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'alert-variant', this._variant);
  }
  get variant(): AlertVariant {
    return this._variant;
  }
  private _variant: AlertVariant = 'primary';

  @Input() bordered = false;

  @Output() readonly closed = new EventEmitter<any>();

  get api() {
    return {
      close: () => this._close()
    };
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'alert-variant', this._variant);
  }

  private _close() {
    clearTimeout(this._autoCloseTimeout);
    this.closed.emit(this.data);
    this._elementRef.nativeElement.remove();
  }
}
