import {
  booleanAttribute,
  Component,
  forwardRef, HostListener,
  inject,
  Injectable,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'any'
})
export class RadioControlRegistry {
  private _accessors: any[] = [];

  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control: NgControl, accessor: RadioComponent) {
    this._accessors.push([control, accessor]);
  }

  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor: RadioComponent) {
    for (let i = this._accessors.length - 1; i >= 0; --i) {
      if (this._accessors[i][1] === accessor) {
        this._accessors.splice(i, 1);
        return;
      }
    }
  }

  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor: RadioComponent) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }

  private _isSameGroup(controlPair: [NgControl, RadioComponent], accessor: RadioComponent): boolean {
    if (!controlPair[0].control) {
      return false;
    }

    return controlPair[0].control?.parent === accessor._control.control?.parent && controlPair[1].name === accessor.name;
  }
}

@Component({
  selector: 'ult-radio',
  exportAs: 'ultRadio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ult-radio',
    '[class.is-checked]': '_checked',
    '[class.is-focused]': '_focused',
    '[class.is-active]': '_active',
    '[class.is-disabled]': 'disabled',
    '[class.is-block]': 'block',
  }
})
export class RadioComponent implements ControlValueAccessor, OnInit {
  private _injector = inject(Injector);
  private _registry = inject(RadioControlRegistry);

  @Input() name!: string;
  @Input() formControlName!: string;
  @Input() value: any;
  @Input({ transform: booleanAttribute }) disabled!: boolean;
  @Input({ transform: booleanAttribute }) block = false;

  _control!: NgControl;
  _checked!: boolean;
  _focused!: boolean;
  _active = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }

  writeValue(value: any) {
    this._checked = this.value === value;
  }

  registerOnChange(fn: any) {
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: BooleanInput) {
    this.disabled = coerceBooleanProperty(isDisabled);
  }

  @HostListener('click')
  check() {
    this._checked = true;
    this.onChange(this.value);
    this.onTouched();
  }

  fireUncheck(value: any): void {
    this.writeValue(value);
  }

  @HostListener('mousedown')
  private _handleMousedown() {
    this._active = true;
  }

  @HostListener('mouseup')
  private _handleMouseup() {
    this._active = false;
  }

  private _checkName(): void {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      throw new Error(`
        If you define both a name and a formControlName attribute on your radio component, their values
        must match. Ex: <ult-radio formControlName="food" name="food">
      `);
    }

    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
}
