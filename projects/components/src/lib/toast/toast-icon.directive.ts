import { Directive } from '@angular/core';

@Directive({
  selector: '[ultToastIcon]',
  exportAs: 'ultToastIcon',
  host: {
    'class': 'ult-toast-icon'
  }
})
export class ToastIconDirective {
}
