import { Component, HostListener, inject, Input } from '@angular/core';
import { SidebarApiService } from '../sidebar-api.service';
import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';
import { SIDEBAR_NAV } from '../types';

@Component({
  selector: 'ult-sidebar-item',
  exportAs: 'ultSidebarItem',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['sidebar-item.component.css'],
  host: {
    'class': 'ult-sidebar-item',
    '[class.is-active]': 'api.isActive(this.id)',
  }
})
export class SidebarItemComponent {
  readonly api = inject(SidebarApiService);
  private _nav = inject<SidebarNavComponent>(SIDEBAR_NAV, { optional: true });

  @Input()
  id: any = this._nav ? this._nav.nextId++ : null;

  @HostListener('click')
  private _handleClick() {
    this.api.activate(this.id);
  }
}
