import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultMenuTriggerIcon]',
  exportAs: 'ultMenuTriggerIcon',
  host: {
    'class': 'ult-menu-trigger-icon'
  }
})
export class MenuTriggerIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
