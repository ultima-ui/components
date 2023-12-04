import { Component } from '@angular/core';
import { TAB_PANEL_NAV } from '../types';

@Component({
  selector: 'ult-tab-panel-nav',
  exportAs: 'ultTabPanelNav',
  templateUrl: './tab-panel-nav.component.html',
  styleUrls: ['./tab-panel-nav.component.css'],
  providers: [
    {
      provide: TAB_PANEL_NAV,
      useExisting: TabPanelNavComponent
    }
  ],
  host: {
    'class': 'ult-tab-panel-nav'
  }
})
export class TabPanelNavComponent {
  nextId = 0;
}
