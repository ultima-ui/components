import { Directive } from '@angular/core';

@Directive({
  selector: '[ultDatePickerPrevious]',
  exportAs: 'ultDatePickerPrevious',
  host: {
    'class': 'ult-date-picker-previous'
  }
})
export class DatePickerPreviousDirective {
}
