import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SidebarApiService } from '../sidebar-api.service';

@Component({
  selector: 'ult-sidebar',
  exportAs: 'ultSidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  providers: [
    SidebarApiService
  ],
  host: {
    'class': 'ult-sidebar',
    '[class.is-hide-aside-if-empty]': 'hideAsideIfEmpty'
  }
})
export class SidebarComponent {
  readonly api = inject(SidebarApiService);

  @Input()
  hideAsideIfEmpty = true;

  @Input()
  set activeItemId(id: any) {
    this.api.activate(id, false);
  }

  @Output()
  get itemIdChange(): EventEmitter<any> {
    return this.api.itemIdChange;
  }
}
