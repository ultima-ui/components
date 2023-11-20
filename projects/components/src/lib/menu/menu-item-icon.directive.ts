import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultMenuItemIcon]',
  exportAs: 'ultMenuItemIcon',
  host: {
    'class': 'ult-menu-item-icon'
  }
})
export class MenuItemIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
