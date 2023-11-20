import {
  booleanAttribute,
  Component,
  ElementRef, EventEmitter,
  forwardRef,
  HostListener,
  inject,
  Input, Output,
  Renderer2
} from '@angular/core';
import { SwitchSize } from '../properties';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  BooleanInput,
  coerceBooleanProperty
} from '@angular/cdk/coercion';

@Component({
  selector: 'ult-switch',
  exportAs: 'ultSwitch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ult-switch',
    '[class.is-focused]': 'api.isFocused()',
    '[class.is-checked]': 'api.isChecked()',
    '[class.is-active]': 'api.isActive()',
    '[class.is-disabled]': 'disabled',
  }
})
export class SwitchComponent implements ControlValueAccessor {
  private _focused = false;
  private _checked = false;
  private _active = false;
  private _size: SwitchSize = 'default';
  private _renderer = inject(Renderer2);
  private _elementRef = inject(ElementRef);

  @Input({ transform: booleanAttribute }) checked: boolean;
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input() name!: string;
  @Input() formControlName!: string;

  @Input()
  set size(size: SwitchSize) {
    this._size = size;
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-switch-size', this._size);
  }

  @Output() readonly valueChange = new EventEmitter<boolean>();

  onChange: any = () => {};
  onTouched: any = () => {};

  get api() {
    return {
      isChecked: () => this._checked,
      isActive: () => this._active,
      isFocused: () => this._focused,
      setFocused: (value: boolean) => this._focused = value
    };
  }

  ngOnInit() {
    this._renderer.setAttribute(this._elementRef.nativeElement, 'ult-switch-size', this._size);
  }

  writeValue(value: BooleanInput): void {
    this._checked = coerceBooleanProperty(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput): void {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  toggle() {
    this._checked = !this._checked;
    this.onChange(this._checked);
    this.onTouched();
    this.valueChange.emit(this._checked);
  }

  @HostListener('mousedown')
  _handleMouseDown() {
    this._active = true;
  }

  @HostListener('mouseup')
  _handleMouseUp() {
    this._active = false;
  }
}
