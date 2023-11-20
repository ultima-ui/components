import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultSelectToggleIcon]',
  exportAs: 'ultSelectToggleIcon',
  host: {
    'class': 'ult-select-toggle-icon'
  }
})
export class SelectToggleIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
