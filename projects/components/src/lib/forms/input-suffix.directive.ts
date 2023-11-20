import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultInputSuffix]',
  exportAs: 'ultInputSuffix',
  host: {
    'class': 'ult-input-suffix'
  }
})
export class InputSuffixDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
