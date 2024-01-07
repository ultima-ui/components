import {
  AfterViewInit,
  Component,
  DestroyRef,
  EventEmitter,
  forwardRef, HostListener,
  inject,
  Input,
  numberAttribute,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder, FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { PinInputDirective } from '../pin-input.directive';
import { InputSize } from '../../forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import e from 'express';

@Component({
  selector: 'ult-pin-input',
  exportAs: 'ultPinInput',
  templateUrl: './pin-input.component.html',
  styleUrl: './pin-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PinInputComponent),
      multi: true
    }
  ],
  host: {
    'class': 'ult-pin-input'
  }
})
export class PinInputComponent implements ControlValueAccessor, OnInit {
  private _fb = inject(FormBuilder);
  private _destroyRef = inject(DestroyRef);

  @ViewChildren(PinInputDirective)
  readonly inputs: QueryList<PinInputDirective>;

  @Input({ transform: numberAttribute })
  length = 4;

  @Input()
  size: InputSize = 'default';

  @Input()
  placeholder = '';

  @Input()
  acceptOnly = /^[0-9]+$/;

  form: FormGroup;

  get controls(): any {
    return (this.form.get('value') as FormArray).controls;
  }

  ngOnInit() {
    const inputs = [];

    for (let i = 0; i < this.length; i++) {
      inputs.push(this._fb.control('', [Validators.required]));
    }

    this.form = this._fb.group({
      value: this._fb.array(inputs)
    });
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }

  @HostListener('keydown', ['$event'])
  private _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Backspace' || event.key === 'Tab') {
      const element = event.target as HTMLInputElement;

      if (event.key === 'Backspace' && !element.value) {
        this.inputs.forEach((inputDirective, index) => {
          const element = event.target as HTMLInputElement;

          if (inputDirective.api.nativeElement === element) {
            const prevControl = this.inputs.get(index - 1);

            if (prevControl) {
              prevControl.api.focus();
            }
          }
        });
      }

      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('keyup', ['$event'])
  private _handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Backspace' || event.key === 'Tab') {
      return;
    }

    if (!event.key.match(this.acceptOnly)) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.inputs.forEach((inputDirective, index) => {
      const element = event.target as HTMLInputElement;

      if (inputDirective.api.nativeElement === element) {
        const control = this.controls[index];
        control.setValue(event.key);
        const nextControl = this.inputs.get(index + 1);

        if (nextControl) {
          nextControl.api.focus();
        }
      }
    });
  }
}
