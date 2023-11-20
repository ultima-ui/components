import { Directive } from '@angular/core';

@Directive({
  selector: '[ultDatePickerNext]',
  exportAs: 'ultDatePickerNext',
  host: {
    'class': 'ult-date-picker-next'
  }
})
export class DatePickerNextDirective {
}
