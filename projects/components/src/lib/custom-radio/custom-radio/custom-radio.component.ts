import {
  booleanAttribute,
  Component,
  forwardRef,
  HostListener,
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
export class CustomRadioControlRegistry {
  private _accessors: any[] = [];

  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control: NgControl, accessor: CustomRadioComponent) {
    this._accessors.push([control, accessor]);
  }

  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor: CustomRadioComponent) {
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
  select(accessor: CustomRadioComponent) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }

  private _isSameGroup(controlPair: [NgControl, CustomRadioComponent], accessor: CustomRadioComponent): boolean {
    if (!controlPair[0].control) {
      return false;
    }

    return controlPair[0].control?.parent === accessor._control.control?.parent && controlPair[1].name === accessor.name;
  }
}

@Component({
  selector: 'ult-custom-radio',
  exportAs: 'ultCustomRadio',
  templateUrl: './custom-radio.component.html',
  styleUrls: ['./custom-radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomRadioComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ult-custom-radio',
    '[class.is-checked]': '_checked',
    '[class.is-disabled]': 'disabled',
  }
})
export class CustomRadioComponent implements ControlValueAccessor, OnInit {
  private _injector = inject(Injector);
  private _registry = inject(CustomRadioControlRegistry);

  @Input() name!: string;
  @Input() formControlName!: string;
  @Input({ required: true }) value: any;
  @Input({ transform: booleanAttribute }) disabled!: boolean;

  _control!: NgControl;
  _checked!: boolean;

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

  private _checkName(): void {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      throw new Error(`
        If you define both a name and a formControlName attribute on your radio component, their values
        must match. Ex: <ult-custom-radio formControlName="food" name="food">
      `);
    }

    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
}
