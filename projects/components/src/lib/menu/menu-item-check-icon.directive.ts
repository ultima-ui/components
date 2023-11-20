import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultMenuItemCheckIcon]',
  exportAs: 'ultMenuItemCheckIcon',
  host: {
    'class': 'ult-menu-item-check-icon'
  }
})
export class MenuItemCheckIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
