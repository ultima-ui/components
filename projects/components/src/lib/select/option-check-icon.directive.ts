import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultOptionCheckIcon]',
  exportAs: 'ultOptionCheckIcon',
  host: {
    'class': 'ult-option-check-icon'
  }
})
export class OptionCheckIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
