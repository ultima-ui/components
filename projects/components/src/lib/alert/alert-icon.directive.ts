import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultAlertIcon]',
  exportAs: 'ultAlertIcon',
  host: {
    'class': 'ult-alert-icon'
  }
})
export class AlertIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
