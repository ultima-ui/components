import { Component, HostListener, inject, Input } from '@angular/core';
import { TabPanelApiService } from '../tab-panel-api.service';
import { TabPanelNavComponent } from '../tab-panel-nav/tab-panel-nav.component';
import { TAB_PANEL_NAV } from '../types';

@Component({
  selector: 'ult-tab-panel-item',
  exportAs: 'ultTabPanelItem',
  templateUrl: './tab-panel-item.component.html',
  styleUrls: ['tab-panel-item.component.css'],
  host: {
    'class': 'ult-tab-panel-item',
    '[class.is-active]': 'api.isActive(this.for)',
  }
})
export class TabPanelItemComponent {
  readonly api = inject(TabPanelApiService);
  private _nav = inject<TabPanelNavComponent>(TAB_PANEL_NAV, { optional: true });

  @Input()
  for: any = this._nav ? this._nav.nextId++ : null;

  @HostListener('click')
  private _handleClick() {
    this.api.activate(this.for);
  }
}
