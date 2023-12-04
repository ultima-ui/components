import { booleanAttribute, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';

@Component({
  selector: 'ult-tab-panel',
  exportAs: 'ultTabPanel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['tab-panel.component.css'],
  providers: [
    TabPanelApiService
  ],
  host: {
    'class': 'ult-tab-panel',
    '[class.is-hide-content-if-tab-not-selected]': 'hideContentIfTabNotSelected'
  }
})
export class TabPanelComponent {
  readonly api = inject(TabPanelApiService);

  @Input({ transform: booleanAttribute })
  hideContentIfTabNotSelected = false;

  @Input()
  set activeItemId(id: any) {
    this.api.activate(id, false);
  }

  @Output()
  get itemIdChange(): EventEmitter<any> {
    return this.api.itemIdChange;
  }
}
