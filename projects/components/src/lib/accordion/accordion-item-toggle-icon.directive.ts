import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultAccordionItemToggleIcon]',
  exportAs: 'ultAccordionItemToggleIcon',
  host: {
    'class': 'ult-accordion-item-toggle-icon'
  }
})
export class AccordionItemToggleIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
