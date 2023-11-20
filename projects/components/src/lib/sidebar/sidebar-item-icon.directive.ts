import { Directive } from '@angular/core';

@Directive({
  selector: '[ultSidebarItemIcon]',
  exportAs: 'ultSidebarItemIcon',
  host: {
    'class': 'ult-sidebar-item-icon'
  }
})
export class SidebarItemIconDirective {
}
