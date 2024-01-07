import {
  AfterViewInit,
  Component, ElementRef,
  forwardRef,
  inject,
  Input,
  numberAttribute, OnChanges,
  OnInit,
  QueryList, Renderer2, SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { PinInputDirective } from '../pin-input.directive';
import { InputSize } from '../../forms';

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
export class PinInputComponent implements ControlValueAccessor, OnInit, AfterViewInit {
  private _fb = inject(FormBuilder);

  @ViewChildren(PinInputDirective)
  private _inputs: QueryList<PinInputDirective>;

  @Input({ transform: numberAttribute })
  length = 4;

  @Input()
  size: InputSize = 'default';

  @Input()
  placeholder = '';

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

  ngAfterViewInit() {
    // console.log(this._inputs);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
  }
}
