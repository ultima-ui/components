import {
  booleanAttribute,
  Component,
  EventEmitter,
  forwardRef, HostListener,
  Input,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ult-checkbox',
  exportAs: 'ultCheckbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ],
  host: {
    class: 'ult-checkbox',
    '[class.is-checked]': 'checked || indeterminate',
    '[class.is-focused]': '_focused',
    '[class.is-active]': '_active',
    '[class.is-disabled]': 'disabled',
    '[class.is-block]': 'block',
    '[class.is-indeterminate]': 'indeterminate',
  }
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input({ transform: booleanAttribute }) checked: boolean;
  @Input({ transform: booleanAttribute }) indeterminate!: boolean;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) block = false;
  @Input() checkIconCode = '&check;';
  @Input() intermediateIconCode = '&#8212;';
  @Input() name!: string;
  @Input() formControlName!: string;

  @Output() readonly valueChange = new EventEmitter<boolean>();

  _focused = false;
  _active = false;

  get api() {
    return {
      isChecked: () => this.checked,
      isActive: () => this._active,
      isFocused: () => this._focused,
      setFocused: (value: boolean) => this._focused = value
    };
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: BooleanInput) {
    this.checked = coerceBooleanProperty(value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  @HostListener('click')
  check() {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.onTouched();
    this.valueChange.emit(this.checked);
  }

  @HostListener('mousedown')
  private _handleMousedown() {
    this._active = true;
  }

  @HostListener('mouseup')
  private _handleMouseup() {
    this._active = false;
  }
}
