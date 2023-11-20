import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultNavigationItemIcon]',
  exportAs: 'ultNavigationItemIcon',
  host: {
    'class': 'ult-navigation-item-icon'
  }
})
export class NavigationItemIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
