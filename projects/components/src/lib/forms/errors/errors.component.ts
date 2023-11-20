import { Component } from '@angular/core';

@Component({
  selector: 'ult-errors',
  exportAs: 'ultErrors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css'],
  host: {
    'class': 'ult-form-field-errors'
  }
})
export class ErrorsComponent {
}
