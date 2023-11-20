import { Component, Input } from '@angular/core';
import { FORM_FIELD } from '../properties';

let nextId = 0;

@Component({
  selector: 'ult-form-field',
  exportAs: 'ultFormField',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  providers: [
    {
      provide: FORM_FIELD,
      useExisting: FormFieldComponent
    }
  ],
  host: {
    'class': 'ult-form-field',
    '[class.is-invalid]': 'invalid',
    '[class.is-required]': 'required',
    '[class.is-composite]': 'composite',
  }
})
export class FormFieldComponent {
  readonly id = `form-field-${nextId++}`;

  @Input() required = false;
  @Input() invalid = false;
  @Input() composite = false;
}
