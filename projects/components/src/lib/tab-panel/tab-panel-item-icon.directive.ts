import { Directive } from '@angular/core';

@Directive({
  selector: '[ultTabPanelItemIcon]',
  exportAs: 'ultTabPanelItemIcon',
  host: {
    'class': 'ult-tab-panel-item-icon'
  }
})
export class TabPanelItemIconDirective {
}
