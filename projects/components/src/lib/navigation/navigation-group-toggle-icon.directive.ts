import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ultNavigationGroupToggleIcon]',
  exportAs: 'ultNavigationGroupToggleIcon',
  host: {
    'class': 'ult-navigation-group-toggle-icon'
  }
})
export class NavigationGroupToggleIconDirective {
  public readonly templateRef = inject(TemplateRef, { optional: true });
}
