import { Directive } from '@angular/core';

@Directive({
  selector: 'ult-alert-title,[ultAlertTitle]',
  exportAs: 'ultAlertTitle',
  host: {
    'class': 'ult-alert-title'
  }
})
export class AlertTitleDirective {
}
