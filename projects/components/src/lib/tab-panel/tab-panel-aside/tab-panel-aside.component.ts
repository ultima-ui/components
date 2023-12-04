import { Component } from '@angular/core';
import { TAB_PANEL_ASIDE } from '../types';

@Component({
  selector: 'ult-tab-panel-aside',
  exportAs: 'ultTabPanelAside',
  templateUrl: './tab-panel-aside.component.html',
  styleUrls: ['./tab-panel-aside.component.css'],
  providers: [
    {
      provide: TAB_PANEL_ASIDE,
      useExisting: TabPanelAsideComponent
    }
  ],
  host: {
    'class': 'ult-tab-panel-aside'
  }
})
export class TabPanelAsideComponent {
  nextId = 0;
}
