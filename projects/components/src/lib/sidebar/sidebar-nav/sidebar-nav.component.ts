import { Component } from '@angular/core';
import { SIDEBAR_NAV } from '../types';

@Component({
  selector: 'ult-sidebar-nav',
  exportAs: 'ultSidebarNav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.css'],
  providers: [
    {
      provide: SIDEBAR_NAV,
      useExisting: SidebarNavComponent
    }
  ],
  host: {
    'class': 'ult-sidebar-nav'
  }
})
export class SidebarNavComponent {
  nextId = 0;
}
