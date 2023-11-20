import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultInputPrefix]',
  exportAs: 'ultInputPrefix',
  host: {
    'class': 'ult-input-prefix'
  }
})
export class InputPrefixDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
